import React, {useState} from 'react';
import Card from "./card";
import Sort from "./sort";
import {AppRoute} from "../routing/routing";
import { useLocation } from 'react-router-dom';


const Board=({events})=>{
    const { pathname } = useLocation();

    const [step, setStep]=useState(15);
    const handleLoadMore=()=>{
        events.length >= step ? setStep(step + 10): setStep(events.length)
    };


    return (
        <section className="board">
           { pathname===AppRoute.MAIN && <Sort />}
            < div className="board__events">
                {events.slice(0, step).map(event => <Card event={event} key={event._id} />)}
            </div>
            <button className="load-more" type="button" onClick={handleLoadMore} >Загрузить еще</button>
        </section>
    );
};


export default Board;

