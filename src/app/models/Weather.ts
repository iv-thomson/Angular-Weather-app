export interface WeatherResponse {
    current: {
        temp_c: number
        temp_f: number,
        condition: {
            text: string,
            icon: string,
            code: number
          },
          feelslike_c: number,
          feelslike_f: number,
    },
    location: {
        name: string,
    }
}

export class Weather {
    private constructor(
        private _temp_c: number,
        private _temp_f: number,
        private _summary: string,
        private _icon: string,
        private _code: number,
        private _locationName: string,
        private _feelslike_c: number,
        private _feelslike_f: number,
    ) {}
    
    // TODO: add locale service
    public get temperature(): string {
        return `${this._temp_c}°C`
    }

    public get feellike(): string {
        return `${this._feelslike_c}°C`
    }

    public get summary(): string {
        return this._summary;
    }

    public get icon(): string {
        return this._icon;
    }

    public get code(): number {
        return this._code;
    }

    public get locationName(): string {
        return this._locationName;
    }

    static parse(proto: WeatherResponse): Weather {
        return new Weather(
            proto.current.temp_c,
            proto.current.temp_f,
            proto.current.condition.text,
            proto.current.condition.icon,
            proto.current.condition.code,
            proto.location.name,
            proto.current.feelslike_c,
            proto.current.feelslike_f,
        )
    }

    static unParse(proto: Weather): WeatherResponse {
        return {
            current: {
                temp_c: proto._temp_c,
                temp_f: proto._temp_f,
                condition: {
                    text: proto._summary,
                    icon: proto._icon,
                    code: proto._code,
                  },
                  feelslike_c: proto._feelslike_c,
                  feelslike_f: proto._feelslike_f,
            },
            location: {
                name: proto._locationName
            }
        }
    }
}
