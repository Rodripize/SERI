import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { AyudandomeComponent } from './ayudandome/ayudandome.component';
import { AyudandoComponent } from './ayudando/ayudando.component';
import { CreateComponent } from './create/create.component';
import { AyudaseriComponent } from './ayudaseri/ayudaseri.component';

const routes: Routes = [
    { path : 'intro', component : IntroComponent},
    { path : 'diagnosis', component : DiagnosisComponent},
    { path : 'ayudandome', component : AyudandomeComponent},
    { path : 'ayudando', component : AyudandoComponent},
    { path : 'create', component : CreateComponent},
    { path : 'ayudaseri', component : AyudaseriComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule{

}
export const routingComponents = [IntroComponent , DiagnosisComponent];