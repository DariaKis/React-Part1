import React from 'react';
import Header from "../components/header";
import Board from "../components/board";
import Filter from "../components/filter";

const Main=(props)=>{

    return(
        <React.Fragment>
            <Header mode={props.match.path}/>
            <section className="main__wrapper">
                <Filter />
                <Board mode={props.match.path}/>
                {/*<Mock/>*/}
            </section>

        </React.Fragment>
    )
};


export default Main;