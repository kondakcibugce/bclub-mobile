// Recipes (Tarifler) — list + ingredient filter + detail

function RecipesScreen({ accent, accentDeep }) {
  const [filter, setFilter] = React.useState(new Set()); // ingredients selected
  const [activeTag, setActiveTag] = React.useState('Tümü');
  const [openId, setOpenId] = React.useState(null);
  const [showFilter, setShowFilter] = React.useState(false);
  const [search, setSearch] = React.useState('');

  const tags = ['Tümü', 'kahvaltı', 'öğle', 'ana yemek', 'çorba', 'atıştırmalık', 'tatlı', 'vegan'];

  const filtered = RECIPES.filter(r => {
    if (search && !r.name.toLowerCase().includes(search.toLowerCase())) return false;
    if (activeTag !== 'Tümü' && !r.tags.includes(activeTag)) return false;
    if (filter.size > 0) {
      // Recipe matches if all its required ingredients are in the user's pantry (filter)
      // But we want a "what can I make with these?" feel — show recipes whose ingredients
      // are mostly satisfied by the user's selection
      const matchCount = r.ingredients.filter(i => filter.has(i)).length;
      if (matchCount === 0) return false;
      // attach a quality score on the fly
      r._matchPct = Math.round((matchCount / r.ingredients.length) * 100);
    } else {
      r._matchPct = null;
    }
    return true;
  });

  const sorted = filter.size > 0
    ? [...filtered].sort((a, b) => (b._matchPct || 0) - (a._matchPct || 0))
    : filtered;

  const toggleIng = (ing) => {
    setFilter(f => {
      const n = new Set(f);
      n.has(ing) ? n.delete(ing) : n.add(ing);
      return n;
    });
  };

  const openRecipe = RECIPES.find(r => r.id === openId);

  if (openRecipe) {
    return <RecipeDetail recipe={openRecipe} onBack={() => setOpenId(null)} />;
  }

  return (
    <ScreenScroll>
      <ScreenHeader
        overline="TARİFLER"
        title="Bugün ne pişirsek?"
        sub="Elindekilerden başla, tarif gelsin 🌿"
      />

      {/* Search + filter button */}
      <div style={{ padding: '0 24px', display: 'flex', gap: 8, marginBottom: 14 }}>
        <div style={{
          flex: 1, background: '#fff', borderRadius: 18, padding: '12px 16px',
          display: 'flex', alignItems: 'center', gap: 10, border: '1px solid var(--line)',
        }}>
          <span style={{ color: 'var(--ink-mute)' }}>{Icon.search(18)}</span>
          <input
            value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Tarif ara…"
            style={{
              flex: 1, border: 'none', outline: 'none', background: 'transparent',
              fontSize: 15, fontFamily: 'inherit',
            }}
          />
        </div>
        <button onClick={() => setShowFilter(v => !v)} style={{
          width: 50, height: 50, borderRadius: 16,
          background: filter.size > 0 ? 'var(--green)' : '#fff',
          color: filter.size > 0 ? '#fff' : 'var(--ink-soft)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: '1px solid var(--line)', position: 'relative',
        }}>
          {Icon.filter(20)}
          {filter.size > 0 && (
            <div style={{
              position: 'absolute', top: -4, right: -4, width: 20, height: 20, borderRadius: '50%',
              background: 'var(--pink-deep)', color: '#fff', fontSize: 11, fontWeight: 800,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: '2px solid var(--paper)',
            }}>{filter.size}</div>
          )}
        </button>
      </div>

      {/* Ingredient filter sheet */}
      {showFilter && (
        <div style={{ padding: '0 24px 16px' }}>
          <Card style={{ padding: 16, background: 'linear-gradient(180deg, var(--green-soft), #fff)' }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--green-deep)', marginBottom: 4 }}>
              Buzdolabında ne var? 🥬
            </div>
            <div style={{ fontSize: 13, color: 'var(--ink-soft)', marginBottom: 12 }}>
              Malzemelerini seç, sana uygun tarifleri sıralayalım.
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {ALL_INGREDIENTS.map(ing => (
                <button key={ing} onClick={() => toggleIng(ing)} style={{
                  padding: '8px 14px', borderRadius: 999, fontSize: 13, fontWeight: 600,
                  background: filter.has(ing) ? 'var(--green)' : '#fff',
                  color: filter.has(ing) ? '#fff' : 'var(--ink-soft)',
                  border: filter.has(ing) ? 'none' : '1px solid var(--line)',
                  display: 'flex', alignItems: 'center', gap: 4,
                }}>
                  {filter.has(ing) && <span style={{ fontSize: 12 }}>✓</span>} {ing}
                </button>
              ))}
            </div>
            {filter.size > 0 && (
              <button onClick={() => setFilter(new Set())} style={{
                marginTop: 12, fontSize: 13, fontWeight: 700, color: 'var(--ink-soft)',
                textDecoration: 'underline',
              }}>Temizle</button>
            )}
          </Card>
        </div>
      )}

      {/* Tag chips */}
      <div style={{ display: 'flex', gap: 8, padding: '0 24px', overflowX: 'auto', scrollbarWidth: 'none', marginBottom: 16 }}>
        {tags.map(t => (
          <Pill key={t} active={activeTag === t} onClick={() => setActiveTag(t)} color="sage">
            {t}
          </Pill>
        ))}
      </div>

      {/* Result count when filtering */}
      {filter.size > 0 && (
        <div style={{ padding: '0 24px 12px', fontSize: 13, color: 'var(--green-deep)', fontWeight: 700 }}>
          ✨ {sorted.length} tarif elinizdeki malzemelerle yapılabilir
        </div>
      )}

      {/* Recipe cards */}
      <div style={{ padding: '0 24px', display: 'grid', gap: 14 }}>
        {sorted.map(r => (
          <button key={r.id} onClick={() => setOpenId(r.id)} style={{
            background: '#fff', borderRadius: 22, overflow: 'hidden',
            border: '1px solid var(--line)', textAlign: 'left',
            boxShadow: '0 1px 2px rgba(0,0,0,0.03), 0 6px 20px rgba(45,42,38,0.04)',
          }}>
            <div style={{
              height: 160, position: 'relative',
              background: bg(placeholder(r.name.toUpperCase(), r.palette, 600, 320)),
            }}>
              {r._matchPct && (
                <div style={{
                  position: 'absolute', top: 12, left: 12,
                  background: 'rgba(110,127,96,0.95)', color: '#fff',
                  padding: '6px 12px', borderRadius: 999, fontSize: 12, fontWeight: 800,
                  backdropFilter: 'blur(4px)',
                }}>
                  ✓ {r._matchPct}% malzemen var
                </div>
              )}
              <div style={{
                position: 'absolute', top: 12, right: 12,
                width: 36, height: 36, borderRadius: '50%',
                background: 'rgba(255,255,255,0.92)', color: 'var(--pink-deep)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>{Icon.heart(18)}</div>
              <div style={{
                position: 'absolute', bottom: 12, right: 12,
                background: 'rgba(255,255,255,0.92)', color: 'var(--ink)',
                padding: '6px 12px', borderRadius: 999, fontSize: 12, fontWeight: 700,
                display: 'flex', alignItems: 'center', gap: 6,
              }}>
                {Icon.clock(13)} {r.time} dk
              </div>
            </div>
            <div style={{ padding: 16 }}>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 21, lineHeight: 1.15, color: 'var(--ink)' }}>
                {r.name}
              </div>
              <div style={{ marginTop: 6, fontSize: 14, color: 'var(--ink-soft)' }}>
                {r.desc}
              </div>
              <div style={{ marginTop: 12, display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                <span style={{
                  background: 'var(--pink-soft)', color: 'var(--pink-deep)',
                  padding: '4px 10px', borderRadius: 999, fontSize: 11, fontWeight: 800,
                  display: 'flex', alignItems: 'center', gap: 4,
                }}>{Icon.flame(12)} {r.kcal} kcal</span>
                {r.tags.slice(0, 2).map(t => (
                  <span key={t} style={{
                    background: 'var(--green-soft)', color: 'var(--green-deep)',
                    padding: '4px 10px', borderRadius: 999, fontSize: 11, fontWeight: 700,
                  }}>#{t}</span>
                ))}
              </div>
            </div>
          </button>
        ))}
        {sorted.length === 0 && (
          <Card style={{ textAlign: 'center', padding: 32 }}>
            <div style={{ fontSize: 32 }}>🌱</div>
            <div style={{ marginTop: 8, fontWeight: 800 }}>Hiç tarif bulamadık</div>
            <div style={{ marginTop: 4, fontSize: 13, color: 'var(--ink-soft)' }}>
              Birkaç malzeme daha eklemeyi dene.
            </div>
          </Card>
        )}
      </div>
    </ScreenScroll>
  );
}

function RecipeDetail({ recipe, onBack }) {
  const [step, setStep] = React.useState(0);
  const [saved, setSaved] = React.useState(false);
  const steps = [
    `Tüm malzemeleri hazırla — ${recipe.ingredients.slice(0, 3).join(', ')} göz önünde olsun.`,
    'Bir kâseye toplam malzemeleri sırayla ekle, nazikçe karıştır.',
    'Lezzetlendir: tuz, baharat veya bal — hangisi daha keyifliyse 🌿',
    'Sun, fotoğrafla, paylaş! Topluluk seni görmek istiyor 💚',
  ];
  return (
    <ScreenScroll>
      <div style={{
        height: 320, position: 'relative',
        background: bg(placeholder(recipe.name.toUpperCase(), recipe.palette, 800, 600)),
      }}>
        <div style={{
          position: 'absolute', top: 54, left: 16, right: 16,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <button onClick={onBack} style={{
            width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.92)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backdropFilter: 'blur(8px)',
          }}>{Icon.chevL(18)}</button>
          <button onClick={() => setSaved(s => !s)} style={{
            width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.92)',
            color: saved ? 'var(--pink-deep)' : 'var(--ink-soft)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backdropFilter: 'blur(8px)',
          }}>{Icon.heart(20, saved)}</button>
        </div>
      </div>

      <div style={{
        background: 'var(--paper)', borderTopLeftRadius: 28, borderTopRightRadius: 28,
        marginTop: -28, padding: '26px 24px 0', position: 'relative',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          {recipe.tags.map(t => (
            <span key={t} style={{
              background: 'var(--green-soft)', color: 'var(--green-deep)',
              padding: '4px 10px', borderRadius: 999, fontSize: 11, fontWeight: 700,
            }}>#{t}</span>
          ))}
        </div>
        <h1 style={{
          margin: 0, fontFamily: "'DM Serif Display', serif",
          fontSize: 30, lineHeight: 1.1, color: 'var(--ink)',
        }}>{recipe.name}</h1>
        <div style={{ marginTop: 8, color: 'var(--ink-soft)', fontSize: 15, lineHeight: 1.4 }}>
          {recipe.desc}
        </div>

        <div style={{ marginTop: 18, display: 'flex', gap: 10 }}>
          {[
            { icon: Icon.clock(16), v: `${recipe.time} dk`, l: 'süre' },
            { icon: Icon.flame(16), v: `${recipe.kcal}`, l: 'kcal' },
            { icon: Icon.signal(16), v: recipe.difficulty, l: 'zorluk' },
          ].map((s, i) => (
            <div key={i} style={{
              flex: 1, padding: '12px 8px', background: '#fff', borderRadius: 14,
              textAlign: 'center', border: '1px solid var(--line)',
            }}>
              <div style={{ display: 'flex', justifyContent: 'center', color: 'var(--green-deep)' }}>{s.icon}</div>
              <div style={{ marginTop: 4, fontSize: 14, fontWeight: 800 }}>{s.v}</div>
              <div style={{ fontSize: 11, color: 'var(--ink-mute)' }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Ingredients */}
        <div style={{ marginTop: 22 }}>
          <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--ink-soft)', letterSpacing: '0.1em', marginBottom: 10 }}>
            MALZEMELER
          </div>
          <div style={{ display: 'grid', gap: 8 }}>
            {recipe.ingredients.map((ing, i) => (
              <div key={ing} style={{
                display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px',
                background: '#fff', borderRadius: 12, border: '1px solid var(--line)',
              }}>
                <div style={{
                  width: 24, height: 24, borderRadius: '50%', background: 'var(--green-soft)',
                  color: 'var(--green-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 12, fontWeight: 800,
                }}>{i + 1}</div>
                <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--ink)' }}>{ing}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div style={{ marginTop: 22 }}>
          <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--ink-soft)', letterSpacing: '0.1em', marginBottom: 10 }}>
            ADIMLAR
          </div>
          {steps.map((s, i) => (
            <div key={i} onClick={() => setStep(i)} style={{
              display: 'flex', gap: 12, padding: '14px', borderRadius: 14, cursor: 'pointer',
              marginBottom: 8,
              background: step === i ? 'var(--pink-soft)' : 'transparent',
              border: step === i ? '1px solid var(--pink-deep)' : '1px solid var(--line)',
            }}>
              <div style={{
                width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
                background: step >= i ? 'var(--pink-deep)' : '#fff',
                color: step >= i ? '#fff' : 'var(--ink-mute)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 13, fontWeight: 800, border: '1px solid var(--line)',
              }}>{i + 1}</div>
              <div style={{ flex: 1, fontSize: 15, lineHeight: 1.4, color: 'var(--ink)', paddingTop: 6 }}>
                {s}
              </div>
            </div>
          ))}
        </div>

        <div style={{ padding: '24px 0 130px' }}>
          <CTA color="sage" icon={<span>🌿</span>}>Tarifi başlat</CTA>
        </div>
      </div>
    </ScreenScroll>
  );
}

window.RecipesScreen = RecipesScreen;
