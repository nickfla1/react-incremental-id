# react-incremental-id

Create customizable incremental string IDs.

## Installation

```sh
npm add --save react-incremental-id

yarn add react-incremental-id
```

### Usage

`react-incremental-id` uses a context provider to setup the ID prefix and initial value.

Multiple providers can be used once but nesting them might lead to unpredictable behavior.

```tsx
import { IncrementalProvider } from "react-incremental-id";

// ...

return (
  <IncrementalProvider>
    {/* Your App */}
  </IncrementalProvider>
);
```

Then, you can query the next ID using the utility hook `useId`.

```tsx
import { useId } from "react-incremental-id";

const Component = () => {
  const titleId = useId();

  return (
    <h1 id={titleId}>Example</h1>
  );
};
```

### Configuration

`IncrementalProvider` props:

| Prop         | Default | Comment                                                                              |
| ------------ | ------- | ------------------------------------------------------------------------------------ |
| `intialVaue` | `0`     | Internal counter initial value. The first invocation of `useId` will use this value. |
| `prefix`     | `""`    | Prefix to add to every generated ID.                                                 |