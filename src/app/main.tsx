import { StrictMode } from "react";

import App from "@/app/App";
import { getLocale, getTheme } from "@/domain/settings/apis/settings";
import {
  LOCALE_QUERY_KEY,
  THEME_QUERY_KEY,
} from "@/domain/settings/queries/settings";
import RQProvider, {
  queryClient,
} from "@/shared/components/queries/RQProvider";
import I18nProvider from "@/shared/providers/i18n/I18nProvider";
import ThemeProvider, {
  applyTheme,
} from "@/shared/providers/theme/ThemeProvider";

import { createRoot } from "react-dom/client";

import "./globals.css";

// Seed theme and language before the first paint so there is no flash of the wrong ones.
const [theme, locale] = await Promise.all([
  getTheme().catch(() => "system" as const),
  getLocale().catch(() => "system" as const),
]);
queryClient.setQueryData(THEME_QUERY_KEY, theme);
queryClient.setQueryData(LOCALE_QUERY_KEY, locale);
applyTheme(theme);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RQProvider>
      <ThemeProvider>
        <I18nProvider>
          <App />
        </I18nProvider>
      </ThemeProvider>
    </RQProvider>
  </StrictMode>,
);
