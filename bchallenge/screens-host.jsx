// Host Dashboard — creator/admin view for Buğçe

function HostMetric({ stat }) {
  const colors = {
    sage: { bg: 'var(--green-soft)', fg: 'var(--green-deep)' },
    pink: { bg: 'var(--pink-soft)', fg: 'var(--pink-deep)' },
    cream: { bg: 'var(--cream)', fg: '#a8916a' },
    rose: { bg: '#f3d4d4', fg: '#c98080' },
  }[stat.color] || { bg: 'var(--cream)', fg: 'var(--ink-soft)' };

  return (
    <Card padding={14} style={{ minHeight: 112 }}>
      <div style={{
        width: 34, height: 34, borderRadius: '50%', background: colors.bg, color: colors.fg,
        display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10,
      }}>{Icon.signal(17)}</div>
      <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 28, lineHeight: 1, color: 'var(--ink)' }}>
        {stat.value}
      </div>
      <div style={{ marginTop: 4, fontSize: 12, color: 'var(--ink-soft)', fontWeight: 700 }}>{stat.label}</div>
      <div style={{ marginTop: 6, fontSize: 11, color: colors.fg, fontWeight: 800 }}>{stat.delta} bugün</div>
    </Card>
  );
}

function HostDashboardScreen({ onNavigate }) {
  return (
    <ScreenScroll>
      <div style={{ padding: '54px 24px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{
            width: 58, height: 58, borderRadius: '50%', background: bg(BUGCE_AVATAR),
            border: '3px solid #fff', boxShadow: '0 6px 18px rgba(138,154,124,0.25)',
          }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.12em', color: 'var(--green-deep)' }}>
              HOST DASHBOARD
            </div>
            <h1 style={{
              margin: '2px 0 0', fontFamily: "'DM Serif Display', serif", fontSize: 31,
              lineHeight: 1.05, color: 'var(--ink)',
            }}>Günaydın Buğçe</h1>
            <div style={{ marginTop: 4, fontSize: 14, color: 'var(--ink-soft)' }}>
              Topluluğun bugün çok canlı.
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: '20px 24px 0' }}>
        <Card padding={18} style={{ background: 'linear-gradient(135deg, var(--green-soft), #fff)' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            <div style={{
              width: 46, height: 46, borderRadius: 16, background: 'var(--green)',
              color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>{Icon.sparkFill(24)}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--green-deep)', letterSpacing: '0.1em' }}>
                BUGÜNÜN YAYINI
              </div>
              <div style={{ marginTop: 4, fontSize: 17, fontWeight: 800, color: 'var(--ink)', lineHeight: 1.25 }}>
                Sabah motivasyon mesajın 8.920 kişiye ulaştı.
              </div>
              <div style={{ marginTop: 6, fontSize: 13, color: 'var(--ink-soft)', lineHeight: 1.35 }}>
                En çok yanıt alan konu: “akşam tatlı krizi”.
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div style={{ padding: '18px 24px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {HOST_STATS.map((s) => <HostMetric key={s.label} stat={s} />)}
      </div>

      <SectionTitle action="Yeni ders aç" onAction={() => onNavigate('booking')}>
        <span style={{ marginTop: 22, display: 'block' }}>CANLI TAKVİM</span>
      </SectionTitle>
      <div style={{ padding: '0 24px', display: 'grid', gap: 10 }}>
        {BOOKING_SESSIONS.map((session) => (
          <button key={session.id} onClick={() => onNavigate('booking')} style={{
            display: 'flex', alignItems: 'center', gap: 12, width: '100%', textAlign: 'left',
            background: '#fff', borderRadius: 18, padding: 12, border: '1px solid var(--line)',
          }}>
            <div style={{
              width: 64, height: 64, borderRadius: 16, flexShrink: 0,
              background: bg(placeholder(session.title.toUpperCase(), session.palette, 220, 220)),
            }} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 11, color: 'var(--green-deep)', fontWeight: 800, letterSpacing: '0.08em' }}>
                {session.when.toUpperCase()} • {session.hour}
              </div>
              <div style={{ marginTop: 2, fontSize: 14, fontWeight: 800, color: 'var(--ink)' }}>{session.title}</div>
              <div style={{ marginTop: 3, fontSize: 12, color: 'var(--ink-soft)' }}>
                {session.booked}/{session.seats} rezervasyon
              </div>
            </div>
            {Icon.chevR(18)}
          </button>
        ))}
      </div>

      <SectionTitle>
        <span style={{ marginTop: 22, display: 'block' }}>HIZLI AKSİYONLAR</span>
      </SectionTitle>
      <div style={{ padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {[
          { label: 'Tarif yükle', icon: Icon.bowlFill(18), screen: 'recipes' },
          { label: 'Video ekle', icon: Icon.playFill(18), screen: 'videos' },
          { label: 'AI soruları', icon: Icon.sparkFill(18), screen: 'coach' },
          { label: 'Topluluk', icon: Icon.communityFill(18), screen: 'community' },
        ].map((a) => (
          <button key={a.label} onClick={() => onNavigate(a.screen)} style={{
            padding: '14px 12px', borderRadius: 16, background: 'var(--pink-soft)',
            color: 'var(--pink-deep)', fontSize: 13, fontWeight: 800,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          }}>{a.icon} {a.label}</button>
        ))}
      </div>

      <div style={{ padding: '22px 24px 0' }}>
        <Card padding={16}>
          <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--ink-soft)', letterSpacing: '0.1em' }}>
            BUGÜN KUTLANACAKLAR
          </div>
          <div style={{ marginTop: 12, display: 'flex', gap: 10, overflowX: 'auto', scrollbarWidth: 'none' }}>
            {POSTS.filter(p => p.type !== 'question').map((p) => (
              <div key={p.id} style={{ flex: '0 0 118px' }}>
                <div style={{
                  height: 112, borderRadius: 16, background: bg(placeholder(p.author, p.photo || 'pink', 240, 240)),
                }} />
                <div style={{ marginTop: 7, fontSize: 12, fontWeight: 800, color: 'var(--ink)' }}>{p.author}</div>
                <div style={{ fontSize: 11, color: 'var(--ink-soft)' }}>{p.likes} destek</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </ScreenScroll>
  );
}

window.HostDashboardScreen = HostDashboardScreen;
