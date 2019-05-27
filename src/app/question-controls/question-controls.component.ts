import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, Input, ViewChild } from '@angular/core';
import { QuestionTemplate } from '../models/question';
import { ControlFactoryService } from '../services/control-factory.service';

@Component({
  selector: 'app-question-controls',
  templateUrl: './question-controls.component.html',
  styleUrls: ['./question-controls.component.css']
})
export class QuestionControlsComponent implements OnInit {
  @Input() controlItem: QuestionTemplate;
  @ViewChild('controlcontainer', { read: ViewContainerRef }) entry: ViewContainerRef;
  private componentRef: any;

  constructor(private resolver: ComponentFactoryResolver,
    private controlFactoryServive: ControlFactoryService) { }

  ngOnInit() {
    this.createComponent();
  }

  private createComponent() {
    this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(this.controlFactoryServive.getControlReference(this.controlItem.type));
    this.componentRef = this.entry.createComponent(factory);
    this.componentRef.instance.options = this.controlItem.options;
  }

}
