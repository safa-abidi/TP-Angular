import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarteVisiteComponent } from './components/carte-visite/carte-visite.component';
import { MiniWordComponent } from './components/mini-word/mini-word.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddCVComponent } from './CVs/add-cv/add-cv.component';
import { CvComponent } from './CVs/cv/cv.component';
import { DetailsPageComponent } from './CVs/details-page/details-page.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'cv', children: [
    {path: '', component: CvComponent},
    { path: 'add', component: AddCVComponent },
    {path: ':id', component: DetailsPageComponent},
  ] },

  {path: '', component: CvComponent},
  {path: 'mini-word', component: MiniWordComponent},
  {path: 'carte-visite', component: CarteVisiteComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
