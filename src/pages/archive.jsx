import React from 'react';
import Header from "../components/header";
import Board from "../components/board";


const Archive=(props)=>{

    return(
        <React.Fragment>
            <Header mode={props.match.path}/>
            <section className="main__wrapper">
                <Board />
            </section>
        </React.Fragment>
    )
};

export default Archive