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
  editAction: boolean = false;
  show:boolean;
  hide:boolean;
  @Output() person: Person;
  constructor() { }

  ngOnInit(): void {
    this.members = members;
  }

  onMemberAdded(person: Person){
   // console.log(person);
   if(person !== undefined){
    this.members.push(person);
   }
    this.showAction = false;
    //console.log(this.members);
  }
  onAction() { 
    this.showAction = !this.showAction; 

    if(this.showAction){   
      this.showAction = true; 
      this.editAction = false;
    } 
  } 
  onEditPerson(person: Person){
    this.person = person;
    this.editAction = true;
    this.showAction = false;
    //console.log(this.person);
  }

  onUpdateMember(person: Person){
    // console.log("old person"+ this.person.name);
    // console.log("new person"+ person.name);

  this.members = this.members.map((pern: Person) => {
      if(pern.name === this.person.name){
        pern = person;
      }
      return pern;
    });
    this.editAction = false;
  }

  onDeletePerson(name){
   for(let i = 0; i < this.members.length; i++){
     if(this.members[i].name === name){
       this.members.splice(i,1);
     }
   }
    
  }
}
