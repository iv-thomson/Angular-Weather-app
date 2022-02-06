import { Component, Input } from '@angular/core';
import { Size } from 'src/app/models/Size';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
})
export class LoaderComponent {
  @Input()
  public size: Size;

  public get sizeClass(): string {
    switch(this.size) {
      case Size.xs: {
        return 'loader--xs'
      } case Size.small: {
        return 'loader--s'
      } case Size.medium: {
        return 'loader--m'
      } case Size.large: {
        return 'loader--l'
      } default: return 'loader--m';
    }
  }
}
