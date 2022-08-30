import abiJSON from "./Web3RSVP.json"
import { ethers } from "ethers"

function connectContract() {
  //Note: Your contractAddress will start with 0x, delete everything between the quotes and paste your contract address.
  const contractAddress = "0xFB7b655b0117A1Fbc52576F87527E360723FA9A0"
  const contractABI = abiJSON.abi
  let rsvpContract
  try {
    const { ethereum } = window

    if (ethereum) {
      //checking for eth object in the window
      const provider = new ethers.providers.Web3Provider(ethereum)
      const signer = provider.getSigner()
      rsvpContract = new ethers.Contract(contractAddress, contractABI, signer) // instantiating new connection to the contract
    } else {
      console.log("Ethereum object doesn't exist!")
    }
  } catch (error) {
    console.log("ERROR:", error)
  }
  return rsvpContract
}

export default connectContract
