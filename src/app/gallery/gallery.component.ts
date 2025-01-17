import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-gallery',
  imports: [FormsModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent {
  images: string[] = [
    'images/comics/5.png',
    'images/comics/6.png',
    'images/comics/1.png',
  ];
  img: any = '';
  display(item: any) {
    this.img = item;
  }
}
