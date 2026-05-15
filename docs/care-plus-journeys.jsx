// care-plus-journeys.jsx — J6 Consulta presencial · J7 Personal · J8 Mental · J9 Movimente · J10 Empresa

// ─── J6: CONSULTA PRESENCIAL ──────────────────────────────────────────────────

function ConsultaScreen1({ ctx }) {
  return (
    <FlowScreen title="Consulta presencial" onBack={ctx.goBack}
      foot={<PrimaryBtn onClick={() => ctx.navigate('consulta-2')}>Agendar consulta</PrimaryBtn>}>
      <IlloPlaceholder label="ilustração — consulta médica presencial" height={160} bg="#e8edf8" />
      <div style={{ marginTop: 20 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: CP.text, marginBottom: 8 }}>Agendar consulta</div>
        <div style={{ fontSize: 14, color: CP.textMid, lineHeight: 1.6 }}>Encontre especialistas credenciados perto de você e agende sua consulta presencial de forma rápida.</div>
      </div>
    </FlowScreen>
  );
}

function ConsultaScreen2({ ctx }) {
  const [busca, setBusca] = React.useState('');
  const especialidades = ['Cardiologia', 'Dermatologia', 'Ortopedia', 'Ginecologia', 'Oftalmologia', 'Endocrinologia', 'Neurologia', 'Psiquiatria', 'Odontologia', 'Pediatria'];
  const filtradas = busca ? especialidades.filter(e => e.toLowerCase().includes(busca.toLowerCase())) : especialidades;
  return (
    <FlowScreen title="Especialidade" onBack={ctx.goBack} noPad>
      <div style={{ padding: '12px 16px 0' }}>
        <div style={{ backgroundColor: CP.lightBg, borderRadius: 24, padding: '9px 14px', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
          <span style={{ color: CP.textLight }}><IcSearch /></span>
          <input value={busca} onChange={e => setBusca(e.target.value)} placeholder="Buscar especialidade…"
            style={{ border: 'none', background: 'none', outline: 'none', fontSize: 14, flex: 1, fontFamily: 'inherit', color: CP.text }} />
        </div>
      </div>
      <div>
        {filtradas.map((e, i) => (
          <ListRow key={i} label={e} onClick={() => ctx.navigate('consulta-3')} noBorder={i === filtradas.length - 1} />
        ))}
      </div>
    </FlowScreen>
  );
}

function ConsultaScreen3({ ctx }) {
  const medicos = [
    { nome: 'Dr. Ricardo Almeida', crm: 'CRM 12345 – SP', nota: '4.8', espera: '3 dias' },
    { nome: 'Dra. Fernanda Costa', crm: 'CRM 54321 – SP', nota: '4.9', espera: '5 dias' },
    { nome: 'Dr. Marcos Pereira', crm: 'CRM 67890 – SP', nota: '4.7', espera: '1 semana' },
  ];
  return (
    <FlowScreen title="Selecionar médico" onBack={ctx.goBack}>
      {medicos.map((m, i) => (
        <button key={i} onClick={() => ctx.navigate('consulta-4')}
          style={{ width: '100%', padding: 14, marginBottom: 10, borderRadius: 10, border: `1px solid ${CP.border}`, backgroundColor: CP.white, cursor: 'pointer', textAlign: 'left', display: 'flex', gap: 12, alignItems: 'center' }}>
          <div style={{ width: 48, height: 48, borderRadius: '50%', backgroundColor: CP.lightBlue, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 20 }}>👨‍⚕️</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: CP.text, marginBottom: 2 }}>{m.nome}</div>
            <div style={{ fontSize: 12, color: CP.textLight, marginBottom: 4 }}>{m.crm}</div>
            <div style={{ display: 'flex', gap: 10 }}>
              <span style={{ fontSize: 11, color: CP.warning }}>★ {m.nota}</span>
              <span style={{ fontSize: 11, color: CP.textLight }}>Próxima vaga: {m.espera}</span>
            </div>
          </div>
          <IcChevron />
        </button>
      ))}
    </FlowScreen>
  );
}

