import { Composant } from './composant';

export class Medic {
  public id_medicament: number;
  public id_famille: number;
  public depot_legal: string;
  public nom_commercial: string;
  public effets: string;
  public contre_indication: string;
  public prix_echantillon: number;
  public composants: Composant[];
}
