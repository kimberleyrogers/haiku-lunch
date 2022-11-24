import './App.css';
import { Footer } from './Footer';
import { Header } from './Header';
// import { RandomHaiku } from './RandomHaiku';
import { useState } from 'react';
import { MainContainer } from './MainContainer';


// the state deals with what is displayed on the main section of the page
// use state to accept button clicks and change content

function App() {

  const [mainContent, setMainContent] = useState('haiku')

  const changeBackground = () => {
    const colors = ['#AED4E6', '#1AC8ED', '#AF7595', '#8C2155', '#FBD87F', '#F6AF65', '#037171', '#A4F9C8', '#386FA4']
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
  }

  return (
    // does work when colour is hardcoded. can't get interpolation to work.
    <div className="App">
      
      {/* create components  */}
      <Header setMainContent={setMainContent} changeBackground={changeBackground}/>
      <MainContainer mainContent={mainContent}/>
      <Footer />

    </div>
  );
}

export default App;
