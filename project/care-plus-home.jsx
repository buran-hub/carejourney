// care-plus-home.jsx — Home, Menu, Carteirinha, Rede, Reembolso, Autorizações, Journey

// ─── HOME ────────────────────────────────────────────────────────────────────

// Tooth icon with sparkle (matches screenshot)
function ToothIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      {/* Sparkle top-left */}
      <path d="M10 11l1.2 2.8 2.8 1.2-2.8 1.2L10 19l-1.2-2.8L6 15l2.8-1.2z" fill="#0079c8" />
      {/* Tooth shape */}
      <path d="M22 10c-4.5 0-8 3.5-8 8 0 2.5.6 4 1.2 6.5.6 2.5 1 6 .5 10.5-.2 1.8 1 3 2.3 3 1.2 0 2-1 2.5-2.8l1.5-6 1.5 6c.5 1.8 1.3 2.8 2.5 2.8 1.3 0 2.5-1.2 2.3-3-.5-4.5-.5-8 0-10.5.6-2.5 1.2-4 1.2-6.5 0-4.5-3.5-8-8-8z" fill="#0079c8" />
    </svg>);

}

// Card icon (matches screenshot — blue credit card)
function CardIconSvg() {
  return (
    <svg width="48" height="34" viewBox="0 0 48 34" fill="none">
      <rect width="48" height="34" rx="5" fill="white" stroke="#d5e2f5" strokeWidth="1.5" />
      <rect y="8" width="48" height="10" fill="#0079c8" opacity="0.18" />
      <rect x="6" y="11" width="14" height="4" rx="2" fill="#0079c8" opacity="0.55" />
      <rect x="6" y="25" width="22" height="2.5" rx="1.25" fill="#c0ccdd" />
      <rect x="34" y="5" width="8" height="11" rx="2" fill="#0079c8" opacity="0.25" />
      <rect x="36" y="7" width="4" height="7" rx="1" fill="#0079c8" opacity="0.5" />
    </svg>);

}

