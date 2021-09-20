import "./Header.css";
import "./Sidebar.css";
import "./app.css";
import Searchbar from "./components/Searchbar";
import Header from "./components/Header";
import RecommendedVideos from "./components/RecommendedVideos";
import Sidebar from "./components/Sidebar";
import SidebarRow from "./components/SidebarRow";
import "./Sidebar.css";
import SearchPage from "./components/SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Background from "./components/Background";

function App() {
  //when search search for term in database
  return (
    <div className="app">
      <Background />
      <Router>
        <Header />
        <Searchbar />
        <Switch>
          <Route path="/Search/:searchTerm">
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
