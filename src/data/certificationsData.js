/**
 * Dados de Certificações, Habilidades e Cursos
 *
 * Arquivo contendo três exports principais para a seção Skills:
 * 1. certifications: Array de certificações profissionais
 * 2. skills: Objeto com habilidades técnicas organizadas por categoria
 * 3. additionalCourses: Array de cursos e formações complementares
 *
 * ESTRUTURA - certifications:
 * - id: Identificador único
 * - title: Nome da certificação
 * - issuer: Instituição emissora
 * - date: Data de conclusão (formato: "Mês Ano")
 * - image: Caminho para imagem do certificado
 * - description: Descrição do conteúdo da certificação
 * - skills: Array de habilidades adquiridas
 * - credentialId: ID da credencial (opcional)
 * - credentialUrl: Link para validação da credencial
 *
 * ESTRUTURA - skills:
 * Objeto com categorias de habilidades (cloud, sistemas, redes, etc.)
 * Cada categoria contém um array de tecnologias/ferramentas
 *
 * ESTRUTURA - additionalCourses:
 * Array simples de strings com nomes de cursos complementares
 */

export const certifications = [
  {
    id: 1,
    title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    issuer: "Oracle University",
    date: "Junho 2025",
    image: "/images/certifications/oci-cert.jpg",
    description: "Certificação oficial da Oracle que valida conhecimentos fundamentais em Oracle Cloud Infrastructure, incluindo serviços de computação, armazenamento, rede e segurança.",
    skills: ["Oracle Cloud", "Cloud Computing", "IaaS", "Redes", "Segurança"],
    credentialId: "101842945OCI25FNDCFA",
    credentialUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=8B0E4F8F7F1D5E8B9C3A2D1F0E7C6B5A"
  },
  {
    id: 2,
    title: "Formação Linux Completa: Do Básico ao Avançado",
    issuer: "Udemy",
    date: "Junho 2025",
    image: "/images/certifications/linux-cert.jpg",
    description: "Formação avançada em sistemas Linux, cobrindo administração de servidores, shell scripting, segurança, automação e troubleshooting em ambientes de produção.",
    skills: ["Linux", "Bash", "Administração de Servidores", "Segurança", "Automação"],
    credentialUrl: "https://ude.my/UC-00022f91-cead-4edd-af63-ac93e7c88e07"
  },
  {
    id: 3,
    title: "Cloud Computing - AWS, Google Cloud e Azure",
    issuer: "Udemy",
    date: "Setembro 2025",
    image: "/images/certifications/multicloud-cert.jpg",
    description: "Curso completo sobre as três principais plataformas de cloud computing do mercado, abordando serviços de computação, armazenamento, banco de dados e melhores práticas de arquitetura cloud.",
    skills: ["AWS", "Azure", "Google Cloud", "Multi-Cloud", "Arquitetura Cloud"],
    credentialUrl: "https://ude.my/UC-1045872f-ed12-4ee1-8426-75f3b66ca58e"
  },
  {
    id: 4,
    title: "Redes de Computadores Completo - Do Básico ao Avançado",
    issuer: "Udemy",
    date: "Abril 2025",
    image: "/images/certifications/redes-cert.jpg",
    description: "Formação completa em redes de computadores, incluindo protocolos TCP/IP, roteamento, switching, segurança de redes e troubleshooting avançado.",
    skills: ["Redes", "TCP/IP", "Roteamento", "Switching", "Segurança de Rede"],
    credentialUrl: "https://ude.my/UC-34ee6b67-afa3-4464-83d5-b6bed661a8fa"
  },
  {
    id: 5,
    title: "DevOps - Mão na Massa",
    issuer: "Udemy",
    date: "Abril 2025",
    image: "/images/certifications/devops-cert.jpg",
    description: "Curso prático de DevOps abordando CI/CD, Docker, Kubernetes, monitoramento, infraestrutura como código e práticas modernas de desenvolvimento e operações.",
    skills: ["DevOps", "Docker", "CI/CD", "Kubernetes", "IaC", "Monitoramento"],
    credentialUrl: "https://ude.my/UC-be47591f-9cea-4e90-86bd-b3826d32ce19"
  },
  {
    id: 6,
    title: "Cybersecurity Essentials",
    issuer: "Securisoft Academy",
    date: "Abril 2025",
    image: "/images/certifications/cyber-cert.jpg",
    description: "Curso de fundamentos de cibersegurança cobrindo principais ameaças, técnicas de proteção, segurança de rede e melhores práticas de segurança da informação.",
    skills: ["Cybersecurity", "Segurança de Rede", "Proteção de Dados", "Threats"],
    credentialUrl: "#"
  },
  {
    id: 7,
    title: "Gravityzone Business Security",
    issuer: "Bitdefender",
    date: "Abril 2025",
    image: "/images/certifications/bitdefender-cert.jpg",
    description: "Certificação em solução empresarial de segurança Bitdefender Gravityzone, cobrindo implementação, gerenciamento e melhores práticas de proteção corporativa.",
    skills: ["Bitdefender", "Segurança Corporativa", "Endpoint Protection", "Threat Management"],
    credentialUrl: "#"
  }
];

export const skills = {
  cloud: ["AWS (EC2, S3)", "Azure", "Oracle Cloud (OCI)", "VMware"],
  sistemas: ["Linux (Avançado)", "Windows Server", "CUPS", "Tactical RMM"],
  redes: ["Zabbix", "Grafana", "Firewalls (pfSense)", "TCP/IP"],
  desenvolvimento: ["Python", "JavaScript", "HTML", "CSS", "React", "C#", ".NET"],
  devops: ["Bash", "Docker", "CI/CD", "GitHub Actions"],
  softSkills: ["Resolução de Problemas", "Autodidata", "Gestão de Projetos", "Trabalho sob Pressão"]
};

export const additionalCourses = [
  "Montagem e Manutenção de Computadores",
  "Design Áudio e Visual",
  "Informática Básico e Avançado",
  "Operação Braçal (Exército)",
  "Paraquedismo (Exército)",
  "Montanha (Exército)"
];