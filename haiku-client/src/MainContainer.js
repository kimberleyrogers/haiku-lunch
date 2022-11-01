import { RandomHaiku } from "./RandomHaiku";
import { About } from "./About";

// this page deals with what is displayed on the main section of the page
// use state to accept button clicks and change content

export function MainContainer(props) {

    let mainContent = props.mainContent;

    if(mainContent === 'haiku') {
        // console.log('haiku')
        return (
            <RandomHaiku />
        )
    } else if (mainContent === 'about') {
        // console.log('about')
        return (
            <About />
        )
    }

}