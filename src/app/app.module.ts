import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

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
import { EmbaucheComponent } from './Embauche/embauche/embauche.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterSimulatorComponent } from './components/router-simulator/router-simulator.component';
import { DetailsPageComponent } from './CVs/details-page/details-page.component';
import { AddCVComponent } from './CVs/add-cv/add-cv.component';
import { LoginComponent } from './login/login.component';
import { CarouselComponent } from './components/carousel/carousel.component';

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
    DefaultImagePipe,
    EmbaucheComponent,
    NavbarComponent,
    NotFoundComponent,
    RouterSimulatorComponent,
    DetailsPageComponent,
    AddCVComponent,
    LoginComponent,
    CarouselComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
