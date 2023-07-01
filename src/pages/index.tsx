import React from "react";
import { useRouter } from "next/router";

export default function IndexPage() {
  const router = useRouter();
  React.useEffect(() => {
    router.push("/welcome");
  }, []);

  return <div />;
}
