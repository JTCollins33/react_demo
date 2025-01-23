import { useContext } from "react";
import { CountContext } from "../context/Context";
import DrillingButton from "./DrillingButton";

export default function PropDrillingSolutionPage(){
    const {count} = useContext(CountContext);

    return(
        <div>
            <h2>This is the prop drilling solution page</h2><br/>
            <p>Here is the current count: {count}</p><br/>
            <DrillingButton/>
        </div>
    );
}