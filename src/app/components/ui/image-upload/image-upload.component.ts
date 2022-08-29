import { Component, OnInit } from '@angular/core';
import { FileHandle } from 'src/app/interfaces/directives/file-handle';
import { ImageUploadService } from './image-upload.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
})
export class ImageUploadComponent implements OnInit {
  uploadedFiles: FileHandle[] = [];
  images: string[] = [];
  constructor(private imageUploadService: ImageUploadService) {}
  ngOnInit(): void {}
  filesDropped(files: FileHandle[]) {
    this.uploadedFiles = files;
  }

  click() {
    console.log('first');
  }
}
