/**
 * Dados Pessoais e Profissionais
 *
 * Arquivo de configuração centralizado com todas as informações pessoais
 * e profissionais exibidas no portfólio.
 *
 * Estrutura:
 * - Informações básicas (nome, cargo, localização, contatos)
 * - Links para redes sociais
 * - expertise: Array de especialidades para animação de digitação na Hero
 * - about: Array de parágrafos para a seção "Sobre Mim"
 *
 * Nota: Edite este arquivo para atualizar informações pessoais em todo o site.
 */

export const personalInfo = {
  name: "Matheus Henrique Prates",
  role: "Infraestrutura | DevOps | Desenvolvedor | Cloud | Cybersecurity",
  location: "Goiânia, Brasil",
  phone: "+55 (62) 9 9487-6721",
  email: "mathues12398henrique@gmail.com",

  socials: {
    github: "https://github.com/MatheusHenriquePrates",
    linkedin: "https://www.linkedin.com/in/matheus-henrique-prates-586328234/",
    instagram: "https://www.instagram.com/matheus_prates34/"
  },

  // Especialidades exibidas com animação de digitação na seção Hero
  expertise: [
    "DevOps",
    "Desenvolvedor Fullstack",
    "Cloud Computing",
    "Analista de Cybersecurity",
    "Desenvolvedor .NET e React",
  ],

  // Biografia profissional exibida na seção "Sobre Mim"
  about: [
    "Profissional de TI híbrido, com expertise em DevOps e Desenvolvimento Fullstack. Possuo base sólida em Infraestrutura, Redes e ambientes Multi-Cloud (AWS, Azure, OCI), combinada com experiência prática no desenvolvimento de APIs seguras em .NET 8 (C#) e interfaces modernas com React (Next.js).",

    "Minha trajetória profissional é marcada pela busca constante por automação, otimização de processos e entrega de soluções robustas. Desde instrutor de TI ensinando lógica de programação, passando pela experiência militar que me ensinou disciplina e trabalho sob pressão, até atuar com infraestrutura de redes e impressoras em ambientes corporativos.",

    "Atualmente, trabalho como Desenvolvedor Fullstack Freelancer, criando APIs RESTful seguras com .NET 8 e interfaces responsivas com React, além de atuar como Trainee Técnico de Infraestrutura, gerenciando sistemas de impressão e monitoramento proativo de falhas."
  ]
};