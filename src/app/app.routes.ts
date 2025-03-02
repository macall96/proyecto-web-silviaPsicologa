import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VisionComponent } from './pages/vision/vision.component';
import { ValoresComponent } from './pages/vision/valores/valores.component';
import { SobreMiComponent } from './pages/sobre-mi/sobre-mi.component';
import { FormacionComponent } from './pages/sobre-mi/formacionExp/formacion.component';
import { AyudaComponent } from './pages/ayuda/ayuda.component';
import { GestionEmoComponent } from './pages/ayuda/gestionEmo/gestion-emo.component';
import { SintomasComponent } from './pages/ayuda/sintomatologia/sintomas.component';
import { ContactoComponent } from './pages/contacto/contacto-component.component';


export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'vision', component: VisionComponent },
  { path: 'valores', component: ValoresComponent },
  { path: 'sobre-mi', component: SobreMiComponent },
  { path: 'formacionExp', component: FormacionComponent },
  { path: 'ayuda', component: AyudaComponent },
  { path: 'gestionEmocional', component: GestionEmoComponent},
  { path: 'sintomatologia', component: SintomasComponent},
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '' }
];






