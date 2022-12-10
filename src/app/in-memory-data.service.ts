import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { homeopathies } from './data/data';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {

    return { homeopaties: homeopathies }
  }
}
