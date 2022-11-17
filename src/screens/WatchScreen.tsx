import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { SelectPicker } from "rsuite";
import { useNavigate } from "react-router-dom";

export default function WatchScreen() {
  let [watch_link1, setWatchlink1] = useState("");
  let [downlaod_links, setDownlaodlinks] = useState([]);
  let params = useParams();

  var episodes_number: number = Number(localStorage.getItem("episodes"));
  const episodes = [];
  const [isLoading, setLoading] = useState(true);
  for (let i = 1; i < episodes_number; i++) {
    episodes.push(i);
  }

  const data = episodes.map((item) => ({ label: item, value: item }));
  const navigate = useNavigate();
  
  const [downloadData,setdownloads]  = useState([])
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `http://127.0.0.1:8000/api/search?query=${params.name}&episode=${params.episode}}`
      )
      .then((response) => {
        setWatchlink1(response.data.data);
        setLoading(false);
      });

    axios
      .get(
        `http://127.0.0.1:8000/api/download?query=${params.name}&episode=${params.episode}`
      )
      .then((res) => {
        setDownlaodlinks(res.data.data);
        setdownloads(res.data.data.map((item:any)=>({label:item.name,value:item.link})))

      });


  }, [params.episode]);

  return (
    <div >
      <div className=""  style={{ textAlign:"center" }}>
      <SelectPicker data={data} onChange={(value:any,event)=>navigate(`/watch/${params.name}/${value}`)} style={{ width: 224,padding:10,marginTop:20,marginBottom:20,marginRight:'auto',marginLeft:"auto"}} />
      <SelectPicker data={downloadData} onChange={(value:any,event)=> window.open(value, '_blank', 'noopener,noreferrer')}style={{ width: 224,padding:10,marginTop:20,marginBottom:20,marginRight:'auto',marginLeft:"auto"}} />


      </div>


      <div className="col-lg-10" style={{ margin: "auto" }}>
        <div className="video-container">
          <iframe
            scrolling="no"
            allowFullScreen={true}
            className="responsive-iframe"
            src={watch_link1}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
