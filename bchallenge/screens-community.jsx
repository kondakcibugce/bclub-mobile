// Community (Topluluk) — feed + live + Q&A

function CommunityScreen({ accent }) {
  const [tab, setTab] = React.useState('feed'); // feed | live | sorular
  const [likes, setLikes] = React.useState(() => {
    const o = {}; POSTS.forEach(p => o[p.id] = false); return o;
  });
  const [counts, setCounts] = React.useState(() => {
    const o = {}; POSTS.forEach(p => o[p.id] = p.likes); return o;
  });
  const [composing, setComposing] = React.useState(false);

  const toggleLike = (id) => {
    setLikes(l => ({ ...l, [id]: !l[id] }));
    setCounts(c => ({ ...c, [id]: c[id] + (likes[id] ? -1 : 1) }));
  };

  return (
    <ScreenScroll>
      <ScreenHeader
        overline="TOPLULUK"
        title="Burada hep birlikteyiz"
        sub={
          <span>
            <span style={{ color: 'var(--green-deep)', fontWeight: 700 }}>2.345 kız kardeş</span> seninle 💚
          </span>
        }
        right={
          <button onClick={() => setComposing(true)} style={{
            width: 44, height: 44, borderRadius: '50%', background: 'var(--green)',
            color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 6px 16px rgba(138,154,124,0.4)',
          }}>{Icon.plus(20)}</button>
        }
      />

      {/* Sub-tabs */}
      <div style={{ padding: '4px 24px 0' }}>
        <div style={{
          display: 'flex', gap: 6, padding: 4,
          background: 'var(--cream)', borderRadius: 999,
        }}>
          {[
            { id: 'feed', label: 'Akış' },
            { id: 'live', label: 'Canlı 🔴' },
            { id: 'sorular', label: 'Soru-Cevap' },
          ].map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              flex: 1, padding: '10px 8px', borderRadius: 999, fontSize: 13, fontWeight: 700,
              background: tab === t.id ? '#fff' : 'transparent',
              color: tab === t.id ? 'var(--green-deep)' : 'var(--ink-soft)',
              boxShadow: tab === t.id ? '0 2px 6px rgba(0,0,0,0.06)' : 'none',
            }}>{t.label}</button>
          ))}
        </div>
      </div>

      {tab === 'feed' && (
        <>
          {/* Live banner pinned */}
          <div style={{ padding: '18px 24px 0' }}>
            <div style={{
              background: 'linear-gradient(135deg, var(--pink-deep), #d18585)',
              borderRadius: 22, padding: 16, color: '#fff', position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <span style={{
                  background: '#fff', color: 'var(--pink-deep)', padding: '2px 10px', borderRadius: 999,
                  fontSize: 10, fontWeight: 800, letterSpacing: '0.1em',
                  display: 'flex', alignItems: 'center', gap: 4,
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--pink-deep)', animation: 'pulse 1.4s infinite' }}/>
                  CANLI
                </span>
                <span style={{ fontSize: 12, fontWeight: 600, opacity: 0.9 }}>Buğçe ile · 184 izliyor</span>
              </div>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 20, lineHeight: 1.2 }}>
                Sabah Sohbeti: Yeni Hafta Niyetlerimiz
              </div>
              <button style={{
                marginTop: 12, background: '#fff', color: 'var(--pink-deep)',
                padding: '10px 18px', borderRadius: 999, fontSize: 13, fontWeight: 800,
              }}>Yayına Katıl ✨</button>
            </div>
          </div>

          {/* Stories rail */}
          <div style={{ padding: '20px 0 0' }}>
            <div style={{ padding: '0 24px', display: 'flex', gap: 14, overflowX: 'auto', scrollbarWidth: 'none' }}>
              {[
                { name: 'Sen', avatar: 'cream', plus: true },
                { name: 'Ayşe', avatar: 'pink', live: true },
                { name: 'Fatma', avatar: 'sage' },
                { name: 'Zeynep', avatar: 'rose' },
                { name: 'Selma', avatar: 'cream' },
                { name: 'Buse', avatar: 'pink' },
                { name: 'Hande', avatar: 'sage' },
              ].map((s, i) => (
                <div key={i} style={{ flexShrink: 0, textAlign: 'center', width: 64 }}>
                  <div style={{
                    width: 60, height: 60, borderRadius: '50%', padding: 2,
                    background: s.live ? 'linear-gradient(135deg, var(--pink-deep), var(--green))' : 'var(--cream-deep)',
                    margin: '0 auto', position: 'relative',
                  }}>
                    <div style={{
                      width: '100%', height: '100%', borderRadius: '50%',
                      background: bg(avatar(s.name[0], s.avatar)),
                      border: '2px solid #fff',
                    }}/>
                    {s.plus && (
                      <div style={{
                        position: 'absolute', bottom: -2, right: -2, width: 22, height: 22,
                        borderRadius: '50%', background: 'var(--green)', color: '#fff',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        border: '2px solid #fff',
                      }}>{Icon.plus(12)}</div>
                    )}
                  </div>
                  <div style={{ marginTop: 6, fontSize: 11, fontWeight: 600, color: 'var(--ink)' }}>{s.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Posts */}
          <div style={{ padding: '20px 24px 0', display: 'grid', gap: 16 }}>
            {POSTS.map(p => (
              <Card key={p.id} padding={0}>
                <div style={{ padding: '14px 16px 0', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: bg(avatar(p.initials, p.avatar)),
                  }}/>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--ink)' }}>{p.author}</div>
                    <div style={{ fontSize: 12, color: 'var(--ink-mute)' }}>{p.when}</div>
                  </div>
                  {p.type === 'milestone' && (
                    <div style={{
                      background: 'linear-gradient(135deg, var(--pink-soft), var(--cream))',
                      padding: '4px 10px', borderRadius: 999, fontSize: 11, fontWeight: 800,
                      color: 'var(--pink-deep)',
                    }}>🎉 Başarı</div>
                  )}
                  {p.type === 'progress' && (
                    <div style={{
                      background: 'var(--green-soft)', padding: '4px 10px', borderRadius: 999,
                      fontSize: 11, fontWeight: 800, color: 'var(--green-deep)',
                    }}>📸 İlerleme</div>
                  )}
                  {p.type === 'question' && (
                    <div style={{
                      background: 'var(--cream)', padding: '4px 10px', borderRadius: 999,
                      fontSize: 11, fontWeight: 800, color: '#a8916a',
                    }}>💭 Soru</div>
                  )}
                </div>
                <div style={{ padding: '10px 16px 12px', fontSize: 15, lineHeight: 1.4, color: 'var(--ink)' }}>
                  {p.text}
                </div>
                {p.photo && (
                  <div style={{
                    height: 240, margin: '0 16px', borderRadius: 16,
                    background: bg(placeholder('TOPLULUKTAN', p.photo, 600, 600)),
                  }}/>
                )}
                <div style={{ padding: '0 16px 8px', marginTop: p.photo ? 12 : 0, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {p.hashtags.map(h => (
                    <span key={h} style={{ fontSize: 12, color: 'var(--green-deep)', fontWeight: 700 }}>{h}</span>
                  ))}
                </div>
                <div style={{
                  padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 18,
                  borderTop: '1px solid var(--line)',
                }}>
                  <button onClick={() => toggleLike(p.id)} style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    color: likes[p.id] ? 'var(--pink-deep)' : 'var(--ink-soft)',
                    fontWeight: 700, fontSize: 13,
                    transition: 'transform 0.15s',
                    transform: likes[p.id] ? 'scale(1.05)' : 'scale(1)',
                  }}>{Icon.heart(20, likes[p.id])} {counts[p.id]}</button>
                  <button style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    color: 'var(--ink-soft)', fontWeight: 700, fontSize: 13,
                  }}>{Icon.comment(20)} {p.comments}</button>
                  <div style={{ flex: 1 }}/>
                  <button style={{
                    background: 'var(--pink-soft)', color: 'var(--pink-deep)',
                    padding: '6px 12px', borderRadius: 999, fontSize: 12, fontWeight: 800,
                  }}>💚 Destek</button>
                </div>
              </Card>
            ))}
          </div>
        </>
      )}

      {tab === 'live' && (
        <div style={{ padding: '18px 24px 0', display: 'grid', gap: 14 }}>
          <div style={{
            padding: 18, background: 'linear-gradient(135deg, var(--pink-deep), #cb7878)',
            borderRadius: 22, color: '#fff',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <span style={{
                background: '#fff', color: 'var(--pink-deep)', padding: '3px 10px', borderRadius: 999,
                fontSize: 10, fontWeight: 800, letterSpacing: '0.1em',
              }}>● ŞİMDİ CANLI</span>
              <span style={{ fontSize: 12, opacity: 0.9 }}>184 izliyor</span>
            </div>
            <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 24, lineHeight: 1.15 }}>
              Sabah Sohbeti: Yeni Hafta Niyetlerimiz
            </div>
            <div style={{ marginTop: 6, fontSize: 13, opacity: 0.9 }}>
              Buğçe ile · sohbet · motivasyon · birlik
            </div>
            <button style={{
              marginTop: 14, background: '#fff', color: 'var(--pink-deep)',
              padding: '12px 22px', borderRadius: 999, fontSize: 14, fontWeight: 800,
              display: 'flex', alignItems: 'center', gap: 8,
            }}>{Icon.playFill(16)} Yayına Katıl</button>
          </div>

          <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--ink-soft)', letterSpacing: '0.1em', marginTop: 6 }}>
            YAKLAŞAN YAYINLAR
          </div>
          {LIVE.slice(1).map(l => (
            <div key={l.id} style={{
              background: '#fff', borderRadius: 18, padding: 14,
              display: 'flex', alignItems: 'center', gap: 14, border: '1px solid var(--line)',
            }}>
              <div style={{
                width: 64, height: 64, borderRadius: 14, flexShrink: 0,
                background: bg(placeholder(l.tag.toUpperCase(), l.palette, 200, 200)),
              }}/>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--green-deep)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  {l.tag} · {l.when}
                </div>
                <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--ink)', marginTop: 2 }}>{l.title}</div>
                <div style={{ fontSize: 12, color: 'var(--ink-soft)', marginTop: 2 }}>Buğçe ile</div>
              </div>
              <button style={{
                background: 'var(--green-soft)', color: 'var(--green-deep)',
                padding: '8px 14px', borderRadius: 999, fontSize: 12, fontWeight: 800,
                display: 'flex', alignItems: 'center', gap: 4,
              }}>🔔 Hatırlat</button>
            </div>
          ))}
        </div>
      )}

      {tab === 'sorular' && (
        <div style={{ padding: '18px 24px 0', display: 'grid', gap: 14 }}>
          <Card style={{ background: 'var(--green-soft)', padding: 16, border: 'none' }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--green-deep)', marginBottom: 4 }}>
              Soru sormak güzeldir 💚
            </div>
            <div style={{ fontSize: 13, color: 'var(--ink-soft)' }}>
              Aklında ne varsa sor — Buğçe ablan ve topluluk burada.
            </div>
            <button style={{
              marginTop: 12, background: 'var(--green)', color: '#fff',
              padding: '10px 16px', borderRadius: 999, fontSize: 13, fontWeight: 800,
            }}>Soru Sor</button>
          </Card>

          {[
            { q: 'Akşam tatlı krizleriyle nasıl baş ediyorsunuz?', by: 'Fatma S.', when: '4 sa', a: 28, sol: true },
            { q: 'Hangi videoyla başlamamı önerirsiniz? 45 yaşındayım, hiç spor yapmadım.', by: 'Hatice Y.', when: '1 g', a: 14 },
            { q: 'Kahvaltıda yulafı nasıl daha lezzetli yaparsınız?', by: 'Selma D.', when: '2 g', a: 22 },
            { q: 'Su içmeyi nasıl alışkanlık haline getirdiniz?', by: 'Pınar T.', when: '3 g', a: 31 },
          ].map((q, i) => (
            <Card key={i} padding={16}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <div style={{ fontSize: 22, color: 'var(--pink-deep)' }}>💭</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)', lineHeight: 1.3 }}>{q.q}</div>
                  <div style={{ marginTop: 8, fontSize: 12, color: 'var(--ink-soft)' }}>
                    {q.by} • {q.when} önce • <b style={{ color: 'var(--green-deep)' }}>{q.a} cevap</b>
                  </div>
                  {q.sol && (
                    <div style={{
                      marginTop: 8, padding: 10, background: 'var(--green-soft)', borderRadius: 12,
                      fontSize: 13, color: 'var(--green-deep)',
                    }}>
                      ✨ <b>Buğçe yanıtladı:</b> Çilekli yoğurt parfait dene, ya da bir kare bitter çikolata + zihinli nefes 🌿
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Compose modal */}
      {composing && (
        <div onClick={() => setComposing(false)} style={{
          position: 'absolute', inset: 0, background: 'rgba(45,42,38,0.4)',
          backdropFilter: 'blur(4px)', zIndex: 100, display: 'flex',
          alignItems: 'flex-end',
        }}>
          <div onClick={e => e.stopPropagation()} style={{
            width: '100%', background: 'var(--paper)', borderTopLeftRadius: 28, borderTopRightRadius: 28,
            padding: 24, paddingBottom: 40,
          }}>
            <div style={{ width: 40, height: 4, background: 'var(--cream-deep)', borderRadius: 999, margin: '0 auto 16px' }}/>
            <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 22, marginBottom: 12 }}>
              Bugün ne paylaşıyorsun?
            </div>
            <div style={{ display: 'grid', gap: 10 }}>
              {[
                { i: '📸', l: 'İlerleme fotoğrafı paylaş', sub: 'Önce-sonra' },
                { i: '✨', l: 'Bir başarı kutla', sub: 'Kilometre taşları' },
                { i: '💭', l: 'Soru sor', sub: 'Topluluk yardım eder' },
                { i: '🌿', l: 'Tarif paylaş', sub: 'Denedim, çok güzeldi' },
              ].map((o, i) => (
                <button key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 14, padding: 14,
                  background: '#fff', borderRadius: 16, textAlign: 'left',
                  border: '1px solid var(--line)',
                }}>
                  <div style={{ fontSize: 24 }}>{o.i}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 15, fontWeight: 800 }}>{o.l}</div>
                    <div style={{ fontSize: 12, color: 'var(--ink-soft)' }}>{o.sub}</div>
                  </div>
                  {Icon.chevR(18)}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </ScreenScroll>
  );
}

window.CommunityScreen = CommunityScreen;
