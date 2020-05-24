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
                    <button onClick={() => fishChangeQty(id, qty + 1)}>+</button>
                    <button onClick={() => fishChangeQty(id, qty - 1)}>-</button>
                    <div> {item} {qty} </div>
                    {/*<button>Edit</button>*/}
                    <button onClick={() => purchasedItem(id)}>Got it!</button>
                </div>
            </div>
        )
    }
}

export default Items