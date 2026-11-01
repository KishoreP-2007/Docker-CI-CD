const button = document.getElementById('helloButton');
const message = document.getElementById('message');

button.addEventListener('click', async () => {
  message.textContent = 'Contacting the server...';

  try {
    const response = await fetch('/api/hello');
    if (!response.ok) throw new Error('Server returned an error');

    const data = await response.json();
    message.textContent = data.message;
  } catch (error) {
    message.textContent = 'Could not connect to the server. Please try again.';
    console.error(error);
  }
});
