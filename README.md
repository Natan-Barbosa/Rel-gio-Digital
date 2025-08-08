# Relógio Digital 🕐

Um relógio digital responsivo e moderno desenvolvido com HTML, JavaScript e Tailwind CSS. O projeto apresenta um design elegante com gradiente laranja e exibição de horas, minutos e segundos em tempo real.

## 📸 Preview

O relógio exibe:

- **Horas** (00-23)
- **Minutos** (00-59)
- **Segundos** (00-59)

Com atualização automática a cada segundo e design responsivo para diferentes tamanhos de tela.

## 🚀 Tecnologias Utilizadas

- **HTML5** - Estrutura da aplicação
- **JavaScript** - Lógica de funcionamento e atualização do relógio
- **Tailwind CSS** - Estilização e responsividade

## 📁 Estrutura do Projeto

```
relógio-digital/
├── index.html          # Arquivo principal HTML
├── script.js           # Lógica JavaScript do relógio
└── tailwind.config.js  # Arquivo Tailwind para ativar o intelisense no VSCODE
```

## 🎨 Características

### Design

- Gradiente de fundo: amarelo → laranja → laranja escuro
- Três painéis pretos com bordas arredondadas
- Sombra elegante para criar profundidade
- Tipografia clara e legível

### Responsividade

- **Desktop/Laptop**: Texto grande (text-9xl) e layout otimizado
- **Mobile**: Texto menor (text-7xl) e ajustes de tamanho
- Flexbox para centralização perfeita em qualquer tela

### Funcionalidades

- Atualização em tempo real (1 segundo)
- Formatação automática para dois dígitos (01, 02, etc.)
- Exibição de horas no formato 24h

## 🛠️ Como Usar

1. **Clone ou baixe o projeto**

   ```bash
   git clone git@github.com:Natan-Barbosa/Relogio-Digital.git
   ```

2. **Abra o arquivo HTML**

   - Abra o `index.html` diretamente no seu navegador
   - Ou use um servidor local (Live Server, Python, etc.)

3. **Pronto!** ✨
   - O relógio começará a funcionar automaticamente

## 🔧 Personalização

### Cores

Para alterar o gradiente de fundo, modifique a classe no `body`:

```html
<!-- Exemplo de gradiente azul -->
<body class="bg-linear-to-r from-blue-300 via-blue-400 to-blue-700"></body>
```

### Tamanhos

Ajuste os tamanhos dos painéis alterando as classes `w-1/3`, `h-4/5`, etc.

### Formato de Hora

Para formato 12h, modifique a função no `script.js`:

```javascript
// Para formato 12h (AM/PM)
const hours = dateTime.getHours() % 12 || 12;
```

## 📝 Código Principal

### Função de Formatação

```javascript
const formatTimeToTwoDigits = (time) => {
  return time < 10 ? "0" + time : time;
};
```

### Atualização do Relógio

```javascript
setInterval(() => {
  const dateTime = new Date();
  hour.innerHTML = formatTimeToTwoDigits(dateTime.getHours());
  minutes.innerHTML = formatTimeToTwoDigits(dateTime.getMinutes());
  seconds.innerHTML = formatTimeToTwoDigits(dateTime.getSeconds());
}, 1000);
```

## 📜 Licença

Sinta-se livre para usar, modificar e distribuir.

---

**Desenvolvido com ❤️ usando JavaScript vanilla e Tailwind CSS**
