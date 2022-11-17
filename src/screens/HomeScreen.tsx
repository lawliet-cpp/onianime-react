import React, { Component } from "react";
import Card from "../components/Card";


import axios from "axios";

export default class HomeScreen extends Component {
  state = {
    animes:[],
    recentAnimes:[],
   
  }
  componentDidMount(): void {
    axios.get(
      "https://api.jikan.moe/v4/top/anime?limit=18"
    ).then((res)=>{
        this.setState({
            ...this.state,
            animes:res.data.data
        })
    })
    axios.get(
      "https://api.jikan.moe/v4/seasons/upcoming?limit=12"
    ).then((res)=>{
      console.log(res.data)
        this.setState({
            ...this.state,
            recentAnimes:res.data.data
        })
    })
  }
  
  render(): React.ReactNode {
    return (
     
      <div className="home">
        <h4 style={{ marginTop: "50px", marginBottom: "15px",textAlign:"left",marginLeft:"15px" }}>
          Upcoming Animes
        </h4>
       <div className="upcoming">
       {this.state.recentAnimes.map((anime:any) =>
        
        <Card  anime={anime} key={anime.mal_id}/>
                  
      )}

       </div>
     

<h4 style={{ marginTop: "50px", marginBottom: "15px",textAlign:"left",marginLeft:"15px" }}>
          Best Animes
        </h4>
       <div></div>
      {this.state.animes.map((anime:any) =>
        
        <Card  anime={anime} key={anime.mal_id}/>
                  
      )}
      
       
    
    
      

      </div>
     
     
      
    );
  }
}
