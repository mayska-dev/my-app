import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { analyses } from './data/analyses';
import { stones } from './data/stones';
import { homeopathies } from './data/homeopathies';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {

    return {
      homeopaties: homeopathies,
      analyses: analyses,
      stones: stones
    }
  }
}
