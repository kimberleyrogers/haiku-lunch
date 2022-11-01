import './App.css';
import { Footer } from './Footer';
import { Header } from './Header';
// import { RandomHaiku } from './RandomHaiku';
import { useState } from 'react';
import { MainContainer } from './MainContainer';
import useGenerateRandomColour from "./useGenerateRandomColour";

// the state deals with what is displayed on the main section of the page
// use state to accept button clicks and change content

function App() {

  const [mainContent, setMainContent] = useState('haiku')
  const generateColour = useGenerateRandomColour();
  const colour = useGenerateRandomColour();

  return (
    // does work when colour is hardcoded. can't get interpolation to work.
    <div className="App">
      <style>
        {
          `body {
            background-color: ${colour};
          }`
        }
      </style>

  {/* <div className="App" */}
    {/* //   style={{ */}
    {/* //     backgroundColor: colour, */}
    {/* //   }} */}
    
    {/* // > */}
      
      {/* create components  */}
      <button onClick={generateColour}>hey!</button>
      <Header setMainContent={setMainContent} generateColour={generateColour}/>
      <MainContainer mainContent={mainContent}/>
      <Footer />

    </div>
  );
}

export default App;
