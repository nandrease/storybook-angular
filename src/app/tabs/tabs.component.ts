import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  @Input() activeIndex: number;
  @Input() tabs: any[];
  @Input() accordions: any[];

  constructor() { }

  ngOnInit() { }

  setActive(tab) {
    this.tabs.filter(d => d !== tab).map(d => d.active = false);
    tab.active = true;
    this.activeIndex = this.tabs.findIndex(el => el == tab)
  }

}
