
# 🚀 APPTITO: Roadmap & Modelo de Negócio

## 💡 Visão Geral
APPTITO é o sistema operacional para o setor gastronômico. Focamos em simplificar o back-office (financeiro/estoque) enquanto potencializamos o front-office (vendas/cardápio).

---

## 📈 Roadmap de 90 Dias

### 🗓 Mês 1: O Lançamento (MVP)
- [x] Cardápio Digital Interativo (Web App)
- [x] Gestão de Pedidos em Tempo Real (Kanban)
- [x] Cadastro de Produtos e Categorias
- [x] QR Code por Mesa
- [x] Fluxo de Caixa Básico
- [ ] Integração de Impressão Térmica (ESC/POS)

### 🗓 Mês 2: Eficiência Operacional
- [ ] Controle de Estoque com Ficha Técnica
- [ ] Cadastro de Insumos e Unidades
- [ ] Relatórios de CMV (Custo de Mercadoria Vendida)
- [ ] Gestão de Clientes (CRM Básico)
- [ ] Múltiplos Usuários com Permissões (Garçom, Cozinha, Admin)

### 🗓 Mês 3: Inteligência e Escala
- [ ] IA APPTITO: Sugestão de preços baseada em custos
- [ ] IA APPTITO: Leitura automática de notas fiscais (OCR)
- [ ] Dashboard de DRE Completo
- [ ] Integração com iFood e Rappi
- [ ] Programa de Fidelidade (Cashback)

---

## 💰 Modelo de Monetização

| Plano | Preço Sugerido | Público-Alvo | Principais Diferenciais |
| :--- | :--- | :--- | :--- |
| **Start** | R$ 99/mês | Food Trucks / MEI | Cardápio QR, Pedidos Ilimitados |
| **Pro** | R$ 199/mês | Restaurantes Médios | Estoque, Financeiro, Gestão de Mesas |
| **Premium** | R$ 399/mês | Redes / Operações Grandes | Multi-lojas, DRE, API Aberta, CRM |
| **White-label** | Sob consulta | Franquias / Agências | Marca própria, Dashboard Customizado |

---

## 🎤 Pitch de Venda (30 Segundos)

"A maioria dos restaurantes perde dinheiro não por falta de clientes, mas por falta de controle. O **APPTITO** não é apenas um sistema de pedidos, é o cérebro da sua operação. Unimos o cardápio digital que vende sozinho a um controle financeiro e de estoque que automatiza suas margens de lucro. Pare de gerenciar o caos e comece a escalar seu negócio com o APPTITO."

---

## 🏗 Arquitetura Técnica
- **Next.js 14**: SSR para SEO no cardápio público e SPA para o painel admin.
- **Supabase**: PostgreSQL para robustez e Realtime para pedidos instantâneos na cozinha.
- **RLS (Row Level Security)**: Segurança nativa multi-tenant direto no banco de dados.
- **Tailwind CSS**: UI extremamente rápida e responsiva para tablets na cozinha e celulares dos clientes.
