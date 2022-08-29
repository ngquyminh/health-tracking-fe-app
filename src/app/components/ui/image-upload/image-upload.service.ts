import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageUploadService {
  constructor() {}

  onImagesChange(file: File, images: string[]) {
    const reader = new FileReader();
    reader.onload = () => {
      images.push(reader.result as string);
    };
    reader.readAsDataURL(file);
  }
}
