import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/Context";

export default function UseContextPage(){
    const {isLightTheme} = useContext(ThemeContext);

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
        </div>
    );
}