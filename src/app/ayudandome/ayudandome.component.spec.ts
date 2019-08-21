import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AyudandomeComponent } from './ayudandome.component';

describe('AyudandomeComponent', () => {
  let component: AyudandomeComponent;
  let fixture: ComponentFixture<AyudandomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyudandomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AyudandomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
