import { GlassCard, usePageTitle } from "ifamished-ui"

const logs = [
  {
    version: "Season 3 Launch",
    date: "2026-07-03",
    entries: [
      "New world seed",
      "Updated to Minecraft 1.XX",
      "New spawn and event schedule",
    ],
  },
  {
    version: "Season 2 Final Patch",
    date: "2026-06-15",
    entries: [
      "Performance improvements",
      "Minor bug fixes",
    ],
  },
]

export default function Changelogs() {
  usePageTitle("HungerSMP | Changelogs")

  return (
    <div className="page">
      <div className="page-header fade-in-up">
        <h1>Changelogs</h1>
        <p>Season updates and patch notes.</p>
      </div>

      <section className="section">
        <div className="changelog-list stagger">
          {logs.map((log, i) => (
            <GlassCard key={log.version} className="changelog-card" style={{ "--i": i }}>
              <h3>{log.version}</h3>
              <p className="muted">{log.date}</p>
              <ul>
                {log.entries.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  )
}