function HomeScreen({ ctx }) {
  const { navigate } = ctx;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: CP.white }}>

      {/* ── Header ── */}
      <div style={{ padding: '12px 16px 10px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', backgroundColor: CP.white }}>
        {/* Left: avatar + greeting */}
        <div>
          <div style={{ width: 52, height: 52, borderRadius: 10, backgroundColor: '#dce8f2', overflow: 'hidden', marginBottom: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #c8d8e8' }}>
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
              <rect width="52" height="52" fill="#dce8f2" />
              <ellipse cx="26" cy="21" rx="10" ry="10" fill="#a0b4c8" />
              <ellipse cx="26" cy="46" rx="16" ry="12" fill="#a0b4c8" />
            </svg>
          </div>
          <div style={{ fontSize: 17, color: CP.text, fontWeight: "400" }}>Olá, Renato!</div>
        </div>
        {/* Right: bell + menu */}
        <div style={{ display: 'flex', gap: 16, alignItems: 'center', paddingTop: 8 }}>
          <button onClick={() => {}} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 2, color: CP.textMid, position: 'relative', display: 'flex' }}>
            <IcBell />
            <div style={{ position: 'absolute', top: 1, right: 1, width: 9, height: 9, borderRadius: '50%', backgroundColor: '#e74c3c', border: '1.5px solid white' }} />
          </button>
          <button onClick={() => navigate('menu')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 2, color: CP.textMid, display: 'flex' }}>
            <IcMenu />
          </button>
        </div>
      </div>

      {/* ── Scrollable content ── */}
      <div style={{ flex: 1, overflowY: 'auto', backgroundColor: CP.white }}>

        {/* Acesso rápido */}
        <div style={{ padding: '4px 16px 16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <span style={{ fontSize: 17, fontWeight: 700, color: CP.text }}>Acesso rápido</span>
            <button onClick={() => navigate('menu')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 13, color: CP.primary, fontWeight: 600 }}>Ver todos</button>
          </div>
          <div style={{ display: 'flex', gap: 8, height: 118 }}>
            {/* Blua — wider, navy */}
            <button onClick={() => navigate('blua')} style={{ flex: 1.35, height: '100%', borderRadius: 12, backgroundColor: CP.navy, border: 'none', cursor: 'pointer', padding: '14px 16px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', boxShadow: '0 3px 10px rgba(13,24,70,0.25)' }}>
              <div style={{ fontWeight: 900, fontSize: 28, color: CP.white, letterSpacing: -1, lineHeight: 1, marginBottom: 4 }}>blua.</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.65)', fontWeight: 500 }}>Saúde Digital</div>
            </button>
            {/* Agendar dentista */}
            <button onClick={() => navigate('consulta-1')} style={{ flex: 1, height: '100%', borderRadius: 12, backgroundColor: '#f4f8ff', border: `1px solid #e0eaf8`, cursor: 'pointer', padding: '10px 8px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img src="dentista-icon.png" alt="Dentista" style={{ width: 46, height: 46, objectFit: 'contain' }} /></div>
              <span style={{ fontSize: 11.5, fontWeight: 600, color: CP.text, textAlign: 'center', lineHeight: 1.3 }}>Agendar dentista</span>
            </button>
            {/* Carteirinha */}
            <button onClick={() => navigate('carteirinha')} style={{ flex: 1, height: '100%', borderRadius: 12, backgroundColor: '#f4f8ff', border: `1px solid #e0eaf8`, cursor: 'pointer', padding: '10px 8px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img src="carteirinha-icon.png" alt="Carteirinha" style={{ width: 46, height: 46, objectFit: 'contain' }} /></div>
              <span style={{ fontSize: 11.5, fontWeight: 600, color: CP.text, textAlign: 'center', lineHeight: 1.3 }}>Carteirinha</span>
            </button>
          </div>
        </div>

        {/* Banner 1 — Exames em casa */}
        <div style={{ margin: '0 16px 12px', backgroundColor: '#edf4ff', borderRadius: 14, padding: '14px 14px 14px', display: 'flex', gap: 10, alignItems: 'flex-start', position: 'relative' }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: CP.text, marginBottom: 5 }}>Exames em casa</div>
            <div style={{ fontSize: 12, color: CP.textMid, lineHeight: 1.45, marginBottom: 14 }}>Exames de análises clínicas no conforto da sua casa. Sem Copay</div>
            <button onClick={() => navigate('exames-1')} style={{ backgroundColor: CP.navy, color: CP.white, border: 'none', borderRadius: 8, padding: '9px 18px', fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>Agende agora</button>
          </div>
          {/* Circular image placeholder */}
          <div style={{ width: 72, height: 72, borderRadius: '50%', backgroundColor: '#c8d8c0', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', marginTop: 4 }}>
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
              <circle cx="36" cy="36" r="36" fill="#c0d0b8" />
              <rect x="24" y="28" width="24" height="18" rx="3" fill="white" opacity="0.7" />
              <circle cx="36" cy="37" r="5" fill="#0079c8" opacity="0.5" />
              <rect x="30" y="48" width="12" height="3" rx="1.5" fill="white" opacity="0.6" />
            </svg>
          </div>
          {/* Close button */}
          <button style={{ position: 'absolute', top: 10, right: 10, background: 'none', border: 'none', cursor: 'pointer', color: CP.textLight, fontSize: 15, lineHeight: 1, display: 'flex', padding: 2 }}>×</button>
        </div>

        {/* Banner 2 — Teleconsulta (image-style) */}
        <div style={{ margin: '0 16px 12px', borderRadius: 14, overflow: 'hidden', height: 148, position: 'relative', backgroundColor: '#d4c8bc' }}>
          {/* Faux photo background */}
          <svg width="100%" height="148" viewBox="0 0 340 148" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0 }}>
            <rect width="340" height="148" fill="#cfc4b8" />
            <rect x="0" y="0" width="160" height="148" fill="#d8cfc8" />
            <ellipse cx="230" cy="74" rx="70" ry="90" fill="#b8a898" opacity="0.6" />
            <rect x="180" y="30" width="120" height="80" rx="4" fill="#e0d8d0" opacity="0.5" />
            <rect x="190" y="40" width="100" height="60" rx="2" fill="#c8c0b8" opacity="0.4" />
          </svg>
          {/* Text overlay */}
          <div style={{ position: 'absolute', inset: 0, padding: '14px 14px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <div style={{ backgroundColor: CP.primary, display: 'inline-flex', padding: '4px 10px', borderRadius: 5, marginBottom: 5, alignSelf: 'flex-start' }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: CP.white }}>Teleconsulta</span>
            </div>
            <div style={{ backgroundColor: CP.primary, padding: '5px 8px', borderRadius: 4, alignSelf: 'flex-start' }}>
              <span style={{ fontSize: 11, color: CP.white, lineHeight: 1.4, display: 'block' }}>Atendimento virtual com clínicos</span>
              <span style={{ fontSize: 11, color: CP.white, lineHeight: 1.4, display: 'block' }}>gerais e pediatras, no conforto e</span>
              <span style={{ fontSize: 11, color: CP.white, lineHeight: 1.4, display: 'block' }}>comodidade que você tanto merece</span>
            </div>
          </div>
          {/* Care Plus badge */}
          <div style={{ position: 'absolute', bottom: 10, right: 10, backgroundColor: CP.white, borderRadius: 6, padding: '3px 8px' }}>
            <span style={{ fontSize: 9, fontWeight: 800, color: CP.navy, letterSpacing: 0.3 }}>Care Plus</span>
          </div>
          {/* Click overlay */}
          <button onClick={() => navigate('teleconsulta-1')} style={{ position: 'absolute', inset: 0, background: 'none', border: 'none', cursor: 'pointer' }} />
        </div>

        {/* Care Plus + carrossel */}
        <div style={{ padding: '4px 0 24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 16px', marginBottom: 12 }}>
            <span style={{ fontSize: 17, fontWeight: 700, color: CP.text }}>Care Plus +</span>
            <a href="https://www.careplus.com.br/careplus-mais" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: 13, color: CP.primary, fontWeight: 600, textDecoration: 'none' }}>Ver todos</a>
          </div>
          <div style={{ display: 'flex', gap: 12, overflowX: 'auto', paddingBottom: 4, scrollSnapType: 'x mandatory', padding: "0px", margin: "0px 0px 0px 16px" }}>
            <div style={{ minWidth: 16, flexShrink: 0 }} />
            {[
            {
              url: 'https://www.careplus.com.br/careplus-mais/pneumonia-como-a-vacina-ajuda-a-reduzir-internacoes-e-afastamentos',
              title: 'Pneumonia: como a vacina ajuda a reduzir internações e afastamentos',
              desc: 'Entenda os riscos da pneumonia e como as vacinas pneumocócicas protegem você.',
              imgLabel: 'foto — vacinação no braço',
              imgBg: '#c8d8c0'
            },
            {
              url: 'https://www.careplus.com.br/careplus-mais/tratamentos-odontologicos-esteticos-exigem-cuidados',
              title: 'Tratamentos odontológicos estéticos exigem cuidados',
              desc: 'Saiba como manter resultados bonitos e seguros por mais tempo.',
              imgLabel: 'foto — tratamento odontológico',
              imgBg: '#d8c8c8'
            },
            {
              url: 'https://www.careplus.com.br/careplus-mais/ecossistema-integrado-de-saude-e-tendencia-no-cuidado-preventivo',
              title: 'Ecossistema integrado de saúde é tendência no cuidado preventivo',
              desc: 'Entenda como o ecossistema integrado de saúde melhora o cuidado.',
              imgLabel: 'foto — tecnologia médica digital',
              imgBg: '#c0ccd8'
            }].
            map((article, i) =>
            <a key={i} href={article.url} target="_blank" rel="noopener noreferrer"
            style={{ minWidth: 180, maxWidth: 180, flexShrink: 0, borderRadius: 14, overflow: 'hidden', border: `1px solid ${CP.border}`, backgroundColor: CP.white, boxShadow: '0 2px 8px rgba(0,0,0,0.07)', textDecoration: 'none', scrollSnapAlign: 'start', display: 'flex', flexDirection: 'column' }}>
                {/* Image placeholder */}
                <div style={{ height: 110, backgroundColor: article.imgBg, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                  <svg width="100%" height="110" viewBox="0 0 180 110" preserveAspectRatio="xMidYMid slice">
                    <rect width="180" height="110" fill={article.imgBg} />
                    {/* Subtle stripe pattern */}
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((j) =>
                  <line key={j} x1={j * 25 - 10} y1="0" x2={j * 25 + 60} y2="110" stroke="rgba(255,255,255,0.12)" strokeWidth="18" />
                  )}
                  </svg>
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 4 }}>
                    <span style={{ fontSize: 9, color: 'rgba(0,0,0,0.35)', fontFamily: 'monospace', textAlign: 'center', padding: '2px 8px', backgroundColor: 'rgba(255,255,255,0.4)', borderRadius: 4 }}>{article.imgLabel}</span>
                  </div>
                </div>
                {/* Text */}
                <div style={{ padding: '10px 12px 14px' }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: CP.text, lineHeight: 1.4, marginBottom: 6 }}>{article.title}</div>
                  <div style={{ fontSize: 11, color: CP.textLight, lineHeight: 1.4 }}>{article.desc}</div>
                </div>
              </a>
            )}
            <div style={{ minWidth: 16, flexShrink: 0 }} />
          </div>
        </div>

      </div>

      <BottomNav active="home" navigate={(id) => ctx.navigateTab(id)} />
    </div>);

}

// ─── MENU SVG ICONS ──────────────────────────────────────────────────────────
const MIcHome = () =>
<svg width="30" height="30" viewBox="0 0 30 30" fill="none">
    <path d="M5 13.5L15 5l10 8.5V25a1 1 0 01-1 1H19v-6h-4v6H6a1 1 0 01-1-1V13.5z" stroke="#7a9bbf" strokeWidth="1.8" fill="#dce8f5" />
  </svg>;

const MIcCarteirinha = () =>
<svg width="30" height="30" viewBox="0 0 30 30" fill="none">
    <rect x="3" y="8" width="24" height="14" rx="3" stroke="#7a9bbf" strokeWidth="1.8" fill="#dce8f5" />
    <rect x="3" y="13" width="24" height="4" fill="#7a9bbf" opacity="0.25" />
    <rect x="6" y="18" width="8" height="2" rx="1" fill="#7a9bbf" opacity="0.6" />
  </svg>;

const MIcToken = () =>
<svg width="30" height="30" viewBox="0 0 30 30" fill="none">
    <circle cx="12" cy="12" r="5.5" stroke="#7a9bbf" strokeWidth="1.8" fill="#dce8f5" />
    <line x1="16.5" y1="16.5" x2="26" y2="26" stroke="#7a9bbf" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="20" y1="22" x2="22" y2="20" stroke="#dce8f5" strokeWidth="1.5" strokeLinecap="round" />
  </svg>;

const MIcRede = () =>
<svg width="30" height="30" viewBox="0 0 30 30" fill="none">
    <circle cx="15" cy="15" r="8" stroke="#7a9bbf" strokeWidth="1.8" fill="#dce8f5" />
    <ellipse cx="15" cy="15" rx="4" ry="8" stroke="#7a9bbf" strokeWidth="1.4" />
    <line x1="7" y1="15" x2="23" y2="15" stroke="#7a9bbf" strokeWidth="1.4" />
    <line x1="8" y1="10.5" x2="22" y2="10.5" stroke="#7a9bbf" strokeWidth="1.2" />
    <line x1="8" y1="19.5" x2="22" y2="19.5" stroke="#7a9bbf" strokeWidth="1.2" />
  </svg>;

const MIcReembolso = () =>
<svg width="30" height="30" viewBox="0 0 30 30" fill="none">
    <rect x="4" y="9" width="22" height="14" rx="3" stroke="#7a9bbf" strokeWidth="1.8" fill="#dce8f5" />
    <rect x="4" y="14" width="22" height="4.5" fill="#7a9bbf" opacity="0.2" />
    <circle cx="22" cy="20" r="3.5" fill="#dce8f5" stroke="#7a9bbf" strokeWidth="1.5" />
    <text x="22" y="22" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#7a9bbf">$</text>
  </svg>;

const MIcAutorizacao = () =>
<svg width="30" height="30" viewBox="0 0 30 30" fill="none">
    <circle cx="15" cy="15" r="9" stroke="#7a9bbf" strokeWidth="1.8" fill="#dce8f5" />
    <polyline points="9.5,15 13.5,19.5 21,11" stroke="#7a9bbf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>;

const MIcAtendimento = () =>
<svg width="30" height="30" viewBox="0 0 30 30" fill="none">
    <path d="M5 8a3 3 0 013-3h14a3 3 0 013 3v10a3 3 0 01-3 3H10l-5 4V8z" stroke="#7a9bbf" strokeWidth="1.8" fill="#dce8f5" />
    <circle cx="10" cy="13" r="1.5" fill="#7a9bbf" />
    <circle cx="15" cy="13" r="1.5" fill="#7a9bbf" />
    <circle cx="20" cy="13" r="1.5" fill="#7a9bbf" />
  </svg>;

const MIcEmergencia = () =>
<svg width="30" height="30" viewBox="0 0 30 30" fill="none">
    <rect x="4" y="12" width="22" height="10" rx="2" fill="#fde8e8" stroke="#e74c3c" strokeWidth="1.8" />
    <rect x="8" y="8" width="6" height="6" rx="1.5" fill="#fde8e8" stroke="#e74c3c" strokeWidth="1.5" />
    <rect x="16" y="8" width="6" height="6" rx="1.5" fill="#fde8e8" stroke="#e74c3c" strokeWidth="1.5" />
    <line x1="13" y1="17" x2="17" y2="17" stroke="#e74c3c" strokeWidth="2" strokeLinecap="round" />
    <line x1="15" y1="15" x2="15" y2="19" stroke="#e74c3c" strokeWidth="2" strokeLinecap="round" />
  </svg>;

const MIcIRPF = () =>
<svg width="30" height="30" viewBox="0 0 30 30" fill="none">
    <rect x="7" y="3" width="16" height="24" rx="2.5" stroke="#7a9bbf" strokeWidth="1.8" fill="#dce8f5" />
    <text x="10" y="12" fontSize="6" fontWeight="800" fill="#7a9bbf">IR</text>
    <line x1="10" y1="16" x2="20" y2="16" stroke="#7a9bbf" strokeWidth="1.3" strokeLinecap="round" />
    <line x1="10" y1="19.5" x2="20" y2="19.5" stroke="#7a9bbf" strokeWidth="1.3" strokeLinecap="round" />
    <line x1="10" y1="23" x2="16" y2="23" stroke="#7a9bbf" strokeWidth="1.3" strokeLinecap="round" />
  </svg>;

const MIcCarePlus = () =>
<svg width="30" height="30" viewBox="0 0 30 30" fill="none">
    <circle cx="15" cy="15" r="10" fill="#dce8f5" stroke="#0079c8" strokeWidth="1.8" />
    <line x1="15" y1="9" x2="15" y2="21" stroke="#0079c8" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="9" y1="15" x2="21" y2="15" stroke="#0079c8" strokeWidth="2.2" strokeLinecap="round" />
  </svg>;

const MIcSeguro = () =>
<svg width="30" height="30" viewBox="0 0 30 30" fill="none">
    <path d="M8 10l7-5 7 5v8c0 4-7 8-7 8s-7-4-7-8v-8z" stroke="#7a9bbf" strokeWidth="1.8" fill="#dce8f5" />
    <path d="M11 16l3 3 5-5" stroke="#7a9bbf" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>;


// ─── MENU OVERLAY ────────────────────────────────────────────────────────────
function MenuScreen({ ctx }) {
  const { navigate, goBack } = ctx;
  const items = [
  { id: 'home', label: 'Home', Icon: MIcHome, navigable: true },
  { id: 'blua', label: null, Icon: null, navigable: true, isBlua: true },
  { id: 'carteirinha', label: 'Carteirinha', Icon: MIcCarteirinha, navigable: true },
  { id: 'token', label: 'Token', Icon: MIcToken, navigable: false },
  { id: 'rede', label: 'Busca\nde Rede', Icon: MIcRede, navigable: true },
  { id: 'reembolso', label: 'Reembolso', Icon: MIcReembolso, navigable: true },
  { id: 'autorizacoes', label: 'Autorização', Icon: MIcAutorizacao, navigable: true },
  { id: 'atendimento', label: 'Atendimento', Icon: MIcAtendimento, navigable: false },
  { id: 'emergencia', label: 'Emergência\nMédica', Icon: MIcEmergencia, navigable: false },
  { id: 'irpf', label: 'Demonstrat\nivo IRPF', Icon: MIcIRPF, navigable: false },
  { id: 'careplus', label: 'Care Plus +', Icon: MIcCarePlus, navigable: false },
  { id: 'seguro', label: 'Seguro\nViagem', Icon: MIcSeguro, navigable: false }];


  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: CP.white }}>
      {/* Header */}
      <div style={{ padding: '14px 18px 10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
        <span style={{ fontSize: 24, fontWeight: 700, color: CP.text }}>Menu</span>
        <button onClick={goBack} style={{ background: 'none', border: 'none', cursor: 'pointer', color: CP.textMid, display: 'flex', padding: 4 }}>
          <IcClose />
        </button>
      </div>
      {/* Grid */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '6px 14px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
          {items.map((item) => {
            if (item.isBlua) {
              return (
                <button key={item.id} onClick={() => navigate('blua')}
                style={{ backgroundColor: CP.navy, borderRadius: 14, padding: '14px 10px 12px', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4, border: 'none', minHeight: 90 }}>
                  <span style={{ fontSize: 22, fontWeight: 900, color: CP.white, letterSpacing: -0.5, lineHeight: 1 }}>blua.</span>
                  <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.7)', fontWeight: 500, lineHeight: 1.3, textAlign: 'center' }}>Saúde Digital</span>
                </button>);

            }
            return (
              <button key={item.id} onClick={() => item.navigable ? navigate(item.id) : goBack()}
              style={{ backgroundColor: '#f0f5fb', border: '1px solid #e4ecf5', borderRadius: 14, padding: '14px 8px 12px', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, textAlign: 'center', minHeight: 90 }}>
                <item.Icon />
                <span style={{ fontSize: 10.5, fontWeight: 500, color: CP.textMid, lineHeight: 1.3, whiteSpace: 'pre-line' }}>{item.label}</span>
              </button>);

          })}
        </div>
      </div>
    </div>);

}

