import { useSelector, useDispatch } from "react-redux";
import helloReducer from "./helloReducer";


function HelloRedux() {
  const { message } = useSelector((state) => state.helloReducer);
  return (
    <div>
      <h1>Hello Redux</h1>
      <h2>{message}</h2>
      <helloReducer ></helloReducer>
    </div>
  );
}
export default HelloRedux;
