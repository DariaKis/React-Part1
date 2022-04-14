import React from 'react';
import Header from "../components/header";
import Board from "../components/board";
import {AppRoute} from "../routing/routing";

const Archive=()=>{
    return(
        <React.Fragment>
            <Header mode={AppRoute.ARCHIVE}/>
            <section className="main__wrapper">
                <Board />
            </section>
        </React.Fragment>
    )
};

export default Archive