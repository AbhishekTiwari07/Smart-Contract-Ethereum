var contractABI = [{
    "constant": true,
    "inputs": [],
    "name": "hello",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  }
]
var contractAddress = '0x56e8DdCD918A44E8f8c2b29D6f19aCFfF0195BAa'
var web3 = new Web3('http://localhost:9545')

var helloWorld = new web3.eth.Contract(contractABI, contractAddress)

document.addEventListener('DOMContentLoaded', ()=>{
  helloWorld.methods.hello().call().then(result=>{
    console.log("ho gya")
  })
})