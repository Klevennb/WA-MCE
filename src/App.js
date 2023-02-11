import { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { connect } from "react-redux";
import { UserLibraryPage } from "./pages/UserLibraryPage/index";
import {BrowsePage } from './pages/BrowsePage/index'
import {WritePage} from './pages/WritePage/index';
import LandingPage from "./pages/LandingPage/LandingPage";
import {NavBar} from './components/NavBar/NavBar';
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";


// import ProfilePage from './pages/ProfilePage/ProfilePage';
// import AboutPage from './pages/AboutPage/AboutPage';
// import EditEntryPage from './pages/EditEntryPage/EditEntryPage';

// import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_USER" });
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Redirect exact from="/" to="/home" />
            <ProtectedRoute exact path="/home" component={LandingPage} />
            <ProtectedRoute exact path="/write" component={WritePage} />
                        <ProtectedRoute exact path="/write/:entryId" component={WritePage} />

{/* {/* <ProtectedRoute exact path="/profile" component={ProfilePage} /> */}
<ProtectedRoute exact path="/library" component={UserLibraryPage} />
<ProtectedRoute exact path="/browse" component={BrowsePage} />
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect()(App);
