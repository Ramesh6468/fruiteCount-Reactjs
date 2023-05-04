import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  onIncrement1 = () => {
    const {count1} = this.state
    this.setState(prevState => ({count1: prevState.count1 + 1}))
  }

  onIncrement2 = () => {
    const {count2} = this.state
    this.setState(prevState => ({count2: prevState.count2 + 1}))
  }

  render() {
    const {count1} = this.state
    const {count2} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="text">
            Bob ate <span className="mango">{count1}</span> mangoes{' '}
            <span className="banana">{count2}</span> bananas
          </h1>
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
              className="image1"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
              className="image1"
            />
          </div>
          <div className="buttonContainer">
            <button
              className="button1"
              type="button"
              onClick={this.onIncrement1}
            >
              Eat Mango
            </button>
            <button
              className="button1"
              type="button"
              onClick={this.onIncrement2}
            >
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
