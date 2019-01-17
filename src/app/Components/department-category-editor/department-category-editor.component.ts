import { DepartmentCategoryService } from './../../Services/HTTP/department-category.service';
import { DepartmentCategoryModel } from './../../Models/department-category.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'department-category-editor',
  templateUrl: './department-category-editor.component.html',
  styleUrls: ['./department-category-editor.component.scss']
})
export class DepartmentCategoryEditorComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private departmentCategoryService:DepartmentCategoryService)
     {
      
     }
    selectedDepartmentCategoryId:string;
    selectedDepartmentCategory:DepartmentCategoryModel=new DepartmentCategoryModel();
    operationType:string;

ngOnInit(){
  this.route.paramMap
  .subscribe(param=>{
    this.operationType=param.get('type');
    if(param.get('type')=="Edit")
    {
  this.route.queryParamMap
    .pipe(switchMap(queryParams=>{
    this.selectedDepartmentCategoryId=queryParams.get('id');
    return this.departmentCategoryService
    .GetDepartmentCategory(this.selectedDepartmentCategoryId);
     }
      ))
      .subscribe(res=>this.selectedDepartmentCategory=res)
        }
      })
    }

onSave(categoryModel:DepartmentCategoryModel){
  if(this.operationType=="Add"){
  this.departmentCategoryService.AddDepartmentCategory(categoryModel)
  .pipe(switchMap(()=>{
  return this.router.navigate(['/DepartmentCategory'],{relativeTo:this.route});
  }))
  .subscribe();
}
  else  if(this.operationType=="Edit"){
  this.departmentCategoryService.EditDepartmentCategory(categoryModel)
  .pipe(switchMap(()=>{
  return this.router.navigate(['/DepartmentCategory'],{relativeTo:this.route});
  }))
  .subscribe();
}

}
}

