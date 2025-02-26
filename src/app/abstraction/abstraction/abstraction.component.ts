import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-abstraction',
  templateUrl: './abstraction.component.html',
  styleUrls: ['./abstraction.component.css']
})
export class AbstractionComponent implements OnInit {
  users: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.users = this.dataService.fetchData();
  }
}
