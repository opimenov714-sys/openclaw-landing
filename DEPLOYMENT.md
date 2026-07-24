# Развертывание на Vercel

## Шаг 1: Подготовка репозитория

```bash
# Инициализируй git (если его нет)
git init

# Добавь все файлы
git add .

# Создай первый коммит
git commit -m "Initial commit: OpenClaw landing page with Telegram bot integration"
```

## Шаг 2: Загрузи на GitHub

1. Создай новый репозиторий на GitHub (например, `openclaw-landing`)
2. Загрузи свой код:

```bash
git remote add origin https://github.com/ТВО_ЮЗЕРНЕЙМ/openclaw-landing.git
git branch -M main
git push -u origin main
```

## Шаг 3: Развертывание на Vercel

### Вариант A: Через веб-интерфейс (самый простой)

1. Перейди на https://vercel.com
2. Нажми **"New Project"**
3. Импортируй репозиторий с GitHub
4. Выбери этот репозиторий
5. Vercel автоматически обнаружит структуру проекта
6. Нажми **"Deploy"**

### Вариант B: Через Vercel CLI

```bash
# Установи Vercel CLI
npm i -g vercel

# В папке проекта выполни
vercel

# Следуй подсказкам
```

## Шаг 4: Настрой переменные окружения

После развертывания:

1. Открой проект на Vercel (vercel.com/dashboard)
2. Перейди на вкладку **"Settings"** → **"Environment Variables"**
3. Добавь две переменные:

| Name | Value |
|------|-------|
| `TELEGRAM_BOT_TOKEN` | `8694312474:AAH0wUOXW2AsAu6TjNZSjO5CkEo1ebY-RDw` |
| `TELEGRAM_CHAT_ID` | `5153626695` |

4. Нажми **"Deploy"** (Vercel перезагрузит проект с новыми переменными)

## Готово! 🎉

Твой лендинг теперь живёт на Vercel с интеграцией Telegram. Все заявки будут приходить прямо в бота.

### Как это работает:

1. Пользователь заполняет форму на лендинге
2. Нажимает "Отправить Заявку"
3. Данные отправляются на `/api/send-telegram` endpoint (ваш серверный код на Vercel)
4. Endpoint красиво форматирует данные и отправляет в Telegram бота
5. Ты получаешь уведомление в личный чат бота

### Тестирование локально:

Если хочешь тестировать локально перед развертыванием, тебе нужен Node.js:

```bash
# Установи зависимости (их нет, просто используем встроенные APIs)
npm init -y

# Используй Vercel CLI для локального тестирования
npm i -D vercel
vercel env pull
vercel dev
```

Потом открой http://localhost:3000

---

**Если возникнут проблемы:**
- Проверь, что переменные окружения установлены в Vercel Settings
- Посмотри логи в Vercel Dashboard → Functions
- Убедись, что токен и chat_id правильные
