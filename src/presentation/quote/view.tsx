import React from "react";
import TopNav from "@/components/topNav";
import PageType from "@/domain/models/enums/pageType";
import Footer from "@/components/footer";
import MainSection from "@/components/sections/quote/mainSection";
import HeaderSection from "@/components/sections/quote/headerSection";
import ComplexNeedSection from "@/components/sections/quote/complexNeedSection";

export default function View() {
  return (
    <>
      <TopNav page={PageType.QUOTE} />
      <main>
        <HeaderSection />
        <MainSection guaranteedDates={[]} />
        <ComplexNeedSection />
      </main>
      <Footer onLangChanged={() => {}} onCurrencyChanged={() => {}} />
    </>
  );
}
