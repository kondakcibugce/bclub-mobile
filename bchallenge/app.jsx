// Main App — composes screens + bottom nav + tweaks

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "sage",
  "tone": "warm",
  "density": "cozy",
  "hideBrand": false
} /*EDITMODE-END*/;

// Palette options — keep names + colors aligned
const PALETTES = {
  sage: { name: 'Sage + Pudra', accent: '#8a9a7c', deep: '#6e7f60', pink: '#e9b5b5', soft: '#e3ebd9' },
  rose: { name: 'Pudra + Krem', accent: '#d99a9a', deep: '#b87878', pink: '#cbd5b8', soft: '#f7e1e1' },
  lavender: { name: 'Lila + Yeşil', accent: '#a8a3c4', deep: '#7e7a99', pink: '#e9b5b5', soft: '#e8e4f0' }
};

function App() {
  const isMobileShell =
    window.__BCLUB_MOBILE__ ||
    typeof window.ReactNativeWebView !== 'undefined' ||
    new URLSearchParams(window.location.search).get('mobile') === '1';
  const [tweak, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [active, setActive] = React.useState('host');
  const [active2, setActive2] = React.useState('onboarding');
  const [membership, setMembership] = React.useState('basic');
  const [plusRequest, setPlusRequest] = React.useState('Bu özellik');

  const palette = PALETTES[tweak.palette] || PALETTES.sage;

  // Apply palette overrides at root
  React.useEffect(() => {
    const r = document.documentElement.style;
    r.setProperty('--green', palette.accent);
    r.setProperty('--green-deep', palette.deep);
    r.setProperty('--green-soft', palette.soft);
    if (tweak.palette === 'rose') {
      r.setProperty('--pink', '#cbd5b8');
      r.setProperty('--pink-soft', '#e3ebd9');
      r.setProperty('--pink-deep', '#8a9a7c');
    } else {
      r.setProperty('--pink', '#e9b5b5');
      r.setProperty('--pink-soft', '#f7e1e1');
      r.setProperty('--pink-deep', '#d99a9a');
    }
  }, [tweak.palette]);

  const freeScreens = new Set(['recipes', 'onboarding', 'plus', 'host']);
  const labels = {
    host: 'Host', home: 'Ana', coach: 'Koç', recipes: 'Tarif', videos: 'Video',
    community: 'Toplu', profile: 'Profil', booking: 'Booking', onboarding: 'Kayıt', plus: 'Plus',
  };
  const plusLabels = {
    home: 'Ana Sayfa', coach: 'Buğçe AI Koç', videos: 'Videolar', profile: 'Profil ve hedef takibi',
    booking: 'Canlı ders rezervasyonu', community: 'Topluluk',
  };
  const makeNav = (setter) => (screen) => {
    if (membership === 'basic' && !freeScreens.has(screen)) {
      setPlusRequest(plusLabels[screen] || 'Bu özellik');
      setter('plus');
      return;
    }
    setter(screen);
  };

  const renderScreen = (which) => {
    const setter = which === 1 ? setActive : setActive2;
    const onNav = which === 1 ? makeNav(setActive) : makeNav(setActive2);
    const a = which === 1 ? active : active2;
    switch (a) {
      case 'host':return <HostDashboardScreen onNavigate={onNav} accent={palette.accent} accentDeep={palette.deep} />;
      case 'booking':return <BookingScreen onNavigate={onNav} accent={palette.accent} accentDeep={palette.deep} />;
      case 'onboarding':return <OnboardingScreen onNavigate={onNav} accent={palette.accent} accentDeep={palette.deep} />;
      case 'plus':return <PlusScreen onNavigate={onNav} requested={plusRequest} onUpgrade={() => {
        setMembership('plus');
        setter('home');
      }} />;
      case 'home':return <HomeScreen onNavigate={onNav} accent={palette.accent} accentDeep={palette.deep} />;
      case 'coach':return <CoachScreen accent={palette.accent} accentDeep={palette.deep} />;
      case 'recipes':return <RecipesScreen accent={palette.accent} accentDeep={palette.deep} />;
      case 'videos':return <VideosScreen accent={palette.accent} />;
      case 'community':return <CommunityScreen accent={palette.accent} />;
      case 'profile':return <ProfileScreen accent={palette.accent} onNavigate={onNav} />;
      default:return null;
    }
  };

  const phone = (n, a, on) =>
  <div style={{ position: 'relative' }}>
      <IOSDevice width={402} height={874}>
        <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: 'var(--paper)' }}>
          {n === 1 ? renderScreen(1) : renderScreen(2)}
          <BottomNav active={a} onChange={makeNav(on)} membership={membership} accent={palette.accent} accentDeep={palette.deep} />
        </div>
      </IOSDevice>
    </div>;

  if (isMobileShell) {
    return (
      <div style={{
        width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden',
        background: 'var(--paper)', fontFamily: "'Nunito', system-ui, sans-serif",
      }}>
        {renderScreen(2)}
        <BottomNav
          active={active2}
          onChange={makeNav(setActive2)}
          membership={membership}
          accent={palette.accent}
          accentDeep={palette.deep}
        />
      </div>
    );
  }

  return (
    <div className="stage" data-screen-label="Buğçe Challenge App">
      {!tweak.hideBrand &&
      <div className="brand">
          <div className="opt-pill">
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff' }} />
            INTERAKTIF PROTOTYPE
          </div>
          <h1 className="logo">B<span className="leaf" style={{ color: palette.accent }}></span>ÇE</h1>
          <div className="script" style={{ height: "54px" }}>Club</div>
          <div className="tagline">
            Birlikte daha güçlü,<br />birlikte daha sağlıklı.
          </div>
          <svg className="heart" viewBox="0 0 90 30" fill="none">
            <path d="M5 18 Q 25 4, 45 18 T 85 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M44 14c-2-2-1-5 1-5s3 3 1 5l-1 1z" fill="currentColor" />
          </svg>
          <div style={{ marginTop: 36, display: 'grid', gap: 14 }}>
            {[
          { c: '#e9b5b5', i: '👑', t: 'HOST DASHBOARD', s: 'Buğçe için' },
          { c: '#8a9a7c', i: '👤', t: membership === 'plus' ? 'PLUS ÜYE' : 'BASIC ÜYE', s: membership === 'plus' ? 'Tüm alanlar açık' : 'Tarifler açık' }].
          map((b, i) =>
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
              width: 44, height: 44, borderRadius: '50%', background: b.c,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontSize: 18
            }}>{b.i}</div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.1em', color: 'var(--ink-soft)' }}>{b.t}</div>
                  <div style={{ fontSize: 13, color: 'var(--ink-mute)' }}>{b.s}</div>
                </div>
              </div>
          )}
          </div>
          <div className="signature">Buğçe Kondakçı</div>
          <svg className="heart" viewBox="0 0 90 30" fill="none" style={{ marginTop: 4, width: 60 }}>
            <path d="M5 14 Q 25 0, 45 14 T 85 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
          </svg>
        </div>
      }
      <div className="phones">
        {phone(1, active, setActive)}
        {phone(2, active2, setActive2)}
      </div>

      <TweaksPanel title="Tweaks" defaultOpen={false}>
        <TweakSection label="Renk Paleti">
          <TweakRadio
            label=""
            value={tweak.palette}
            onChange={(v) => setTweak('palette', v)}
            options={[
            { value: 'sage', label: 'Sage' },
            { value: 'rose', label: 'Pudra' },
            { value: 'lavender', label: 'Lila' }]
            } />
          
        </TweakSection>
        <TweakSection label="Sol Panel">
          <TweakToggle label="Brand panelini gizle" value={tweak.hideBrand} onChange={(v) => setTweak('hideBrand', v)} />
        </TweakSection>
        <TweakSection label="Hızlı Geçiş — Sol Telefon">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6 }}>
            {['host', 'onboarding', 'recipes', 'home', 'coach', 'videos', 'profile', 'booking', 'plus'].map((s) =>
            <button key={s} onClick={() => makeNav(setActive)(s)} style={{
              padding: '8px 6px', borderRadius: 8, fontSize: 11, fontWeight: 700,
              background: active === s ? '#2d2a26' : '#f5ede0', color: active === s ? '#fff' : '#5d574e'
            }}>{labels[s]}</button>
            )}
          </div>
        </TweakSection>
        <TweakSection label="Hızlı Geçiş — Sağ Telefon">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6 }}>
            {['host', 'onboarding', 'recipes', 'home', 'coach', 'videos', 'profile', 'booking', 'plus'].map((s) =>
            <button key={s} onClick={() => makeNav(setActive2)(s)} style={{
              padding: '8px 6px', borderRadius: 8, fontSize: 11, fontWeight: 700,
              background: active2 === s ? '#2d2a26' : '#f5ede0', color: active2 === s ? '#fff' : '#5d574e'
            }}>{labels[s]}</button>
            )}
          </div>
        </TweakSection>
        <TweakSection label="Üyelik">
          <TweakRadio
            label=""
            value={membership}
            onChange={(v) => setMembership(v)}
            options={[
              { value: 'basic', label: 'Basic' },
              { value: 'plus', label: 'Plus' },
            ]}
          />
        </TweakSection>
      </TweaksPanel>
    </div>);

}

// keyframes for chat typing + live pulse
const styleEl = document.createElement('style');
styleEl.textContent = `
  @keyframes pulse { 0%, 100% { opacity: 1 } 50% { opacity: 0.3 } }
  @keyframes bounce { 0%, 80%, 100% { transform: translateY(0); opacity: 0.5 } 40% { transform: translateY(-4px); opacity: 1 } }
  ::-webkit-scrollbar { display: none; }
`;
document.head.appendChild(styleEl);

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
