// import {AlertProvider} from 'react-alert-with-buttons';
import './App.css';
import Gif from './Components/banner';
import Document from './Components/Document';
import Mint from './Components/mint';
import Navbar from './Components/Navbar';
import Social from './Components/Social';


function App() {
  return (
    <div className="App">
        {/* <AlertProvider> */}
            <Navbar />
       {/* </AlertProvider> */}
      <br />
      <Gif />
      <br />
      <Mint />
      <br />
      <Document />
      <br />
      <Social />
    </div>
  );
}

export default App;
