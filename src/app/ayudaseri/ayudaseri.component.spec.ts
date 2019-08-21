import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AyudaseriComponent } from './ayudaseri.component';

describe('AyudaseriComponent', () => {
  let component: AyudaseriComponent;
  let fixture: ComponentFixture<AyudaseriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyudaseriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AyudaseriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
