// care-plus-app.jsx — Main router: maps screen IDs to components

function CarePlusApp() {
  const [stack, setStack] = React.useState(['home']);
  const current = stack[stack.length - 1];
  const rootTab = stack[0];

  const navigate = (id) => setStack(prev => [...prev, id]);
  const navigateTab = (id) => setStack([id]);
  const goBack = () => setStack(prev => prev.length > 1 ? prev.slice(0, -1) : prev);

  const ctx = { navigate, navigateTab, goBack, current, rootTab };

  const SCREENS = {
    // Root tabs
    'home':           HomeScreen,
    'rede':           RedeScreen,
    // Rede+
    'redeplus-1':     RedePlusScreen,
    'redeplus-2':     RedePlusAgendarScreen,
    'redeplus-3':     RedePlusConfirmacaoScreen,
    'reembolso':      ReembolsoScreen,
    'autorizacoes':   AutorizacoesScreen,
    'journey':        JourneyScreen,
    // Menu & secondary
    'menu':           MenuScreen,
    'carteirinha':    CarteirinhaScreen,
    // Blua hub
    'blua':           BluaScreen,
    // J1 Caren
    'caren-1':        CarenScreen1,
    'caren-2':        CarenScreen2,
    'caren-3':        CarenScreen3,
    'caren-4':        CarenScreen4,
    'caren-5':        CarenScreen5,
    // J2 Anura
    'anura-1':        AnuraScreen1,
    'anura-2':        AnuraScreen2,
    'anura-3':        AnuraScreen3,
    'anura-4':        AnuraScreen4,
    'anura-5':        AnuraScreen5,
    'anura-6':        AnuraScreen6,
    'anura-7':        AnuraScreen7,
    'anura-8':        AnuraScreen8,
    // J3 Teleconsulta
    'teleconsulta-1': TeleconsultaScreen1,
    'teleconsulta-2': TeleconsultaScreen2,
    // J4 Exames em casa
    'exames-1':       ExamesScreen1,
    'exames-2':       ExamesScreen2,
    'exames-3':       ExamesScreen3,
    'exames-4':       ExamesScreen4,
    'exames-5':       ExamesScreen5,
    'exames-6':       ExamesScreen6,
    'exames-7':       ExamesScreen7,
    'exames-8':       ExamesScreen8,
    'exames-9':       ExamesScreen9,
    // J5 Vacinas em casa
    'vacinas-1':      VacinasScreen1,
    'vacinas-2':      VacinasScreen2,
    'vacinas-3':      VacinasScreen3,
    'vacinas-4':      VacinasScreen4,
    'vacinas-5':      VacinasScreen5,
    'vacinas-6':      VacinasScreen6,
    'vacinas-7':      VacinasScreen7,
    // J6 Consulta presencial
    'consulta-1':     ConsultaScreen1,
    'consulta-2':     ConsultaScreen2,
    'consulta-3':     ConsultaScreen3,
    'consulta-4':     ConsultaScreen4,
    'consulta-5':     ConsultaScreen5,
    // J7 Personal System
    'personal-1':     PersonalScreen1,
    // J8 Saúde mental
    'mental-1':       MentalScreen1,
    'mental-2':       MentalScreen2,
    'mental-3':       MentalScreen3,
    // J9 Movimente-se
    'movimente-1':    MovimenteScreen1,
    'movimente-2':    MovimenteScreen2,
    'movimente-3':    MovimenteScreen3,
    'movimente-4':    MovimenteScreen4,
    // J10 Saúde na empresa
    'empresa-1':      EmpresaScreen1,
    'empresa-2':      EmpresaScreen2,
    'empresa-3':      EmpresaScreen3,
    'empresa-4':      EmpresaScreen4,
    'empresa-5':      EmpresaScreen5,
    'empresa-6':      EmpresaScreen6,
    'empresa-7':      EmpresaScreen7,
  };

  const ScreenComponent = SCREENS[current] || HomeScreen;

  const mobile = window.__cpMobile;
  return (
    <div style={{ height: '100%', fontFamily: "'Montserrat', sans-serif", position: 'relative', overflow: 'hidden', paddingTop: mobile ? 0 : 62, paddingBottom: mobile ? 0 : 34, boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
      <ScreenComponent key={current} ctx={ctx} />
    </div>
  );
}
