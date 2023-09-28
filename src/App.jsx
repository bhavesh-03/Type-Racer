import "./App.css";
import Header from "./components/Header"
import {texts} from "./data/text"
import Content from ""


function App() {
  const Index = Math.floor(Math.random * texts.length) ;
  const randomtext = texts[Index]

  return (
    <div>
      <Header/>
      <Content text={randomtext}/>
    </div>
  );
}

export default App;
