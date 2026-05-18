// care-plus-exames.jsx — J4 Exames em casa (9 telas) + J5 Vacinas em casa (7 telas)

// ─── SHARED FLOW SCREENS (reused by J4 + J5) ────────────────────────────────

function SharedEnderecoScreen({ ctx, nextScreen, title }) {
  const [addr, setAddr] = React.useState('');
  const suggestions = ['Av. Paulista, 1000 – Bela Vista, SP', 'R. Augusta, 450 – Consolação, SP', 'Al. Santos, 200 – Jardins, SP'];
  return (
    <FlowScreen title={title || 'Endereço'} onBack={ctx.goBack}
      foot={<PrimaryBtn onClick={() => ctx.navigate(nextScreen)} disabled={!addr}>Confirmar endereço</PrimaryBtn>}>
      <InputField label="CEP ou endereço" placeholder="Digite o CEP ou rua…" value={addr} onChange={e => setAddr(e.target.value)} />
      {addr.length > 0 && (
        <div style={{ backgroundColor: CP.white, border: `1px solid ${CP.border}`, borderRadius: 8, overflow: 'hidden', marginTop: -6, marginBottom: 16 }}>
          {suggestions.map((s, i) => (
            <button key={i} onClick={() => setAddr(s)} style={{ width: '100%', padding: '12px 14px', background: 'none', border: 'none', borderBottom: i < suggestions.length - 1 ? `1px solid ${CP.border}` : 'none', cursor: 'pointer', textAlign: 'left', fontSize: 13, color: CP.text, display: 'flex', gap: 8, alignItems: 'center' }}>
              <span style={{ flexShrink: 0 }}><IcLocation /></span>{s}
            </button>
          ))}
        </div>
      )}
      <div style={{ backgroundColor: CP.warmGrey, borderRadius: 10, padding: 14, marginTop: 8 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: CP.textMid, marginBottom: 6 }}>Cobertura disponível</div>
        <div style={{ fontSize: 12, color: CP.textLight, lineHeight: 1.4 }}>São Paulo capital e Grande SP. Para outras regiões, entre em contato com nossa central.</div>
      </div>
    </FlowScreen>
  );
}

