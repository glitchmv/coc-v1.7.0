let LogicBase = require('../Base/LogicBase')

module.exports = class {
    encode(stream) {
        new LogicBase().encode(stream)
        stream.writeLong(0,1) // player id?
        stream.writeLong(0,1) // player id?
        stream.writeBoolean(false) // array
        stream.writeInt(0)
        stream.writeInt(0)
        stream.writeInt(0)
        stream.writeInt(0)
        stream.writeString('cock1')
        stream.writeString('cock2')
        stream.writeInt(0)
        stream.writeInt(0)
        stream.writeInt(0)
        stream.writeInt(0)
        stream.writeInt(0)
        stream.writeInt(0)
        stream.writeInt(0)
        stream.writeBoolean(false) // array

        // MANY arrays
        stream.writeInt(0)
        stream.writeInt(0)
        stream.writeInt(0)
        stream.writeInt(0)
        stream.writeInt(0)
        stream.writeInt(0)
        stream.writeInt(0)
        stream.writeInt(0)
        stream.writeInt(0)
    }
}