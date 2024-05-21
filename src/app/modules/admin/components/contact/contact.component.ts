import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { faEye, faLock,faPencilAlt,faCloudDownloadAlt,faUserTimes } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { UserdataService } from 'src/app/services/userdata.service';
import { IContact } from '../../models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{
 
  faLock=faLock;
  faEye=faEye;
  faPencilAlt=faPencilAlt;
  faUserTimes=faUserTimes;
  faCloudDownloadAlt=faCloudDownloadAlt;

  userData$?: Observable<IContact[]>;
  private userdataService:UserdataService=inject(UserdataService);
  private router:Router=inject(Router);
  currentRecord:any;
  rightPanelStyle:any={};
  ngOnInit(): void {
    this.userData$=this.userdataService.getUserData();
    this.closeContextMenu();
  }
  detectRightMouseClick($event:any,user:any){
    if($event.which === 3){
      this.rightPanelStyle={
        'display':'block',
        'position':'absolute',
        'left.px':$event.clientX,
        'top.px':$event.clientY
      //'left.px':$event.layerX,
        //'top.px':$event.layerY
      };
     this.currentRecord=user;
    }
  }
 
  closeContextMenu(){
    this.rightPanelStyle={
      'display':'none'
    };
  }
  onViewContext(){
    this.closeContextMenu();
    this.router.navigateByUrl('admin/home');
  }
}
