import * as React from 'react';
import { createContext, PropsWithChildren, useCallback, useContext, useRef } from "react";

interface Props {
  initialValue?: number;
}

const IncrementalContext = createContext<number>(0);

const IncrementalProvider = ({ children, initialValue }: PropsWithChildren<Props>) => {
  const value = useRef<number>(initialValue ?? 0);

  return (
    <IncrementalContext.Provider value={value.current}>
      {children}
    </IncrementalContext.Provider>
  );
};

const useId = () => { };

export { IncrementalProvider, useId };
