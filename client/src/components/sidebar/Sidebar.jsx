
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

import React from "react";



export default function Sidebar({data}) {
  const [cats, setCats] = useState([]);
  
  

  useEffect(() => {
    
    let temp = [];
    let map = new Map();
    for(const d of data){
        if(!map.has(d.category)){
          temp.push(d.category);
          map.set(d.category,d.category);
        }
    }
    
    setCats(temp);
    
    
    
  },[data]);
  return (
    <div className="sidebar">
      <div className="sidebarTitle">Categories</div>
      <div className="listContainer">
      {cats && cats.map((c) => (
            
            <div key={Math.random()} className="listItem">
            <Link to={`/categories/${c}`} className="link" >
            <div className="sidebarListItem">{c}</div>
            </Link>
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


