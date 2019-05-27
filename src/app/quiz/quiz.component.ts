import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { Question, QuestionTemplate } from '../models/question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quizes: any[];
  public quiz: QuestionTemplate[] = [];
  mode = 'quiz';
  quizName: string;
  // config: QuizConfig = {
  //   'allowBack': true,
  //   'allowReview': true,
  //   'autoMove': false,  // if true, it will move to next question automatically when answered.
  //   'duration': 20,  // indicates the time (in secs) in which quiz needs to be completed. 0 means unlimited.
  //   'pageSize': 1,
  //   'requiredAll': false,  // indicates if you must answer all the questions before submitting.
  //   'richText': false,
  //   'shuffleQuestions': false,
  //   'shuffleOptions': false,
  //   'showClock': false,
  //   'showPager': true,
  //   'theme': 'none'
  // };

  pager = {
    index: 0,
    size: 1,
    count: 1
  };
  timer: any = null;
  startTime: Date;
  endTime: Date;
  ellapsedTime = '00:00';
  duration = '';

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.quizes = this.quizService.getAll();
    this.quizName = this.quizes[0].id;
    this.loadQuiz();
  }

  loadQuiz() {
    this.quizService.get().subscribe((res: Question) => {
      if (res && res.questions && res.questions.length > 0) {
        this.quiz = res.questions;
        console.log(this.quiz);
        this.pager.count = this.quiz.length;
      }
    });
    this.mode = 'quiz';
  }


  parseTime(totalSeconds: number) {
    let mins: string | number = Math.floor(totalSeconds / 60);
    let secs: string | number = Math.round(totalSeconds % 60);
    mins = (mins < 10 ? '0' : '') + mins;
    secs = (secs < 10 ? '0' : '') + secs;
    return `${mins}:${secs}`;
  }

  get filteredQuestions() {
    return (this.quiz) ?
      this.quiz.slice(this.pager.index, this.pager.index + this.pager.size) : [];
  }

  // onSelect(question: Question, option: Option) {
  //   if (question.questionTypeId === 1) {
  //     question.options.forEach((x) => { if (x.id !== option.id) x.selected = false; });
  //   }

  //   if (this.config.autoMove) {
  //     this.goTo(this.pager.index + 1);
  //   }
  // }

  goTo(index: number) {
    if (index >= 0 && index < this.pager.count) {
      this.pager.index = index;
      this.mode = 'quiz';
    }
  }

  // isAnswered(question: Question) {
  //   return question.options.find(x => x.selected) ? 'Answered' : 'Not Answered';
  // };

  // isCorrect(question: Question) {
  //   return question.options.every(x => x.selected === x.isAnswer) ? 'correct' : 'wrong';
  // };

  // onSubmit() {
  //   let answers = [];
  //   this.quiz.questions.forEach(x => answers.push({ 'quizId': this.quiz.id, 'questionId': x.id, 'answered': x.answered }));

  //   console.log(this.quiz.questions);
  //   this.mode = 'result';
  // }
}
