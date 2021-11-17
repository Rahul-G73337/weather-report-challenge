import { Component, OnInit } from '@angular/core';
import {ReportService} from "../../services/report.service";
import {Weather} from "../../constants/weather.constant";
import {Router} from "@angular/router";
import {WeatherResponse} from "../../modal/weather.modal";

@Component({
  selector: 'app-city-report',
  templateUrl: './city-report.component.html',
  styleUrls: ['./city-report.component.scss']
})
export class CityReportComponent implements OnInit {

  cities : WeatherResponse[] = [];

  constructor(private reportService: ReportService, private router: Router) {

  }

  ngOnInit(): void {
    this.reportService.getCitiesList().subscribe(cities=>{
      console.log(cities);
      this.cities = cities;
    })
  }

}