function SharedDataScreen({ ctx, nextScreen, title }) {
  const [date, setDate] = React.useState('');
  const [time, setTime] = React.useState('');
  const slots = ['07:00', '08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];
  return (
    <FlowScreen title={title || 'Data e horário'} onBack={ctx.goBack}
      foot={<PrimaryBtn onClick={() => ctx.navigate(nextScreen)} disabled={!date || !time}>Confirmar horário</PrimaryBtn>}>
      <InputField label="Data" placeholder="DD/MM/AAAA" value={date} onChange={e => setDate(e.target.value)} type="date" />
      <div style={{ marginBottom: 14 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: CP.textMid, marginBottom: 10 }}>Horário disponível</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {slots.map(s => (
            <button key={s} onClick={() => setTime(s)}
              style={{ padding: '9px 14px', borderRadius: 8, border: `1.5px solid ${time === s ? CP.primary : CP.border}`, backgroundColor: time === s ? CP.lightBlue : CP.white, color: time === s ? CP.primary : CP.textMid, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
              {s}
            </button>
          ))}
        </div>
      </div>
    </FlowScreen>
  );
}

function SharedBeneficiarioScreen({ ctx, nextScreen, title }) {
  const [name, setName] = React.useState(getUserFullName());
  const [cpf, setCpf] = React.useState('');
  const [birth, setBirth] = React.useState('');
  return (
    <FlowScreen title={title || 'Dados do beneficiário'} onBack={ctx.goBack}
      foot={<PrimaryBtn onClick={() => ctx.navigate(nextScreen)}>Continuar</PrimaryBtn>}>
      <InputField label="Nome completo" placeholder="Nome do beneficiário" value={name} onChange={e => setName(e.target.value)} />
      <InputField label="CPF" placeholder="000.000.000-00" value={cpf} onChange={e => setCpf(e.target.value)} />
      <InputField label="Data de nascimento" placeholder="DD/MM/AAAA" value={birth} onChange={e => setBirth(e.target.value)} type="date" />
      <SelectField label="Parentesco" value="titular"
        options={[{ value: 'titular', label: 'Titular' }, { value: 'conjuge', label: 'Cônjuge' }, { value: 'filho', label: 'Filho(a)' }, { value: 'outro', label: 'Outro dependente' }]}
        onChange={() => {}} />
    </FlowScreen>
  );
}

function SharedConfirmacaoScreen({ ctx, type }) {
  const isExame = type === 'exame';
  return (
    <FlowScreen title="Confirmação" onBack={() => ctx.navigate('blua')}
      foot={<PrimaryBtn onClick={() => ctx.navigate('blua')}>Voltar ao início</PrimaryBtn>}>
      <div style={{ textAlign: 'center', padding: '24px 0' }}>
        <div style={{ width: 72, height: 72, borderRadius: '50%', backgroundColor: '#e8f8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
          <IcCheck size={36} color={CP.success} />
        </div>
        <div style={{ fontSize: 20, fontWeight: 700, color: CP.success, marginBottom: 8 }}>{isExame ? 'Exame agendado!' : 'Vacinação agendada!'}</div>
        <div style={{ fontSize: 14, color: CP.textMid, lineHeight: 1.5 }}>Você receberá uma confirmação por e-mail e SMS.</div>
      </div>
      <div style={{ backgroundColor: CP.warmGrey, borderRadius: 12, padding: 16 }}>
        {[
          ['Beneficiário', getUserFullName()],
          ['Data', '15/05/2026'],
          ['Horário', '09:00'],
          ['Endereço', 'Av. Paulista, 1000 – Bela Vista, SP'],
          [isExame ? 'Exame' : 'Vacina', isExame ? 'Hemograma completo' : 'Gripe (influenza)'],
          ['Copay', 'Sem coparticipação'],
        ].map(([k, v]) => (
          <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: `1px solid ${CP.border}` }}>
            <span style={{ fontSize: 13, color: CP.textLight }}>{k}</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: CP.text, textAlign: 'right', maxWidth: '60%' }}>{v}</span>
          </div>
        ))}
      </div>
    </FlowScreen>
  );
}

// ─── J4: EXAMES EM CASA ───────────────────────────────────────────────────────

function ExamesScreen1({ ctx }) {
  return (
    <FlowScreen title="Exames em casa" onBack={ctx.goBack}
      foot={<PrimaryBtn onClick={() => ctx.navigate('exames-2')}>Agendar exame</PrimaryBtn>}>
      <IlloPlaceholder label="ilustração — coleta domiciliar" height={160} bg="#fdf4e8" />
      <div style={{ marginTop: 20 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: CP.text, marginBottom: 8 }}>Coleta em casa</div>
        <div style={{ fontSize: 14, color: CP.textMid, lineHeight: 1.6, marginBottom: 16 }}>Análises clínicas realizadas no conforto da sua casa por profissional especializado. <strong>Sem coparticipação.</strong></div>
        {[['🕐', 'Agendamento em minutos'], ['🏠', 'Coleta domiciliar'], ['💊', 'Resultado digital seguro']].map(([ic, t]) => (
          <div key={t} style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
            <span style={{ fontSize: 20 }}>{ic}</span>
            <span style={{ fontSize: 14, color: CP.text, fontWeight: 600 }}>{t}</span>
          </div>
        ))}
      </div>
    </FlowScreen>
  );
}

function ExamesScreen2({ ctx }) {
  const [selected, setSelected] = React.useState(null);
  const tipos = [{ id: 'clinico', label: 'Exames clínicos', desc: 'Hemograma, glicemia, colesterol e outros' }, { id: 'hormonal', label: 'Exames hormonais', desc: 'TSH, T4, hormônios sexuais e outros' }, { id: 'imuno', label: 'Imunologia', desc: 'Alergias, anticorpos, sorologias' }, { id: 'urina', label: 'Urina e fezes', desc: 'EAS, parasitológico, culturas' }];
  return (
    <FlowScreen title="Tipo de exame" onBack={ctx.goBack}
      foot={<PrimaryBtn onClick={() => ctx.navigate('exames-3')} disabled={!selected}>Continuar</PrimaryBtn>}>
      <div style={{ fontSize: 14, color: CP.textMid, marginBottom: 16 }}>Selecione a categoria de exame:</div>
      {tipos.map(t => (
        <button key={t.id} onClick={() => setSelected(t.id)}
          style={{ width: '100%', padding: 14, marginBottom: 10, borderRadius: 10, border: `2px solid ${selected === t.id ? CP.primary : CP.border}`, backgroundColor: selected === t.id ? CP.lightBlue : CP.white, cursor: 'pointer', textAlign: 'left', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: CP.text, marginBottom: 3 }}>{t.label}</div>
            <div style={{ fontSize: 12, color: CP.textLight }}>{t.desc}</div>
          </div>
          {selected === t.id && <IcCheck color={CP.primary} />}
        </button>
      ))}
    </FlowScreen>
  );
}

function ExamesScreen3({ ctx }) {
  return <SharedEnderecoScreen ctx={ctx} nextScreen="exames-4" title="Endereço de coleta" />;
}

function ExamesScreen4({ ctx }) {
  return <SharedDataScreen ctx={ctx} nextScreen="exames-5" title="Data e horário" />;
}

function ExamesScreen5({ ctx }) {
  return <SharedBeneficiarioScreen ctx={ctx} nextScreen="exames-6" title="Dados do beneficiário" />;
}

function ExamesScreen6({ ctx }) {
  const [selected, setSelected] = React.useState([]);
  const exames = ['Hemograma completo', 'Glicemia em jejum', 'Colesterol total e frações', 'TSH / T4 livre', 'Creatinina e ureia', 'TGO / TGP (transaminases)', 'Ácido úrico', 'Vitamina D'];
  const toggle = (e) => setSelected(prev => prev.includes(e) ? prev.filter(x => x !== e) : [...prev, e]);
  return (
    <FlowScreen title="Selecionar exames" onBack={ctx.goBack}
      foot={<PrimaryBtn onClick={() => ctx.navigate('exames-7')} disabled={selected.length === 0}>Continuar ({selected.length} selecionado{selected.length !== 1 ? 's' : ''})</PrimaryBtn>}>
      <div style={{ fontSize: 13, color: CP.textLight, marginBottom: 14 }}>Selecione um ou mais exames:</div>
      {exames.map((e, i) => (
        <button key={i} onClick={() => toggle(e)}
          style={{ width: '100%', padding: '13px 14px', marginBottom: 8, borderRadius: 8, border: `1.5px solid ${selected.includes(e) ? CP.primary : CP.border}`, backgroundColor: selected.includes(e) ? CP.lightBlue : CP.white, cursor: 'pointer', textAlign: 'left', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 14, fontWeight: selected.includes(e) ? 700 : 500, color: CP.text }}>{e}</span>
          {selected.includes(e) && <IcCheck color={CP.primary} />}
        </button>
      ))}
    </FlowScreen>
  );
}

function ExamesScreen7({ ctx }) {
  return (
    <FlowScreen title="Revisão do pedido" onBack={ctx.goBack}
      foot={<PrimaryBtn onClick={() => ctx.navigate('exames-8')}>Confirmar agendamento</PrimaryBtn>}>
      <div style={{ fontSize: 14, color: CP.textMid, marginBottom: 16 }}>Confira os dados antes de confirmar:</div>
      {[['Beneficiário', getUserFullName()], ['Tipo', 'Exames clínicos'], ['Exames', 'Hemograma completo, Glicemia, Colesterol'], ['Endereço', 'Av. Paulista, 1000 – Bela Vista, SP'], ['Data', '15/05/2026'], ['Horário', '09:00'], ['Copay', 'Sem coparticipação ✓']].map(([k, v]) => (
        <div key={k} style={{ padding: '11px 0', borderBottom: `1px solid ${CP.border}`, display: 'flex', flexDirection: 'column', gap: 3 }}>
          <span style={{ fontSize: 12, color: CP.textLight }}>{k}</span>
          <span style={{ fontSize: 14, fontWeight: 600, color: CP.text }}>{v}</span>
        </div>
      ))}
    </FlowScreen>
  );
}

function ExamesScreen8({ ctx }) {
  React.useEffect(() => { const t = setTimeout(() => ctx.navigate('exames-9'), 2200); return () => clearTimeout(t); }, []);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', alignItems: 'center', justifyContent: 'center', padding: 32, gap: 20 }}>
      <div style={{ width: 64, height: 64, borderRadius: '50%', border: `4px solid ${CP.primary}`, borderTopColor: 'transparent', animation: 'spin 0.8s linear infinite' }} />
      <div style={{ fontSize: 16, fontWeight: 700, color: CP.text }}>Processando agendamento…</div>
      <div style={{ fontSize: 13, color: CP.textLight, textAlign: 'center' }}>Aguarde enquanto confirmamos seu horário</div>
    </div>
  );
}

