import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordUnknowCardComponent } from './word-unknow-card.component';

describe('WordUnknowCardComponent', () => {
  let component: WordUnknowCardComponent;
  let fixture: ComponentFixture<WordUnknowCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordUnknowCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordUnknowCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
