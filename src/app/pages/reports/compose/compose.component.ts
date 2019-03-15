import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Compose } from './compose';
import { ReportService } from '../report.service';

@Component({
  selector: 'ngx-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss'],
})
export class ComposeComponent implements OnInit {

  form = new Compose();
  constructor(private report: ReportService) { }

  ngOnInit() {

    this.form.sender = [];
    this.form.recipients = [];
    this.form.acknowledge = [];
  }

  AddSender(send) {
    // tslint:disable-next-line:no-console
    console.log(send);

    this.form.sender.push(send);
}

AddRecep(recept) {
  // tslint:disable-next-line:no-console
  console.log(recept);

  this.form.recipients.push(recept);
}

removeRec(i) {

  // tslint:disable-next-line:no-console
  console.log(i);

    this.form.recipients.splice(i, 1);

}


AddAcknowldge(acknowldge) {

  // tslint:disable-next-line:no-console
  console.log(acknowldge);

  this.form.acknowledge.push(acknowldge);

}

removeAcknowldge(i) {


    this.form.acknowledge.splice(i, 1);


}



  onSubmit() {
    // tslint:disable-next-line:no-console
    console.log(this.form);

    this.report.saveComposeForm(this.form);
  }
}
