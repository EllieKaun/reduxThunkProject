import { increment, decrement } from "../model/counterAction"
import { useSelector, useDispatch } from "react-redux"


const Counter = () => {

    const countValue = useSelector((state : any) => state.counter.countValue)

    const dispatch = useDispatch()

    return(
        <>
            <p>{countValue}</p>
            <button onClick={() => dispatch(increment())}>Increase</button>
            <button onClick={() => dispatch(decrement())}>Decrease</button>
        </>
    )
}

export default Counter