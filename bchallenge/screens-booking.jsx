// Guest Booking — class/session reservation page

function BookingScreen({ onNavigate }) {
  const [selected, setSelected] = React.useState(BOOKING_SESSIONS[0].id);
  const [reserved, setReserved] = React.useState(false);
  const session = BOOKING_SESSIONS.find(s => s.id === selected) || BOOKING_SESSIONS[0];
  const seatPct = Math.round((session.booked / session.seats) * 100);
  const levelColor = session.level === 'başlangıç'
    ? { bg: 'var(--green-soft)', fg: 'var(--green-deep)' }
    : session.level === 'orta'
      ? { bg: 'var(--pink-soft)', fg: 'var(--pink-deep)' }
      : { bg: 'var(--cream)', fg: '#a8916a' };

  return (
    <ScreenScroll>
      <div style={{
        height: 330, position: 'relative',
        background: bg(placeholder(session.title.toUpperCase(), session.palette, 900, 650)),
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(45,42,38,0.08), rgba(45,42,38,0.5))' }} />
        <div style={{ position: 'absolute', top: 54, left: 18, right: 18, display: 'flex', justifyContent: 'space-between' }}>
          <button onClick={() => onNavigate('home')} style={{
            width: 42, height: 42, borderRadius: '50%', background: 'rgba(255,255,255,0.92)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>{Icon.chevL(18)}</button>
          <button onClick={() => onNavigate('recipes')} style={{
            padding: '10px 14px', borderRadius: 999, background: 'rgba(255,255,255,0.92)',
            color: 'var(--green-deep)', display: 'flex', alignItems: 'center', gap: 6,
            fontSize: 12, fontWeight: 800,
          }}>{Icon.bowlFill(15)} Tarifler</button>
        </div>
        <div style={{ position: 'absolute', left: 24, right: 24, bottom: 24, color: '#fff' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 12px',
            borderRadius: 999, background: 'rgba(255,255,255,0.94)', color: 'var(--green-deep)',
            fontSize: 11, fontWeight: 800, letterSpacing: '0.08em',
          }}>{Icon.live(10)} {session.type.toUpperCase()}</div>
          <h1 style={{
            margin: '10px 0 0', fontFamily: "'DM Serif Display', serif",
            fontSize: 33, lineHeight: 1.05,
          }}>{session.title}</h1>
          <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 700 }}>
            <span>{session.when} {session.hour}</span>
            <span>•</span>
            <span>{session.duration}</span>
          </div>
        </div>
      </div>

      <div style={{
        marginTop: -22, position: 'relative', background: 'var(--paper)',
        borderTopLeftRadius: 28, borderTopRightRadius: 28, padding: '24px 24px 0',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 52, height: 52, borderRadius: '50%', background: bg(BUGCE_AVATAR),
            border: '3px solid #fff', boxShadow: '0 4px 12px rgba(138,154,124,0.25)',
          }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 800, color: 'var(--ink)' }}>Buğçe Kondakçı</div>
            <div style={{ fontSize: 13, color: 'var(--ink-soft)' }}>Kişisel AI koçunla takip edilir</div>
          </div>
          <span style={{
            background: levelColor.bg, color: levelColor.fg, borderRadius: 999,
            padding: '7px 12px', fontSize: 11, fontWeight: 800,
          }}>{session.level}</span>
        </div>

        <Card padding={16} style={{ marginTop: 18, background: 'linear-gradient(135deg, var(--green-soft), #fff)' }}>
          <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--ink)' }}>Bugün kendine iyi bak 🌿</div>
          <div style={{ marginTop: 6, fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.4 }}>
            {session.note}
          </div>
          <div style={{ marginTop: 14, height: 7, borderRadius: 999, background: '#fff', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${seatPct}%`, background: 'var(--green)', borderRadius: 999 }} />
          </div>
          <div style={{ marginTop: 7, fontSize: 12, color: 'var(--green-deep)', fontWeight: 800 }}>
            {session.seats - session.booked} kişilik yer kaldı
          </div>
        </Card>

        <div style={{ marginTop: 22, fontSize: 13, fontWeight: 800, color: 'var(--ink-soft)', letterSpacing: '0.1em' }}>
          SAAT SEÇ
        </div>
        <div style={{ marginTop: 10, display: 'grid', gap: 10 }}>
          {BOOKING_SESSIONS.map((s) => (
            <button key={s.id} onClick={() => { setSelected(s.id); setReserved(false); }} style={{
              padding: 14, borderRadius: 18, background: selected === s.id ? 'var(--pink-soft)' : '#fff',
              border: selected === s.id ? '2px solid var(--pink-deep)' : '1px solid var(--line)',
              display: 'flex', alignItems: 'center', gap: 12, textAlign: 'left',
            }}>
              <div style={{
                width: 54, height: 54, borderRadius: 15, background: selected === s.id ? 'var(--pink-deep)' : 'var(--cream)',
                color: selected === s.id ? '#fff' : 'var(--ink-soft)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                fontWeight: 800, flexShrink: 0,
              }}>
                <span style={{ fontSize: 11 }}>{s.when}</span>
                <span style={{ fontSize: 14 }}>{s.hour}</span>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--ink)' }}>{s.title}</div>
                <div style={{ marginTop: 3, fontSize: 12, color: 'var(--ink-soft)' }}>
                  {s.duration} • {s.level} • {s.price}
                </div>
              </div>
              {selected === s.id && Icon.check(18)}
            </button>
          ))}
        </div>

        <div style={{ marginTop: 22, display: 'flex', alignItems: 'center', gap: 10 }}>
          {['AK', 'FS', 'ZB', 'SD'].map((name, i) => (
            <div key={name} style={{
              width: 34, height: 34, borderRadius: '50%',
              background: bg(avatar(name, ['pink', 'sage', 'cream', 'rose'][i])),
              border: '2px solid #fff', marginLeft: i ? -18 : 0,
            }} />
          ))}
          <div style={{ marginLeft: 2, fontSize: 13, color: 'var(--ink-soft)', fontWeight: 700 }}>
            Topluluktan {session.booked} kişi katılıyor.
          </div>
        </div>

        <div style={{ padding: '24px 0 130px' }}>
          <CTA color={reserved ? 'pink' : 'sage'} icon={reserved ? Icon.check(20) : Icon.sparkFill(20)} onClick={() => setReserved(true)}>
            {reserved ? 'Yerin ayrıldı, harika gidiyorsun!' : 'Yerimi Ayır'}
          </CTA>
        </div>
      </div>
    </ScreenScroll>
  );
}

window.BookingScreen = BookingScreen;
