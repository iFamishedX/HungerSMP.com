import { GlassButton, Icon } from "ifamished-ui"
import { useState } from "react"

export default function CopyIPButton() {
  const [copied, setCopied] = useState(false)

  return (
    <GlassButton
      variant="primary"
      onClick={() => {
        navigator.clipboard.writeText("mc.hungersmp.com")
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
      }}
    >
      <Icon name="copy" size={16} />
      {copied ? "Copied!" : "Copy IP"}
    </GlassButton>
  )
}
