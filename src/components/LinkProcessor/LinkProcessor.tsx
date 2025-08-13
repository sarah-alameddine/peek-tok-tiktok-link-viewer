import { useState } from "react";
import "./LinkProcessor.css";

function LinkProcessor() {
  const [link, setLink] = useState<string>("");
  const [linkInputed, setlinkInputed] = useState<string>("");
  const [linkErrors, setlinkErrors] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  // const link1 =
  //   "https://www.tiktok.com/@naybur/video/7485990114678574344?_d=secCgYIASAHKAESPgo8w%2Bs0wRd1JgNbVZ6RDUiBm2orT0pYPJ%2BRhYhpX24M7N9lQV9%2BH%2BA%2BlHnMyEEqp3tiGE4bHcKhMuYvujrPGgA%3D&_r=1&share_app_id=1233&share_item_id=7485990114678574344&timestamp=1743117307&u_code=d8bah8b19g41i5&utm_campaign=client_share&utm_source=short_fallback";
  // let oldLink = "www.tiktok.prac?sjsjs/kjsjs";
  const validDomains: readonly string[] = [
    "tiktok.com",
    "www.tiktok.com",
    "m.tiktok.com",
    "vm.tiktok.com",
    "vt.tiktok.com",
    "us.tiktok.com",
  ] as const;

  type LinkError =
    | "EMPTY_URL"
    | "INVALID_FORMAT"
    | "NOT_TIKTOK_DOMAIN"
    | "UNKNOWN_ERROR";

  const getErrorMessage = (errorType: LinkError): string => {
    switch (errorType) {
      case "EMPTY_URL":
        return "Please enter a TikTok URL";
      case "INVALID_FORMAT":
        return "URL is not valid - please check the format";
      case "NOT_TIKTOK_DOMAIN":
        return "Link is not valid - must be a TikTok URL";
      default:
        return "An unknown error occurred";
    }
  };
  const processLink = (): void => {
    if (!link.trim()) {
      const errorMsg = getErrorMessage("EMPTY_URL");
      console.error(errorMsg);
      setlinkErrors(errorMsg);
      return;
    }

    setIsProcessing(true);
    setlinkErrors("");
    setlinkInputed("");

    console.log("CLICKED THE LINK", link);

    try {
      const inputedURL = new URL(link);
      console.log(inputedURL);
      if (!validDomains.includes(inputedURL.hostname)) {
        const errorMsg = getErrorMessage("NOT_TIKTOK_DOMAIN");
        console.error(errorMsg);
        setlinkErrors(errorMsg);
        return;
      }
      const updatedURL  = inputedURL.origin + inputedURL.pathname;
      setlinkInputed(updatedURL);
    } catch (error: unknown) {
      console.log("ERROR WAS HERE", error);
      const errorMsg : string = getErrorMessage("INVALID_FORMAT");
      setlinkErrors(errorMsg);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="link-processor">
      <label>
        <input
          className="link-input"
          type="text"
          placeholder="Enter you URL"
          onChange={(e) => {
            setLink(e.target.value);
            setlinkErrors("");
            setlinkInputed("");
          }}
        />
      </label>
      <button
        className="link-button"
        onClick={processLink}
        disabled={isProcessing}
      >
        {isProcessing ? "Processing..." : "Get Link"}
      </button>

      {linkErrors && <p className="error-message">{linkErrors}</p>}
      {linkInputed && (
        <div className="result-section">
          <p>Your URL:</p>
          <a
            className="link-url"
            href={linkInputed}
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkInputed}
          </a>
        </div>
      )}
    </div>
  );
}

export default LinkProcessor;
