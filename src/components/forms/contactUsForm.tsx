import React from "react";
import UploadFileInput from "@/components/generic/uploadFileInput";
import { useTranslation } from "react-i18next";

export default function ContactUsForm() {
  const { t } = useTranslation("common");
  return (
    <div className="p-12 bg-slate-700">
      <div>
        <form>
          <div className="flex flex-col">
            <label className="text-base text-white mb-3">
              <span>{t("email_address")}</span>
              <span>&nbsp;</span>
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="email"
              className="py-3 px-3 w-full border rounded"
              placeholder="example@domain.com"
              autoComplete="off"
              required
            />
          </div>
          <div className="flex flex-col mt-5">
            <label className="text-base text-white mb-3">
              <span>{t("enter_your_name")}</span>
              <span>&nbsp;</span>
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              className="py-3 px-3 w-full border rounded"
              autoComplete="off"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="flex flex-col mt-5">
            <label className="text-base text-white mb-3">
              {t("upload_files")}
            </label>
            <UploadFileInput />
          </div>
          <div className="flex flex-col mt-5">
            <label className="text-base text-white mb-3">
              <span>{t("message")}</span>
              <span>&nbsp;</span>
              <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              className="py-3 px-3 w-full border rounded"
              autoComplete="off"
              placeholder={t("write_a_message")}
              rows={4}
              required
            ></textarea>
          </div>
          {/*<div></div>*/}
          <button className="text-center mt-5 py-3 px-8 rounded-md bg-slate-600 text-white w-full">
            {t("send")}
          </button>
        </form>
      </div>
    </div>
  );
}
