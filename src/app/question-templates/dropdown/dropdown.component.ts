import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() options: string[] = [];
  defaultOption = 'Choose anyone';

  constructor() {
  }

  ngOnInit() {
  }

}
