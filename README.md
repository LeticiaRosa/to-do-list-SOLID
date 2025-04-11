# ✅ Projeto TODO com SOLID

Se trata de uma aplicação de controle de tarefas no estilo to-do list, que contém as seguintes funcionalidades:
- ✅ Adicionar uma nova tarefa  
- ✅ Marcar e desmarcar uma tarefa como concluída  
- ✅ Remover uma tarefa da listagem  
- ✅ Mostrar o progresso de conclusão das tarefas  

![image](https://github.com/LeticiaRosa/01-praticando-conceitos-reactjs-ts/assets/37852713/dcc8717e-08aa-4f93-85b1-83aafe58151f)

## 🚀 Tecnologias utilizadas

- React
- TypeScript
- Vite
- ESLint + TypeScript Plugin
- Phosphor Icons

## 🧠 Arquitetura SOLID

Este projeto está sendo refatorado para aplicar os **Princípios SOLID**, com foco em boas práticas, escalabilidade e manutenção de código.

### Princípios aplicados:

- **S** — *Single Responsibility Principle*: cada classe ou componente tem apenas uma responsabilidade.
- **O** — *Open/Closed Principle*: o sistema pode ser estendido sem alterar o código existente.
- **L** — *Liskov Substitution Principle*: substituições de dependências não quebram a lógica.
- **I** — *Interface Segregation Principle*: interfaces específicas para cada necessidade.
- **D** — *Dependency Inversion Principle*: dependências baseadas em abstrações.

## 📁 Estrutura sugerida

```bash
src/
├── components/
│   └── TodoItem.tsx
├── interfaces/
│   └── ITodoRepository.ts
├── models/
│   └── Todo.ts
├── repositories/
│   └── TodoRepository.ts
├── services/
│   └── TodoService.ts
├── pages/
│   └── Home.tsx
├── App.tsx
└── main.tsx
```

## 💡 Contribuindo
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou pull request. Este projeto tem como objetivo demonstrar a aplicação dos princípios SOLID em um app React com TypeScript.

## 📝 Licença
Este projeto está sob a licença MIT.

Feito com 💜 por Letícia Rosa
