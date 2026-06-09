export interface Compromiso {
  title: string;
  description?: string;
  list?: string[];
  bg: string;
}

export const compromisos: Compromiso[] = [
  {
    title: 'Misión',
    description:
      'Nuestra misión es ser el servicio de salud al que cualquier ciudadano desea acudir para cubrir sus necesidades, ofreciendo una atención excelente en cada aspecto de la relación con el paciente y su familia.',
    bg: 'rgb(1, 12, 125)',
  },
  {
    title: 'Visión',
    description:
      'Nuestra misión es ser el servicio de salud al que cualquier ciudadano desea acudir para cubrir sus necesidades, ofreciendo una atención excelente en cada aspecto de la relación con el paciente y su familia.',
    bg: 'rgb(217, 64, 189)',
  },
  {
    title: 'Valores',
    list: [
      'Exelencia',
      'Integridad',
      'Compasión',
      'Innovación',
      'Colaboración',
      'Sostenibilidad',
    ],
    bg: 'rgb(212, 136, 64)',
  },
];
