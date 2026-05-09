// Shared UI primitives — icons, bottom nav, headers

const Icon = {
  bell: (s=22) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>,
  home: (s=22) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l9-7 9 7v9a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2z"/></svg>,
  homeFill: (s=22) => <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M12 3.2L3 10.5V20a2 2 0 0 0 2 2h4v-7h6v7h4a2 2 0 0 0 2-2v-9.5z"/></svg>,
  spark: (s=22) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/><circle cx="12" cy="12" r="3"/></svg>,
  sparkFill: (s=22) => <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.6 4.4L18 8l-4.4 1.6L12 14l-1.6-4.4L6 8l4.4-1.6L12 2zM19 14l.9 2.5L22 17l-2.1.5L19 20l-.9-2.5L16 17l2.1-.5L19 14zM6 15l.7 1.8L8.5 17.5l-1.8.7L6 20l-.7-1.8L3.5 17.5l1.8-.7L6 15z"/></svg>,
  bowl: (s=22) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11h18l-1.4 6.5a3 3 0 0 1-2.9 2.5H7.3a3 3 0 0 1-2.9-2.5L3 11z"/><path d="M12 8c-2-1-2-4 0-5 2 1 2 4 0 5z"/><path d="M16 9c1-1 3-1 3 1"/></svg>,
  bowlFill: (s=22) => <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M2.5 10.5h19l-1.5 7a3.5 3.5 0 0 1-3.4 2.7H7.4A3.5 3.5 0 0 1 4 17.5l-1.5-7zM12 8.5c-2.5-1-2.5-4.5 0-6 2.5 1.5 2.5 5 0 6z"/></svg>,
  play: (s=22) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M10 9l5 3-5 3z" fill="currentColor" stroke="none"/></svg>,
  playFill: (s=22) => <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/><path d="M10 8.5v7l6-3.5z" fill="white"/></svg>,
  user: (s=22) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4-6 8-6s7 2 8 6"/></svg>,
  userFill: (s=22) => <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8" r="4.5"/><path d="M3 21c0-4.5 4-7 9-7s9 2.5 9 7z"/></svg>,
  community: (s=22) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="9" r="3"/><circle cx="17" cy="11" r="2.5"/><path d="M3 19c0-3 2.5-5 6-5s6 2 6 5"/><path d="M14.5 18c0.3-2 1.7-3.2 3.5-3.2s3 1.2 3 3.2"/></svg>,
  communityFill: (s=22) => <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><circle cx="9" cy="8.5" r="3.5"/><circle cx="17.5" cy="10.5" r="2.8"/><path d="M2.5 19.5c0-3.3 2.9-5.5 6.5-5.5s6.5 2.2 6.5 5.5z"/><path d="M14.5 19.5c0.4-2.4 1.9-3.7 3.8-3.7s3.2 1.3 3.2 3.7z"/></svg>,
  chevR: (s=18) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6"/></svg>,
  chevL: (s=18) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6"/></svg>,
  search: (s=20) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>,
  heart: (s=20, fill=false) => <svg width={s} height={s} viewBox="0 0 24 24" fill={fill ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
  comment: (s=20) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z"/></svg>,
  send: (s=22) => <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M3 12l18-9-7 18-2-7z"/></svg>,
  flame: (s=18) => <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 1.5c.3 4-2.4 5.6-2.4 8.4 0 1.5 1 2.5 2.2 2.5 1.6 0 2.5-1 2.7-2.6 1.5 1.4 2.5 3.4 2.5 5.6 0 3.6-3 6.6-6.6 6.6S5.3 19 5.3 15.4c0-5.5 6.7-7.3 8.2-13.9z"/></svg>,
  drop: (s=18) => <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5c0 0 7 7.5 7 12.2A7 7 0 0 1 5 14.7C5 10 12 2.5 12 2.5z"/></svg>,
  steps: (s=18) => <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M7 3.5a2 2 0 0 1 4 0v6a2 2 0 1 1-4 0zM14 7.5a2 2 0 0 1 4 0v5a2 2 0 1 1-4 0zM5 14a3 3 0 0 1 6 0v3.5a3 3 0 0 1-6 0zM13 17.5a2.5 2.5 0 0 1 5 0v2a2.5 2.5 0 0 1-5 0z"/></svg>,
  leaf: (s=18) => <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M20 4c-9 0-15 5-15 12 0 1.6.4 3 1 4.2C8 15 13 12 19 11c-5 2-9 6-12 12 8-2 14-7 14-15V4z"/></svg>,
  plus: (s=18) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>,
  filter: (s=18) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5h18M6 12h12M10 19h4"/></svg>,
  check: (s=16) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5 9-11"/></svg>,
  clock: (s=16) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>,
  trophy: (s=20) => <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M7 4h10v3a5 5 0 0 1-10 0V4zM5 5H3v2a4 4 0 0 0 3 3.9V9A1 1 0 0 1 5 8V5zm14 0v3a1 1 0 0 1-1 1v.9a4 4 0 0 0 3-3.9V5h-2zM10 13h4l-1 4h2v2H9v-2h2l-1-4z"/></svg>,
  live: (s=14) => <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="5"/></svg>,
  signal: (s=16) => <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="14" width="3" height="6" rx="1"/><rect x="7" y="10" width="3" height="10" rx="1"/><rect x="12" y="6" width="3" height="14" rx="1"/><rect x="17" y="2" width="3" height="18" rx="1" opacity=".4"/></svg>,
};

// ─── Bottom Nav ──────────────────────────────────────────────
function BottomNav({ active, onChange, membership = 'basic', accent = '#8a9a7c', accentDeep = '#6e7f60' }) {
  const tabs = [
    { id: 'home',     label: 'Ana Sayfa', icon: Icon.home, fill: Icon.homeFill },
    { id: 'coach',    label: 'B Koç',    icon: Icon.spark, fill: Icon.sparkFill },
    { id: 'recipes',  label: 'Tarifler',  icon: Icon.bowl, fill: Icon.bowlFill, center: true },
    { id: 'videos',   label: 'Videolar',  icon: Icon.play, fill: Icon.playFill },
    { id: 'profile',  label: 'Profil',    icon: Icon.user, fill: Icon.userFill },
  ];
  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0,
      paddingBottom: 26, paddingTop: 8,
      background: 'linear-gradient(to top, rgba(253,250,243,0.96) 70%, rgba(253,250,243,0))',
      backdropFilter: 'blur(8px)',
      zIndex: 30,
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end',
        padding: '0 14px', position: 'relative',
      }}>
        {tabs.map(t => {
          const isActive = active === t.id;
          const locked = membership === 'basic' && t.id !== 'recipes';
          if (t.center) {
            return (
              <button key={t.id} onClick={() => onChange(t.id)} style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                gap: 4, transform: 'translateY(-14px)',
              }}>
                <div style={{
                  width: 52, height: 52, borderRadius: '50%',
                  background: isActive ? accent : '#fff',
                  color: isActive ? '#fff' : accentDeep,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: isActive
                    ? `0 8px 20px ${accent}55, 0 2px 6px rgba(0,0,0,0.06)`
                    : '0 6px 16px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)',
                  transition: 'all 0.2s',
                }}>
                  {(isActive ? t.fill : t.icon)(24)}
                </div>
                <span style={{
                  fontSize: 11, fontWeight: 700, color: isActive ? accentDeep : '#9a9286',
                  letterSpacing: '0.02em',
                }}>{t.label}</span>
              </button>
            );
          }
          return (
            <button key={t.id} onClick={() => onChange(t.id)} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
              padding: '6px 4px', flex: 1,
              color: isActive ? accentDeep : '#9a9286',
            }}>
              {(isActive ? t.fill : t.icon)(22)}
              <span style={{ fontSize: 11, fontWeight: isActive ? 700 : 600 }}>
                {t.label}{locked ? ' +' : ''}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Generic phone-screen wrapper that includes bottom-nav padding
