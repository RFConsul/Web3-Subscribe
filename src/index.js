require('./web3')
const contracts = require('./contracts')
const events = require('./events')

contracts.setup()
  .then(() => {
    events.subscribeLogEvent(contracts.list.Token, 'Mint')
    events.subscribeLogEvent(contracts.list.Token, 'Transfer')
    events.subscribeLogEvent(contracts.list.Token, 'CrowdsaleFinishedEvent')
  })