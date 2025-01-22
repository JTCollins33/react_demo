import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/Context";
import { useNavigate } from "react-router-dom";

export default function UseContextPage(){
    const {isLightTheme} = useContext(ThemeContext);
    const navigate = useNavigate();

    useEffect(()=>{
        console.log("Currently light theme: "+isLightTheme);
    });

    return(
        <div>
            <h2>This is the UseContext page</h2>
            {isLightTheme ? 
                <p>The context is currently light themed</p>
                :
                <p>The context is currently dark themed</p>
            }
            <br/><br/>
            <button onClick={()=> navigate("/")}>Go Home</button>
        </div>
    );
}