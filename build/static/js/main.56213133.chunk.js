(this.webpackJsonptest_github_pages=this.webpackJsonptest_github_pages||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(8),r=n.n(s),u=(n(15),n(2)),p=n(3),o=n(5),l=n(4),y=(n(16),n(1)),m=n.n(y),d=n(6),c=null,f=null;window.ethereum&&(window.web3=new Web3(window.ethereum),f=new web3.eth.Contract([{inputs:[{internalType:"string",name:"_initBaseURI",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"baseURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"cost",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxMintAmountPerTx",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_mintAmount",type:"uint256"}],name:"mint",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_newBaseURI",type:"string"}],name:"setBaseURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"uriSuffix",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"}],name:"walletOfOwner",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"}],"0xb6d41C38F78dDb76C890b2D07977401f55151e95"));var b=function(){var e=Object(d.a)(m.a.mark((function e(t,n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ethereum.request({method:"eth_requestAccounts"});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:v(t,n);case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t,n){return e.apply(this,arguments)}}(),v=function(){var e=Object(d.a)(m.a.mark((function e(t,n){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,web3.eth.getAccounts();case 2:a=e.sent,c=a[0],0==a.length?(t.innerText="Connect Wallet",t.onclick=function(){b(t,n)}):(t.innerText="Mint",t.onclick=function(){f.methods.totalSupply().call().then((function(e){Number(e)<100?f.methods.mint(n).send({from:c,value:"0"}):f.methods.mint(n).send({from:c,value:(29e15*n).toString()})}))});case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),T=function(){var e=Object(d.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.methods.totalSupply().call().then((function(e){t.innerHTML=e+"/1999"}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={count:1},e.increment=function(){e.setState((function(e){return e.count<20?(v(document.getElementsByClassName("mint")[0],Number(document.getElementsByClassName("num")[0].value)+1),{count:e.count+1}):{count:e.count}}))},e.decrement=function(){e.setState((function(e){return e.count>1?(v(document.getElementsByClassName("mint")[0],Number(document.getElementsByClassName("num")[0].value)-1),{count:e.count-1}):{count:e.count}}))},e.handleChange=function(t){e.setState({state:t.target.value})},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=document.getElementsByClassName("mint")[0],t=Number(document.getElementsByClassName("num")[0].value),n=document.getElementsByClassName("minted")[0];T(n),v(e,t)}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"homepage"},i.a.createElement("h1",{className:"minted"},"/1999"),i.a.createElement("div",{className:"emojiContainer"},i.a.createElement("div",{id:"emoji"},"\u2709\ufe0f")),i.a.createElement("div",{className:"shadow"}),i.a.createElement("div",{className:"mint-body"},i.a.createElement("div",{className:"description"},i.a.createElement("div",{className:"invitation"},"Party Invitation"),i.a.createElement("div",{className:"congratulations"},"Congratulations, you're the first one here."),i.a.createElement("div",{className:"price"},"0.029 \u039e")),i.a.createElement("div",{className:"amount"},i.a.createElement("button",{className:"minmax",onClick:this.decrement}," - "),i.a.createElement("input",{className:"num",type:"text",value:this.state.count,onChange:this.handleChange,readOnly:!0}),i.a.createElement("button",{className:"minmax",onClick:this.increment}," + ")),i.a.createElement("button",{className:"mint"}," MINT "))),i.a.createElement("div",{className:"footer"},"Twitter and discord to be launched after mint out, brace yourselves :)"))}}]),n}(a.Component),h=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return i.a.createElement(w,null)}}]),n}(a.Component),g=n(9);r.a.render(i.a.createElement(g.a,null,i.a.createElement(h,null)),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.56213133.chunk.js.map