function ExamesScreen9({ ctx }) {
  React.useEffect(() => {
    const t = setTimeout(() => window.__showToast('Exame em casa agendado 🔬', 250), 600);
    return () => clearTimeout(t);
  }, []);
  return <SharedConfirmacaoScreen ctx={ctx} type="exame" />;
}

// ─── J5: VACINAS EM CASA ──────────────────────────────────────────────────────

function VacinasScreen1({ ctx }) {
  return (
    <FlowScreen title="Vacinas em casa" onBack={ctx.goBack}
      foot={<PrimaryBtn onClick={() => ctx.navigate('vacinas-2')}>Ver vacinas disponíveis</PrimaryBtn>}>
      <IlloPlaceholder label="ilustração — vacinação domiciliar" height={160} bg="#fde8e8" />
      <div style={{ marginTop: 20 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: CP.text, marginBottom: 8 }}>Vacinação em casa</div>
        <div style={{ fontSize: 14, color: CP.textMid, lineHeight: 1.6 }}>Profissional de saúde vai até você para aplicar as vacinas do seu calendário. Comodidade e segurança para toda a família.</div>
      </div>
    </FlowScreen>
  );
}

function VacinasScreen2({ ctx }) {
  const vacinas = [
    { nome: 'Gripe (Influenza)', dose: 'Dose única anual', disponivel: true },
    { nome: 'COVID-19 (Bivalente)', dose: 'Reforço', disponivel: true },
    { nome: 'Tétano e difteria (dT)', dose: 'Reforço a cada 10 anos', disponivel: true },
    { nome: 'Hepatite B', dose: 'Esquema 3 doses', disponivel: true },
    { nome: 'HPV', dose: 'Esquema 3 doses', disponivel: false },
    { nome: 'Febre amarela', dose: 'Dose única', disponivel: true },
  ];
  return (
    <FlowScreen title="Vacinas disponíveis" onBack={ctx.goBack}>
      {vacinas.map((v, i) => (
        <button key={i} onClick={() => v.disponivel ? ctx.navigate('vacinas-3') : null}
          style={{ width: '100%', padding: 14, marginBottom: 10, borderRadius: 10, border: `1px solid ${CP.border}`, backgroundColor: v.disponivel ? CP.white : CP.lightBg, cursor: v.disponivel ? 'pointer' : 'default', textAlign: 'left', display: 'flex', alignItems: 'center', justifyContent: 'space-between', opacity: v.disponivel ? 1 : 0.55 }}>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: CP.text, marginBottom: 3 }}>{v.nome}</div>
            <div style={{ fontSize: 12, color: CP.textLight }}>{v.dose}</div>
          </div>
          {v.disponivel ? <IcChevron /> : <span style={{ fontSize: 11, color: CP.textLight }}>Indisponível</span>}
        </button>
      ))}
    </FlowScreen>
  );
}

