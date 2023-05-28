import { Helmet } from "react-helmet";
import './App.css';
import Tabs from './components/Tabs';
import Pages from './components/Pages';

function App() {
  
  return (
    <div>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Playfair&display=swap" rel="stylesheet" />
        <title>jane park</title>
      </Helmet>

      <div className="content-container">
        <div className="content">
          <h1 className="name">jane park</h1>
          <Tabs />
          <Pages />
        </div>
      </div>
    </div>
  );
}

export default App;
