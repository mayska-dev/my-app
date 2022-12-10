import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Homeopathie } from '../homeopathy.module';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-detail-homeopathy',
  templateUrl: './detail-homeopathy.component.html'
})
export class DetailHomeopathyComponent implements OnInit {

  homeopathy: Homeopathie | undefined

  constructor(
    private route: ActivatedRoute,
    private service: ServiceService
  ) { }

  ngOnInit() {
    const id: string | null = this.route.snapshot.paramMap.get('id')
    if (id) {
      this.service.getHomeopatie(+id)
        .subscribe(homeopathy => this.homeopathy = homeopathy)
    }

  }

}
