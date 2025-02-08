import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  loginObj: any = {
    "username": "",
    "password": ""
  };

  http = inject(HttpClient);

  onLogin(){
    // debugger;
    this.http.post("localhost:8080/login", this.loginObj).subscribe((res:any)=>{
      if(res){
        console.log("Login successfully " + res);
      }else{
        console.log("Check username or password")
      }
    });
  }
}
