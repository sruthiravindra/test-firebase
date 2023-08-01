import React from "react";
import Recipe from "./component/Recipe";
import { list } from "./data";
import {app} from './firebaseConfig';

const App = () => {
  return (
    <>
      <Recipe data={list} />
    </>
  );
};

export default App;