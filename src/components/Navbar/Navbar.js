import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './Head.css'
export default class Head extends Component {
    constructor (props){
        super(props)
        this.state ={}
    }
    render() {
        return (
            <div className='header'>
                <Link to='/'>Home &#8962;</Link>
                <Link to='/todo'>ToDo &#x2611;</Link>
                <Link to='/json'> Json</Link>
                <Link to='/avia'> Test Aviasells</Link>
            </div>
        )
    }

}