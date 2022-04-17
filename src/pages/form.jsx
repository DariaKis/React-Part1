import React from "react";
import Header from "../components/header";
import Filter from "../components/filter";
import Adding from "../components/adding";
import Edit from "../components/edit";


const Form=(props)=>{

    const {id}=props.match.params;
    const check=()=>{
        return id? <Edit/>: <Adding/>
    };

    return(
        <React.Fragment>
            <Header mode={props.match.path}/>
            <section className="main__wrapper">
                <Filter mode={props.match.path}/>
                {check()}
            </section>
        </React.Fragment>
    )
};


export default Form;