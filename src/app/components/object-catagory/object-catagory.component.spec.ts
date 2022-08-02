import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectCatagoryComponent } from './object-catagory.component';

describe('ObjectCatagoryComponent', () => {
  let component: ObjectCatagoryComponent;
  let fixture: ComponentFixture<ObjectCatagoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectCatagoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectCatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
