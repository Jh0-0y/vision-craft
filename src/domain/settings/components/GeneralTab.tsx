import styles from "@/domain/settings/components/SettingsScreen.module.css";
import type {
  LocalePref,
  ThemePref,
} from "@/domain/settings/apis/settings.dto";
import {
  useAutostart,
  useAutostartUpdate,
  useLocalePref,
  useLocaleUpdate,
  useThemePref,
  useThemeUpdate,
} from "@/domain/settings/queries/settings";
import { useI18n } from "@/shared/providers/i18n/I18nProvider";

// Language names are written in their own language (docs/agents/conventions/i18n.md).
const LANGUAGE_NAMES = { ko: "한국어", en: "English" } as const;

export default function GeneralTab() {
  // hooks
  const { t } = useI18n();

  // queries
  const { theme } = useThemePref();
  const { updateTheme } = useThemeUpdate();
  const { locale } = useLocalePref();
  const { updateLocale } = useLocaleUpdate();
  const { autostart } = useAutostart();
  const { updateAutostart, isLoading: isSavingAutostart } =
    useAutostartUpdate();

  return (
    <>
      <label className={styles.row}>
        {t.settings.theme}
        <select
          value={theme}
          onChange={(e) => updateTheme(e.target.value as ThemePref)}
        >
          <option value="system">{t.settings.system}</option>
          <option value="light">{t.settings.light}</option>
          <option value="dark">{t.settings.dark}</option>
        </select>
      </label>
      <label className={styles.row}>
        {t.settings.language}
        <select
          value={locale}
          onChange={(e) => updateLocale(e.target.value as LocalePref)}
        >
          <option value="system">{t.settings.system}</option>
          <option value="ko">{LANGUAGE_NAMES.ko}</option>
          <option value="en">{LANGUAGE_NAMES.en}</option>
        </select>
      </label>
      <label className={styles.row}>
        {t.settings.launchAtLogin}
        <input
          type="checkbox"
          checked={autostart}
          disabled={isSavingAutostart}
          onChange={(e) => updateAutostart(e.target.checked)}
        />
      </label>
    </>
  );
}
