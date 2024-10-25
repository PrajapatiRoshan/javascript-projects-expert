const typingForm = document.querySelector('.typing-form');
const chatList = document.querySelector('.chat-list');

let userMessage = null;

const API_KEY = 'AIzaSyAJ9vEij5cadaLnq1BNWV1SLq_XdjAAbcI';
const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`;

const createMessageElement = (content, ...className) => {
  const div = document.createElement('div');
  div.classList.add('message', ...className);
  div.innerHTML = content;
  return div;
};

const generateAPIResponse = async () => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            role: 'user',
            parts: [{ text: userMessage }],
          },
        ],
      }),
    });

    const { candidates = '' } = await response.json();

    const apiResponse = '';

    console.log(candidates);
  } catch (error) {
    console.log(error);
  }
};

const showLoadingAnimation = () => {
  const html = `
    <div class="message-content">
          <img src="images/gemini.svg" alt="Gemini" class="avatar" />
          <p class="text"></p>
          <div class="loading-indicator">
            <div class="loading-bar"></div>
            <div class="loading-bar"></div>
            <div class="loading-bar"></div>
          </div>
        </div>
        <span class="icon material-symbols-rounded">content_copy</span>
    </div>`;

  const incomingMessageDiv = createMessageElement(html, 'incomming', 'loading');
  chatList.appendChild(incomingMessageDiv);

  generateAPIResponse();
};

const handlerOutGoingchat = () => {
  userMessage = typingForm.querySelector('.typing-input').value.trim();
  if (!userMessage) return;

  const html = `
        <div class="message-content">
          <img src="images/user.jpg" alt="User Image" class="avatar" />
          <p class="text"></p>
        </div>`;

  const outGoingMessageDiv = createMessageElement(html, 'outgoing');
  outGoingMessageDiv.querySelector('.text').innerText = userMessage;
  chatList.appendChild(outGoingMessageDiv);

  typingForm.reset();
  setTimeout(showLoadingAnimation, 500);
};

typingForm.addEventListener('submit', (e) => {
  e.preventDefault();
  handlerOutGoingchat();
});
