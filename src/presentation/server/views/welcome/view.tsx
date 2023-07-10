import PageType from "@/domain/models/enums/pageType";
import TopNav from "@/presentation/server/views/shared/topNav";

export default function View() {
  return (
    <>
      <TopNav page={PageType.WELCOME} />
      {/*<Footer />*/}
    </>
  );
}
