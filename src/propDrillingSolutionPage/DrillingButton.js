import { useContext } from "react";
import { CountContext } from "../context/Context";

export default function DrillingButton(){
    const {setCount} = useContext(CountContext);

    const incrementCount = () => {
        setCount((count) => count+1);
    }

    return(
        <div>
            <button onClick={incrementCount}>Increment Count</button>
        </div>
    );
}