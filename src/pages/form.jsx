import React from "react";
import Header from "../components/header";
import Filter from "../components/filter";
import Adding from "../components/adding";
import { useLocation } from 'react-router-dom';
import {events} from "../store";

import {observer} from "mobx-react-lite";

const Form=observer(()=>{

    const {getCardById}=events;
    const { pathname } = useLocation();

    return(
        <React.Fragment>
            <Header mode={pathname}/>
            <section className="main__wrapper">
                <Filter mode={pathname}/>
                <Adding event={getCardById} />
            </section>
        </React.Fragment>
    );
});


export default Form;