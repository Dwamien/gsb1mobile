import { Component, Input, OnInit } from '@angular/core';
import { Medic } from '../models/medic';
import { Composant} from '../models/composant';

@Component({
  selector: 'app-composition',
  templateUrl: './composition.component.html'
})
export class CompositionComponent implements OnInit {
  @Input() public medic: Medic;
  public composants: Composant[];
  public error: string;

  constructor() {
    this.medic = new Medic();
  }

  ngOnInit(): void {
    this.medic = new Medic();
  }
}
