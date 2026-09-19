export interface ServiceSolution {
  title: string;
  badge: string;
  description: string;
  highlights: string[];
}

export const solutionsData: ServiceSolution[] = [
  {
    title: 'Sites & Landing Pages',
    badge: 'A partir de R$ 500',
    description: 'Ideal para microempreendedores que anunciam no Google. Página que abre em 1s e transforma clique pago em cliente no Zap.',
    highlights: [
      'Criação a partir de R$ 500',
      'Manutenção R$ 50/mês',
      'Abre em 1s no Celular',
      'Botão direto pro WhatsApp',
    ],
  },
  {
    title: 'Aplicativos Mobile Android e iOS',
    badge: 'A partir de R$ 1.000',
    description: 'Seu negócio na palma do cliente. Venda, agende e fidelize sem intermediários e sem taxas.',
    highlights: [
      'Criação a partir de R$ 1.000',
      'Publicado na Play Store',
      'Notificações Push',
      'Painel simples',
    ],
  },
  {
    title: 'Lojas Virtuais, Catálogo & Delivery',
    badge: 'Zero Comissão',
    description: 'Pare de pagar até 27% para iFood. Sistema completo a partir de R$ 2.000 com pedidos direto no seu WhatsApp.',
    highlights: [
      'Sistema a partir de R$ 2.000',
      'Zero taxa por venda',
      'Manutenção R$ 50/mês',
      'Pix e Cartão',
    ],
  },
  {
    title: 'Automações e Sistemas com IA',
    badge: 'A partir de R$ 2.000',
    description: 'Elimine tarefas repetitivas. Atenda no automático com QR Codes e IA.',
    highlights: [
      'Projetos a partir de R$ 2.000',
      'Atendimento no Zap automático',
      'QR Code inteligente',
      'Economia de horas',
    ],
  },
];

export const processSteps = [
  {
    step: '01',
    title: 'Conversa no WhatsApp',
    description: 'Você me conta sua meta. Eu indico a solução mais barata que resolve.',
  },
  {
    step: '02',
    title: 'Orçamento e Prazo Fechado',
    description: 'A partir de R$ 500. Valor fixo e data definida. Sem surpresa.',
  },
  {
    step: '03',
    title: 'Criação com Acompanhamento',
    description: 'Você valida tudo pelo celular.',
  },
  {
    step: '04',
    title: 'Lançamento e Suporte',
    description: 'Site no ar, treinamento de 5min e suporte incluso nos R$ 50/mês.',
  },
];

export const sectionCheckpoints = [
  'Atendimento Direto: Você fala direto comigo no WhatsApp, sem intermediários ou estagiário.',
  'Entrega Rápida e Garantida: Cronograma real com acompanhamento diário.',
  'Preço Fechado e Suporte: Sem cobranças extras. Manutenção e suporte inclusos nos R$ 50/mês.',
];

export const coreHighlights = [
  { label: 'Sites & Landing Pages', count: 'A partir de R$ 500' },
  { label: 'Aplicativos Mobile', count: 'A partir de R$ 1.000' },
  { label: 'Sistemas & Lojas', count: 'A partir de R$ 2.000' },
  { label: 'Manutenção & Suporte', count: 'R$ 50/mês' },
];

export const skillsData = [
  'React',
  'TypeScript',
  'Flutter',
  'Android Nativo',
  'Node.js',
  'Firebase',
  'Three.js',
  'Next.js',
  'Tailwind',
];
