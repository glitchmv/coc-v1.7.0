let PiranhaMessage = require('../../PiranhaMessage')
let LogicClientHome = require('../../../Classes/Home/LogicClientHome')
let LogicClientAvatar = require('../../../Classes/Avatar/LogicClientAvatar')

class OwnHomeDataMessage extends PiranhaMessage {
    constructor(client){
        super()
        this.id = 24101
        this.client = client
        this.version = 0
    }
    async encode() {
        new LogicClientHome().encode(this)
        new LogicClientAvatar().encode(this)
    }
}

module.exports = OwnHomeDataMessage