// care-journey-saude.jsx — Aba Saúde da Journey tab

// ─── Card Nível ───────────────────────────────────────────────────────────────
function NivelCard() {
  const [expanded, setExpanded] = React.useState(false);
  const niveis = [
  { icon: '🌱', label: 'Seed', pts: '0', done: true },
  { icon: '💙', label: 'Vital', pts: '1.000', done: true },
  { icon: '⚡', label: 'Active', pts: '3.000', current: true },
  { icon: '🧘', label: 'Balance', pts: '15.000', locked: true },
  { icon: '🏆', label: 'Thrive', pts: '30.000', locked: true }];

  return (
    <div style={{ ...{ backgroundColor: CJ.cardBg, borderRadius: 12, padding: 14, marginBottom: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }, backgroundColor: "rgb(236, 244, 252)" }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: CJ.textPrimary }}>⚡ Active — Nível 3</span>
        <button onClick={() => setExpanded((e) => !e)}
        style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 11, color: CJ.primary, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 3 }}>
          ver jornada {expanded ? '∧' : '∨'}
        </button>
      </div>
      <ProgressBar pct={38} style={{ marginBottom: 5 }} />
      <div style={{ ...{ fontSize: 9, color: CJ.textTertiary }, color: "rgb(36, 36, 36)" }}>5.742 / 15.000 para 🧘 Balance</div>
      {/* Expanded timeline */}
      {expanded &&
      <div style={{ marginTop: 16, paddingTop: 14, borderTop: `1px solid ${CJ.border}` }}>
          {niveis.map((n, i) =>
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: i < niveis.length - 1 ? 14 : 0, position: 'relative' }}>
              {/* Connector line */}
              {i < niveis.length - 1 &&
          <div style={{ position: 'absolute', left: 14, top: 28, width: 2, height: 14, backgroundColor: n.done || n.current ? CJ.primary : CJ.border }} />
          }
              <div style={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: n.done ? CJ.primary : n.current ? '#e8f4fd' : CJ.border, border: n.current ? `2px solid ${CJ.primary}` : 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 13 }}>
                {n.locked ? '🔒' : n.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, fontWeight: n.current ? 700 : 500, color: n.locked ? CJ.textTertiary : CJ.textPrimary }}>{n.label}</div>
                <div style={{ fontSize: 9, color: CJ.textTertiary }}>{n.pts} pts</div>
              </div>
              {n.done && <span style={{ fontSize: 10, color: CJ.primary }}>✓</span>}
              {n.current && <span style={{ fontSize: 9, fontWeight: 700, color: CJ.primary }}>Atual</span>}
            </div>
        )}
        </div>
      }
    </div>);

}

// ─── Care Health Score ────────────────────────────────────────────────────────
function CareHealthScoreCard() {
  return (
    <div style={{ backgroundColor: CJ.white, borderRadius: 12, border: `1px solid ${CJ.border}`, padding: 14, marginBottom: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: CJ.textPrimary, marginBottom: 3 }}>Care Health Score</div>
          <div style={{ fontSize: 10, color: CJ.textTertiary, marginBottom: 8 }}>vs. pessoas 30–39 anos</div>
          <ProgressBar pct={78} color="rgb(0, 121, 200)" style={{ marginBottom: 5 }} />
          <div style={{ ...{ fontSize: 9, color: CJ.textTertiary }, color: "rgb(0, 121, 200)" }}>Melhor que 64% da sua faixa etária</div>
        </div>
        <div style={{ textAlign: 'center', flexShrink: 0 }}>
          <div style={{ ...{ fontSize: 32, fontWeight: 700, color: CJ.teal, lineHeight: 1 }, color: "rgb(0, 121, 200)" }}>78</div>
          <div style={{ fontSize: 9, color: CJ.textTertiary, marginTop: 2 }}>/ 100</div>
        </div>
      </div>
    </div>);

}

