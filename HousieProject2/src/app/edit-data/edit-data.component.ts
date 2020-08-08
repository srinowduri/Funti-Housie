import { Component, Input, OnInit, Output, OnChanges, EventEmitter } from '@angular/core';
import { Person } from '../person.model';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.scss']
})
export class EditDataComponent implements OnChanges {
@Input() person: Person;
@Output() memberUpdated = new EventEmitter<Person>();
personForm = this.formBuilder.group({
  name: [''],
  phone: [''],
  numTickets: ['']
})
  constructor(private formBuilder: FormBuilder) { }

  ngOnChanges(): void {
    if(this.personForm){
      this.personForm.patchValue(this.person);
    }
  }
 
  onSubmit(){
    this.memberUpdated.emit(this.personForm.value);
  }

}
