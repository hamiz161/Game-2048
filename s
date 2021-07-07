[1mdiff --git a/component/App.js b/component/App.js[m
[1mindex 0e42680..fcd61f2 100755[m
[1m--- a/component/App.js[m
[1m+++ b/component/App.js[m
[36m@@ -23,12 +23,11 @@[m [mclass App extends React.Component {[m
             <section>[m
               <Header score ={score}/>[m
             </section>[m
[31m-            [m
             {matrix.map((row,index) => {[m
               return ([m
                 <div id ="row" index = {index}>[m
                   {row.map((digit,index2) => ([m
[31m-                    <Cell num={digit} key ={index2}/>[m
[32m+[m[32m                    <Cell num={digit} clef ={index2}/>[m
                   ))}[m
                 </div>[m
               );[m
[1mdiff --git a/component/Header.js b/component/Header.js[m
[1mindex aec65b3..d3ab2c7 100755[m
[1m--- a/component/Header.js[m
[1m+++ b/component/Header.js[m
[36m@@ -5,8 +5,8 @@[m [mclass Header extends React.Component {[m
         return ([m
           <div>[m
               <h1 className ="title">2048</h1>[m
[31m-              <p className= "score">Score : {this.props.score}[m
[31m-              <button type="button" class="btn btn-outline-secondary">New Game</button></p>[m
[32m+[m[32m              <p className= "score">Score : {this.props.score}</p>[m
[32m+[m[32m                <button type = "button"className="btnNewGame" >New Game</button>[m
             </div>[m
         [m
         )[m
[1mdiff --git a/index_jeu_2048.html b/index_jeu_2048.html[m
[1mindex 962803e..d1d9282 100755[m
[1m--- a/index_jeu_2048.html[m
[1m+++ b/index_jeu_2048.html[m
[36m@@ -19,11 +19,14 @@[m [mntegrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQ[m
 <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>[m
 <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>[m
 [m
[32m+[m[32m<!--component-->[m
[32m+[m
 <script type="text/babel"  src="component/App.js"></script>[m
 <script type="text/babel"  src="component/Cell.js"></script>[m
 <script type="text/babel"  src="component/Header.js"></script>[m
 [m
[31m-[m
[32m+[m[32m<!--script jeu-->[m
[32m+[m[32m<script type="text/babel" src="scripts/Hamza.js"></script>[m
 [m
 </head>[m
 [m
[1mdiff --git a/style/style.css b/style/style.css[m
[1mindex ac08368..c31f755 100755[m
[1m--- a/style/style.css[m
[1m+++ b/style/style.css[m
[36m@@ -18,6 +18,7 @@[m [mbody {[m
   display: inline-grid;[m
   background-color: #bbada0;[m
   text-align: center;[m
[32m+[m[41m  [m
 }[m
 .title {[m
   font-size: 80px;[m
[36m@@ -28,7 +29,20 @@[m [mbody {[m
     margin-top: 70px;[m
 }[m
 .score{[m
[31m-  background-color: #bbada0;[m
[32m+[m[32m  margin: 20px;[m
[32m+[m[32m  font-size: 19px;[m
[32m+[m[32m  font-style: italic;[m
[32m+[m[32m  color: red;[m
[32m+[m[32m}[m
[32m+[m[32m.btnNewGame{[m
 [m
[31m-  margin: 40px;[m
[32m+[m[41m  [m
[32m+[m[32m  font-family: 'Helvetica', 'Arial', sans-serif;[m
[32m+[m[32m  display: inline-block;[m
[32m+[m[32m  padding: 1em 2em;[m
[32m+[m[32m  margin-bottom: 60px;[m
[32m+[m[32m  background-color: #5a4a4b;[m
[32m+[m[32m  color: #fff;[m
[32m+[m[32m  border-radius: 20px;[m
[32m+[m[32m  border: none;[m
 }[m