function VacinasScreen3({ ctx }) {
  return (
    <FlowScreen title="Gripe (Influenza)" onBack={ctx.goBack}
      foot={<PrimaryBtn onClick={() => ctx.navigate('vacinas-4')}>Agendar esta vacina</PrimaryBtn>}>
      <div style={{ backgroundColor: CP.lightBlue, borderRadius: 10, padding: 14, marginBottom: 16 }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: CP.text, marginBottom: 6 }}>Gripe — Influenza Trivalente</div>
        <div style={{ fontSize: 13, color: CP.textMid, lineHeight: 1.5 }}>Proteção contra os principais vírus influenza da temporada. Recomendada anualmente.</div>
      </div>
      {[['Via de administração', 'Intramuscular (IM)'], ['Faixa etária', 'A partir de 6 meses'], ['Esquema', 'Dose única anual'], ['Copay', 'Sem coparticipação']].map(([k, v]) => (
        <div key={k} style={{ padding: '10px 0', borderBottom: `1px solid ${CP.border}`, display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 13, color: CP.textLight }}>{k}</span>
          <span style={{ fontSize: 13, fontWeight: 600, color: CP.text }}>{v}</span>
        </div>
      ))}
    </FlowScreen>
  );
}

function VacinasScreen4({ ctx }) {
  return <SharedEnderecoScreen ctx={ctx} nextScreen="vacinas-5" title="Endereço de vacinação" />;
}

