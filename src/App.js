import React, { useLayoutEffect, useEffect, useState } from 'react'
import { Logo } from '@pmndrs/branding'
import styled from 'styled-components'
import Canvas from './Canvas'
import { Gradient } from './lib/Gradient'

import { FaArrowRightToBracket, FaWindows, FaPoo, FaSquareReddit, FaDiscord } from "react-icons/fa6";
import { RiDiscordLine } from "react-icons/ri";
import { GrArchlinux } from "react-icons/gr";
import { PiRedditLogo } from "react-icons/pi";
import { MdOutlineDesktopMac } from "react-icons/md";

export default function Overlay() {
  const [scrollState, setScrollState] = useState(0)
  const [scrollDelta, setScrollDelta] = useState(0)

  const downloadApp = (os) => {
    window.location.href = "https://github.com/DamianRavi/PyreBrowser-win32-x64/releases/download/v1.1.0/Pyre-1.1.0.Setup.exe"
  }

  const textList = [
    {
      title: "PYRE BROWSER",
      desc: "Behold the sign and the very Hallowed Names of God full of power. Obey the power of this our pentacle;",
      diagnosis: "",
    },
    {
      title: "100% ENERGY NEUTRAL",
      desc: "Pyre Browser is energy neutral. We use a small server to host this site and distribute mass amounts of data between clients using P2P infrastructure.",
      diagnosis: "The top 3 tech companies consume more energy than the bottom 170 countries. Google, Microsoft and Amazon use 60 tWh of energy and internet energy consumption accounts for 4% of global energy usage.",
    },
    {
      title: "SERVERLESS HOSTING",
      desc: "Pyre Browser uses P2P mixed with ledger technology to share and distribute all websites seamlessly between clients.",
      diagnosis: "The hosting industry accounts for $623bn in revenue. Ownership of domains is controlled by centralized DNS organizations. There are 200m active websites in the world and their average size is 2mb. We could fit all websites on $3000 worth of storage!",
    },
    {
      title: "PERFECT INDEXING",
      desc: "PyreSearch downloads and scans websites source code directly and applies a transparent algorithm. Creating your own version of google is cheap and easy also.",
      diagnosis: "The internet is difficult to index and companies spend large amounts of money and server space to index and censor the web.",
    },
    {
      title: "CHAT ON EVERY DOMAIN",
      desc: "Each domain has its own decentralized chat room so you never feel alone on the internet and can discuss anything without censorship",
      diagnosis: "Due to a coordinated and intentional effort, the Internet now consists mainly of bot activity and automatically generated content manipulated by algorithmic curation to control the population and minimize organic human activity.",
    },
    {
      title: "WE'RE 44% FASTER THAN FIREFOX",
      desc: "Without any optimization we are faster than most mainstream browsers.",
      diagnosis: "Most mainstream browsers are bloated due to backward compatability compliance and adherance to telemetry and senseless protocols.",
    },
    {
      title: "CHOOSE ANY LAYOUT",
      desc: "You can choose layouts from all the main browsers including Vivaldi and Chrome. Dark Mode coming soon!",
      diagnosis: "Most browsers have made a large push towards reinventing the UI. Even most new browsers have this as their main focus.",
    },
    {
      title: "CREATE YOUR OWN IDENTITY",
      desc: "PyrePass allows you to generate unique identities and decide how much personal info it has. With GaiaWork, GaiaSource, and GaiaLink you can convert it into a storefront, a resume, or a social media profile.",
      diagnosis: "Today vast servers can pinpoint exactly which individuals are capable of analysing which users are capable of dissent. Sensless data accumulates and coagulates",
    },
    {
      title: "DECENTRALIZED MAIL",
      desc: "PyreMail is a decentralized mail service that allows users to put a paywall on receiving messages. Get paid for advertisments and spam",
      diagnosis: "Invasive advertising and subscription models plague the internet and clog our minds with junk. Search terms cling to our lives and make it difficult to perceive changes in the world.",
    },
    {
      title: "SHARED AD REVENUE 100%",
      desc: "PyreAd allows owners to insert adverts with one line of code. All profits from clicks are distibuted fairly to all site owners who opt in for this.",
      diagnosis: "Most advertising plans take a large cut from web owners and give a horribly curated selection to users.",
    },
    {
      title: "TRADE DOMAINS INSTANTLY",
      desc: "Type in any domain in the search bar to purchase it instantly! Alternatively go to the documentation and type in the name.",
      diagnosis: "A few companies control DNS records. Hosting sites parasitically loan out web domains at inflated prices. You never really own a domain.",
    },
    {
      title: "ALL LANGUAGES SUPPORTED",
      desc: "Pyre supports every utf-8 character and gives a warning if the site uses non-roman characters to avoid phishing risks.",
      diagnosis: "The https protocol restricts 98% of utf-8 characters. None of the non-roman languages are supported.",
    },
    {
      title: "TRADE WITH 0% FEES",
      desc: "Trade Currencies, Find Work, Sell Items, with GaiaSource for 0% fees in a decentralized manner. Pay your taxes according to your laws and never worry about external financial drains.",
      diagnosis: "A few major companies like Amazon, Ebay, GooglePlay, control major production lines and all charge 15-30% comission on products sold. There is effectively a global 20% tax that gives money directly to the elite.",
    },
    {
      title: "DOWNLOAD",
      desc: `Pyre Browser is available on Windows (soon Linux and Mac). The code goes open-source in 2027.`,
      diagnosis: "",
      buttons: <button onClick={downloadApp}>WINDOWS VERSION <FaWindows /></button>
    },
    {
      title: "ABOUT US",
      desc: "Pyre is a completely decentralized DAO. We are working on implemented governance protocols and inventive methods of capital distribution. You will find that most products have 0% fees as our primary goal is mass adoption of decentralized infrastructure and a movement away from traditional financial systems.",
      diagnosis: "",
    }
  ]

  useEffect(() => {

  }, [])

  useLayoutEffect(() => {
    const gradient = new Gradient()
    gradient.initGradient('#gradient-canvas')
  }, [])

  const handleWheel = (event) => {
    // event.preventDefault();

    const { deltaY } = event;
    setScrollDelta(prev => {
      var delta = Math.min(Math.max(prev + deltaY, 0), 400 * 14);
      setScrollState(Math.floor(delta / 400))
      return delta;
    })
  };

  return (
    <Main onWheel={handleWheel}>
      <canvas id="gradient-canvas" data-transition-in />
      <Menu>
        <div style={{background: 'url("logo512.png")', backgroundSize: "cover", width: "64px", height: "64px"}}/>
        <div>
          <p><span onClick={() => console.log("DL")}>DOWNLOAD</span> | <span onClick={() => console.log("DL")}>DOCS</span></p>
        </div>
      </Menu>
      <ContentContainer>
        <Content>
          <p>{textList[scrollState].diagnosis}</p>
          <h2>{textList[scrollState].title}</h2>
          <h1 style={{color: (scrollState > 0 && scrollState % 2 == 1 ? "white" : "white")}}>{textList[scrollState].desc}</h1>
          {textList[scrollState].buttons ? textList[scrollState].buttons : null}
          <h3></h3>
        </Content>
      </ContentContainer>
      <CanvasContainer>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Canvas scrollState={scrollState} textList={textList}/>
      </CanvasContainer>
    </Main>
  )
}

