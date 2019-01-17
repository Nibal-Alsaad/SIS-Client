import { ActivatedRoute } from '@angular/router';
import { DepartmentCategoryModel } from 'src/app/Models/department-category.model';
import { DepartmentCategoryService } from './../../Services/HTTP/department-category.service';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-department-category-details',
  templateUrl: './department-category-details.component.html',
  styleUrls: ['./department-category-details.component.scss']
})
export class DepartmentCategoryDetailsComponent implements OnInit {

  constructor(
    private deprtmentCategoryService:DepartmentCategoryService,
    private route:ActivatedRoute
    ) { }
selectedDepartmentCategoryId:string;
selectedDepartmentCategory:DepartmentCategoryModel=new DepartmentCategoryModel();
  ngOnInit() {
 this.route.paramMap
 .pipe(switchMap(param=>{
   this.selectedDepartmentCategoryId=param.get('id');
   return this.deprtmentCategoryService
   .GetDepartmentCategory(this.selectedDepartmentCategoryId);
 }))
 .subscribe(res=>this.selectedDepartmentCategory=res)
  }

}
