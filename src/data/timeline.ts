export interface ComparisonRow {
  criterion: string;
  agency: string;
  direct: string;
}

export const comparisonData: ComparisonRow[] = [
  {
    criterion: 'Atendimento',
    agency: 'Fala com vendedor/estagiário',
    direct: 'Fala direto comigo no WhatsApp',
  },
  {
    criterion: 'Prazo',
    agency: '60 a 90 dias',
    direct: 'Entrega em dias',
  },
  {
    criterion: 'Tecnologia',
    agency: 'Sistema pesado que trava',
    direct: 'Código leve 1s',
  },
  {
    criterion: 'Custo',
    agency: 'R$ 3k + R$ 300/mês + taxas',
    direct: 'A partir de R$ 500 + R$ 50/mês fixo, zero comissão',
  },
];
