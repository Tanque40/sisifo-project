export interface ContainerFormInterface {
  name: string;
  volume?: number;
  form: ContainerForm;
  diferencial?: number;
  selected: boolean;
}

export enum ContainerForm {
  CYLINDER = 'cilindrico',
  CIRCULAR = 'circular',
  SQUARE = 'cuadrado',
  RECTANGULAR = 'rectangular'
}
