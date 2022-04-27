import React from "react";
import { AppRoute } from '../routing/routing';
import {Link} from "react-router-dom";
import { useLocation } from 'react-router-dom';


const Header=()=>{
    const { pathname } = useLocation();

    return (
        <section className="main__header">
            <section className="main__header-wrap">
                <span className="main__header-logo">SomeList</span>
                <div className="main__header-group-lnk">
                    <Link to={AppRoute.MAIN} className={`main__header-lnk ${pathname === AppRoute.MAIN && 'lnk-active'}`}>События</Link>
                    <Link to={AppRoute.ARCHIVE} className={`main__header-lnk ${pathname  ===AppRoute.ARCHIVE && 'lnk-active'}`}>Архив</Link>
                    <Link to={AppRoute.ADD } className={`main__header-lnk ${pathname.substr(0, 5) === AppRoute.ADD  && 'lnk-active'}`} >Форма</Link>
                </div>
            </section>
        </section>
    )
};
export default Header;