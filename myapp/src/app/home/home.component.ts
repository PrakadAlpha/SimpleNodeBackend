import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HomeService } from '../services/home.service';
import { ToastComponent } from '../shared/toast/toast.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {

data = {};
datas = [];
id:string;

isEditing = false;



  constructor(private homeService:HomeService,
              private formBuilder: FormBuilder,
              private http: Http,
              public toast: ToastComponent ) {
   }
  ngOnInit() {
      this.getDatas();

  }
  getDatas(){
    this.homeService.getDatas().subscribe(
      data => this.datas = data,
      err => console.log(err)
    )
  }

  enableEditing(data){
    this.isEditing = true;
    this.data = data;
  }
  editData(data){
    this.homeService.editData(data).subscribe(
      res => {
        this.isEditing = false;
        this.datas = data;
        this.getDatas();

        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error)
    );
  }
  deleteData(data){
    this.homeService.deleteData(data).subscribe(
        res => {
          const pos = this.datas.map(elem => elem.id).indexOf(data.id);
          this.datas.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error)
      );
  }
}
