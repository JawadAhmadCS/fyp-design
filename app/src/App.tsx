import { useMemo, useState } from "react";
import { screenOptions } from "./data/screens";
import { ScreenSwitcher } from "./components/layout/ScreenSwitcher";
import { AssistantConfigPage } from "./pages/AssistantConfigPage";
import { DashboardPage } from "./pages/DashboardPage";
import { LandingPage } from "./pages/LandingPage";
import { PhoneNumbersPage } from "./pages/PhoneNumbersPage";
import type { AppScreen } from "./types";

function getInitialScreen(): AppScreen {
  const hash = window.location.hash.replace("#", "");
  const allowed = new Set<AppScreen>([
    "landing",
    "dashboard",
    "model",
    "voice",
    "transcriber",
    "phoneNumbers",
  ]);

  return allowed.has(hash as AppScreen) ? (hash as AppScreen) : "dashboard";
}

export default function App() {
  const [activeScreen, setActiveScreen] = useState<AppScreen>(getInitialScreen);

  const content = useMemo(() => {
    switch (activeScreen) {
      case "landing":
        return <LandingPage />;
      case "dashboard":
        return <DashboardPage />;
      case "model":
        return <AssistantConfigPage mode="model" />;
      case "voice":
        return <AssistantConfigPage mode="voice" />;
      case "transcriber":
        return <AssistantConfigPage mode="transcriber" />;
      case "phoneNumbers":
        return <PhoneNumbersPage />;
      default:
        return <DashboardPage />;
    }
  }, [activeScreen]);

  const handleScreenChange = (screen: AppScreen) => {
    setActiveScreen(screen);
    window.location.hash = screen;
  };

  return (
    <>
      {content}
      <ScreenSwitcher options={screenOptions} value={activeScreen} onChange={handleScreenChange} />
    </>
  );
}
