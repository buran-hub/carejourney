// care-journey-onboarding.jsx — Onboarding Care Journey (4 passos)

const ACTIVE_STYLE = (active) => ({
  padding: '9px 4px',
  borderRadius: 20,
  border: `1.5px solid ${active ? '#0079c8' : '#E0E0E0'}`,
  backgroundColor: active ? 'rgba(0,121,200,0.1)' : '#fff',
  color: active ? '#0079c8' : '#9E9E9E',
  fontSize: 11,
  fontWeight: 600,
  cursor: 'pointer',
  lineHeight: 1.3,
  textAlign: 'center',
});

// ─── Toggle component ─────────────────────────────────────────────────────────
function Toggle({ on, onChange }) {
  return (
    <button onClick={() => onChange(!on)}
      style={{ width: 44, height: 24, borderRadius: 12, backgroundColor: on ? '#0079c8' : '#E0E0E0', border: 'none', cursor: 'pointer', position: 'relative', flexShrink: 0, transition: 'background-color 0.2s' }}>
      <div style={{ width: 18, height: 18, borderRadius: '50%', backgroundColor: '#fff', position: 'absolute', top: 3, left: on ? 23 : 3, transition: 'left 0.2s', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }} />
    </button>
  );
}

// ─── TELA 1 — Boas-vindas ─────────────────────────────────────────────────────
function OnboardingWelcome({ ctx }) {
  return (
    <div style={{ height: '100%', backgroundColor: CJ.navy, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 28px' }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 28, fontWeight: 900, color: CJ.white, letterSpacing: -1 }}>blua.</div>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', textAlign: 'center', marginTop: 2 }}>Care Journey</div>
      </div>
      <div style={{ width: 140, height: 140, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.06)', border: '2px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 32 }}>
        <span style={{ fontSize: 56 }}>🏆</span>
      </div>
      <div style={{ fontSize: 24, fontWeight: 700, color: CJ.white, textAlign: 'center', marginBottom: 12, lineHeight: 1.3 }}>Bem-vindo ao Care Journey</div>
      <div style={{ fontSize: 14, color: '#B5D4F4', textAlign: 'center', lineHeight: 1.6, marginBottom: 36 }}>Complete seu perfil e comece a ganhar Coins agora</div>
      <OnboardingProgress current={0} total={4} dark />
      <div style={{ width: '100%' }}>
        <OBPrimaryBtn onClick={() => ctx.navigate('onboarding-2')}>Começar</OBPrimaryBtn>
      </div>
      <div style={{ marginTop: 16, fontSize: 11, color: 'rgba(255,255,255,0.4)', textAlign: 'center' }}>
        Ganhe até 🪙 330 Coins completando o perfil
      </div>
    </div>
  );
}

