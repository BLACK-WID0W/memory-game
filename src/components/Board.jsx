import { useState } from "react";
import Card from "./Card";
import "../styles/Board.css"
import { characters } from "../data/characters";

function generateNumber(){
    return Math.floor(Math.random() * characters.length);
}

export default function Board(){
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedCount, setSelectedCount] = useState(0);
    let randomOrder = [];
    let newOrder = [];

    while(newOrder.length < characters.length){
        let newNumber = generateNumber();
        if(!randomOrder.includes(newNumber)){
            randomOrder.push(newNumber);
            newOrder.push(characters[newNumber]);
        }
    }

    console.log(randomOrder);

    return(
        <div className="board-cont">
            <h1 className="counter">Count: {selectedCount}/{characters.length}</h1>
            <ul className="board">
                {newOrder.map((character) => {
                    return (
                        <Card 
                            name={character.name} 
                            id={character.id} 
                            key={character.id}
                            onClick={() => {
                                if(!selectedItems.includes(character.id) && selectedItems.length <= characters.length){
                                    let newSet = [...selectedItems];
                                    newSet.push(character.id);
                                    setSelectedItems(newSet);
                                    setSelectedCount(selectedCount + 1);
                                }else{
                                    setSelectedItems([]);
                                    setSelectedCount(0);
                                }
                            }}
                        />
                    )
                })}
            </ul>
        </div>
    )
}