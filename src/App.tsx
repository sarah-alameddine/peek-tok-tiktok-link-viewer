import "./App.css";
import LinkProcessor from "./components/LinkProcessor";

function App() {
  // TODO:
  // Add a bar + button -> where a user can input a link
  // Returns a clickable link with the ? after removed
  // FUTURE TODO:
  // Can add a better viewing experience
  return (
    <>
      <i className="fab fa-tiktok fa-2x  main-wrapper">PeakTok</i>
      <p>Watch TikTok links without being redirected to app</p>
      
      <p>Paste a TikTok link below:</p>
      {/* TODO: Add */}
      <LinkProcessor />
    </>
  );
}

export default App;
