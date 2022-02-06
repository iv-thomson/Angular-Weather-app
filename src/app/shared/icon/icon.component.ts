import { Component, Input, OnInit } from '@angular/core';
import { Size } from '@app/models/Size';
import { IconName, icons } from './icons';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
})
export class IconComponent implements OnInit {
  @Input()
  public name: IconName;

  @Input()
  public size: Size;

  public content: string = '<p>dove</p>' ;

  public ngOnInit(): void {
    this.content = icons[this.name];
  }

  public get sizeClass(): string {
    switch (this.size) {
      case Size.xs: {
        return 'icon--xs';
      } case Size.small: {
        return 'icon--s';
      } case Size.medium: {
        return 'icon--m';
      } case Size.large: {
        return 'icon--l';
      } default: return 'icon--m';
    }
  }
}
