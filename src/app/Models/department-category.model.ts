import { DepartmentModel } from "./department.model";

export class DepartmentCategoryModel{


    public id:string;
    public arName:string;
    public enName:string;
    public code:string;
    public departments:DepartmentModel[]; 

    constructor() {    
        this.enName='',
        this.arName='',
        this.code='',
        this.departments=[]
    }
}