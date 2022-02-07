export interface LocationResponse {
    results: {
        formatted: string,
        components: {
            city: string,
            continent: string,
            country: string,
            country_code: string,
            region: string,
            state: string,
        }
    }[]
}

export interface ILocation {
    title: string;
    country: string
    city: string,
    code: string
}

export class Location implements ILocation {
    private constructor (
        private _title: string,
        private _country: string,
        private _city: string,
        private _code: string
    ) {}

    public get title(): string {
        return this._title;
    }

    public get country(): string {
        return this._country;
    }

    public get city(): string {
        return this._city;
    }

    public get code(): string {
        return this._code
    }

    public static parse(proto: LocationResponse): Location[] {
        return proto.results.map(result => {
            return new Location(
                result.formatted,
                result.components.country,
                result.components.city,
                result.components.country_code,
            )
        });
    }
}