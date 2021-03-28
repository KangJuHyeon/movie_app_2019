import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home"
import About from "./routes/About"
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

function App(){
  return(
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  )
}

export default App;

// exact가 뭐야?  ==> exact는 이거 아니면 렌더링 안한다는 뜻이다.
// 나의 url이 "/"일대만 home을 렌더링 해준다.
// 만약 /something이라면 무시 당한 다는 거지
