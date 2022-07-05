import { Component, OnInit, Input, EventEmitter, Output, } from '@angular/core';
import { Router } from '@angular/router';
import { Role, User } from 'src/app/model/User';
import { HttpClientService } from 'src/app/service/http-client.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent  {

  @Input()
  user!: User;
  role!: Role;

  @Output()
  userAddedEvent = new EventEmitter();

  message!: string;
  password!: string;


  constructor (private httpClientService: HttpClient){
   // private router: Router) { }

<<<<<<< HEAD
  ngOnInit(): void {
    this.user = new User();

    console.log('user:', this.user);

    
    

    console.log('role:', Role);
=======
  //ngOnInit(): void {
>>>>>>> dce3253d2578a517811f43e980c9748a8263b5ec
  }

  // addUser() {
  //   this.httpClientService.addUser(this.user).subscribe(
  //     (user) => {
  //       this.userAddedEvent.emit();
  //       this.router.navigate(['admin', 'users']);
  //     }
  //   );
  // }
  OnUserCreate(uuser: {fName: string, lName: string, type: string, password: string, role: Role, email: string, address: string, aboutMe: string}){
    this.httpClientService.post('http://localhost:5000/petgrooming/authcontroller/contractor.json', uuser);
  }
}
