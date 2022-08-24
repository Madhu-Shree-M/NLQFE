import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilesDisplayComponent } from './mobiles-display.component';

describe('MobilesDisplayComponent', () => {
  let component: MobilesDisplayComponent;
  let fixture: ComponentFixture<MobilesDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilesDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobilesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
