import { useState } from "react";

export type LinkError =
  | "EMPTY_URL"
  | "INVALID_FORMAT"
  | "NOT_TIKTOK_DOMAIN"
  | "INVALID_VIDEO";

const validDomains = [
  "tiktok.com",
  "www.tiktok.com",
  "m.tiktok.com",
  "vm.tiktok.com",
  "vt.tiktok.com",
  "us.tiktok.com",
] as const;

export function useProcessTikTokLink() {
  const [result, setResult] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const getErrorMessage = (type: LinkError) => {
    switch (type) {
      case "EMPTY_URL":
        return "Please enter a TikTok URL";
      case "INVALID_FORMAT":
        return "URL is not valid - please check the format";
      case "NOT_TIKTOK_DOMAIN":
        return "Must be a TikTok URL";
      case "INVALID_VIDEO":
        return "Not a valid TikTok video link";
      default:
        return "Unknown error";
    }
  };

  const processLink = (link: string) => {
    if (!link.trim()) {
      setError(getErrorMessage("EMPTY_URL"));
      return;
    }

    setLoading(true);
    setError("");
    setResult("");

    try {
      let cleaned = link.trim().replace(/\s/g, "");

      if (!cleaned.startsWith("http")) {
        cleaned = "https://" + cleaned;
      }

      const url = new URL(cleaned);
      const hostname = url.hostname.replace("www.", "");

      const isTikTok = validDomains.includes(hostname as any);

      if (!isTikTok) {
        setError(getErrorMessage("NOT_TIKTOK_DOMAIN"));
        return;
      }

      const parts = url.pathname.split("/").filter(Boolean);
      const isVideo =
        parts.includes("video") ||
        hostname === "vm.tiktok.com" ||
        hostname === "vt.tiktok.com";

      if (!isVideo) {
        setError(getErrorMessage("INVALID_VIDEO"));
        return;
      }

      setResult(`${url.origin}${url.pathname}`);
    } catch {
      setError(getErrorMessage("INVALID_FORMAT"));
    } finally {
      setLoading(false);
    }
  };

  return {
    result,
    error,
    loading,
    processLink,
  };
}