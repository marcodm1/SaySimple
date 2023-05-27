
const link = 'https://api.saysimple.io/messaging/v2/messaging-chats/1631241?fields=id,channelId,identityId,end,status,assignedUser,assignedTeam&page=1&limit=1'
const chat = 1631241;
const Authorization = 'de49399d6cac08c1635c289bc';
const xAPIkey = 'xuE2i8n5Ey7uQdYuUOIviaHNsTSDTzy32KE4T3BY';

const headers = {
  method: 'GET',
  headers: {
    'Authorization': Authorization,
    'X-API-Key' : xAPIkey,
    'Content-Type': 'application/json',
  }
};



////////////////////////////////////////////////////////////////

{
  "channelId": 1127,
  "contactId": 586899,
  "identity": {
    "id": 450468,
    "identity": "+34 670 09 56 79"
  },
  "chatLog": [
    {
      "id": 1631241,
      "assignedUserId": null,
      "assignedTeamId": null,
      "identityId": 450468,
      "status": "open",
      "start": "2023-05-18T14:49:59.000Z",
      "end": null,
      "source": null,
      "entries": [
        {
          "type": "event",
          "id": 4379444,
          "conversationId": 1631241,
          "name": "Conversation::started",
          "actor": {
            "reference": 586899,
            "entityType": "contact",
            "actorFullName": "MARIA MELLA MELIDE"
          },
          "payload": {},
          "target": {
            "reference": 1631241,
            "entityType": "messagingChat"
          },
          "time": "2023-05-18T14:49:58.000Z"
        },
        {
          "type": "asset",
          "id": 7896615,
          "identityId": 450468,
          "time": "2023-05-18T14:49:59.000Z",
          "direction": "in",
          "status": "received",
          "statusReason": null,
          "userId": null,
          "assets": [
            {
              "contentType": "image/jpeg",
              "filePath": "ss-prod-btnq28f51c/received/image/20234/original/jpeg/",
              "fileName": "1mupgplht90i4l.jpeg",
              "originalName": "file.jpeg",
              "category": "image"
            }
          ],
          "metadata": [],
          "components": null,
          "system": 0,
          "caption": ""
        },
        {
          "type": "text",
          "id": 7896616,
          "identityId": 450468,
          "message": "Bienvenido a Grupo Sanitario FisiON",
          "time": "2023-05-18T14:50:05.393Z",
          "direction": "out",
          "status": "read",
          "statusReason": null,
          "userId": null,
          "metadata": [],
          "components": null,
          "system": 1
        },
        {
          "type": "text",
          "id": 7896618,
          "identityId": 450468,
          "message": "Recuerde que las normas de uso están restringidas en facilitarnos los documentos necesarios para prestarle los servicios relativos a la gestión de tratamientos y consultas. Este es un sistema seguro de comunicación. Los datos serán tratados de forma totalmente confidencial, según la normativa vigente en protección de datos. Le aconsejamos que estos documentos que nos envía los elimine de su teléfono una vez dejen de ser necesarios. Finalizada la gestión y ya no exista una obligación legal de conservarlos, sus mensajes serán eliminados de nuestro sistema. Para más información https://www.fisi-on.com/gs/politica-de-privacidad",
          "time": "2023-05-18T14:50:05.537Z",
          "direction": "out",
          "status": "read",
          "statusReason": null,
          "userId": null,
          "metadata": [],
          "components": null,
          "system": 1
        },
        {
          "type": "asset",
          "id": 7896644,
          "identityId": 450468,
          "time": "2023-05-18T14:50:42.000Z",
          "direction": "in",
          "status": "received",
          "statusReason": null,
          "userId": null,
          "assets": [
            {
              "contentType": "image/jpeg",
              "filePath": "ss-prod-btnq28f51c/received/image/20234/original/jpeg/",
              "fileName": "4898plht91fio.jpeg",
              "originalName": "file.jpeg",
              "category": "image"
            }
          ],
          "metadata": [],
          "components": null,
          "system": 0,
          "caption": ""
        },
        {
          "type": "text",
          "id": 7896674,
          "identityId": 450468,
          "message": "Buenas tardes, soy Maria mediadora Axa. Adjunto el informe que le solicitais al asegurado",
          "time": "2023-05-18T14:51:30.000Z",
          "direction": "in",
          "status": "received",
          "statusReason": null,
          "userId": null,
          "metadata": [],
          "components": null,
          "system": 0
        },
        {
          "type": "text",
          "id": 7896676,
          "identityId": 450468,
          "message": "Saludos",
          "time": "2023-05-18T14:51:34.000Z",
          "direction": "in",
          "status": "received",
          "statusReason": null,
          "userId": null,
          "metadata": [],
          "components": null,
          "system": 0
        }
      ]
    }
  ],
  "tags": [
    {
      "id": 2110,
      "name": "Tramitación",
      "color": "#3b70ff"
    }
  ]
}