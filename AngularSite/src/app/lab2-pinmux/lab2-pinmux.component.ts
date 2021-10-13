import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-lab2-pinmux',
  templateUrl: './lab2-pinmux.component.html',
  styleUrls: ['./lab2-pinmux.component.css']
})
export class Lab2PinmuxComponent implements OnInit {

  title = 'Lab 2: Pin Muxing';

  constructor(private router: Router) {}

  ngOnInit(): void {
      this.router.events.subscribe(val => {
          if (val instanceof NavigationEnd) 
          {
              let fragmentIdx = val.urlAfterRedirects.lastIndexOf('#');

              if (fragmentIdx >= 0 && fragmentIdx < val.urlAfterRedirects.length - 1) 
              {
                  let fragment = val.urlAfterRedirects.substring(fragmentIdx+1);
                  
                  document.getElementById(fragment)?.scrollIntoView({behavior: "smooth"});
              }
          }
      })
  }
}

