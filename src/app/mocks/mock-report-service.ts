import {Observable, Observer} from "rxjs";

export class MockReportService {
  public getCitiesList(): Observable<any[]> {
    return new Observable((observer: Observer<any>) => {
      observer.next(TestDataForCities);
    });
  }
  public getCityForecast(city: string): Observable<any[]> {
    return new Observable((observer: Observer<any>) => {
      observer.next(TestDataForForCast);
    });
  }



}

export const TestDataForCities = [{"request":{"type":"City","query":"Hyderabad, India","language":"en","unit":"m"},"location":{"name":"Hyderabad","country":"India","region":"Andhra Pradesh","lat":"17.375","lon":"78.474","timezone_id":"Asia\/Kolkata","localtime":"2021-11-17 22:12","localtime_epoch":1637187120,"utc_offset":"5.50"},"current":{"observation_time":"04:42 PM","temperature":23,"weather_code":116,"weather_icons":["https:\/\/assets.weatherstack.com\/images\/wsymbols01_png_64\/wsymbol_0004_black_low_cloud.png"],"weather_descriptions":["Partly cloudy"],"wind_speed":0,"wind_degree":97,"wind_dir":"E","pressure":1016,"precip":0.1,"humidity":94,"cloudcover":50,"feelslike":25,"uv_index":1,"visibility":6,"is_day":"no"}}]

export const TestDataForForCast: any = {"cod":"200","message":0,"cnt":40,"list":[{"dt":1624568400,"main":{"temp":287.76,"feels_like":287.08,"temp_min":284.61,"temp_max":287.76,"pressure":1019,"sea_level":1019,"grnd_level":1019,"humidity":69,"temp_kf":3.15},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":3},"wind":{"speed":1.51,"deg":286,"gust":1.72},"visibility":10000,"pop":0,"sys":{"pod":"n"},"rain":{"3h":0.49},"dt_txt":"2021-06-24 21:00:00"}],"city":{"id":2759794,"name":"Amsterdam","coord":{"lat":52.374,"lon":4.8897},"country":"NL","population":2122311,"timezone":7200,"sunrise":1624504734,"sunset":1624565204}};
