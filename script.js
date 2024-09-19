document.getElementById('translateButton').addEventListener('click', async () => {
    const sourceText = document.getElementById('sourceText').value;
    const targetLang = document.getElementById('languageSelect').value;
    const apiKey = 'YOUR_GOOGLE_TRANSLATE_API_KEY'; // Replace with your API key
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

    if (sourceText.trim() === '') {
        alert('Please enter text to translate.');
        return;
    }

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            q: sourceText,
            target: targetLang,
            format: 'text'
        })
    });

    const data = await response.json();

    if (data.error) {
        console.error(data.error);
        alert('Translation error: ' + data.error.message);
    } else {
        document.getElementById('translatedText').innerText = data.data.translations[0].translatedText;
    }
});
