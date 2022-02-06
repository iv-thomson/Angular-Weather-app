import { Component, Input } from '@angular/core';
import { Size } from 'src/app/models/Size';
import { IconName } from 'src/app/shared/icon/icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input()
  public icon: IconName;

  @Input()
  public label: string;

  @Input()
  public size: Size;

  public get sizeClass(): string {
    switch(this.size) {
      case Size.xs: {
        return 'button--xs'
      } case Size.small: {
        return 'button--s'
      } case Size.medium: {
        return 'button--m'
      } case Size.large: {
        return 'button--l'
      } default: return 'button--m';
    }
  }
}
