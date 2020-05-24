const tanks = require("../tanks.json")

module.exports = {
    getTanks: (req, res) => {
        res.status(200).send(tanks)
    }
}