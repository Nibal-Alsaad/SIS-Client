import { DepartmentCategoryModel } from './../../Models/department-category.model';
import { DepartmentCategoryService } from './../../Services/HTTP/department-category.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'departmet-category',
  templateUrl: './departmet-category.component.html',
  styleUrls: ['./departmet-category.component.scss']
})
export class DepartmetCategoryComponent implements OnInit {

 constructor(
   private departmentCategoryService:DepartmentCategoryService,
   private router:Router )
    { }

 departmentsCategories:DepartmentCategoryModel[]=[];
 displayedColumns: string[] = ['EnName', 'ArName', 'Code','Edit'];

 ngOnInit() {
    this.departmentCategoryService.GetAllDepartmentsCatergories()
    .subscribe(res=>this.departmentsCategories=res);
  }
  onDelete(categoryModel:DepartmentCategoryModel){
  this.departmentCategoryService.DeleteDepartmentCategory(categoryModel)
  .subscribe(()=>{
    this.router.navigateByUrl('/DepartmentCategoryEditor/Edit',{skipLocationChange: true})
     .then(()=>
     this.router.navigate(["DepartmentCategory"]));
   }
  )
}

}
