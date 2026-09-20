export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Akbarov Haydarali</span>
      </div>
      <style>{`
        .footer {
          background: var(--snow);
          border-top: 1px solid var(--snow-dim);
          padding: 24px 0;
        }
        .footer-inner {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          color: var(--ink-soft);
          animation: fade-in-up 0.7s both;
        }
        .footer-inner a {
          color: var(--ink-soft);
          position: relative;
        }
        .footer-inner a::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -3px;
          width: 0;
          height: 1px;
          background: var(--forest);
          transition: width 0.2s ease;
        }
        .footer-inner a:hover {
          color: var(--forest);
        }
        .footer-inner a:hover::after {
          width: 100%;
        }
      `}</style>
    </footer>
  )
}