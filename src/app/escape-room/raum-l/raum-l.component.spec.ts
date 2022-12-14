import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaumLComponent } from './raum-l.component';

describe('RaumLComponent', () => {
  let component: RaumLComponent;
  let fixture: ComponentFixture<RaumLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaumLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaumLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
