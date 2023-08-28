import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() user: any;
  UserId: number;
  UserName: string;
  ModifiedBy: string;
  ModifiedDate: Date;
  


  ngOnInit() {
    this.UserId= this.user.UserId;    
    this.UserName= this.user.UserName;
    this.ModifiedDate= new Date();
    this.ModifiedBy = this.user.UserName;
  }

  addTaskUser(){
    var val = {UserId:this.UserId,
               UserName:this.UserName,
               CreatedDate:this.ModifiedDate,
               CreatedBy:this.ModifiedBy,
               ModifiedDate:this.ModifiedDate,
               ModifiedBy:this.ModifiedBy
              };
      this.service.addTaskUser(val).subscribe(res=>{
      alert(res.toString());
      });
  }

 
   
  updateTaskUser(){
    var val = {UserId:this.UserId,
              UserName:this.UserName,
              CreatedDate:new Date(),
              CreatedBy:this.ModifiedBy,
              ModifiedDate:new Date(),
              ModifiedBy:this.ModifiedBy};
    this.service.updateTaskUser(val).subscribe(res=>{
    alert(res.toString());
    });
    
  }

}
