import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";

import React, { Component } from 'react'

const actorsArr = contacts.splice(0,5)
console.log(actorsArr, "actorss");

function compareName(a,b){
  if (a.name < b.name){
    return -1;
  } else if (a.name > b.name){
    return 1;
  } else {
    return 0;
  }
}

function compareP (a,b){
  if (a.popularity < b.popularity){
    return -1;
  } else if (a.popularity > b.popularity){
    return 1;
  } else {
    return 0;
  }
}


class App extends Component {

  state ={
    celebs : actorsArr
  }

  // arrNames = () =>{
  //   let actors = )
  //   }

  randomCeleb = () => {
    let allCelebs = [...this.state.celebs] //... don't modify the original
    let randomI = Math.floor(Math.random()*(allCelebs.length))
    
    allCelebs.push(contacts[randomI])
    this.setState({
      celebs: allCelebs
    })
  }

  SortName = () => {
    this.setState({
      celebs: [...this.state.celebs].sort(compareName)
    })
  }

  SortPopularity = () => {
    this.setState({
      celebs: [...this.state.celebs].sort(compareP)
    })
  }

  deleteCeleb = (actorId) => {
    const remainingCeleb = this.state.celebs.filter((celebs) => {
      if(celebs.id !== actorId) {
        return true; //include
      } else if(celebs.id === actorId) {
        return false; //exclude
      }
    })

    this.setState ({celebs: remainingCeleb});

    console.log(this.remainingCeleb, "this.remainingCeleb") //undefined
  }

  render() {
    return (

      <div className="main" >

        <button onClick={this.SortName} > Sort By Name </button>
        <button onClick={this.SortPopularity} > Sort By popularity </button>
        <button onClick={this.randomCeleb} > Add Random </button>
        <table className="tableInfo" > 
          <tr>
            <th> Picture </th>
            <th> Name </th>
            <th> Popularity </th>
          </tr>
        </table>
  
        {this.state.celebs.map((eachActor, i)=>{
        
      return(
        <div  >
          
          <table className="table" >
            <tr key={eachActor.id} >
              <td> <img src={eachActor.pictureUrl} width="150" className="img" /> </td>
              <td> {eachActor.name} </td>
              <td> {eachActor.popularity} </td>
              <td>
                <button onClick={()=>
                    {this.deleteCeleb(eachActor.id)}
                  } > Delete </button>
            </td>

            </tr>

          </table>

        </div>
        )
      
      })    
    }
     </div> /*1stReturn */
  )
  }
}



export default App;
