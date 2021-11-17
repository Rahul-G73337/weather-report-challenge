import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest} from "@angular/common/http";
import {Cities, Weather} from "../constants/weather.constant";
import {forkJoin, Observable} from "rxjs";
import {WeatherResponse} from "../modal/weather.modal";

@Injectable({
  providedIn: 'root'
})
export class ReportService {


  constructor(private http: HttpClient) { }


  getCitiesList():Observable<WeatherResponse[]>{
    let citiesApiList: Observable<WeatherResponse>[] = [];
    Cities.forEach(city=>{
      citiesApiList.push(this.http.get<WeatherResponse>(`${Weather.hostUrl}?access_key=${Weather.apiKey}&query=${city}`))
    })
    return forkJoin(citiesApiList);
  }

}
