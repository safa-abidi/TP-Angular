import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { CarteVisiteComponent } from './components/carte-visite/carte-visite.component';
import { PereComponent } from './components/pere/pere.component';
import { FilsComponent } from './components/fils/fils.component';
import { CvComponent } from './CVs/cv/cv.component';
import { ListComponent } from './CVs/list/list.component';
import { ItemComponent } from './CVs/item/item.component';
import { DetailComponent } from './CVs/detail/detail.component';
import { MiniWordComponent } from './components/mini-word/mini-word.component';
import { RainbowDirective } from './customDirective/rainbow.directive';
import { DefaultImagePipe } from './pipes/default-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    CarteVisiteComponent,
    PereComponent,
    FilsComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
    DetailComponent,
    MiniWordComponent,
    RainbowDirective,
    DefaultImagePipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
