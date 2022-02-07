import { Component, OnInit } from '@angular/core';
import { debounce } from 'typescript-debounce-decorator';
import { IconName } from './shared/icon/icons';
import { Weather } from './models/Weather';
import GeocodingService from './services/geocodingService';
import { WeatherService } from './services/weatherService';
import { Location } from './models/Location';
import { LocalStorageService } from './services/localStorageService';
import { Size } from './models/Size';
import { OptionModel } from './models/OptionList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(
    private weatherService: WeatherService,
    private geocodingService: GeocodingService,
    private localStorageService: LocalStorageService,
  ) {}

  public title: string = 'WEATHER';

  public weatherList: Weather[] = [];

  public selectedWeather: Weather | null = null;

  public query: string = '';

  public locationList: Location[] = [];

  public selectedLocation: string  = '';

  public isLoading: boolean = false;

  public isLocationLoading: boolean = false;

  public closeIcon: IconName = IconName.Cross;

  public closeIconSize: Size = Size.small;

  public weatherRemoveIcon: IconName = IconName.Cross;

  public weatherRemoveIconSize: Size = Size.xs;

  public ngOnInit(): void {
    this.weatherList = this.localStorageService.getWeather()?.map((weather) => (
      Weather.parse(Weather.unParse(weather))
    )) || [];

      this.selectedLocation = this.localStorageService.getLocation() || '';
      [this.selectedWeather] = this.weatherList;
  }

  @debounce(500)
  public async onInput(event: Event): Promise<void> {
    this.query = (event.target as HTMLInputElement).value;
    if (this.query.trim()) {
      try {
        this.isLocationLoading = true;
        this.locationList = await this.geocodingService.getLocationList(this.query);
      } finally {
        this.isLocationLoading = false;
      }
    } else {
      this.locationList = [];
    }
  }

  public async onLocationSelect(locationOption: OptionModel): Promise<void> {
    this.selectedLocation = locationOption.label;
    this.isLoading = true;

    try {
      const weatherItem = await this.weatherService.getCurrent(locationOption.label);
      this.selectedWeather = weatherItem;
      this.weatherList = [...this.weatherList, weatherItem];

      this.localStorageService.setWeather(this.weatherList);
      this.localStorageService.setLocation(this.selectedLocation);
    
      this.selectedLocation = '';
    } catch {
      this.selectedLocation = '';
    } finally {
      this.isLoading = false;
      this.clear();
    }
  }

  public onWeatherRemove(index: number): void {
    if (this.selectedWeather === this.weatherList[index]) {
      this.selectedWeather = null;
    }
    this.weatherList.splice(index, 1);
    this.localStorageService.setWeather(this.weatherList);
    this.localStorageService.setLocation(this.selectedLocation);
  }

  public onWeatherSelect(weather: Weather): void {
    this.selectedWeather = weather;
  }

  public get locationOptionsList(): OptionModel[] {
    return this.locationList.map((location) => ({ key: location.code, label: location.title }));
  }

  private clear(): void {
    this.locationList = [];
    this.query = '';
  }
}
