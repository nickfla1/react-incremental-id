import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { IncrementalProvider, useId } from '../src';

describe('it', () => {
  it('generates an id', () => {
    const wrapper = ({ children }: React.PropsWithChildren) => (
      <IncrementalProvider>{children}</IncrementalProvider>
    );
    const { result } = renderHook(() => useId(), { wrapper });

    expect(result.current).toStrictEqual('0');
  });

  it('generates an id starting from a value', () => {
    const wrapper = ({ children }: React.PropsWithChildren) => (
      <IncrementalProvider initialValue={10}>{children}</IncrementalProvider>
    );
    const { result } = renderHook(() => useId(), { wrapper });

    expect(result.current).toStrictEqual('10');
  });

  it('generates an id with a prefix', () => {
    const wrapper = ({ children }: React.PropsWithChildren) => (
      <IncrementalProvider prefix="test-">{children}</IncrementalProvider>
    );
    const { result } = renderHook(() => useId(), { wrapper });

    expect(result.current).toStrictEqual('test-0');
  });

  it('generates should fail if executed before initializing the provider', () => {
    const { result } = renderHook(() => useId());

    expect(() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      result.current;
    }).toThrow();
  });
});
