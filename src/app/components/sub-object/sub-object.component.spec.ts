import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubObjectComponent } from './sub-object.component';

describe('SubObjectComponent', () => {
  let component: SubObjectComponent;
  let fixture: ComponentFixture<SubObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubObjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
