import React from "react";
import UploadFileInput from "@/components/generic/uploadFileInput";

export default function ContactUsForm() {
  return (
    <div className="p-12 bg-slate-700">
      <div>
        <form>
          <div className="flex flex-col">
            <label className="text-base text-white mb-3">
              <span>Email address</span>
              <span>&nbsp;</span>
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="email"
              className="py-3 px-3 w-full border rounded"
              placeholder="E.g. example@domain.com"
              autoComplete="off"
              required
            />
          </div>
          <div className="flex flex-col mt-5">
            <label className="text-base text-white mb-3">
              <span>Enter your name</span>
              <span>&nbsp;</span>
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              className="py-3 px-3 w-full border rounded"
              autoComplete="off"
              placeholder="E.g. John Doe"
              required
            />
          </div>
          <div className="flex flex-col mt-5">
            <label className="text-base text-white mb-3">Upload files</label>
            <UploadFileInput />
          </div>
          <div className="flex flex-col mt-5">
            <label className="text-base text-white mb-3">
              <span>Message</span>
              <span>&nbsp;</span>
              <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              className="py-3 px-3 w-full border rounded"
              autoComplete="off"
              placeholder="Write a message..."
              rows={4}
              required
            ></textarea>
          </div>
          {/*<div></div>*/}
          <button className="text-center mt-5 py-3 px-8 rounded-md bg-slate-600 text-white w-full">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
