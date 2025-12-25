import { useState, useEffect } from "react";
import "../styles/Card.css"

export default function Card(props){
    const [url, setUrl] = useState('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3htN3BkNzAwdHN0ank4azBlMmYwY3JycTM2NDZ0aGVuMnE2MXBzcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/10ADhj1QPawFna/giphy.gif');
    
    useEffect(() => {
        async function getGIF(){
            try{
                const response = await fetch(`https://api.giphy.com/v1/gifs/${props.id}?apikey=FWVpvVmlCQZPzJAF40vchi6tCni0rtBt`);
                if(!response.ok){
                    throw new Error(response.status);
                }
                const x = await response.json();
                setUrl(x.data.images.original.url);
            }catch(e){
                console.log(e.message);
            }
        }
        getGIF();
    })

    return (
        <li className="item" onClick={props.onClick}>
            <img src={url} alt={props.name}/>
            <p>{props.name}</p>
        </li>
    )
}