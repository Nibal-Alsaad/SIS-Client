import { Injectable } from '@angular/core';
import { DepartmentCategoryModel } from 'src/app/Models/department-category.model';
import { Observable } from 'rxjs';
import { API } from 'src/app/APIConfig';
import { HttpClient } from '@angular/common/http';
import { HeaderOptions } from '../header-option';
import { DepartmentModel } from 'src/app/Models/department.model';
@Injectable({
  providedIn: 'root'
})
export class DepartmentCategoryService {

  constructor(private http:HttpClient) { }

  GetAllDepartmentsCatergories():Observable<DepartmentCategoryModel[]>{
    return this.http.get<DepartmentCategoryModel[]>(API.url+"/DepartmentCategory/DepartmentsCatergories")
    ;
  }
  GetDepartmentCategory(id:string):Observable<DepartmentCategoryModel>{
    return this.http.get<DepartmentCategoryModel>(API.url+"/DepartmentCategory/"+id);
  }
  AddDepartmentCategory(categoryModel:DepartmentCategoryModel):Observable<Response>{
    return this.http.post<Response>(API.url+"/DepartmentCategory/Add",categoryModel,HeaderOptions);
  }
  EditDepartmentCategory(categoryModel:DepartmentCategoryModel):Observable<Response>{
    return this.http.put<Response>(API.url+"/DepartmentCategory/Edit",categoryModel,HeaderOptions);
  }
  DeleteDepartmentCategory(categoryModel:DepartmentCategoryModel):Observable<Response>{
    return this.http.post<Response>(API.url+"/DepartmentCategory/Delete",categoryModel,HeaderOptions);
  }
}
