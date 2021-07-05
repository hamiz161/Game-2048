class App extends React.Component {
    
    render() {
       const table_NXN = +prompt("entrer la matrice de jeux ,n");
       var matrix = new Array(table_NXN);
       for (var i = 0; i < table_NXN; i++) {
          matrix[i] = new Array(table_NXN);
      }
      for (var i = 0; i < table_NXN; i++) {
        for (var j = 0; j < table_NXN; j++) {
          matrix[i][j] =0;
        }
    }
    
            
        
        console.log(matrix)
        return (
         
          <div id = "grid">
          
            {matrix.map((row,index) => {
              return (
                <div id ="row" index = {index}>
                  {row.map((digit,index2) => (
                    <Cell num={digit} key ={index2}/>
                  ))}
                </div>
              );
            })}
          
          </div>
          
           
         )
    }
    
}