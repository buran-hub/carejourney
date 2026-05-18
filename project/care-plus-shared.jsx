// care-plus-shared.jsx — Design tokens + shared UI for Care Plus AS-IS prototype

const CP = {
  primary: '#0079c8',
  navy: '#0d1846',
  white: '#FFFFFF',
  warmGrey: '#F1EFEB',
  lightBg: '#f5f7fa',
  text: '#1a1a2e',
  textMid: '#555566',
  textLight: '#9999aa',
  border: '#e4e2de',
  success: '#27ae60',
  warning: '#e67e22',
  danger: '#e74c3c',
  lightBlue: '#e8f4fd',
};

// ─── SVG Icons ───────────────────────────────────────────────────────────────

const IcChevron = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9,18 15,12 9,6"/>
  </svg>
);

const IcBack = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15,18 9,12 15,6"/>
  </svg>
);

const IcBell = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6V11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
  </svg>
);

const IcMenu = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
  </svg>
);

const IcClose = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const IcCheck = ({ size = 20, color }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || CP.primary} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20,6 9,17 4,12"/>
  </svg>
);

const IcSearch = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);

const IcLocation = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill={CP.primary}>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

const IcCalendar = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill={CP.primary}>
    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
  </svg>
);

// Bottom Nav Icons
const IcHome = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? CP.primary : CP.textLight}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
  </svg>
);

const IcNetwork = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? CP.primary : CP.textLight}>
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
  </svg>
);

const IcMoney = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? CP.primary : CP.textLight}>
    <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
  </svg>
);

const IcAuth = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? CP.primary : CP.textLight}>
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
  </svg>
);

const IcTrophy = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? CP.primary : CP.textLight}>
    <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zm-2 3.99V7h2v1c0 1.65-1.35 3-3 3-.28 0-.54-.04-.8-.1.5-.62.8-1.4.8-2.91zM5 8V7h2v1.99c0 1.51.3 2.29.8 2.91-.26.06-.52.1-.8.1C5.35 11.99 5 10.64 5 9V8z"/>
  </svg>
);

// ─── Global Toast system ─────────────────────────────────────────────────────
window.__showToast = function(label, coins) {
  // Remove any existing toast
  const existing = document.getElementById('__cp_toast');
  if (existing) existing.remove();

  const el = document.createElement('div');
  el.id = '__cp_toast';
  el.innerHTML = `
    <div style="display:flex;align-items:center;gap:10px;">
      <div style="width:36px;height:36px;border-radius:50%;background:#fffde7;border:2px solid #ffd54f;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:18px;">🪙</div>
      <div>
        <div style="font-size:13px;font-weight:700;color:#fff;line-height:1.3">+${coins} Coins desbloqueados!</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.75);margin-top:2px;line-height:1.3">${label}</div>
      </div>
    </div>`;
  el.style.cssText = [
    'position:fixed',
    'top:80px',
    'left:50%',
    'transform:translateX(-50%)',
    'background:#1a2a4a',
    'border:1.5px solid rgba(255,212,63,0.4)',
    'border-radius:14px',
    'padding:12px 16px',
    'z-index:99999',
    'font-family:Montserrat,sans-serif',
    'box-shadow:0 6px 24px rgba(0,0,0,0.35)',
    'width:calc(100% - 40px)',
    'max-width:340px',
    'animation:__cpToastIn 0.35s cubic-bezier(0.34,1.56,0.64,1)',
    'pointer-events:none',
  ].join(';');

  // Inject keyframe once
  if (!document.getElementById('__cp_toast_style')) {
    const s = document.createElement('style');
    s.id = '__cp_toast_style';
    s.textContent = `
      @keyframes __cpToastIn {
        from { opacity:0; transform:translateX(-50%) translateY(-16px) scale(0.92); }
        to   { opacity:1; transform:translateX(-50%) translateY(0)     scale(1);    }
      }
      @keyframes __cpToastOut {
        from { opacity:1; transform:translateX(-50%) translateY(0)     scale(1);    }
        to   { opacity:0; transform:translateX(-50%) translateY(-10px) scale(0.95); }
      }
    `;
    document.head.appendChild(s);
  }

  document.body.appendChild(el);
  setTimeout(() => {
    if (el.parentNode) {
      el.style.animation = '__cpToastOut 0.3s ease forwards';
      setTimeout(() => el.remove(), 310);
    }
  }, 3200);
};

