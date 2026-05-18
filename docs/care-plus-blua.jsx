// care-plus-blua.jsx — Blua Hub + J1 Caren + J2 Anura (bem-estar) + J3 Teleconsulta

// ─── BLUA HUB ICONS (simple blue SVGs) ───────────────────────────────────────
const IconBemEstar = () => (
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
    <circle cx="19" cy="19" r="14" stroke="#0079c8" strokeWidth="2"/>
    <circle cx="14.5" cy="16.5" r="2" fill="#0079c8"/>
    <circle cx="23.5" cy="16.5" r="2" fill="#0079c8"/>
    <path d="M13 23c1.5 3.5 11 3.5 12.5 0" stroke="#0079c8" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const IconTeleconsulta = () => (
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
    <rect x="5" y="10" width="22" height="16" rx="3" stroke="#0079c8" strokeWidth="2"/>
    <rect x="29" y="14" width="5" height="8" rx="2" stroke="#0079c8" strokeWidth="2"/>
    <path d="M12 15.5l8.5 4.5-8.5 4.5V15.5z" fill="#0079c8"/>
  </svg>
);
const IconExames = () => (
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
    <path d="M12 26c0-5 3.5-9 3.5-9s3.5 4 3.5 9H12z" stroke="#0079c8" strokeWidth="2" strokeLinejoin="round" fill="#e8f4fd"/>
    <circle cx="15.5" cy="16" r="2.5" stroke="#0079c8" strokeWidth="2"/>
    <rect x="21" y="18" width="13" height="10" rx="2" stroke="#0079c8" strokeWidth="2"/>
    <path d="M24 18v-3l3.5-3 3.5 3v3" stroke="#0079c8" strokeWidth="2" strokeLinejoin="round"/>
    <rect x="25" y="22" width="3" height="5" rx="1" fill="#0079c8"/>
  </svg>
);
const IconVacinas = () => (
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
    <line x1="24" y1="6" x2="31" y2="13" stroke="#0079c8" strokeWidth="2" strokeLinecap="round"/>
    <line x1="21" y1="9" x2="28" y2="16" stroke="#0079c8" strokeWidth="2" strokeLinecap="round"/>
    <rect x="13" y="13" width="13" height="7" rx="1.5" transform="rotate(-45 13 13)" fill="#e8f4fd" stroke="#0079c8" strokeWidth="2"/>
    <line x1="8" y1="30" x2="14" y2="24" stroke="#0079c8" strokeWidth="2" strokeLinecap="round"/>
    <line x1="19" y1="24" x2="22" y2="21" stroke="#0079c8" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
  </svg>
);
const IconConsulta = () => (
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
    <rect x="7" y="13" width="13" height="17" rx="2" stroke="#0079c8" strokeWidth="2"/>
    <rect x="10" y="10" width="7" height="5" rx="1" stroke="#0079c8" strokeWidth="1.5"/>
    <line x1="10" y1="20" x2="17" y2="20" stroke="#0079c8" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="10" y1="24" x2="15" y2="24" stroke="#0079c8" strokeWidth="1.5" strokeLinecap="round"/>
    <rect x="23" y="19" width="10" height="11" rx="2" stroke="#0079c8" strokeWidth="2"/>
    <path d="M25 19v-3l3-2.5 3 2.5v3" stroke="#0079c8" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);
const IconPersonal = () => (
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
    <circle cx="19" cy="14" r="6.5" stroke="#0079c8" strokeWidth="2" fill="#e8f4fd"/>
    <path d="M7 32c0-6.6 5.4-12 12-12s12 5.4 12 12" stroke="#0079c8" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const IconMental = () => (
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
    <path d="M19 9c-2.2 0-4.2 1.2-5.3 3-2.2.2-4.2 2-4.2 4.5 0 1 .3 1.9.9 2.6-.9 1-1.4 2.4-1 3.9.5 2 2.2 3.2 4 3 .4 1.5 1.8 2.5 3.1 2.5" stroke="#0079c8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19 9c2.2 0 4.2 1.2 5.3 3 2.2.2 4.2 2 4.2 4.5 0 1-.3 1.9-.9 2.6.9 1 1.4 2.4 1 3.9-.5 2-2.2 3.2-4 3-.4 1.5-1.8 2.5-3.1 2.5" stroke="#0079c8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="19" y1="28.5" x2="19" y2="33" stroke="#0079c8" strokeWidth="2" strokeLinecap="round"/>
    <line x1="16" y1="33" x2="22" y2="33" stroke="#0079c8" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const IconMovimente = () => (
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
    <line x1="9" y1="29" x2="29" y2="9" stroke="#0079c8" strokeWidth="2" strokeLinecap="round"/>
    <path d="M23 9h6v6" stroke="#0079c8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="16" cy="22" r="5" stroke="#0079c8" strokeWidth="2" fill="#e8f4fd"/>
    <line x1="8" y1="14" x2="12" y2="18" stroke="#0079c8" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
    <line x1="14" y1="8" x2="18" y2="12" stroke="#0079c8" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
  </svg>
);
const IconEmpresa = () => (
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
    <rect x="7" y="16" width="18" height="16" rx="2" stroke="#0079c8" strokeWidth="2"/>
    <path d="M11 16v-4l5-5 5 5v4" stroke="#0079c8" strokeWidth="2" strokeLinejoin="round"/>
    <rect x="11" y="22" width="3.5" height="4" rx="1" fill="#0079c8"/>
    <rect x="17" y="22" width="3.5" height="4" rx="1" fill="#0079c8"/>
    <rect x="13" y="28" width="5" height="4" rx="1" fill="#0079c8"/>
    <line x1="29" y1="21" x2="29" y2="31" stroke="#0079c8" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="24" y1="26" x2="34" y2="26" stroke="#0079c8" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

// ─── BLUA HUB ────────────────────────────────────────────────────────────────
function BluaScreen({ ctx }) {
  const { navigate, goBack } = ctx;

  function SemCopay() {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 4, backgroundColor: '#dff0ff', borderRadius: 20, padding: '3px 8px', flexShrink: 0 }}>
        <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
          <rect x="1" y="3.5" width="10" height="5" rx="2.5" stroke="#0079c8" strokeWidth="1.3"/>
          <line x1="6" y1="3.5" x2="6" y2="8.5" stroke="#0079c8" strokeWidth="1.3"/>
        </svg>
        <span style={{ fontSize: 10, fontWeight: 700, color: CP.primary }}>Sem copay</span>
      </div>
    );
  }

  function JCard({ id, icon, title, semCopay }) {
    return (
      <button onClick={() => navigate(id)}
        style={{ backgroundColor: CP.white, borderRadius: 14, border: '1px solid #eef1f6', boxShadow: '0 2px 8px rgba(0,0,0,0.07)', padding: '14px 12px', display: 'flex', flexDirection: 'column', cursor: 'pointer', textAlign: 'left', minHeight: 118 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'auto' }}>
          {icon}
          {semCopay && <SemCopay />}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: CP.primary, lineHeight: 1.3, whiteSpace: 'pre-line' }}>{title}</span>
          <span style={{ color: CP.primary, flexShrink: 0, marginLeft: 4 }}><IcChevron /></span>
        </div>
      </button>
    );
  }

  const cards = [
    { id: 'anura-1',        icon: <IconBemEstar />,    title: 'Teste de\nBem-estar',   semCopay: false },
    { id: 'teleconsulta-1', icon: <IconTeleconsulta />, title: 'Teleconsulta',          semCopay: true  },
    { id: 'exames-1',       icon: <IconExames />,       title: 'Exames\nem casa',       semCopay: true  },
    { id: 'vacinas-1',      icon: <IconVacinas />,      title: 'Vacinas\nem casa',      semCopay: true  },
    { id: 'consulta-1',     icon: <IconConsulta />,     title: 'Consulta\npresencial',  semCopay: false },
    { id: 'personal-1',     icon: <IconPersonal />,     title: 'Personal\nsystem',      semCopay: false },
    { id: 'mental-1',       icon: <IconMental />,       title: 'Saúde mental',          semCopay: false },
    { id: 'movimente-1',    icon: <IconMovimente />,    title: 'Movimente-se',          semCopay: false },
    { id: 'empresa-1',      icon: <IconEmpresa />,      title: 'Saúde na\nempresa',     semCopay: false },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: CP.white }}>
      {/* Top bar */}
      <div style={{ padding: '8px 16px 2px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
        <button onClick={goBack} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6, color: CP.text, display: 'flex' }}>
          <IcBack />
        </button>
        <button onClick={() => navigate('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6, color: CP.text, display: 'flex' }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
        </button>
      </div>
      {/* Title */}
      <div style={{ padding: '2px 20px 14px', fontSize: 28, fontWeight: 700, color: CP.text, flexShrink: 0 }}>Blua</div>

      {/* Scrollable */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '0 16px 24px' }}>
        {/* Caren promo card */}
        <button onClick={() => navigate('caren-1')}
          style={{ width: '100%', backgroundColor: '#f0ebff', borderRadius: 14, padding: '14px 16px', display: 'flex', gap: 12, alignItems: 'center', border: 'none', cursor: 'pointer', marginBottom: 20, textAlign: 'left', boxSizing: 'border-box' }}>
          {/* Caren avatar */}
          <img src="caren-avatar.png" alt="Caren" style={{ width: 56, height: 56, borderRadius: '50%', flexShrink: 0, objectFit: 'cover', border: '2.5px solid #9b59b6' }} />
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: CP.primary, marginBottom: 5 }}>O que você está sentindo?</div>
            <div style={{ fontSize: 12, color: CP.textMid, lineHeight: 1.5 }}>Avalie seus sintomas com a Caren e receba orientação em 3 min.</div>
          </div>
        </button>

        {/* 2-column journey grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {cards.map(c => <JCard key={c.id} {...c} />)}
        </div>
      </div>
    </div>
  );
}

// ─── J1: CAREN ───────────────────────────────────────────────────────────────
function CarenScreen1({ ctx }) {
  return (
    <FlowScreen title="Caren" onBack={ctx.goBack} foot={<PrimaryBtn onClick={() => ctx.navigate('caren-2')}>Iniciar atendimento</PrimaryBtn>}>
      <IlloPlaceholder label="ilustração — Caren IA" height={160} bg="#e8f4fd" />
      <div style={{ marginTop: 20 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: CP.text, marginBottom: 8 }}>Olá! Sou a Caren</div>
        <div style={{ fontSize: 14, color: CP.textMid, lineHeight: 1.6, marginBottom: 16 }}>Sua assistente de saúde com inteligência artificial. Posso ajudar com dúvidas, fazer uma triagem inicial e indicar o melhor caminho para seu cuidado.</div>
        <div style={{ fontSize: 13, color: CP.textLight, lineHeight: 1.5 }}>Disponível 24h para você e seus dependentes.</div>
      </div>
      <div style={{ marginTop: 16, padding: 12, backgroundColor: CP.warmGrey, borderRadius: 10 }}>
        <div style={{ fontSize: 12, color: CP.textMid, fontWeight: 600, marginBottom: 6 }}>Histórico de conversas</div>
        <button onClick={() => ctx.navigate('caren-5')} style={{ fontSize: 13, color: CP.primary, background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontWeight: 600 }}>Ver histórico →</button>
      </div>
    </FlowScreen>
  );
}

function CarenScreen2({ ctx }) {
  // ⚠ UX PROBLEM: Beneficiário não fica salvo — usuário precisa informar a cada sessão
  // ⚠ UX PROBLEM: Sem feedback visual de seleção — item selecionado não tem destaque
  const [selected, setSelected] = React.useState(null); // no highlight deliberately
  const beneficiarios = [getUserFullName(), 'Ana Santos (cônjuge)', 'Pedro Santos (filho, 8 anos)'];
  return (
    <FlowScreen title="Para quem é o atendimento?" onBack={ctx.goBack}
      foot={<PrimaryBtn onClick={() => ctx.navigate('caren-3')} disabled={!selected}>Continuar</PrimaryBtn>}>
      <div style={{ fontSize: 14, color: CP.textMid, marginBottom: 20, lineHeight: 1.5 }}>Selecione o beneficiário para este atendimento.</div>
      {beneficiarios.map((b, i) => (
        <button key={i} onClick={() => setSelected(b)}
          style={{
            width: '100%', padding: '14px 16px', marginBottom: 10, borderRadius: 8,
            border: `1.5px solid ${CP.border}`, // ⚠ no visual distinction when selected
            backgroundColor: CP.white,
            cursor: 'pointer', textAlign: 'left', fontSize: 15, fontWeight: 600, color: CP.text,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
          {b}
          {/* ⚠ No visible selected state — check icon never shown */}
          <div style={{ width: 20, height: 20 }} />
        </button>
      ))}
      <div style={{ marginTop: 8, padding: 10, backgroundColor: '#fff3cd', borderRadius: 8, borderLeft: `3px solid ${CP.warning}` }}>
        <div style={{ fontSize: 12, color: '#856404', lineHeight: 1.4 }}>ℹ️ Você precisará selecionar o beneficiário novamente na próxima sessão.</div>
      </div>
    </FlowScreen>
  );
}

