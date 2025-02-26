import { Injectable } from '@angular/core';
import { AbstractApiService } from './abstract-api.service';

@Injectable({
  providedIn: 'root'
})
export class DataService extends AbstractApiService {

  constructor() {
    super();
  }
  fetchData(): any {
    return [{ id: 1, name: "John Doe" }, { id: 2, name: "Jane Smith" }];
  }
}
