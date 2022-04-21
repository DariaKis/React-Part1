import React from "react";
import { AppRoute } from '../routing/routing';
import {Link} from "react-router-dom";


const Header=(props)=>{

    return (
        <section className="main__header">
            <section className="main__header-wrap">
                <span className="main__header-logo">SomeList</span>
                <div className="main__header-group-lnk">
                    <Link to={AppRoute.MAIN} className={`main__header-lnk ${props.mode === AppRoute.MAIN && 'lnk-active'}`}>События</Link>
                    <Link to={AppRoute.ARCHIVE} className={`main__header-lnk ${props.mode  ===AppRoute.ARCHIVE && 'lnk-active'}`}>Архив</Link>
                    <Link to={AppRoute.FORM} className={`main__header-lnk ${props.mode === AppRoute.FORM && 'lnk-active'}`}>Форма</Link>
                </div>
            </section>
        </section>
    )
};
export default Header;