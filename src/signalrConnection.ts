import { HubConnectionBuilder, HubConnection, LogLevel } from '@microsoft/signalr';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4OCIsIlVzZXJuYW1lIjoiYW5oOW9rLXBvc3RtYW4tSG9uZ05nb2MiLCJqdGkiOiJlNWM4ZjY0NC0xYjY2LTRiOWItYjlkNi1lNzE2NTdmMTQyYzEiLCJuYmYiOjE3NDU5MTY3OTgsImV4cCI6MTc0NjAwMzE5OCwiaWF0IjoxNzQ1OTE2Nzk4fQ.NuF2WDOtolVhFl5G2NoKZVe5D9cPKbmxKiKAiOBZeWc";

const connection: HubConnection = new HubConnectionBuilder()
  .withUrl(`https://localhost:65250/chathub?access_token=${token}`)
  // .withUrl(`wss://localhost:65250/chathub?access_token=${token}`)
  .withAutomaticReconnect()
  .configureLogging(LogLevel.Information)
  .build();

export default connection;

