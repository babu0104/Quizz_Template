import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-radiogroup',
  templateUrl: './radiogroup.component.html',
  styleUrls: ['./radiogroup.component.css']
})
export class RadiogroupComponent implements OnInit {
  @Input() options: string[] = [];

  constructor() {
  }

  ngOnInit() {
    console.log(this.options);
  }

  onSelectionChange(entry: string) {
   console.log(entry);
  }

}
