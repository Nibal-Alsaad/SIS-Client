import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmetCategoryComponent } from './departmet-category.component';

describe('DepartmetCategoryComponent', () => {
  let component: DepartmetCategoryComponent;
  let fixture: ComponentFixture<DepartmetCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmetCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmetCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