// ─── Nivelamento por área ─────────────────────────────────────────────────────
function NivelamentoCard() {
  const areas = [
  { icon: '🩺', label: 'Clínica geral', pct: 80, warning: false },
  { icon: '🦷', label: 'Odonto', pct: 50, warning: true },
  { icon: '🧪', label: 'Exames', pct: 80, warning: false },
  { icon: '💊', label: 'Vacinas', pct: 100, warning: false },
  { icon: '🧠', label: 'Saúde mental', pct: 30, warning: true },
  { icon: '👩', label: 'Gineco', pct: 90, warning: false }];

  return (
    <div style={{ backgroundColor: CJ.white, borderRadius: 12, border: `1px solid ${CJ.border}`, padding: 14, marginBottom: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            {areas.map((a, i) =>
      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: i < areas.length - 1 ? 10 : 0 }}>
          <span style={{ width: 18, fontSize: 13, flexShrink: 0 }}>{a.icon}</span>
          <span style={{ width: 72, fontSize: 10, color: a.warning ? CJ.amber : CJ.textSecondary, fontWeight: a.warning ? 700 : 500, flexShrink: 0 }}>{a.label}</span>
          <div style={{ flex: 1, height: 5, backgroundColor: CJ.border, borderRadius: 3, overflow: 'hidden', border: a.warning ? `1px dashed ${CJ.amber}` : 'none' }}>
            <div style={{ height: '100%', width: `${a.pct}%`, backgroundColor: a.warning ? CJ.amber : CJ.teal, borderRadius: 3 }} />
          </div>
          <span style={{ width: 28, fontSize: 10, color: a.warning ? CJ.amber : CJ.textTertiary, fontWeight: a.warning ? 700 : 400, textAlign: 'right', flexShrink: 0 }}>{a.pct}%</span>
        </div>
      )}
      <div style={{ marginTop: 10, fontSize: 9, fontStyle: 'italic', color: CJ.textTertiary }}>2 áreas precisam de atenção</div>
    </div>);

}

// ─── Oya Care (só para gênero feminino) ──────────────────────────────────────
function OyaCareCard({ visible }) {
  if (!visible) return null;
  return (
    <div style={{ backgroundColor: '#E8F5F0', borderRadius: 12, border: `1px solid ${CJ.teal}`, padding: 14, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, width: '100%' }}>
        <div style={{ width: 36, height: 36, borderRadius: '50%', backgroundColor: CJ.teal, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <span style={{ fontSize: 18 }}>🌸</span>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: CJ.navy, marginBottom: 3 }}>Check-up ginecológico gratuito</div>
          <div style={{ fontSize: 10, color: CJ.textSecondary, lineHeight: 1.4 }}>A Care Plus tem parceria com a Oya Care. Sem custo para você.</div>
        </div>
        <button style={{ backgroundColor: CJ.white, color: CJ.teal, border: `1.5px solid ${CJ.teal}`, borderRadius: 8, padding: '7px 10px', fontSize: 10, fontWeight: 700, cursor: 'pointer', flexShrink: 0, whiteSpace: 'nowrap' }}>
          Conhecer
        </button>
      </div>
    </div>);

}

// ─── Caren recomendações ──────────────────────────────────────────────────────
function CarenRecoCards({ navigate }) {
  return (
    <div style={{ marginBottom: 12 }}>
            {/* Card 1 */}
      <div style={{ backgroundColor: CJ.white, borderRadius: 10, border: `1px dashed ${CJ.border}`, padding: '12px 14px', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 10, minHeight: 56 }}>
        <img src="caren-avatar.png" alt="Caren" style={{ width: 34, height: 34, borderRadius: '50%', objectFit: 'cover', flexShrink: 0, border: `1.5px solid ${CJ.primary}` }} />
        <span style={{ flex: 1, fontSize: 11, color: CJ.textSecondary, lineHeight: 1.4 }}>Odonto em atraso. Agende e ganhe +250 Coins</span>
        <button onClick={() => navigate('consulta-1')} style={{ backgroundColor: CJ.primary, color: CJ.white, border: 'none', borderRadius: 6, padding: '7px 11px', fontSize: 11, fontWeight: 700, cursor: 'pointer', flexShrink: 0 }}>Agendar ›</button>
      </div>
      {/* Card 2 */}
      <div style={{ backgroundColor: CJ.white, borderRadius: 10, border: `1px dashed ${CJ.border}`, padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10, minHeight: 44 }}>
        <img src="caren-avatar.png" alt="Caren" style={{ width: 34, height: 34, borderRadius: '50%', objectFit: 'cover', flexShrink: 0, border: `1.5px solid ${CJ.primary}` }} />
        <span style={{ flex: 1, fontSize: 11, color: CJ.textSecondary, lineHeight: 1.4 }}>Estresse alto detectado. Conheça o Mental Health. +400 Coins</span>
        <button onClick={() => navigate('mental-1')} style={{ backgroundColor: CJ.white, color: CJ.primary, border: `1.5px solid ${CJ.primary}`, borderRadius: 6, padding: '7px 10px', fontSize: 11, fontWeight: 700, cursor: 'pointer', flexShrink: 0 }}>Ver programa</button>
      </div>
    </div>);

}

