import React, { Component } from 'react'
import {Link} from "react-router-dom"

type CardProps = {
    anime:any
}

export default class Card extends Component<CardProps> {
   
  render() {
    return (
        <div className="card">
        <div className="cover">
          <Link to={`/details/${this.props.anime.mal_id}`}><img src={this.props.anime.images.jpg.image_url} alt="cover" /></Link>
          <div className="play-icon">
            <i className="fa fa-play"></i>
          </div>
        </div>
        <div className="card-content">
          <p style={{color:"white",fontSize:"12px"}}>{this.props.anime.title}</p>
        
        </div>
      </div>
    )
  }
}
