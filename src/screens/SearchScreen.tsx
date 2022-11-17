import React, {useState,useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from "axios"
import Card from '../components/Card'
export default function SearchScreen() {
    const [queryParams] = useSearchParams()
    const [animes,setAnimes] = useState([])
    useEffect(()=>{
        axios.get(`https://api.jikan.moe/v4/anime?q=${queryParams.get('query')}`)
        .then((res)=>{
            const data = res.data.data

            setAnimes(data)
        })
    },[queryParams.get('query')])
  return (
        <div className="home">
        <h4 style={{ marginTop: "50px", marginBottom: "15px",textAlign:"left",marginLeft:"15px" }}>
          Search Results
        </h4>
       
     
        {animes.map((anime:any)=>{
            return(
                <Card anime={anime}/>
            )
        })}
    </div>
    
  )
}
