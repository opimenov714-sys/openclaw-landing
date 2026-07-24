exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { name, email, company, project_type, message } = JSON.parse(event.body);

    if (!name || !email || !company || !project_type || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Telegram credentials not configured' })
      };
    }

    const projectTypeLabels = {
      'chatbot': '💬 Чат-бот',
      'automation': '⚙️ Автоматизация',
      'analytics': '📊 Аналитика',
      'documents': '🔍 Обработка документов',
      'custom': '🎯 Другое'
    };

    const typeLabel = projectTypeLabels[project_type] || project_type;

    const telegramMessage = `
📌 <b>Новая заявка с сайта OpenClaw</b>

👤 <b>Имя:</b> ${escapeHtml(name)}
📧 <b>Email:</b> ${escapeHtml(email)}
🏢 <b>Компания:</b> ${escapeHtml(company)}
📋 <b>Тип проекта:</b> ${typeLabel}

💬 <b>Сообщение:</b>
${escapeHtml(message)}

⏰ <b>Время:</b> ${new Date().toLocaleString('ru-RU')}
    `.trim();

    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
          parse_mode: 'HTML'
        })
      }
    );

    if (!response.ok) {
      const error = await response.json();
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to send message to Telegram', details: error })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Заявка успешно отправлена! Мы свяжемся с вами в течение 24 часов.'
      })
    };
  } catch (error) {
    console.error('Telegram API error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send message', details: error.message })
    };
  }
};

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}
