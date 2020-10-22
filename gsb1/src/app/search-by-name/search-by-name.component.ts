import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MedicService } from '../services/medic.service';
import { Medic } from '../models/medic';

@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html'
})
export class SearchByNameComponent implements OnInit {
  @Input() public id_medicament: number;
  @Output() private onChoose = new EventEmitter();

  public medics: Medic[];
  public error: string;

  constructor(
    private medicService: MedicService
  ) { }

  ngOnInit(): void {
    this.getMedics();
  }

  getMedics(){
    this.medicService.getMedics().subscribe(
      (medics) => { this.medics = medics },
      (error) => { this.error = error.error.message }
    );
  }

  onChange(value: number){
    this.id_medicament = value;
    this.onChoose.emit(this.id_medicament);
  }
}
