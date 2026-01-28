export const codeBlocks = {
  "connect":
`import { useState, useEffect } from 'react';

function App() {
  const [coinbase, setCoinbase] = useState(null)

  useEffect(() => {
    setCoinbase( await window.ethereum?.connect() );
  }, [])

  return (
    <div className="App">
      <h3>{coinbase && "You Are Now Connected To PyreWeb3"}</h3>
    </div>
  );
}

export default App;`,

"onChange":
`import { useState, useEffect } from 'react';

function App() {
  const [coinbase, setCoinbase] = useState(null)

  useEffect(() => {
    setCoinbase(await window.ethereum?.connect());
    window.ethererum?.onChange(async () => {
      console.log("Account has changed!")
      var newAddress = await window.ethereum.connect()
      if(newAddress){
        setCoinbase(newAddress);
      }
    })
  }, [])

  return (
    <div className="App">
      <h3>{coinbase && "You Are Now Connected To PyreWeb3 As " + coinbase}</h3>
    </div>
  );
}

export default App;`,

"sendMail":
`import { useState, useEffect } from 'react';

function App() {
  const [coinbase, setCoinbase] = useState(null)

  useEffect(() => {
    setCoinbase( await window.ethereum?.connect() );
  }, [])

  const sendMail = (event) => {
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries((formData).entries());

    formJson.message = await window.ethereum.pyre.encrypt(formJson.to, formJson.message); //Try to always encrypt messages for your users
    window.ethereum.pyre.sendMail(formJson.to, formJson.title, formJson.message, {from: coinbase, value: formJson.value})
  }

  return (
    <div className="App">
      <h3>Send A Mail</h3>
      {coinbase &&
        <form onSubmit={sendMail}>
          <input name="to"/>
          <input name="title"/>
          <input name="message"/>
          <input name="value"/>
          <button type="submit">Send Mail</button>
        </form>
      }
    </div>
  );
}

export default App;`,

"sendMailToken":
`import { useState, useEffect } from 'react';

function App() {
  const [coinbase, setCoinbase] = useState(null)

  useEffect(() => {
    setCoinbase( await window.ethereum?.connect() );
  }, [])

  const sendMail = (event) => {
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries((formData).entries());
    formJson.message = await window.ethereum.pyre.encrypt(formJson.to, formJson.message); //Try to always encrypt messages for your users
    window.ethereum.pyre.sendMailToken(formJson.to, formJson.title, formJson.message, formJson.token, formJson.value, {from: coinbase, value: 0})
  }

  return (
    <div className="App">
      <h3>Send A Mail</h3>
      {coinbase &&
        <form onSubmit={sendMail}>
          <input name="to"/>
          <input name="title"/>
          <input name="message"/>
          <input name="token"/>
          <input name="value"/>
          <button type="submit">Send Mail</button>
        </form>
      }
    </div>
  );
}

export default App;`,

"pay":
`import { useState, useEffect } from 'react';

function App() {
  const [coinbase, setCoinbase] = useState(null)
  const productID = "0x00001234"

  useEffect(() => {
    setCoinbase( await window.ethereum?.connect() );
  }, [])

  const buyProduct = (event) => {
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries((formData).entries());

    window.ethereum.pyre.pay(productID, formJson.message, {from: coinbase, value: "0.01 ETH"})
  }

  return (
    <div className="App">
      <h3>Pay For Product</h3>
      {coinbase &&
        <form onSubmit={sendMail}>
          <input name="message" placeholder="Enter your postage details..."/>
          <button type="submit">Pay 0.01 ETH</button>
        </form>
      }
    </div>
  );
}

export default App;`,

"payToken":
`import { useState, useEffect } from 'react';

function App() {
  const [coinbase, setCoinbase] = useState(null)
  const productID = "0x00001234"
  const USDT = "0x0000000000000000000000000000000000000000"

  useEffect(() => {
    setCoinbase( await window.ethereum?.connect() );
  }, [])

  const buyProduct = (event) => {
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries((formData).entries());

    window.ethereum.pyre.payToken(productID, formJson.message, USDT, "10000000000000000", {from: coinbase, value: 0})
  }

  return (
    <div className="App">
      <h3>Pay For Product</h3>
      {coinbase &&
        <form onSubmit={sendMail}>
          <div name="productID" style={{display: "none"}}>0x1234</div>
          <input name="message"/>
          <button type="submit">Pay 0.01 USDT</button>
        </form>
      }
    </div>
  );
}

export default App;`,

"swap":
`import { useState, useEffect } from 'react';
//COME BACK TO THIS
function App() {
  const [coinbase, setCoinbase] = useState(null)

  useEffect(() => {
    setCoinbase( await window.ethereum?.connect() );
  }, [])

  const buyProduct = (event) => {
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries((formData).entries());
    const title = "Example Company - Product Bought!"
    window.ethereum.pyre.pay(formJson.productID, formJson.message, formJson.token, formJson.value, {from: coinbase, value: 0})
  }

  return (
    <div className="App">
      <h3>Pay For Product</h3>
      {coinbase &&
        <form onSubmit={sendMail}>
          <div name="productID" style={{display: "none"}}>0x1234</div>
          <input name="to"/>
          <input name="message"/>
          <button type="submit">Pay 0.01 ETH</button>
        </form>
      }
    </div>
  );
}

export default App;`,

"stake":
`import { useState, useEffect } from 'react';
//COME BACK TO THIS
function App() {
  const [coinbase, setCoinbase] = useState(null)

  useEffect(() => {
    setCoinbase( await window.ethereum?.connect() );
  }, [])

  const buyProduct = (event) => {
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries((formData).entries());
    const title = "Example Company - Product Bought!"
    window.ethereum.pyre.pay(formJson.productID, formJson.message, formJson.token, formJson.value, {from: coinbase, value: 0})
  }

  return (
    <div className="App">
      <h3>Pay For Product</h3>
      {coinbase &&
        <form onSubmit={sendMail}>
          <div name="productID" style={{display: "none"}}>0x1234</div>
          <input name="to"/>
          <input name="message"/>
          <button type="submit">Pay 0.01 ETH</button>
        </form>
      }
    </div>
  );
}

export default App;`,

"encrypt":
`import { useState, useEffect } from 'react';

function App() {
  const [coinbase, setCoinbase] = useState(null)
  const [encryptedText, setEncryptedText] = useState("")

  useEffect(() => {
    setCoinbase( await window.ethereum?.connect() );
  }, [])

  const sendMail = (event) => {
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries((formData).entries());
    formJson.message = await window.ethereum.pyre.encrypt(coinbase, formJson.message);
    setEncryptedText(formJson.message)
  }

  return (
    <div className="App">
      <h3>Pay For Product</h3>
      {coinbase &&
        <form onSubmit={sendMail}>
          <input name="message"/>
          <button type="submit">Encrypt</button>
          <input value={encryptedText}/>
        </form>
      }
    </div>
  );
}

export default App;`,

"decrypt":
`import { useState, useEffect } from 'react';

function App() {
  const [coinbase, setCoinbase] = useState(null)
  const [encryptedText, setEncryptedText] = useState("")
  const [decryptedText, setDecryptedText] = useState("")

  useEffect(() => {
    setCoinbase( await window.ethereum?.connect() );
  }, [])

  const encrypt = (event) => {
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries((formData).entries());
    formJson.message = await window.ethereum.pyre.encrypt(coinbase, formJson.message);
    setEncryptedText(formJson.message)
  }

  const decrypt = () => {
    var message = await window.ethereum.pyre.decrypt(formJson.message);
    setDecryptedText(message)
  }

  return (
    <div className="App">
      <h3>Pay For Product</h3>
      {coinbase &&
        <form onSubmit={encrypt}>
          <input name="message"/>
          <button type="submit">Encrypt</button>
          <input value={encryptedText}/>
          <button type="submit">Encrypt</button>
          <input value={decryptedText}/>
        </form>
      }
    </div>
  );
}

export default App;`,

}