function ConsultaScreen4({ ctx }) {
  return <SharedDataScreen ctx={ctx} nextScreen="consulta-5" title="Escolher data" />;
}

function ConsultaScreen5({ ctx }) {
  React.useEffect(() => {
    const t = setTimeout(() => window.__showToast('Consulta agendada 🦷', 250), 600);
    return () => clearTimeout(t);
  }, []);
  return (
    <FlowScreen title="Confirmação" onBack={ctx.goBack}
      foot={<PrimaryBtn onClick={() => ctx.navigate('blua')}>Confirmar consulta</PrimaryBtn>}>
      <div style={{ textAlign: 'center', padding: '20px 0 16px' }}>
        <div style={{ width: 64, height: 64, borderRadius: '50%', backgroundColor: '#e8f8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
          <IcCheck size={32} color={CP.success} />
        </div>
        <div style={{ fontSize: 18, fontWeight: 700, color: CP.text, marginBottom: 4 }}>Consulta agendada!</div>
      </div>
      <div style={{ backgroundColor: CP.warmGrey, borderRadius: 12, padding: 16 }}>
        {[['Médico', 'Dr. Ricardo Almeida'], ['Especialidade', 'Cardiologia'], ['Data', '15/05/2026'], ['Horário', '09:00'], ['Local', 'Clínica Preston – Al. Santos, 200']].map(([k, v]) => (
          <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: `1px solid ${CP.border}` }}>
            <span style={{ fontSize: 13, color: CP.textLight }}>{k}</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: CP.text, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
          </div>
        ))}
      </div>
    </FlowScreen>
  );
}

// ─── J7: PERSONAL SYSTEM ─────────────────────────────────────────────────────

function PersonalScreen1({ ctx }) {
  return (
    <FlowScreen title="Personal System" onBack={ctx.goBack}
      foot={<PrimaryBtn onClick={() => {}}>Solicitar consultora</PrimaryBtn>}>
      <IlloPlaceholder label="ilustração — consultora de saúde pessoal" height={170} bg="#fef9e8" />
      <div style={{ marginTop: 20 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: CP.text, marginBottom: 8 }}>Assistente pessoal de saúde</div>
        <div style={{ fontSize: 14, color: CP.textMid, lineHeight: 1.6, marginBottom: 16 }}>Uma consultora dedicada para orientar você em todas as suas necessidades de saúde, do agendamento ao acompanhamento de tratamentos.</div>
        {['Atendimento exclusivo e personalizado', 'Acompanhamento contínuo', 'Suporte para toda a família'].map((f, i) => (
          <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 12 }}>
            <IcCheck color={CP.primary} />
            <span style={{ fontSize: 14, color: CP.text }}>{f}</span>
          </div>
        ))}
      </div>
    </FlowScreen>
  );
}

// ─── J8: SAÚDE MENTAL ────────────────────────────────────────────────────────

function MentalScreen1({ ctx }) {
  return (
    <FlowScreen title="Saúde mental" onBack={ctx.goBack}
      foot={<PrimaryBtn onClick={() => ctx.navigate('mental-2')}>Saiba mais</PrimaryBtn>}>
      <IlloPlaceholder label="ilustração — saúde mental e bem-estar emocional" height={170} bg="#f8e8fd" />
      <div style={{ marginTop: 20 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: CP.text, marginBottom: 8 }}>Saúde mental</div>
        <div style={{ fontSize: 14, color: CP.textMid, lineHeight: 1.6 }}>Cuide do seu equilíbrio emocional com suporte de profissionais de saúde mental especializados.</div>
      </div>
    </FlowScreen>
  );
}

