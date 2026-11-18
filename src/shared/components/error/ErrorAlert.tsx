import { useI18n } from "@/shared/providers/i18n/I18nProvider";
import { useStore } from "@/shared/store/rootStore";
import { errorMessage } from "@/utils/errorMessage";

/** Shows the last failed action from the error slice until dismissed. */
export default function ErrorAlert() {
  // hooks
  const { t } = useI18n();

  // store
  const error = useStore((s) => s.error);
  const dismissError = useStore((s) => s.dismissError);

  if (!error) {
    return null;
  }

  return (
    <div role="alert">
      <span>{errorMessage(error, t.errors)}</span>{" "}
      <button type="button" onClick={dismissError}>
        {t.errors.dismiss}
      </button>
    </div>
  );
}
