import { useState } from 'react';
import { GiAnarchy } from "react-icons/gi";
import { FaSquareFacebook, FaFacebookF, FaTwitter, FaMastodon, FaDiscord, FaRedditAlien, FaGithub } from "react-icons/fa6";
import { TbBrandMatrix } from "react-icons/tb";
import { FaTelegramPlane } from "react-icons/fa";

export default function Contact(props) {
  const toAddress = "0x80E66d5AAf26ecF52b86141E1C2BD1D9A6E7a44D"; //PYRE ADMIN ADDRESS
  const [message, setMessage] = useState("")


  const sendMail = async () => {
    await fetch('/api/sendMail', {
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}, method: "POST",
        body: JSON.stringify({message: message})
    })
  }

  return (
    <div style={{ display: 'flex' }}>
      <div className="cardBox" style={{ maxHeight: 'max-content', maxWidth: '100%', margin: 'auto', width: "400px", marginTop: "4px"}}>
        <h3 className="cardTitle">Contact Us</h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))', gap: 1.5 }}>
          <div style={{ gridColumn: '1/-1' }}>
            <p level="body-xs" style={{textAlign: "justify", lineHeight: "18px", margin: "8px"}}>
              Pyre is a completely decentralized DAO. We are working on implemented governance protocols and inventive methods of capital distribution.
              You will find that most products have 0% fees as our primary goal is mass adoption of decentralized infrastructure and a movement away from
              traditional financial systems.
            </p>
            <div style={{margin: "auto", fontSize: "28px", margin: "5px"}}></div>
            <div style={{margin: "auto", fontSize: "28px", marginBottom: "-5px", textAlign: "center"}}><GiAnarchy /></div>
          </div>

          <div style={{ gridColumn: '1/-1' }}>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter message here..." style={{width: "100%", height: "92px", margin: "10px 0px"}}/>
          </div>

          <div style={{ gridColumn: '1/-1', padding: 0, textAlign: "center", marginBottom: "11px" }}>
            <button className="purchaseButton" onClick={sendMail}>Send</button>
          </div>
        </div>
        <hr />
        <div orientation="horizontal" style={{fontSize: "24px", margin: "auto", padding: "12px 0px 4px 0px", display: "flex", justifyContent: "center", gap: "8px"}}>
          {/*<a style={{color: "grey", fontSize: "28px"}} href="https://mastodon.com" target="_blank"><FaMastodon className="gradientIcon"/></a>*/}
          <a style={{color: "grey", fontSize: "28px"}} href="https://github.com/DamianRavi/PyreBrowser" target="_blank"><FaGithub className="gradientIcon"/></a>
          <a style={{color: "grey", fontSize: "28px"}} href="https://reddit.com/r/pyre_browser" target="_blank"><FaRedditAlien className="gradientIcon"/></a>
          <a style={{color: "grey", fontSize: "28px"}} href="https://x.com/PyreBrowser" target="_blank"><FaTwitter className="gradientIcon"/></a>
          {/*<a style={{color: "grey", fontSize: "28px"}} href="https://telegram.com" target="_blank"><FaTelegramPlane className="gradientIcon"/></a>*/}
          <a style={{color: "grey", fontSize: "28px"}} href="https://discord.gg/y8zuh3UD" target="_blank"><FaDiscord className="gradientIcon"/></a>
        </div>
      </div>
    </div>
  );
}
