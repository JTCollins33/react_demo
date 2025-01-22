import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage(){
    const navigate = useNavigate();

    useEffect(()=>{
        console.log("hit the home page")
    }, []);

    const navigateUseCallbackPage = ()=>{
        navigate("/useCallbackPage")
    }

    const navigateUseMemoPage = ()=>{
        navigate("/useMemoPage")
    }

    const navigateUseReducerPage = ()=>{
        navigate("/useReducerPage")
    }


    return(
        <div>
            <h3>This is the home page</h3>
            <br/>
            <button onClick={navigateUseCallbackPage}>Go to Callback page</button>
            <button onClick={navigateUseMemoPage}>Go to Memo page</button>
            <button onClick={navigateUseReducerPage}>Go to Reducer page</button>
        </div>
    );
}