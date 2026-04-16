let PiranhaMessage = require('../../PiranhaMessage')

class LoginOkMessage extends PiranhaMessage {
    constructor(client) {
        super()
        this.client = client
        this.id = 20104
        this.version = 0
    }
    async encode() {
        /* */
    }
}

module.exports = LoginOkMessage