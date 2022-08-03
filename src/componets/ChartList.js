import React from "react";
import ListItem from "./ListItem";

const ChartList = (({charts})=>{

    const chartItems = charts.map((chart, index) => {
        return <ListItem chart={chart} key={index}/>
        })

    return(
        <ol>
            {chartItems}
        </ol>
    );


})


export default ChartList;