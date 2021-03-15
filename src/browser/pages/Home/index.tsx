import React from 'react';
import logo from './react.svg';
import { Link } from "react-router-dom";
import './Home.css';


import PageHeader from "../../components/control/Header";

class Home extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="Home">
        <PageHeader>
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Home</h2>
        </PageHeader>
          
    
        <p className="Home-intro">
          To get started, edit <code>src/App.tsx</code> or{" "}
          <code>src/Home.tsx</code> and save to reload.
        </p>
        <ul className="Home-resources">
          <Link to={'/workbench'}>Workbench</Link>
        </ul>
      </div>
    );
  }
}

export default Home;
