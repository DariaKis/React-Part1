import React, {useState} from "react";
import {events} from "../store/index";
import {action} from "mobx";
import {observer} from "mobx-react-lite";

const Sort=observer(()=>{


    const{defaultEvents,oldEvents, newEvents}=events;

    const handleSort=action((e)=>{
        events.filteredData = events[e.target.value]
    });

    return (
        <div className="board__filter-list">
            <span className="board__filter--title">Сортировка:</span>
            <input
                type="radio"
                id="board__filter-default"
                className="board__filter visually-hidden"
                name="board-filter"
                onChange={handleSort}
                value={"defaultEvents"}
                disabled={!defaultEvents.length}
            />
            <label htmlFor="board__filter-default" className="board__filter-label">По умолчанию</label>
            <input
                type="radio"
                id="board__filter-new"
                className="board__filter visually-hidden"
                name="board-filter"
                onChange={handleSort}
                value={"newEvents"}
                disabled={!newEvents.length}
            />
            <label htmlFor="board__filter-new" className="board__filter-label" >Сначала новые</label>
            <input
                type="radio"
                id="board__filter-old"
                className="board__filter visually-hidden"
                name="board-filter"
                onChange={handleSort}
                value={"oldEvents"}
                disabled={!oldEvents.length}
            />
            <label htmlFor="board__filter-old" className="board__filter-label">Сначала старые</label>
        </div>
    )
});


export default Sort;