function MentalScreen2({ ctx }) {
  return (
    <FlowScreen title="Programa de saúde mental" onBack={ctx.goBack}
      foot={<PrimaryBtn onClick={() => ctx.navigate('mental-3')}>Acessar agora</PrimaryBtn>}>
      <div style={{ fontSize: 15, fontWeight: 700, color: CP.text, marginBottom: 14 }}>O que oferecemos</div>
      {[['🧠', 'Psicologia', 'Sessões com psicólogos credenciados, presencial e online'], ['💊', 'Psiquiatria', 'Consultas psiquiátricas para avaliação e acompanhamento medicamentoso'], ['🧘', 'Mindfulness', 'Programas de meditação e técnicas de relaxamento'], ['📱', 'App de bem-estar', 'Ferramentas digitais de acompanhamento emocional']].map(([ic, titulo, desc]) => (
        <div key={titulo} style={{ display: 'flex', gap: 12, marginBottom: 16, padding: 14, backgroundColor: CP.warmGrey, borderRadius: 10 }}>
          <span style={{ fontSize: 24, flexShrink: 0 }}>{ic}</span>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: CP.text, marginBottom: 4 }}>{titulo}</div>
            <div style={{ fontSize: 12, color: CP.textLight, lineHeight: 1.4 }}>{desc}</div>
          </div>
        </div>
      ))}
    </FlowScreen>
  );
}

function MentalScreen3({ ctx }) {
  return (
    <FlowScreen title="Agendar atendimento" onBack={ctx.goBack}
      foot={<PrimaryBtn onClick={() => ctx.navigate('blua')}>Confirmar</PrimaryBtn>}>
      <SelectField label="Tipo de atendimento" value="psicologia"
        options={[{ value: 'psicologia', label: 'Psicologia' }, { value: 'psiquiatria', label: 'Psiquiatria' }]} onChange={() => {}} />
      <SelectField label="Modalidade" value="online"
        options={[{ value: 'online', label: 'Online (teleconsulta)' }, { value: 'presencial', label: 'Presencial' }]} onChange={() => {}} />
      <InputField label="Prefere período" placeholder="Manhã / Tarde / Noite" />
      <div style={{ padding: 12, backgroundColor: CP.lightBlue, borderRadius: 8 }}>
        <div style={{ fontSize: 12, color: CP.textMid, lineHeight: 1.5 }}>ℹ️ Um de nossos coordenadores entrará em contato em até 24h para confirmar o agendamento.</div>
      </div>
    </FlowScreen>
  );
}

// ─── J9: MOVIMENTE-SE ────────────────────────────────────────────────────────

function MovimenteScreen1({ ctx }) {
  return (
    <FlowScreen title="Movimente-se" onBack={ctx.goBack}
      foot={<PrimaryBtn onClick={() => ctx.navigate('movimente-2')}>Ver atividades</PrimaryBtn>}>
      <IlloPlaceholder label="ilustração — atividade física e bem-estar" height={160} bg="#e8fdf0" />
      <div style={{ marginTop: 20 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: CP.text, marginBottom: 8 }}>Movimente-se</div>
        <div style={{ fontSize: 14, color: CP.textMid, lineHeight: 1.6, marginBottom: 12 }}>Desafios de atividade física e bem-estar para você cuidar da saúde de forma divertida.</div>
        <div style={{ padding: 10, backgroundColor: '#fff3cd', borderRadius: 8, borderLeft: `3px solid ${CP.warning}` }}>
          <div style={{ fontSize: 12, color: '#856404' }}>⚠️ Sem rastreamento de progresso e sem integração com wearable nesta versão.</div>
        </div>
      </div>
    </FlowScreen>
  );
}

