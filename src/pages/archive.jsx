import React from 'react';
import Header from "../components/header";
import Board from "../components/board";
import {useLocation} from 'react-router-dom'
import {events} from "../store";
import {observer} from "mobx-react-lite";
import '../css/deleteBtn.css'

const Archive=observer(()=>{
    const {archiveData}=events;
    const { pathname } = useLocation();

    const deleteAll=(evt)=>{
        evt.preventDefault();
        events.deleteArchive(
            {}
        )
    };


    return(
        <React.Fragment>
            <Header mode={pathname}/>
            <section className="main__wrapper">
                <Board events={archiveData}/>
                <button className="delete-all" type="button" onClick={deleteAll}>Удалить все</button>
            </section>
        </React.Fragment>
    )

});

export default Archive