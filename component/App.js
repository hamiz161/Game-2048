class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      keypressed: false,
      debug: true,
      score: 0,
      matrix: [],
      taille: 4,
      gameOver: false
    }
  }
   /*
   *
   *si on a pas une case horisontale
   * 
   */
  noBlockHorizontal(row, col1, col2, matrix) {
    for (var i = col1 + 1; i < col2; i++) {
      if (matrix[row][i] != 0) {
        return false
      }
    }
    return true
  }
   /*
   *
   *si on a pas une case verticale
   * 
   */

  noBlockVertical(col, row1, row2, matrix) {
    for (var i = row1 + 1; i < row2; i++) {
      if (matrix[i][col] != 0) {
        return false
      }
    }
    return true
  }
  /*
   *
   *vérifier si on peut  bouger vers le haut
   * 
   */

  canMoveUp(matrix) {
    for (var i = 1; i < this.state.taille; i++) {
      for (var j = 0; j < this.state.taille; j++) {
        if (matrix[i][j] != 0)
          if (matrix[i - 1][j] == 0 || matrix[i - 1][j] == matrix[i][j])
            return true
      }
    }
    return false
  }

   /*
   *
   * bouger vers le haut
   * 
   */
  moveUp() {
    let matrix = this.state.matrix

    if (!this.canMoveUp(matrix)) return

    for (var i = 1; i < this.state.taille; i++) {
      for (var j = 0; j < this.state.taille; j++) {
        if (matrix[i][j] != 0) {
          for (var k = 0; k < i; k++) {
            if (matrix[k][j] == 0 && this.noBlockVertical(j, k, i, matrix)) {
              matrix[k][j] = matrix[i][j]
              matrix[i][j] = 0
              break
            } else if (
              matrix[k][j] == matrix[i][j] &&
              this.noBlockVertical(j, k, i, matrix)
            ) {
              matrix[k][j] += matrix[i][j]
              matrix[i][j] = 0
              this.setState({ score: this.state.score + matrix[k][j] })
              break
            }
          }
        }
      }
    }

    this.generateNewNumber()
    this.forceUpdate()
   
  }
   /*
   *
   *vérifier si on peut  bouger vers le bas
   * 
   */

  canMoveDown(matrix) {
    for (var i = this.state.taille - 2; i > -1; i--) {
      for (var j = 0; j < this.state.taille; j++) {
        if (matrix[i][j] != 0)
          if (matrix[i + 1][j] == 0 || matrix[i + 1][j] == matrix[i][j])
            return true
      }
    }
    return false
  }
  /*
   *
   * bouger vers le bas
   * 
   */
  moveDown() {
    let matrix = this.state.matrix

    if (!this.canMoveDown(matrix)) return

    for (let i = this.state.taille - 1; i > -1; i--) {
      for (var j = 0; j < this.state.taille; j++) {
        if (matrix[i][j] != 0) {
          for (var k = this.state.taille - 1; k > i; k--) {
            if (matrix[k][j] == 0 && this.noBlockVertical(j, i, k, matrix)) {
              matrix[k][j] = matrix[i][j]
              matrix[i][j] = 0
              break
            } else if (
              matrix[k][j] == matrix[i][j] &&
              this.noBlockVertical(j, i, k, matrix)
            ) {
              matrix[k][j] += matrix[i][j]
              matrix[i][j] = 0
              this.setState({ score: this.state.score + matrix[k][j] })
              break
            }
          }
        }
      }
    }

    this.generateNewNumber()
    this.forceUpdate()
    
  }

   /*
   *
   *vérifier si on peut  bouger vers la droite
   * 
   */

  canMoveRight(matrix) {
    for (let i = 0; i < this.state.taille; i++) {
      for (let j = this.state.taille - 2; j > -1; j--) {
        if (matrix[i][j] != 0)
          if (matrix[i][j + 1] == 0 || matrix[i][j + 1] == matrix[i][j])
            return true
      }
    }
    return false
  }
  /*
   *
   * bouger vers la droite
   * 
   */
  moveRight() {
    let matrix = this.state.matrix

    if (!this.canMoveRight(matrix)) return

    for (let i = 0; i < this.state.taille; i++) {
      for (let j = this.state.taille - 1; j > -1; j--) {
        if (matrix[i][j] !== 0) {
          for (let k = this.state.taille - 1; k > j; k--) {
            if (matrix[i][k] === 0 && this.noBlockHorizontal(i, j, k, matrix)) {
              matrix[i][k] = matrix[i][j]
              matrix[i][j] = 0
              break
            } else if (
              matrix[i][k] === matrix[i][j] &&
              this.noBlockHorizontal(i, j, k, matrix)
            ) {
              matrix[i][k] += matrix[i][j]
              matrix[i][j] = 0
              this.setState({ score: this.state.score + matrix[i][k] })
              break
            }
          }
        }
      }
    }

    this.generateNewNumber()
    this.forceUpdate()
    
  }
   /*
   *
   *vérifier si on peut  bouger vers la droite
   * 
   */
  canMoveLeft(matrix) {
    for (let i = 0; i < this.state.taille; i++) {
      for (let j = 0; j < this.state.taille - 1; j++) {
        if (matrix[i][j] === 0) return true

        if (matrix[i][j] === matrix[i][j + 1] || matrix[i][j] === 0) return true
      }
    }
    return false
  }

  /*
   *
   * bouger vers la gauche
   * 
   */
  moveLeft() {
    let matrix = this.state.matrix

    if (!this.canMoveLeft(matrix)) return

    for (let i = 0; i < this.state.taille; i++) {
      for (let j = 1; j < this.state.taille; j++) {
        if (matrix[i][j] != 0) {
          for (let k = 0; k < j; k++) {
            if (matrix[i][k] == 0 && this.noBlockHorizontal(i, k, j, matrix)) {
              matrix[i][k] = matrix[i][j]
              matrix[i][j] = 0
              break
            } else if (
              matrix[i][k] == matrix[i][j] &&
              this.noBlockHorizontal(i, k, j, matrix)
            ) {
              matrix[i][k] += matrix[i][j]
              matrix[i][j] = 0
              this.setState({ score: this.state.score + matrix[i][k] })
              break
            }
          }
        }
      }
    }
    this.generateNewNumber()
    this.forceUpdate()
   
  }

  /*
   *
   * returner true si on peut pas bouger plus
   * 
   */
  isGameOver() {
    let matrix = this.state.matrix

    for (let i = 0; i < this.state.taille; i++) {
      for (let j = 0; j < this.state.taille; j++) {
        if (matrix[i][j] == 2048 && !this.state.gameOver) {
          return true;
        }
      }
    }

    for (let i = 0; i < this.state.taille; i++) {
      for (let j = 0; j < this.state.taille; j++) {
        if (matrix[i][j] == 0) {
          return false;
        }
      }
    }

    return ( !this.canMoveDown(matrix) && !this.canMoveRight(matrix) && !this.canMoveLeft(matrix) && !this.canMoveUp(matrix) && !this.state.gameOver )
  }

  /*
   *
   * generer 2 ou 4 et on l ajoute dans la matrice
   * 
   */
  generateNewNumber() {
    let matrix = this.state.matrix

    do {
      for (let i = 0; i < this.state.taille; i++)
        for (let j = 0; j < this.state.taille; j++)
          if (matrix[i][j] === 0 && Math.random() < 0.1) {
            matrix[i][j] = Math.random() > 0.2 ? 2 : 4
            this.setState({ matrix })
            return
          }
    } while (true)
  }

  /** function took from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random */
  getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }

  /**
   * Will return random positions in an 'n x n' grid
   */
  getRandomPositions() {
    const positions = []
    let selectedLine = this.getRandomInt(this.state.taille),
      selectedRow = this.getRandomInt(this.state.taille)
    positions.push({ x: selectedLine, y: selectedRow })

    let secondRow = this.getRandomInt(this.state.taille)
    while (secondRow === selectedRow) {
      secondRow = this.getRandomInt(this.state.taille)
    }
    positions.push({ x: selectedLine, y: secondRow })

    if (this.state.debug)
      console.log('Positions successfully generated', positions)

    return positions
  }

  /*
   *
   * intialisation de grid
   * 
   */
  initGrid() {
    if (this.state.taille < 4) throw new Error('Size should not be below 4')

   

    let matrix = []

    for (let i = 0; i < this.state.taille; i++) {
      let tableau = []

      for (let i = 0; i < this.state.taille; i++) tableau.push(0)

      matrix.push(tableau)
    }

   

    const positions = this.getRandomPositions()

    positions.forEach(function (position) {
      matrix[position.x][position.y] = Math.random() > 0.2 ? 2 : 4
    })

    this.setState({ matrix: matrix })

    if (this.state.debug) {
      console.log('Grid successfully generated')
     
    }

    /*
   *
   * listner (key )
   * 
   */
    document.addEventListener('keydown', (event) => {
      if (!this.state.keypressed) {
        this.setState({ keypressed: true })
        switch (event.code) {
          case 'ArrowLeft':
            this.moveLeft()
            break

          case 'ArrowUp':
            this.moveUp()
            break

          case 'ArrowRight':
            this.moveRight()
            break

          case 'ArrowDown':
            this.moveDown()
            break
        }
      }
    })

    document.addEventListener('keyup', (event) => {
      this.setState({ keypressed: false })
    })

    window.setInterval(() => { 
      
      // game over
      if (this.isGameOver()) {
        this.setState({gameOver: true })
        alert('Partie terminée, votre score est : ' + this.state.score)
        this.setState({ score: 0, matrix: [] })
      }
    }, 1000)

    if (this.state.debug)
      console.log('Keydown down event listener successfully added')
  }
   
  // insialiser la matrice N*N avec l entrée d user

  componentDidMount() {
    this.state.taille = +prompt('Donner la taille de la matrice')
    this.initGrid()
    this.state.gameOver = false
  }

  render() {
    

    const newGame = () => {
      this.setState({ score: 0, matrix: [] })
      this.state.taille = +prompt('Donner la taille de la matrice')
      this.initGrid()
      this.state.gameOver = false
    }

    return (
      <div>
        <section>
          <Header score={this.state.score} newGame={newGame} />
        </section>

        <div className='container'>
          {this.state.matrix.map((row, index1) => {
            return (
              <div key={index1} className='row'>
                {row.map((digit, index) => (
                  <Cell key={index} num={digit} />
                ))}
              </div>
            )
          })}
              <Footer/>
        
        </div>
      </div>
    )
  }
}
