import { Pipe, PipeTransform } from '@angular/core';
import { AppContentService } from './content.service';


@Pipe({ name: 'appContentPipe' })
export class AppContentPipe implements PipeTransform {
  constructor(public contentService: AppContentService) {}

  transform(key: string): string {
    return this.contentService.get(key);
  }
}
