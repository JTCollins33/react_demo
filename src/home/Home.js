import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage(){
    const navigate = useNavigate();

    useEffect(()=>{
        console.log("hit the home page")
    }, []);

    const navigatePage1 = ()=>{
        navigate("/page1")
    }


    return(
        <div>
            <h3>This is the home page</h3>
            <br/>
            <button onClick={navigatePage1}>Go to page 1</button>
        </div>
    );
}