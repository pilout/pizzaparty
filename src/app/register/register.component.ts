import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { FormGroup, FormBuilder, Validators, AsyncValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { map } from 'rxjs/operators';
import { checkUser } from '../validator/ingredient-exist';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {



  ngOnInit() {
  }

  user : User = new User("","","","","") ;
  userForm : FormGroup;
  error : string;
  type : string;

  constructor(private fb:FormBuilder, private serviceUser : UserService, private router : Router, private db: AngularFireAuth) {

    this.type = router.url.substr(1);

    if(this.type=="register"){

      this.userForm = fb.group({
        email: fb.control('', [Validators.required, Validators.minLength(3)]),
        passwordForm : fb.group({
          password : fb.control(this.user.password, [Validators.required, Validators.minLength(7)]),
          confirm :fb.control('', [Validators.required, Validators.minLength(7)])
        }, { validators: RegisterComponent.passwordMatch })
        
        });

    }
    else{

      this.userForm = fb.group({
        email: fb.control('', [Validators.required, Validators.minLength(3)]),
        passwordForm : fb.group({
          password : fb.control(this.user.password, [Validators.required, Validators.minLength(7)]),
        })
        });
    }
   
  };



  static passwordMatch(group: FormGroup) {

    return group.get('password').value === group.get('confirm').value ? null : { notMatching: true };
  }


  


  save(){

      if(this.type== "register"){
        this.db.auth.createUserWithEmailAndPassword(this.userForm.value.email,this.userForm.value.passwordForm.password)
        .then(e=> this.router.navigate(['/pizzas'])).catch(ex => { this.error = ex.message});

      }
      else{
        this.db.auth.signInWithEmailAndPassword(this.userForm.value.email,this.userForm.value.passwordForm.password)
        .then(e=> this.router.navigate(['/pizzas'])).catch(ex => { this.error = ex.message});

      }

  }

}
