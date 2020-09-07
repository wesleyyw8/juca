import { DataService } from './../data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.less']
})
export class VideoComponent implements OnInit, OnDestroy {
  private routeSub: Subscription;
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.dataService.get(params['id']).subscribe(data => {
        console.log(data);
      });
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
