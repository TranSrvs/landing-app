import React from "react";
import TopNav from "@/components/topNav";
import PageType from "@/domain/models/enums/pageType";
import Footer from "@/components/footer";
import MainSection from "@/components/sections/welcome/mainSection";
import GetInstantQuoteSection from "@/components/sections/getInstantQuoteSection";
import MoreQuestionsSection from "@/components/sections/welcome/moreQuestionsSection";
import OurOffersSection from "@/components/sections/welcome/ourOffersSection";

export default function View() {
  return (
    <>
      <TopNav page={PageType.WELCOME} />
      <main>
        <MainSection />
        <OurOffersSection />
        <MoreQuestionsSection />
        <GetInstantQuoteSection />
      </main>
      <Footer
        langs={[]}
        currencies={[]}
        onLangChanged={{}}
        onCurrencyChanged={{}}
      />
    </>
  );
}
