import LinkProcessor from "../LinkProcessor/LinkProcessor";
import "./Main.css"; // Import Main's own CSS instead of App.css

export default function Main(){


 return(
      <main className="main-content">
        {/* <div className="title-section">
          <i className="fab fa-tiktok fa-2x main-wrapper">PeakTok</i>
          <p>Watch TikTok links without being redirected to app</p>
        </div> */}
        
        <section className="link-section">
          <div className="title-section">Paste a TikTok link below:</div>
          <LinkProcessor />
        </section>
      </main>

 )   
}