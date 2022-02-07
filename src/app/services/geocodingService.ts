import { Injectable } from '@angular/core';
import { Location, LocationResponse } from 'src/app/models/Location';
import { FetchService } from './fetchService';
import { geolocationApiKey } from 'src/config';

@Injectable({
    providedIn: 'root',
})
export default class GeocodingService {
    private readonly url: string = 'https://api.opencagedata.com/geocode/v1/json';
    private readonly token: string = geolocationApiKey;
    public constructor(private fetchService: FetchService) {}

    public async getLocationList(query: string): Promise<Location[]> {
        const data = await this.fetchService.get<LocationResponse>(this.url, {
            key: this.token,
            q: query,
        });
        return Location.parse(data);
    }
}