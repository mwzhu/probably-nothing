// import MetaMaskOnboarding from '/node_modules/@metamask/onboarding'
//1. connect metamask to site, get user's address
/* global Web3, web3, ethereum */

var account = null;
var contract = null;
const ABI = [
  {
     "inputs":[
        {
           "internalType":"string",
           "name":"_initBaseURI",
           "type":"string"
        }
     ],
     "stateMutability":"nonpayable",
     "type":"constructor"
  },
  {
     "anonymous":false,
     "inputs":[
        {
           "indexed":true,
           "internalType":"address",
           "name":"owner",
           "type":"address"
        },
        {
           "indexed":true,
           "internalType":"address",
           "name":"approved",
           "type":"address"
        },
        {
           "indexed":true,
           "internalType":"uint256",
           "name":"tokenId",
           "type":"uint256"
        }
     ],
     "name":"Approval",
     "type":"event"
  },
  {
     "anonymous":false,
     "inputs":[
        {
           "indexed":true,
           "internalType":"address",
           "name":"owner",
           "type":"address"
        },
        {
           "indexed":true,
           "internalType":"address",
           "name":"operator",
           "type":"address"
        },
        {
           "indexed":false,
           "internalType":"bool",
           "name":"approved",
           "type":"bool"
        }
     ],
     "name":"ApprovalForAll",
     "type":"event"
  },
  {
     "anonymous":false,
     "inputs":[
        {
           "indexed":true,
           "internalType":"address",
           "name":"previousOwner",
           "type":"address"
        },
        {
           "indexed":true,
           "internalType":"address",
           "name":"newOwner",
           "type":"address"
        }
     ],
     "name":"OwnershipTransferred",
     "type":"event"
  },
  {
     "anonymous":false,
     "inputs":[
        {
           "indexed":true,
           "internalType":"address",
           "name":"from",
           "type":"address"
        },
        {
           "indexed":true,
           "internalType":"address",
           "name":"to",
           "type":"address"
        },
        {
           "indexed":true,
           "internalType":"uint256",
           "name":"tokenId",
           "type":"uint256"
        }
     ],
     "name":"Transfer",
     "type":"event"
  },
  {
     "inputs":[
        {
           "internalType":"address",
           "name":"to",
           "type":"address"
        },
        {
           "internalType":"uint256",
           "name":"tokenId",
           "type":"uint256"
        }
     ],
     "name":"approve",
     "outputs":[
        
     ],
     "stateMutability":"nonpayable",
     "type":"function"
  },
  {
     "inputs":[
        {
           "internalType":"address",
           "name":"owner",
           "type":"address"
        }
     ],
     "name":"balanceOf",
     "outputs":[
        {
           "internalType":"uint256",
           "name":"",
           "type":"uint256"
        }
     ],
     "stateMutability":"view",
     "type":"function"
  },
  {
     "inputs":[
        
     ],
     "name":"baseURI",
     "outputs":[
        {
           "internalType":"string",
           "name":"",
           "type":"string"
        }
     ],
     "stateMutability":"view",
     "type":"function"
  },
  {
     "inputs":[
        
     ],
     "name":"cost",
     "outputs":[
        {
           "internalType":"uint256",
           "name":"",
           "type":"uint256"
        }
     ],
     "stateMutability":"view",
     "type":"function"
  },
  {
     "inputs":[
        {
           "internalType":"uint256",
           "name":"tokenId",
           "type":"uint256"
        }
     ],
     "name":"getApproved",
     "outputs":[
        {
           "internalType":"address",
           "name":"",
           "type":"address"
        }
     ],
     "stateMutability":"view",
     "type":"function"
  },
  {
     "inputs":[
        {
           "internalType":"address",
           "name":"owner",
           "type":"address"
        },
        {
           "internalType":"address",
           "name":"operator",
           "type":"address"
        }
     ],
     "name":"isApprovedForAll",
     "outputs":[
        {
           "internalType":"bool",
           "name":"",
           "type":"bool"
        }
     ],
     "stateMutability":"view",
     "type":"function"
  },
  {
     "inputs":[
        
     ],
     "name":"maxMintAmountPerTx",
     "outputs":[
        {
           "internalType":"uint256",
           "name":"",
           "type":"uint256"
        }
     ],
     "stateMutability":"view",
     "type":"function"
  },
  {
     "inputs":[
        
     ],
     "name":"maxSupply",
     "outputs":[
        {
           "internalType":"uint256",
           "name":"",
           "type":"uint256"
        }
     ],
     "stateMutability":"view",
     "type":"function"
  },
  {
     "inputs":[
        {
           "internalType":"uint256",
           "name":"_mintAmount",
           "type":"uint256"
        }
     ],
     "name":"mint",
     "outputs":[
        
     ],
     "stateMutability":"payable",
     "type":"function"
  },
  {
     "inputs":[
        
     ],
     "name":"name",
     "outputs":[
        {
           "internalType":"string",
           "name":"",
           "type":"string"
        }
     ],
     "stateMutability":"view",
     "type":"function"
  },
  {
     "inputs":[
        
     ],
     "name":"owner",
     "outputs":[
        {
           "internalType":"address",
           "name":"",
           "type":"address"
        }
     ],
     "stateMutability":"view",
     "type":"function"
  },
  {
     "inputs":[
        {
           "internalType":"uint256",
           "name":"tokenId",
           "type":"uint256"
        }
     ],
     "name":"ownerOf",
     "outputs":[
        {
           "internalType":"address",
           "name":"",
           "type":"address"
        }
     ],
     "stateMutability":"view",
     "type":"function"
  },
  {
     "inputs":[
        
     ],
     "name":"renounceOwnership",
     "outputs":[
        
     ],
     "stateMutability":"nonpayable",
     "type":"function"
  },
  {
     "inputs":[
        {
           "internalType":"address",
           "name":"from",
           "type":"address"
        },
        {
           "internalType":"address",
           "name":"to",
           "type":"address"
        },
        {
           "internalType":"uint256",
           "name":"tokenId",
           "type":"uint256"
        }
     ],
     "name":"safeTransferFrom",
     "outputs":[
        
     ],
     "stateMutability":"nonpayable",
     "type":"function"
  },
  {
     "inputs":[
        {
           "internalType":"address",
           "name":"from",
           "type":"address"
        },
        {
           "internalType":"address",
           "name":"to",
           "type":"address"
        },
        {
           "internalType":"uint256",
           "name":"tokenId",
           "type":"uint256"
        },
        {
           "internalType":"bytes",
           "name":"_data",
           "type":"bytes"
        }
     ],
     "name":"safeTransferFrom",
     "outputs":[
        
     ],
     "stateMutability":"nonpayable",
     "type":"function"
  },
  {
     "inputs":[
        {
           "internalType":"address",
           "name":"operator",
           "type":"address"
        },
        {
           "internalType":"bool",
           "name":"approved",
           "type":"bool"
        }
     ],
     "name":"setApprovalForAll",
     "outputs":[
        
     ],
     "stateMutability":"nonpayable",
     "type":"function"
  },
  {
     "inputs":[
        {
           "internalType":"string",
           "name":"_newBaseURI",
           "type":"string"
        }
     ],
     "name":"setBaseURI",
     "outputs":[
        
     ],
     "stateMutability":"nonpayable",
     "type":"function"
  },
  {
     "inputs":[
        {
           "internalType":"bytes4",
           "name":"interfaceId",
           "type":"bytes4"
        }
     ],
     "name":"supportsInterface",
     "outputs":[
        {
           "internalType":"bool",
           "name":"",
           "type":"bool"
        }
     ],
     "stateMutability":"view",
     "type":"function"
  },
  {
     "inputs":[
        
     ],
     "name":"symbol",
     "outputs":[
        {
           "internalType":"string",
           "name":"",
           "type":"string"
        }
     ],
     "stateMutability":"view",
     "type":"function"
  },
  {
     "inputs":[
        {
           "internalType":"uint256",
           "name":"_tokenId",
           "type":"uint256"
        }
     ],
     "name":"tokenURI",
     "outputs":[
        {
           "internalType":"string",
           "name":"",
           "type":"string"
        }
     ],
     "stateMutability":"view",
     "type":"function"
  },
  {
     "inputs":[
        
     ],
     "name":"totalSupply",
     "outputs":[
        {
           "internalType":"uint256",
           "name":"",
           "type":"uint256"
        }
     ],
     "stateMutability":"view",
     "type":"function"
  },
  {
     "inputs":[
        {
           "internalType":"address",
           "name":"from",
           "type":"address"
        },
        {
           "internalType":"address",
           "name":"to",
           "type":"address"
        },
        {
           "internalType":"uint256",
           "name":"tokenId",
           "type":"uint256"
        }
     ],
     "name":"transferFrom",
     "outputs":[
        
     ],
     "stateMutability":"nonpayable",
     "type":"function"
  },
  {
     "inputs":[
        {
           "internalType":"address",
           "name":"newOwner",
           "type":"address"
        }
     ],
     "name":"transferOwnership",
     "outputs":[
        
     ],
     "stateMutability":"nonpayable",
     "type":"function"
  },
  {
     "inputs":[
        
     ],
     "name":"uriSuffix",
     "outputs":[
        {
           "internalType":"string",
           "name":"",
           "type":"string"
        }
     ],
     "stateMutability":"view",
     "type":"function"
  },
  {
     "inputs":[
        {
           "internalType":"address",
           "name":"_owner",
           "type":"address"
        }
     ],
     "name":"walletOfOwner",
     "outputs":[
        {
           "internalType":"uint256[]",
           "name":"",
           "type":"uint256[]"
        }
     ],
     "stateMutability":"view",
     "type":"function"
  },
  {
     "inputs":[
        
     ],
     "name":"withdraw",
     "outputs":[
        
     ],
     "stateMutability":"nonpayable",
     "type":"function"
  }
];
const ADDRESS = "0xb6d41C38F78dDb76C890b2D07977401f55151e95";

