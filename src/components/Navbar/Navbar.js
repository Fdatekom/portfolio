import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './Head.css'
import image1 from './home.png'
import image2 from './todo.png'
import image3 from './json.png'
import image4 from './avia.png'
export default class Head extends Component {
    constructor (props){
        super(props)
        this.state ={}
    }
    render() {
        return (
            <div className='header'>
                <Link to='/'>Home <img src={image1} alt='home' /> </Link>
                <Link to='/todo'>ToDo<img src={image2} alt='todo' /></Link>
                <Link to='/json'> Json <img src={image3} alt='json' /></Link>
                <Link to='/avia'> Test Aviasales <img src={image4} alt='avia' /></Link>
            </div>
        )
    }

}