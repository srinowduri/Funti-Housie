import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Person } from '../person.model';
import { members } from '../members.data';
import { TicketService } from '../service/ticketService.service';


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

  successMessage!: string;
  errorMessage!: string;
  @Output() person: Person;
  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.members = members;
  }

  onMemberAdded(person: Person){
   if(person !== undefined){
    this.members.push(person);
   }
    this.showAction = false;
   
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
  
  }

  onUpdateMember(person: Person){
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

  onGenerateTickets(persons: Person[]){
    this.ticketService.generateTickets(persons).subscribe( 
      member =>{
        this.successMessage = "Tickets are generated successfully";
        console.log("hi");
    },
    error =>{
      this.errorMessage = "Tickets generation Failed";
  });
  }

  onClearCache(){
    this.ticketService.cacheClear().subscribe(
     next => { this.successMessage = "Cache is cleared" },
     error => { this.errorMessage = "Cache is not cleared"}
    )
  }
}
