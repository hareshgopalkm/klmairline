import { NgModule } from '@angular/core';
import { AppContentComponent } from './content.component';
import { AppContentPipe } from './content.pipe';
import { AppContentService } from './content.service';


@NgModule({
  declarations: [AppContentComponent, AppContentPipe],
  providers: [AppContentService],
  exports: [AppContentComponent, AppContentPipe]
})
export class AppContentModule {}
