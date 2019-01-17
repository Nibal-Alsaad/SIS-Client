import { TestBed } from '@angular/core/testing';

import { DepartmentCategoryService } from './department-category.service';

describe('DepartmentCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DepartmentCategoryService = TestBed.get(DepartmentCategoryService);
    expect(service).toBeTruthy();
  });
});