function CarenScreen3({ ctx }) {
  const [msg, setMsg] = React.useState('');
  const messages = [
    { from: 'caren', text: 'Olá! Estou aqui para ajudar. Qual é sua dúvida ou sintoma hoje?' },
    { from: 'user', text: 'Estou com dor de cabeça forte há 2 dias e um pouco de febre.' },
    { from: 'caren', text: 'Entendo. Vou fazer algumas perguntas para entender melhor. A febre está acima de 38°C?' },
    { from: 'user', text: 'Sim, 38.2°C ontem à noite.' },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <BackHeader title="Caren" onBack={ctx.goBack}
        rightSlot={<button onClick={() => ctx.navigate('caren-4')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 12, color: CP.primary, fontWeight: 700 }}>Ver resposta</button>} />
      <div style={{ flex: 1, overflowY: 'auto', padding: 14, backgroundColor: CP.lightBg, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {messages.map((m, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: m.from === 'user' ? 'flex-end' : 'flex-start' }}>
            <div style={{ maxWidth: '80%', backgroundColor: m.from === 'user' ? CP.primary : CP.white, color: m.from === 'user' ? CP.white : CP.text, borderRadius: m.from === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px', padding: '10px 14px', fontSize: 14, lineHeight: 1.5, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              {m.text}
            </div>
          </div>
        ))}
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <div style={{ maxWidth: '80%', backgroundColor: CP.white, borderRadius: '16px 16px 16px 4px', padding: '10px 14px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', display: 'flex', gap: 4 }}>
            {[0,1,2].map(i => <div key={i} style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: CP.textLight, animation: `pulse 1s ${i*0.2}s infinite` }} />)}
          </div>
        </div>
      </div>
      <div style={{ padding: '10px 14px', backgroundColor: CP.white, borderTop: `1px solid ${CP.border}`, display: 'flex', gap: 8 }}>
        <input value={msg} onChange={e => setMsg(e.target.value)} placeholder="Digite sua mensagem…"
          style={{ flex: 1, border: `1.5px solid ${CP.border}`, borderRadius: 24, padding: '10px 14px', fontSize: 14, outline: 'none', fontFamily: 'inherit' }} />
        <button onClick={() => ctx.navigate('caren-4')} style={{ width: 42, height: 42, borderRadius: '50%', backgroundColor: CP.primary, border: 'none', cursor: 'pointer', color: CP.white, fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>➤</button>
      </div>
    </div>
  );
}

function CarenScreen4({ ctx }) {
  return (
    <FlowScreen title="Encaminhamento" onBack={ctx.goBack}
      foot={<div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <PrimaryBtn onClick={() => ctx.navigate('teleconsulta-1')}>Iniciar teleconsulta</PrimaryBtn>
        <SecondaryBtn onClick={() => ctx.navigate('consulta-1')}>Agendar presencial</SecondaryBtn>
      </div>}>
      <div style={{ backgroundColor: '#e8f8f0', borderRadius: 12, padding: 16, marginBottom: 16, borderLeft: `4px solid ${CP.success}` }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: CP.success, marginBottom: 8 }}>Análise da Caren</div>
        <div style={{ fontSize: 14, color: CP.text, lineHeight: 1.6 }}>Com base nos sintomas relatados — dor de cabeça intensa por 2 dias e febre de 38,2°C — recomendo avaliação médica. Pode ser uma infecção viral ou bacteriana.</div>
      </div>
      <div style={{ fontSize: 14, fontWeight: 700, color: CP.text, marginBottom: 12 }}>Próximos passos sugeridos</div>
      {['Hidrate-se bem — pelo menos 2L de água por dia', 'Monitore a febre a cada 4 horas', 'Evite automedicação', 'Consulte um médico nas próximas 24h'].map((tip, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
          <div style={{ width: 22, height: 22, borderRadius: '50%', backgroundColor: CP.primary, color: CP.white, fontSize: 12, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i+1}</div>
          <div style={{ fontSize: 14, color: CP.text, lineHeight: 1.5 }}>{tip}</div>
        </div>
      ))}
    </FlowScreen>
  );
}

function CarenScreen5({ ctx }) {
  const history = [
    { date: '03/05/2026', topic: 'Dor de cabeça e febre', status: 'Encaminhado' },
    { date: '15/04/2026', topic: 'Dúvida sobre medicamento', status: 'Resolvido' },
    { date: '02/04/2026', topic: 'Sintomas gripais', status: 'Encaminhado' },
  ];
  return (
    <FlowScreen title="Histórico" onBack={ctx.goBack}>
      {history.map((h, i) => (
        <div key={i} style={{ backgroundColor: CP.white, borderRadius: 10, padding: 14, marginBottom: 10, border: `1px solid ${CP.border}` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: CP.text }}>{h.topic}</span>
            <span style={{ fontSize: 11, fontWeight: 700, color: h.status === 'Resolvido' ? CP.success : CP.primary }}>{h.status}</span>
          </div>
          <div style={{ fontSize: 12, color: CP.textLight }}>{h.date}</div>
        </div>
      ))}
    </FlowScreen>
  );
}

// ─── J2: ANURA (bem-estar) ───────────────────────────────────────────────────
function AnuraScreen1({ ctx }) {
  return (
    <FlowScreen title="Teste de bem-estar" onBack={ctx.goBack}
      foot={<PrimaryBtn onClick={() => ctx.navigate('anura-2')}>Iniciar teste</PrimaryBtn>}>
      <IlloPlaceholder label="ilustração — reconhecimento facial Anura" height={170} bg="#e8fdf4" />
      <div style={{ marginTop: 20 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: CP.text, marginBottom: 8 }}>Anura — Bem-estar</div>
        <div style={{ fontSize: 14, color: CP.textMid, lineHeight: 1.6 }}>Tecnologia de reconhecimento facial que analisa sua face pela câmera do celular e extrai até 20 índices de saúde e bem-estar em minutos.</div>
        <div style={{ marginTop: 14, display: 'flex', gap: 12 }}>
          {['Frequência cardíaca', 'Estresse', 'Pressão arterial', 'Saturação O₂'].map((idx, i) => (
            <div key={i} style={{ flex: 1, backgroundColor: CP.lightBlue, borderRadius: 8, padding: '10px 8px', textAlign: 'center' }}>
              <div style={{ fontSize: 11, color: CP.textMid, lineHeight: 1.3 }}>{idx}</div>
            </div>
          ))}
        </div>
      </div>
    </FlowScreen>
  );
}

function AnuraScreen2({ ctx }) {
  // ⚠ UX PROBLEM: Aviso de condições aparece na TELA 2 — deveria ser a PRIMEIRA informação
  return (
    <FlowScreen title="Condições necessárias" onBack={ctx.goBack} foot={<PrimaryBtn onClick={() => ctx.navigate('anura-3')}>Entendi, continuar</PrimaryBtn>}>
      <div style={{ padding: 12, backgroundColor: '#fff3cd', borderRadius: 10, marginBottom: 16, borderLeft: `4px solid ${CP.warning}` }}>
        <div style={{ fontSize: 12, color: '#856404', fontWeight: 700, marginBottom: 4 }}>⚠️ Atenção — leia antes de começar</div>
        <div style={{ fontSize: 12, color: '#856404', lineHeight: 1.5 }}>Este aviso deveria aparecer antes do início do teste.</div>
      </div>
      <div style={{ fontSize: 15, fontWeight: 700, color: CP.text, marginBottom: 12 }}>Para um resultado preciso:</div>
      {['Ambiente bem iluminado (luz natural ou artificial direta)', 'Posicione o rosto centralizado na câmera', 'Fique parado e não fale durante o scan', 'Remova óculos ou acessórios no rosto', 'Evite luz de fundo intensa (janelas, sol direto)', 'Temperatura ambiente entre 18°C e 28°C'].map((cond, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 12 }}>
          <div style={{ width: 20, height: 20, borderRadius: '50%', backgroundColor: CP.lightBlue, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ fontSize: 10, color: CP.primary, fontWeight: 700 }}>{i+1}</span>
          </div>
          <div style={{ fontSize: 14, color: CP.text, lineHeight: 1.4 }}>{cond}</div>
        </div>
      ))}
    </FlowScreen>
  );
}

