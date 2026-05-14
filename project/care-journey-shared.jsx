// care-journey-shared.jsx — Design tokens + shared components for Care Journey TO-BE

const CJ = {
  purple:        '#534AB7',
  teal:          '#0D9E75',
  amber:         '#D97706',
  cardBg:        '#F5F5F5',
  border:        '#E0E0E0',
  textPrimary:   '#1A1A1A',
  textSecondary: '#424242',
  textTertiary:  '#9E9E9E',
  navy:          '#0d1846',
  primary:       '#0079c8',
  white:         '#FFFFFF',
};

// ─── IA Badge ─────────────────────────────────────────────────────────────────
function IaBadge({ label }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, backgroundColor: '#F0F0F0', border: `1px dashed ${CJ.purple}`, borderRadius: 8, padding: '3px 8px', marginBottom: 8 }}>
      <span style={{ fontSize: 8, color: CJ.purple, fontWeight: 700, letterSpacing: 0.3 }}>✦ {label}</span>
    </div>
  );
}

// ─── Coin Pill ────────────────────────────────────────────────────────────────
function CoinPill({ coins, style }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, backgroundColor: '#FFFDE7', border: '1px solid #FFE082', borderRadius: 20, padding: '7px 14px', ...style }}>
      <span style={{ fontSize: 15 }}>🪙</span>
      <span style={{ fontSize: 12, fontWeight: 700, color: '#B8860B' }}>+{coins} Coins ao concluir esta etapa</span>
    </div>
  );
}

// ─── Onboarding progress dots ─────────────────────────────────────────────────
function OnboardingProgress({ current, total = 5, dark }) {
  return (
    <div style={{ display: 'flex', gap: 6, justifyContent: 'center', marginBottom: 28 }}>
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} style={{
          height: 6, borderRadius: 3,
          width: i < current ? 28 : 8,
          backgroundColor: i < current
            ? (dark ? CJ.white : CJ.primary)
            : (dark ? 'rgba(255,255,255,0.25)' : CJ.border),
          transition: 'width 0.3s, background-color 0.3s',
        }} />
      ))}
    </div>
  );
}

// ─── Score header card (used in Journey fixed header) ─────────────────────────
function JourneyScoreCard() {
  return (
    <div style={{ margin: '0 16px', backgroundColor: CJ.cardBg, borderRadius: 10, height: 36, display: 'flex', alignItems: 'center' }}>
      {/* Col 1 */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRight: `1px solid ${CJ.border}`, padding: '0 8px' }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: CJ.textPrimary, lineHeight: 1 }}>⚡ Active · 5.742 pts</span>
        <span style={{ fontSize: 9, color: CJ.textTertiary, marginTop: 1 }}>Nível 3</span>
      </div>
      {/* Col 2 */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: `1px solid ${CJ.border}` }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: CJ.textPrimary }}>🔥 12 dias</span>
      </div>
      {/* Col 3 */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: CJ.textPrimary }}>🪙 3.240</span>
      </div>
    </div>
  );
}

// ─── Tab selector ─────────────────────────────────────────────────────────────
function JourneyTabSelector({ active, onChange }) {
  const tabs = ['Saúde', 'Coins', 'Histórico'];
  return (
    <div style={{ margin: '10px 16px 0', backgroundColor: CJ.cardBg, borderRadius: 8, height: 32, display: 'flex', alignItems: 'center', padding: '3px' }}>
      {tabs.map(tab => (
        <button key={tab} onClick={() => onChange(tab)}
          style={{ flex: 1, height: '100%', borderRadius: 6, border: 'none', cursor: 'pointer', fontSize: 10, fontWeight: 700, transition: 'all 0.2s',
            backgroundColor: active === tab ? CJ.primary : 'transparent',
            color: active === tab ? CJ.white : CJ.textTertiary,
          }}>
          {tab}
        </button>
      ))}
    </div>
  );
}

// ─── Utility: progress bar ────────────────────────────────────────────────────
function ProgressBar({ pct, color, height, bg, style }) {
  return (
    <div style={{ height: height || 5, backgroundColor: bg || CJ.border, borderRadius: 3, overflow: 'hidden', ...style }}>
      <div style={{ height: '100%', width: `${pct}%`, backgroundColor: color || CJ.primary, borderRadius: 3, transition: 'width 0.5s' }} />
    </div>
  );
}

// ─── Onboarding Nav btn ───────────────────────────────────────────────────────
function OBPrimaryBtn({ children, onClick, dark, style }) {
  return (
    <button onClick={onClick}
      style={{ width: '100%', backgroundColor: dark ? CJ.primary : CJ.primary, color: CJ.white, border: 'none', borderRadius: 8, padding: '14px', fontSize: 15, fontWeight: 700, cursor: 'pointer', ...style }}>
      {children}
    </button>
  );
}

function OBSecondaryBtn({ children, onClick, style }) {
  return (
    <button onClick={onClick}
      style={{ width: '100%', backgroundColor: 'transparent', color: CJ.textTertiary, border: 'none', borderRadius: 8, padding: '11px', fontSize: 14, cursor: 'pointer', ...style }}>
      {children}
    </button>
  );
}

// ─── Export ───────────────────────────────────────────────────────────────────
Object.assign(window, {
  CJ, IaBadge, CoinPill, OnboardingProgress,
  JourneyScoreCard, JourneyTabSelector, ProgressBar,
  OBPrimaryBtn, OBSecondaryBtn,
});
