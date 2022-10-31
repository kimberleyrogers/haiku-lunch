import './App.css';
import { Footer } from './Footer';
import { Header } from './Header';
import { RandomHaiku } from './RandomHaiku';


function App() {
  return (
    <div className="App">
      {/* create components  */}
      <Header />
      <RandomHaiku />
      <Footer />

    </div>
  );
}

export default App;
