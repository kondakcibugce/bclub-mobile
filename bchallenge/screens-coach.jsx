// AI Koç chat screen — chat interface + nutrition + workout program

function MacroBar({ label, pct, color }) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--ink-soft)', marginBottom: 4 }}>
        <span style={{ fontWeight: 700 }}>{label}</span>
        <span>{pct}%</span>
      </div>
      <div style={{ height: 8, borderRadius: 8, background: '#f0e8d8', overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${pct}%`, background: color, borderRadius: 8 }} />
      </div>
    </div>);

}

function CoachScreen({ accent, accentDeep }) {
  const [tab, setTab] = React.useState('chat'); // 'chat' | 'nutrition' | 'workout'
  const [chat, setChat] = React.useState(CHAT_HISTORY);
  const [draft, setDraft] = React.useState('');
  const [typing, setTyping] = React.useState(false);
  const scrollRef = React.useRef(null);

  React.useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [chat, typing]);

  const send = () => {
    if (!draft.trim()) return;
    const text = draft.trim();
    setChat((c) => [...c, { from: 'u', text }]);
    setDraft('');
    setTyping(true);
    // Auto reply
    setTimeout(() => {
      const replies = [
      'Çok güzel söyledin canım 💚 Birlikte adım adım gidiyoruz, panik yok.',
      'Hadi bunu beraber halledelim. Sana özel kısa bir öneri çıkartıyorum… 🌿',
      'Kendine bu kadar yüklenme. Dünden iyi olan her şey kazanç.',
      'Anladım. O zaman bugün için planı şöyle güncelleyelim: hafif öğle, akşam protein ağırlıklı.'];

      const r = replies[Math.floor(Math.random() * replies.length)];
      setChat((c) => [...c, { from: 'b', text: r }]);
      setTyping(false);
    }, 1100);
  };

  const quickPrompts = [
  'Bugün canım tatlı çekiyor 🍫',
  'Yarın akşam yemeğim ne olsun?',
  'Bu haftaki hedefim ne?',
  'Spora gücüm yok bugün'];


  return (
    <ScreenScroll padBottom={tab === 'chat' ? 0 : 110}>
      {/* Header */}
      <div style={{ padding: '54px 20px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 56, height: 56, borderRadius: '50%',
            background: bg(BUGCE_AVATAR),
            border: '3px solid #fff', boxShadow: '0 4px 12px rgba(138,154,124,0.3)',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute', bottom: 0, right: 0,
              width: 14, height: 14, borderRadius: '50%',
              background: '#5dba6e', border: '2.5px solid #fff'
            }} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 22, color: 'var(--ink)' }}>Buğçe</div>
              {Icon.sparkFill(16)}
            </div>
            <div style={{ fontSize: 12, color: 'var(--green-deep)', fontWeight: 700 }}>Koç • Şu an seninle 💚</div>
          </div>
        </div>
        {/* Sub-tabs */}
        <div style={{
          display: 'flex', gap: 6, marginTop: 16, padding: 4,
          background: 'var(--cream)', borderRadius: 999
        }}>
          {[
          { id: 'chat', label: 'Sohbet' },
          { id: 'nutrition', label: 'Beslenme' },
          { id: 'workout', label: 'Spor Planı' }].
          map((t) =>
          <button key={t.id} onClick={() => setTab(t.id)} style={{
            flex: 1, padding: '10px 8px', borderRadius: 999, fontSize: 13, fontWeight: 700,
            background: tab === t.id ? '#fff' : 'transparent',
            color: tab === t.id ? 'var(--green-deep)' : 'var(--ink-soft)',
            boxShadow: tab === t.id ? '0 2px 6px rgba(0,0,0,0.06)' : 'none'
          }}>{t.label}</button>
          )}
        </div>
      </div>

      {tab === 'chat' &&
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 200px)' }}>
          <div ref={scrollRef} style={{ flex: 1, padding: '20px 16px 16px', overflowY: 'auto' }}>
            {chat.map((m, i) =>
          <div key={i} style={{
            display: 'flex', justifyContent: m.from === 'u' ? 'flex-end' : 'flex-start',
            marginBottom: 10, gap: 8
          }}>
                {m.from === 'b' &&
            <div style={{
              width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
              background: bg(BUGCE_AVATAR), alignSelf: 'flex-end'
            }} />
            }
                <div style={{
              maxWidth: '78%', padding: '12px 16px', borderRadius: 22,
              background: m.from === 'u' ? 'var(--green)' : 'var(--pink-soft)',
              color: m.from === 'u' ? '#fff' : 'var(--ink)',
              fontSize: 15, lineHeight: 1.4,
              borderBottomRightRadius: m.from === 'u' ? 6 : 22,
              borderBottomLeftRadius: m.from === 'b' ? 6 : 22,
              fontWeight: 500
            }}
            dangerouslySetInnerHTML={{ __html: m.text.replace(/\*\*(.+?)\*\*/g, '<b>$1</b>') }} />
            
              </div>
          )}
            {typing &&
          <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
                <div style={{
              width: 28, height: 28, borderRadius: '50%',
              background: bg(BUGCE_AVATAR), alignSelf: 'flex-end'
            }} />
                <div style={{
              padding: '14px 18px', borderRadius: 22, borderBottomLeftRadius: 6,
              background: 'var(--pink-soft)', display: 'flex', gap: 4
            }}>
                  {[0, 1, 2].map((i) =>
              <div key={i} style={{
                width: 7, height: 7, borderRadius: '50%', background: 'var(--pink-deep)',
                animation: `bounce 1.2s ${i * 0.15}s infinite`
              }} />
              )}
                </div>
              </div>
          }
          </div>
          {/* Quick prompts */}
          <div style={{ padding: '0 16px 8px', display: 'flex', gap: 8, overflowX: 'auto', scrollbarWidth: 'none' }}>
            {quickPrompts.map((q, i) =>
          <button key={i} onClick={() => setDraft(q)} style={{
            background: '#fff', border: '1px solid var(--line)', borderRadius: 999,
            padding: '8px 14px', fontSize: 12, fontWeight: 600, color: 'var(--ink-soft)',
            whiteSpace: 'nowrap', flexShrink: 0
          }}>{q}</button>
          )}
          </div>
          {/* Composer */}
          <div style={{ padding: '8px 16px 100px', display: 'flex', gap: 8, alignItems: 'flex-end' }}>
            <div style={{
            flex: 1, background: '#fff', borderRadius: 22, padding: '12px 16px',
            border: '1px solid var(--line)', display: 'flex', alignItems: 'center', gap: 8
          }}>
              <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
              placeholder="Buğçe'ye bir şey sor…"
              style={{
                flex: 1, border: 'none', outline: 'none', background: 'transparent',
                fontSize: 15, fontFamily: 'inherit', color: 'var(--ink)'
              }} />
            
            </div>
            <button onClick={send} style={{
            width: 48, height: 48, borderRadius: '50%', background: 'var(--green)',
            color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 6px 14px rgba(138,154,124,0.4)'
          }}>{Icon.send(20)}</button>
          </div>
        </div>
      }

      {tab === 'nutrition' &&
      <div style={{ padding: '16px 20px 0' }}>
          {/* Plan summary */}
          <Card style={{ background: 'linear-gradient(180deg, #fff, var(--green-soft))', padding: 18 }}>
            <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.1em', color: 'var(--green-deep)' }}>
              KİŞİSEL BESLENME PLANI
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 6 }}>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 36, color: 'var(--ink)', lineHeight: 1 }}>
                1.620
              </div>
              <div style={{ fontSize: 13, color: 'var(--ink-soft)', fontWeight: 600 }}>kcal/gün hedef</div>
            </div>
            <div style={{ fontSize: 13, color: 'var(--ink-soft)', marginTop: 4 }}>
              Hedef: <b style={{ color: 'var(--ink)' }}>{COACH_PLAN.nutrition.target}</b>
            </div>
            <div style={{ marginTop: 16, display: 'grid', gap: 10 }}>
              <MacroBar label="Karbonhidrat" pct={45} color="var(--green)" />
              <MacroBar label="Protein" pct={30} color="var(--pink-deep)" />
              <MacroBar label="Yağ" pct={25} color="#d9c8a9" />
            </div>
          </Card>

          {/* Today's meals */}
          <div style={{ marginTop: 24, fontSize: 13, fontWeight: 800, color: 'var(--ink-soft)', letterSpacing: '0.1em' }}>
            BUGÜNÜN ÖĞÜNLERİ
          </div>
          <div style={{ marginTop: 10, display: 'grid', gap: 10 }}>
            {COACH_PLAN.nutrition.today.map((m, i) =>
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 12, padding: 14,
            background: '#fff', borderRadius: 16,
            border: '1px solid var(--line)',
            opacity: m.done ? 0.6 : 1
          }}>
                <div style={{
              width: 28, height: 28, borderRadius: '50%',
              background: m.done ? 'var(--green)' : 'var(--cream)',
              color: m.done ? '#fff' : 'var(--ink-mute)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
            }}>{m.done ? Icon.check(16) : <span style={{ fontSize: 12 }}>{i + 1}</span>}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--green-deep)', letterSpacing: '0.06em' }}>
                    {m.meal.toUpperCase()}
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)',
                textDecoration: m.done ? 'line-through' : 'none' }}>{m.name}</div>
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink-soft)' }}>{m.kcal} kcal</div>
              </div>
          )}
          </div>
        </div>
      }

      {tab === 'workout' &&
      <div style={{ padding: '16px 20px 0' }}>
          {/* Week overview */}
          <Card style={{ background: 'linear-gradient(180deg, #fff, var(--pink-soft))', padding: 18 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.1em', color: 'var(--pink-deep)' }}>
                  HAFTALIK SPOR PROGRAMI
                </div>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 28, marginTop: 4 }}>
                  3 / 7 <span style={{ fontSize: 16, color: 'var(--ink-soft)', fontFamily: 'Nunito' }}>tamamlandı</span>
                </div>
              </div>
              <div style={{
              width: 56, height: 56, borderRadius: '50%',
              background: 'conic-gradient(var(--pink-deep) 0% 43%, #f0e0d8 43% 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
                <div style={{
                width: 44, height: 44, borderRadius: '50%', background: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 13, fontWeight: 800, color: 'var(--pink-deep)'
              }}>43%</div>
              </div>
            </div>
          </Card>

          <div style={{ marginTop: 22, display: 'grid', gap: 10 }}>
            {COACH_PLAN.workout.week.map((d, i) =>
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 14, padding: 14,
            background: d.today ? 'linear-gradient(135deg, var(--green-soft), #fff)' : '#fff',
            borderRadius: 16,
            border: d.today ? '2px solid var(--green)' : '1px solid var(--line)',
            opacity: d.rest ? 0.7 : 1
          }}>
                <div style={{
              width: 44, height: 44, borderRadius: 14,
              background: d.done ? 'var(--green)' : d.today ? '#fff' : 'var(--cream)',
              color: d.done ? '#fff' : d.today ? 'var(--green-deep)' : 'var(--ink-soft)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              fontSize: 11, fontWeight: 800, flexShrink: 0
            }}>
                  <span style={{ fontSize: 10, opacity: 0.8 }}>{d.day}</span>
                  {d.done && Icon.check(14)}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 15, fontWeight: 800, color: 'var(--ink)' }}>{d.label}</div>
                  <div style={{ fontSize: 12, color: 'var(--ink-soft)' }}>
                    {d.rest ? 'Bedeninle çayını iç ☕' : `${d.dur} dk · ${d.today ? 'Bugün — yapalım hadi!' : 'Plan'}`}
                  </div>
                </div>
                {d.today &&
            <button style={{
              background: 'var(--green)', color: '#fff', borderRadius: 999,
              padding: '8px 14px', fontSize: 13, fontWeight: 800
            }}>Başla</button>
            }
              </div>
          )}
          </div>
        </div>
      }
    </ScreenScroll>);

}

window.CoachScreen = CoachScreen;
