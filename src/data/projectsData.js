/**
 * Dados de Projetos
 *
 * Array com todos os projetos exibidos no portfólio.
 * Utilizado no carrossel da seção "Projetos" e nos modais de detalhes.
 *
 * Estrutura de cada projeto:
 * - id: Identificador único
 * - title: Título do projeto
 * - category: Categoria (Fullstack, DevOps, Cloud, etc.)
 * - thumbnail: Caminho para imagem de capa (ou null para placeholder)
 * - shortDescription: Descrição resumida exibida no card
 * - technologies: Array de tecnologias utilizadas
 * - detailedDescription: Descrição completa exibida no modal
 * - features: Array de funcionalidades principais
 * - challenges: Desafios técnicos e aprendizados
 * - images: Array de imagens para galeria no modal
 * - github: Link do repositório GitHub (projetos únicos)
 * - githubFrontend: Link do repositório frontend (projetos fullstack)
 * - githubBackend: Link do repositório backend (projetos fullstack)
 * - liveUrl: URL do projeto em produção (opcional)
 * - date: Ano de desenvolvimento
 *
 * Nota: Projetos são exibidos na ordem do array.
 */

export const projects = [
  {
    id: 1,
    title: "RankFome - Sistema de Delivery Fullstack",
    category: "Fullstack",
    thumbnail: "/images/projects/rankfome-1.jpg",
    shortDescription: "Plataforma completa de delivery de alimentos com API RESTful e interface moderna.",
    technologies: [".NET 8", "C#", "React", "PostgreSQL", "JWT", "Entity Framework", "Tailwind CSS"],
    detailedDescription: "Sistema completo de gerenciamento de pedidos e delivery desenvolvido do zero. O projeto foi dividido em duas partes: backend com API RESTful em .NET 8 e frontend SPA em React.",
    features: [
      "Sistema de autenticação JWT com três níveis de acesso (Cliente, Vendedor, Dev)",
      "CRUD completo de lojas, produtos e pedidos",
      "Upload de imagens para produtos e lojas",
      "Sistema de carrinho de compras com gestão de itens",
      "Fluxo completo de checkout com endereço e formas de pagamento",
      "Painel administrativo para vendedores gerenciarem suas lojas",
      "Acompanhamento de status de pedidos em tempo real",
      "Integração com PostgreSQL usando Entity Framework Core"
    ],
    challenges: "Um dos principais desafios foi implementar a segurança da API com JWT e garantir que apenas usuários autorizados pudessem acessar determinados recursos. Também foi necessário otimizar as queries do banco para suportar grande volume de dados.",
    images: [
      "/images/projects/rankfome-1.jpg",
      "/images/projects/rankfome-2.jpg",
      "/images/projects/rankfome-3.jpg",
      "/images/projects/rankfome-4.jpg"
    ],
    githubFrontend: "https://github.com/MatheusHenriquePrates/rankfome-frontend",
    githubBackend: "https://github.com/MatheusHenriquePrates/rankfome-backend",
    date: "2025"
  },
  {
    id: 2,
    title: "Sistema de Inventário Fullstack",
    category: "Fullstack",
    thumbnail: "/images/projects/inventario-1.jpg",
    shortDescription: "Sistema de gerenciamento de ativos de TI com API RESTful e frontend moderno.",
    technologies: [".NET 8", "Minimal APIs", "Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    detailedDescription: "Projeto completo de API RESTful em .NET 8 usando Minimal APIs, EF Core e autenticação JWT, consumida por um frontend em Next.js com TypeScript e Tailwind CSS para o gerenciamento de ativos de TI.",
    features: [
      "API RESTful com Minimal APIs do .NET 8",
      "Autenticação e autorização com JWT",
      "CRUD completo de equipamentos e ativos",
      "Dashboard com métricas e relatórios",
      "Sistema de controle de empréstimos",
      "Histórico completo de movimentações",
      "Filtros avançados e pesquisa"
    ],
    challenges: "O maior desafio foi criar uma arquitetura escalável usando Minimal APIs e garantir a integridade dos dados nas movimentações de ativos.",
    images: [
      "/images/projects/inventario-1.jpg",
      "/images/projects/inventario-2.jpg",
      "/images/projects/inventario-3.jpg",
      "/images/projects/inventario-4.jpg"
    ],
    githubFrontend: "https://github.com/MatheusHenriquePrates/inventario-frontend",
    githubBackend: "https://github.com/MatheusHenriquePrates/InventarioAPI-Backend",
    date: "2025"
  },
  {
    id: 3,
    title: "Automação de Manutenção CUPS",
    category: "DevOps/Automação",
    thumbnail: null,
    shortDescription: "Script Bash para automação proativa de manutenção de impressoras e filas CUPS.",
    technologies: ["Bash", "Linux", "CUPS", "Shell Scripting", "Automação"],
    detailedDescription: "Criei e implementei um script em Bash para automatizar a manutenção de impressoras e filas CUPS, reduzindo a necessidade de intervenção manual e otimizando a estabilidade do serviço.",
    features: [
      "Monitoramento automático de filas de impressão",
      "Limpeza automática de trabalhos travados",
      "Reinicialização inteligente de serviços",
      "Logs detalhados de todas as operações",
      "Agendamento via cron para execução periódica",
      "Notificações de erros críticos"
    ],
    challenges: "O desafio foi criar um sistema confiável que identificasse problemas antes que afetassem os usuários, sem gerar falsos positivos.",
    images: [null],
    github: "https://github.com/MatheusHenriquePrates/meu_projeto_cups_github",
    date: "2025"
  },
  {
    id: 4,
    title: "Sistema de Monitoramento Oracle Cloud",
    category: "Cloud/Infraestrutura",
    thumbnail: null,
    shortDescription: "Sistema de monitoramento usando Oracle Cloud para virtualização e configurei Zabbix e Grafana.",
    technologies: ["Oracle Cloud", "Zabbix", "Grafana", "Linux", "Docker"],
    detailedDescription: "Desenvolvi um sistema de monitoramento usando Oracle Cloud para virtualização e configurei Zabbix e Grafana para enviar alertas via e-mail, WhatsApp e Teams.",
    features: [
      "Monitoramento de recursos cloud em tempo real",
      "Dashboards personalizados no Grafana",
      "Alertas multi-canal (e-mail, WhatsApp, Teams)",
      "Métricas de CPU, memória, disco e rede",
      "Histórico de performance e disponibilidade",
      "Relatórios automatizados"
    ],
    challenges: "Integrar múltiplos canais de notificação e configurar alertas inteligentes que evitassem spam foi o principal desafio.",
    images: [null],
    date: "2024"
  },
  {
    id: 5,
    title: "Modelo de Linguagem para Análise de Notícias",
    category: "IA/Machine Learning",
    thumbnail: null,
    shortDescription: "Modelo de linguagem em Python capaz de analisar notícias em tempo real.",
    technologies: ["Python", "NLP", "Machine Learning", "TensorFlow", "scikit-learn"],
    detailedDescription: "Criei um modelo de linguagem em Python capaz de analisar notícias em tempo real, classificando seu teor (positivo ou negativo) e determinando sua relevância.",
    features: [
      "Análise de sentimento em tempo real",
      "Classificação de relevância de notícias",
      "Processamento de linguagem natural (NLP)",
      "Treinamento com datasets públicos",
      "API REST para integração",
      "Dashboard de visualização de resultados"
    ],
    challenges: "Treinar o modelo para entender contexto e nuances da língua portuguesa foi o maior desafio técnico.",
    images: [null],
    date: "2024"
  },
  {
    id: 6,
    title: "Migração de Antivírus Corporativo",
    category: "Infraestrutura/Segurança",
    thumbnail: null,
    shortDescription: "Migração de FortiClient para Bitdefender em 30 filiais com GPO e PowerShell.",
    technologies: ["Bitdefender", "PowerShell", "Active Directory", "GPO", "Windows Server"],
    detailedDescription: "Liderei a migração de FortiClient para Bitdefender em 30 filiais, definindo políticas de segurança e GPOs para garantir uma transição segura e eficaz.",
    features: [
      "Planejamento de migração zero-downtime",
      "Scripts PowerShell para automação",
      "Configuração de GPOs centralizadas",
      "Políticas de segurança padronizadas",
      "Rollout gradual por filial",
      "Documentação completa do processo",
      "Treinamento de equipe local"
    ],
    challenges: "Coordenar a migração em 30 filiais simultaneamente sem impactar a operação foi o grande desafio de gestão.",
    images: [null],
    date: "2024"
  }
];