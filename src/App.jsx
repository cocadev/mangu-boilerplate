import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import NFTBalance from "components/NFTBalance";
import { Layout } from "antd";
import Home from "components/Home";
import Dashboard from "components/pages";
import "./style.css";
import "antd/dist/antd.css";
import { Footer } from "components/Footer";
import { HeaderPage } from "components/Header";


const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    color: "#041836",
    marginTop: "130px",
    padding: "10px",
  },
};

const App = () => {

  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } = useMoralis();

  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId");
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
      enableWeb3({ provider: connectorId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);


  return (
    <Layout style={{ height: "100vh", overflow: "auto" }}>
      <Router>
        <HeaderPage />

        <div style={styles.content}>
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/nftBalance">
              <NFTBalance />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/ethereum-boilerplate">
              <Redirect to="/home" />
            </Route>
            <Route path="/nonauthenticated">
              <>Please login using the "Authenticate" button</>
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </Layout>
  );
};

export default App;
