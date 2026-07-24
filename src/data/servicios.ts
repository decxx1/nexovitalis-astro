export interface ServicioItem {
  title: string;
  list: string[];
  img: string;
}

export interface ServicioCategoria {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  bg: string;
  items: ServicioItem[];
}

export const CATEGORIAS_SERVICIOS: ServicioCategoria[] = [
  {
    id: 'prestaciones-medicas-domiciliarias',
    title: 'Prestaciones Médicas Domiciliarias',
    subtitle: 'Cuidado integral y personalizado en el entorno más adecuado: el hogar.',
    img: '/services.png',
    bg: 'primary',
    items: [
      {
        title: 'Internación domiciliaria',
        img: 'd1.webp',
        list: [
          'Médicos generalistas e intensivistas',
          'Rehabilitación motora, respiratoria y neurológica',
          'Enfermería especializada',
          'Fonoaudiología',
          'Nutrición y alimentación enteral',
          'Psicología',
          'Terapia ocupacional',
          'Cuidadores y acompañamiento terapéutico',
          'Sub-especialidades: Aparatología e insumos médicos: respiradores, bombas de infusión, saturómetros, oxígeno, camas ortopédicas',
          'Diseño de plan de contingencia a medida para pacientes complejizados',
        ],
      },
      {
        title: 'Especialidades médicas',
        img: 'especialidades-medicas.png',
        list: [
          'Médico clínico',
          'Pediatra',
          'Subespecialidades: cardiología, fisiatría, neurología, endocrinología, psiquiatría, reumatología',
        ],
      },
      {
        title: 'Atención primaria de la salud',
        img: 'd3.webp',
        list: ['Control embarazo y niño sano', 'Vacunación', 'Planes nutricionales'],
      },
      {
        title: 'Atención integral al adulto mayor',
        img: 'd2.webp',
        list: ['Cuidadoras', 'Actividades lúdicas y acompañamiento'],
      },
      {
        title: 'Diagnóstico y tratamientos específicos',
        img: 'd6.webp',
        list: [
          'Ecografías, radiografía, ECG, laboratorio clínico',
          'Escaras, pie diabético, nutrición enteral (adultos y pediátrica)',
        ],
      },
    ],
  },
  {
    id: 'salud-empresarial',
    title: 'Salud Empresarial',
    subtitle: 'Ponemos en valor la salud como estrategia empresarial.',
    img: '/services.png',
    bg: 'secondary',
    items: [
      {
        title: 'Prevención inteligente',
        img: 'prevencion-inteligente.png',
        list: [
          'Evaluación de riesgo individual y poblacional',
          'Detección precoz de enfermedades prevalentes por grupos etarios',
          'Construcción del perfil epidemiológico empresarial',
          'Informes estratégicos para decisiones de gestión',
        ],
      },
      {
        title: 'Medicina in Company',
        img: 'd9.webp',
        list: [
          'Atención médica en planta o modalidad híbrida',
          'Telemedicina ágil y resolutiva',
          'Programas específicos (HTA, estrés, sueño, nutrición)',
          'Educación sanitaria continua y aplicada',
        ],
      },
      {
        title: 'Salud para Líderes y Posiciones Estratégicas',
        img: 'medic-staff.webp',
        list: [
          'Evaluación integral de salud y factores de riesgo',
          'Detección precoz de patologías cardiovasculares y metabólicas',
          'Seguimiento médico personalizado',
          'Gestión del estrés y prevención del burnout',
          'Hábitos saludables: sueño, nutrición y actividad física',
        ],
      },
      {
        title: 'Gestión del Ausentismo',
        img: 'gestion-ausentismo.png',
        list: [
          'Seguimiento médico personalizado del trabajador',
          'Optimización de tiempos de recuperación',
          'Evaluación de capacidad laboral',
          'Análisis de causas de ausentismo',
          'Diseño de planes de reducción de días caídos',
        ],
      },
      {
        title: 'Campañas de Vacunación',
        img: 'campanas-vacunacion.png',
        list: [
          'Calendario de vacunación completo y al día',
          'Aplicación en planta, domicilio o modalidad híbrida',
          'Campañas estacionales: gripe, refuerzos y brotes',
          'Registro y seguimiento de coberturas',
          'Concientización: informar',
        ],
      },
    ],
  },
  {
    id: 'servicios-para-art',
    title: 'Servicios para ART',
    subtitle: 'Cuidamos a las personas. Protegemos a las empresas.',
    img: '/services.png',
    bg: 'tertiary',
    items: [
      {
        title: 'Prestaciones domiciliarias para ART',
        img: 'safety-work.webp',
        list: [
          'Rehabilitación motora, respiratoria y neurológica',
          'Psicoterapia, evaluación y psicodiagnóstico',
          'Consultas traumatológicas y médicas de todas las especialidades',
          'Enfermería domiciliaria para curaciones y antibióticos',
          'Laboratorio de análisis clínicos a domicilio',
          'Servicio de radiología (RX) a domicilio',
          'Cadetería de medicamentos y notificaciones',
          'Atención de pacientes crónicos (Res. SRT 180/2015)',
        ],
      },
    ],
  },
];
