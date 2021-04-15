import React, { ReactElement } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./views/Nav/Nav";
import LandingPage from "./views/LandingPage/LandingPage";
import PlayersSearchPage from "./views/PlayersSearchPage/PlayersSearchPage";
import LoginPage from "./views/LoginPage/LoginPage";
import MyPage from "./views/MyPage/MyPage";
import BoardPage from "./views/BoardPage/BoardPage";
import BoardReadPage from "./views/BoardReadPage/BoardReadPage";
import BoardWritePage from "./views/BoardWritePage/BoardWritePage";
import Footer from "./views/Footer/Footer";
import NotFoundPage from "./views/NotFoundPage/NotFoundPage";
import Loading from "./utils/Loading";
import Popup from "./utils/Popup";
import Toast from "./utils/Toast";

function App(): ReactElement {
  return (
    <Router>
      <Nav />
      <div className="contents">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/players" component={PlayersSearchPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/mypage" component={MyPage} />
          <Route exact path="/board" component={BoardPage} />
          <Route exact path="/board/read" component={BoardReadPage} />
          <Route exact path="/board/write" component={BoardWritePage} />
          <Route exact path="/loading" component={Loading} />
          <Route exact path="/popup" component={Popup} />
          <Route exact path="/toast" component={Toast} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
