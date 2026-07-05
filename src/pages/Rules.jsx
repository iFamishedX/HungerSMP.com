import { GlassButton, usePageTitle, Icon, FaqAccordion } from "ifamished-ui"

const ruleSections = [
  {
    q: "Core Rules",
    a: (
      <>
        <p>These are the non‑negotiable rules for playing on Hunger SMP.</p>
        <ul>
          <li>
            <strong>No hacking or cheating:</strong> no kill‑aura, fly, x‑ray, duping clients, or unfair mods.
          </li>
          <li>
            <strong>No game‑breaking exploits:</strong> don’t crash the server, corrupt chunks, or intentionally lag the world.
          </li>
          <li>
            <strong>No harassment or real‑life threats:</strong> in‑game PvP and griefing are fine, personal harassment is not.
          </li>
          <li>
            <strong>No lag machines:</strong> avoid redstone spam, TNT dupers, or anything designed to hurt performance.
          </li>
          <li>
            <strong>No impersonation:</strong> don’t pretend to be staff or other players.
          </li>
        </ul>
      </>
    ),
  },
  {
    q: "Gameplay Guidelines",
    a: (
      <>
        <p>Hunger SMP is Anarchy + Vanilla+, with freedom and responsibility.</p>
        <ul>
          <li>
            <strong>Griefing is allowed:</strong> bases, items, and builds can be destroyed or stolen.
          </li>
          <li>
            <strong>PvP is always on:</strong> combat is part of the experience everywhere.
          </li>
          <li>
            <strong>Exploration is encouraged:</strong> the world is large, seasonal, and player‑driven.
          </li>
          <li>
            <strong>Vanilla+ mods only:</strong> small, performance‑focused mod list — no crazy custom gameplay.
          </li>
          <li>
            <strong>Freedom with boundaries:</strong> play how you want, as long as you don’t break core rules.
          </li>
        </ul>
      </>
    ),
  },
  {
    q: "Enforcement & Bans",
    a: (
      <>
        <p>How rules are enforced and what happens when they’re broken.</p>
        <ul>
          <li>
            <strong>Warnings:</strong> minor issues may get a verbal or written warning.
          </li>
          <li>
            <strong>Temporary bans:</strong> repeated or moderate offenses.
          </li>
          <li>
            <strong>Permanent bans:</strong> hacking, exploits, or severe rule‑breaking.
          </li>
          <li>
            <strong>Appeals:</strong> you can appeal bans via the Discord moderation channels.
          </li>
        </ul>
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
        <p>The guidelines that keep Hunger SMP fair, chaotic, and playable.</p>
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