function VacinasScreen5({ ctx }) {
  return <SharedDataScreen ctx={ctx} nextScreen="vacinas-6" title="Data e horário" />;
}

function VacinasScreen6({ ctx }) {
  // ⚠ UX PROBLEM: Botão de confirmação escondido pelo scroll — usuário precisa rolar para ver
  const [name, setName] = React.useState(getUserFullName());
  const [cpf, setCpf] = React.useState('');
  const [birth, setBirth] = React.useState('');
  const [alergias, setAlergias] = React.useState('');
  const [medicamentos, setMedicamentos] = React.useState('');
  return (
    <FlowScreen title="Dados do beneficiário" onBack={ctx.goBack}
      foot={
        /* ⚠ Este botão está dentro do foot (fixo), mas originalmente fica ABAIXO do scroll e fica oculto */
        <PrimaryBtn onClick={() => ctx.navigate('vacinas-7')}>Confirmar vacinação</PrimaryBtn>
      }>
      <InputField label="Nome completo" value={name} onChange={e => setName(e.target.value)} placeholder="Nome do beneficiário" />
      <InputField label="CPF" value={cpf} onChange={e => setCpf(e.target.value)} placeholder="000.000.000-00" />
      <InputField label="Data de nascimento" value={birth} onChange={e => setBirth(e.target.value)} type="date" />
      <SelectField label="Parentesco" value="titular" options={[{ value: 'titular', label: 'Titular' }, { value: 'conjuge', label: 'Cônjuge' }, { value: 'filho', label: 'Filho(a)' }]} onChange={() => {}} />
      <InputField label="Alergias conhecidas" value={alergias} onChange={e => setAlergias(e.target.value)} placeholder="Informe alergias (opcional)" />
      <InputField label="Medicamentos em uso" value={medicamentos} onChange={e => setMedicamentos(e.target.value)} placeholder="Informe medicamentos (opcional)" />
      {/* ⚠ Muitos campos — botão de confirmar fica fora da área visível sem scroll */}
      <div style={{ height: 80, backgroundColor: '#fff8e1', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px dashed ${CP.warning}`, marginTop: 8 }}>
        <span style={{ fontSize: 11, color: CP.warning, textAlign: 'center', padding: 8 }}>⚠️ Botão "Confirmar" abaixo — oculto sem rolar a tela</span>
      </div>
    </FlowScreen>
  );
}

function VacinasScreen7({ ctx }) {
  React.useEffect(() => {
    const t = setTimeout(() => window.__showToast('Vacinação em casa agendada 💉', 150), 600);
    return () => clearTimeout(t);
  }, []);
  return <SharedConfirmacaoScreen ctx={ctx} type="vacina" />;
}

Object.assign(window, {
  SharedEnderecoScreen, SharedDataScreen, SharedBeneficiarioScreen, SharedConfirmacaoScreen,
  ExamesScreen1, ExamesScreen2, ExamesScreen3, ExamesScreen4, ExamesScreen5,
  ExamesScreen6, ExamesScreen7, ExamesScreen8, ExamesScreen9,
  VacinasScreen1, VacinasScreen2, VacinasScreen3, VacinasScreen4,
  VacinasScreen5, VacinasScreen6, VacinasScreen7,
});
