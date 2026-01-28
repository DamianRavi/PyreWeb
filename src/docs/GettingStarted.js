import * as React from 'react';
import { FaWarehouse, FaRegMoneyBill1, FaRegComments, FaBuildingUser } from "react-icons/fa6";
import Toast from './Toast.js';
import Web3 from 'web3'
//const pricing = [ 0, 80000, 40000, 20000, 13350, 11675, 8350, 4000, 2000, 1000, 500, 250, 120 ];
//const priceList = [ 24000, 12000, 6000, 4000, 3500, 2500, 1200, 600, 300, 150, 75, 35 ]
const pricing = [0, 140000, 106000, 70600, 47000, 47000, 47000, 23500, 14700, 7350, 3500, 1200, 90];
const priceList = [ 24000, 18000, 12000, 8000, 8000, 8000, 4000, 2500, 1250, 600, 200, 15 ];

const pyreAddress = "0x3662229D6947aa2ab25e6b67B6daDF95A1F0FdC7"//"0xc70f19CEA16D9ee84764fa091d661cB01673A696";
const pyreAbi = [{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_cosignatory","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"domainName","type":"string"},{"indexed":false,"internalType":"bytes32","name":"hashcode","type":"bytes32"}],"name":"HashChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"domainName","type":"string"},{"indexed":false,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnerChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"domainName","type":"string"},{"indexed":false,"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"PriceChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"domainName","type":"string"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"hashcode","type":"bytes32"}],"name":"Purchase","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"domainName","type":"string"},{"indexed":false,"internalType":"string[5]","name":"newTags","type":"string[5]"}],"name":"TagChanged","type":"event"},{"inputs":[{"internalType":"string","name":"domainName","type":"string"},{"internalType":"bytes32","name":"hashcode","type":"bytes32"}],"name":"buyDomain","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"domainName","type":"string"},{"internalType":"addresspayable","name":"newOwner","type":"address"}],"name":"changeDomainOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"newPrice","type":"uint256[]"}],"name":"changeDomainPricing","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"domainName","type":"string"},{"internalType":"bytes32","name":"hashcode","type":"bytes32"}],"name":"changeHash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"changeOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"domainName","type":"string"},{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"changePrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"changeTagPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"domainName","type":"string"},{"internalType":"string[5]","name":"newTags","type":"string[5]"}],"name":"changeTags","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"}],"name":"getDomainList","outputs":[{"components":[{"internalType":"addresspayable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"bytes32","name":"hashcode","type":"bytes32"},{"internalType":"string[5]","name":"tags","type":"string[5]"}],"internalType":"structPyreDNS.PNS","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"addresspayable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pricing","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"pyreDomainList","outputs":[{"internalType":"addresspayable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"bytes32","name":"hashcode","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tagPricing","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]


export default function GettingStarted() {
  const [newUrl, setNewUrl] = React.useState("cheapestsite")
  const [web3, setWeb3] = React.useState(null)
  const [account, setAccount] = React.useState(null)
  const [alert, setAlert] = React.useState(null)

  const initWeb3 = async () => {
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      try {
        // Request account access if needed
        await window.ethereum.enable();
        //console.log(await web3Instance.eth.getAccounts())
        setAccount((await web3Instance.eth.getAccounts())[0])
        // Accounts now exposed
        setWeb3(web3Instance);
      } catch (error) {
        console.error(error);
        setAlert(["error", "Web3 Declined"])
      }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      const web3Instance = window.web3;
      setWeb3(web3Instance);
    }
    // Fallback to localhost; use dev console port by default...
    else {
      setAlert(["error", "No Web3 Detected"])
    }
  }

  const purchaseSite = async () => {

    if(!web3){
      await initWeb3();
      setAlert(["success", "Connected - Click Purchase Again"])
      return;
    }

    if(newUrl.length > 0){
      var contract = new web3.eth.Contract(pyreAbi, pyreAddress);
      var domain = await contract.methods.pyreDomainList(newUrl).call()
      var pricing;

      if(domain.owner == "0x0000000000000000000000000000000000000000"){
        pricing = (await contract.methods.pricing(Math.min(newUrl.length - 1, 11)).call()).toString()
      }
      else{
        pricing = domain.price.toString()
      }
      
      var res = await contract.methods.buyDomain(newUrl, "0x0000000000000000000000000000000000000000000000000000000000000000").send({value: pricing, from: account}).then((e) => {
        setAlert(["success", "Domain Purchased"])

      })
      .catch((err) => {
        setAlert(["error", "Error Buying Domain"])
      })

    }
    else{
      setAlert(["error", "Empty Domain"])
    }
  }

  return (
    <div>

      <br/><br/>
      <div className="cardBox">
      <h3 className="cardTitle">WHAT IS PYRE?</h3>
      <p style={{padding: "0px 8px"}}>
        The Pyre Network is a completely decentralized P2P browser that allows you to host and share websites for free with complete ownership of your domain and no DNS fees. You no longer need to pay annual fees to sites like GoDaddy or Namecheap and can put the domain on sale for others to buy within their browser!
      </p>
      <br/>
      <div style={{display: "flex"}}>
        <div style={{flex: 1, paddingLeft: "8px"}}>
          <p style={{marginTop: "0"}}>
            The sites are shared between users using P2P Swarm infrastructure and blockchain technology so you never need to pay for hosting either. Likely if you are using a database then you will need to use a server like AWS or Vultr but we hope to solve this soon with PyreSwarm - a decentralized swarm database that pays you simply for keeping your browser open and sharing data.
          </p>
          <br/>
          <p>
            With the integrated PyrePass wallet it is likely that you will not need to store userdata as it acts similarly to a Google account across sites. Ecommerce is integrated through PyrePass and has 0% fees. Read up on integrating payments into your site.
          </p>
        </div>

        <div style={{margin: "0px 10px 10px 20px", textAlign: "center", width: "200px", boxShadow: "rgb(109, 109, 109) 0px 0px 5px", background: "white", borderRadius: "4px", overflow: "hidden"}}>
          <div style={{background: "rgb(0, 46, 91)", margin: 0, padding: "4px", display: "flex"}}>
            <img src="Logo256.png" style={{width: "28px", height: "28px", marginRight: "12px"}}/>
            <h3 style={{fontFamily: "monospace", color: "white", margin: 0, fontSize: "20px"}}>Pyre DNS</h3>
          </div>
          <div style={{padding: "8px 20px"}}>
            <h3 style={{margin: 0, fontSize: "15px"}}>Check how much your domain costs</h3>
            <input style={{textAlign: "center"}} placeholder="Enter URL" value={newUrl} onChange={(e) => setNewUrl(e.target.value)}/>
            <br/>
            <h3 style={{margin: 0}}>{pricing[newUrl.length]} GLMR</h3>
            <h4 style={{margin: 0}}>${(pricing[newUrl.length] * 0.17).toFixed(2)}</h4>
            <button onClick={purchaseSite} className="purchaseButton">Purchase</button>
          </div>
        </div>

      </div>
    </div>


      <div className="cardBox">
        <h3 className="cardTitle">Setting Up A Site</h3>
        <div style={{padding: "0px 8px"}}>
          Pyre Browser supports all major frameworks and has several templates that can be easily modified. The easiest method to get a site running is as follows:
          <br/><br/>
          1. Download <a href="https://nodejs.org">NodeJS</a>
          <br/><br/>
          2. Run Command: <code style={{background: "aliceblue"}}>npx create-react-app ./my-pyre-site</code>
          <br/><br/>
          3. Run Command: <code style={{background: "aliceblue"}}>cd ./my-pyre-site</code>
          <br/><br/>
          4. Run Command: <code style={{background: "aliceblue"}}>npm run build</code>
          <br/><br/>
          5. Search for the domain you want in the address bar, upload the build folder and then purchase the site. We automatically host new sites for a few weeks for others to seed.
          <br/><br/>
        </div>
      </div>

      <div className="cardBox">
        <h3 className="cardTitle">Site SEO</h3>
        <div style={{padding: "0px 8px"}}>
          Pyre Indexer is a completely unbiased and impartial search engine that uses a fair and OpenSource algorithm. You can add up to 5 metatags to your domain to improve search functionality and you can purchase ad space on search terms and for the main homepage. We are adding PyreAd - a decentralized ad network that shares profit with users soon.
          <br/><br/>
        </div>
      </div>

      <div className="cardBox">
        <h3 className="cardTitle">Updating A Site</h3>
        <div style={{padding: "0px 8px"}}>
          Updating a new site costs half a cent as we have to update our DNS registry on the blockchain. It is fairly easy though. Just go to <a href="pyre://home/dns?domain=YOURWEBSITE">pyre://home/dns?domain=YOUR_WEBSITE</a> and upload the new folder in the panel.
          <br/><br/>
        </div>
      </div>

      <div className="cardBox">
        <h3 className="cardTitle">Advertising</h3>
        <div style={{padding: "0px 8px"}}>
          To advertise on your site just add:
          <br/><br/>
          <code style={{background: "aliceblue"}}>&lt;div style=&#123;&#123;width: "250px", height: "250px"&#125;&#125; className="PyreAd"&gt;&lt;/div&gt;</code>
          <br/><br/>
          to your site. It will automatically update with new ads and you will receive revenue at the end of each month. We divide total ad revenue by the amount of unique clicks and pay proportionately with no fees!
          <br/><br/>
          We support the following ad dimensions: 250x250, 300x250, 336x280, 468x60, 160x600
          <br/><br/>
        </div>
      </div>

      <br/><br/>

      {/*<h3 className="cardTitle">Templates</h3>
      <p style={{color: "grey"}}>
        We have several templates built with react and are hoping to expand soon. Each site has a config page where you can set the layout and details. We hope to create a Wix style site builder soon:
      </p>

      <div style={{display: "flex", gap: "30px", textAlign: "center", justifyContent: "center"}}>
        <div className="task" style={{height: "100px", width: "120px"}}>
          <div className="card" style={{padding: "20px", cursor: "pointer"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 640 512"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>
            <br/>Ecommerce
          </div>
        </div>
        <div className="task" style={{height: "100px", width: "120px"}}>
          <div className="card" style={{padding: "20px", cursor: "pointer"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 640 512"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>
            <br/>Blog
          </div>
        </div>
        <div className="task" style={{height: "100px", width: "120px"}}>
          <div className="card" style={{padding: "20px", cursor: "pointer"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 640 512"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>
            <br/>Business
          </div>
        </div>
        <div className="task" style={{height: "100px", width: "120px"}}>
          <div className="card" style={{padding: "20px", cursor: "pointer"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 640 512"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>
            <br/>Logistics
          </div>
        </div>
      </div>*/}
      <Toast alert={alert}/>
    </div>
  );
}
