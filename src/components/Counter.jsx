import { useDispatch, useSelector } from "react-redux";
import AllActions from "../redux/actions";
import "../css/counter.css";

function Counter() {
  const count = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();
  function incrementCounter() {
    if (count > 19) {
      alert("Counter cannot be higher than 20!");
    } else {
      dispatch(AllActions.actions.incrementCounter(1));
    }
  }
  function decrementCounter() {
    if (count < 1) {
      alert("Counter cannot be lower than 0!");
    } else {
      dispatch(AllActions.actions.decrementCounter(1));
    }
  }
  return (
    <div className="Counter">
      <h1 className="counterHeader">COUNTER PROJECT WITH REACT-REDUX</h1>
      <p className="counterItem">{count}</p>
      <div className="counterButtons">
        <button className="counterButton" onClick={incrementCounter}>
          INCREASE(+)
        </button>
        <button className="counterButton" onClick={decrementCounter}>
          DECREASE(-)
        </button>
      </div>
      <div className="footerPart">
        <footer>React Redux Test Project maden by Ali Canlıer</footer>
      </div>
    </div>
  );
}

export default Counter;
