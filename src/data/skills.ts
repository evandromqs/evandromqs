export interface ServiceSolution {
  title: string;
  badge: string;
  description: string;
  highlights: string[];
}

export const solutionsData: ServiceSolution[] = [
  {
    title: 'Sites Profissionais & Landing Pages',
    badge: 'Alta Conversão',
    description: 'Páginas modernas, ultrarrápidas e adaptadas para qualquer celular. Criadas para transformar visitantes de anúncios no Google em clientes prontos para comprar.',
    highlights: [
      'Carregamento instantâneo',
      'Design moderno e profissional',
      'Botões diretos para o WhatsApp',
      'Otimizado para o Google (SEO)'
    ],
  },
  {
    title: 'Aplicativos Mobile (Android & iOS)',
    badge: 'Sob Medida',
    description: 'Aplicativos exclusivos para o seu negócio fidelizar clientes, receber pedidos, agendamentos ou controlar operações da sua empresa com facilidade.',
    highlights: [
      'Disponível para celulares Android e iPhone',
      'Interface simples e intuitiva',
      'Notificações e sincronização em tempo real',
      'Alta estabilidade e segurança'
    ],
  },
  {
    title: 'Lojas Virtuais, Catálogos & Delivery',
    badge: 'Venda Direta',
    description: 'Venda seus produtos ou alimentos pela internet sem pagar taxas ou comissões abusivas por pedido para terceiros. Receba pedidos direto no WhatsApp ou Pix.',
    highlights: [
      'Cardápio ou catálogo interativo',
      'Carrinho inteligente com frete',
      'Pedidos formatados no WhatsApp',
      'Sem mensalidades de terceiros'
    ],
  },
  {
    title: 'Automações & Sistemas Personalizados',
    badge: 'Produtividade',
    description: 'Soluções inteligentes para automatizar tarefas repetitivas, atendimento ao cliente, geração de QR Codes e integração de dados com Inteligência Artificial.',
    highlights: [
      'Economize horas de trabalho manual',
      'Conexão com WhatsApp e ferramentas',
      'Painéis fáceis de gerenciar',
      'Segurança total das suas informações'
    ],
  },
];

export const processSteps = [
  {
    step: '01',
    title: 'Conversa Inicial',
    description: 'Você me explica o que precisa pelo WhatsApp. Entendo o momento do seu negócio e sugiro a melhor solução.',
  },
  {
    step: '02',
    title: 'Orçamento & Prazo Fechado',
    description: 'Definimos o escopo, cronograma claro e valor fechado. Sem custos surpresa ou letras miúdas.',
  },
  {
    step: '03',
    title: 'Criação & Acompanhamento',
    description: 'Desenvolvo seu site ou aplicativo e você acompanha cada etapa para validar o visual e o funcionamento.',
  },
  {
    step: '04',
    title: 'Lançamento & Suporte',
    description: 'Publicação oficial na internet, treinamento simples para você operar e suporte garantido pós-entrega.',
  },
];

export const trustPillars = [
  {
    title: 'Atendimento Direto',
    desc: 'Sem intermediários ou burocracia de agência. Você fala direto com o especialista que desenvolve o seu projeto.',
  },
  {
    title: 'Entrega Rápida e Transparente',
    desc: 'Metodologia ágil com prazos reais e acompanhamento do progresso em tempo real.',
  },
  {
    title: 'Suporte e Garantia Pós-Entrega',
    desc: 'Orientação completa e garantia de funcionamento após a entrega para sua total tranquilidade.',
  },
];

export const coreHighlights = [
  { label: 'Sites & Lojas', count: 'Foco em Vendas' },
  { label: 'Aplicativos Mobile', count: 'Android & iOS' },
  { label: 'Atendimento', count: '100% Direto com Dev' },
  { label: 'Entrega', count: 'Rápida & Garantida' },
];

export const skillsData = [
  'React.js',
  'TypeScript',
  'Flutter',
  'Android Nativo',
  'Node.js',
  'Firebase & Nuvem',
  'Otimização Google (SEO)',
  'Automação & IA',
  'Design Mobile-First',
  'Integração WhatsApp & Pagamentos'
];
