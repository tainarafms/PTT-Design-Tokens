# Prospecção Teórica e Tecnológica: Design Tokens

Este repositório contém os artefatos do trabalho de **Prospecção Teórica e Tecnológica**, desenvolvido para a disciplina de Engenharia de Software da Universidade Federal de Lavras (UFLA).

O tema central desta pesquisa é a **Aplicação de Design Tokens na Padronização de Interfaces Digitais**.

## O que você vai encontrar neste repositório?

Este repositório consolida as entregas exigidas para o trabalho final:
1. **Relatório Técnico (PDF):** Documento completo contendo a fundamentação teórica, análise comparativa do estado da arte, perspectivas de mercado e síntese crítica.
2. **Prova de Conceito (PoC):** Códigos-fonte da aplicação prática que atesta a viabilidade técnica da solução.


## Sobre o Estudo: Design Tokens
A prospecção explora como os *Design Tokens* resolvem problemas históricos de inconsistência visual, retrabalho e acúmulo de débitos técnicos no desenvolvimento de interfaces. A tecnologia atua estabelecendo uma "Fonte Única da Verdade" (Single Source of Truth), substituindo valores visuais estáticos no código por variáveis semânticas centralizadas. Essa arquitetura força a separação de responsabilidades, facilitando manutenções adaptativas e permitindo que alterações de design sejam escaladas de forma automatizada e segura para todo o sistema.

## Sobre a Prova de Conceito (PoC)
A PoC desenvolvida é um painel interativo de partículas flutuantes com o efeito *Glassmorphism*. O objetivo do código não é ser um sistema completo, mas demonstrar de forma isolada a separação de responsabilidades na camada de estilo.

**Principais Funcionalidades:**
* **Tematização Dinâmica em Tempo Real:** Alternância fluida entre o *Light Mode* (tons pastéis) e o *Dark Mode* (cores Neon) através da reatribuição exclusiva de variáveis globais na raiz do projeto.
* **Tecnologias Nativas:** Construído utilizando apenas HTML5, CSS3 e JavaScript, atestando que o conceito não depende de frameworks pesados, motores lógicos complexos ou pré-processadores externos.

## Como Executar a PoC

Para visualizar o painel em funcionamento:

 **Acesso Online:**  
Acesse o site diretamente pelo navegador via GitHub Pages: https://tainarafms.github.io/PTT-Design-Tokens/

 **Execução Local:**  
1. Faça o clone deste repositório:
   `git clone https://github.com/tainarafms/PTT-Design-Tokens.git`
2. Abra a pasta do projeto.
3. Dê um duplo clique no arquivo `index.html` para abri-lo localmente no seu navegador.
