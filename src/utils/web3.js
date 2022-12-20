import Web3 from "web3";
// window.ethereum.request({ method: "eth_requestAccounts" });
const web3 = new Web3("http://localhost:7545");
export const getAccounts = async () => (
    await web3.eth.getAccounts()
);
export default web3;
