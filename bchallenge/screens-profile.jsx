// Profile (Profil) — measurements, progress, badges

function MiniChart({ data, color = 'var(--green)', height = 80 }) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const w = 280;
  const points = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = height - ((v - min) / range) * (height - 12) - 6;
    return [x, y];
  });
  const path = points.map((p, i) => (i === 0 ? 'M' : 'L') + p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' ');
  const areaPath = path + ` L${w},${height} L0,${height} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${height}`} width="100%" height={height} preserveAspectRatio="none">
      <defs>
        <linearGradient id="chartG" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.25"/>
          <stop offset="100%" stopColor={color} stopOpacity="0"/>
        </linearGradient>
      </defs>
      <path d={areaPath} fill="url(#chartG)"/>
      <path d={path} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      {points.map((p, i) => (i === points.length - 1) && (
        <g key={i}>
          <circle cx={p[0]} cy={p[1]} r="6" fill="#fff"/>
          <circle cx={p[0]} cy={p[1]} r="4" fill={color}/>
        </g>
      ))}
    </svg>
  );
}

function ProfileScreen({ accent, onNavigate }) {
  const [tab, setTab] = React.useState('goals'); // goals | overview | photos | badges
  const [goal, setGoal] = React.useState(PERSONAL_PLAN.goal);
  const [workoutDays, setWorkoutDays] = React.useState(4);
  const [focus, setFocus] = React.useState(['Tatlı krizi', 'Su takibi']);
  const lostKg = (PROFILE.weightStart - PROFILE.weightNow).toFixed(1);
  const targetGap = (PROFILE.weightNow - PROFILE.weightGoal).toFixed(1);
  const overallPct = Math.round(
    ((PROFILE.weightStart - PROFILE.weightNow) / (PROFILE.weightStart - PROFILE.weightGoal)) * 100
  );

  return (
    <ScreenScroll>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(180deg, var(--green-soft), transparent)',
        padding: '54px 24px 0',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{
            width: 72, height: 72, borderRadius: '50%',
            background: bg(avatar('E', 'pink')),
            border: '3px solid #fff', boxShadow: '0 6px 18px rgba(0,0,0,0.06)',
          }}/>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 26, color: 'var(--ink)', lineHeight: 1.1 }}>
              {PROFILE.name}
            </div>
            <div style={{ fontSize: 13, color: 'var(--ink-soft)', marginTop: 2 }}>
              Topluluğa katıldı: {PROFILE.joined}
            </div>
            <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
              <span style={{
                background: 'var(--green)', color: '#fff', padding: '3px 10px', borderRadius: 999,
                fontSize: 11, fontWeight: 800, display: 'flex', alignItems: 'center', gap: 4,
              }}>🌱 {PROFILE.streak} gün</span>
              <span style={{
                background: 'var(--pink-soft)', color: 'var(--pink-deep)',
                padding: '3px 10px', borderRadius: 999, fontSize: 11, fontWeight: 800,
              }}>4 rozet</span>
            </div>
          </div>
        </div>

        {/* Hero progress */}
        <Card style={{ marginTop: 18, padding: 18, background: '#fff' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--green-deep)', letterSpacing: '0.1em' }}>
                YOLCULUĞUN
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 4 }}>
                <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: 36, color: 'var(--ink)', lineHeight: 1 }}>
                  -{lostKg}
                </span>
                <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink-soft)' }}>kg</span>
              </div>
              <div style={{ fontSize: 13, color: 'var(--ink-soft)', marginTop: 4 }}>
                Hedefe {targetGap} kg kaldı 🌿
              </div>
            </div>
            <div style={{
              width: 76, height: 76, borderRadius: '50%',
              background: `conic-gradient(var(--green) 0% ${overallPct}%, var(--green-soft) ${overallPct}% 100%)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',
            }}>
              <div style={{
                width: 60, height: 60, borderRadius: '50%', background: '#fff',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 18, color: 'var(--green-deep)', lineHeight: 1 }}>
                  {overallPct}%
                </div>
                <div style={{ fontSize: 9, color: 'var(--ink-mute)', fontWeight: 700, marginTop: 2 }}>HEDEF</div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 14 }}>
            <MiniChart data={PROFILE.weightHistory} color="var(--green)" />
          </div>
          <div style={{ marginTop: 6, display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'var(--ink-mute)' }}>
            <span>{PROFILE.weightStart} kg <span style={{ opacity: 0.7 }}>başlangıç</span></span>
            <span><b style={{ color: 'var(--green-deep)' }}>{PROFILE.weightNow} kg</b> bugün</span>
            <span>{PROFILE.weightGoal} kg <span style={{ opacity: 0.7 }}>hedef</span></span>
          </div>
        </Card>
      </div>

      {/* Sub-tabs */}
      <div style={{ padding: '18px 24px 0' }}>
        <div style={{
          display: 'flex', gap: 6, padding: 4,
          background: 'var(--cream)', borderRadius: 999,
        }}>
          {[
            { id: 'goals', label: 'Hedef' },
            { id: 'overview', label: 'Ölçüler' },
            { id: 'photos', label: 'Fotoğraflar' },
            { id: 'badges', label: 'Rozetler' },
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

      {tab === 'goals' && (
        <div style={{ padding: '18px 24px 0', display: 'grid', gap: 14 }}>
          <Card padding={18} style={{ background: 'linear-gradient(135deg, var(--green-soft), #fff)' }}>
            <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--green-deep)', letterSpacing: '0.1em' }}>
              KİŞİSEL HEDEFİN
            </div>
            <div style={{ marginTop: 8, fontFamily: "'DM Serif Display', serif", fontSize: 28, lineHeight: 1.1 }}>
              {goal}
            </div>
            <div style={{ marginTop: 8, fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.4 }}>
              Bu hedefe göre AI koç, spor takvimi, tarif önerileri ve haftalık takip planı güncellenir.
            </div>
          </Card>

          <Card padding={16}>
            <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--ink-soft)', letterSpacing: '0.1em', marginBottom: 10 }}>
              HEDEFİ GÜNCELLE
            </div>
            <div style={{ display: 'flex', gap: 8, overflowX: 'auto', scrollbarWidth: 'none' }}>
              {['Hafif kilo verme + enerji', 'Sıkılaşma', 'Menopoz desteği', 'Daha güçlü hissetme'].map(g => (
                <Pill key={g} active={goal === g} onClick={() => setGoal(g)} color={goal === g ? 'sage' : 'cream'}>
                  {g}
                </Pill>
              ))}
            </div>
          </Card>

          <Card padding={16}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--ink)' }}>Haftalık spor günü</div>
                <div style={{ marginTop: 3, fontSize: 12, color: 'var(--ink-soft)' }}>
                  Gerçekçi olsun, sürdürülebilir olsun.
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <button onClick={() => setWorkoutDays(Math.max(2, workoutDays - 1))} style={{
                  width: 34, height: 34, borderRadius: '50%', background: 'var(--cream)', fontWeight: 900,
                }}>−</button>
                <div style={{ width: 36, textAlign: 'center', fontFamily: "'DM Serif Display', serif", fontSize: 26 }}>
                  {workoutDays}
                </div>
                <button onClick={() => setWorkoutDays(Math.min(6, workoutDays + 1))} style={{
                  width: 34, height: 34, borderRadius: '50%', background: 'var(--green)', color: '#fff', fontWeight: 900,
                }}>+</button>
              </div>
            </div>
          </Card>

          <Card padding={16}>
            <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--ink-soft)', letterSpacing: '0.1em', marginBottom: 10 }}>
              TAKİP ODAKLARI
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['Tatlı krizi', 'Su takibi', 'Uyku', 'Ölçü girişi', 'Adım', 'Protein'].map(item => {
                const active = focus.includes(item);
                return (
                  <button key={item} onClick={() => setFocus(f => active ? f.filter(x => x !== item) : [...f, item])} style={{
                    padding: '9px 13px', borderRadius: 999, fontSize: 13, fontWeight: 800,
                    background: active ? 'var(--pink-deep)' : 'var(--pink-soft)',
                    color: active ? '#fff' : 'var(--pink-deep)',
                  }}>{active ? '✓ ' : ''}{item}</button>
                );
              })}
            </div>
          </Card>

          <Card padding={16} style={{ background: 'linear-gradient(135deg, var(--pink-soft), #fff)' }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--ink)' }}>Yeni plan özeti</div>
            <div style={{ marginTop: 10, display: 'grid', gap: 8 }}>
              <div style={{ fontSize: 13, color: 'var(--ink-soft)', fontWeight: 700 }}>
                {workoutDays} gün spor • 15-25 dk ev programı
              </div>
              <div style={{ fontSize: 13, color: 'var(--ink-soft)', fontWeight: 700 }}>
                Takip: {focus.join(', ')}
              </div>
              <div style={{ fontSize: 13, color: 'var(--green-deep)', fontWeight: 800 }}>
                Buğçe AI Koç bu değişikliklere göre haftanı yeniden kurar.
              </div>
            </div>
          </Card>

          <CTA color="sage" icon={Icon.check(18)} onClick={() => onNavigate && onNavigate('coach')}>
            Hedefimi kaydet ve koça gönder
          </CTA>
        </div>
      )}

      {tab === 'overview' && (
        <div style={{ padding: '18px 24px 0', display: 'grid', gap: 12 }}>
          {PROFILE.measurements.map(m => {
            const diff = (m.start - m.now);
            const pct = Math.min(100, Math.round((diff / (m.start * 0.15)) * 100));
            return (
              <Card key={m.label} padding={16}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--ink)' }}>{m.label}</div>
                    <div style={{ fontSize: 12, color: 'var(--ink-soft)', marginTop: 2 }}>
                      Başlangıç: {m.start} {m.unit}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 24, color: 'var(--green-deep)', lineHeight: 1 }}>
                      -{diff} <span style={{ fontSize: 12, color: 'var(--ink-soft)', fontFamily: 'Nunito' }}>{m.unit}</span>
                    </div>
                    <div style={{ fontSize: 12, color: 'var(--ink-mute)', marginTop: 2 }}>şimdi {m.now} {m.unit}</div>
                  </div>
                </div>
                <div style={{ marginTop: 10, height: 6, background: 'var(--cream)', borderRadius: 999, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${pct}%`, background: 'var(--green)', borderRadius: 999 }}/>
                </div>
              </Card>
            );
          })}

          <button style={{
            background: 'var(--green-soft)', color: 'var(--green-deep)',
            padding: '14px', borderRadius: 18, fontSize: 14, fontWeight: 800,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            border: '2px dashed var(--green)',
          }}>{Icon.plus(16)} Yeni ölçü ekle</button>
        </div>
      )}

      {tab === 'photos' && (
        <div style={{ padding: '18px 24px 0' }}>
          <Card padding={16}>
            <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--ink)' }}>Önce — Sonra</div>
            <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
              {[
                { l: '12 hafta önce', p: 'cream' },
                { l: 'Bugün', p: 'sage' },
              ].map((s, i) => (
                <div key={i} style={{
                  flex: 1, aspectRatio: '3/4', borderRadius: 16, overflow: 'hidden',
                  background: bg(placeholder(s.l.toUpperCase(), s.p, 300, 400)),
                  position: 'relative',
                }}>
                  <div style={{
                    position: 'absolute', bottom: 8, left: 8,
                    background: 'rgba(255,255,255,0.92)', color: 'var(--ink)',
                    padding: '4px 10px', borderRadius: 999, fontSize: 11, fontWeight: 800,
                  }}>{s.l}</div>
                </div>
              ))}
            </div>
            <button style={{
              marginTop: 14, width: '100%', padding: 12,
              background: 'var(--pink-soft)', color: 'var(--pink-deep)',
              borderRadius: 14, fontSize: 13, fontWeight: 800,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            }}>📸 Bugünün fotoğrafını ekle</button>
          </Card>

          <div style={{
            marginTop: 16, fontSize: 13, fontWeight: 800, color: 'var(--ink-soft)', letterSpacing: '0.1em',
          }}>HAFTALIK GALERİ</div>
          <div style={{ marginTop: 10, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
            {['cream','sage','pink','rose','cream','sage'].map((p, i) => (
              <div key={i} style={{
                aspectRatio: '1', borderRadius: 12,
                background: bg(placeholder('H' + (i + 1), p, 200, 200)),
              }}/>
            ))}
          </div>
        </div>
      )}

      {tab === 'badges' && (
        <div style={{ padding: '18px 24px 0' }}>
          <Card style={{ padding: 18, background: 'linear-gradient(135deg, var(--pink-soft), var(--cream))' }}>
            <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--pink-deep)', letterSpacing: '0.1em' }}>
              SIRADAKİ ROZETİN
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 8 }}>
              <div style={{ fontSize: 40 }}>🌸</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 16, fontWeight: 800 }}>60 Gün Klubü</div>
                <div style={{ fontSize: 12, color: 'var(--ink-soft)', marginTop: 2 }}>30 gün daha = sen başardın!</div>
                <div style={{ marginTop: 6, height: 6, background: 'rgba(255,255,255,0.6)', borderRadius: 999, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: '50%', background: 'var(--pink-deep)' }}/>
                </div>
              </div>
            </div>
          </Card>

          <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {PROFILE.badges.map(b => (
              <Card key={b.id} padding={18} style={{
                textAlign: 'center', position: 'relative',
                opacity: b.earned ? 1 : 0.5,
                background: b.earned ? 'linear-gradient(180deg, #fff, var(--green-soft))' : '#fff',
              }}>
                <div style={{ fontSize: 40, filter: b.earned ? 'none' : 'grayscale(0.6)' }}>{b.icon}</div>
                <div style={{ marginTop: 8, fontWeight: 800, fontSize: 14, color: 'var(--ink)' }}>{b.name}</div>
                {b.earned && (
                  <div style={{
                    position: 'absolute', top: 10, right: 10,
                    background: 'var(--green)', color: '#fff',
                    width: 24, height: 24, borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>{Icon.check(14)}</div>
                )}
                {!b.earned && (
                  <div style={{ marginTop: 4, fontSize: 11, color: 'var(--ink-mute)' }}>henüz değil</div>
                )}
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Settings link */}
      <div style={{ padding: '24px 24px 0' }}>
        <button style={{
          width: '100%', padding: 14, background: '#fff', borderRadius: 16,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          border: '1px solid var(--line)',
        }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)' }}>Ayarlar & Topluluğu Davet Et</span>
          {Icon.chevR(18)}
        </button>
      </div>
    </ScreenScroll>
  );
}

window.ProfileScreen = ProfileScreen;
