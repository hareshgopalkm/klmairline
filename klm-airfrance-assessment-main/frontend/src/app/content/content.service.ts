import { Injectable } from '@angular/core';

import * as content from './content.json';

@Injectable({
  providedIn: 'root'
})
export class AppContentService {
  private readonly contentMap: { [key:string]: string };

  constructor() {
    this.contentMap = content;
  }

  get(key: string): string {
    return this.contentMap[key] || key;
  }
}
