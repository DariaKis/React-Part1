import React from 'react';
import Card from "./card";
import Sort from "./sort";
import {AppRoute} from "../routing/routing";
import Load from "./load";


const Board=(mode)=>{
const isMain=mode.mode===AppRoute.MAIN;
    return (
        <section className="board">
            { isMain && <Sort/>}
            < div className="board__events">
                < Card/>
                < Card/>
                < Card/>
                < Card/>
                < Card/>
                < Card/>
                < Card/>
                < Card/>
                < Card/>
                < Card/>
                < Card/>
                < Card/>
                < Card/>
                < Card/>
            </div>
            <Load/>
        </section>
    );
};


export default Board;