import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordUnknowComponent } from './word-unknow.component';

describe('WordUnknowComponent', () => {
  let component: WordUnknowComponent;
  let fixture: ComponentFixture<WordUnknowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordUnknowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordUnknowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
