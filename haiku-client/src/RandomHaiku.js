import axios from 'axios';
import { useEffect, useState } from 'react';


export function RandomHaiku() {
    console.log('random haiku called')
    const [haiku_line_one, setHaikuOne] = useState("...")
    const [haiku_line_two, setHaikuTwo] = useState("...")
    const [haiku_line_three, setHaikuThree] = useState("...")


    // use axios to call my flask server for the haiku information
    useEffect(() => {
        async function fetchHaiku() {
            const response = await axios('http://127.0.0.1:5000/',
            );
            setHaikuOne(response.data[0]['first_line']);
            setHaikuTwo(response.data[0]['second_line']);
            setHaikuThree(response.data[0]['third_line']);

    }
    fetchHaiku();
    })
  

    return (
        <div id="haiku-container">
            <p className="haiku-line">"{haiku_line_one}</p>
            <p className="haiku-line">{haiku_line_two}</p>
            <p className="haiku-line">{haiku_line_three}"</p>
        </div>
    )

    
}