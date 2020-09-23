import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from './back-button/back-button.component';
import { SharedModule } from '../../shared/shared.module';
import { SpreaderComponent } from './spreader/spreader.component';

@NgModule({
  declarations: [BackButtonComponent],
  imports: [CommonModule, SharedModule],
  exports: [BackButtonComponent, SpreaderComponent],
})
export class ModulesComponentsModule {}
