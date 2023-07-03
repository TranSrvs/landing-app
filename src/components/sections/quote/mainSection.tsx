import React from "react";
import InstantQuoteForm from "@/components/forms/instantQuoteForm";
import LangType from "@/domain/models/enums/langType";
import SubjectType from "@/domain/models/enums/subjectType";

interface MainSectionProps {
  guaranteedDates: Date[];
}

export default function MainSection({ guaranteedDates }: MainSectionProps) {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-5xl px-8 flex flex-col">
        <div>
          <InstantQuoteForm guaranteedDates={guaranteedDates} />
        </div>
      </div>
    </section>
  );
}
