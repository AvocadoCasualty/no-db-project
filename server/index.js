const express = require('express');
const app = express();
const SERVER_PORT = 3474
const fishController = require('./controllers/fishController')
const tankController = require('./controllers/tankController')
const shoppingListController = require('./controllers/shoppingListController')

app.use(express.json())

//endpoints
app.get('/api/fish', fishController.getFish)
app.get('/api/tanks', tankController.getTanks)
app.get('/api/shoppinglist', shoppingListController.getList)
app.post('/api/shoppinglist', shoppingListController.pushSelectionToList)
app.put('/api/shoppinglist/:list_id', shoppingListController.editItem)
app.put('/api/shoppinglist/qty/:list_id', shoppingListController.itemChangeQty)
app.delete('/api/shoppinglist/:list_id', shoppingListController.purchasedItem)
app.delete('/api/shoppinglist', shoppingListController.clearList)

app.listen(SERVER_PORT, () =>
    console.log(`Ambient aquarium noises on port ${SERVER_PORT}`)
)