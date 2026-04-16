let LogicBase = require('../Base/LogicBase')

module.exports = class {
    encode(stream) {
        LogicBase.encode(stream)
        stream.writeBoolean(false)
        stream.writeString('cockclash') // could be player name idk
        stream.writeInt(0)
        stream.writeInt(0)
        stream.writeInt(0)
    }
}