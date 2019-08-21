import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AyudandoComponent } from './ayudando.component';

describe('AyudandoComponent', () => {
  let component: AyudandoComponent;
  let fixture: ComponentFixture<AyudandoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyudandoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AyudandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
