import { RouterModule } from '@angular/router';
import {BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule } from './app-routing.module';
import {AppComponent } from './app.component';
import {HttpClientModule }    from '@angular/common/http';
import {DepartmetCategoryComponent } from './Components/departmet-category/departmet-category.component';
import {MatTableModule} from '@angular/material/table';
import {DepartmentCategoryService } from './Services/HTTP/department-category.service';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {DepartmentCategoryEditorComponent } from './Components/department-category-editor/department-category-editor.component';
import {DepartmentCategoryDetailsComponent } from './Components/department-category-details/department-category-details.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule} from '@angular/forms'
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    DepartmetCategoryComponent,
    DepartmentCategoryEditorComponent,
    DepartmentCategoryDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatListModule,
    RouterModule.forRoot([
      {path:'DepartmentCategoryEditor/:type',component:DepartmentCategoryEditorComponent},
      {path:'DepartmentCategory',component:DepartmetCategoryComponent},
      {path:'DepartmentCategoryDetails/:id',component:DepartmentCategoryDetailsComponent}

    ])
  ],
  providers: [
    DepartmentCategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
