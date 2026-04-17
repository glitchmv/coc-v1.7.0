let PiranhaMessage = require('../../PiranhaMessage')

class LoginOkMessage extends PiranhaMessage {
    constructor(client) {
        super()
        this.client = client
        this.id = 20104
        this.version = 0
    }
    async encode() {
        this.writeLong(1,0) // player id?
        this.writeLong(1,0) // player id?
        this.writeString('cock')
        this.writeString('cock')
        this.writeString('cock')
        this.writeInt(0)
        this.writeInt(0)
        this.writeInt(0)
        this.writeString('dev') // should be env
        this.writeInt(0)
        this.writeInt(0)
        this.writeInt(0)
    }
}

module.exports = LoginOkMessage