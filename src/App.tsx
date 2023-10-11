import Main from "./components/main";
import { createContext, PropsWithChildren, useState } from "react";

export interface IDefaultValue {
  code: string;
  symbol: string;
  description: string;
  rate_float: number;
}

export const defaultValues: IDefaultValue[] = [
  {
    code: "USD",
    symbol: "$",
    description: "United States Dollar",
    rate_float: 16501.6965,
  },
  {
    code: "GBP",
    symbol: "£",
    description: "British Pound Sterling",
    rate_float: 13788.6856,
  },
  {
    code: "EUR",
    symbol: "€",
    description: "Euro",
    rate_float: 16075.0617,
  },
];

export const rateContext = createContext({
  state: defaultValues,
  setState: (values: IDefaultValue[]) => {},
});

export const RateProvider = (props: PropsWithChildren<{}>) => {
  const [state, setState] = useState(defaultValues);
  return <rateContext.Provider value={{ state, setState }} />;
};

function App() {
  return (
    <RateProvider>
      <Main />
    </RateProvider>
  );
}

export default App;
