import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../person.model';
@Injectable()
export class TicketService {

    constructor(private http: HttpClient){}

    generateTickets(persons: Person[]){
        const headers = {
            "content-type": "application/json"
        };

        const url = "http://localhost:8080/funtiHousie/generateTickets"
        return this.http.post(url, persons, {headers});
    }

    cacheClear(){
        const url = "http://localhost:8080/funtiHousie/clearCache"
        return this.http.get(url);
    }
}