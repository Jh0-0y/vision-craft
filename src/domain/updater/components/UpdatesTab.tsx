import { useQuery } from "@tanstack/react-query";

import styles from "@/domain/settings/components/SettingsScreen.module.css";
import {
  useAutoUpdate,
  useAutoUpdateUpdate,
} from "@/domain/settings/queries/settings";
import { getAppVersion } from "@/domain/updater/apis/updater";
import {
  useUpdateCheck,
  useUpdateInstall,
  useUpdateStatus,
} from "@/domain/updater/queries/updater";
import { useI18n } from "@/shared/providers/i18n/I18nProvider";
import { describeUpdateStatus } from "@/utils/updateStatus";

export default function UpdatesTab() {
  // hooks
  const { t } = useI18n();

  // queries
  const { data: version } = useQuery<string>({
    queryKey: ["updater", "version"],
    queryFn: getAppVersion,
    staleTime: Infinity,
  });
  const { status } = useUpdateStatus();
  const { checkUpdate } = useUpdateCheck();
  const { installUpdate, isLoading: isInstalling } = useUpdateInstall();
  const { autoUpdate } = useAutoUpdate();
  const { updateAutoUpdate, isLoading: isSavingAuto } = useAutoUpdateUpdate();

  return (
    <>
      <p>{version ? t.updates.version(version) : " "}</p>
      <p role="status">{describeUpdateStatus(status, t.updates)}</p>
      <div className={styles.row}>
        <button
          type="button"
          disabled={status.status === "checking"}
          onClick={checkUpdate}
        >
          {t.updates.check}
        </button>
        {status.status === "ready" && (
          <button type="button" disabled={isInstalling} onClick={installUpdate}>
            {t.updates.restart}
          </button>
        )}
      </div>
      <label className={styles.row}>
        {t.updates.auto}
        <input
          type="checkbox"
          checked={autoUpdate}
          disabled={isSavingAuto}
          onChange={(e) => updateAutoUpdate(e.target.checked)}
        />
      </label>
    </>
  );
}
