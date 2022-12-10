import { Component, OnInit } from '@angular/core';
import { Homeopathie } from '../homeopathy.module';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-homeopathylist',
  templateUrl: './list-homeopathy.component.html'
})
export class ListHomeopathyComponent implements OnInit {

  homeopatyList: Homeopathie[] = [];

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.getHomeopaties()
      .subscribe(homeopatyList => this.homeopatyList = homeopatyList);
  }


}
