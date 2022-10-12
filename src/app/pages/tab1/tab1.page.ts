import { Component, OnInit } from '@angular/core';
import { Sneaker } from 'src/app/interfaces';
import { SneakersService } from 'src/app/services/sneakers.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public sneakers: Sneaker[]=[];

  constructor(private sneakersServices:SneakersService) {}

  ngOnInit() {
    this.sneakersServices.getSneakersInfo().subscribe(resp=>{
      console.log(resp.sneaker);
      this.sneakers=resp.sneaker;
    })
  }

}
