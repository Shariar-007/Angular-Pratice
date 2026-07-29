
import {Component} from '@angular/core';

@Component({
  selector: 'app-form-template',
  standalone: false,
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css'],
})
export class FormTemplateComponent{
  model = { email: '', password: '' };

  onSubmit(form: any){
    console.log(form.valid);
    console.log(this.model);
  }
}
