import './App.css';
import React, { Component,useState,useEffect, createElement } from 'react';
import Grid from '@mui/material/Grid';

//https://rednet.io/2020-05-04-les-hooks-la-base.html

//https://react-facile.fr/cours/comment-bien-utiliser-le-hook-useeffect/
function App() {
  const [num1, firstNumber] = useState(0);
  const [num2,scndNumber] = useState(0);
  const [sign, calculWithSign] = useState('');
  const [total, totalCalcul] = useState(0);
  function checkValue(e) {
    //console.log(e) // 7
    if(num1 == 0) {
      firstNumber(e)
    }
    if(num1 !== 0) {
      scndNumber(e)
    }
  }
  function calculSign(e) {
    //console.log(e)
    calculWithSign(e)
  }
  function calculate() {
    console.log(num1)
    console.log(num2)
    console.log(sign)
    var calc;
    /* '+','-','*','/','x²','√x¹' */
    if(sign === '+') {
      calc = num1 + num2;
      totalCalcul(calc)
    }
    if(sign === '-') {
      //console.log(num1 - num2)
      calc = num1 - num2;
      totalCalcul(calc)
    }
    if(sign === '*') {
      console.log(num1 * num2);
      calc = num1 * num2;
      totalCalcul(calc)
    }
    if(sign === '/') {
      calc = num1 / num2
      totalCalcul(calc)
    }
    if(sign === 'x²') {
      console.log(num1 * num1)
      calc = num1 * num1
      totalCalcul(calc)
    }
    if(sign === '√x¹') {
      console.log(Math.sqrt(num1))
      calc = Math.sqrt(num1)
      totalCalcul(calc)
      //return Math.sqrt(num1)
    }
    /* créer une variable qui va contenir le resultat de l'opération précédente si la function GetState n'a pas été cliquée */
    /* ce résultat sera additionné au num1 pour permettre de continuer les opérations sans avoir à cliquer sur le résultat de l'ancienne opération */
    /* il faudrait aussi créer un visuel de ce résultat sur le DOM */
  }
  function GetState () {
    console.log('reset')
    firstNumber(0)
    scndNumber(0)
    calculWithSign('')
    totalCalcul(0)
  }
    return (
      <div className='IMC'>
        <h1>Calculatrice</h1>
        <div className='rendu'>
          <div className='placementCalc'>
            <Grid container spacing={5} sx={{
              marginLeft:'auto',
              marginRight:'auto',
              border: '1px solid black',
              backgroundColor:'white',
              justifyContent:'center',
            }}>
              {[7,8,9,4,5,6,1,2,3,0].map((value,index) => {
                return <Grid className='spaceNumber' item xs={5} md={4} sx={{
                  paddingTop:'30px !important',
                  paddingLeft:'30px !important',
                  "&:hover": {
                    color: 'white',
                    fontWeight: '800',
                  }
                }}>
                  <button index={index} key={index} onClick={checkValue.bind(index,value)}>{value}</button>
                </Grid>
              })}
              <ul className='detailsCalc'>
                <li>{num1}</li>
                <li>{sign}</li>
                <li>{num2}</li>
              </ul>
            </Grid>
            <Grid container spacing={2} sx={{
              justifyContent: 'center',
              flexDirection:'column',
              justifyContent: 'right',
              marginLeft: '2%',
            }}>
              {['+','-','*','/','x²','√x¹'].map((value, index)=> {
                return <Grid item xs={2} md={2} sx={{
                  borderRadius:'2%',
                  margin:'0 1%',
                  paddingTop:'0 !important',
                  "&:hover": {
                    color: 'white',
                    fontWeight: '800',
                  }
              }}>
                <button className='button' index={index} key={index} onClick={calculSign.bind(index,value)}>{value}</button>
              </Grid>
              })}
            </Grid>
          </div>
          <div className='scndPart'>
            <button onClick={calculate}>Total</button> 
            <p className='result'>{total}</p>
            <button onClick={GetState}>Remettre à Zéro</button>
          </div>
        </div>
      </div>
    )
}
    
export default App;
