/**
 * Dados de Experiências Profissionais
 *
 * Array com histórico completo de experiências profissionais exibido
 * no carrossel da seção "Sobre Mim".
 *
 * Estrutura de cada experiência:
 * - id: Identificador único
 * - period: Período de atuação (formato: "Mês Ano - Mês Ano")
 * - role: Cargo/função exercida
 * - company: Nome da empresa/organização
 * - location: Cidade e país
 * - description: Descrição detalhada das responsabilidades e atividades
 * - skills: Array de tecnologias e habilidades utilizadas
 * - impact: Aprendizados e impacto da experiência no desenvolvimento profissional
 *
 * Nota: Experiências são exibidas na ordem do array (mais recentes primeiro).
 */

export const experiences = [
  {
    id: 1,
    period: "Abr 2025 - Atualmente",
    role: "Desenvolvedor Fullstack .NET + React",
    company: "Freelancer",
    location: "Goiânia, Brasil",
    description: "Desenvolvimento de APIs RESTful seguras e de alta performance utilizando .NET 8 e C#, com autenticação baseada em Token JWT e Entity Framework Core. Criação de interfaces de usuário (UI) dinâmicas e responsivas com React, Next.js e TypeScript, consumindo as APIs de backend. Responsável pela criação de projetos FULLSTACK completos, desde a arquitetura da API até a implementação do frontend.",
    skills: [".NET 8", "C#", "React", "Next.js", "TypeScript", "JWT", "Entity Framework", "PostgreSQL"],
    impact: "Essa experiência me permitiu consolidar minhas habilidades em arquitetura de software, desenvolvendo soluções completas do zero e entendendo profundamente a comunicação entre frontend e backend."
  },
  {
    id: 2,
    period: "Jul 2025 - Atualmente",
    role: "Trainee Técnico de Infraestrutura/Impressoras",
    company: "Dimex",
    location: "Goiânia, Brasil",
    description: "Gerenciamento e suporte técnico completo da infraestrutura de impressão, garantindo a estabilidade e o bom funcionamento dos sistemas. Implementação de soluções de monitoramento para identificar e resolver falhas de forma proativa. Configuração e manutenção de equipamentos de impressão em rede, resolvendo problemas de conectividade e otimizando o fluxo de trabalho.",
    skills: ["CUPS", "Linux", "Redes", "Monitoramento", "Bash Scripting", "Troubleshooting"],
    impact: "Desenvolvi forte capacidade de resolução de problemas e criação de automações para manutenção proativa, reduzindo drasticamente o tempo de inatividade dos sistemas."
  },
  {
    id: 3,
    period: "Set 2024 - Jul 2025",
    role: "Trainee de Infraestrutura",
    company: "Rede JS Peças",
    location: "Goiânia, Brasil",
    description: "Assistência técnica de Nível 1 para usuários internos, resolvendo problemas de software e hardware. Gerência e acompanhamento de chamados técnicos utilizando ferramentas como Sankhya e GLPI. Suporte técnico especializado para sistemas operacionais Ubuntu e Linux.",
    skills: ["Suporte N1", "GLPI", "Sankhya", "Ubuntu", "Windows", "Hardware"],
    impact: "Primeira experiência em ambiente corporativo de TI, onde aprendi a gerenciar múltiplas demandas simultâneas e desenvolvi excelente capacidade de comunicação com usuários finais."
  },
  {
    id: 4,
    period: "2022 - 2024",
    role: "Policial do Exército",
    company: "Exército Brasileiro",
    location: "Goiânia, Brasil",
    description: "Responsável por atividades de segurança, patrulhamento e garantia da lei e da ordem. Desenvolvendo disciplina, responsabilidade e capacidade de seguir protocolos rígidos em ambientes de alta pressão, com foco em trabalho em equipe e a comunicação efetiva para a coordenação de operações.",
    skills: ["Disciplina", "Trabalho em Equipe", "Trabalho sob Pressão", "Protocolos", "Liderança"],
    impact: "Experiência fundamental que moldou minha capacidade de trabalhar sob pressão, seguir processos rigorosamente e desenvolver forte senso de responsabilidade e comprometimento."
  },
  {
    id: 5,
    period: "2021 - 2022",
    role: "Atendente de Telemarketing",
    company: "PUC Goiás",
    location: "Goiânia, Brasil",
    description: "Experiência em suporte e atendimento ao cliente via telemarketing, prestando assistência para a solução ágil de dúvidas e problemas. Desenvolvendo excelente capacidade de comunicação clara, empatia e resolução de conflitos para lidar com diversos perfis de clientes.",
    skills: ["Atendimento ao Cliente", "Comunicação", "Resolução de Conflitos", "Empatia"],
    impact: "Aprendi a me comunicar de forma clara e efetiva, habilidade essencial que aplico diariamente ao explicar conceitos técnicos para usuários não técnicos."
  },
  {
    id: 6,
    period: "2014 - 2016",
    role: "Instrutor de TI",
    company: "Visual Focus / Evolua",
    location: "Goiânia, Brasil",
    description: "Professor de lógica de programação, sistemas operacionais e pacote Office para alunos de diferentes idades do ensino fundamental e médio. Com materiais didáticos e planos de aula próprios e personalizados para otimizar o aprendizado. Orientando os alunos na resolução de problemas práticos, desenvolvendo habilidades de didática e mentoria.",
    skills: ["Lógica de Programação", "Didática", "Office", "Sistemas Operacionais", "Mentoria"],
    impact: "Primeira experiência profissional na área de TI, onde descobri minha paixão por ensinar e compartilhar conhecimento, habilidade que uso até hoje ao documentar projetos e auxiliar colegas."
  }
];