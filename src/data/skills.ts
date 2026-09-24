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
    description: 'Crio páginas rápidas e personalizadas que geram valor ao seu negócio e direcionam os visitantes para o seu Whatsapp.',
    highlights: [
      'Criação a partir de R$ 500',
      'Manutenção opcional a partir de R$ 50 mensais',
      'Sem templates prontos com informação clara e direta',
    ],
  },
  {
    title: 'Aplicativos Mobile Android e iOS',
    badge: 'A partir de R$ 1.000',
    description: 'Seu negócio nas lojas de aplicativo. Venda, agende e fidelize sem intermediários e sem taxas de plataforma.',
    highlights: [
      'Criação a partir de R$ 1.000',
      'Publicado nas Lojas Android e Apple',
      'Notificações Nativas',
      'Painel de Usuário e Administrador',
    ],
  },
  {
    title: 'Lojas Virtuais, Catálogo & Delivery',
    badge: 'Fora das Plataformas',
    description: 'Pare de pagar até 30% para plataformas de Delivery tenha seu sistema completo a partir de R$ 2.000 com pedidos direto na sua plataforma.',
    highlights: [
      'Sistema a partir de R$ 2.000',
      'Taxa somente do seu banco',
      'Manutenção a partir de R$ 100 mensais',
      'Pix e Cartão integrados',
    ],
  },
];

export const processSteps = [
  {
    step: '01',
    title: 'Conversa no WhatsApp',
    description: 'Você me explica sua necessidade. Eu indico a solução mais barata que resolve.',
  },
  {
    step: '02',
    title: 'Orçamento e Prazo Fechado',
    description: 'Após entender o que precisa, te envio no e-mail o orçamento com proposta, Valor e prazo de entrega.',
  },
  {
    step: '03',
    title: 'Criação com Acompanhamento',
    description: 'Você acompanha o projeto e pode aprovar cada etapa pelo celular.',
  },
  {
    step: '04',
    title: 'Lançamento e Suporte',
    description: 'Entrego seu Projeto Online e ativo com treinamento se necessário e suporte incluso no primeiro mês.',
  },
];

export const sectionCheckpoints = [
  'Atendimento personalizado no WhatsApp, sem intermediários ou estagiário.',
  'Entrega Rápida e Garantida com acompanhamento diário.',
  'Preço Fechado e Suporte: Sem cobranças extras. Manutenção e suporte inclusos nos R$ 50/mês.',
];

export const coreHighlights = [
  { label: 'Sites e Landing Pages', count: 'A partir de R$ 500' },
  { label: 'Aplicativos Mobile', count: 'A partir de R$ 1.000' },
  { label: 'Sistemas & Lojas', count: 'A partir de R$ 2.000' },
  { label: 'Manutenção & Suporte', count: 'R$ 50/mês' },
];

export const skillsData = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Flutter',
  'Kotlin',
  'PostgreeSQL',
  'Python',
];
