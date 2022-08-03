import React, {useState, useEffect} from "react";
import ChartList from "../componets/ChartList";
import ListItem from "../componets/ListItem";

const ChartBox = () =>{

const [charts, setCharts] = useState([]);
const [genre, setGenre] = useState("");



useEffect(()=> {
    getCharts();
},[]);

const onSelect = function(event){
    setGenre(event.target.value)
    console.log(genre)
};

useEffect(() => {
    getCharts();
},[genre])


const getCharts = function () {
if (genre === "all" || genre === ""){
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    .then(res => res.json())
    .then(charts => setCharts(charts.feed.entry))
    
}else if (genre === "rock"){
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json")
    .then(res => res.json())
    .then(charts => setCharts(charts.feed.entry))

}else if (genre === "dance"){
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json")
    .then(res => res.json())
    .then(charts => setCharts(charts.feed.entry))

}else if (genre === "country"){
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json")
    .then(res => res.json())
    .then(charts => setCharts(charts.feed.entry))

}}


return (

    <div className="main-container">

            <h1>Top 20</h1>     
        <select onChange={onSelect}>
            <option value="all">All</option>
            <option value="rock">Rock</option>
            <option value="dance">Dance</option>
            <option value="country">Country</option>
        </select>
        <ChartList charts={charts}></ChartList>
    </div>

)
};


export default ChartBox;

