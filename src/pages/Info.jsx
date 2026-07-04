import { GlassCard, usePageTitle } from "ifamished-ui"

export default function Info() {
  usePageTitle("HungerSMP | Info")

  return (
    <div className="page">
      <div className="page-header fade-in-up">
        <h1>Server Info</h1>
        <p>Everything you need to know before joining HungerSMP.</p>
      </div>

      <section className="section">
        <GlassCard className="fade-in-up">
          <h2>Server Details</h2>
          <ul>
            <li><strong>IP:</strong> hungersmp.com</li>
            <li><strong>Version:</strong> 1.XX</li>
            <li><strong>Region:</strong> US Central</li>
            <li><strong>Whitelist:</strong> No</li>
            <li><strong>Playstyle:</strong> Vanilla+</li>
          </ul>
        </GlassCard>
      </section>

      <section className="section">
        <GlassCard className="fade-in-up">
          <h2>Rules</h2>
          <ul>
            <li>No griefing or stealing.</li>
            <li>No hacked clients or exploits.</li>
            <li>Respect other players.</li>
            <li>No lag machines or intentional server harm.</li>
          </ul>
        </GlassCard>
      </section>

      <section className="section">
        <GlassCard className="fade-in-up">
          <h2>Gameplay</h2>
          <p>
            HungerSMP is a long-term survival world with light QoL enhancements,
            community events, and seasonal progression. No pay-to-win, no admin
            abuse — just pure SMP.
          </p>
        </GlassCard>
      </section>
    </div>
  )
}
