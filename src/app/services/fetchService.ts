import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class FetchService {
    public async get<T>(url: string, params?: Record<string, string>): Promise<T> {
        const response = params ? await fetch(`${url}${this.transformParams(params)}`) : await fetch(`${url}`);
        return response.json();
    } 

    private transformParams(params: Record<string, string>): string {
        return `?${Object.keys(params).map((key) => {
            return `${key}=${params[key]}`
        }).join('&')}`
    }
}