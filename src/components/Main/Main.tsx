import LinkProcessor from "../LinkProcessor/LinkProcessor";
import "./Main.css";

export default function Main() {
  return (
    <main className="main-content">
      <section className="link-section">
        <h1 className="title-section">
          Paste a TikTok link below
        </h1>
        <p className="subheading-section">
          Watch TikTok videos without the app and without getting redirected by your browser.
        </p>
        <LinkProcessor />
      </section>
    </main>
  );
}