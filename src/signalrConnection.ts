import { HubConnectionBuilder, HubConnection, LogLevel } from '@microsoft/signalr';

const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3OCIsIlVzZXJuYW1lIjoiYW5oOW9rLUhvbmdOZ29jIiwianRpIjoiOWZlOGIwY2UtOWRlMi00OWU4LTk1YjgtODc2OTVmZWRlYzE0IiwibmJmIjoxNzQ2MTc3NjE2LCJleHAiOjE3NDYyNjQwMTYsImlhdCI6MTc0NjE3NzYxNn0.eCfcB9Kc5AuJu8g_3poUMHVXTjd7rtY6ZyxKCZo23VY";
let url = "https://localhost:65250/hubs/chat"
const connection = new HubConnectionBuilder()
.withUrl(url, {
    accessTokenFactory:()=>token,
    withCredentials: true
})
.withAutomaticReconnect()
.configureLogging(LogLevel.Information)
.build();

export default connection;
