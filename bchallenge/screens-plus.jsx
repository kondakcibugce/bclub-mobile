// Plus paywall — only Recipes stay available for Basic users

function PlusScreen({ onNavigate, onUpgrade, requested = 'Plus özellik' }) {
  return (
    <ScreenScroll>
      <div style={{ padding: '54px 24px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button onClick={() => onNavigate('recipes')} style={{
            width: 42, height: 42, borderRadius: '50%', background: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
          }}>{Icon.chevL(18)}</button>
          <div style={{
            background: 'var(--green-soft)', color: 'var(--green-deep)',
            padding: '8px 13px', borderRadius: 999, fontSize: 12, fontWeight: 800,
          }}>Basic üyelik: Tarifler açık</div>
        </div>
      </div>

      <div style={{ padding: '30px 24px 0' }}>
        <div style={{
          minHeight: 230, borderRadius: 30, padding: 22,
          background: 'linear-gradient(135deg, var(--green-soft), var(--pink-soft))',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', right: -34, top: -34, width: 130, height: 130,
            borderRadius: '50%', background: 'rgba(255,255,255,0.35)',
          }} />
          <div style={{
            width: 62, height: 62, borderRadius: '50%', background: bg(BUGCE_AVATAR),
            border: '3px solid #fff', boxShadow: '0 8px 22px rgba(138,154,124,0.25)',
          }} />
          <div style={{ marginTop: 18, fontSize: 12, fontWeight: 800, color: 'var(--green-deep)', letterSpacing: '0.12em' }}>
            BUĞÇE CHALLENGE PLUS
          </div>
          <h1 style={{
            margin: '8px 0 0', fontFamily: "'DM Serif Display', serif", fontSize: 36,
            lineHeight: 1.02, color: 'var(--ink)',
          }}>Kişisel planın burada açılır</h1>
          <div style={{ marginTop: 10, fontSize: 15, lineHeight: 1.42, color: 'var(--ink-soft)' }}>
            {requested} için Plus gerekir. Basic üyelikte tariflere ücretsiz devam edebilirsin.
          </div>
        </div>
      </div>

      <div style={{ padding: '22px 24px 0', display: 'grid', gap: 10 }}>
        {PLUS_FEATURES.map((feature) => (
          <Card key={feature} padding={14}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 32, height: 32, borderRadius: '50%', background: 'var(--green-soft)',
                color: 'var(--green-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>{Icon.check(15)}</div>
              <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--ink)' }}>{feature}</div>
            </div>
          </Card>
        ))}
      </div>

      <div style={{ padding: '22px 24px 0' }}>
        <Card padding={16} style={{ background: '#fff' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--ink)' }}>Aylık Plus</div>
              <div style={{ marginTop: 3, fontSize: 12, color: 'var(--ink-soft)' }}>AI koç, spor, takip ve topluluk</div>
            </div>
            <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 28, color: 'var(--green-deep)' }}>₺199</div>
          </div>
        </Card>
      </div>

      <div style={{ padding: '18px 24px 130px', display: 'grid', gap: 10 }}>
        <CTA color="sage" icon={Icon.sparkFill(20)} onClick={onUpgrade}>Plus'a geç ve aç</CTA>
        <button onClick={() => onNavigate('recipes')} style={{
          padding: 14, borderRadius: 999, background: 'var(--cream)', color: 'var(--ink-soft)',
          fontSize: 14, fontWeight: 800,
        }}>Şimdilik tariflere devam et</button>
      </div>
    </ScreenScroll>
  );
}

window.PlusScreen = PlusScreen;
