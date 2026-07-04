import { GlassCard, GlassButton, usePageTitle, Icon, StatPill } from "ifamished-ui"

const stats = [
  { value: "24/7", label: "Uptime" },
  { value: "Season 3", label: "Current Season" },
  { value: "Vanilla+", label: "Gameplay Style" },
  { value: "Active", label: "Community" },
]

const highlights = [
  {
    icon: "users",
    title: "Community Events",
    desc: "Weekly challenges, boss hunts, and seasonal world events.",
  },
  {
    icon: "shield",
    title: "Fair Play",
    desc: "No pay-to-win, no admin abuse, no griefing — just pure SMP.",
  },
  {
    icon: "map",
    title: "Expansive World",
    desc: "Large world border, custom structures, and long-term progression.",
  },
  {
    icon: "sparkles",
    title: "Vanilla+ Enhancements",
    desc: "Light QoL tweaks that keep the game feeling fresh without changing core gameplay.",
  },
]

export default function Home() {
  usePageTitle("HungerSMP")

  return (
    <div className="page">
      {/* Hero */}
      <section className="section">
        <GlassCard variant="hero" className="hero fade-in-up">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            Survival Multiplayer
          </div>

          <h1 className="hero-name">
            <span className="gradient-text">HungerSMP</span>
          </h1>

          <p className="hero-subtitle">
            A long-term, community-driven Vanilla+ SMP with events, progression,
            and a friendly player base.
          </p>

          <div className="hero-actions">
            <GlassButton href="minecraft://hungersmp.com" variant="primary">
              <Icon name="play" size={16} />
              Join Server
            </GlassButton>
            <GlassButton to="/info">
              <Icon name="info" size={16} />
              Info
            </GlassButton>
            <GlassButton to="/faq" variant="ghost">
              <Icon name="helpCircle" size={16} />
              FAQ
            </GlassButton>
          </div>

          <div className="stat-pills">
            {stats.map((s) => (
              <StatPill key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </GlassCard>
      </section>

      {/* Overview */}
      <section className="section">
        <div className="section-header">
          <div className="section-label">Why play?</div>
          <h2>A server built for long-term survival.</h2>
          <p>
            HungerSMP focuses on progression, community, and events — without
            changing the core Minecraft experience.
          </p>
        </div>

        <div className="overview-grid stagger">
          {highlights.map(({ icon, title, desc }, i) => (
            <GlassCard key={title} className="overview-card" style={{ "--i": i }}>
              <div className="icon-badge">
                <Icon name={icon} size={22} strokeWidth={1.75} />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="cta-section fade-in-up">
        <h2>Ready to join?</h2>
        <p>Connect now or read more about the server.</p>
        <div className="cta-actions">
          <GlassButton href="minecraft://hungersmp.com" variant="primary">
            <Icon name="play" size={16} />
            Join Now
          </GlassButton>
          <GlassButton to="/info" variant="ghost">
            <Icon name="info" size={16} />
            Server Info
          </GlassButton>
        </div>
      </div>
    </div>
  )
}
