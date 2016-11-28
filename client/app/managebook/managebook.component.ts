import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
    moduleId: module.id,
    selector: 'bookmanage',
    templateUrl: 'managebook.component.html'
})
export class managebookComponent implements OnInit {
    clickA = false;
    clickB = false;
    submitted = false;
    onSubmit() { this.submitted = true;

    }
    active = true;

    constructor(public _router: Router) {
        var x = document.cookie.split(';');
        var cookievalue;
        var i =0;
        for(;i<x.length;i++){
            if(x[i].split('=')[0].trim() == 'sessionID'){
                cookievalue = x[i].split('=')[1];
                break;
            }
        }
        if(cookievalue === undefined){
            this._router.navigate(['']);
        }else {
            var res = atob(cookievalue).split('??');
            if (atob(res[0]) == 'teach' && atob(res[1]) == 'teach') {
                //admin
            } else {
                this._router.navigate(['']);
            }
        }
    }

    ngOnInit() { }

}