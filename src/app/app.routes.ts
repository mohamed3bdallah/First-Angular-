import { Routes } from '@angular/router';
import { homeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    title: 'Home',
  },
  {
    path: 'home',
    component:homeComponent,
    title: 'Home',
  },
  {
    path: 'gallery',
    component: GalleryComponent,
    title: 'Gallery',
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Not Found',
  }
];
