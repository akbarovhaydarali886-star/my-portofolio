export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© 2026 Haydarali Akbarov. All rights reserved.</span>
      </div>
      <style>{`
        .footer {
          background: var(--bg-main);
          border-top: 1px solid var(--border-color);
          padding: 24px 0;
        }
        .footer-inner {
          display: flex;
          justify-content: center;
          font-size: 0.85rem;
          color: var(--ink-soft);
          letter-spacing: 0.05em;
        }
      `}</style>
    </footer>
  )
}