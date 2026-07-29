
import {Component} from '@angular/core';
import {FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

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

  formReact: any;


  constructor(private fb: FormBuilder){
    this.formReact = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm: ['', Validators.required]
    }, {validators: this.passwordsMatch});
  }


  onSubmitReactiveFrom(){
    console.log('Reactive form submitted', this.formReact.value, 'valid?', this.formReact.valid);
  }

  // convenience getters for the template
  get email() { return this.formReact.get('email'); }
  get password() { return this.formReact.get('password'); }
  get confirm() { return this.formReact.get('confirm'); }

  passwordsMatch(group: AbstractControl): ValidationErrors | null {
    const pw = group.get('password')?.value;
    const confirm = group.get('confirm')?.value;
    return pw === confirm ? null : { passwordsMismatch: true };
  }



}
