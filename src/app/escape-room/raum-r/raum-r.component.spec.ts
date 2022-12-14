import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaumRComponent } from './raum-r.component';

describe('RaumRComponent', () => {
  let component: RaumRComponent;
  let fixture: ComponentFixture<RaumRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaumRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaumRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
