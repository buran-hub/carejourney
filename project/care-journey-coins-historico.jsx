// care-journey-coins-historico.jsx — Abas Coins e Histórico da Journey tab

// ─────────────────────────────────────────────────────────────────────────────
// ABA COINS
// ─────────────────────────────────────────────────────────────────────────────

function SaldoCard() {
  return (
    <div style={{ backgroundColor: CJ.cardBg, borderRadius: 12, padding: '16px', marginBottom: 12, textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
      <div style={{ fontSize: 11, color: CJ.textTertiary, marginBottom: 4 }}>Saldo disponível</div>
      <div style={{ fontSize: 28, fontWeight: 700, color: CJ.textPrimary, marginBottom: 4 }}>🪙 3.240</div>
      <div style={{ fontSize: 9, color: CJ.textTertiary }}>Válidos até mar/2027</div>
    </div>);

}

function ProximoResgateCard() {
  return (
    <div style={{ marginBottom: 12 }}>
            <div style={{ backgroundColor: CJ.white, borderRadius: 12, border: `1px dashed ${CJ.border}`, padding: 14, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: CJ.textPrimary, marginBottom: 3 }}>🧘 Headspace 1 mês</div>
            <div style={{ fontSize: 10, color: CJ.textTertiary }}>Faltam 1.760 Coins · ~5 semanas</div>
          </div>
          <button style={{ backgroundColor: CJ.white, color: CJ.primary, border: `1.5px solid ${CJ.primary}`, borderRadius: 6, padding: '6px 10px', fontSize: 10, fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap' }}>ver catálogo ›</button>
        </div>
        <ProgressBar pct={65} />
      </div>
    </div>);

}

function CatalogoCard() {
  const [filter, setFilter] = React.useState('Todos');
  const [confirmItem, setConfirmItem] = React.useState(null);
  const [resgated, setResgated] = React.useState({});
  const [viewItem, setViewItem] = React.useState(null);
  const currentCoins = 3240;

  const filters = ['Todos', 'Care Plus', 'Parceiros', 'ESG'];
  const items = [
  { emoji: '🩺', label: '1 exame sem Copay', coins: 5000, estado: 'Em breve', cat: 'Care Plus' },
  { emoji: '📋', label: '1 check-up sem Copay', coins: 8000, estado: 'Em breve', cat: 'Care Plus' },
  { emoji: '🌟', label: 'Acesso facilitado Rede+', coins: 4000, estado: 'Em breve', cat: 'Care Plus' },
  { emoji: '🧘', label: 'Headspace 1 mês', coins: 5000, estado: 'Em breve', cat: 'Parceiros' },
  { emoji: '🧘', label: 'Headspace 3 meses', coins: 8000, estado: 'Bloqueado', cat: 'Parceiros' },
  { emoji: '🏋️', label: 'Wellhub 1 mês', coins: 8000, estado: 'Bloqueado', cat: 'Parceiros' },
  { emoji: '🏋️', label: 'Wellhub 3 meses', coins: 12000, estado: 'Bloqueado', cat: 'Parceiros' },
  { emoji: '🎾', label: 'Live! 20% desconto', coins: 1500, estado: 'Disponível', cat: 'Parceiros' },
  { emoji: '👟', label: 'Track & Field 15%', coins: 2200, estado: 'Em breve', cat: 'Parceiros' },
  { emoji: '🏓', label: 'Aula de padel', coins: 3000, estado: 'Em breve', cat: 'Parceiros' },
  { emoji: '⌚', label: 'Desconto Garmin', coins: 8000, estado: 'Bloqueado', cat: 'Parceiros' },
  { emoji: '🧘', label: 'Zenklub — terapia online', coins: 4000, estado: 'Bloqueado', cat: 'Parceiros' },
  { emoji: '🎾', label: 'Evento exclusivo Care Plus', coins: 20000, estado: 'Bloqueado', cat: 'Parceiros' },
  { emoji: '🌱', label: 'Doação ESG', coins: 800, estado: 'Disponível', cat: 'ESG' },
  { emoji: '🌍', label: 'Compensação de carbono', coins: 1000, estado: 'Disponível', cat: 'ESG' }];

  const filtered = (filter === 'Todos' ? items : items.filter((i) => i.cat === filter)).
  slice().
  sort((a, b) => {
    const pctA = Math.min(currentCoins / a.coins * 100, 100);
    const pctB = Math.min(currentCoins / b.coins * 100, 100);
    return pctB - pctA;
  });

  const handleConfirm = (item) => {
    const coupon = 'CP-' + Math.random().toString(36).substr(2, 8).toUpperCase();
    setResgated((prev) => ({ ...prev, [item.label]: coupon }));
    setConfirmItem(null);
    setViewItem({ ...item, coupon });
  };

  return (
    <div style={{ marginBottom: 12, position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
        <span style={{ fontSize: 12, fontWeight: 700, color: CJ.textPrimary }}>Catálogo</span>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 11, color: CJ.primary, fontWeight: 600 }}>ver todos ›</button>
      </div>
      {/* Filter pills */}
      <div style={{ display: 'flex', gap: 6, marginBottom: 12, overflowX: 'auto' }}>
        {filters.map((f) =>
        <button key={f} onClick={() => setFilter(f)}
        style={{ padding: '5px 12px', borderRadius: 20, border: 'none', cursor: 'pointer', fontSize: 10, fontWeight: 700, flexShrink: 0, backgroundColor: filter === f ? CJ.primary : CJ.cardBg, color: filter === f ? CJ.white : CJ.textTertiary }}>
            {f}
          </button>
        )}
      </div>
      {/* Items */}
      {filtered.map((item, i) => {
        const isDisponivel = currentCoins >= item.coins;
        const isResgated = !!resgated[item.label];
        const pct = Math.min(Math.round(currentCoins / item.coins * 100), 99);
        const faltam = Math.max(item.coins - currentCoins, 0);
        return (
          <div key={i} style={{ backgroundColor: CJ.white, borderRadius: 10, border: `1px solid ${isDisponivel ? CJ.teal : CJ.border}`, padding: '12px 14px', marginBottom: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 20, flexShrink: 0 }}>{item.emoji}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: CJ.textPrimary, marginBottom: 2 }}>{item.label}</div>
                <div style={{ fontSize: 10, color: CJ.textTertiary }}>🪙 {item.coins.toLocaleString('pt-BR')} Coins</div>
              </div>
              {/* Action */}
              {isDisponivel ?
              isResgated ?
              <button onClick={() => setViewItem({ ...item, coupon: resgated[item.label] })}
              style={{ backgroundColor: CJ.white, color: CJ.teal, border: `1.5px solid ${CJ.teal}`, borderRadius: 6, padding: '6px 12px', fontSize: 10, fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap' }}>
                    Ver ›
                  </button> :

              <button onClick={() => setConfirmItem(item)}
              style={{ backgroundColor: CJ.teal, color: CJ.white, border: 'none', borderRadius: 6, padding: '6px 12px', fontSize: 10, fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap' }}>
                    Resgatar
                  </button> :

              null}
            </div>
            {/* Progress bar for non-disponível */}
            {!isDisponivel &&
            <div style={{ marginTop: 10 }}>
                <div style={{ height: 4, backgroundColor: CJ.border, borderRadius: 2, overflow: 'hidden', marginBottom: 4 }}>
                  <div style={{ height: '100%', width: `${pct}%`, backgroundColor: pct >= 80 ? CJ.teal : CJ.primary, borderRadius: 2, transition: 'width 0.5s' }} />
                </div>
                <div style={{ fontSize: 9, color: CJ.textTertiary }}>
                  {faltam > 0 ? `Faltam 🪙 ${faltam.toLocaleString('pt-BR')} Coins · você tem ${currentCoins.toLocaleString('pt-BR')}` : 'Coins suficientes!'}
                </div>
              </div>
            }
          </div>);

      })}

      {/* ── Modal de confirmação ── */}
      {confirmItem &&
      <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', zIndex: 999 }}>
          <div style={{ backgroundColor: CJ.white, borderRadius: '16px 16px 0 0', padding: '24px 20px 32px', width: '100%', maxWidth: 390 }}>
            <div style={{ fontSize: 32, textAlign: 'center', marginBottom: 12 }}>{confirmItem.emoji}</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: CJ.textPrimary, textAlign: 'center', marginBottom: 6 }}>{confirmItem.label}</div>
            <div style={{ fontSize: 13, color: CJ.textSecondary, textAlign: 'center', marginBottom: 20 }}>
              Deseja resgatar por <strong>🪙 {confirmItem.coins.toLocaleString('pt-BR')} Coins</strong>?
            </div>
            <div style={{ backgroundColor: CJ.cardBg, borderRadius: 10, padding: '10px 14px', marginBottom: 20, display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 12, color: CJ.textSecondary }}>Saldo atual</span>
              <span style={{ fontSize: 12, fontWeight: 700, color: CJ.textPrimary }}>🪙 {currentCoins.toLocaleString('pt-BR')}</span>
            </div>
            <button onClick={() => handleConfirm(confirmItem)}
          style={{ width: '100%', backgroundColor: CJ.teal, color: CJ.white, border: 'none', borderRadius: 8, padding: '14px', fontSize: 14, fontWeight: 700, cursor: 'pointer', marginBottom: 10 }}>
              Confirmar resgate
            </button>
            <button onClick={() => setConfirmItem(null)}
          style={{ width: '100%', backgroundColor: 'transparent', color: CJ.textTertiary, border: 'none', borderRadius: 8, padding: '10px', fontSize: 13, cursor: 'pointer' }}>
              Cancelar
            </button>
          </div>
        </div>
      }

      {/* ── Modal de resgate confirmado / ver cupom ── */}
      {viewItem &&
      <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', zIndex: 999 }}>
          <div style={{ backgroundColor: CJ.white, borderRadius: '16px 16px 0 0', padding: '24px 20px 32px', width: '100%', maxWidth: 390 }}>
            <div style={{ width: 56, height: 56, borderRadius: '50%', backgroundColor: '#e8f8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
              <span style={{ fontSize: 26, color: CJ.teal }}>✓</span>
            </div>
            <div style={{ fontSize: 16, fontWeight: 700, color: CJ.textPrimary, textAlign: 'center', marginBottom: 4 }}>Resgate confirmado!</div>
            <div style={{ fontSize: 13, color: CJ.textSecondary, textAlign: 'center', marginBottom: 20 }}>{viewItem.label}</div>
            {/* Coupon box */}
            <div style={{ backgroundColor: CJ.cardBg, borderRadius: 10, padding: '14px 16px', marginBottom: 8, textAlign: 'center', border: `1.5px dashed ${CJ.teal}` }}>
              <div style={{ fontSize: 10, color: CJ.textTertiary, marginBottom: 6 }}>Código de cupom</div>
              <div style={{ fontSize: 18, fontWeight: 900, color: CJ.textPrimary, letterSpacing: 2 }}>{viewItem.coupon}</div>
            </div>
            <div style={{ fontSize: 10, color: CJ.textTertiary, textAlign: 'center', marginBottom: 20, lineHeight: 1.5 }}>
              Apresente este código no momento do uso. Válido por 30 dias.
            </div>
            <button onClick={() => setViewItem(null)}
          style={{ width: '100%', backgroundColor: CJ.primary, color: CJ.white, border: 'none', borderRadius: 8, padding: '14px', fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>
              Fechar
            </button>
          </div>
        </div>
      }
    </div>);

}

function ExtratoCard() {
  const mov = [
  { icon: '🩺', label: 'Teleconsulta', sub: 'Hoje 09:12', coins: '+200' },
  { icon: '🚶', label: '10K passos', sub: 'Ontem 19:45', coins: '+50' },
  { icon: '🔥', label: 'Streak 7 dias', sub: '15 mar', coins: '+150' }];

  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: CJ.textPrimary, marginBottom: 10 }}>Últimas movimentações</div>
      {mov.map((m, i) =>
      <div key={i} style={{ backgroundColor: CJ.cardBg, borderRadius: 8, padding: '0 14px', height: 40, marginBottom: 6, display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 16 }}>{m.icon}</span>
          <div style={{ flex: 1 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: CJ.textPrimary }}>{m.label}</span>
            <span style={{ fontSize: 9, color: CJ.textTertiary, marginLeft: 6 }}>{m.sub}</span>
          </div>
          <span style={{ fontSize: 11, fontWeight: 700, color: CJ.teal }}>{m.coins}</span>
        </div>
      )}
    </div>);

}

function CoinsTab() {
  return (
    <div style={{ padding: '12px 16px 20px' }}>
      <SaldoCard />
      <ProximoResgateCard />
      <CatalogoCard />
      <ExtratoCard />
    </div>);

}

// ─────────────────────────────────────────────────────────────────────────────
// ABA HISTÓRICO
// ─────────────────────────────────────────────────────────────────────────────

function EconomiaCard() {
  return (
    <div style={{ marginBottom: 12 }}>
            <div style={{ ...{ backgroundColor: CJ.cardBg, borderRadius: 12, padding: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }, backgroundColor: "rgb(231, 241, 229)" }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: CJ.textPrimary, marginBottom: 4 }}>💰 Economia com a Care Plus</div>
        <div style={{ fontSize: 28, fontWeight: 700, color: CJ.textPrimary, marginBottom: 4 }}>R$ 3.240</div>
        <div style={{ ...{ fontSize: 9, color: CJ.textTertiary }, color: "rgb(52, 51, 51)" }}>em 2026 · Consultas, exames e programas</div>
      </div>
    </div>);

}

function BreakdownCard() {
  const items = [
  { icon: '🩺', label: 'Teleconsultas (3x)', value: 'R$ 480' },
  { icon: '🧪', label: 'Exames (2x)', value: 'R$ 320' },
  { icon: '🧠', label: 'Programa Mental Health', value: 'R$ 1.340' },
  { icon: '🦷', label: 'Odontológico (2x)', value: 'R$ 560' }];

  return (
    <div style={{ backgroundColor: CJ.white, borderRadius: 12, border: `1px solid ${CJ.border}`, padding: 14, marginBottom: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
      {items.map((item, i) =>
      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 0', borderBottom: i < items.length - 1 ? `1px solid ${CJ.border}` : 'none' }}>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <span style={{ fontSize: 14 }}>{item.icon}</span>
            <span style={{ fontSize: 12, color: CJ.textSecondary }}>{item.label}</span>
          </div>
          <span style={{ fontSize: 12, fontWeight: 600, color: CJ.textPrimary }}>{item.value}</span>
        </div>
      )}
      <div style={{ marginTop: 10, paddingTop: 10, borderTop: `1px solid ${CJ.border}`, display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 11, color: CJ.textTertiary }}>Total aproveitado</span>
        <span style={{ fontSize: 11, fontWeight: 700, color: CJ.teal }}>67% do plano</span>
      </div>
    </div>);

}

function JornadasCard() {
  const jornadas = [
  { icon: '🩺', label: 'Teleconsulta', sub: '12 mar · Clínica Geral', coins: '+200 Coins' },
  { icon: '🧪', label: 'Exame laboratorial', sub: '05 mar', coins: '+250 Coins' },
  { icon: '🦷', label: 'Odontológico', sub: '20 fev', coins: '+250 Coins' }];

  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: CJ.textPrimary }}>Jornadas utilizadas</span>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 11, color: CJ.primary, fontWeight: 600 }}>ver tudo ›</button>
      </div>
      {jornadas.map((j, i) =>
      <div key={i} style={{ ...{ backgroundColor: CJ.cardBg, borderRadius: 8, padding: '0 14px', height: 44, marginBottom: 6, display: 'flex', alignItems: 'center', gap: 10 }, backgroundColor: "rgb(245, 245, 245)" }}>
          <span style={{ fontSize: 16 }}>{j.icon}</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: CJ.textPrimary }}>{j.label}</div>
            <div style={{ fontSize: 9, color: CJ.textTertiary }}>{j.sub}</div>
          </div>
          <span style={{ fontSize: 10, fontWeight: 700, color: CJ.teal, whiteSpace: 'nowrap' }}>{j.coins}</span>
        </div>
      )}
    </div>);

}

