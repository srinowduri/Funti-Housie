import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabetGeneratorComponent } from './alphabet-generator.component';

describe('AlphabetGeneratorComponent', () => {
  let component: AlphabetGeneratorComponent;
  let fixture: ComponentFixture<AlphabetGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlphabetGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphabetGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
