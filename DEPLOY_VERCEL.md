# Guia de Deploy na Vercel

Este documento contém instruções completas para fazer o deploy do portfólio na Vercel sem erros.

## Pré-requisitos

- Conta no GitHub
- Conta na Vercel (pode usar login do GitHub)
- Código commitado no GitHub

## Passo 1: Preparar o Projeto

### 1.1 Verificar Build Local

Antes de fazer o deploy, teste o build localmente:

```bash
npm run build
```

Se o build funcionar sem erros, você está pronto para o deploy.

### 1.2 Verificar Arquivos Importantes

Certifique-se de que estes arquivos/pastas existem:

- `package.json` - Configurações e dependências
- `public/images/projects/` - Imagens dos projetos
- `public/images/certifications/` - Imagens das certificações
- `src/` - Código fonte
- `.gitignore` - Já configurado corretamente

## Passo 2: Commit e Push para GitHub

```bash
# Adicionar todos os arquivos
git add .

# Criar commit
git commit -m "feat: adiciona portfólio profissional completo"

# Fazer push para o repositório
git push origin master
```

**Importante:** Verifique no GitHub se as imagens foram enviadas corretamente na pasta `public/images/`.

## Passo 3: Deploy na Vercel

### Método 1: Via Interface Web (Recomendado)

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com sua conta GitHub
3. Clique em "Add New Project"
4. Selecione o repositório `portfolio-matheus-v2`
5. A Vercel vai detectar automaticamente que é Create React App
6. Confirme as configurações:
   - **Framework Preset**: Create React App
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
   - **Install Command**: `npm install`
7. Clique em "Deploy"

### Método 2: Via CLI

```bash
# Instalar Vercel CLI globalmente
npm install -g vercel

# Fazer login
vercel login

# Deploy do projeto
vercel

# Para deploy em produção
vercel --prod
```

## Passo 4: Verificar Deploy

Após o deploy, a Vercel vai:

1. Instalar todas as dependências do `package.json`
2. Executar `npm run build`
3. Copiar todos os arquivos de `public/` para o build
4. Gerar uma URL de preview ou produção

**URL gerada**: A Vercel vai fornecer uma URL no formato:
- Preview: `portfolio-matheus-v2-xxx.vercel.app`
- Produção: `portfolio-matheus-v2.vercel.app`

## Passo 5: Verificar se Tudo Funciona

Acesse a URL gerada e verifique:

- [ ] Site carrega corretamente
- [ ] Imagens dos projetos aparecem
- [ ] Imagens das certificações aparecem
- [ ] Navegação funciona
- [ ] Animações funcionam
- [ ] Links para GitHub/LinkedIn funcionam
- [ ] Responsividade mobile funciona

## Configurações Opcionais

### Domínio Customizado

Se você tem um domínio próprio:

1. Vá em "Settings" no projeto da Vercel
2. Clique em "Domains"
3. Adicione seu domínio customizado
4. Siga as instruções para configurar DNS

### Variáveis de Ambiente

Se precisar adicionar variáveis de ambiente:

1. Vá em "Settings" > "Environment Variables"
2. Adicione suas variáveis
3. Faça redeploy do projeto

## Troubleshooting

### Build Falha

Se o build falhar na Vercel:

```bash
# Limpe o cache local e teste novamente
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Imagens Não Aparecem

Verifique:
- As imagens estão na pasta `public/images/`?
- Os caminhos no código usam `/images/` (não `./images/`)?
- As imagens foram commitadas no Git?

### Erro 404 em Rotas

Create React App usa SPA (Single Page Application), a Vercel já configura automaticamente o redirect correto.

## Atualizações Futuras

Para atualizar o site:

1. Faça as alterações localmente
2. Commit e push para o GitHub
3. A Vercel vai fazer deploy automático

```bash
git add .
git commit -m "feat: adiciona novo projeto"
git push origin master
```

## Comandos Úteis

```bash
# Ver logs do último deploy
vercel logs

# Remover projeto da Vercel
vercel remove portfolio-matheus-v2

# Ver informações do deploy
vercel inspect
```

## Contato de Suporte

Se tiver problemas:
- Documentação Vercel: https://vercel.com/docs
- Suporte Vercel: https://vercel.com/support

---

**Criado por:** Matheus Henrique Prates
**Data:** Novembro 2024
