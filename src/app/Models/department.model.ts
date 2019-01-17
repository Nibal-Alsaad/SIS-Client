import { DepartmentCategoryModel } from './department-category.model';
import { CourseModel } from './course.model';
import { StudentModel } from './student.model';
import { TeacherModel } from './teacher.model';

export class DepartmentModel{
   
    constructor()
    {       
        this.students = [];
        this.teachers = [];
        this.courses = [];
        this.category=new DepartmentCategoryModel();
    }

    public  id:string;
    public  enName: string;
    public  arName :string; 
    public  code  :string;
    public  categoryId  :string;

    public  category:DepartmentCategoryModel ; 
    public  courses  :CourseModel[];
    public  students :StudentModel[];
    public  teachers :TeacherModel[];
}