// ─── CARTEIRINHA ─────────────────────────────────────────────────────────────
function CarteirinhaScreen({ ctx }) {
  return (
    <FlowScreen title="Carteirinha" onBack={ctx.goBack}
    foot={<PrimaryBtn onClick={() => {}}>Compartilhar</PrimaryBtn>}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {/* Card */}
        <div style={{ background: `linear-gradient(135deg, ${CP.primary}, ${CP.navy})`, borderRadius: 16, padding: 20, color: CP.white, boxShadow: '0 8px 24px rgba(0,121,200,0.3)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
            <div>
              <div style={{ fontSize: 11, opacity: 0.7, marginBottom: 2 }}>Care Plus</div>
              <div style={{ fontWeight: 900, fontSize: 16 }}>Plano Premium</div>
            </div>
            <div style={{ fontSize: 20, fontWeight: 900, letterSpacing: -0.5 }}>blua.</div>
          </div>
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 11, opacity: 0.7, marginBottom: 3 }}>Beneficiário</div>
            <div style={{ fontSize: 16, fontWeight: 700 }}>Renato Fagundes Santos</div>
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            <div>
              <div style={{ fontSize: 10, opacity: 0.7 }}>Carteira</div>
              <div style={{ fontSize: 13, fontWeight: 600 }}>52341-07890 10</div>
            </div>
            <div>
              <div style={{ fontSize: 10, opacity: 0.7 }}>Validade</div>
              <div style={{ fontSize: 13, fontWeight: 600 }}>12/2027</div>
            </div>
          </div>
        </div>
        {/* Details */}
        <div style={{ backgroundColor: CP.warmGrey, borderRadius: 12, padding: 16 }}>
          {[['Plano', 'Care Plus Premium'], ['CNPJ Operadora', '03.585-410/0001-35'], ['CPF', '123.456.789-00'], ['Data de nascimento', '15/03/1985']].map(([k, v]) =>
          <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: `1px solid ${CP.border}` }}>
              <span style={{ fontSize: 13, color: CP.textLight }}>{k}</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: CP.text }}>{v}</span>
            </div>
          )}
        </div>
      </div>
    </FlowScreen>);

}

