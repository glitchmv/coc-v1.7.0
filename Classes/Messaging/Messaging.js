let ByteStream = require('../../ByteStream/index')

class Messaging {
    send () {
        if (this.id < 20000) return;

        this.encode()

        const header = Buffer.alloc(7)
        header.writeUInt16BE(this.id, 0)
        header.writeUIntBE(this.buffer.length, 2, 3)
        header.writeUInt16BE(this.version, 5)
        this.client.write(Buffer.concat([header, this.buffer, Buffer.from([0xFF, 0xFF, 0x0, 0x0, 0x0, 0x0, 0x0])]))
        this.client.log(`Packet ${this.id} (${this.constructor.name}) was sent.`)
  }
}

module.exports = Messaging