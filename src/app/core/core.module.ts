import { ViewsModule } from './views/views.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateModule } from './template/template.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ViewsModule,
    TemplateModule,
    HttpClientModule
  ],
  exports: [
    ViewsModule,
    TemplateModule,
  ]
})
export class CoreModule { }
