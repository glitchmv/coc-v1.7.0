let LogicBase = require('../Base/LogicBase')

module.exports = class {
    encode(stream) {
        LogicBase.encode(stream)
        stream.writeLong(1,0) // player id?
        stream.writeLong(1,0) // player id?
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