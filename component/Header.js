class Header extends React.Component {
  
  
    render() {
        return (
          <div>
              <h1 className ="title">2048</h1>
              <p className= "score">Score : {this.props.score}</p>
                <button type = "button"className="btnNewGame" >New Game</button>
            </div>
        
        )
    }
}