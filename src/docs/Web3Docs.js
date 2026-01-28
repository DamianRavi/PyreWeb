import * as React from 'react';

import { codeBlocks } from './func.js'
import { SiPolkadot, SiPolygon, SiEthereum } from "react-icons/si";

const createCodeBlock = (code) => {
  var newCode = []
  //console.log(code?.split(/(?:\r\n|\r|\n)/g))
  const purp = ["function", "import", "from", "const", "export", "default", "return", "default", "await", "null"]
  const green = ["connect", "setCoinbase", "useEffect", "useState", "App", "coinbase"]
  const red = ["div"]

  code?.split(/(?:\r\n|\r|\n)/g).forEach((line, index) => {
    console.log(line)
    newCode.push(<pre style={{margin: 0}}><span className="ital">{index + 1}  </span>{line}</pre>)
  })

/*
  var newCode = code?.replaceAll("function", `<span className="purp">function</span>`);
  newCode = newCode?.replaceAll("import", `<span className="purp">import</span>`);
  newCode = newCode?.replaceAll("from", `<span className="purp">from</span>`);
  newCode = newCode?.replaceAll("const", `<span className="purp">const</span>`);
  newCode = newCode?.replaceAll("export", `<span className="purp">export</span>`);
  newCode = newCode?.replaceAll("default", `<span className="purp">default</span>`);
  newCode = newCode?.replaceAll("return", `<span className="purp">return</span>`);
  newCode = newCode?.replaceAll("connect", `<span className="green">connect</span>`);

  newCode = newCode?.replaceAll("await", `<span className="purp">await</span>`);
  newCode = newCode?.replaceAll("setCoinbase", `<span className="green">setCoinbase</span>`);
  newCode = newCode?.replaceAll("useEffect", `<span className="green">useEffect</span>`);
  newCode = newCode?.replaceAll("null", `<span className="purp">null</span>`);
  newCode = newCode?.replaceAll("useState", `<span className="green">useState</span>`);
  newCode = newCode?.replaceAll("App", `<span className="green">App</span>`);
  newCode = newCode?.replaceAll("coinbase", `<span className="green">coinbase</span>`);

  newCode = newCode?.replace(/(?:\r\n|\r|\n)/g, '<br>')
*/
  return(<div className="codeBlock">{newCode}</div>)
}

const pyreFunctions = {
  connect: {
    title: "CONNECT",
    code: "window.pyre.connect()",
    description: "Sends a request to PyrePass to approve the website for communication and transactions. Returns the connected address or null if the request was denied by the user.",
    inputs: "",
    outputs: "Address"
  },
  onChange: {
    title: "ON CHANGE",
    code: "window.pyre.onChange()",
    description: "Detects a change in default address from Pyre Pass.",
    inputs: "",
    outputs: "Address"
  },
  sendMail: {
    title: "SEND MAIL",
    code: "window.pyre.sendMail()",
    description: "Sends a request to PyrePass to generate and send a message to a user.",
    inputs: "Address to, String title, String message",
    outputs: "Bool"
  },
  sendMailToken: {
    title: "SEND MAIL WITH TOKEN",
    code: "window.pyre.sendMailToken()",
    description: "Sends a request to PyrePass to generate and send a message to a user with attached token (good for airdrops!).",
    inputs: "Address to, String title, String message, Address token, Uint256 value",
    outputs: "Bool"
  },
  pay: {
    title: "PAY",
    code: "window.pyre.pay()",
    description: "Sends a request to PyrePass to pay for a product or service. An email is sent to the company/individual with purchase data.",
    inputs: "Address to, String title, String message, Uint256 value",
    outputs: "Bool"
  },
  payToken: {
    title: "PAY WITH TOKEN",
    code: "window.pyre.payToken()",
    description: "Sends a request to PyrePass to pay for a product or service with tokens. An email is sent to the company/individual with purchase data.",
    inputs: "Address to, String title, String message, Address token,Uint256 value",
    outputs: "Bool"
  },
  swap: {
    title: "SWAP",
    code: "window.pyre.swap()",
    description: "Sends a request to PyrePass to swap tokens through a AMM Dex.",
    inputs: "Address tokenA, Uint256 valueA, Address TokenB, Uint256 minValueB",
    outputs: "Bool"
  },
  stake: {
    title: "STAKE",
    code: "window.pyre.stake()",
    description: "Sends a request to PyrePass to approve staking of Polkadot tokens",
    inputs: "Uint256 amount",
    outputs: "Bool"
  },
  encrypt: {
    title: "ENCRYPT",
    code: "window.pyre.encrypt()",
    description: "Sends a request to PyrePass to encrypt text data for another address.",
    inputs: "Address to, String message",
    outputs: "Address"
  },
  decrypt: {
    title: "DECRYPT",
    code: "window.pyre.decrypt()",
    description: "Sends a request to PyrePass to decrypt text data.",
    inputs: "String message",
    outputs: "String"
  },
  sendCrossChain: {
    title: "SEND CROSS CHAIN",
    code: "window.pyre.sendCrossChain()",
    description: "Sends a request to PyrePass to transfer currencies across selected chains.",
    inputs: "Address to, String chain",
    outputs: "Bool"
  },
  getExchangeRate: {
    title: "GET EXCHANGE RATE",
    code: "window.pyre.getExchangeRate()",
    description: "Sends a request to PyrePass to get the exchange rate for 2 currencies",
    inputs: "String chainA, String chainB",
    outputs: "Address"
  }
}


export default function Web3Docs() {
  return (
    <div>

      <br/><br/>
      <div className="cardBox">
        <h3 className="cardTitle">Seamlessly Connect To Multiple Chains</h3>
        <div style={{padding: "0px 8px"}}>
          Pyre Ethereum includes all functions of Web3.js and also several new functions for easy cross-chain transactions, decentralized mailing, staking and encryption.
          It also includes a custom Pay function to integrate 0% fee ecommerce on any site, allowing users to pay you instantly for products through the browser.
          <br/><br/>
          The default chain is Moonbeam on the Polkadot Network. We have chosen Moonbeam as it is cheap, has fast transactions, and is the best chain currently for cross-chain compatability.
          This also allows sending funds cross-chain to be as easy as:
          <br/><br/>
          <div style={{textAlign: "center", fontWeight: "bold", fontSize: "14px"}}>
            <pre>pyre.sendX("0x0000...0000", "1 Ether", "BSC")</pre>
          </div>
          <br/><br/>
          ...Which simply converts 1 unit of the current currency you are connected to on PyrePass to BSC at the current exchange rate and then sends to address 0x0000...0000.
          <br/><br/>
          <i>(Ethers.js support coming soon)</i>
        </div>
      </div>

      {
        Object.keys(pyreFunctions).map((e, i) => {
          return(
            <div className="cardBox">
              <h3 className="cardTitle">{pyreFunctions[e].title}</h3>
              <div>
                <div style={{padding: "0px 8px"}}>
                  <div style={{textAlign: "center", fontWeight: "bold", fontSize: "24px"}}>
                    <pre>{pyreFunctions[e].code}</pre>
                  </div>
                  <span style={{fontSize: "16px", lineHeight: "20px"}}>{pyreFunctions[e].description}</span>
                  <br/><br/>
                  <i><b>Inputs:</b> {pyreFunctions[e].inputs}</i>
                  <br/>
                  <i><b>Returns:</b> {pyreFunctions[e].outputs}</i>
                  <br/><br/>
                </div>
                {createCodeBlock(codeBlocks[e])}
              </div>
            </div>
          )
        })
      }
    </div>
  );
}
