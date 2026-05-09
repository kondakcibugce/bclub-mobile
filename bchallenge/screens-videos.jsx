// Videos (Videolar) — workout video grid

function VideosScreen({ accent }) {
  const [activeLevel, setActiveLevel] = React.useState('Tümü');
  const [activeCat, setActiveCat] = React.useState('Tümü');
  const [openId, setOpenId] = React.useState(null);

  const levels = ['Tümü', 'başlangıç', 'orta', 'ileri'];
  const cats = ['Tümü', 'tüm vücut', 'alt vücut', 'üst vücut', 'core', 'kardiyo', 'esneme'];

  const filtered = VIDEOS.filter(v => {
    if (activeLevel !== 'Tümü' && v.level !== activeLevel) return false;
    if (activeCat !== 'Tümü' && v.cat !== activeCat) return false;
    return true;
  });

  const featured = VIDEOS[0];
  const openVid = VIDEOS.find(v => v.id === openId);

  if (openVid) return <VideoDetail video={openVid} onBack={() => setOpenId(null)} />;

  const levelColor = (lv) => ({
    'başlangıç': { bg: 'var(--green-soft)', fg: 'var(--green-deep)' },
    'orta':      { bg: 'var(--cream)', fg: '#a8916a' },
    'ileri':     { bg: 'var(--pink-soft)', fg: 'var(--pink-deep)' },
  }[lv] || { bg: 'var(--cream)', fg: 'var(--ink-soft)' });

  return (
    <ScreenScroll>
      <ScreenHeader
        overline="VİDEOLAR"
        title="Evde, yanımdasın"
        sub="Buğçe ile, kendi tempomda 🌿"
      />

      {/* Featured banner */}
      <div style={{ padding: '0 24px 18px' }}>
        <button onClick={() => setOpenId(featured.id)} style={{
          width: '100%', borderRadius: 24, overflow: 'hidden', position: 'relative',
          height: 200, textAlign: 'left',
          background: bg(placeholder(featured.title.toUpperCase(), featured.palette, 800, 500)),
          boxShadow: '0 10px 30px rgba(45,42,38,0.1)',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.55))',
          }}/>
          <div style={{
            position: 'absolute', top: 16, left: 16,
            background: 'rgba(255,255,255,0.95)', color: 'var(--green-deep)',
            padding: '6px 12px', borderRadius: 999, fontSize: 11, fontWeight: 800, letterSpacing: '0.08em',
          }}>BU HAFTA ÖNERİSİ</div>
          <div style={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: 64, height: 64, borderRadius: '50%', background: 'rgba(255,255,255,0.95)',
            color: 'var(--green-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
          }}>{Icon.playFill(36)}</div>
          <div style={{ position: 'absolute', bottom: 14, left: 16, right: 16, color: '#fff' }}>
            <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 22, lineHeight: 1.15 }}>
              {featured.title}
            </div>
            <div style={{ marginTop: 4, fontSize: 13, opacity: 0.9 }}>
              Buğçe Kondakçı • {featured.dur} • {featured.kcal} kcal
            </div>
          </div>
        </button>
      </div>

      {/* Filter chips — level */}
      <div style={{ display: 'flex', gap: 8, padding: '0 24px 10px', overflowX: 'auto', scrollbarWidth: 'none' }}>
        {levels.map(l => (
          <Pill key={l} active={activeLevel === l} onClick={() => setActiveLevel(l)} color={l === 'ileri' ? 'pink' : 'sage'}>
            {l === 'Tümü' ? l : l.charAt(0).toUpperCase() + l.slice(1)}
          </Pill>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 8, padding: '0 24px 16px', overflowX: 'auto', scrollbarWidth: 'none' }}>
        {cats.map(c => (
          <button key={c} onClick={() => setActiveCat(c)} style={{
            padding: '8px 14px', borderRadius: 999, fontSize: 13, fontWeight: 600,
            background: activeCat === c ? '#fff' : 'transparent',
            color: activeCat === c ? 'var(--ink)' : 'var(--ink-mute)',
            border: '1px solid var(--line)', whiteSpace: 'nowrap',
          }}>{c}</button>
        ))}
      </div>

      {/* Video grid */}
      <div style={{ padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        {filtered.map(v => {
          const lc = levelColor(v.level);
          return (
            <button key={v.id} onClick={() => setOpenId(v.id)} style={{
              borderRadius: 18, overflow: 'hidden', textAlign: 'left',
              background: '#fff', border: '1px solid var(--line)',
            }}>
              <div style={{
                position: 'relative', aspectRatio: '4/5',
                background: bg(placeholder(v.title.toUpperCase(), v.palette, 400, 500)),
              }}>
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.4))',
                }}/>
                <div style={{
                  position: 'absolute', top: 8, left: 8,
                  background: lc.bg, color: lc.fg,
                  padding: '4px 10px', borderRadius: 999, fontSize: 10, fontWeight: 800, letterSpacing: '0.06em',
                }}>{v.level.toUpperCase()}</div>
                <div style={{
                  position: 'absolute', bottom: 8, right: 8,
                  background: 'rgba(0,0,0,0.55)', color: '#fff', padding: '3px 8px', borderRadius: 999,
                  fontSize: 11, fontWeight: 700,
                }}>{v.dur}</div>
                <div style={{
                  position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                  width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.92)',
                  color: 'var(--green-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>{Icon.playFill(22)}</div>
              </div>
              <div style={{ padding: '10px 12px 12px' }}>
                <div style={{ fontSize: 14, fontWeight: 800, lineHeight: 1.25, color: 'var(--ink)',
                  display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {v.title}
                </div>
                <div style={{ marginTop: 4, fontSize: 11, color: 'var(--ink-mute)', display: 'flex', gap: 8 }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3 }}>{Icon.flame(11)} {v.kcal}</span>
                  <span>•</span>
                  <span>{v.cat}</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div style={{ padding: '40px 24px', textAlign: 'center', color: 'var(--ink-soft)' }}>
          Bu filtrelerle video yok 🌱<br/>
          <span style={{ fontSize: 13 }}>Filtreleri değiştirmeyi dene.</span>
        </div>
      )}
    </ScreenScroll>
  );
}

function VideoDetail({ video, onBack }) {
  const [saved, setSaved] = React.useState(false);
  const [started, setStarted] = React.useState(false);

  return (
    <ScreenScroll>
      <div style={{
        height: 380, position: 'relative',
        background: bg(placeholder(video.title.toUpperCase(), video.palette, 800, 800)),
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 30%, rgba(0,0,0,0.5))',
        }}/>
        <div style={{
          position: 'absolute', top: 54, left: 16, right: 16,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <button onClick={onBack} style={{
            width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.92)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>{Icon.chevL(18)}</button>
          <button onClick={() => setSaved(s => !s)} style={{
            width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.92)',
            color: saved ? 'var(--pink-deep)' : 'var(--ink-soft)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>{Icon.heart(20, saved)}</button>
        </div>
        <button onClick={() => setStarted(true)} style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.95)',
          color: 'var(--green-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
        }}>{Icon.playFill(44)}</button>
      </div>

      <div style={{
        background: 'var(--paper)', borderTopLeftRadius: 28, borderTopRightRadius: 28,
        marginTop: -28, padding: '24px 24px 0', position: 'relative',
      }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
          <span style={{
            background: 'var(--pink-soft)', color: 'var(--pink-deep)',
            padding: '4px 10px', borderRadius: 999, fontSize: 11, fontWeight: 800, letterSpacing: '0.06em',
          }}>{video.level.toUpperCase()}</span>
          <span style={{
            background: 'var(--green-soft)', color: 'var(--green-deep)',
            padding: '4px 10px', borderRadius: 999, fontSize: 11, fontWeight: 700,
          }}>{video.cat}</span>
        </div>
        <h1 style={{
          margin: 0, fontFamily: "'DM Serif Display', serif",
          fontSize: 30, lineHeight: 1.1, color: 'var(--ink)',
        }}>{video.title}</h1>
        <div style={{ marginTop: 8, color: 'var(--ink-soft)', fontSize: 15, lineHeight: 1.4 }}>
          {video.desc}
        </div>

        <div style={{ marginTop: 18, display: 'flex', gap: 10 }}>
          {[
            { i: Icon.clock(16), v: video.dur, l: 'süre' },
            { i: Icon.flame(16), v: `${video.kcal}`, l: 'kcal' },
            { i: <span style={{fontSize:14}}>🏠</span>, v: 'evde', l: 'ekipman' },
          ].map((s, i) => (
            <div key={i} style={{
              flex: 1, padding: '12px 8px', background: '#fff', borderRadius: 14,
              textAlign: 'center', border: '1px solid var(--line)',
            }}>
              <div style={{ display: 'flex', justifyContent: 'center', color: 'var(--green-deep)' }}>{s.i}</div>
              <div style={{ marginTop: 4, fontSize: 14, fontWeight: 800 }}>{s.v}</div>
              <div style={{ fontSize: 11, color: 'var(--ink-mute)' }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Coach card */}
        <div style={{
          marginTop: 18, padding: 14, background: '#fff', borderRadius: 18,
          display: 'flex', alignItems: 'center', gap: 12, border: '1px solid var(--line)',
        }}>
          <div style={{
            width: 44, height: 44, borderRadius: '50%',
            background: bg(BUGCE_AVATAR),
          }}/>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--ink)' }}>Buğçe Kondakçı</div>
            <div style={{ fontSize: 12, color: 'var(--ink-soft)' }}>Fitness & Wellness Koçu</div>
          </div>
          <button style={{
            background: 'var(--green-soft)', color: 'var(--green-deep)', borderRadius: 999,
            padding: '8px 14px', fontSize: 13, fontWeight: 800,
          }}>Takip et</button>
        </div>

        {/* Hareketler */}
        <div style={{ marginTop: 22 }}>
          <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--ink-soft)', letterSpacing: '0.1em', marginBottom: 10 }}>
            HAREKETLER
          </div>
          {[
            { name: 'Isınma', dur: '2:00', done: true },
            { name: 'Squat varyasyonları', dur: '4:30' },
            { name: 'Plank serisi', dur: '3:00' },
            { name: 'Alt vücut bitiriş', dur: '4:00' },
            { name: 'Esneme & soğuma', dur: '1:54' },
          ].map((m, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px',
              background: '#fff', borderRadius: 14, marginBottom: 8, border: '1px solid var(--line)',
            }}>
              <div style={{
                width: 28, height: 28, borderRadius: '50%',
                background: m.done ? 'var(--green)' : 'var(--cream)',
                color: m.done ? '#fff' : 'var(--ink-mute)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 12, fontWeight: 800,
              }}>{m.done ? Icon.check(14) : i + 1}</div>
              <div style={{ flex: 1, fontWeight: 700, fontSize: 14 }}>{m.name}</div>
              <div style={{ fontSize: 12, color: 'var(--ink-soft)' }}>{m.dur}</div>
            </div>
          ))}
        </div>

        <div style={{ padding: '24px 0 130px' }}>
          <CTA color="sage" icon={Icon.playFill(20)}>
            {started ? 'Devam Et' : "Birlikte başlayalım"}
          </CTA>
        </div>
      </div>
    </ScreenScroll>
  );
}

window.VideosScreen = VideosScreen;
