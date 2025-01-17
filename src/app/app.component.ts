import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { homeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { NotFoundComponent } from "./not-found/not-found.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, homeComponent, ContactComponent, GalleryComponent, NavbarComponent, FooterComponent, NotFoundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstapp';
}
