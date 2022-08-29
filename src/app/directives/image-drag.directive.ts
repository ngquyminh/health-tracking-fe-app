import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Output,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from '../interfaces/directives/file-handle';

@Directive({
  selector: '[appImageDrag]',
})
export class ImageDragDirective {
  @Output('files') files: EventEmitter<FileHandle[]> = new EventEmitter();
  // @HostBinding('style.background') public background = '#eee';
  constructor(private sanitizer: DomSanitizer) {}
  @HostListener('dragover', ['$event']) public onDragOver(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    // this.background = '#999';
  }
  @HostListener('dragleave', ['$event']) public onDragLeave(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    // this.background = '#eee';
  }

  private updateImages(fileList: FileList | null) {
    let files: FileHandle[] = [];
    if (fileList) {
      for (let i = 0; i < fileList.length; i++) {
        const file = fileList[i];
        const url = this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        );
        files.push({
          file,
          url,
        });
      }
    }
    console.log({ files });
    if (files.length > 0) {
      this.files.emit(files);
    }
  }

  @HostListener('drop', ['$event']) public onDrop(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    // this.background = '#eee';
    const { dataTransfer } = evt;
    if (dataTransfer) {
      const fileList = dataTransfer.files;
      this.updateImages(fileList);
    }
  }

  @HostListener('change', ['$event']) public onImageChange(evt: Event) {
    evt.preventDefault();
    evt.stopPropagation();
    // this.background = '#eee';
    const element = evt.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    this.updateImages(fileList);
  }
}
