import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-colors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './colors.component.html',
  styleUrl: './colors.component.scss'
})
export class ColorsComponent {
  r: Observable<string | null> = this.actRoute.paramMap.pipe(
    map(params => params.get('r'))
  );
  g:  Observable<string | null> = this.actRoute.paramMap.pipe(
    map(params => params.get('g'))
  );
  b: Observable<string | null> = this.actRoute.paramMap.pipe(
    map(params => params.get('b'))
  );

  constructor(private actRoute: ActivatedRoute) {}
}
