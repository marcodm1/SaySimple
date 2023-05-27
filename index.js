const Authorization = 'de49399d6cac08c1635c289bc';
const xAPIkey       = 'xuE2i8n5Ey7uQdYuUOIviaHNsTSDTzy32KE4T3BY';
const cors_proxy = 'https://cors-anywhere.herokuapp.com/';
const chatID = 1636381;
//const identity = `f4168776-9bb4-49f9-9a95-a8c07b507fd4`
const link = `https://api.saysimple.io/messaging/v2/messaging-chats`;

const headers = {
  method: 'GET',
  headers: {
    'Authorization': Authorization,
    'X-API-Key' : xAPIkey,
    'Content-Type': 'application/json',
  }
};

fetch(link, headers)
  .then(response => response.json())
  .then(chat => {
    console.log(chat);

    const abiertos = chat.map(pos => 
      pos.lastConversation.status
    )

    console.log(abiertos);
  })
  .catch(error => {
    console.error(error);
  });