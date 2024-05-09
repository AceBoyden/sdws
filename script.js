function sendWebhook() {
    const webhookUrl = document.getElementById('webhookUrl').value;
    const botName = document.getElementById('botName').value;
    const message = document.getElementById('message').value;
    const avatarUrl = document.getElementById('avatarUrl').value;

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: botName,
            content: message,
            avatar_url: avatarUrl
        })
    })
    .then(response => response.json())
    .then(data => {
        alert('Webhook sent successfully!');
        console.log(data);
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Failed to send webhook.');
    });
}

function updatePreview() {
    const botName = document.getElementById('botName').value;
    const message = document.getElementById('message').value;
    const avatarUrl = document.getElementById('avatarUrl').value || 'default_avatar.png';

    document.getElementById('previewName').textContent = botName || "Bot Name";
    document.getElementById('previewMessage').textContent = message || "Your message will appear here...";
    document.getElementById('previewAvatar').src = avatarUrl;
}
function updatePreview() {
    const botName = document.getElementById('botName').value;
    const message = document.getElementById('message').value;
    const avatarUrl = document.getElementById('avatarUrl').value || 'default_avatar.png';

    document.getElementById('previewName').textContent = botName || "Bot Name";
    document.getElementById('previewMessage').textContent = message || "Your message will appear here...";
    document.getElementById('previewAvatar').src = avatarUrl;
}
