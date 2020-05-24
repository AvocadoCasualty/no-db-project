import React, {Component} from 'react';
import axios from "axios";
import './App.css';
import Fish from "./components/Fish";
import Tanks from "./components/Tanks";
import ShoppingList from "./components/ShoppingList"

class App extends Component {
    constructor() {
        super();
        this.state = {
            shoppingList: []
        }
        this.purchasedItem = this.purchasedItem.bind(this)
        this.addFishToList = this.addFishToList.bind(this)
        this.addTankToList = this.addTankToList.bind(this)
        this.fishQtyChange = this.fishQtyChange.bind(this)
        this.clearShoppingList = this.clearShoppingList.bind(this)

    }
    componentDidMount() {
        axios.get('/api/shoppinglist').then((res)=>{
            this.setState({
                shoppingList: res.data
            })
        })
            .catch(error => {
                console.log(error)
            })
    }

    addFishToList(item, qty){
        axios.post('/api/shoppinglist', {item, qty}).then((res)=> {
            this.setState({
                shoppingList: res.data
            })
        }).catch(error => console.log(error))
    }

    fishQtyChange(id, qty){
        axios.put(`/api/shoppinglist/qty/${id}`, {qty} ).then((res)=> {
            this.setState({
                shoppingList: res.data
            })
        }).catch(error => console.log(error))

    }

    addTankToList (item, qty){
        axios.post('/api/shoppinglist', {item,qty}).then((res)=> {
            this.setState({
                shoppingList: res.data
            })
        }).catch(error => console.log(error))

    }
    // editItemName(id, newName){
    //
    // }
    purchasedItem (id){
        axios.delete(`/api/shoppinglist/${id}`).then((res)=>{
           this.setState({
               shoppingList: res.data
           })
        })
            .catch(error => console.log(error))
    }
    clearShoppingList(){
        axios.delete('/api/shoppinglist/').then((res) =>{
            this.setState({
                shoppingList: res.data
            })
        })
            .catch(error => console.log(error))

    }
    render() {
        console.log(this.state.shoppingList)
        return (
            <div>
                <h1>Your First Aquarium!</h1>
                <p>First, pick some fish: </p>
                <Fish
                    addFishToList={this.addFishToList}
                />
                <p className='tank-p'>Then, pick a tank to put them in!</p>
                <Tanks
                    addTankToList={this.addTankToList}/>
                    <p className='list-p'>And here is your shopping list! We've added a few necessities to get you started!</p>
                <ShoppingList
                    shoppingList={this.state.shoppingList}
                    purchasedItem={this.purchasedItem}
                    fishChangeQty={this.fishQtyChange}
                    clearShoppingList={this.clearShoppingList}
                />

            </div>
        )

    }

}


export default App;
