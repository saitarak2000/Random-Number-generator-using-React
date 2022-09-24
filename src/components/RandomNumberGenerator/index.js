// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomnum: 0}

  randomgenerator = () => {
    const {randomnum} = this.state
    this.setState({randomnum: Math.ceil(Math.random() * 100)})
    console.log(randomnum)
  }

  render() {
    const {randomnum} = this.state
    return (
      <div className="bg-container">
        <div className="inside-container">
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button type="submit" onClick={this.randomgenerator}>
            Generate
          </button>
          <p className="result">{randomnum}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
