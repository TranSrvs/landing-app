import React from "react";
import { useRouter } from "next/router";

interface IUseCurrency {
  currency;
  onCurrencyChange;
}

export default function useCurrency(): IUseCurrency {
  const router = useRouter();
  const [currency, setCurrency] = React.useState("USD");

  const onCurrencyChange = React.useCallback(async (value: String) => {
    await setCurrency(value);
  }, []);

  return {
    currency,
    onCurrencyChange
  };
}
