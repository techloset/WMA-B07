import { useSelector, useDispatch } from "react-redux"
import {increament, decreament} from "../../store/slices/counterSlice"

export default function Count() {
    const count = useSelector((store)=>store.counterReducer.count)
    console.log("count component",count);
    const dispatch = useDispatch()

    const doIncreament = ()=>{
      dispatch(increament())
    }
  return (
    <div>
        <button onClick={doIncreament}>+</button>
        <span>{count}</span>
        <button>-</button>
    </div>
  )
}
