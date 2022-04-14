import React from "react";
import Header from "../components/header";
import {AppRoute} from "../routing/routing";
import Filter from "../components/filter";
import Adding from "../components/adding";


const Form=()=>{
    return(
        <React.Fragment>
            <Header mode={AppRoute.FORM}/>
            <section className="main__wrapper">
                <Filter mode={AppRoute.FORM}/>
                <Adding />
            </section>
        </React.Fragment>
    )
};


export default Form;