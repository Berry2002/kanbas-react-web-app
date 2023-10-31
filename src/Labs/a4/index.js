import Add from "./Add";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ChildStateComponent from "./ChildStateComponent";
import ReduxExamples from "./ReduxExamples";

function Assignment4() {
  function sayHello() {
    alert("Hello");
  }

  return (
    <div>
      <h1>Assignment 4</h1>
      <ReduxExamples />
      <PassingFunctions theFunction={sayHello} />
      <Add a={1} b={2} />
      <ClickEvent></ClickEvent>
      <PassingDataOnEvent></PassingDataOnEvent>
      <EventObject></EventObject>
      <Counter></Counter>
      <BooleanStateVariables></BooleanStateVariables>
      <StringStateVariables></StringStateVariables>
      <DateStateVariable></DateStateVariable>
      <ObjectStateVariable></ObjectStateVariable>
      <ArrayStateVariable></ArrayStateVariable>
      <ParentStateComponent></ParentStateComponent>
      <ChildStateComponent></ChildStateComponent>
    </div>
  );
}
export default Assignment4;
