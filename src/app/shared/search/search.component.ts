import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { OptionModel } from 'src/app/models/OptionList';
import { Size } from 'src/app/models/Size';
import { IconName } from '../icon/icons';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit, OnDestroy {
  public displayedOptionList: OptionModel[];
  private _optionListMemo: OptionModel[];

  @Input()
  public isLoading: boolean;

  @Input()
  public set optionList(optionList: OptionModel[]) {
    if (this._optionListMemo !== optionList) {
      this._optionListMemo = this.optionList
      this.displayedOptionList = optionList;
    }
  };

  @Output()
  public selectOptionEvent = new EventEmitter<OptionModel>();

  @Output()
  public inputEvent = new EventEmitter<Event>();

  public value: string = '';

  public isOptionListOpen: boolean = false;

  public searchLoaderSize: Size = Size.xs;

  public searchIconName: IconName = IconName.Search;

  public searchIconSize: Size = Size.xs;

  constructor() {};

  public ngOnInit(): void {
    document.body.addEventListener('click', this.handleOutsideClick);
  }

  public ngOnDestroy(): void {
    document.body.removeEventListener('click', this.handleOutsideClick);
  }

  private handleOutsideClick(): void {
    document.body.addEventListener('click', ({ target }) => {
      if (!(target as HTMLElement).classList.contains('search')) {
        this.isOptionListOpen = false;
      }
    })
  }

  public onInput(event: Event): void {
    this.inputEvent.emit(event)
    this.value = (event.target as HTMLInputElement).value;
    this.isOptionListOpen = true;
  }

  public onOptionSelect(option: OptionModel): void {
    this.selectOptionEvent.emit(option);
    this.value = '';
  }

  public onSearchFocus(): void {
    if (this.displayedOptionList.length) {
      this.isOptionListOpen = true;
    }
  }
}
