import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() name!: string;
  @Input() description!: string;

  @Output() details: EventEmitter<Data> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  detailDescription() {
    this.details.emit([this.name, this.description]);
  }
}
