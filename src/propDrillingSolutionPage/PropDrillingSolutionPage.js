import { useContext } from "react";
import { CountContext } from "../context/Context";
import { useNavigate } from "react-router-dom";
import DrillingButton from "./DrillingButton";

export default function PropDrillingSolutionPage(){
    const {count} = useContext(CountContext);
    const navigate = useNavigate();

    return(
        <div>
            <h2>This is the prop drilling solution page</h2><br/>
            <p>Here is the current count: {count}</p><br/>
            <DrillingButton/>
            <br/><br/>
            <button onClick={()=>navigate("/")}>Go Home</button>
        </div>
    );
}