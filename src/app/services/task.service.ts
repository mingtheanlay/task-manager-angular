import { Injectable } from '@angular/core';
import { TaskInterface } from '../Task';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = "http://localhost:5000/tasks";

  constructor(private httpClient: HttpClient) {

  }
  
  getTasks(): Observable<TaskInterface[]> {
    return this.httpClient.get<TaskInterface[]>(this.apiUrl);
  }

  destroyTask(task: TaskInterface): Observable<TaskInterface> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.httpClient.delete<TaskInterface>(url);
  }
}
