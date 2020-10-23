import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedicService } from '../services/medic.service';
import { Medic } from '../models/medic';

@Component({
  selector: 'app-add-comp',
  templateUrl: './add-comp.component.html'
})
export class AddCompComponent implements OnInit {
  public id_medicament: number;
  public medic: Medic;
  public error: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private medicService: MedicService
  ) { }

  ngOnInit(): void {
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

}
