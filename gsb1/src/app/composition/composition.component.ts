import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { Medic } from '../models/medic';
import { Composition } from '../models/composition';
import { MedicService } from '../services/medic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-composition',
  templateUrl: './composition.component.html'
})
export class CompositionComponent implements OnInit {
  @Input() public medic: Medic;
  @Output() private reload = new EventEmitter();
  public error: string;
  public composition: Composition;

  constructor(
    private medicService: MedicService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.medic = new Medic();
    this.composition = new Composition();
  }

  delete(med_id:number, comp_id:number){
    this.medicService.deleteComp(med_id, comp_id).subscribe(
      () => { },
      (error) => { this.error = error.error.message },
      () => { this.reload.emit(med_id) }
    )
  }
}
