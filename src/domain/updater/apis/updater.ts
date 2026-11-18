import type { UpdateStatus } from "@/domain/updater/apis/updater.dto";
import call from "@/shared/api";

export async function getUpdateStatus() {
  return call<UpdateStatus>("get_update_status");
}

export async function checkUpdate() {
  return call<UpdateStatus>("check_update");
}

export async function installUpdate() {
  return call<void>("install_update_and_restart");
}

/** Tauri's built-in `app` plugin (allowed by `core:default`); the version from tauri.conf.json. */
export async function getAppVersion() {
  return call<string>("plugin:app|version");
}
