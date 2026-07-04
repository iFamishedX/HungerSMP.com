import { GlassCard, Icon, usePageTitle } from "ifamished-ui"

const faqs = [
  {
    q: "How do I join?",
    a: "Add hungersmp.com to your server list and connect.",
  },
  {
    q: "Is it modded?",
    a: "Vanilla+ — optional Fabric client mods recommended but not required.",
  },
  {
    q: "Is griefing allowed?",
    a: "No. This is a fair-play SMP.",
  },
  {
    q: "Are there resets?",
    a: "Each season introduces new worldgen and events.",
  },
]

export default function FAQ() {
  usePageTitle("HungerSMP | FAQ")

  return (
    <div className="page">
      <div className="page-header fade-in-up">
        <h1>FAQ</h1>
        <p>Common questions about HungerSMP.</p>
      </div>

      <section className="section">
        <div className="faq-list stagger">
          {faqs.map(({ q, a }, i) => (
            <GlassCard key={q} className="faq-card" style={{ "--i": i }}>
              <h3>{q}</h3>
              <p>{a}</p>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  )
}