function MovimenteScreen2({ ctx }) {
  const atividades = [
    { titulo: 'Caminhada 30 min', nivel: 'Iniciante', tipo: 'Cardio', duracao: '30 min' },
    { titulo: 'Yoga matinal', nivel: 'Todos', tipo: 'Flexibilidade', duracao: '20 min' },
    { titulo: 'HIIT rápido', nivel: 'Intermediário', tipo: 'Força', duracao: '15 min' },
    { titulo: 'Alongamento noturno', nivel: 'Todos', tipo: 'Relaxamento', duracao: '10 min' },
    { titulo: 'Corrida leve', nivel: 'Intermediário', tipo: 'Cardio', duracao: '40 min' },
  ];
  return (
    <FlowScreen title="Atividades disponíveis" onBack={ctx.goBack}>
      {atividades.map((a, i) => (
        <button key={i} onClick={() => ctx.navigate('movimente-3')}
          style={{ width: '100%', padding: 14, marginBottom: 10, borderRadius: 10, border: `1px solid ${CP.border}`, backgroundColor: CP.white, cursor: 'pointer', textAlign: 'left', display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 44, height: 44, borderRadius: 10, backgroundColor: '#e8fdf0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>
            {a.tipo === 'Cardio' ? '🏃' : a.tipo === 'Força' ? '💪' : a.tipo === 'Flexibilidade' ? '🧘' : '✨'}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: CP.text, marginBottom: 3 }}>{a.titulo}</div>
            <div style={{ display: 'flex', gap: 8 }}>
              <span style={{ fontSize: 11, backgroundColor: CP.lightBg, color: CP.textMid, padding: '2px 7px', borderRadius: 20 }}>{a.nivel}</span>
              <span style={{ fontSize: 11, color: CP.textLight }}>{a.duracao}</span>
            </div>
          </div>
          <IcChevron />
        </button>
      ))}
    </FlowScreen>
  );
}

function MovimenteScreen3({ ctx }) {
  return (
    <FlowScreen title="Yoga matinal" onBack={ctx.goBack}
      foot={<PrimaryBtn onClick={() => ctx.navigate('movimente-4')}>Iniciar atividade</PrimaryBtn>}>
      <div style={{ backgroundColor: CP.lightBlue, borderRadius: 10, padding: 14, marginBottom: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
          <span style={{ fontSize: 15, fontWeight: 700, color: CP.text }}>Yoga matinal</span>
          <span style={{ fontSize: 13, color: CP.primary, fontWeight: 700 }}>20 min</span>
        </div>
        <div style={{ fontSize: 13, color: CP.textMid, lineHeight: 1.4 }}>Série de posturas para despertar o corpo com suavidade. Ideal para começar o dia com equilíbrio.</div>
      </div>
      {[['Nível', 'Todos os níveis'], ['Equipamento', 'Tapete de yoga (opcional)'], ['Local', 'Em casa ou ao ar livre'], ['Benefícios', 'Flexibilidade, equilíbrio e concentração']].map(([k, v]) => (
        <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: `1px solid ${CP.border}` }}>
          <span style={{ fontSize: 13, color: CP.textLight }}>{k}</span>
          <span style={{ fontSize: 13, fontWeight: 600, color: CP.text }}>{v}</span>
        </div>
      ))}
      <div style={{ marginTop: 14, padding: 12, backgroundColor: '#fff3cd', borderRadius: 8 }}>
        <div style={{ fontSize: 12, color: '#856404' }}>⚠️ Sem rastreamento de progresso — atividades realizadas não são registradas nesta versão.</div>
      </div>
    </FlowScreen>
  );
}

function MovimenteScreen4({ ctx }) {
  return (
    <FlowScreen title="Yoga matinal" onBack={ctx.goBack} noPad>
      <div style={{ backgroundColor: '#1a1a2e', height: 220, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 12 }}>
        <span style={{ fontSize: 48 }}>🧘</span>
        <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>vídeo / instrução da atividade</span>
      </div>
      <div style={{ padding: 16 }}>
        <div style={{ fontSize: 16, fontWeight: 700, color: CP.text, marginBottom: 12 }}>Sequência de posturas</div>
        {['Postura da montanha (Tadasana) — 1 min', 'Cachorro olhando para baixo (Adho Mukha) — 1 min', 'Postura da criança (Balasana) — 2 min', 'Guerreiro I (Virabhadrasana) — 1 min/lado'].map((p, i) => (
          <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 12 }}>
            <div style={{ width: 22, height: 22, borderRadius: '50%', backgroundColor: CP.lightBlue, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: CP.primary, fontWeight: 700, flexShrink: 0 }}>{i+1}</div>
            <span style={{ fontSize: 13, color: CP.text, lineHeight: 1.4 }}>{p}</span>
          </div>
        ))}
      </div>
    </FlowScreen>
  );
}

