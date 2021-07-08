class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matrix: [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ]
    };
  }
 
  render() {
    
    // var table_NXN = +prompt("entrer la matrice de jeux ,n");
      const score = 0 ;

  //    var matrix = new Array(table_NXN);
  //    for (var i = 0; i < table_NXN; i++) {
  //       matrix[i] = new Array(table_NXN);
  //   }
  //   for (var i = 0; i < table_NXN; i++) {
  //     for (var j = 0; j < table_NXN; j++) {
  //       matrix[i][j] =0;
        
  //     }
  // }
  console.log(this.state)
  
  const initialize = () => {
    
    let nouvelleMatrix = this.state.matrix;
    addTuile(nouvelleMatrix);
    console.table(nouvelleMatrix);
    
    addTuile(nouvelleMatrix);
    console.table(nouvelleMatrix);
    this.setState({ matrix: this.state.matrix  =  nouvelleMatrix });  
    
  };
  const addTuile = (nouvelleMatrix) => {
    let ajoute = false;
    let matrixSaturer = false;
    let attempts = 0;
    while (!ajoute) {
      if (matrixSaturer) {
        break;
      }

      let rand1 = Math.floor(Math.random() * 4);
      let rand2 = Math.floor(Math.random() * 4);
      attempts++;
      if (nouvelleMatrix[rand1][rand2] === 0) {
        nouvelleMatrix[rand1][rand2] = Math.random() > 0.5 ? 2 : 4;
        ajoute = true;
      }
     
      // if (attempts > 50) {
      //   matrixSaturer = true;
      //   let gameOverr = checkIfGameOver();
      //   if (gameOverr) {
      //     alert("game over");
      //     // setGameOver(true);
      //   }
      //   // setGameOver(true);
      // }
    }
  };
      return (
        
        <div>
          <section>
            <Header score ={score} hello={initialize}/>
          </section>
         
          {this.state.matrix.map((row,index1) => {
            return (
              <div id ="row" index = {index1}>
                {row.map((digit,index) => (
                  <Cell num={digit} clef ={index}/>
                ))}
              </div>
            );
          })}
        
        </div>
        
        
         
       )
  }
  
}