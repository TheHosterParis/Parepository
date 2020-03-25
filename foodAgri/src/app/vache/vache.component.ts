import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vache',
  templateUrl: './vache.component.html',
  styleUrls: ['./vache.component.css']
})
export class VacheComponent implements OnInit {
 vaches = [
    {
    id: 1,
    name: 'marguerite',
    birth: '01/02/2018',
    description: '1 mamite en 2012 au pis proche jambe droite'
    },
    {
      id: 2,
      name: 'mango',
      birth: '22/04/2017',
      description: 'acidose le 12 fevrier 2018'
      },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
