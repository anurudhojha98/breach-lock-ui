import { Component, OnInit, ViewChild } from '@angular/core';
import { CSVRecord } from '../CSVModel';
import { UploadService } from '../services/upload.service';

@Component({
  selector: 'app-uploadpage',
  templateUrl: './uploadpage.component.html',
  styleUrls: ['./uploadpage.component.scss'],
})
export class UploadpageComponent implements OnInit {

  constructor(private uploadService: UploadService) { }
  public fileToUpload: File = null;
  public ngOnInit() { }
  public handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
  public uploadFileToActivity() {
    this.uploadService.postFile(this.fileToUpload).subscribe((data) => {
      console.log(data);
    }, (error) => {
      console.log(error);
    });
  }
}
