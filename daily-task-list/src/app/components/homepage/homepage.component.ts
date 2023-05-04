import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface todoListTs {
  tools: string,
  isCompleted: boolean,
};

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  todoList: todoListTs[] = [
    { tools: 'HTML', isCompleted: true },
    { tools: 'CSS', isCompleted: true },
    { tools: 'JAVASCRIPT', isCompleted: true },
    { tools: 'TYPESCRIPT', isCompleted: true },
    { tools: 'NODE.JS', isCompleted: true },
    { tools: 'PHP', isCompleted: false },
    { tools: 'JAVA', isCompleted: false },
    { tools: 'PYTON', isCompleted: false },
    { tools: 'KOTLIN', isCompleted: false },
  ];

  onSubmit(form: NgForm) {
    this.todoList.push({ tools: form.controls['task'].value, isCompleted: false });
    form.reset();
  }

  onDelete(index: number) {
    this.todoList.splice(index, 1)
  }

  onCheck(index: number) {
    this.todoList[index].isCompleted = !this.todoList[index].isCompleted;
  }
}
