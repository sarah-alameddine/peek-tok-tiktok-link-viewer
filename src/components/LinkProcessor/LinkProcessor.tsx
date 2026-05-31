import { useState } from "react";
import "./LinkProcessor.css";
import { useProcessTikTokLink } from "../../hooks/useProcessTikTokLink.ts"

function LinkProcessor() {
  const [link, setLink] = useState("");

  const {
    result,
    error,
    loading,
    processLink,
  } = useProcessTikTokLink();

  return (
    <div className="link-processor">
      <label className="input-wrapper">
        <input
          className="link-input"
          type="text"
          placeholder="Enter your TikTok URL"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </label>

      <button
        className="link-button"
        onClick={() => processLink(link)}
        disabled={loading}
      >
        {loading ? "Processing..." : "Get Link"}
      </button>

      {error && <p className="error-message">{error}</p>}

      {result && (
        <div className="result-section">
          <p>Your URL:</p>

          <a
            className="link-url"
            href={result}
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch Video
          </a>
        </div>
      )}
    </div>
  );
}

export default LinkProcessor;