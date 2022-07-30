import * as React from "react";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useRef,
} from "react";

interface Props {
  prefix?: string;
  initialValue?: number;
}

interface IContext {
  next: () => number;
  prefix?: string;
}

const IncrementalContext = createContext<IContext>({
  next: () => {
    throw new Error("Cannot use 'next' outside of an 'IncrementalProvider'");
  },
});

const IncrementalProvider = ({
  children,
  prefix,
  initialValue,
}: PropsWithChildren<Props>) => {
  const counter = useRef<number>(initialValue ?? 0);
  const next = useCallback((): number => counter.current++, []);

  return (
    <IncrementalContext.Provider
      value={{
        next,
        prefix,
      }}
    >
      {children}
    </IncrementalContext.Provider>
  );
};

const useId = (): string => {
  const { next, prefix } = useContext(IncrementalContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => `${prefix ?? ""}${next()}`, []);
};

export { IncrementalProvider, useId };
