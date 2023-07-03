import React from "react";
import LanguageTpo from "@/domain/models/tpos/language";
import SubjectTpo from "@/domain/models/tpos/subject";
import { Languages, Subjects } from "@/domain/ds/constants";

interface InstantQuoteFormProps {
  guaranteedDates: Date[];
}

export default function InstantQuoteForm({
  guaranteedDates
}: InstantQuoteFormProps) {
  let fromLangItems = Languages.map((item: LanguageTpo) => (
    <option key={item.id} value={item.code}>
      {item.labelEn}
    </option>
  ));
  let toLangItems = Languages.map((item: LanguageTpo) => (
    <option key={item.id} value={item.code}>
      {item.labelEn}
    </option>
  ));
  let subjectItems = Subjects.map((item: SubjectTpo) => (
    <option key={item.id} value={item.id}>
      {item.labelEn}
    </option>
  ));
  let guaranteedDateItems = (guaranteedDates || []).map((item: Date, index) => (
    <option key={index} value={item.toString()}>
      {item.toString()}
    </option>
  ));

  return (
    <div className="p-12 bg-slate-700">
      <div>
        <form>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col basis-1/3">
              <label className="text-base text-white mb-3">From</label>
              <select className="py-3 px-3 w-full border rounded">
                {fromLangItems}
              </select>
            </div>
            <div className="flex flex-col basis-1/3">
              <label className="text-base text-white mb-3">To</label>
              <select className="py-3 px-3 w-full border rounded">
                {toLangItems}
              </select>
            </div>
            <div className="flex flex-col basis-1/3">
              <label className="text-base text-white mb-3">Word Count</label>
              <input
                type="number"
                name="work_count"
                autoComplete="off"
                placeholder="1000"
                min="1"
                className="py-3 px-3 w-full border rounded"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 mt-5">
            <div className="flex flex-col basis-1/3">
              <label className="text-base text-white mb-3">Subject</label>
              <select className="py-3 px-3 w-full border rounded">
                {subjectItems}
              </select>
            </div>
            <div className="flex flex-col basis-1/3">
              <label className="text-base text-white mb-3">
                Guaranteed delivery date
              </label>
              <select className="py-3 px-3 w-full border rounded">
                {guaranteedDateItems}
              </select>
            </div>
            <div className="flex flex-col basis-1/3 justify-end">
              <button className="text-center mt-5 py-3 px-8 rounded-md bg-slate-600 text-white w-full">
                Show prices
              </button>
            </div>
          </div>
          <div className="flex mt-5 align-center">
            <span className="mr-5 rounded-full bg-green-700 text-white font-semibold text-sm px-5 py-1 inline-block">
              Pay after delivery
            </span>
            <span className="text-sm text-white">
              We trust you: feel free to pay within 5 days from delivery via
              bank transfer, credit card, or PayPal.
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
