import { IconKey } from 'skycons-ts';

export interface WeatherCondition {
  code: number;
  icon: {
    day: IconKey;
    night: IconKey;
  }
}

export enum TimeOfDay {
  day,
  night
}

export class IconMapping {
  private conditions: WeatherCondition[] = [
    {
      code: 45,
      icon: {
        day: 'fog',
        night: 'fog'
      }
   },
   {
      code: 48,
      icon: {
        day: 'fog',
        night: 'fog'
      }
   },
   {
      code: 51,
      icon: {
        day: 'rain-day',
        night: 'rain-night'
      }
   },
   {
      code: 53,
      icon: {
        day: 'rain-day',
        night: 'rain-night'
      }
   },
   {
      code: 55,
      icon: {
        day: 'rain-day',
        night: 'rain-night'
      }
   },
   {
      code: 56,
      icon: {
        day: 'rain-day',
        night: 'rain-night'
      }
   },
   {
      code: 57,
      icon: {
        day: 'rain-day',
        night: 'rain-night'
      }
   },
   {
      code: 61,
      icon: {
        day: 'rain-day',
        night: 'rain-night'
      }
   },
   {
      code: 63,
      icon: {
        day: 'rain-day',
        night: 'rain-night'
      }
   },
   {
      code: 65,
      icon: {
        day: 'rain-day',
        night: 'rain-night'
      }
   },
   {
      code: 66,
      icon: {
        day: 'rain-day',
        night: 'rain-night'
      }
   },
   {
      code: 67,
      icon: {
        day: 'rain-day',
        night: 'rain-night'
      }
   },
   {
       code: 71,
       icon: {
         day: 'snow-day',
         night: 'snow-night'
       }
   },
   {
       code: 73,
       icon: {
         day: 'snow-day',
         night: 'snow-night'
       }
   }, 
   {
       code: 75,
       icon: {
         day: 'snow-day',
         night: 'snow-night'
       }
   }, 
   {
       code: 77,
       icon: {
         day: 'snow-day',
         night: 'snow-night'
       }
   }, 
   {
       code: 80,
       icon: {
         day: 'rain-day',
         night: 'rain-night'
       }
   }, 
   {
       code: 81,
       icon: {
         day: 'rain-day',
         night: 'rain-night'
       }
   }, 
   {
       code: 82,
       icon: {
         day: 'rain-day',
         night: 'rain-night'
       }
   }, 
   {
       code: 85,
       icon: {
         day: 'snow-day',
         night: 'snow-night'
       }
   }, 
   {
       code: 86,
       icon: {
         day: 'snow-day',
         night: 'snow-night'
       }
   }, 
   {
       code: 95,
       icon: {
         day: 'thunder-rain-day',
         night: 'thunder-rain-night'
       }
   }, 
   {
       code: 96,
       icon: {
         day: 'thunder-rain-day',
         night: 'thunder-rain-night'
       }
   }, 
   {
       code: 99,
       icon: {
         day: 'thunder-rain-day',
         night: 'thunder-rain-night'
       }
   },    
  ];

  mapIcon(weatherStatusCode: number, timeOfDay: TimeOfDay): IconKey {
    const mapping = this.conditions.find((condition: WeatherCondition) => condition.code === weatherStatusCode);

    if (mapping) {
      if (timeOfDay === TimeOfDay.day) {
        return mapping.icon.day;
      } else if (timeOfDay === TimeOfDay.night) {
        return mapping.icon.night;
      }
    }

    return 'clear-day';
  }
}