import React, {Component, Fragment} from 'react'
import JsonComponent from './JsonComponent/JsonComponent'

export default class  extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      count: -1,
      isLoad: false
    }
  }

  renderMoreItems = () => {
    let { count } = this.state
    count += 5
    this.setState({
      count: count
    })
  }

  removeAllItems = () => {
    const count = -1
    this.setState({
      count: count
    })
  }

  render () {
    return (<Fragment> 
      <div className='App'>
        <JsonComponent
          items={this.state.data.filter((item, idx) => {
            if (idx <= this.state.count) {
              return item
            }
          })}
          onSend={this.renderMoreItems}
          onRemove={this.removeAllItems}
          isLoad={this.state.isLoad}
        />
      </div></Fragment>
    )
  }

  componentDidMount = () => {
    const isLoad = this.state.isLoad
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => {
        res.json().then(data => {
          this.setState({
            data: data,
            isLoad: !isLoad
          })
          console.log(this.state)
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}
