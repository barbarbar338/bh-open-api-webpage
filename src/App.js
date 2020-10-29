import { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import FEATURES from "./features";
import Landing from "./pages/Landing";
import Features from "./pages/Features";
import Feature from "./pages/Feature";
import NotFound from "./pages/NotFound";

export default class App extends Component {
    handleFeatureRedirects() {
        return FEATURES.map((featureData, i) => {
            return (
                <Route key={i} path={featureData.path}>
                    <Feature {...featureData} />
                </Route>
            );
        });
    }
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
                        <Route path="/features">
                            <Features />
                        </Route>
                        {this.handleFeatureRedirects()}
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}
