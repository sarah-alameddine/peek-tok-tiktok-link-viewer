import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        Built out of stubbornness to download TikTok😸{" "}
      </div>
      <div className="footer-right">
        <a
          href="https://github.com/sarah-alameddine/peek-tok-tiktok-link-viewer"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
          aria-label="GitHub"
        >
          <svg height="22" width="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .5C5.7.5.7 5.7.7 12.2c0 5.2 3.4 9.6 8.2 11.2.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.9 2.1 3.6 1.5.1-.8.4-1.4.7-1.7-2.6-.3-5.4-1.3-5.4-5.8 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a10.7 10.7 0 0 1 5.8 0C16.3 5.3 17.3 5.6 17.3 5.6c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.8 5.5-5.4 5.8.5.4.8 1.2.8 2.4v3.5c0 .3.2.7.8.6a11.4 11.4 0 0 0 8.2-11.2C23.3 5.7 18.3.5 12 .5z" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
