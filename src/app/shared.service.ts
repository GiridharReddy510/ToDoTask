import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class SharedService {
  readonly APIUrl = "https://localhost:5001/api"

  constructor(private http:HttpClient) {  }
    getTaskUserList():Observable<any[]>{
      return this.http.get<any>(this.APIUrl+'/TaskUser');
    }    
    
    addTaskUser(val:any){
      return this.http.post(this.APIUrl+'/TaskUser', val);
    }

    updateTaskUser(val:any){
      return this.http.put(this.APIUrl+'/TaskUser', val);
    }

    deleteTaskUser(val:any){
      return this.http.delete(this.APIUrl+'/TaskUser/'+ val);
    }

    getTaskList():Observable<any[]>{
      return this.http.get<any>(this.APIUrl+'/Task');
    }    
    
    addTask(val:any){
      return this.http.post(this.APIUrl+'/Task', val);
    }

    updateTask(val:any){
      return this.http.put(this.APIUrl+'/Task', val);
    }

    deleteTask(val:any){
      return this.http.delete(this.APIUrl+'/Task/'+ val);
    }

    GetAllTaskUsers():Observable<any[]>{
      return this.http.get<any>(this.APIUrl+'/Task/GetAllTaskUsers');
    }  

}
