import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  public answers: Array<Number>;
  constructor() { }
}
