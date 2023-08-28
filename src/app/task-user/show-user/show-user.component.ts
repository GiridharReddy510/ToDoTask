import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {

  constructor(private service:SharedService) { }

  UserList:any = [];

  ModalTitle:string;
  ActivateAddEditTaskUserComp:boolean=false;
  user:any;

  ngOnInit() {
    this.refreshUserList();
  }

  addClick(){
    this.user={
      UserId:0,
      UserName:""
    }
    this.ModalTitle="Add User";
    this.ActivateAddEditTaskUserComp=true;
  }

  editClick(item){
      this.user=item,
      this.ModalTitle="Edit User";
      this.ActivateAddEditTaskUserComp=true;

  }

  deleteClick(item){
    if(confirm('Are you sure you want to permanently remove this item?')){
      this.service.deleteTaskUser(item.UserId).subscribe(res=>{
        alert(res.toString());
        this.refreshUserList();
      })
    }

  }

  closeClick()
  {
    this.ActivateAddEditTaskUserComp=false;
    this.refreshUserList();
  }

  refreshUserList(){
    this.service.getTaskUserList().subscribe(data =>{
      this.UserList = data;
    })
  }

}
