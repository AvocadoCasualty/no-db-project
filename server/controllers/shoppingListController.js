const shoppingList = [
    {id: 0, item: "Dechlorinator", qty: 1},
    {id: 1, item: "Substrate", qty: 1},
    {id: 2, item: "Decorations", qty: 5},
    {id: 3, item: "Freshwater Test Kit", qty: 1},
]
let id = 4

module.exports = {
    getList: (req, res) => {
        res.status(200).send(shoppingList)
    },

    pushSelectionToList: (req, res) => {
        const {item, qty} = req.body

        const newItem = {id, item, qty}

        shoppingList.push(newItem)

        id++

        res.status(200).send(shoppingList)
    },

    editItem: (req, res) => {
        const {list_id} = req.params
        const {item} = req.body

        const index = shoppingList.findIndex((element) => element.id === +list_id)

        if (index === -1) {
            return res.status(404).send('Item not Found')
        }
        shoppingList[index].item = item
        res.status(200).send(shoppingList)
    },

    itemChangeQty: (req, res) => {
        const {list_id} = req.params
        const {qty} = req.body

        const index = shoppingList.findIndex((element) => element.id === +list_id)

        if (index === -1) {
            return res.status(404).send('Item not Found')
        }
        shoppingList[index].qty = qty
        res.status(200).send(shoppingList)
    },

    purchasedItem: (req, res) => {
        const {list_id} = req.params

        const index = shoppingList.findIndex((element) => element.id === +list_id)

        if (index === -1) {
            return res.status(404).send('Item not Found')
        }
        shoppingList.splice(index, 1)
        res.status(200).send(shoppingList)
    },
    clearList: (req, res) => {
        shoppingList.splice(4)
        res.status(200).send(shoppingList)
    }
}