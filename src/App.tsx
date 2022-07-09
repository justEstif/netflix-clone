import React, { FunctionComponent } from "react";
interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  return (
    <div className="bg-black">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
};

export default App;
