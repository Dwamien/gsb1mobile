import { Component, OnInit } from '@angular/core';
import { MedicService } from '../services/medic.service';
import { Medic } from '../models/medic';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gest-comp',
  templateUrl: './gest-comp.component.html'
})
export class GestCompComponent implements OnInit {
  public id_medicament: number;
  public medic: Medic;
  public error: string;

  constructor(
    private medicService: MedicService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let med_id = +this.activatedRoute.snapshot.paramMap.get('id');
    if(med_id > 0){
      this.medicSelected(med_id);
    }
  }

  medicSelected(id: number): void {
    this.id_medicament = id;
    this.getMedic(id);
  }

  getMedic(id: number){
    this.medicService.getMedic(id).subscribe(
      (medic) => { this.medic = medic },
      (error) => { this.error = error.error.message }
    )
  }

  reload(med_id): void{
    this.medicSelected(med_id);
  }
}
