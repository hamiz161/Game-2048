class Header extends React.Component {
  render() {
    return (
      <div>
        <h1 className='title'>2048</h1>
        <div className='score--wrap'>
        <p className='score'>Score  : {this.props.score}</p>
        </div>
        <button type='button' className='btnNewGame' onClick={this.props.newGame}>
          New Game
        </button>
      </div>
    )
  }
}
