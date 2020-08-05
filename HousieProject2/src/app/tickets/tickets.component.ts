import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Person } from '../person.model';
import { members } from '../members.data';


@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
  members: Person[];
  showAction: boolean = false;
  show:boolean;
  hide:boolean;
  constructor() { }

  ngOnInit(): void {
    this.members = members;
  }

  onMemberAdded(person: Person){
    this.members.push(person);
    console.log(this.members);
  }
  onAction() { 
    this.showAction = !this.showAction; 

    if(this.showAction){   
      this.showAction = true; 
    } 
  } 
}
