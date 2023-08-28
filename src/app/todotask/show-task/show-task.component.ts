import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent implements OnInit {

  constructor(private service:SharedService) { }

  TaskList:any = [];

  ModalTitle:string;
  ActivateAddEditTaskComp:boolean=false;
  task:any;

  TaskPriorityFilter:string = ""; 
  TaskStatusFilter:string="";
  TaskListWithoutFilter:any = [];
 
  ngOnInit() {
    this.refreshTaskList();
  }

  addClick(){
    this.task={
      TaskId:0,
      TaskName:"",
      TaskStatus:true,
      TaskPriority:0,
      CreateDate:"",
      CreatedBy:"",
      ModifiedDate:"",
      ModifiedBy:""
    }
    this.ModalTitle="Add Task";
    this.ActivateAddEditTaskComp=true;
  }

  editClick(item){
      this.task=item,
      this.ModalTitle="Edit Task";
      this.ActivateAddEditTaskComp=true;

  }

  deleteClick(item){
    if(confirm('Are you sure you want to permanently remove this task?')){
      this.service.deleteTask(item.TaskId).subscribe(res=>{
        alert(res.toString());
        this.refreshTaskList();
      })
    }

  }

  closeClick()
  {
    this.ActivateAddEditTaskComp=false;
    this.refreshTaskList();
  }

  refreshTaskList(){
      this.service.getTaskList().subscribe(data =>{
      this.TaskList = data;
      this.TaskListWithoutFilter = data;
    });
  }

  FilterFn(){
    var TaskPriorityFilter = this.TaskPriorityFilter;
    var TaskStatusFilter = this.TaskStatusFilter;
    let taskStatusFilterConverstion : string = "";

    if(TaskStatusFilter.toString().trim().toLowerCase() == "active")
    {
      taskStatusFilterConverstion = "true";
    }

    if(TaskStatusFilter.toString().trim().toLowerCase() == "done")
    {
      taskStatusFilterConverstion = "false";
    }

    this.TaskList = this.TaskListWithoutFilter.filter(function (tk){
          return tk.TaskPriority.toString().includes(
            TaskPriorityFilter.toString().trim()
          )&&
          tk.TaskStatus.toString().toLowerCase().includes(
            taskStatusFilterConverstion
          )
    });
  }

  

}

