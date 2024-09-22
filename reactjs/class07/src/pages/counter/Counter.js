import { useSelector } from "react-redux";
import Count from "../../components/count/Count";

export default function Counter() {
   const email = useSelector((store)=> store.counterReducer.email)
  return (
    <div>
      <h1>Counter - {email}</h1>
      <Count/>
    </div>
  )
}