function AppHeader({ onMenu, onNotification, userName }) {
  return (
    <div style={{ backgroundColor: CP.white, padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: `1px solid ${CP.border}`, flexShrink: 0 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: CP.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', color: CP.white, fontWeight: 700, fontSize: 16, flexShrink: 0 }}>
          {(userName || 'R')[0]}
        </div>
        <span style={{ fontSize: 15, fontWeight: 600, color: CP.text }}>Olá, {userName || getUserFirstName()}!</span>
      </div>
      <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
        <button onClick={onNotification} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: CP.textMid, display: 'flex' }}><IcBell /></button>
        <button onClick={onMenu} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: CP.textMid, display: 'flex' }}><IcMenu /></button>
      </div>
    </div>
  );
}

function BackHeader({ title, onBack, bg, titleColor, rightSlot }) {
  return (
    <div style={{ backgroundColor: bg || CP.white, padding: '0 16px', display: 'flex', alignItems: 'center', gap: 10, borderBottom: bg ? 'none' : `1px solid ${CP.border}`, flexShrink: 0, height: 52 }}>
      <button onClick={onBack} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: titleColor || CP.text, display: 'flex', flexShrink: 0 }}><IcBack /></button>
      <span style={{ flex: 1, fontSize: 16, fontWeight: 700, color: titleColor || CP.text }}>{title}</span>
      {rightSlot && <div>{rightSlot}</div>}
    </div>
  );
}

