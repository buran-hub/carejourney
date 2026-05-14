// care-journey-home-journey.jsx — HomeTBEScreen + JourneyTBEScreen

// ─── HomeTBEScreen ────────────────────────────────────────────────────────────
// Exactly the same as HomeScreen + 2 new blocks inserted after the header
function HomeTBEScreen({ ctx }) {
  const { navigate } = ctx;
  const [missionDismissed, setMissionDismissed] = React.useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: CP.white }}>

      {/* ── Header (unchanged from AS-IS) ── */}
      <div style={{ padding: '12px 16px 10px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', backgroundColor: CP.white }}>
        <div>
          <div style={{ width: 52, height: 52, borderRadius: 10, backgroundColor: '#dce8f2', overflow: 'hidden', marginBottom: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #c8d8e8' }}>
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
              <rect width="52" height="52" fill="#dce8f2" />
              <ellipse cx="26" cy="21" rx="10" ry="10" fill="#a0b4c8" />
              <ellipse cx="26" cy="46" rx="16" ry="12" fill="#a0b4c8" />
            </svg>
          </div>
          <div style={{ fontSize: 17, color: CP.text, fontWeight: 400 }}>Olá, Renato!</div>
        </div>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center', paddingTop: 8 }}>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 2, color: CP.textMid, position: 'relative', display: 'flex' }}>
            <IcBell />
            <div style={{ position: 'absolute', top: 1, right: 1, width: 9, height: 9, borderRadius: '50%', backgroundColor: '#e74c3c', border: '1.5px solid white' }} />
          </button>
          <button onClick={() => navigate('menu')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 2, color: CP.textMid, display: 'flex' }}>
            <IcMenu />
          </button>
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', backgroundColor: CP.white }}>

        {/* ── [NOVO] Bloco Care Journey ── */}
        <div style={{ padding: '0 16px 12px' }}>
          <div style={{ backgroundColor: CJ.cardBg, borderRadius: 10, height: 52, display: 'flex', alignItems: 'center' }}>
            {/* Col 1 — Care Score + Active */}
            <div style={{ flex: 1.5, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', borderRight: `1px solid ${CJ.border}`, paddingLeft: 14, gap: 2 }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: CJ.textPrimary, lineHeight: 1 }}>Care Score</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <span style={{ fontSize: 10, color: '#D97706', fontWeight: 700 }}>⚡</span>
                <span style={{ fontSize: 10, color: '#D97706', fontWeight: 700 }}>Active</span>
              </div>
            </div>
            {/* Col 2 — Streak */}
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: `1px solid ${CJ.border}`, gap: 4 }}>
              <span style={{ fontSize: 14 }}>🔥</span>
              <span style={{ fontSize: 11, fontWeight: 700, color: CJ.textPrimary }}>12 dias</span>
            </div>
            {/* Col 3 — Coins + ver tudo */}
            <div style={{ flex: 1.3, display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 12, gap: 6 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <div style={{ width: 20, height: 20, borderRadius: '50%', backgroundColor: '#e8e8e8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: 11 }}>🪙</span>
                </div>
                <span style={{ fontSize: 11, fontWeight: 700, color: CJ.textPrimary }}>3.240</span>
              </div>
              <button onClick={() => ctx.navigateTab('journey')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 10, color: CJ.primary, fontWeight: 700, padding: 0, whiteSpace: 'nowrap' }}>ver tudo ›</button>
            </div>
          </div>
        </div>

        {/* ── [NOVO] Card Caren — missão do dia ── */}
        {!missionDismissed &&
        <div style={{ padding: '0 16px 14px' }}>
            <div style={{ backgroundColor: CP.white, borderRadius: 10, border: `1px dashed ${CJ.border}`, padding: '10px 12px', minHeight: 60, display: 'flex', alignItems: 'center', gap: 10, position: 'relative' }}>
              <button onClick={() => setMissionDismissed(true)}
            style={{ position: 'absolute', top: 8, right: 8, background: 'none', border: 'none', cursor: 'pointer', fontSize: 14, color: CJ.textTertiary, lineHeight: 1, padding: 0 }}></button>
              <img src="caren-avatar.png" alt="Caren" style={{ width: 32, height: 32, borderRadius: '50%', objectFit: 'cover', flexShrink: 0, border: `1.5px solid ${CJ.primary}` }} />
              <span style={{ flex: 1, fontSize: 10, color: CJ.textSecondary, lineHeight: 1.4, paddingRight: 12 }}>Seu odontológico está em atraso. Agende agora e ganhe +250 Coins</span>
              <button onClick={() => navigate('consulta-1')} style={{ backgroundColor: CJ.primary, color: CP.white, border: 'none', borderRadius: 6, padding: '8px 12px', fontSize: 11, fontWeight: 700, cursor: 'pointer', flexShrink: 0 }}>Agendar ›</button>
            </div>
          </div>
        }

        {/* ── Acesso rápido (unchanged) ── */}
        <div style={{ padding: '4px 16px 16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <span style={{ fontSize: 17, fontWeight: 700, color: CP.text }}>Acesso rápido</span>
            <button onClick={() => navigate('menu')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 13, color: CP.primary, fontWeight: 600 }}>Ver todos</button>
          </div>
          <div style={{ display: 'flex', gap: 8, height: 118 }}>
            <button onClick={() => navigate('blua')} style={{ flex: 1.35, height: '100%', borderRadius: 12, backgroundColor: CP.navy, border: 'none', cursor: 'pointer', padding: '14px 16px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', boxShadow: '0 3px 10px rgba(13,24,70,0.25)' }}>
              <div style={{ fontWeight: 900, fontSize: 28, color: CP.white, letterSpacing: -1, lineHeight: 1, marginBottom: 4 }}>blua.</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.65)', fontWeight: 500 }}>Saúde Digital</div>
            </button>
            <button onClick={() => navigate('consulta-1')} style={{ flex: 1, height: '100%', borderRadius: 12, backgroundColor: '#f4f8ff', border: '1px solid #e0eaf8', cursor: 'pointer', padding: '10px 8px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img src="dentista-icon.png" alt="Dentista" style={{ width: 46, height: 46, objectFit: 'contain' }} /></div>
              <span style={{ fontSize: 11.5, fontWeight: 600, color: CP.text, textAlign: 'center', lineHeight: 1.3 }}>Agendar dentista</span>
            </button>
            <button onClick={() => navigate('carteirinha')} style={{ flex: 1, height: '100%', borderRadius: 12, backgroundColor: '#f4f8ff', border: '1px solid #e0eaf8', cursor: 'pointer', padding: '10px 8px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img src="carteirinha-icon.png" alt="Carteirinha" style={{ width: 46, height: 46, objectFit: 'contain' }} /></div>
              <span style={{ fontSize: 11.5, fontWeight: 600, color: CP.text, textAlign: 'center', lineHeight: 1.3 }}>Carteirinha</span>
            </button>
          </div>
        </div>

        {/* ── Banners (unchanged) ── */}
        <div style={{ margin: '0 16px 12px', backgroundColor: '#edf4ff', borderRadius: 14, padding: '14px 14px', display: 'flex', gap: 10, alignItems: 'flex-start', position: 'relative' }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: CP.text, marginBottom: 5 }}>Exames em casa</div>
            <div style={{ fontSize: 12, color: CP.textMid, lineHeight: 1.45, marginBottom: 14 }}>Exames de análises clínicas no conforto da sua casa.
</div>
            <button onClick={() => navigate('exames-1')} style={{ backgroundColor: CP.navy, color: CP.white, border: 'none', borderRadius: 8, padding: '9px 18px', fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>Agende agora</button>
          </div>
          <div style={{ width: 72, height: 72, borderRadius: '50%', backgroundColor: '#c8d8c0', flexShrink: 0, marginTop: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 28 }}>🔬</span>
          </div>
          {/* Sem copay badge */}
          <div style={{ position: 'absolute', bottom: 10, right: 10, backgroundColor: CP.primary, borderRadius: 20, padding: '3px 9px', display: 'flex', alignItems: 'center', gap: 4 }}>
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><rect x="1" y="3.5" width="10" height="5" rx="2.5" stroke="white" strokeWidth="1.3" /><line x1="6" y1="3.5" x2="6" y2="8.5" stroke="white" strokeWidth="1.3" /></svg>
            <span style={{ fontSize: 9, fontWeight: 700, color: CP.white }}>Sem copay</span>
          </div>
        </div>

        {/* Care Plus + carrossel */}
        <div style={{ padding: '4px 0 24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 16px', marginBottom: 12 }}>
            <span style={{ fontSize: 17, fontWeight: 700, color: CP.text }}>Care Plus +</span>
            <a href="https://www.careplus.com.br/careplus-mais" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: CP.primary, fontWeight: 600, textDecoration: 'none' }}>Ver todos</a>
          </div>
          <div style={{ display: 'flex', gap: 12, overflowX: 'auto', scrollSnapType: 'x mandatory', margin: "16px" }}>
            <div style={{ minWidth: 16, flexShrink: 0 }} />
            {[{ url: 'https://www.careplus.com.br/careplus-mais/pneumonia-como-a-vacina-ajuda-a-reduzir-internacoes-e-afastamentos', title: 'Pneumonia: como a vacina ajuda a reduzir internações', desc: 'Entenda como as vacinas pneumocócicas protegem você.', imgBg: '#c8d8c0' },
            { url: 'https://www.careplus.com.br/careplus-mais/tratamentos-odontologicos-esteticos-exigem-cuidados', title: 'Tratamentos odontológicos estéticos exigem cuidados', desc: 'Saiba como manter resultados seguros por mais tempo.', imgBg: '#d8c8c8' },
            { url: 'https://www.careplus.com.br/careplus-mais/ecossistema-integrado-de-saude-e-tendencia-no-cuidado-preventivo', title: 'Ecossistema integrado de saúde é tendência preventiva', desc: 'Como o ecossistema integrado melhora o cuidado.', imgBg: '#c0ccd8' }].
            map((a, i) =>
            <a key={i} href={a.url} target="_blank" rel="noopener noreferrer" style={{ minWidth: 180, maxWidth: 180, flexShrink: 0, borderRadius: 14, overflow: 'hidden', border: `1px solid ${CP.border}`, backgroundColor: CP.white, boxShadow: '0 2px 8px rgba(0,0,0,0.07)', textDecoration: 'none', scrollSnapAlign: 'start', display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: 90, backgroundColor: a.imgBg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: 28 }}>{i === 0 ? '💉' : i === 1 ? '🦷' : '🏥'}</span>
                </div>
                <div style={{ padding: '10px 12px 14px' }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: CP.text, lineHeight: 1.4, marginBottom: 4 }}>{a.title}</div>
                  <div style={{ fontSize: 10, color: CP.textLight, lineHeight: 1.4 }}>{a.desc}</div>
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

// ─── JourneyTBEScreen ─────────────────────────────────────────────────────────
function JourneyTBEScreen({ ctx }) {
  const [activeTab, setActiveTab] = React.useState('Saúde');
  const [oyaVisible] = React.useState(localStorage.getItem('cj_gender') === 'Feminino');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: CP.white }}>
      {/* Fixed header */}
      <div style={{ flexShrink: 0, backgroundColor: CP.white, borderBottom: `1px solid ${CJ.border}` }}>
        <div style={{ padding: '12px 16px 8px', textAlign: 'center' }}>
          <span style={{ fontSize: 15, fontWeight: 700, color: CJ.textPrimary }}>Journey</span>
        </div>
        <JourneyScoreCard />
        <JourneyTabSelector active={activeTab} onChange={setActiveTab} />
        <div style={{ height: 10 }} />
      </div>
      {/* Scrollable tab content */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {activeTab === 'Saúde' && <SaudeTab navigate={ctx.navigate} oyaVisible={oyaVisible} />}
        {activeTab === 'Coins' && <CoinsTab />}
        {activeTab === 'Histórico' && <HistoricoTab />}
      </div>
      <BottomNav active="journey" navigate={(id) => ctx.navigateTab(id)} />
    </div>);

}

Object.assign(window, { HomeTBEScreen, JourneyTBEScreen });