// ─── REDE CREDENCIADA ─────────────────────────────────────────────────────────
// ─── REDE CREDENCIADA ─────────────────────────────────────────────────────────
function RedeScreen({ ctx }) {
  const [chip, setChip] = React.useState('Todos');
  const [busca, setBusca] = React.useState('');
  const isFeminino = localStorage.getItem('cj_gender') === 'Feminino';

  const chips = ['Todos', 'Hospitais', 'Clínicas', 'Médicos', 'Laboratórios', 'Exames'];

  const allClinics = [
  { name: 'Nova Clínica', type: 'Clínica Geral', cat: 'Clínicas', addr: 'Av. Dr. Dante Pazzanese, 500 – Ibirapuera' },
  { name: 'Inovação Diagnósticos', type: 'Diagnóstico por imagem', cat: 'Laboratórios', addr: 'R. Liberdade, 123 – Liberdade' },
  { name: 'Clínica Preston', type: 'Cardiologia', cat: 'Clínicas', addr: 'Al. Santos, 200 – Jardins' },
  { name: 'Hospital São Luiz', type: 'Hospital geral', cat: 'Hospitais', addr: 'R. Madre Cabrini, 48 – Vila Mariana' },
  { name: 'Dr. Carlos Menezes', type: 'Ortopedista', cat: 'Médicos', addr: 'Av. Rebouças, 1585 – Pinheiros' },
  { name: 'Dra. Ana Figueiredo', type: 'Ginecologista', cat: 'Médicos', addr: 'Av. Europa, 800 – Jardim Europa' }];


  const clinics = allClinics.filter((c) => {
    const matchChip = chip === 'Todos' || c.cat === chip;
    const matchBusca = !busca || c.name.toLowerCase().includes(busca.toLowerCase()) || c.type.toLowerCase().includes(busca.toLowerCase());
    return matchChip && matchBusca;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: CP.white }}>
      {/* Header */}
      <div style={{ padding: '8px 16px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
        <button onClick={() => ctx.navigateTab('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6, color: CP.text, display: 'flex' }}><IcBack /></button>
        <button onClick={() => ctx.navigate('menu')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6, color: CP.text, display: 'flex' }}><IcMenu /></button>
      </div>
      <div style={{ padding: '8px 20px 10px', flexShrink: 0 }}>
        <div style={{ fontSize: 26, fontWeight: 700, color: CP.text, marginBottom: 12 }}>Buscar na rede</div>
        {/* Search input */}
        <div style={{ backgroundColor: '#f0f5fb', borderRadius: 24, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <span style={{ color: CP.textLight, flexShrink: 0 }}><IcSearch /></span>
          <input value={busca} onChange={(e) => setBusca(e.target.value)} placeholder="Especialidade, médico ou clínica…"
          style={{ border: 'none', background: 'none', outline: 'none', fontSize: 13, flex: 1, fontFamily: 'inherit', color: CP.text }} />
        </div>
        {/* Chips */}
        <div style={{ display: 'flex', gap: 7, overflowX: 'auto' }}>
          {chips.map((c) =>
          <button key={c} onClick={() => setChip(c)}
          style={{ padding: '6px 14px', borderRadius: 20, border: `1.5px solid ${chip === c ? CP.primary : CP.border}`, backgroundColor: chip === c ? CP.primary : CP.white, color: chip === c ? CP.white : CP.textMid, fontSize: 12, fontWeight: 600, cursor: 'pointer', flexShrink: 0, whiteSpace: 'nowrap' }}>
              {c}
            </button>
          )}
        </div>
      </div>

      {/* Scrollable content */}
      <div style={{ flex: 1, overflowY: 'auto' }}>

        {/* Map */}
        <div style={{ height: 160, backgroundColor: '#d8e8d8', position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 6 }}>
            <span style={{ fontSize: 28 }}>🗺️</span>
            <span style={{ fontSize: 11, color: CP.textMid, backgroundColor: 'rgba(255,255,255,0.85)', padding: '3px 10px', borderRadius: 20 }}>mapa da rede credenciada</span>
          </div>
          {[[20, 40], [45, 60], [65, 30], [30, 70]].map(([l, t], i) =>
          <div key={i} style={{ position: 'absolute', left: `${l}%`, top: `${t}%`, color: CP.primary, fontSize: 18 }}>📍</div>
          )}
        </div>

        {/* Banners */}
        <div style={{ padding: '14px 16px 0' }}>

          {/* Rede+ */}
          <div style={{ ...{ backgroundColor: CP.navy, borderRadius: 14, padding: '16px', display: 'flex', alignItems: 'center', gap: 14, marginBottom: 10 }, backgroundColor: "rgb(51, 83, 138)" }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ fontSize: 22 }}>⭐</span>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: CP.white, marginBottom: 4 }}>Rede+</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', lineHeight: 1.45, fontWeight: "500" }}>Especialistas com doutorado e pós-graduação, selecionados pela Care Plus</div>
            </div>
            <button style={{ backgroundColor: CP.white, color: CP.navy, border: 'none', borderRadius: 8, padding: '9px 14px', fontSize: 12, fontWeight: 700, cursor: 'pointer', flexShrink: 0, whiteSpace: 'nowrap' }}>
              Conhecer ›
            </button>
          </div>

          {/* Oya Care — só para mulheres */}
          {isFeminino &&
          <div style={{ backgroundColor: '#e8f5f0', borderRadius: 14, padding: '16px', display: 'flex', alignItems: 'center', gap: 14, marginBottom: 10, border: '1.5px solid #a8dcc8' }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: '#b5e0ce', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: 22 }}>🌸</span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#0d5c3a', marginBottom: 4 }}>Oya Care</div>
                <div style={{ fontSize: 11, color: '#2d7a56', lineHeight: 1.45, marginBottom: 6 }}>Uma experiência de saúde feminina — ginecologia, endocrinologia e muito mais</div>
                <div style={{ fontSize: 10, color: '#2d7a56', fontWeight: 700 }}>Incluído no seu plano · Sem custo adicional</div>
              </div>
              <button style={{ backgroundColor: '#0d9e75', color: CP.white, border: 'none', borderRadius: 8, padding: '9px 14px', fontSize: 12, fontWeight: 700, cursor: 'pointer', flexShrink: 0, whiteSpace: 'nowrap' }}>
                Conhecer ›
              </button>
            </div>
          }
        </div>

        {/* Results */}
        <div style={{ padding: '4px 0 8px' }}>
          <div style={{ padding: '6px 20px 10px', fontSize: 12, color: CP.textLight }}>{clinics.length} resultado{clinics.length !== 1 ? 's' : ''} encontrado{clinics.length !== 1 ? 's' : ''}</div>
          {clinics.map((c, i) =>
          <div key={i} style={{ padding: '14px 16px', borderBottom: `1px solid ${CP.border}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 3 }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: CP.text }}>{c.name}</div>
                <span style={{ fontSize: 10, backgroundColor: '#f0f5fb', color: CP.primary, fontWeight: 600, padding: '2px 8px', borderRadius: 20, flexShrink: 0, marginLeft: 8 }}>{c.cat}</span>
              </div>
              <div style={{ fontSize: 12, color: CP.textLight, marginBottom: 4 }}>{c.type}</div>
              <div style={{ fontSize: 12, color: CP.textMid, marginBottom: 10, display: 'flex', alignItems: 'flex-start', gap: 4 }}>
                <span style={{ marginTop: 1, flexShrink: 0 }}><IcLocation /></span>{c.addr}
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button style={{ flex: 1, padding: '8px', borderRadius: 8, border: `1.5px solid ${CP.primary}`, backgroundColor: CP.white, color: CP.primary, fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>Traçar rota</button>
                <button style={{ flex: 1, padding: '8px', borderRadius: 8, border: 'none', backgroundColor: CP.primary, color: CP.white, fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>Ligar</button>
              </div>
            </div>
          )}
        </div>

      </div>
      <BottomNav active="rede" navigate={(id) => ctx.navigateTab(id)} />
    </div>);

}

// ─── REEMBOLSO ICONS ─────────────────────────────────────────────────────────
const IcReembolsoSolicitar = () =>
<svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect x="3" y="6" width="22" height="16" rx="3" stroke="#0079c8" strokeWidth="1.8" fill="#e8f4fd" />
    <rect x="3" y="11" width="22" height="5" fill="#0079c8" opacity="0.18" />
    <line x1="7" y1="18.5" x2="13" y2="18.5" stroke="#0079c8" strokeWidth="1.4" strokeLinecap="round" />
    <circle cx="20.5" cy="18.5" r="3" fill="#0079c8" />
    <text x="20.5" y="20.8" textAnchor="middle" fontSize="5" fontWeight="800" fill="white">$</text>
  </svg>;

const IcReembolsoConsultar = () =>
<svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="13" cy="13" r="7.5" stroke="#0079c8" strokeWidth="1.8" fill="#e8f4fd" />
    <text x="13" y="17" textAnchor="middle" fontSize="9" fontWeight="700" fill="#0079c8">$</text>
    <line x1="18.5" y1="18.5" x2="23" y2="23" stroke="#0079c8" strokeWidth="2" strokeLinecap="round" />
  </svg>;

const IcReembolsoPrevSolicitar = () =>
<svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect x="5" y="2" width="15" height="20" rx="2" stroke="#0079c8" strokeWidth="1.8" fill="#e8f4fd" />
    <line x1="8.5" y1="8" x2="16.5" y2="8" stroke="#0079c8" strokeWidth="1.4" strokeLinecap="round" />
    <line x1="8.5" y1="12" x2="16.5" y2="12" stroke="#0079c8" strokeWidth="1.4" strokeLinecap="round" />
    <line x1="8.5" y1="16" x2="13" y2="16" stroke="#0079c8" strokeWidth="1.4" strokeLinecap="round" />
    <circle cx="22" cy="22" r="4.5" fill="#0079c8" />
    <line x1="22" y1="19.5" x2="22" y2="24.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
    <line x1="19.5" y1="22" x2="24.5" y2="22" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
  </svg>;

const IcReembolsoPrevConsultar = () =>
<svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect x="5" y="2" width="15" height="20" rx="2" stroke="#0079c8" strokeWidth="1.8" fill="#e8f4fd" />
    <line x1="8.5" y1="8" x2="16.5" y2="8" stroke="#0079c8" strokeWidth="1.4" strokeLinecap="round" />
    <line x1="8.5" y1="12" x2="16.5" y2="12" stroke="#0079c8" strokeWidth="1.4" strokeLinecap="round" />
    <line x1="8.5" y1="16" x2="13" y2="16" stroke="#0079c8" strokeWidth="1.4" strokeLinecap="round" />
    <circle cx="22" cy="22" r="4.5" fill="#e8f4fd" stroke="#0079c8" strokeWidth="1.5" />
    <line x1="19.8" y1="22" x2="24.2" y2="22" stroke="#0079c8" strokeWidth="1.6" strokeLinecap="round" />
  </svg>;


// ─── REEMBOLSO ────────────────────────────────────────────────────────────────
function ReembolsoScreen({ ctx }) {
  const opts = [
  { label: 'Solicitar reembolso', Icon: IcReembolsoSolicitar },
  { label: 'Consultar reembolso', Icon: IcReembolsoConsultar },
  { label: 'Solicitar prévia de reembolso', Icon: IcReembolsoPrevSolicitar },
  { label: 'Consultar prévia de reembolso', Icon: IcReembolsoPrevConsultar }];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: CP.white }}>
      {/* Header — back arrow + hamburger, sem título */}
      <div style={{ padding: '8px 16px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
        <button onClick={() => ctx.navigateTab('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6, color: CP.text, display: 'flex' }}>
          <IcBack />
        </button>
        <button onClick={() => ctx.navigate('menu')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6, color: CP.text, display: 'flex' }}>
          <IcMenu />
        </button>
      </div>
      {/* Título da página */}
      <div style={{ padding: '10px 20px 4px', flexShrink: 0 }}>
        <div style={{ fontSize: 28, fontWeight: 700, color: CP.text, marginBottom: 6 }}>Reembolso</div>
        <div style={{ fontSize: 14, color: CP.textLight }}>Selecione uma das opções</div>
      </div>
      {/* Opções */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 16px 20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {opts.map(({ label, Icon }, i) =>
        <button key={i} onClick={() => {}}
        style={{ width: '100%', backgroundColor: '#f0f5fb', border: 'none', borderRadius: 12, padding: '16px 18px', display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer', textAlign: 'left' }}>
            <div style={{ flexShrink: 0 }}><Icon /></div>
            <span style={{ fontSize: 15, fontWeight: 500, color: CP.text }}>{label}</span>
          </button>
        )}
      </div>
      <BottomNav active="reembolso" navigate={(id) => ctx.navigateTab(id)} />
    </div>);

}

// ─── AUTORIZAÇÕES ────────────────────────────────────────────────────────────
function AutorizacoesScreen({ ctx }) {
  const [benef, setBenef] = React.useState('Renato Fagundes Santos');
  const records = [
  { date: '04/10/2024', clinic: 'Nova Clínica', type: 'Fisioterapia em miopatias', status: 'Liberado' },
  { date: '12/09/2024', clinic: 'Inovação Diagnósticos', type: 'Vacina Influenza', status: 'Liberado' },
  { date: '05/09/2024', clinic: 'Clínica Preston', type: 'Acupuntura', status: 'Liberado' },
  { date: '22/06/2024', clinic: 'Nova Clínica', type: 'Fisioterapia em miopatias', status: 'Liberado' },
  { date: '10/05/2024', clinic: 'Inovação Diagnósticos', type: 'Hemograma completo', status: 'Liberado' }];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: CP.white }}>
      {/* Header */}
      <div style={{ padding: '8px 16px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
        <button onClick={() => ctx.navigateTab('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6, color: CP.text, display: 'flex' }}>
          <IcBack />
        </button>
        <button onClick={() => ctx.navigate('menu')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6, color: CP.text, display: 'flex' }}>
          <IcMenu />
        </button>
      </div>
      {/* Page title */}
      <div style={{ padding: '10px 20px 16px', flexShrink: 0 }}>
        <div style={{ fontSize: 24, fontWeight: 700, color: CP.text }}>Consultar autorização</div>
      </div>
      {/* Scrollable content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '0 16px 20px' }}>
        {/* Beneficiário dropdown */}
        <div style={{ marginBottom: 12 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: CP.textMid, marginBottom: 8 }}>Beneficiário(a)</div>
          <div style={{ display: 'flex', alignItems: 'center', border: `1.5px solid ${CP.border}`, borderRadius: 10, overflow: 'hidden', backgroundColor: CP.white }}>
            <div style={{ flex: 1, padding: '13px 14px', fontSize: 15, color: CP.text }}>{benef}</div>
            <button style={{ backgroundColor: CP.primary, border: 'none', cursor: 'pointer', padding: '0 14px', alignSelf: 'stretch', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6,9 12,15 18,9" />
              </svg>
            </button>
          </div>
        </div>
        {/* Data filter row */}
        <button style={{ width: '100%', backgroundColor: CP.white, border: `1.5px solid ${CP.border}`, borderRadius: 10, padding: '13px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', marginBottom: 10 }}>
          <span style={{ fontSize: 14, color: CP.textMid }}>Data (maior para menor)</span>
          <IcChevron />
        </button>
        {/* Subtitle */}
        <div style={{ fontSize: 12, color: CP.textLight, marginBottom: 14 }}>Dados referentes ao período de 90 dias.</div>
        {/* Records */}
        {records.map((r, i) =>
        <button key={i} onClick={() => {}}
        style={{ width: '100%', backgroundColor: CP.white, border: `1px solid ${CP.border}`, borderRadius: 10, padding: '12px 14px', marginBottom: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', textAlign: 'left' }}>
            <div>
              <div style={{ fontSize: 12, color: CP.textLight, marginBottom: 3 }}>{r.date}</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: CP.text, marginBottom: 2 }}>{r.clinic}</div>
              <div style={{ fontSize: 13, color: CP.textLight, marginBottom: 2 }}>{r.type}</div>
              <div style={{ fontSize: 13, color: CP.textLight }}>{r.status}</div>
            </div>
            <span style={{ color: CP.textLight, flexShrink: 0, marginLeft: 8 }}><IcChevron /></span>
          </button>
        )}
      </div>
      <BottomNav active="autorizacoes" navigate={(id) => ctx.navigateTab(id)} />
    </div>);

}

// ─── JOURNEY (EMPTY) ─────────────────────────────────────────────────────────
function JourneyScreen({ ctx }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ backgroundColor: CP.white, padding: '14px 16px', borderBottom: `1px solid ${CP.border}`, flexShrink: 0 }}>
        <div style={{ fontWeight: 900, fontSize: 18, color: CP.navy }}>Journey</div>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 32, textAlign: 'center' }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>🏆</div>
        <div style={{ fontSize: 18, fontWeight: 700, color: CP.text, marginBottom: 8 }}>Em breve</div>
        <div style={{ fontSize: 14, color: CP.textLight, lineHeight: 1.5 }}>Esta funcionalidade estará disponível em breve. Fique ligado!</div>
      </div>
      <BottomNav active="journey" navigate={(id) => ctx.navigateTab(id)} />
    </div>);

}

Object.assign(window, {
  HomeScreen, MenuScreen, CarteirinhaScreen, RedeScreen,
  ReembolsoScreen, AutorizacoesScreen, JourneyScreen
});