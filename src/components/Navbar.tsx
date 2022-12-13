import React, { useState } from "react";
import { Input, Button } from "rsuite";
import { Link } from "react-router-dom";
import "../App.css";
import { useNavigate } from "react-router-dom";
const App = (props: any) => {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();
  return (
    <div>
      <nav>
        <div className="logo">Onianime</div>
        <div style={{ width: "30%", display: "flex" }}>
          <Input
            onChange={(e) => setQuery(e)}
            style={{ backgroundColor: "transparent", borderColor: "#1675e0" }}
            placeholder=" Search Anime"
          />
          <div style={{ width: "70px", marginLeft: "10px" }}>
            <Button
              onClick={(e) => {
                navigate(`/search?query=${query}`);
                
              }}
              appearance="primary"
            >
              Search
            </Button>
          </div>
        </div>

        <ul>
          <li>
            <Link to="/">
              <a style={{ color: "white" }}>Home</a>
            </Link>
          </li>
          
          
        </ul>
      </nav>
    </div>
  );
};

export default App;
