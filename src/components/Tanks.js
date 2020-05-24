import React, {Component} from "react";
import axios from 'axios'

class Tanks extends Component{
    constructor(props) {
        super(props);
        this.state = {
            tanks: []
        }
    }
    componentDidMount() {
        axios.get('/api/tanks').then((res)=> {
            this.setState({
                tanks: res.data
            })
        })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div className='tanks'>
                {this.state.tanks.map(({id, item, img}) => {return (
                    <div key={id}>
                        <div className='tankname'> {item}</div>
                        <img className='tankpics' src={img}/>
                        <br/>
                        <button className="tankbtn" onClick={()=>this.props.addTankToList(item, 1)}>This Tank!</button>
                    </div>
                )})}

            </div>
        )
}

}
export default Tanks