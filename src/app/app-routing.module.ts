import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatalistpageComponent } from './datalistpage/datalistpage.component';
import { UploadpageComponent } from './uploadpage/uploadpage.component';

const routes: Routes = [
  { path: 'file-upload', component: UploadpageComponent },
  { path: 'data-list', component: DatalistpageComponent },
  { path: '**', redirectTo: '/file-upload' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
