// Home (Ana Sayfa) screen

function StatTile({ icon, color, value, label, delta }) {
  const bgs = { sage: 'var(--green-soft)', pink: 'var(--pink-soft)', cream: 'var(--cream)', rose: '#f3d4d4' };
  const fgs = { sage: 'var(--green-deep)', pink: 'var(--pink-deep)', cream: '#a8916a', rose: '#c98080' };
  return (
    <div style={{
      flex: 1, background: '#fff', borderRadius: 18, padding: '14px 12px',
      border: '1px solid rgba(235,226,209,0.7)'
    }}>
      <div style={{
        width: 34, height: 34, borderRadius: '50%',
        background: bgs[color], color: fgs[color],
        display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10
      }}>{icon}</div>
      <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 22, lineHeight: 1, color: 'var(--ink)' }}>{value}</div>
      <div style={{ fontSize: 12, color: 'var(--ink-soft)', marginTop: 2 }}>{label}</div>
      {delta && <div style={{ marginTop: 6, fontSize: 11, fontWeight: 700, color: 'var(--green-deep)' }}>↑ {delta}</div>}
    </div>);

}

function HomeScreen({ onNavigate, accent, accentDeep }) {
  const sage = accent || 'var(--green)';
  return (
    <ScreenScroll>
      {/* Header */}
      <div style={{ padding: '54px 24px 0' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
          <div>
            <div style={{ fontSize: 17, color: 'var(--ink-soft)', fontWeight: 600 }}>Merhaba</div>
            <h1 style={{
              margin: '2px 0 0', fontFamily: "'DM Serif Display', serif",
              fontSize: 38, lineHeight: 1.05, color: 'var(--ink)', letterSpacing: '-0.02em'
            }}>Elif! <span style={{ fontFamily: "'Caveat', cursive", color: 'var(--pink-deep)', fontSize: 36 }}>👋</span></h1>
            <div style={{ marginTop: 8, fontSize: 15, color: 'var(--ink-soft)' }}>
              Topluluğun seninle ilham buluyor.
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <button style={{
              width: 40, height: 40, borderRadius: '50%', background: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)', position: 'relative'
            }}>
              {Icon.bell(20)}
              <div style={{
                position: 'absolute', top: 9, right: 11, width: 8, height: 8,
                borderRadius: '50%', background: 'var(--pink-deep)',
                boxShadow: '0 0 0 2px #fff'
              }} />
            </button>
            <div style={{
              width: 48, height: 48, borderRadius: '50%',
              background: bg(BUGCE_AVATAR),
              border: '2px solid #fff', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
            }} />
          </div>
        </div>
      </div>

      {/* Daily message from Buğçe */}
      <div style={{ padding: '20px 24px 0' }}>
        <div style={{
          background: 'linear-gradient(135deg, var(--green-soft), #f0eed7)',
          borderRadius: 22, padding: 18, position: 'relative', overflow: 'hidden'
        }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <div style={{
              width: 44, height: 44, borderRadius: '50%',
              background: bg(BUGCE_AVATAR), flexShrink: 0,
              border: '2px solid #fff'
            }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--green-deep)', letterSpacing: '0.1em', marginBottom: 4 }}>
                BUĞÇE'DEN GÜNAYDIN ✨
              </div>
              <div style={{ fontSize: 16, lineHeight: 1.4, color: 'var(--ink)', fontWeight: 500 }}>"Bugün küçük bir adım, yarın büyük bir başarı. Kendine nazik ol — birlikteyiz 💚"

              </div>
            </div>
          </div>
          {/* decorative leaf */}
          <div style={{ position: 'absolute', right: -10, bottom: -10, opacity: 0.15, transform: 'rotate(20deg)' }}>
            {Icon.leaf(80)}
          </div>
        </div>
      </div>

      {/* Daily summary */}
      <div style={{ padding: '20px 24px 0' }}>
        <div style={{
          fontSize: 12, fontWeight: 800, color: 'var(--ink-soft)',
          letterSpacing: '0.14em', marginBottom: 10
        }}>GÜNLÜK ÖZETİN</div>
        <div style={{ display: 'flex', gap: 10 }}>
          <StatTile icon={Icon.flame(18)} color="rose" value="1.240" label="kalori" delta="78%" />
          <StatTile icon={Icon.drop(18)} color="pink" value="1.6L" label="su" delta="6 / 8" />
          <StatTile icon={Icon.steps(18)} color="sage" value="6.842" label="adım" />
          <StatTile icon={Icon.leaf(18)} color="cream" value="3/5" label="öğün" />
        </div>
      </div>

      {/* AI Coach quick chat */}
      <div style={{ padding: '20px 24px 0' }}>
        <Card padding={0}>
          <button onClick={() => onNavigate('coach')} style={{
            width: '100%', padding: 18, display: 'flex', alignItems: 'center', gap: 14,
            textAlign: 'left'
          }}>
            <div style={{
              width: 52, height: 52, borderRadius: 16,
              background: 'linear-gradient(135deg, var(--green), var(--green-deep))',
              color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0
            }}>{Icon.sparkFill(26)}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--green-deep)', letterSpacing: '0.1em', marginBottom: 2 }}>
                AI KOÇ • BUĞÇE
              </div>
              <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)', marginBottom: 2 }}>
                Bugün öğle için planın hazır 🌿
              </div>
              <div style={{ fontSize: 13, color: 'var(--ink-soft)' }}>
                Nohutlu Kinoa Salatası — 290 kcal · 15 dk
              </div>
            </div>
            <div style={{ color: 'var(--ink-mute)' }}>{Icon.chevR(20)}</div>
          </button>
        </Card>
      </div>

      {/* Live + streak */}
      <div style={{ padding: '20px 24px 0', display: 'flex', gap: 12 }}>
        <Card style={{ flex: 1.2, padding: 14, background: 'linear-gradient(180deg, #fff, var(--pink-soft))' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
            <div style={{
              background: 'var(--pink-deep)', color: '#fff', padding: '2px 8px',
              borderRadius: 999, fontSize: 10, fontWeight: 800, letterSpacing: '0.1em',
              display: 'flex', alignItems: 'center', gap: 4
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff', display: 'inline-block', animation: 'pulse 1.4s infinite' }} />
              CANLI
            </div>
            <div style={{ fontSize: 11, color: 'var(--ink-soft)', fontWeight: 600 }}>184 izliyor</div>
          </div>
          <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--ink)', lineHeight: 1.25 }}>
            Sabah Sohbeti: Yeni Hafta Niyetlerimiz
          </div>
          <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', gap: -10 }}>
            {['pink', 'sage', 'cream', 'rose'].map((p, i) =>
            <div key={i} style={{
              width: 22, height: 22, borderRadius: '50%',
              background: bg(avatar(['A', 'S', 'M', 'D'][i], p)),
              marginLeft: i === 0 ? 0 : -8, border: '2px solid #fff'
            }} />
            )}
            <div style={{ fontSize: 11, color: 'var(--ink-soft)', fontWeight: 700, marginLeft: 8 }}>
              Buğçe ile
            </div>
          </div>
        </Card>
        <Card style={{ flex: 1, padding: 14, textAlign: 'center', background: 'linear-gradient(180deg, #fff, var(--green-soft))' }}>
          <div style={{ fontSize: 28 }}>🌱</div>
          <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 28, lineHeight: 1, color: 'var(--green-deep)' }}>30</div>
          <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--ink-soft)', letterSpacing: '0.06em' }}>GÜN ÜST ÜSTE</div>
          <div style={{ marginTop: 6, fontSize: 11, color: 'var(--ink-soft)' }}>Devam et ✨</div>
        </Card>
      </div>

      {/* Community highlights */}
      <SectionTitle action="Tümünü Gör" onAction={() => onNavigate('community')}>
        <span style={{ marginTop: 22, display: 'block' }}>TOPLULUKTAN ✨</span>
      </SectionTitle>
      <div style={{ display: 'flex', gap: 12, padding: '0 24px', overflowX: 'auto', scrollbarWidth: 'none' }}>
        {POSTS.slice(0, 3).map((p) =>
        <div key={p.id} onClick={() => onNavigate('community')} style={{
          flex: '0 0 220px', background: '#fff', borderRadius: 20,
          border: '1px solid rgba(235,226,209,0.6)', overflow: 'hidden',
          boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
        }}>
            {p.photo ?
          <div style={{
            height: 120,
            background: bg(placeholder(p.author.toUpperCase(), p.photo))
          }} /> :

          <div style={{ height: 12 }} />
          }
            <div style={{ padding: 14 }}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8 }}>
                <div style={{
                width: 26, height: 26, borderRadius: '50%',
                background: bg(avatar(p.initials, p.avatar))
              }} />
                <div style={{ fontSize: 12, fontWeight: 700 }}>{p.author}</div>
              </div>
              <div style={{ fontSize: 13, color: 'var(--ink-soft)', lineHeight: 1.35,
              display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {p.text}
              </div>
              <div style={{ marginTop: 10, display: 'flex', gap: 12, fontSize: 12, color: 'var(--ink-mute)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>{Icon.heart(14)} {p.likes}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>{Icon.comment(14)} {p.comments}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Achievement banner */}
      <div style={{ padding: '20px 24px 0' }}>
        <div style={{
          background: 'linear-gradient(135deg, var(--pink-soft), #fce8e0)',
          borderRadius: 22, padding: 18, display: 'flex', alignItems: 'center', gap: 14
        }}>
          <div style={{
            width: 52, height: 52, borderRadius: '50%', background: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--pink-deep)'
          }}>{Icon.trophy(28)}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 800, color: 'var(--ink)', fontSize: 15 }}>Harika bir iddialısın!</div>
            <div style={{ fontSize: 13, color: 'var(--ink-soft)', marginTop: 2 }}>
              30 gün üst üste topluluğa ilham oldun.
            </div>
          </div>
        </div>
      </div>
    </ScreenScroll>);

}

window.HomeScreen = HomeScreen;