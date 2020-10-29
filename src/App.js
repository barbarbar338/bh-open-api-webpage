import { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";

export default class App extends Component {
    state = {};
    render() {
        return (
            <div id="app">
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Landing />
                        </Route>
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}
