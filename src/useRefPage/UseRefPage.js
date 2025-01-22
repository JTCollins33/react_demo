import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UseRefPage(){
    const navigate=useNavigate();
    const useRefRenderCount = useRef(0);
    const normalRenderCount = {current: 0}
    const [renderString, setRenderString] = useState("");

    const inputElement = useRef();

    useEffect(()=>{
        useRefRenderCount.current = useRefRenderCount.current + 1;
        normalRenderCount.current = normalRenderCount.current+1;
    });

    const focusInput = () =>{
        inputElement.current.focus();
    }

    return(
        <div>
            <h2>This is the UseRef page</h2><br/><br/>
            
            <p>Type to rerender component</p>
            <input type="text" value={renderString} onChange={(e) => setRenderString(e.target.value)}/><br/><br/>
            <p>UseRef page render count: {useRefRenderCount.current}</p>
            <p>Normal constant page render count: {normalRenderCount.current}</p><br/><br/>

            <h4>Focus Example</h4><br/>
            <input type="text" ref={inputElement}/>
            <button onClick={focusInput}>Focus Input</button><br/><br/>

            <button onClick = {()=> navigate("/")}>Go Home</button>
        </div>
    );
}