import { GlassCard, GlassButton, usePageTitle, Icon } from "ifamished-ui"

export default function Rules() {
  usePageTitle("HungerSMP | Rules")

  return (
    <div className="page">
      {/* Header */}
      <div className="page-header fade-in-up">
        <h1>Server Rules</h1>
        <p>The essential guidelines for playing on Hunger SMP.</p>
      </div>

      {/* Core Rules */}
      <section className="section">
        <GlassCard className="fade-in-up">
          <h2>Core Rules</h2>
          <p>
            Hunger SMP is an anarchy-style server with minimal restrictions. However, a few rules are
            required to keep gameplay fair and enjoyable for everyone.
          </p>

          <ul className="rule-list">
            <li>
              <Icon name="shield" size={16} /> <strong>No hacking or cheating</strong> — clients such as
              kill‑aura, fly, x‑ray, duping exploits, or anything that gives an unfair advantage are strictly prohibited.
            </li>
            <li>
              <Icon name="warning" size={16} /> <strong>No game‑breaking exploits</strong> — abusing bugs that
              crash the server, corrupt chunks, or lag the world is not allowed.
            </li>
            <li>
              <Icon name="users" size={16} /> <strong>No harassment or targeted abuse</strong> — PvP, griefing,
              and stealing are allowed, but personal harassment or real‑life threats are not.
            </li>
            <li>
              <Icon name="tool" size={16} /> <strong>No lag machines</strong> — redstone clocks, TNT dupers,
              or contraptions designed to degrade server performance are forbidden.
            </li>
            <li>
              <Icon name="info" size={16} /> <strong>No impersonation</strong> — do not pretend to be staff or
              other players.
            </li>
          </ul>
        </GlassCard>
      </section>

      {/* Gameplay Guidelines */}
      <section className="section">
        <GlassCard className="fade-in-up">
          <h2>Gameplay Guidelines</h2>
          <p>
            These guidelines help maintain the spirit of Hunger SMP’s{" "}
            <strong>Anarchy + Vanilla+</strong> environment.
          </p>

          <ul className="rule-list">
            <li>
              <Icon name="sparkles" size={16} /> <strong>Griefing is allowed</strong> — bases, items, and builds
              may be destroyed or stolen.
            </li>
            <li>
              <Icon name="map" size={16} /> <strong>Exploration is encouraged</strong> — the world is large,
              seasonal, and full of player‑made history.
            </li>
            <li>
              <Icon name="play" size={16} /> <strong>PvP is always enabled</strong> — combat is part of the
              experience.
            </li>
            <li>
              <Icon name="cube" size={16} /> <strong>Vanilla+ mods only</strong> — the server uses a small,
              performance‑focused mod list.
            </li>
            <li>
              <Icon name="checkCircle" size={16} /> <strong>Freedom with responsibility</strong> — you may play
              however you want, as long as you don’t break the core rules.
            </li>
          </ul>
        </GlassCard>
      </section>

      {/* Enforcement */}
      <section className="section">
        <GlassCard className="fade-in-up">
          <h2>Enforcement</h2>
          <p>
            Hunger SMP uses a fair and transparent enforcement system. Staff only intervene when rules are
            broken — never for gameplay advantage.
          </p>

          <ul className="rule-list">
            <li>
              <Icon name="checkCircle" size={16} /> <strong>Warnings</strong> — minor issues may result in a
              warning.
            </li>
            <li>
              <Icon name="xCircle" size={16} /> <strong>Temporary bans</strong> — repeated violations or
              moderate offenses.
            </li>
            <li>
              <Icon name="x" size={16} /> <strong>Permanent bans</strong> — hacking, exploits, or severe
              rule‑breaking.
            </li>
            <li>
              <Icon name="helpCircle" size={16} /> <strong>Appeals</strong> — you may appeal bans through the
              Discord moderation team.
            </li>
          </ul>
        </GlassCard>
      </section>

      {/* CTA */}
      <div className="cta-section fade-in-up">
        <h2>Need clarification?</h2>
        <p>Join the Discord or browse the FAQ for more details.</p>

        <div className="cta-actions">
          <GlassButton href="https://discord.gg/hungernet" variant="primary">
            <Icon name="discord" size={16} />
            Discord
          </GlassButton>

          <GlassButton to="/faq" variant="ghost">
            <Icon name="helpCircle" size={16} />
            FAQ
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