function AnuraScreen3({ ctx }) {
  const [gender, setGender] = React.useState(null);
  return (
    <FlowScreen title="Perfil" onBack={ctx.goBack} foot={<PrimaryBtn onClick={() => ctx.navigate('anura-4')} disabled={!gender}>Continuar</PrimaryBtn>}>
      <div style={{ fontSize: 14, color: CP.textMid, marginBottom: 20 }}>Para análise precisa, informe seus dados básicos.</div>
      <div style={{ marginBottom: 18 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: CP.textMid, marginBottom: 10 }}>Sexo biológico</div>
        <div style={{ display: 'flex', gap: 10 }}>
          {['Masculino', 'Feminino'].map(g => (
            <button key={g} onClick={() => setGender(g)}
              style={{ flex: 1, padding: '12px', borderRadius: 8, border: `2px solid ${gender === g ? CP.primary : CP.border}`, backgroundColor: gender === g ? CP.lightBlue : CP.white, cursor: 'pointer', fontSize: 14, fontWeight: 600, color: gender === g ? CP.primary : CP.textMid }}>
              {g}
            </button>
          ))}
        </div>
      </div>
      <InputField label="Idade" placeholder="Ex: 35" type="number" />
      <InputField label="Peso (kg)" placeholder="Ex: 72" type="number" />
      <InputField label="Altura (cm)" placeholder="Ex: 175" type="number" />
    </FlowScreen>
  );
}

