import { useEffect, useState } from 'react';
import { SITE } from '../config/site';

interface CopyIpButtonProps {
  label?: string;
  className?: string;
}

export function CopyIpButton({
  label = 'Salin IP Server',
  className = 'btn btn--primary',
}: CopyIpButtonProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2600);
    return () => window.clearTimeout(timer);
  }, [copied]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(SITE.ip);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = SITE.ip;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
      } finally {
        document.body.removeChild(ta);
      }
    }
    setCopied(true);
  }

  return (
    <button
      type="button"
      className={className}
      onClick={handleCopy}
      aria-live="polite"
    >
      {copied ? `IP Disalin (${SITE.ip})` : label}
    </button>
  );
}
