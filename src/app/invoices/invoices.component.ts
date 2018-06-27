import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../animations/fade-in.animation';


@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css'],
  animations: [fadeInAnimation],
})
export class InvoicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
