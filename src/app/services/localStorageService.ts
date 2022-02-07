import { Injectable } from "@angular/core";
import { Weather } from "@app/models/Weather";

export interface ILocalStorageService {
    getWeather(): Weather[];
    getLocation(): string;
    setWeather(weather: Weather[]): void;
    setLocation(location: string): void;
}

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService implements ILocalStorageService {
    private set(key: string, value: unknown): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    private get<T>(key: string): T {
        const data = localStorage.getItem(key);
        return data && JSON.parse(data);
    }

    public getWeather(): Weather[] {
        return this.get('weather');
    }

    public getLocation(): string {
        return this.get('location');
    }

    public setWeather(weather: Weather[]): void {
        this.set('weather', weather);
    }

    public setLocation(location: string): void {
        this.set('location', location);
    }
}