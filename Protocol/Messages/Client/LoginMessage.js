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
        this.a = this.readLong() // player id?
        this.b = this.readString() // token?
        this.c = this.readInt()
        this.d = this.readInt()
        this.e = this.readInt()
        this.f = this.readString()
        this.g = this.readString()
        this.h = this.readString()
        this.i = this.readString()
        
    }
    async process(){
        new LoginOkMessage(this.client).send()
        new OwnHomeDataMessage(this.client).send()
    }
}

module.exports = LoginMessage