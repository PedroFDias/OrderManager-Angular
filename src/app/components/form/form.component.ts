import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  getEmail(){

  }

  login!: FormGroup;

  @Output() onSubmit = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    this.login = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }
  
  get email(){
    return this.login.get('email')!
  }

  get password(){
    return this.login.get('password')!
  }

  Enviar(){
    
    if(this.login.invalid)
      return;
    this.onSubmit.emit(this.login.value)
  }

}
