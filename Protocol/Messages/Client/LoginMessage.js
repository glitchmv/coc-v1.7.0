let PiranhaMessage = require('../../PiranhaMessage')
let OwnHomeDataMessage = require('../Server/OwnHomeDataMessage')
let LoginOkMessage = require('../Server/LoginOkMessage')

class LoginMessage extends PiranhaMessage {
  constructor (bytes, client) {
    super(bytes)
    this.client = client
    this.id = 10101
    this.version = 0
  }

    async decode(){
        /* */
    }
    async process(){
        new LoginOkMessage(this.client).send()
        new OwnHomeDataMessage(this.client).send()
    }
}

module.exports = LoginMessage