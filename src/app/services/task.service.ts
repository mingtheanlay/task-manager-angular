import { Injectable } from '@angular/core';
import { TaskInterface } from '../Task';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = "http://localhost:5000/tasks";

  constructor(private httpClient: HttpClient) {

  }

  getTasks(): Observable<TaskInterface[]> {
    // GET API
    return this.httpClient.get<TaskInterface[]>(this.apiUrl);
  }

  destroyTask(task: TaskInterface): Observable<TaskInterface> {
    const url = `${this.apiUrl}/${task.id}`;
    // DESTORY API
    return this.httpClient.delete<TaskInterface>(url);
  }

  updateTaskReminder(task: TaskInterface): Observable<TaskInterface> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.httpClient.put<TaskInterface>(url,task, httpOptions);
  }
}
