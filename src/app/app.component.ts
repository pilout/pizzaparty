import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { Subscription } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  loading :boolean = false;
  routerEvents: Subscription;
  user : firebase.User;
  constructor(private router: Router, private fireBase : AngularFireAuth) { }

  ngOnInit() {
    this.routerEvents= this.router.events.subscribe((event: RouterEvent)=>{

      if(event instanceof NavigationStart)
      this.loading = true;

      
      if(event instanceof NavigationEnd ||event instanceof NavigationCancel || event instanceof NavigationError  )
      this.loading = false;
      
    });

    this.fireBase.authState.subscribe(u=> {this.user = u;});


  }

  ngDestroy(){
      this.routerEvents.unsubscribe();
  }

  
  title = 'Mon super site';

}