const fish = require("../fish.json")

module.exports = {
    getFish: (req, res) => {
        res.status(200).send(fish)
    }
}