// ─── TELA 2A — "Quem é você?" ─────────────────────────────────────────────────
function OnboardingDados({ ctx }) {
  const [idade, setIdade] = React.useState('');
  const [genero, setGenero] = React.useState(null);
  const canContinue = idade.length > 0 && genero !== null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#fff' }}>
      <div style={{ padding: '16px 20px 0', flexShrink: 0 }}>
        <OnboardingProgress current={1} total={4} />
        <CoinPill coins={50} style={{ marginBottom: 16 }} />
        <div style={{ fontSize: 26, fontWeight: 700, color: CJ.textPrimary, marginBottom: 6 }}>Quem é você?</div>
        <div style={{ fontSize: 13, color: CJ.textTertiary, lineHeight: 1.5, marginBottom: 28 }}>Essas informações ajudam a Caren a personalizar sua jornada de saúde</div>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '0 20px' }}>
        {/* Idade — campo grande centralizado */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: CJ.textSecondary, marginBottom: 10 }}>Idade</div>
          <input value={idade} onChange={e => setIdade(e.target.value)} placeholder="Ex: 35" type="number"
            style={{ width: '100%', border: `1.5px solid ${idade ? '#0079c8' : CJ.border}`, borderRadius: 12, padding: '16px 20px', fontSize: 22, fontWeight: 700, outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box', textAlign: 'center', color: CJ.textPrimary }} />
        </div>
        {/* Gênero */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: CJ.textSecondary, marginBottom: 10 }}>Gênero</div>
          <div style={{ display: 'flex', gap: 8 }}>
            {['Masculino', 'Feminino', 'Outro'].map(g => (
              <button key={g} onClick={() => setGenero(g)}
                style={{ flex: 1, padding: '12px 4px', borderRadius: 8, border: `1.5px solid ${genero === g ? '#0079c8' : '#E0E0E0'}`, backgroundColor: genero === g ? 'rgba(0,121,200,0.1)' : '#fff', color: genero === g ? '#0079c8' : '#9E9E9E', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
                {g}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div style={{ padding: '12px 20px 16px', flexShrink: 0 }}>
        <OBPrimaryBtn onClick={() => { if (genero) localStorage.setItem('cj_gender', genero); ctx.navigate('onboarding-2b'); }}
          style={{ opacity: canContinue ? 1 : 0.5 }}>
          Continuar
        </OBPrimaryBtn>
      </div>
    </div>
  );
}

// ─── TELA 2B — "O que você quer cuidar?" ─────────────────────────────────────
function OnboardingObjetivos({ ctx }) {
  const [objetivos, setObjetivos] = React.useState([]);
  const allObjetivos = ['Perder peso', 'Ganhar massa', 'Melhorar saúde', 'Reduzir estresse', 'Prevenir doenças', 'Melhorar sono'];
  const toggle = (o) => setObjetivos(prev => prev.includes(o) ? prev.filter(x => x !== o) : [...prev, o]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#fff' }}>
      <div style={{ padding: '16px 20px 0', flexShrink: 0 }}>
        <OnboardingProgress current={1} total={4} />
        <div style={{ fontSize: 26, fontWeight: 700, color: CJ.textPrimary, marginBottom: 6 }}>O que você quer cuidar?</div>
        <div style={{ fontSize: 13, color: CJ.textTertiary, marginBottom: 28, lineHeight: 1.5 }}>Pode escolher mais de um</div>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {allObjetivos.map(o => (
            <button key={o} onClick={() => toggle(o)}
              style={{ padding: '14px 12px', borderRadius: 20, border: `1.5px solid ${objetivos.includes(o) ? '#0079c8' : '#E0E0E0'}`, backgroundColor: objetivos.includes(o) ? 'rgba(0,121,200,0.1)' : '#fff', color: objetivos.includes(o) ? '#0079c8' : '#424242', fontSize: 13, fontWeight: 600, cursor: 'pointer', textAlign: 'center' }}>
              {o}
            </button>
          ))}
        </div>
      </div>
      <div style={{ padding: '12px 20px 16px', flexShrink: 0 }}>
        <OBPrimaryBtn onClick={() => { ctx.addCoins(50); ctx.navigate('onboarding-3'); }}>
          Continuar
        </OBPrimaryBtn>
      </div>
    </div>
  );
}

// ─── TELA 3 — "Seus hábitos" (+50 Coins) ─────────────────────────────────────
function OnboardingHabitos({ ctx }) {
  const [freq, setFreq] = React.useState(null);
  const [sono, setSono] = React.useState(null);
  const [alim, setAlim] = React.useState(null);

  const sections = [
    { emoji: '🏃', label: 'Frequência de atividade física', val: freq, set: setFreq, opts: ['Sedentário', '1–2x/sem', '3–4x/sem', '5+/sem'] },
    { emoji: '😴', label: 'Horas de sono por noite',        val: sono, set: setSono, opts: ['< 5h', '5–6h', '7–8h', '> 8h'] },
    { emoji: '🥗', label: 'Qualidade da alimentação',       val: alim, set: setAlim, opts: ['Poucos vegetais', 'Regular', 'Equilibrada', 'Muito saudável'] },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#fff' }}>
      <div style={{ padding: '16px 20px 0', flexShrink: 0 }}>
        <OnboardingProgress current={2} total={4} />
        <CoinPill coins={50} style={{ marginBottom: 16 }} />
        <div style={{ fontSize: 26, fontWeight: 700, color: CJ.textPrimary, marginBottom: 6 }}>Seus hábitos</div>
        <div style={{ fontSize: 13, color: CJ.textTertiary, marginBottom: 20 }}>Passo 2 de 4 — Rotina e hábitos</div>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '0 20px' }}>
        {sections.map(({ emoji, label, val, set, opts }) => (
          <div key={label} style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: CJ.textSecondary, marginBottom: 10 }}>{emoji} {label}</div>
            <div style={{ display: 'flex', gap: 8 }}>
              {opts.map(o => (
                <button key={o} onClick={() => set(o)}
                  style={{ flex: 1, ...ACTIVE_STYLE(val === o) }}>
                  {o}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{ padding: '12px 20px 16px', flexShrink: 0 }}>
        <OBPrimaryBtn onClick={() => { ctx.addCoins(50); ctx.navigate('onboarding-4'); }}>Continuar</OBPrimaryBtn>
      </div>
    </div>
  );
}

// ─── TELA 4 — "Últimos detalhes" (Wearable + Notificações + LGPD) ─────────────
function OnboardingUltimosDetalhes({ ctx }) {
  const [wearable, setWearable] = React.useState(true);
  const [notif, setNotif] = React.useState(true);
  const [lgpd, setLgpd] = React.useState(false);

  const handleConfirmar = () => {
    if (wearable) ctx.addCoins(100);
    ctx.addCoins(30);
    ctx.navigate('onboarding-7');
  };

  const handlePular = () => {
    ctx.addCoins(30);
    ctx.navigate('onboarding-7');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#fff' }}>
      <div style={{ padding: '16px 20px 0', flexShrink: 0 }}>
        <OnboardingProgress current={3} total={4} />
        <CoinPill coins={130} style={{ marginBottom: 16 }} />
        <div style={{ fontSize: 26, fontWeight: 700, color: CJ.textPrimary, marginBottom: 6 }}>Últimos detalhes</div>
        <div style={{ fontSize: 13, color: CJ.textTertiary, lineHeight: 1.5, marginBottom: 20 }}>Configure como a Care Plus vai cuidar de você</div>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '0 20px' }}>

        {/* Wearable */}
        <div style={{ backgroundColor: '#F5F5F5', borderRadius: 12, padding: 16, marginBottom: 12 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', backgroundColor: '#E8F4FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ fontSize: 18 }}>⌚</span>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#1A1A1A', marginBottom: 3 }}>Acessar dados do smartwatch</div>
              <div style={{ fontSize: 11, color: '#9E9E9E', marginBottom: 4 }}>Passos, sono e frequência cardíaca</div>
              <div style={{ fontSize: 10, color: '#9E9E9E', marginBottom: 6 }}>Apple Health · Google Fit · Garmin</div>
              <div style={{ display: 'inline-block', fontSize: 10, fontWeight: 700, color: '#0D9E75', backgroundColor: '#e8f8f0', borderRadius: 20, padding: '2px 8px' }}>+100 Coins</div>
            </div>
            <Toggle on={wearable} onChange={setWearable} />
          </div>
        </div>

        {/* Notificações */}
        <div style={{ backgroundColor: '#F5F5F5', borderRadius: 12, padding: 16, marginBottom: 12 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', backgroundColor: '#E8F4FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ fontSize: 18 }}>🔔</span>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#1A1A1A', marginBottom: 3 }}>Receber notificações da Care Plus</div>
              <div style={{ fontSize: 11, color: '#9E9E9E' }}>Lembretes de missões e streaks</div>
            </div>
            <Toggle on={notif} onChange={setNotif} />
          </div>
        </div>

        {/* LGPD */}
        <div style={{ backgroundColor: '#F5F5F5', borderRadius: 12, padding: 16, marginBottom: 4 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', backgroundColor: '#E8F4FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ fontSize: 18 }}>🔒</span>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#1A1A1A', marginBottom: 3 }}>Uso dos dados para personalização</div>
              <div style={{ fontSize: 11, color: '#9E9E9E', lineHeight: 1.45, marginBottom: 5 }}>Seus dados nunca são vendidos. Você pode revogar a qualquer momento.</div>
              <div style={{ fontSize: 10, fontWeight: 700, color: '#D97706', marginBottom: 4 }}>Obrigatório</div>
              <button style={{ background: 'none', border: 'none', padding: 0, fontSize: 10, color: '#0079c8', textDecoration: 'underline', cursor: 'pointer' }}>Ver política completa →</button>
            </div>
            {/* Checkbox */}
            <button onClick={() => setLgpd(v => !v)}
              style={{ width: 22, height: 22, borderRadius: 5, border: `2px solid ${lgpd ? '#0079c8' : '#E0E0E0'}`, backgroundColor: lgpd ? '#0079c8' : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0, marginTop: 2 }}>
              {lgpd && <span style={{ color: '#fff', fontSize: 13, fontWeight: 700, lineHeight: 1 }}>✓</span>}
            </button>
          </div>
        </div>
        <div style={{ height: 12 }} />
      </div>

      <div style={{ padding: '12px 20px 6px', flexShrink: 0 }}>
        <OBPrimaryBtn onClick={handleConfirmar} style={{ opacity: lgpd ? 1 : 0.45 }}>
          Confirmar e continuar
        </OBPrimaryBtn>
      </div>
      <div style={{ padding: '0 20px 16px', flexShrink: 0 }}>
        <button onClick={lgpd ? handlePular : undefined}
          style={{ width: '100%', background: 'none', border: 'none', cursor: lgpd ? 'pointer' : 'default', fontSize: 13, color: '#9E9E9E', padding: '10px', textAlign: 'center', opacity: lgpd ? 1 : 0.4 }}>
          Pular configurações opcionais
        </button>
      </div>
    </div>
  );
}

// ─── TELA FINAL — Celebração ──────────────────────────────────────────────────
function OnboardingCelebracao({ ctx }) {
  const [animIn, setAnimIn] = React.useState(false);
  React.useEffect(() => {
    const t = setTimeout(() => setAnimIn(true), 200);
    return () => clearTimeout(t);
  }, []);
  const coins = ctx.coins || 330;

  return (
    <div style={{ height: '100%', backgroundColor: CJ.navy, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 28px', overflow: 'hidden', position: 'relative' }}>
      {[...Array(18)].map((_, i) => (
        <div key={i} style={{
          position: 'absolute', width: 8, height: 8, borderRadius: '50%',
          left: `${(i * 37 + 10) % 90}%`, top: `${(i * 23 + 5) % 80}%`,
          backgroundColor: ['#FFD54F','#81C784','#64B5F6','#F06292','#FFB74D'][i%5],
          opacity: animIn ? 0.8 : 0,
          transform: animIn ? 'translateY(0) scale(1)' : 'translateY(-20px) scale(0)',
          transition: `all 0.6s ${i*0.05}s`,
        }} />
      ))}
      <div style={{ width: 88, height: 88, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, transform: animIn ? 'scale(1)' : 'scale(0)', transition: 'transform 0.5s 0.2s' }}>
        <span style={{ fontSize: 44 }}>🦶</span>
      </div>
      <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 6, textAlign: 'center' }}>Badge desbloqueado</div>
      <div style={{ fontSize: 14, fontWeight: 700, color: CJ.white, marginBottom: 20 }}>🦶 Primeiro Passo</div>
      <div style={{ fontSize: 28, fontWeight: 700, color: CJ.white, textAlign: 'center', marginBottom: 8 }}>🎉 Perfil completo!</div>
      <div style={{ fontSize: 20, fontWeight: 700, color: '#FFD54F', marginBottom: 20 }}>🪙 {coins} Coins ganhos</div>
      <div style={{ backgroundColor: 'rgba(83,74,183,0.3)', borderRadius: 12, padding: 14, marginBottom: 28, border: '1px solid rgba(83,74,183,0.5)' }}>
        <div style={{ fontSize: 9, color: CJ.purple, fontWeight: 700, marginBottom: 6 }}>✦ IA — Caren</div>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
          Incrível, Renato! Você completou seu perfil e já está no nível 💙 Vital. Sua jornada de saúde começa agora!
        </div>
      </div>
      <OBPrimaryBtn onClick={() => { localStorage.setItem('cj_onboarding_done', '1'); ctx.navigate('home'); }}>
        Ir para o app →
      </OBPrimaryBtn>
    </div>
  );
}

// Keep stub aliases so old router keys still resolve cleanly
function OnboardingWearable({ ctx })     { ctx.navigate('onboarding-4'); return null; }
function OnboardingDependentes({ ctx })  { ctx.navigate('onboarding-7'); return null; }
function OnboardingLGPD({ ctx })         { ctx.navigate('onboarding-7'); return null; }

Object.assign(window, {
  OnboardingWelcome, OnboardingDados, OnboardingObjetivos, OnboardingHabitos,
  OnboardingUltimosDetalhes,
  OnboardingWearable, OnboardingDependentes, OnboardingLGPD,
  OnboardingCelebracao,
});
