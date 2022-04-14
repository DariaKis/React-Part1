import React from 'react';
import Header from "../components/header";
import Board from "../components/board";
import Filter from "../components/filter";
import {AppRoute} from "../routing/routing";
import Mock from "../components/mock";

const Main=()=>{
    return(
        <React.Fragment>
            <Header mode={AppRoute.MAIN}/>
            <section className="main__wrapper">
                <Filter />
                <Board mode={AppRoute.MAIN}/>
                {/*<Mock/>*/}
            </section>

        </React.Fragment>
    )
};


export default Main;