import React from "react";
import TopNav from "@/components/topNav";
import PageType from "@/domain/models/enums/pageType";
import Footer from "@/components/footer";
import MainSection from "@/components/sections/contactUs/mainSection";
import GetInstantQuoteSection from "@/components/sections/getInstantQuoteSection";
import MoreQuestionsSection from "@/components/sections/welcome/moreQuestionsSection";
import HeaderSection from "@/components/sections/contactUs/headerSection";

export default function View() {
  return (
    <>
      <TopNav page={PageType.CONTACT_US} />
      <main>
        <HeaderSection contactDateTime="Now" />
        <MainSection />
        <GetInstantQuoteSection />
      </main>
      <Footer />
    </>
  );
}
