#First Aquarium Shopping List
##Application Concept and Wireframe

 - This application will help build a shopping list for someone wanting to put together their first aquarium!
 - Full CRUD
    - GET: The initial shopping list populated with necessities. 
    - POST: Chosen quantities of beginner fish and selected tank will be posted to the shopping list array.
    - PUT: All shopping list item names can be edited. 
    - DELETE: Item acquired and checked off the list!
   
##Functionality
- Header display at the top of the page. 
- Display our 5 selected starter fish, user can click on each and choose how many they'd like. 
- Once fish/amounts are selected, they will then be added to the shopping list.
    - Expansion possibility - restricting tank size options to ones that will hold the amount of fish user selects. 
- Select the size of tank desired. 
- Shopping list will be pre-populated with necessary items, then fish/tank will be added. 
- Shopping list will have and edit button to customize the item names.
- Shopping list will have a "purchased" button to clear items from the list. 
- Shopping list will update when item is edited or purchased. 

##Endpoints
- GET - Our starter fish.
- GET - Our tanks. 
- GET - Get our starter shopping list. 
- POST - Push our selected fish to our shopping list.
- POST - Push our selected tank to our shopping list.
- PUT - Change the text of shopping list items. 
- DELETE - Remove items from out shopping list. 
- DELETE - Clear the list of added tank/fish. 

##Component Architecture
- App.js (Stateful: Holds the shopping list items information, this.state.items )
    - Tanks.js (Stateful: Fetching the available tanks.)
    - Fish.js (Stateful: Fetching the available fish.)
    - ShoppingList.js (functional:)
        -Items.js (Stateful: this.state.itemName)