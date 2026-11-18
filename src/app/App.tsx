import styles from "@/app/App.module.css";
import Greeting from "@/domain/settings/components/Greeting";
import SettingsScreen from "@/domain/settings/components/SettingsScreen";

import { getCurrentWebviewWindow } from "@tauri-apps/api/webviewWindow";

// Both windows load this page; the window label picks the screen (labels in tauri.conf.json).
const isSettingsWindow = getCurrentWebviewWindow().label === "settings";

export default function App() {
  if (isSettingsWindow) {
    return <SettingsScreen />;
  }

  return (
    <main className={styles.hello}>
      <Greeting />
    </main>
  );
}
