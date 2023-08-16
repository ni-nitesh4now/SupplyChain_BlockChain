
<h1 align="center">
  <br>
  <a><img src="https://github.com/ni-nitesh4now/SupplyChain_BlockChain/blob/main/images/logo.png" width="500"></a>
</h1>
<p align="center">
  <a href="https://github.com/trufflesuite/ganache-cli">
    <img src="https://github.com/ni-nitesh4now/SupplyChain_BlockChain/blob/main/images/ganachetrans.png" width="90">
  </a>
  <a href="https://soliditylang.org/">
    <img src="https://github.com/ni-nitesh4now/SupplyChain_BlockChain/blob/main/images/Solidity.svg" width="80">       
  </a>
  <a href="https://reactjs.org/"><img src="https://github.com/ni-nitesh4now/SupplyChain_BlockChain/blob/main/images/react.png" width="80"></a>
  <a href="https://www.trufflesuite.com/">
    <img src="https://github.com/ni-nitesh4now/SupplyChain_BlockChain/blob/main/images/trufflenew.png" width="50">
  </a>
   &nbsp;&nbsp;&nbsp;
  <a href="https://www.npmjs.com/package/web3">
    <img src="https://github.com/ni-nitesh4now/SupplyChain_BlockChain/blob/main/images/web3.jpg" width="60">
  </a>
  <a href="https://material-ui.com/">
    <img src="https://github.com/ni-nitesh4now/SupplyChain_BlockChain/blob/main/images/mat.png" width="60">       
  </a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://expressjs.com/"><img src="https://github.com/ni-nitesh4now/SupplyChain_BlockChain/blob/main/images/express.svg" width="50"></a>
  &nbsp;&nbsp;
  <a href="https://www.nginx.com/">
    <img src="https://github.com/ni-nitesh4now/SupplyChain_BlockChain/blob/main/images/nginx.png" width="80">
  </a>
</p>

<p align="center">
  <a href="#description">Description</a> •
  <a href="#architecture">Architecture</a> •
  <a href="#flow">Flow</a> •
  <a href="#working">Working</a> •
  <a href="#contract-diagrams">Contract Diagrams</a> •
  <a href="#installation-and-setup">Installation and Setup</a> •
</p>

## Description

Simplifying supply chain management by leveraging blockchain technology to reduce paperwork, enhance transparency, and establish a robust Root of Trust. The Supply-Chain DApp facilitates transparent and secure product transfers from manufacturers to customers through online e-commerce platforms.

## Architecture

The smart contract, coded in Solidity, is compiled, migrated, and deployed using Truffle.js on a local blockchain network powered by Ganache-cli. The frontend employs Web3.js to interact with the smart contract and local blockchain. React.js is used for efficient component and state lifecycle management. Nginx serves as a load balancer, and Express.js handles dynamic routing for user requests.

<p align="center">  
    <img src="https://github.com/ni-nitesh4now/SupplyChain_BlockChain/blob/main/images/architecturefinal.png?raw=true" >  
</p>

## Flow

<p align="center">  
    <img src="https://github.com/ni-nitesh4now/SupplyChain_BlockChain/blob/main/images/flow.png" width="300">  
</p>

## Working

<img src="https://user-images.githubusercontent.com/55195287/124394128-9646a600-dd1b-11eb-8bf1-233320762f1c.png" />
<img src="https://user-images.githubusercontent.com/55195287/124394171-d4dc6080-dd1b-11eb-87b2-127daa32481a.png" />

<p>
  The lifecycle of a product begins with the <strong>manufactureProduct()</strong> call, recording the final product's details into the blockchain. The <strong>productHistory[]</strong> initializes, and the current product data is associated with the manufacturer as the owner.
</p>
<p>
  The product is then available for purchase by a Third Party. Upon purchase, <strong>purchasedByThirdParty()</strong> is invoked, changing ownership to the Third Party and storing the current data in <strong>productHistory[]</strong> to track the product's journey. The manufacturer ships the product (<strong>shipToThirdParty()</strong>), and upon Third Party receipt (<strong>receivedByThirdParty()</strong>), Third Party details are added. Each checkpoint's data is stored in product history, updating the state.
</p>
<p>
  Customers buy the product online from the Third Party. When the customer orders, the Third Party ships the product (<strong>shipByThirdParty()</strong>), and upon receipt by the delivery hub (<strong>receivedByDeliveryHub()</strong>), Delivery Hub details are logged, and data is pushed to <strong>productHistory[]</strong>.
</p>
<p>
  Finally, the Delivery Hub ships the product (<strong>shipByDeliveryHub()</strong>), and upon customer receipt (<strong>receivedByCustomer()</strong>), the final state is pushed to <strong>productHistory[]</strong>.
</p>
<p>
  Each checkpoint function is called after thorough product and <strong>productHistory[]</strong> verification (e.g., Customer confirms receipt only after verifying the product). 
</p>
<p>
  Functions like <strong>fetchProductPart1()</strong>, <strong>fetchProductPart2()</strong>, <strong>fetchProductPart3()</strong>, <strong>fetchProductHistoryLength()</strong>, <strong>fetchProductCount()</strong>, and <strong>fetchProductState()</strong> retrieve product data queried by UID and data type (product or history).
</p>
<p>
  Secure hashes (certificates) are generated using Solidity's <strong>keccak256()</strong> cryptographic function, providing SHA-3 hashes for security. Certificates are generated at each shipping stage.
</p>

## Contract Diagrams

### Activity Diagram

The project's overall flow is depicted below.

<p align="center">
  <a>
    <img src="https://github.com/ni-nitesh4now/SupplyChain_BlockChain/blob/main/images/activitydiagram.png?raw=true" >
  </a>
</p>

<h3> Sequence Diagram</h3>

The flow of functions in the smart contracts.

<p align="center">
  <a>
    <img src="https://github.com/ni-nitesh4now/SupplyChain_BlockChain/blob/main/images/sequencediagram.png?raw=true" width="1000">
  </a>
</p>

<h3> Data Flow Diagram </h3>

The code's comprehensive structure.

<p align="center">
  <a>
    <img src="https://github.com/ni-nitesh4now/SupplyChain_BlockChain/blob/main/images/dataflow.png?raw=true">
  </a>
</p>

## Installation and Setup

Prerequisites: `npm, git, docker (optional)`

Clone the repository

```Bash
git clone https://github.com/Jarvis-AI007/supply-chain.git
```

Install dependencies

```Bash
npm install
```

Install ganache-cli

```Bash
npm install -g ganache-cli
```

Configure ganache-cli for 10 accounts and extend gasLimit to 6721975000 and beyond to ensure sufficient gas for smart contract migration and prototype data flow.

```Bash
ganache-cli --accounts 10 --gasLimit 6721975000
```

For running ganache-cli in Docker, use the following command

```Bash
sudo docker run -d -p 8545:8545 trufflesuite/ganache-cli:latest -h 0.0.0.0 --accounts 10 --gasLimit 6721975000
```

Migrate the contracts

```Bash
truffle migrate --network=develop --reset
```

Navigate to the client folder in a new terminal

```Bash
cd client
```

Install packages from the package.json file

```Bash
npm install
```

Create an .env file using `nano .env` and enter your Google Maps API key. Set the React RPC port to 8545, which matches the ganache-cli default port.

```Bash
REACT_APP_GOOGLE_MAP_API_KEY=*************************
REACT_APP_RPC=http://127.0.0.1:8545/
```

Run the app

```Bash
npm start
```

The app is hosted on port 3000 by default.
