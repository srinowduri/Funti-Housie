import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, Input } from '@angular/core';
import { Person } from '../person.model';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('phoneInput') phoneInputRef: ElementRef;
  @ViewChild('ticketInput') ticketInputRef: ElementRef;
  @Output() memberAdded = new EventEmitter<Person>();

  constructor() { }

  ngOnInit(): void {
    
  }

  onAddMember(){
    const memberName = this.nameInputRef.nativeElement.value;
    console.log("name: " + memberName);
    const phoneNum = this.phoneInputRef.nativeElement.value;
    const numTicket = this.ticketInputRef.nativeElement.value;
    const newMember = new Person(memberName, phoneNum, numTicket);
    console.log("Added member: " + newMember);
    this.memberAdded.emit(newMember); 
    
  }

  onCancel(){
    this.memberAdded.emit();
  }
}
