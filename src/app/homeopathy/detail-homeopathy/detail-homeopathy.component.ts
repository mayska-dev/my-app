import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Analyse } from 'src/app/analyse/analyse';
import { AnalyseService } from 'src/app/analyse/analyse.service';
import { Homeopathy } from '../homeopathy';
import { HomeopathyService } from '../homeopathy.service';

@Component({
  selector: 'app-detail-homeopathy',
  templateUrl: './detail-homeopathy.component.html'
})
export class DetailHomeopathyComponent implements OnInit {

  homeopathy: Homeopathy | undefined

  constructor(
    private route: ActivatedRoute,
    private service: HomeopathyService
  ) { }

  async ngOnInit() {
    const id: string | null = this.route.snapshot.paramMap.get('id')
    if (id) {
      this.service.getHomeopatie(+id)
        .subscribe(homeopathy => this.homeopathy = homeopathy)
    }
  }

}