function ScreenScroll({ children, padBottom = 110 }) {
  return (
    <div style={{
      width: '100%', height: '100%', overflowY: 'auto', overflowX: 'hidden',
      paddingBottom: padBottom,
      WebkitOverflowScrolling: 'touch',
    }}>
      {children}
    </div>
  );
}

// Screen header with title (used by most tabs)
function ScreenHeader({ overline, title, right, sub }) {
  return (
    <div style={{ padding: '54px 24px 14px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          {overline && <div style={{
            fontSize: 12, fontWeight: 700, letterSpacing: '0.14em',
            color: 'var(--ink-mute)', textTransform: 'uppercase', marginBottom: 6,
          }}>{overline}</div>}
          <h1 style={{
            margin: 0, fontFamily: "'DM Serif Display', serif", fontSize: 32,
            color: 'var(--ink)', letterSpacing: '-0.01em',
          }}>{title}</h1>
          {sub && <div style={{ marginTop: 6, color: 'var(--ink-soft)', fontSize: 16 }}>{sub}</div>}
        </div>
        {right}
      </div>
    </div>
  );
}

// Card primitive
function Card({ children, style = {}, padding = 18 }) {
  return (
    <div style={{
      background: '#fff',
      borderRadius: 22,
      padding,
      boxShadow: '0 1px 2px rgba(45,42,38,0.04), 0 6px 18px rgba(45,42,38,0.04)',
      border: '1px solid rgba(235,226,209,0.6)',
      ...style,
    }}>{children}</div>
  );
}

