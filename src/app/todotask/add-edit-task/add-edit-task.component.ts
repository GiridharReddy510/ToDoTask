import { Component, OnInit, Input } from '@angular/core';
import { Priority } from '../../priority.enum';
import { TaskStatus } from '../../enum/task-status.enum';
import { SharedService } from '../../shared.service';

enum PriorityList {Text, Placholder}
enum TaskStatusList{Text, Placholder}

@Component({
  selector: 'app-add-edit-task',
  templateUrl: './add-edit-task.component.html',
  styleUrls: ['./add-edit-task.component.css']
})
export class AddEditTaskComponent implements OnInit {

  PriorityList = Priority;
  TaskStatusList = TaskStatus;

  // keys() : Array<string> {
  //   var keys = Object.keys(this.PriorityList);    
  //    return keys.slice(keys.length / 2);
  // }

  keys: any[];

  constructor(private service:SharedService) { this.keys = Object.keys(this.PriorityList).filter(k => !isNaN(Number(k)));;}

  @Input() task: any;  
  TaskId: number;
  TaskName: string;
  TaskStatus: boolean;
  TaskPriority: number;
  CreatedBy: string;
  CreatedDate: Date;
  ModifiedBy: string;
  ModifiedDate: Date;  
  
  UsersList: any[];     
  

  ngOnInit() {
    this.loadUsersList();
    this.TaskId = this.task.TaskId;    
    this.TaskName = this.task.TaskName;
    this.TaskStatus = this.task.TaskStatus;
    this.TaskPriority = this.task.TaskPriority;
    this.CreatedDate = new Date();
    this.CreatedBy = this.task.CreatedBy;
    this.ModifiedDate = new Date();
    this.ModifiedBy = this.task.ModifiedBy;    
  }

  loadUsersList(){
    this.service.GetAllTaskUsers().subscribe((data:any)=>{
      this.UsersList = data;
    });
  }

  addTask(){ 
    var val = {
               TaskId:this.TaskId,
               TaskName:this.TaskName,
               TaskStatus : this.TaskStatus,
               TaskPriority:this.TaskPriority,
               CreatedDate:this.CreatedDate,
               CreatedBy:this.CreatedBy,
               ModifiedDate:this.ModifiedDate,
               ModifiedBy:this.CreatedBy
              };    
      this.service.addTask(val).subscribe(res=>{
      alert(res.toString());
      });
  }
 
   
  updateTask(){
    var val = {
              TaskId:this.TaskId,
              TaskName:this.TaskName,
              TaskStatus:this.TaskStatus,
              TaskPriority:this.TaskPriority,
              CreatedDate:this.CreatedDate,
              CreatedBy:this.CreatedBy,
              ModifiedDate:this.ModifiedDate,
              ModifiedBy:this.CreatedBy
            };
    this.service.updateTask(val).subscribe(res=>{
    alert(res.toString());
    });
    
  }

}