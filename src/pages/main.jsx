import React from 'react';
import Header from "../components/header";
import Board from "../components/board";
import Filter from "../components/filter";
import { useLocation } from 'react-router-dom';
import {events} from "../store";
import {observer} from "mobx-react-lite";


const Main=observer(()=>{

    const {filteredData}=events;
    const { pathname } = useLocation();


    return(
        <React.Fragment>
            <Header mode={pathname}/>
            <section className="main__wrapper">
                <Filter />
                <Board events={filteredData} />
            </section>

        </React.Fragment>
    )
});


export default Main;


