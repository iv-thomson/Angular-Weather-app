import { Injectable } from '@angular/core';
import { weatherApiKey } from 'src/config'
import { Weather, WeatherResponse } from '../models/Weather';
import { FetchService } from './fetchService';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = weatherApiKey;

  private baseUrl: string = 'http://api.weatherapi.com/v1';

  public constructor(private fetchService: FetchService) { }

  public async getCurrent(query: string): Promise<Weather> {
    const response = await this.fetchService.get<WeatherResponse>(`${this.baseUrl}/current.json`, {
      key: this.apiKey,
      q: query,
    });
    return Weather.parse(response);
  }

  public async getForecast(query: string): Promise<void> {
    const response = await this.fetchService.get<WeatherResponse>(`${this.baseUrl}/forecast.json`, {
      key: this.apiKey,
      q: query,
    });
  }
}
