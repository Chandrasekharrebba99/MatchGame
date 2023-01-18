import {Component} from 'react'

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {timer: props.timer}
  }

  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick = () => {
    const {timer} = this.state

    this.setState({
      timer: timer - 1,
    })
  }

  returnResult = () => {
    const {userScore} = this.state

    return (
      <div className="resultCard">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophy"
        />
        <h1>Your Score</h1>
        <p>{userScore}</p>
        <div className="playAgaincont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
          />
          <button type="button" className="btnplay" onClick={this.playAgain}>
            PLAY AGAIN
          </button>
        </div>
      </div>
    )
  }

  render() {
    const {timer} = this.state

    return (
      <div>
        <li className="timercont">
          <img
            className="timericon"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
          <p>{timer} Sec</p>
        </li>
        {timer === 0 ? this.returnResult() : ''}
      </div>
    )
  }
}

export default NavBar
