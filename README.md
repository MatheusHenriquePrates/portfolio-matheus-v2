# Portfólio Profissional - Matheus Henrique Prates

Portfólio pessoal desenvolvido com React, apresentando projetos, experiências profissionais, certificações e habilidades técnicas. O site conta com design moderno, animações suaves e interface totalmente responsiva.

## Sobre o Projeto

Este portfólio foi desenvolvido para apresentar de forma profissional e interativa minha trajetória na área de TI, destacando projetos relevantes, experiências de trabalho e certificações obtidas. O site utiliza tecnologias modernas e oferece uma experiência de usuário fluida e agradável.

## Tecnologias Utilizadas

### Core
- **React 18** - Biblioteca JavaScript para construção de interfaces
- **React DOM** - Renderização de componentes React no DOM

### Animações e UI
- **Framer Motion** - Biblioteca de animações para React
- **Swiper** - Carrossel touch-friendly e responsivo
- **React Icons** - Biblioteca de ícones

### Estilização
- **CSS3** - Estilização customizada
- **Tailwind CSS** - Framework CSS utility-first

### Ferramentas de Desenvolvimento
- **Create React App** - Setup e configuração do projeto
- **Web Vitals** - Medição de performance

## Estrutura do Projeto

```
portfolio-matheus-v2/
├── public/
│   ├── images/
│   │   ├── projects/        # Imagens dos projetos
│   │   └── certifications/  # Imagens das certificações
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar/          # Barra de navegação
│   │   ├── Hero/            # Seção inicial
│   │   ├── About/           # Sobre mim e experiências
│   │   ├── Projects/        # Portfólio de projetos
│   │   ├── Skills/          # Certificações e habilidades
│   │   ├── Footer/          # Rodapé
│   │   └── ScrollToTop/     # Botão de scroll
│   ├── data/
│   │   ├── personalData.js       # Dados pessoais
│   │   ├── experienceData.js     # Experiências profissionais
│   │   ├── projectsData.js       # Projetos desenvolvidos
│   │   └── certificationsData.js # Certificações e skills
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## Funcionalidades

### Navegação
- Barra de navegação fixa com efeito de scroll
- Menu mobile responsivo com animações
- Navegação suave entre seções (smooth scroll)
- Botão flutuante para retornar ao topo

### Seção Hero
- Animação de digitação (typewriter) com múltiplas especialidades
- Apresentação profissional com nome e descrição
- Indicador de scroll animado
- Animações de entrada com Framer Motion

### Sobre Mim
- Biografia profissional em múltiplos parágrafos
- Carrossel interativo de experiências profissionais
- Navegação por setas e indicadores de progresso
- Animações de transição entre experiências
- Exibição de skills, período e impacto de cada experiência

### Projetos
- Carrossel responsivo de projetos (Swiper)
- Cards com thumbnail, categoria e tecnologias
- Modal detalhado para cada projeto
- Galeria de imagens com navegação
- Links para repositórios GitHub e demos live
- Descrição completa, funcionalidades e desafios

### Certificações e Habilidades
- Carrossel de certificações profissionais
- Visualização em tela cheia de certificados
- Habilidades técnicas organizadas por categoria
- Lista de cursos complementares
- Links para validação de credenciais

### Rodapé
- Informações de contato completas
- Links para redes sociais
- Navegação rápida para seções
- Copyright dinâmico com ano atual

## Instalação e Execução

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/MatheusHenriquePrates/portfolio-matheus-v2.git
```

2. Acesse o diretório do projeto:
```bash
cd portfolio-matheus-v2
```

3. Instale as dependências:
```bash
npm install
```

### Executar em Desenvolvimento

```bash
npm start
```

O site será aberto automaticamente em [http://localhost:3000](http://localhost:3000).

### Build para Produção

```bash
npm run build
```

Cria uma versão otimizada para produção na pasta `build/`.

### Executar Testes

```bash
npm test
```

Inicia o test runner no modo interativo.

## Personalização

Para personalizar o portfólio com suas próprias informações:

### 1. Informações Pessoais
Edite `src/data/personalData.js`:
- Nome, cargo, localização e contatos
- Links para redes sociais
- Especialidades para animação de digitação
- Biografia profissional

### 2. Experiências Profissionais
Edite `src/data/experienceData.js`:
- Adicione ou remova experiências
- Cada experiência deve conter: período, cargo, empresa, descrição, skills e impacto

### 3. Projetos
Edite `src/data/projectsData.js`:
- Adicione seus projetos pessoais
- Configure imagens, tecnologias, descrições e links
- Imagens devem estar em `public/images/projects/`

### 4. Certificações
Edite `src/data/certificationsData.js`:
- Adicione certificações profissionais
- Configure habilidades técnicas por categoria
- Adicione cursos complementares
- Imagens devem estar em `public/images/certifications/`

### 5. Estilos
Cada componente possui seu próprio arquivo CSS:
- Cores, fontes e espaçamentos podem ser ajustados
- Variáveis CSS estão definidas em `index.css`

## Deploy

O projeto pode ser hospedado em diversas plataformas:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Faça upload da pasta build/ no Netlify
```

### GitHub Pages
```bash
npm install gh-pages --save-dev
npm run build
npm run deploy
```

## Performance

O site foi otimizado para performance:
- Lazy loading de imagens
- Code splitting automático
- Minificação de CSS e JavaScript
- Otimização de assets
- Animações com GPU acceleration

## Compatibilidade

- Chrome (versão mais recente)
- Firefox (versão mais recente)
- Safari (versão mais recente)
- Edge (versão mais recente)
- Dispositivos mobile (iOS e Android)

## Contato

**Matheus Henrique Prates**

- Email: mathues12398henrique@gmail.com
- LinkedIn: [matheus-henrique-prates](https://www.linkedin.com/in/matheus-henrique-prates-586328234/)
- GitHub: [MatheusHenriquePrates](https://github.com/MatheusHenriquePrates)

## Licença

Este projeto está sob licença MIT. Sinta-se livre para usar como base para seu próprio portfólio.
