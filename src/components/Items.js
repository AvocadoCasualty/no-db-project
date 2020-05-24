import React, {Component} from 'react';

class Items extends Component {
    constructor() {
        super();
        this.state = {
            isEditing: false,
            userInput: '',
        }
    }

    // toggleEdit() {
    //
    // }
    //
    // handleNameChange(e) {
    //
    // }

    render() {
        const {id, item, qty} = this.props.itemElement
        const {purchasedItem, fishChangeQty} = this.props
        return (
            <div className='items'>
                <div>
                    <div> {item} - Qty: {qty} </div>
                    <button className='qty-down-btn' onClick={() => fishChangeQty(id, qty - 1)}>-</button>
                    <button className='qty-up-btn' onClick={() => fishChangeQty(id, qty + 1)}>+</button>
                    {/*<button>Edit</button>*/}
                    <button className="gotitbtn" onClick={() => purchasedItem(id)}>Got it!</button>
                </div>
            </div>
        )
    }
}

export default Items