// ─── J10: SAÚDE NA EMPRESA ────────────────────────────────────────────────────

function EmpresaScreen1({ ctx }) {
  return (
    <FlowScreen title="Saúde na empresa" onBack={ctx.goBack}
      foot={<PrimaryBtn onClick={() => ctx.navigate('empresa-2')}>Ver programas</PrimaryBtn>}>
      <IlloPlaceholder label="ilustração — programas corporativos de saúde" height={160} bg="#e8f0fd" />
      <div style={{ marginTop: 20 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: CP.text, marginBottom: 8 }}>Saúde na empresa</div>
        <div style={{ fontSize: 14, color: CP.textMid, lineHeight: 1.6 }}>Programas corporativos de saúde coletiva desenhados para o RH e equipes de gestão de pessoas.</div>
      </div>
    </FlowScreen>
  );
}

function EmpresaScreen2({ ctx }) {
  const programas = [
    { titulo: 'Check-up corporativo', desc: 'Exames preventivos para toda a equipe', icon: '🔬' },
    { titulo: 'Saúde mental no trabalho', desc: 'Suporte psicológico e prevenção do burnout', icon: '🧠' },
    { titulo: 'Ergonomia e postura', desc: 'Avaliação e orientação ergonômica', icon: '🪑' },
    { titulo: 'Vacinação empresarial', desc: 'Campanhas de vacinação no local de trabalho', icon: '💉' },
    { titulo: 'Programa de qualidade de vida', desc: 'Atividades físicas e bem-estar coletivo', icon: '🏃' },
  ];
  return (
    <FlowScreen title="Programas disponíveis" onBack={ctx.goBack}>
      {programas.map((p, i) => (
        <JourneyCard key={i} icon={p.icon} title={p.titulo} desc={p.desc} accent="#e8f0fd" onClick={() => ctx.navigate('empresa-3')} />
      ))}
    </FlowScreen>
  );
}

function EmpresaScreen3({ ctx }) {
  return (
    <FlowScreen title="Dados da empresa" onBack={ctx.goBack}
      foot={<PrimaryBtn onClick={() => ctx.navigate('empresa-4')}>Continuar</PrimaryBtn>}>
      <InputField label="Razão social" placeholder="Nome da empresa" />
      <InputField label="CNPJ" placeholder="00.000.000/0000-00" />
      <InputField label="Nome do responsável (RH)" placeholder="Nome completo" />
      <InputField label="E-mail corporativo" placeholder="rh@empresa.com.br" type="email" />
      <InputField label="Telefone" placeholder="(11) 0000-0000" />
      <InputField label="Número de funcionários" placeholder="Ex: 150" type="number" />
    </FlowScreen>
  );
}

function EmpresaScreen4({ ctx }) {
  const [sel, setSel] = React.useState(null);
  const progs = ['Check-up corporativo', 'Saúde mental no trabalho', 'Ergonomia e postura', 'Vacinação empresarial', 'Programa de qualidade de vida'];
  return (
    <FlowScreen title="Escolher programa" onBack={ctx.goBack}
      foot={<PrimaryBtn onClick={() => ctx.navigate('empresa-5')} disabled={!sel}>Continuar</PrimaryBtn>}>
      {progs.map((p, i) => (
        <button key={i} onClick={() => setSel(p)}
          style={{ width: '100%', padding: '13px 14px', marginBottom: 10, borderRadius: 10, border: `2px solid ${sel === p ? CP.primary : CP.border}`, backgroundColor: sel === p ? CP.lightBlue : CP.white, cursor: 'pointer', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: CP.text }}>{p}</span>
          {sel === p && <IcCheck color={CP.primary} />}
        </button>
      ))}
    </FlowScreen>
  );
}

