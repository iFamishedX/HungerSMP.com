import { GlassCard, GlassButton, usePageTitle, Icon, FaqAccordion } from "ifamished-ui"

const ruleSections = [
  {
    q: "Cheating",
    a: (
      <>
        <div className="compare-grid" style={{ marginBottom: "1.5rem" }}>
          {/* Allowed */}
          <GlassCard className="compare-card">
            <div className="compare-card-header">
              <div className="icon-badge" style={{ width: 36, height: 36 }}>
                <Icon name="checkCircle" size={18} strokeWidth={1.75} />
              </div>
              <h3>Allowed</h3>
            </div>
            <ul style={{ paddingLeft: "1.5rem", listStyleType: "disc" }}>
              <li>Fabric client mods that do not give unfair advantages</li>
              <li>Performance mods (Sodium, Lithium, Starlight, etc.)</li>
              <li>Cosmetic mods (emotes, capes, UI tweaks)</li>
            </ul>
          </GlassCard>

          {/* Not Allowed */}
          <GlassCard className="compare-card">
            <div className="compare-card-header">
              <div className="icon-badge" style={{ width: 36, height: 36 }}>
                <Icon name="xCircle" size={18} strokeWidth={1.75} />
              </div>
              <h3>Not Allowed</h3>
            </div>
            <ul style={{ paddingLeft: "1.5rem", listStyleType: "disc" }}>
              <li><strong>Hacked clients:</strong> kill‑aura, fly, speed, x‑ray</li>
              <li><strong>Assistive mods:</strong> Bedrock bridging, auto‑clickers</li>
              <li><strong>Duping clients:</strong> any mod designed to duplicate items</li>
            </ul>
          </GlassCard>
        </div>
      </>
    ),
  },

  {
    q: "Exploits & Glitches",
    a: (
      <>
        <div className="compare-grid" style={{ marginBottom: "1.5rem" }}>
          {/* Allowed */}
          <GlassCard className="compare-card">
            <div className="compare-card-header">
              <div className="icon-badge" style={{ width: 36, height: 36 }}>
                <Icon name="checkCircle" size={18} strokeWidth={1.75} />
              </div>
              <h3>Allowed</h3>
            </div>
            <ul style={{ paddingLeft: "1.5rem", listStyleType: "disc" }}>
              <li>Griefing, stealing, raiding bases</li>
              <li>PvP anywhere, anytime</li>
              <li>Using natural game mechanics creatively</li>
              <li>Exploration, world travel, base hunting</li>
            </ul>
          </GlassCard>

          {/* Not Allowed */}
          <GlassCard className="compare-card">
            <div className="compare-card-header">
              <div className="icon-badge" style={{ width: 36, height: 36 }}>
                <Icon name="xCircle" size={18} strokeWidth={1.75} />
              </div>
              <h3>Not Allowed</h3>
            </div>
            <ul style={{ paddingLeft: "1.5rem", listStyleType: "disc" }}>
              <li><strong>Lag machines:</strong> redstone spam, TNT dupers, chunk‑loaders</li>
              <li><strong>Crash exploits:</strong> anything that intentionally crashes the server</li>
              <li><strong>Chunk corruption:</strong> forcing illegal block states or world corruption</li>
              <li><strong>Game‑breaking bugs:</strong> anything that destroys gameplay for others</li>
            </ul>
          </GlassCard>
        </div>
      </>
    ),
  },

  {
    q: "Enforcement & Bans",
    a: (
      <>
        <div className="compare-grid" style={{ marginBottom: "1.5rem" }}>
          {/* Allowed */}
          <GlassCard className="compare-card">
            <div className="compare-card-header">
              <div className="icon-badge" style={{ width: 36, height: 36 }}>
                <Icon name="checkCircle" size={18} strokeWidth={1.75} />
              </div>
              <h3>What Staff Will Do</h3>
            </div>
            <ul style={{ paddingLeft: "1.5rem", listStyleType: "disc" }}>
              <li>Issue warnings for minor issues</li>
              <li>Apply temporary bans for repeated offenses</li>
              <li>Ban hackers, exploiters, and rule‑breakers</li>
              <li>Review appeals through Discord</li>
            </ul>
          </GlassCard>

          {/* Not Allowed */}
          <GlassCard className="compare-card">
            <div className="compare-card-header">
              <div className="icon-badge" style={{ width: 36, height: 36 }}>
                <Icon name="xCircle" size={18} strokeWidth={1.75} />
              </div>
              <h3>What Staff Will NOT Do</h3>
            </div>
            <ul style={{ paddingLeft: "1.5rem", listStyleType: "disc" }}>
              <li>Interfere with gameplay or PvP</li>
              <li>Give items, bases, or advantages</li>
              <li>Undo griefing or restore bases</li>
              <li>Ban players without evidence</li>
            </ul>
          </GlassCard>
        </div>
      </>
    ),
  },
]

export default function Rules() {
  usePageTitle("HungerSMP | Rules")

  return (
    <div className="page">
      <div className="page-header fade-in-up">
        <h1>Rules</h1>
        <p>Click the dropdowns to view each rule section. These rules apply only to the Minecraft server.</p>
      </div>

      <section className="section">
        <div className="faq-list stagger">
          {ruleSections.map(({ q, a }, i) => (
            <FaqAccordion key={q} q={q} a={a} style={{ "--i": i }} />
          ))}
        </div>
      </section>

      <div className="cta-section fade-in-up">
        <h2>Need more detail?</h2>
        <p>Join the Discord or check the FAQ for edge cases and clarifications.</p>
        <div className="cta-actions">
          <GlassButton href="https://discord.gg/hungernet" variant="primary">
            <Icon name="discord" size={16} />
            Discord
          </GlassButton>
          <GlassButton to="/faq" variant="ghost">
            <Icon name="helpCircle" size={16} />
            FAQ
          </GlassButton>
        </div>
      </div>
    </div>
  )
}