function AnuraScreen4({ ctx }) {
  return (
    <FlowScreen title="Posicionamento" onBack={ctx.goBack} foot={<PrimaryBtn onClick={() => ctx.navigate('anura-5')}>Iniciar captura</PrimaryBtn>}>
      <div style={{ backgroundColor: '#1a1a2e', borderRadius: 16, height: 240, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', marginBottom: 20 }}>
        <div style={{ width: 140, height: 170, border: '2px dashed rgba(255,255,255,0.5)', borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: 48 }}>👤</span>
        </div>
        <div style={{ position: 'absolute', bottom: 12, left: 0, right: 0, textAlign: 'center', fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>Posicione seu rosto aqui</div>
      </div>
      {['Encaixe seu rosto no oval acima', 'Mantenha o celular na altura dos olhos', 'Permaneça imóvel durante o scan (30s)'].map((tip, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 12 }}>
          <span style={{ fontSize: 16 }}>{'✓'}</span>
          <span style={{ fontSize: 14, color: CP.text }}>{tip}</span>
        </div>
      ))}
    </FlowScreen>
  );
}

function AnuraScreen5({ ctx }) {
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setProgress(p => { if (p >= 100) { clearInterval(t); setTimeout(() => ctx.navigate('anura-6'), 400); return 100; } return p + 3; }), 90);
    return () => clearInterval(t);
  }, []);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#0a0a1a' }}>
      <BackHeader title="Capturando" onBack={ctx.goBack} bg="#0a0a1a" titleColor={CP.white} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
        <div style={{ width: 200, height: 240, border: `3px solid ${progress > 50 ? CP.success : CP.primary}`, borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', marginBottom: 32, transition: 'border-color 0.5s' }}>
          <span style={{ fontSize: 72 }}>😐</span>
          {/* ⚠ Azul claro nos textos — contraste insuficiente */}
          <div style={{ position: 'absolute', bottom: -30, fontSize: 13, color: '#55aaff', fontWeight: 600 }}>{progress < 100 ? 'Analisando…' : 'Concluído!'}</div>
        </div>
        <div style={{ width: '100%', maxWidth: 260, height: 6, backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: 3, overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${progress}%`, backgroundColor: progress > 50 ? CP.success : CP.primary, transition: 'width 0.1s', borderRadius: 3 }} />
        </div>
        {/* ⚠ Azul claro — baixo contraste em fundo escuro */}
        <div style={{ marginTop: 12, fontSize: 12, color: '#6ab4ff' }}>{progress}% concluído</div>
      </div>
    </div>
  );
}

function AnuraScreen6({ ctx }) {
  React.useEffect(() => { const t = setTimeout(() => ctx.navigate('anura-7'), 2500); return () => clearTimeout(t); }, []);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: CP.white, alignItems: 'center', justifyContent: 'center', gap: 20, padding: 32 }}>
      <div style={{ width: 72, height: 72, borderRadius: '50%', border: `4px solid ${CP.primary}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: 40, height: 40, borderRadius: '50%', border: `3px solid ${CP.primary}`, borderTopColor: 'transparent', animation: 'spin 0.8s linear infinite' }} />
      </div>
      <div style={{ fontSize: 16, fontWeight: 700, color: CP.text }}>Processando resultados…</div>
      <div style={{ fontSize: 13, color: CP.textLight, textAlign: 'center' }}>Calculando seus índices de saúde e bem-estar</div>
    </div>
  );
}

