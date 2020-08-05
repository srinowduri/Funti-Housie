import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiGeneratorComponent } from './emoji-generator.component';

describe('EmojiGeneratorComponent', () => {
  let component: EmojiGeneratorComponent;
  let fixture: ComponentFixture<EmojiGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmojiGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmojiGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Generate an emoji', () => {
    spyOn(Math, 'random').and.returnValue(0.6);
    
    component.generateEmoji();
    expect(component.emojiNum).toEqual('assets/emojis/46.png');
  });
});
