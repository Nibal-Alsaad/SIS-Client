import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentCategoryEditorComponent } from './department-category-editor.component';

describe('DepartmentCategoryEditorComponent', () => {
  let component: DepartmentCategoryEditorComponent;
  let fixture: ComponentFixture<DepartmentCategoryEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentCategoryEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentCategoryEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
