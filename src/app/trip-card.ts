import { Component, Input, OnInit } from '@angular/core';
import { Trip } from '../trip.model';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.scss']
})
export class TripCardComponent implements OnInit {
  @Input() trip: Trip;

  constructor() { }

  ngOnInit(): void {
  }
}
