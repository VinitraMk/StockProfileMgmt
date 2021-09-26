import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];
  public profile: Profile = new Profile();

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    //http.get<WeatherForecast[]>(baseUrl + 'weatherforecast').subscribe(result => {
    //  this.forecasts = result;
    //}, error => console.error(error));

    http.get<Profile>('https://graph.microsoft.com/v1.0/me').subscribe(result => {
      console.log('graph api succes', result);
      this.profile = result;
    }, error => console.log('graph api error', error));
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

class Profile {
  displayName: string;
  mail: string;
  userPrincipalName: string;
  mobilePhone: string;
  givenName: string;
}
