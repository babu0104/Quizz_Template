import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { HttpClientModule } from '@angular/common/http';
import { QuestionControlsComponent } from './question-controls/question-controls.component';
import { ControlFactoryService } from './services/control-factory.service';
import { RadiogroupComponent } from './question-templates/radiogroup/radiogroup.component';
import { DropdownComponent } from './question-templates/dropdown/dropdown.component';
import { QuizService } from './services/quiz.service';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuestionControlsComponent,
    RadiogroupComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  entryComponents: [
    RadiogroupComponent,
    DropdownComponent
  ],
  providers: [QuizService, ControlFactoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
