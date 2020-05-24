import React, {Component} from "react";
import axios from 'axios';

class Fish extends Component{
    constructor(props) {
        super(props);
        this.state = {
            fish: []
        }
    }
    componentDidMount() {
        axios.get('/api/fish').then((res)=>{
            this.setState({
                fish: res.data
            })
        })
            .catch(error => console.log(error))
    }


    render() {
        return (
            <div className='fish'>
                {this.state.fish.map(e => {return (
                    <div key={e.id}>
                    <div className='each-fish'>{e.item} </div>
                        <img className="fishpics" src={e.img}/>
                        <br/>
                        <button className='fish-btn' onClick={()=>this.props.addFishToList(e.item, 1)}>Add Fish!</button>
                    </div>
                )})}
            </div>
        )
    }

}
export default Fish