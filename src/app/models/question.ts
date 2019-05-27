export class Question {
    questions: QuestionTemplate[];

    constructor() {
        this.questions = [];
    }
}
export class QuestionTemplate {
    id: string;
    title: string;
    type: string;
    options: string[];

    constructor() {
        this.id = '';
        this.title = '';
        this.type = '';
        this.options = [];
    }
}
