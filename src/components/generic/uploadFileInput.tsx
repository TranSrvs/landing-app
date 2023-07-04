import React from "react";
import { basePath } from "@/domain/ds/constants";
import { useTranslation } from "react-i18next";

export default function UploadFileInput() {
  const { t } = useTranslation("common");
  return (
    <div className="py-1 pl-3 pr-1 w-full border rounded bg-white flex items-center">
      <input type="hidden" name="files" />
      <picture className="inline-block w-4 h-4 mr-3">
        <img
          src={`${basePath}/imgs/attachment.svg`}
          alt="attachment"
          className="w-4 h-4"
        />
      </picture>
      <p className="grow text-slate-400">{t("no_file_selected")}</p>
      <button type="button" className="px-3 py-1.5 border border-slate-200">
        {t("select_files")}
      </button>
    </div>
  );
}
