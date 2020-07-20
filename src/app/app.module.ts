import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CovalentFileModule } from '@covalent/core/file';
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentStepsModule } from '@covalent/core/steps';
import { FileInputConfig, MaterialFileInputModule, NGX_MAT_FILE_INPUT_CONFIG } from 'ngx-material-file-input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatalistpageComponent } from './datalistpage/datalistpage.component';
import { UploadpageComponent } from './uploadpage/uploadpage.component';

export const config: FileInputConfig = {
  sizeUnit: 'Octet',
};

@NgModule({
  declarations: [
    AppComponent,
    UploadpageComponent,
    DatalistpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    CovalentFileModule,
    MaterialFileInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  providers: [{ provide: NGX_MAT_FILE_INPUT_CONFIG, useValue: config }],
  bootstrap: [AppComponent],
})
export class AppModule { }