// const mintButton = document.getElementsByClassName('mint-button')[0];

if (window.ethereum) {
   window.web3 = new Web3(window.ethereum);

   contract = new web3.eth.Contract(ABI, ADDRESS);

}

const onClickConnect = async (mintButton, amount) => {
   try {
      // Will open the MetaMask UI
      // You should disable this button while the request is pending!
      await ethereum.request({ method: 'eth_requestAccounts' });
   } catch (error) {
      console.error(error);
   }
   checkStatus(mintButton, amount);
};

const checkStatus = async (mintButton, amount) => {
   var accounts = await web3.eth.getAccounts();
   account = accounts[0]
   if (accounts.length == 0){
      mintButton.innerText = 'Connect Wallet';
      mintButton.onclick = () => {
            onClickConnect(mintButton, amount);
         }
   } else {
      mintButton.innerText = 'Mint';
      mintButton.onclick = () => {
         contract.methods.totalSupply().call().then(function(result) {
            if (Number(result) < 100) {
               contract.methods.mint(amount).send({ from: account, value : '0'});
            } else {
               contract.methods.mint(amount).send({ from: account, value : (amount * 29000000000000000).toString()});
            }
         })
         }
   }
}

const returnCount = async (minted) => {
   contract.methods.totalSupply().call().then(function(result) {
      minted.innerHTML = result + "/1999";
   })
}

export {checkStatus, returnCount};