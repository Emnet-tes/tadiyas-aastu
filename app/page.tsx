import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).TelegramWebview) {
      const url = window.location.href;
      const chromeUrl = `intent://${url.replace(
        /^https?:\/\//,
        ""
      )}#Intent;scheme=https;end`;
      window.location.href = chromeUrl;
    }
  }, []);
  return redirect("/dashboard");
}
