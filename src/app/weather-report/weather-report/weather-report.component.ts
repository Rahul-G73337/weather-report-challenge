import {Component, HostListener, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.scss']
})
export class WeatherReportComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }

}
