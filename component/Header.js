class Header extends React.Component {
  
  
    render() {
        return (
          <div>
              <h1 className ="title">2048</h1>
              <p className= "score">Score : {this.props.score}
              <button type="button" class="btn btn-outline-secondary">New Game</button></p>
            </div>
        
        )
    }
}