const Main = styled.main`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`

const CanvasContainer = styled.div`
  position: relative;
  flex: 1 1 0;
  min-width: 0;
  min-height: 0;
  padding-right: 4em;

  @media only screen and (max-width: 1200px) {
    padding-right: 0;
    order: -1;
  }
`

const ContentContainer = styled.div`
  flex: 1 1 0;
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  margin-top: 14em;
  @media only screen and (max-width: 1200px) {
    margin-top: 0;
  }
`

const Menu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 4em;

  > svg {
    width: 64px;
  }

  > div {
    text-align: right;
    font-size: 0.8rem;
    width: 140px;
    font-weight: bold;
  }

  @media only screen and (max-width: 1200px) {
    padding: 2em;
  }

  @media only screen and (max-width: 600px) {
    > svg {
      width: 44px;
    }
  }
`

const Content = styled.div`
  flex: 1;
  padding-left: 4em;

  h2 {
    color: #f7057e;
    font-size: 4rem;
    margin-top: 1.2em;
    padding: 0;
    line-height: 0;
    margin-bottom: 1.2em;
    white-space: nowrap;
  }

  h3 {
    float: right;
    text-align: right;
    width: 100px;
    font-size: 0.8rem;
  }

  h1 {
    font-size: 3.3rem;
    line-height: 3.8rem;
    font-size: 2.3rem;
    line-height: 2.8rem;
  }

  p {
    font-size: 0.9rem;
    font-family: Rajdhani;
    font-weight: bold;
  }

  button {
    font-size: 32px;
    padding: 4px 14px;
    font-family: Rajdhani;
    color: white;
    background: #ff008f;
    border: 2px solid #770082;
    border-radius: 10px;
    font-weight: 900;
  }

  @media only screen and (max-width: 1200px) {
    width: 100%;
    padding-right: 2em;
    padding-left: 2em;
    h1 {
      font-size: 2.3rem;
      line-height: 2.8rem;
    }

    h2 {
      font-size: 2.3rem;
      line-height: 2.3rem;
      margin-bottom: 0.8rem;
    }
  }

  @media only screen and (max-width: 800px) {
    h1 {
      font-size: 1.6rem;
      line-height: 2rem;
    }

    h2 {
      font-size: 1.6rem;
      line-height: 1.6rem;
    }
  }

  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 1.3rem;
      line-height: 1.8rem;
    }

    h2 {
      font-size: 1.3rem;
      line-height: 1.3rem;
    }
  }
`