function HabitosCard() {
  const cards = [
  { icon: '🚶‍♂️', value: '7.240', label: 'passos hoje', note: '72% da meta', noteColor: CJ.textTertiary },
  { icon: '😴', value: '6h40', label: 'sono ontem', note: 'Abaixo do ideal', noteColor: '#D97706' },
  { icon: '😊', value: 'Bom', label: 'humor (Anura)', note: 'Normal', noteColor: '#0D9E75' }];

  return (
    <div style={{ backgroundColor: CJ.white, borderRadius: 12, border: `1px solid ${CJ.border}`, padding: 14, marginBottom: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: CJ.textPrimary, marginBottom: 12 }}>Indicadores de hábitos</div>
      <div style={{ display: 'flex', gap: 8 }}>
        {cards.map((c, i) =>
        <div key={i} style={{ flex: 1, backgroundColor: CJ.white, borderRadius: 12, border: `1px solid ${CJ.border}`, padding: '12px 10px 10px', display: 'flex', flexDirection: 'column', position: 'relative', minHeight: 86 }}>
            {/* Emoji top-right */}
            <div style={{ position: 'absolute', top: 10, right: 10, fontSize: 18, lineHeight: 1 }}>{c.icon}</div>
            {/* Value */}
            <div style={{ fontSize: 18, fontWeight: 700, color: CJ.textPrimary, lineHeight: 1, marginBottom: 4, marginTop: 2 }}>{c.value}</div>
            {/* Label */}
            <div style={{ fontSize: 10, color: CJ.textTertiary, lineHeight: 1.3, marginBottom: 5 }}>{c.label}</div>
            {/* Status */}
            <div style={{ fontSize: 10, fontWeight: 700, color: c.noteColor, lineHeight: 1 }}>{c.note}</div>
          </div>
        )}
      </div>
    </div>);

}

function HistoricoTab() {
  return (
    <div style={{ padding: '12px 16px 20px' }}>
      <EconomiaCard />
      <BreakdownCard />
      <JornadasCard />
    </div>);

}

Object.assign(window, { CoinsTab, HistoricoTab });