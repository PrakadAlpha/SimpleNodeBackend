import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HomeService } from '../services/home.service';
import { ToastComponent } from '../shared/toast/toast.component';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [HomeService]
})
export class AddComponent implements OnInit {
  data = {};
  datas = [];
  id:string;

  addDataForm: FormGroup;
    Name = new FormControl('', Validators.required);
    Place = new FormControl('', Validators.required);
    Age = new FormControl('', Validators.required);

  constructor(private homeService:HomeService,
              private formBuilder: FormBuilder,
              private http: Http,
              public toast: ToastComponent) { }

  ngOnInit() {
    this.addDataForm = this.formBuilder.group({
      id: this.id,
      Name: this.Name,
      Place: this.Place,
      Age: this.Age
    });
  }
  addData(datas) { this.homeService.addData(this.addDataForm.value).subscribe(
      res => {
        const newData = res.json();
        this.datas.push(newData);
        this.addDataForm.reset();
        this.toast.setMessage('item added successfully.', 'success');
      },
      err => console.log(err)
    );
  }

}
