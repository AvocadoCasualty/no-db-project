import React from "react";
import Items from "./Items"

function ShoppingList({shoppingList, purchasedItem, fishChangeQty, clearShoppingList}) {

    return (
        <div className='shopping-list' >
            {shoppingList.map(element => {return (<Items
                key={element.id}
                itemElement={element}
                purchasedItem={purchasedItem}
                fishChangeQty={fishChangeQty}
            />)})}
            <button className='clearbtn' onClick={() => clearShoppingList()}>Clear Shopping List Changes</button>
        </div>
    )

}
export default ShoppingList