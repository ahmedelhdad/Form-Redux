import React, { useState } from "react";
import { useSelector } from "react-redux";
import Form from "./Components/Form";
import { useDispatch } from "react-redux";
import { filter } from "./Components/CounterSlice";
import "./App.css";
const App = () => {
  const names = useSelector((state) => state.names.listname);
  const dispatch = useDispatch();
  const close = (selectId) => {
    const data = names.filter((el) => {
      return el.id !== selectId;
    });
    dispatch(filter(data));
  };
  const listNames = names.map(({ name, age, addrees, type, id }) => {
    return (
      <div className={type === "boy" ? "boy" : "girl"} key={id}>
        <h1>name:{name}</h1>
        <h1>age:{age}</h1>
        <h1>addrees:{addrees}</h1>
        <h1>type:{type}</h1>
        <div className="close" onClick={() => close(id)}>
          X
        </div>
      </div>
    );
  });
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <div className="container"><div className="Data">{listNames}</div></div>
      <button className="AddNames" onClick={() => setShow(!show)}>
        Add Names
      </button>
      {show && <Form setShow={setShow}/>}
    </div>
  );
};

export default App;