// ─── Alertas dependentes ──────────────────────────────────────────────────────
function AlertasDependentesCard() {
  return (
    <div style={{ marginBottom: 12 }}>
            <div style={{ ...{ backgroundColor: CJ.cardBg, borderRadius: 10, padding: '11px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }, backgroundColor: "rgb(251, 246, 232)" }}>
        <div style={{ fontSize: 10, color: CJ.textSecondary, lineHeight: 1.5, fontWeight: "400" }}>
          <span style={{ color: CJ.amber }}>⚠</span> José — hipertensão · <span style={{ color: CJ.amber }}>⚠</span> Sofia — vacina em atraso
        </div>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 11, color: CJ.primary, fontWeight: 700, whiteSpace: 'nowrap', marginLeft: 8 }}>ver ›</button>
      </div>
    </div>);

}

// ─── Badges ───────────────────────────────────────────────────────────────────
function BadgesCard() {
  const badges = [
  { emoji: '🦶', name: 'Primeiro Passo',      state: 'done',     cond: null,                       progress: null },
  { emoji: '🔥', name: 'Semana em Chamas',    state: 'done',     cond: '7 dias de streak',          progress: null },
  { emoji: '🏃', name: '10K Club',            state: 'done',     cond: null,                       progress: null },
  { emoji: '👨‍👩‍👧', name: 'Família Saudável',  state: 'done',     cond: null,                       progress: null },
  { emoji: '🩺', name: 'Bem Checado',         state: 'progress', cond: '2 de 3 exames',            progress: 66 },
  { emoji: '💪', name: 'Mês Invicto',         state: 'progress', cond: '12 de 30 dias',            progress: 40 },
  { emoji: '🌱', name: 'Guardião do Planeta', state: 'locked',   cond: 'Primeira doação ESG',      progress: null },
  { emoji: '🧠', name: 'Mente Leve',          state: 'locked',   cond: 'Aderir ao Mental Health',  progress: null }];

  return (
    <div style={{ backgroundColor: CJ.white, borderRadius: 12, border: `1px solid ${CJ.border}`, padding: 14, marginBottom: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: CJ.textPrimary }}>Badges</span>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 11, color: CJ.primary, fontWeight: 600 }}>ver todos ›</button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {badges.map((b, i) =>
        <div key={i} style={{ borderRadius: 16, border: `1px solid ${CJ.border}`, padding: 12, opacity: b.state === 'locked' ? 0.6 : 1, position: 'relative', backgroundColor: CJ.white }}>
            {/* State pill */}
            <div style={{ marginBottom: 8 }}>
              <span style={{ fontSize: 8, fontWeight: 700, padding: '2px 7px', borderRadius: 10, backgroundColor: b.state === 'done' ? CJ.primary : CJ.border, color: b.state === 'done' ? CJ.white : CJ.textTertiary }}>
                {b.state === 'done' ? '✓ Conquistado' : b.state === 'progress' ? 'Em progresso' : '🔒 Bloqueado'}
              </span>
            </div>
            {/* Emoji */}
            <div style={{ fontSize: 30, textAlign: 'center', marginBottom: 6, opacity: b.state === 'locked' ? 0.3 : b.state === 'progress' ? 0.6 : 1 }}>
              {b.emoji}
            </div>
            <div style={{ fontSize: 10, fontWeight: b.state === 'done' ? 700 : 500, color: CJ.textPrimary, textAlign: 'center', marginBottom: b.progress != null ? 6 : 0 }}>{b.name}</div>
            {b.progress != null && <ProgressBar pct={b.progress} height={3} style={{ marginBottom: 4 }} />}
            {b.cond && <div style={{ fontSize: 9, color: CJ.textTertiary, textAlign: 'center', lineHeight: 1.3 }}>{b.cond}</div>}
          </div>
        )}
      </div>
    </div>);

}

// ─── Aba Saúde ────────────────────────────────────────────────────────────────
function SaudeTab({ navigate, oyaVisible }) {
  return (
    <div style={{ padding: '12px 16px 20px' }}>
      <NivelCard />
      <CareHealthScoreCard />
      <NivelamentoCard />
      {oyaVisible &&
      <div style={{ marginBottom: 12 }}>
                    <OyaCareCard visible={true} />
        </div>
      }
      <CarenRecoCards navigate={navigate} />
      <AlertasDependentesCard />
      <HabitosCard />
      <BadgesCard />
    </div>);

}

Object.assign(window, { SaudeTab });