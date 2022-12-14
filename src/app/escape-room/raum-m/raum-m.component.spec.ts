import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaumMComponent } from './raum-m.component';

describe('RaumMComponent', () => {
  let component: RaumMComponent;
  let fixture: ComponentFixture<RaumMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaumMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaumMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
