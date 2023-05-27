// c: Fech que obtiene los mensajes de un chat concreto
fetch(link, headers)
  .then(response => response.json())
  .then(chat => {
    const messages = chat.chatLog[0].entries; // [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
    console.log(chat);
    // console.log(chat.chatLog[0]);
    console.log(chat.chatLog[0].entries);
    // console.log(chat.chatLog[0].entries[1]);
    // console.log(chat.chatLog[0].entries[1].message);

    const events = messages.map(position => {
      // position.type == 'event' && 'Iniciación del chat';
      if (position.type == 'event') {
        return ({
          id: position.id,
          mensaje: 'Iniciación del chat'
        }
        );
      }
      if (position.type == 'text') {
        return ({
          id: position.id,
          mensaje: position.message
        }
        );
      }
      if (position.type == 'asset') {
        return ({
          id: position.id,
          mensaje: 'IMG'
        }
        );
      }
    });  
    console.log(events); // ['event', 'text', 'text', 'text', 'text', 'asset', 'asset', 'asset']
  })
  .catch(error => {
    console.error(error);
  });