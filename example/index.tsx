import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IncrementalProvider, useId } from '../.';

const Test = () => {
  const titleId = useId();
  const descriptionId = useId();

  return (
    <div className="test">
      <p id={titleId}>Title - <b>{titleId}</b></p>
      <p id={descriptionId}>Description - <b>{descriptionId}</b></p>
    </div>
  );
};

const App = () => {
  return (
    <main>
      <IncrementalProvider>
        <Test />
      </IncrementalProvider>
      <IncrementalProvider prefix="test-">
        <Test />
      </IncrementalProvider>
      <IncrementalProvider initialValue={10} prefix="test-">
        <Test />
      </IncrementalProvider>
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