function EmpresaScreen5({ ctx }) {
  return (
    <FlowScreen title="Resumo" onBack={ctx.goBack}
      foot={<PrimaryBtn onClick={() => ctx.navigate('empresa-6')}>Confirmar contratação</PrimaryBtn>}>
      <div style={{ backgroundColor: CP.warmGrey, borderRadius: 12, padding: 16 }}>
        {[['Empresa', 'Acme Tecnologia Ltda.'], ['CNPJ', '12.345.678/0001-90'], ['Responsável', 'Maria Helena (RH)'], ['Programa', 'Check-up corporativo'], ['Funcionários', '150'], ['Início previsto', '01/06/2026']].map(([k, v]) => (
          <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: `1px solid ${CP.border}` }}>
            <span style={{ fontSize: 13, color: CP.textLight }}>{k}</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: CP.text }}>{v}</span>
          </div>
        ))}
      </div>
    </FlowScreen>
  );
}

function EmpresaScreen6({ ctx }) {
  return (
    <FlowScreen title="Acompanhamento" onBack={ctx.goBack}
      foot={<PrimaryBtn onClick={() => ctx.navigate('empresa-7')}>Ver perfil corporativo</PrimaryBtn>}>
      <div style={{ textAlign: 'center', paddingTop: 16, marginBottom: 20 }}>
        <div style={{ width: 64, height: 64, borderRadius: '50%', backgroundColor: '#e8f8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
          <IcCheck size={32} color={CP.success} />
        </div>
        <div style={{ fontSize: 17, fontWeight: 700, color: CP.success }}>Programa contratado!</div>
      </div>
      <div style={{ fontSize: 14, fontWeight: 700, color: CP.text, marginBottom: 12 }}>Status do programa</div>
      {[['Proposta enviada', '08/05/2026', CP.success], ['Aprovação RH', 'Pendente', CP.warning], ['Kickoff', '01/06/2026', CP.textLight]].map(([s, d, c], i) => (
        <div key={i} style={{ display: 'flex', gap: 12, marginBottom: 14, alignItems: 'flex-start' }}>
          <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: c, marginTop: 3, flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: 14, fontWeight: 600, color: CP.text }}>{s}</div>
            <div style={{ fontSize: 12, color: CP.textLight }}>{d}</div>
          </div>
        </div>
      ))}
    </FlowScreen>
  );
}

function EmpresaScreen7({ ctx }) {
  return (
    <FlowScreen title="Perfil corporativo" onBack={ctx.goBack}
      foot={<PrimaryBtn onClick={() => ctx.navigate('blua')}>Voltar ao início</PrimaryBtn>}>
      <div style={{ backgroundColor: `${CP.navy}`, borderRadius: 12, padding: 16, color: CP.white, marginBottom: 16 }}>
        <div style={{ fontSize: 11, opacity: 0.7, marginBottom: 2 }}>Empresa</div>
        <div style={{ fontSize: 18, fontWeight: 700 }}>Acme Tecnologia Ltda.</div>
        <div style={{ fontSize: 13, opacity: 0.7, marginTop: 4 }}>150 funcionários · São Paulo, SP</div>
      </div>
      {[['Programa ativo', 'Check-up corporativo'], ['Período', '01/06/2026 – 31/05/2027'], ['Adesão', '87 / 150 funcionários'], ['Status', 'Em andamento'], ['Próximo evento', '15/06/2026 — Coleta em grupo']].map(([k, v]) => (
        <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: `1px solid ${CP.border}` }}>
          <span style={{ fontSize: 13, color: CP.textLight }}>{k}</span>
          <span style={{ fontSize: 13, fontWeight: 600, color: CP.text, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
        </div>
      ))}
    </FlowScreen>
  );
}

Object.assign(window, {
  ConsultaScreen1, ConsultaScreen2, ConsultaScreen3, ConsultaScreen4, ConsultaScreen5,
  PersonalScreen1,
  MentalScreen1, MentalScreen2, MentalScreen3,
  MovimenteScreen1, MovimenteScreen2, MovimenteScreen3, MovimenteScreen4,
  EmpresaScreen1, EmpresaScreen2, EmpresaScreen3, EmpresaScreen4,
  EmpresaScreen5, EmpresaScreen6, EmpresaScreen7,
});