// Soft pill button
function Pill({ children, onClick, active, color = 'sage', size = 'md' }) {
  const palette = {
    sage:  { bg: 'var(--green-soft)', fg: 'var(--green-deep)', activeBg: 'var(--green)', activeFg: '#fff' },
    pink:  { bg: 'var(--pink-soft)', fg: 'var(--pink-deep)', activeBg: 'var(--pink-deep)', activeFg: '#fff' },
    cream: { bg: 'var(--cream)', fg: 'var(--ink-soft)', activeBg: 'var(--ink-soft)', activeFg: '#fff' },
  }[color];
  const sizes = {
    sm: { padding: '6px 12px', fontSize: 12 },
    md: { padding: '8px 16px', fontSize: 13 },
    lg: { padding: '12px 20px', fontSize: 15 },
  }[size];
  return (
    <button onClick={onClick} style={{
      ...sizes,
      borderRadius: 999, fontWeight: 700,
      background: active ? palette.activeBg : palette.bg,
      color: active ? palette.activeFg : palette.fg,
      transition: 'all 0.15s',
      whiteSpace: 'nowrap',
    }}>{children}</button>
  );
}

// Big primary CTA
function CTA({ children, onClick, color = 'sage', icon }) {
  const bg = color === 'pink' ? 'var(--pink-deep)' : 'var(--green)';
  const sh = color === 'pink' ? 'rgba(217,154,154,0.4)' : 'rgba(138,154,124,0.4)';
  return (
    <button onClick={onClick} style={{
      width: '100%', padding: '18px 24px', borderRadius: 999,
      background: bg, color: 'white', fontWeight: 800, fontSize: 17,
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
      boxShadow: `0 10px 24px ${sh}, 0 2px 4px rgba(0,0,0,0.06)`,
      letterSpacing: '0.01em',
    }}>
      {icon}
      {children}
    </button>
  );
}

// Section title used across screens
function SectionTitle({ children, action, onAction }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', marginBottom: 12 }}>
      <div style={{
        fontSize: 13, fontWeight: 800, color: 'var(--ink-soft)',
        letterSpacing: '0.12em', textTransform: 'uppercase',
      }}>{children}</div>
      {action && <button onClick={onAction} style={{
        fontSize: 13, fontWeight: 700, color: 'var(--green-deep)',
        display: 'flex', alignItems: 'center', gap: 4,
      }}>{action}{Icon.chevR(14)}</button>}
    </div>
  );
}

// Small back-arrow nav header (for detail screens)
function NavBack({ title, onBack, right }) {
  return (
    <div style={{
      padding: '54px 16px 14px', display: 'flex', alignItems: 'center', gap: 8,
      position: 'sticky', top: 0, background: 'rgba(253,250,243,0.92)',
      backdropFilter: 'blur(8px)', zIndex: 5,
    }}>
      <button onClick={onBack} style={{
        width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.9)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
      }}>{Icon.chevL(18)}</button>
      <div style={{ flex: 1, fontWeight: 800, fontSize: 17 }}>{title}</div>
      {right}
    </div>
  );
}

Object.assign(window, {
  Icon, BottomNav, ScreenScroll, ScreenHeader, Card, Pill, CTA, SectionTitle, NavBack,
});
