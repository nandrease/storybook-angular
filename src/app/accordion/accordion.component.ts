import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @Input() activeIndex: number;
  @Input() accordions: any[];

  constructor() { }

  ngOnInit() { }

  setActive(acc) {
    acc.active = !acc.active;
  }

}
