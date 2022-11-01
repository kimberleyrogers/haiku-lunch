import { useState } from "react";


const colourArray = ['blue', 'red', 'green']


const useGenerateRandomColour = () => {
    const [colour, setColour] = useState("")
    const generateColour = () => {
        // setColour(Math.random().toString(16).substr(-6));
        let randomNum = Math.floor(Math.random() * colourArray.length)
        console.log(randomNum)
        setColour(colourArray[randomNum])
        {console.log(colour)}
    };
    return (colour, generateColour);

};

export default useGenerateRandomColour;