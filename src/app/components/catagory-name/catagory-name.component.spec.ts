import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagoryNameComponent } from './catagory-name.component';

describe('CatagoryNameComponent', () => {
  let component: CatagoryNameComponent;
  let fixture: ComponentFixture<CatagoryNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatagoryNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatagoryNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
