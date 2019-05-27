import { Injectable } from '@angular/core';
import { RadiogroupComponent } from '../question-templates/radiogroup/radiogroup.component';
import { DropdownComponent } from '../question-templates/dropdown/dropdown.component';

@Injectable({
  providedIn: 'root'
})
export class ControlFactoryService {

  constructor() { }

  public getControlReference(controlType: string): any {
    switch (controlType) {
      case 'radiogroup':
          return RadiogroupComponent;
      case 'dropdown':
          return DropdownComponent;
    }
  }
}
