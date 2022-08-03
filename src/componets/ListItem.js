import React from "react";


const ListItem = (({chart})  => {


return (
    <li>
        <p>{chart.title.label} </p>
        <img src={chart["im:image"][2]["label"]}/>
        <audio controls key={chart.link[1].attributes.href}>
            <source src={chart.link[1].attributes.href} type="audio/aac"/>
            </audio>
        </li> 
        

)})




export default ListItem;