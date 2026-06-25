export async function fetchNotifications() {
try{
  const response = await fetch(
    "http://4.224.186.213/evaluation-service/notifications",
    {
      method: "GET",
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzYW5qYW5hbWF0aGk5QGdtYWlsLmNvbSIsImV4cCI6MTc4MjM4Mzc4NiwiaWF0IjoxNzgyMzgyODg2LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNzc3NGJhNzktMTM4ZS00MTg4LTgxOTMtNmUxYTI0ODVjMzIyIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoibWF0aGkgc2FuamFuYSIsInN1YiI6ImZiY2E5ZWIxLTU3N2YtNDA0NC04Y2JmLWQ3ZGY4MzA3ZDhhMyJ9LCJlbWFpbCI6InNhbmphbmFtYXRoaTlAZ21haWwuY29tIiwibmFtZSI6Im1hdGhpIHNhbmphbmEiLCJyb2xsTm8iOiIyM2IwMWE0NTc1IiwiYWNjZXNzQ29kZSI6ImFoWGp2cCIsImNsaWVudElEIjoiZmJjYTllYjEtNTc3Zi00MDQ0LThjYmYtZDdkZjgzMDdkOGEzIiwiY2xpZW50U2VjcmV0Ijoic3NjRWFlYmdubXBkWXdDWCJ9.BqJ3PB4M0PvrcV7xswEXWG9Ywv_8fILJK9nApG5rRWU",
      },
    }
  );

  const data = await response.json();

  return data.notifications;
}
catch(error){
    throw error; 
}
}