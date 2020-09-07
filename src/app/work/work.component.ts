import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.less']
})
export class WorkComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public goToPage(pageNumber: number): void {
    this.router.navigateByUrl(`/video/${pageNumber}`);
  }
}
