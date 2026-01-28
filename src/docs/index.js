import { useState } from 'react';
import "../../app/globals.css";
import Web3Docs from './Web3Docs.js'
import GettingStarted from './GettingStarted.js'
import Roadmap from './Roadmap.js'
import Contact from './Contact.js'

export default function Docs(props) {
  const [curTab, setCurTab] = useState(0)

  var tabs = [
    <GettingStarted/>,
    <Web3Docs/>,
    <Roadmap/>,
    <Contact coinbase={props.coinbase}/>
  ]

  return (
    <div style={{ display: 'flex', backgroundColor: "white" }}>
      <div style={{ display: 'flex', background: 'url("noise.png")' }}>
        <div component="main" style={{ flexGrow: 1, p: 3, backgroundColor: "", height: "100vh", overflow: "auto", width: "100vw", padding: 0 }}>
          <div style={{margin: "20px auto", width: "100vw", maxWidth: "960px"}}>
            <div className="titleFlex">
              <div>
                <div style={{textAlign: "center"}}><img src="Logo512.png" className="logo"/></div>
              </div>
              <div className="textFlex">
                <h1 className="title">PYRE DOCS</h1>
                <h3 className="subTitle">Manage Your Domains</h3>
              </div>
            </div>
            <br/>
            <div className="menubar">
              <span onClick={() => setCurTab(0)}>Getting Started</span> • <span onClick={() => setCurTab(1)}>PYREth</span> • <span onClick={() => setCurTab(2)}>Roadmap</span> • <span onClick={() => setCurTab(3)}>Contact</span>
            </div>
          </div>

          <div style={{margin: "20px auto", width: "100vw", maxWidth: "840px"}}>
            {tabs[curTab]}
          </div>

        </div>
      </div>
    </div>
  );
}
