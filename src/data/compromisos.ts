export interface Compromiso {
  title: string;
  description?: string;
  list?: string[];
  bg: string;
}

export const compromisos: Compromiso[] = [
  {
    title: 'Nuestro propósito',
    description:
      'Cuidar la vida en todas sus etapas, acompañando, educando y previniendo en cada paso. Ponemos a la persona en el centro: pacientes y familias en el domicilio, equipos de trabajo en las empresas.',
    bg: 'rgb(1, 12, 125)',
  },
  {
    title: 'Lo que nos diferencia',
    description:
      'Integramos excelencia profesional, tecnología y calidez humana para garantizar una atención segura, cercana y adaptada a cada necesidad. ',
    bg: 'rgb(217, 64, 189)',
  },
  {
    title: 'Nuestros valores',
    list: [
      'Exelencia',
      'Integridad',
      'Empatía',
      'Innovación',
      'Colaboración',
      'Responsabilidad',
      'Sostenibilidad',
      'Formación'
    ],
    bg: 'rgb(212, 136, 64)',
  },
];
