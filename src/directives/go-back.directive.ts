import {Directive, HostListener} from '@angular/core';
import {Router} from "@angular/router";

@Directive({
  selector: '[appGoBack]',

})
export class GoBackDirective {

  constructor(private _router: Router) { }

  @HostListener('click')
  onClick() {
    this._router.navigate(['dashboard/shops']);
  }

}
