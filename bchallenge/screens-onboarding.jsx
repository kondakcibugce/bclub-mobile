// Onboarding — personal goal setup before the plan starts

function ChoiceChip({ label, selected, onClick }) {
  return (
    <button onClick={onClick} style={{
      width: '100%', padding: '15px 16px', borderRadius: 18, textAlign: 'left',
      background: selected ? 'var(--green-soft)' : '#fff',
      border: selected ? '2px solid var(--green)' : '1px solid var(--line)',
      color: selected ? 'var(--green-deep)' : 'var(--ink)',
      fontSize: 15, fontWeight: 800,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10,
    }}>
      <span>{label}</span>
      <span style={{
        width: 24, height: 24, borderRadius: '50%',
        background: selected ? 'var(--green)' : 'var(--cream)',
        color: selected ? '#fff' : 'var(--ink-mute)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>{selected ? Icon.check(14) : null}</span>
    </button>
  );
}

function OnboardingScreen({ onNavigate }) {
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState({
    goal: 'Kilo vermek',
    life: ['Evde yoğun'],
    time: '15 dk',
    nutrition: ['Tatlı krizi'],
  });
  const current = ONBOARDING_STEPS[step];
  const isLast = step === ONBOARDING_STEPS.length - 1;

  const selected = (option) => {
    const value = answers[current.id];
    return Array.isArray(value) ? value.includes(option) : value === option;
  };

  const toggle = (option) => {
    setAnswers(prev => {
      const value = prev[current.id];
      if (!current.multi) return { ...prev, [current.id]: option };
      const list = Array.isArray(value) ? value : [];
      return {
        ...prev,
        [current.id]: list.includes(option) ? list.filter(x => x !== option) : [...list, option],
      };
    });
  };

  return (
    <ScreenScroll>
      <div style={{ padding: '54px 24px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button onClick={() => step ? setStep(step - 1) : onNavigate('recipes')} style={{
            width: 42, height: 42, borderRadius: '50%', background: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
          }}>{Icon.chevL(18)}</button>
          <div style={{
            background: 'var(--pink-soft)', color: 'var(--pink-deep)',
            padding: '8px 13px', borderRadius: 999, fontSize: 12, fontWeight: 800,
          }}>Basic başlar • Plan Plus ile açılır</div>
        </div>

        <div style={{ marginTop: 26 }}>
          <div style={{ height: 7, background: 'var(--cream)', borderRadius: 999, overflow: 'hidden' }}>
            <div style={{
              width: `${((step + 1) / ONBOARDING_STEPS.length) * 100}%`,
              height: '100%', background: 'var(--green)', borderRadius: 999,
            }} />
          </div>
          <div style={{ marginTop: 22, fontSize: 12, fontWeight: 800, color: 'var(--green-deep)', letterSpacing: '0.12em' }}>
            {current.overline}
          </div>
          <h1 style={{
            margin: '7px 0 0', fontFamily: "'DM Serif Display', serif", fontSize: 34,
            lineHeight: 1.06, color: 'var(--ink)',
          }}>{current.title}</h1>
          <div style={{ marginTop: 9, fontSize: 15, lineHeight: 1.4, color: 'var(--ink-soft)' }}>
            Sana sürdürülebilir, ev hayatına uyan ve kendini iyi hissettiren bir plan hazırlayalım.
          </div>
        </div>
      </div>

      <div style={{ padding: '24px 24px 0', display: 'grid', gap: 10 }}>
        {current.options.map(option => (
          <ChoiceChip
            key={option}
            label={option}
            selected={selected(option)}
            onClick={() => toggle(option)}
          />
        ))}
      </div>

      <div style={{ padding: '24px 24px 0' }}>
        <Card padding={16} style={{ background: 'linear-gradient(135deg, var(--pink-soft), #fff)' }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <div style={{
              width: 44, height: 44, borderRadius: '50%', background: bg(BUGCE_AVATAR),
              border: '2px solid #fff', flexShrink: 0,
            }} />
            <div>
              <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--ink)' }}>
                Buğçe notu
              </div>
              <div style={{ marginTop: 4, fontSize: 13, lineHeight: 1.4, color: 'var(--ink-soft)' }}>
                Burada mükemmel cevap yok. Sadece senin gerçek hayatına uyan yolu buluyoruz.
              </div>
            </div>
          </div>
        </Card>
      </div>

      {isLast && (
        <div style={{ padding: '18px 24px 0' }}>
          <Card padding={18} style={{ background: 'linear-gradient(180deg, #fff, var(--green-soft))' }}>
            <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--green-deep)', letterSpacing: '0.1em' }}>
              ÖN PLANIN HAZIR
            </div>
            <div style={{ marginTop: 8, fontFamily: "'DM Serif Display', serif", fontSize: 25, lineHeight: 1.1 }}>
              {PERSONAL_PLAN.duration}
            </div>
            <div style={{ marginTop: 12, display: 'grid', gap: 8 }}>
              {[PERSONAL_PLAN.workout, PERSONAL_PLAN.nutrition, ...PERSONAL_PLAN.habits.slice(0, 2)].map((item) => (
                <div key={item} style={{ display: 'flex', gap: 8, fontSize: 13, color: 'var(--ink-soft)', fontWeight: 700 }}>
                  <span style={{ color: 'var(--green-deep)' }}>{Icon.check(15)}</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

      <div style={{ padding: '24px 24px 130px' }}>
        <CTA
          color={isLast ? 'pink' : 'sage'}
          icon={isLast ? Icon.sparkFill(20) : Icon.chevR(18)}
          onClick={() => isLast ? onNavigate('plus') : setStep(step + 1)}
        >
          {isLast ? 'Kişisel planı Plus ile aç' : 'Devam et'}
        </CTA>
      </div>
    </ScreenScroll>
  );
}

window.OnboardingScreen = OnboardingScreen;