function BottomNav({ active, navigate }) {
  const tabs = [
    { id: 'home', label: 'Home', Icon: IcHome },
    { id: 'rede', label: 'Rede', Icon: IcNetwork },
    { id: 'reembolso', label: 'Reembolso', Icon: IcMoney },
    { id: 'autorizacoes', label: 'Autorização', Icon: IcAuth },
    { id: 'journey', label: 'Journey', Icon: IcTrophy },
  ];
  return (
    <div style={{ backgroundColor: CP.white, borderTop: `1px solid ${CP.border}`, display: 'flex', flexShrink: 0 }}>
      {tabs.map(tab => {
        const isActive = active === tab.id;
        return (
          <button key={tab.id} onClick={() => navigate(tab.id)} style={{ flex: 1, border: 'none', background: 'none', cursor: 'pointer', padding: '8px 4px 6px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <tab.Icon active={isActive} />
            <span style={{ fontSize: 10, fontWeight: isActive ? 700 : 500, color: isActive ? CP.primary : CP.textLight }}>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}

function PrimaryBtn({ children, onClick, disabled, style }) {
  return (
    <button onClick={onClick} disabled={disabled} style={{ backgroundColor: disabled ? '#bbb' : CP.primary, color: CP.white, border: 'none', borderRadius: 8, padding: '14px 20px', fontSize: 15, fontWeight: 700, width: '100%', cursor: disabled ? 'not-allowed' : 'pointer', ...style }}>
      {children}
    </button>
  );
}

function SecondaryBtn({ children, onClick, style }) {
  return (
    <button onClick={onClick} style={{ backgroundColor: CP.white, color: CP.primary, border: `2px solid ${CP.primary}`, borderRadius: 8, padding: '12px 20px', fontSize: 15, fontWeight: 700, width: '100%', cursor: 'pointer', ...style }}>
      {children}
    </button>
  );
}

function ListRow({ icon, label, sublabel, onClick, right, noBorder }) {
  return (
    <button onClick={onClick} style={{ width: '100%', background: CP.white, border: 'none', borderBottom: noBorder ? 'none' : `1px solid ${CP.border}`, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', textAlign: 'left' }}>
      {icon && <div style={{ flexShrink: 0 }}>{icon}</div>}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 15, fontWeight: 600, color: CP.text }}>{label}</div>
        {sublabel && <div style={{ fontSize: 12, color: CP.textLight, marginTop: 2 }}>{sublabel}</div>}
      </div>
      {right !== undefined ? right : <span style={{ color: CP.textLight }}><IcChevron /></span>}
    </button>
  );
}

// Generic inner screen: back header + scrollable body + optional sticky bottom
function FlowScreen({ title, onBack, children, foot, headerBg, headerTitleColor, noPad }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: CP.white }}>
      <BackHeader title={title} onBack={onBack} bg={headerBg} titleColor={headerTitleColor} />
      <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', padding: noPad ? 0 : 16, backgroundColor: CP.white }}>
        {children}
      </div>
      {foot && (
        <div style={{ padding: '12px 16px', backgroundColor: CP.white, borderTop: `1px solid ${CP.border}`, flexShrink: 0 }}>
          {foot}
        </div>
      )}
    </div>
  );
}

function SectionHeader({ children, action, onAction }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
      <span style={{ fontSize: 16, fontWeight: 700, color: CP.text }}>{children}</span>
      {action && <button onClick={onAction} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 13, color: CP.primary, fontWeight: 600, padding: 0 }}>{action}</button>}
    </div>
  );
}

function InputField({ label, placeholder, value, onChange, type }) {
  return (
    <div style={{ marginBottom: 14 }}>
      {label && <div style={{ fontSize: 13, fontWeight: 600, color: CP.textMid, marginBottom: 5 }}>{label}</div>}
      <input type={type || 'text'} placeholder={placeholder} value={value} onChange={onChange}
        style={{ width: '100%', border: `1.5px solid ${CP.border}`, borderRadius: 8, padding: '11px 13px', fontSize: 14, color: CP.text, backgroundColor: CP.white, outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit' }} />
    </div>
  );
}

function IlloPlaceholder({ label, height, bg }) {
  return (
    <div style={{ height: height || 140, backgroundColor: bg || CP.lightBg, borderRadius: 12, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: CP.textLight, fontSize: 11, textAlign: 'center', padding: 16 }}>
      <div style={{ fontSize: 28, marginBottom: 6, opacity: 0.35 }}>▤</div>
      <div style={{ lineHeight: 1.4 }}>{label}</div>
    </div>
  );
}

function SelectField({ label, options, value, onChange }) {
  return (
    <div style={{ marginBottom: 14 }}>
      {label && <div style={{ fontSize: 13, fontWeight: 600, color: CP.textMid, marginBottom: 5 }}>{label}</div>}
      <select value={value} onChange={onChange}
        style={{ width: '100%', border: `1.5px solid ${CP.border}`, borderRadius: 8, padding: '11px 13px', fontSize: 14, color: CP.text, backgroundColor: CP.white, outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit', appearance: 'none' }}>
        {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </div>
  );
}

// Blua-style journey card
function JourneyCard({ icon, title, desc, onClick, accent }) {
  return (
    <button onClick={onClick} style={{ width: '100%', background: CP.white, border: `1px solid ${CP.border}`, borderRadius: 12, padding: 14, display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', textAlign: 'left', marginBottom: 10, boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
      <div style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: accent || CP.lightBlue, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <span style={{ fontSize: 20 }}>{icon}</span>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: CP.text }}>{title}</div>
        {desc && <div style={{ fontSize: 12, color: CP.textLight, marginTop: 2, lineHeight: 1.35 }}>{desc}</div>}
      </div>
      <span style={{ color: CP.textLight, flexShrink: 0 }}><IcChevron /></span>
    </button>
  );
}

// ─── Nome dinâmico baseado em gênero ────────────────────────────────────────
function getUserFirstName() {
  return localStorage.getItem('cj_gender') === 'Feminino' ? 'Maria' : 'Renato';
}
function getUserFullName() {
  return localStorage.getItem('cj_gender') === 'Feminino' ? 'Maria Fagundes Santos' : 'Renato Fagundes Santos';
}

// Export all to window
Object.assign(window, {
  CP,
  IcChevron, IcBack, IcBell, IcMenu, IcClose, IcCheck, IcSearch, IcLocation, IcCalendar,
  IcHome, IcNetwork, IcMoney, IcAuth, IcTrophy,
  AppHeader, BackHeader, BottomNav,
  PrimaryBtn, SecondaryBtn, ListRow, FlowScreen,
  SectionHeader, InputField, IlloPlaceholder, SelectField, JourneyCard,
  getUserFirstName, getUserFullName,
});
