import { useEffect, useState } from "react";

import styles from "@/domain/settings/components/SettingsScreen.module.css";
import GeneralTab from "@/domain/settings/components/GeneralTab";
import UpdatesTab from "@/domain/updater/components/UpdatesTab";
import ErrorAlert from "@/shared/components/error/ErrorAlert";
import { useI18n } from "@/shared/providers/i18n/I18nProvider";

import { listen } from "@tauri-apps/api/event";

type Tab = "general" | "updates";

const TABS: Tab[] = ["general", "updates"];

export default function SettingsScreen() {
  // hooks
  const { t } = useI18n();

  // state
  const [tab, setTab] = useState<Tab>("general");

  // useEffect
  useEffect(() => {
    // The window is hidden, not destroyed, on close; start over on the first tab when reopened.
    const unlisten = listen("settings://opened", () => setTab("general"));

    return () => {
      void unlisten.then((fn) => fn());
    };
  }, []);

  return (
    <main className={styles.screen}>
      <div role="tablist" aria-label={t.settings.title} className={styles.tabs}>
        {TABS.map((id) => (
          <button
            key={id}
            type="button"
            role="tab"
            id={`tab-${id}`}
            aria-selected={tab === id}
            aria-controls={`panel-${id}`}
            onClick={() => setTab(id)}
          >
            {t.settings.tabs[id]}
          </button>
        ))}
      </div>
      <ErrorAlert />
      <section
        role="tabpanel"
        id={`panel-${tab}`}
        aria-labelledby={`tab-${tab}`}
        className={styles.panel}
      >
        {tab === "general" ? <GeneralTab /> : <UpdatesTab />}
      </section>
    </main>
  );
}
