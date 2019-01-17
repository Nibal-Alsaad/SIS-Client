import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentCategoryDetailsComponent } from './department-category-details.component';

describe('DepartmentCategoryDetailsComponent', () => {
  let component: DepartmentCategoryDetailsComponent;
  let fixture: ComponentFixture<DepartmentCategoryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentCategoryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentCategoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
