import React, { useState} from "react";
import { useParams, useHistory } from 'react-router-dom';
import moment from "moment";
import {events} from "../store";
import {observer} from "mobx-react-lite";


const Adding=observer(()=>{
    const{id}=useParams();
    const {getAllCards} = events;
    let event = getAllCards.find(item => item._id === id);


    const [form, setForm] = useState({
        theme: id? event.theme :"",
        comment: id? event.comment: "" ,
        date: id?  (moment(event.date).format('YYYY-MM-DD[T]hh:mm')) : moment(new Date()).format('YYYY-MM-DD[T]hh:mm'),
    });


    const handleFieldChange = (evt ) => {
        const { name, value} = evt.target;
        setForm({...form, [name]: value});
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
    };

    const history = useHistory();
    function goHome() {
        history.push('/');
    }
    const handleToAdd=(evt)=>{
        evt.preventDefault();
        events.addEvent({
            theme:form.theme,
            comment:form.comment,
            date:moment(form.date).format('YYYY-MM-DD[T]hh:mm'),
        });
        goHome();
    };


    const handleToEdit=(evt)=>{
        evt.preventDefault();
        events.editEvent({
            id:event._id,
            theme:form.theme,
            comment:form.comment,
            date:moment(form.date).format('YYYY-MM-DD[T]hh:mm'),
            favorite:event.favorite,
            archive:event.archive,
        });
        goHome();
    };



    return(
        <section className="board"  onSubmit={handleSubmit}>
        <form className="board__form" >

            {id && <h2 className="board__title">Редактирование события</h2> || <h2 className="board__title">Добавить события</h2>}

            <fieldset className="board__field board__field--theme">
                <label htmlFor="theme" className="board__label board__label--theme">Тема:</label>
                <textarea
                    type="text"
                    className="board__input board__input--theme"
                    onChange={handleFieldChange}
                    name="theme"
                    id="theme"
                    required
                    defaultValue={form.theme}
                >

                </textarea>
            </fieldset>
            <fieldset className="board__field board__field--comment" >
                <label htmlFor="comment" className="board__label board__label--comment">Комментарий:</label>
                <textarea
                    type="text"
                    className="board__input board__input--comment"
                    onChange={handleFieldChange}
                    name="comment"
                    required
                   defaultValue={form.comment}

                >

                </textarea>
            </fieldset>
            <fieldset className="board__field board__field--date">
                <label htmlFor="date" className="board__label board__label--date">Дата:</label>
                <input
                    type="datetime-local"
                    className="board__input board__input--date"
                    onChange={handleFieldChange}
                    name="date"
                    defaultValue={form.date}

                />
            </fieldset>
            <div className="btns">

                {id && <button  type="submit" className="btn-submit" onClick={handleToEdit} >Сохранить</button> || <button  type="submit" className="btn-submit" onClick={handleToAdd}>Добавить</button>}

                <button type="reset" className="btn-reset">Очистить</button>
            </div>
        </form>
        </section>
    )
});


export default Adding;