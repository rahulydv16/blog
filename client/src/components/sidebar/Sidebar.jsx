import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import { url } from "../../config/config";
import React from "react";

let id = 0;

export default function Sidebar({data}) {
  const [cats, setCats] = useState([]);
  
  useEffect(() => {
    let temp = [];
    
    for(const d of data) temp.push(d.category)
    
    setCats(temp);
    
    
  }, [data]);
  return (
    <div className="sidebar">
      <div className="sidebarTitle">Categories</div>
      <div className="listContainer">
      {cats && cats.map((c) => (
            // <Link to={`/?cat=${c.name}`} className="link">
            <div>
            
            <div className="sidebarListItem" key={id++}>{cats}</div>
</div>
          ))}
      </div>
      {/* <div className="sidebarItem">
      <span className="sidebarTitle">CATEGORIES</span>
        <div className="sidebarList">
          {cats && cats.map((c) => (
            // <Link to={`/?cat=${c.name}`} className="link">
            <div className="sidebarListItem" key={id++}>{cats}</div>
            
          ))}
        </div> */}
      </div>
      
        
      
      

  );
}

function Test (temp) {

  console.log(temp);

  return(
    <div>bruh</div>
  )
}
