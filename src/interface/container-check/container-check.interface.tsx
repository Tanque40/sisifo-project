export interface ContainerFormInterface {
  name: string;
  form: ContainerForm;
  radio?: number;
  height?: number;
  base?: number;
  deep?: number;
  volume?: number;
  diferencial?: number;
  selected: boolean;
}

export enum ContainerForm {
  CYLINDER = 'Cilíndrica',
  CIRCULAR = 'Esférica',
  SQUARE = 'Cuadrada',
  RECTANGULAR = 'Rectangular'
}
