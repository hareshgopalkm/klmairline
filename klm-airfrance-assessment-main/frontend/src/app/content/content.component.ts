import { Component, Input, OnChanges } from '@angular/core';
import { AppContentService } from './content.service';


@Component({
  selector: 'app-content',
  template: `<div>{{content}}</div>`
})
export class AppContentComponent implements OnChanges {
  @Input()
  public key: string = '';

  public content: string = '';

  constructor(private readonly contentService: AppContentService) {

  }

  public ngOnChanges(): void {
    this.content = this.contentService.get(this.key);
  }
}