function AnuraScreen7({ ctx }) {
  React.useEffect(() => {
    const t = setTimeout(() => window.__showToast('Avaliação de bem-estar concluída 🧘', 250), 600);
    return () => clearTimeout(t);
  }, []);
  const metrics = [
    { label: 'Frequência cardíaca', value: 72, unit: 'bpm', min: 60, max: 100, color: CP.success },
    { label: 'Estresse',            value: 45, unit: '%',   min: 0,  max: 100, color: CP.warning },
    { label: 'Saturação O₂',        value: 98, unit: '%',   min: 95, max: 100, color: CP.success },
    { label: 'Pressão sistólica',   value: 118, unit: 'mmHg', min: 90, max: 140, color: CP.success },
  ];
  return (
    <FlowScreen title="Resultados" onBack={ctx.goBack} foot={<PrimaryBtn onClick={() => ctx.navigate('anura-8')}>Ver detalhamento</PrimaryBtn>}>
      <div style={{ textAlign: 'center', marginBottom: 20 }}>
        <div style={{ fontSize: 13, color: CP.textLight, marginBottom: 4 }}>Bem-estar geral</div>
        <div style={{ fontSize: 48, fontWeight: 900, color: CP.success }}>78</div>
        <div style={{ fontSize: 13, color: CP.success, fontWeight: 700 }}>Bom</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {metrics.map((m, i) => {
          const pct = Math.round(((m.value - m.min) / (m.max - m.min)) * 100);
          return (
            <div key={i} style={{ backgroundColor: CP.warmGrey, borderRadius: 12, padding: 14 }}>
              <div style={{ fontSize: 11, color: CP.textLight, marginBottom: 6, lineHeight: 1.3 }}>{m.label}</div>
              <div style={{ fontSize: 20, fontWeight: 700, color: m.color }}>{m.value} <span style={{ fontSize: 11, fontWeight: 400 }}>{m.unit}</span></div>
              <div style={{ height: 4, backgroundColor: CP.border, borderRadius: 2, marginTop: 8, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${pct}%`, backgroundColor: m.color, borderRadius: 2 }} />
              </div>
            </div>
          );
        })}
      </div>
    </FlowScreen>
  );
}

function AnuraScreen8({ ctx }) {
  const details = [
    { label: 'Frequência cardíaca', value: '72 bpm', status: 'Normal', desc: 'Dentro da faixa saudável para repouso.' },
    { label: 'Variabilidade cardíaca', value: '42 ms', status: 'Moderado', desc: 'Indica nível moderado de estresse autonômico.' },
    { label: 'Estresse', value: '45%', status: 'Moderado', desc: 'Nível moderado. Pratique atividades relaxantes.' },
    { label: 'Saturação de O₂', value: '98%', status: 'Ótimo', desc: 'Excelente oxigenação sanguínea.' },
  ];
  const statusColor = { 'Normal': CP.success, 'Moderado': CP.warning, 'Ótimo': CP.success };
  return (
    <FlowScreen title="Detalhamento" onBack={ctx.goBack} foot={<PrimaryBtn onClick={() => ctx.navigate('blua')}>Voltar ao início</PrimaryBtn>}>
      {details.map((d, i) => (
        <div key={i} style={{ backgroundColor: CP.white, borderRadius: 10, border: `1px solid ${CP.border}`, padding: 14, marginBottom: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: CP.text }}>{d.label}</span>
            <span style={{ fontSize: 12, fontWeight: 700, color: statusColor[d.status] || CP.primary }}>{d.status}</span>
          </div>
          <div style={{ fontSize: 22, fontWeight: 700, color: CP.text, marginBottom: 4 }}>{d.value}</div>
          <div style={{ fontSize: 12, color: CP.textLight, lineHeight: 1.4 }}>{d.desc}</div>
        </div>
      ))}
    </FlowScreen>
  );
}

// ─── J3: TELECONSULTA ────────────────────────────────────────────────────────
function TeleconsultaScreen1({ ctx }) {
  return (
    <FlowScreen title="Teleconsulta" onBack={ctx.goBack} foot={<PrimaryBtn onClick={() => ctx.navigate('teleconsulta-2')}>Iniciar consulta</PrimaryBtn>}>
      <IlloPlaceholder label="ilustração — teleconsulta médica" height={160} bg="#f0e8fd" />
      <div style={{ marginTop: 20 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: CP.text, marginBottom: 8 }}>Consulta virtual</div>
        <div style={{ fontSize: 14, color: CP.textMid, lineHeight: 1.6 }}>Atendimento médico online com clínicos gerais e pediatras, disponível todos os dias.</div>
      </div>
    </FlowScreen>
  );
}

function TeleconsultaScreen2({ ctx }) {
  React.useEffect(() => {
    const t = setTimeout(() => window.__showToast('Teleconsulta iniciada 📹', 200), 500);
    return () => clearTimeout(t);
  }, []);
  return (
    <FlowScreen title="Teleconsulta" onBack={ctx.goBack} foot={<PrimaryBtn onClick={() => {}}>Entrar na consulta</PrimaryBtn>}>
      <div style={{ textAlign: 'center', padding: '20px 0' }}>
        <div style={{ fontSize: 48, marginBottom: 12 }}>📹</div>
        <div style={{ fontSize: 18, fontWeight: 700, color: CP.text, marginBottom: 8 }}>Tudo pronto!</div>
        <div style={{ fontSize: 14, color: CP.textMid, lineHeight: 1.5, marginBottom: 20 }}>Um médico está disponível agora. Tempo médio de espera: <strong>5 minutos</strong>.</div>
        <div style={{ backgroundColor: CP.warmGrey, borderRadius: 10, padding: 14, textAlign: 'left' }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: CP.text, marginBottom: 8 }}>Antes de entrar:</div>
          {['Ambiente silencioso e iluminado', 'Câmera e microfone habilitados', 'Conexão estável à internet'].map((t, i) => (
            <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
              <IcCheck size={16} color={CP.success} />
              <span style={{ fontSize: 13, color: CP.textMid }}>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </FlowScreen>
  );
}

Object.assign(window, {
  BluaScreen,
  CarenScreen1, CarenScreen2, CarenScreen3, CarenScreen4, CarenScreen5,
  AnuraScreen1, AnuraScreen2, AnuraScreen3, AnuraScreen4,
  AnuraScreen5, AnuraScreen6, AnuraScreen7, AnuraScreen8,
  TeleconsultaScreen1, TeleconsultaScreen2,
});
