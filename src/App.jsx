import React from "react";
import { Data } from "./Components/Data";
import Card from "./Components/Card/Card";

const App = () => {
  // console.log(Data);

  return (
    <>
      {Data.map((e, i) => {
        return <Card id={e.id} imgSrc={e.imgSrc} title={e.Title} desc={e.Desc} />;
      })}
    </>
  );
};

export default App;
