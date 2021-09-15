import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reestablecer',
  templateUrl: './reestablecer.page.html',
  styleUrls: ['./reestablecer.page.scss'],
})
export class ReestablecerPage implements OnInit {

  reestablecer : any;

  constructor(private activedRoute: ActivatedRoute) {
    this.activedRoute.queryParams.subscribe(params => {
      this.reestablecer = JSON.parse(params.reestablecer)
    });
  }

  ngOnInit() {
  }

}
