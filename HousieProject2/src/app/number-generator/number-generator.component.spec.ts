import { async, ComponentFixture, TestBed, fakeAsync, tick, discardPeriodicTasks, flush } from '@angular/core/testing';
import { NgxSpinnerService, NgxSpinnerModule } from "ngx-spinner";
import { NumberGeneratorComponent } from './number-generator.component';

describe('NumberGeneratorComponent', () => {
  let component: NumberGeneratorComponent;
  let fixture: ComponentFixture<NumberGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberGeneratorComponent ],
      providers: [ NgxSpinnerService ],
      imports: [ NgxSpinnerModule ]
    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NumberGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('generate a number', fakeAsync(() => {
    spyOn(Math, 'random').and.returnValue(0.1);
    component.numberGenerator();
    tick(1000);
    expect(component.number).toEqual(10);
    expect(component.displayNumber).toBeTruthy();
    flush();
  }));  
  
  it('If number already exists', fakeAsync(() => {
    spyOn(Math, 'random').and.returnValues(0.7, 0.2);
    component.randomNumberList = [62];
    component.number = 63;
    component.numberGenerator();
    tick(1000);
    expect(component.number).toEqual(19);
    expect(component.displayNumber).toBeTruthy();
    flush();
  }));
  
  
});
