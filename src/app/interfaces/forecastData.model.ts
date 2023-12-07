export interface ForecastData {
    location: {
      name: string;
    };
    current: {
      temp_c: number;
      condition: {
        icon: string;
        text: string;
      };
    };
    forecast: {
      forecastday: Array<{
        day: {
          maxtemp_c: number;
          mintemp_c: number;
        };
      }>;
    };
  }
  