import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-lab1-setup',
  templateUrl: './lab1-setup.component.html',
  styleUrls: ['./lab1-setup.component.css']
})
export class Lab1SetupComponent implements OnInit {

    title = 'Lab 1: Setup';

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
