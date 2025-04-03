"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Cast 'window' to the correct type
      const telegramWindow = window as Window & { TelegramWebview?: unknown };

      if (telegramWindow.TelegramWebview) {
        const url = window.location.href;
        const chromeUrl = `intent://${url.replace(
          /^https?:\/\//,
          ""
        )}#Intent;scheme=https;end`;
        window.location.href = chromeUrl;
      } else {
        // Redirect normally to the dashboard
        router.push("/dashboard");
      }
    }
  }, [router]);

  return null; // No UI is needed, as the page just redirects
}
