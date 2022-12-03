import Main from "./components/main";
import { useState, createContext, Dispatch, SetStateAction, PropsWithChildren } from 'react';
import { seedData } from "./seed";


export interface IDefaultValues {
  usdRate: Number,
  eurRate: Number,
  gbpRate: Number,
}

export const defaultValues = {
  usdRate: seedData[0].rate_float,
  eurRate: seedData[1].rate_float,
  gbpRate: seedData[2].rate_float,
}

export function createCtx<IDefaultValues>(defaultValue: IDefaultValues) {
  type UpdateType = Dispatch<SetStateAction<typeof defaultValue>>;
  const defaultUpdate: UpdateType = () => defaultValue;
  const ctx = createContext({
    state: defaultValue,
    update: defaultUpdate,
  });

  function Provider(props: PropsWithChildren<{}>) {
    const [state, update] = useState(defaultValue);
    return <ctx.Provider value={{ state, update }} {...props} />;
  }
  return [ctx, Provider] as const;
};

const [ctx, ValueProvider] = createCtx(defaultValues)
export const ValueContext = ctx;


function App() {

  return (
    <ValueProvider>
      <Main />
    </ValueProvider>
  );
}

export default App;





