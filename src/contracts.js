const web3 = require('./web3')
const TokenInterface = require('../build/contracts/Token.json')

const list = {}

const setupToken = async (networkId) => {
    console.log('setting up Token')
    const deployedAddress = TokenInterface.networks[networkId].address
    list.Token = new web3.eth.Contract(
        TokenInterface.abi,
        deployedAddress
    )
  }

  const setup = async () => {
    const networkId = await web3.eth.net.getId()
    await setupToken(networkId)
  }
  
  module.exports = {
    setup,
    list
  }