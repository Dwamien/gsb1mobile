import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicService } from '../services/medic.service';
import { Medic } from '../models/medic';
import { Composant} from '../models/composant';
import { Composition } from '../models/composition';

@Component({
  selector: 'app-add-comp',
  templateUrl: './add-comp.component.html'
})
export class AddCompComponent implements OnInit {
  public id_medicament: number;
  public medic: Medic;
  public error: string;
  public composant: Composant;
  public notComposants: Composant[];
  public composition: Composition;

  constructor(
    private activatedRoute: ActivatedRoute,
    private medicService: MedicService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.medic = new Medic();
    this.composition = new Composition();
    this.id_medicament= +this.activatedRoute.snapshot.paramMap.get('id');
    this.getMedic(this.id_medicament);
    this.getNotComp(this.id_medicament);
  }

  getMedic(id: number){
    this.medicService.getMedic(id).subscribe(
      (medic) => { this.medic = medic },
      (error) => { this.error = error.error.message }
    );
  }

  getNotComp(id: number){
    this.medicService.getNotComp(id).subscribe(
      (notComposants) => { this.notComposants = notComposants},
      (error) => { this.error = error.error.message }
    );
  }

  validateAdd(id: number){
    this.composition.id_medicament = id;
    this.medicService.addComp(this.composition).subscribe(
      () => { },
      (error) => { this.error = error.error.message },
      () => { this.router.navigate(['gest-comp/'+id])}
    );
  }

  cancel(id: number){
    this.router.navigate(['gest-comp/'+id]);
  }
}
