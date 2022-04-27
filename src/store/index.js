

import { computed, makeAutoObservable, onBecomeObserved } from "mobx";
import { getEvents, addEvent, editEvent, deleteEvent } from "../../src/store/api";
import {deleteArchive} from "./api";
import moment from "moment";


class EventsStore {
    data = [];
    filteredData=[];



    constructor() {
        makeAutoObservable(this, {}, {
            autoBind: true,
        });

        onBecomeObserved(this, 'data', this.fetch);
    }

    get archiveData() {
        return this.data.filter(x => x.archive)
    }

    get notArchiveData() {
        return this.data.filter(x => !x.archive)
    }

    get getCardById(){
        return this.data.find(x => x._id)
    }

    get getAllCards(){
        return this.data
    }


    get pastData(){
        return this.data.filter(x => moment(x.date).isBefore(moment(),'day') && !x.archive)
    }

    get todayData(){
        return this.data.filter(x => moment(x.date).isSame(moment(),'day') && !x.archive)
    }

    get futureData(){
        return this.data.filter(x => moment(x.date).isAfter(moment(),'day') && !x.archive)
    }

    get favoriteData(){
        return this.data.filter(x =>  !x.archive && x.favorite)
    }

    get newEvents(){
        return this.data.filter(x => !x.archive).sort((a, b) => moment(b.date, 'YYYY-MM-DD') - moment(a.date, 'YYYY-MM-DD'))
    }

    get oldEvents(){
        return this.data.filter(x => !x.archive).sort((a, b) => moment(a.date, 'YYYY-MM-DD') - moment(b.date, 'YYYY-MM-DD'))
    }
    get defaultEvents(){
        return this.data.filter(x => !x.archive)
    }



    *fetch() {
        const response = yield getEvents();
        this.data = response;
        this.filteredData = response.filter(x=>!x.archive);
    }

    *addEvent(data) {
        yield addEvent(data);
        yield this.fetch();
    }

    *editEvent(data) {
        yield editEvent(data);
        yield this.fetch();
    }

    *deleteEvent(id) {
        yield deleteEvent(id);
        yield this.fetch();
    }

    *deleteArchive(data){
        yield deleteArchive(data);
        yield this.fetch(data);
    }
}


export const events = new EventsStore();