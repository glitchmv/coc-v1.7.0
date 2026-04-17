const RC4 = require('simple-rc4')

class RC4Encrypter {
  constructor() {
      this.key = Buffer.from('fhsd6f86f67rt8fw78fw789we78r9789wer6re')
      this.nonce = Buffer.from('nonce')
      this.RC4_Stream = new RC4(Buffer.concat([this.key, this.nonce]))
      this.RC4_Stream.update(Buffer.concat([this.key, this.nonce]))
      this.RC4_Stream2 =  new RC4(Buffer.concat([this.key, this.nonce]))
      this.RC4_Stream2.update(Buffer.concat([this.key, this.nonce]))
  }

  decrypt(data) {
      let stream = this.RC4_Stream.update(data)
      return stream
  }

  encrypt(data) {
      let stream = this.RC4_Stream2.update(data)
      return stream
  }
}

module.exports = RC4Encrypter