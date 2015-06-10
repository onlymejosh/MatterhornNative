# Matterhorn Native


# API
/users/sign_in
body {
  user%5Bemail%5D=josh%40seriousfox.co.uk&user%5Bpassword%5D=12345678
}
/api/v1/tickets/:id
curl 'http://api.matterhorn.dev/api/v1/tickets/59' -X PUT -H 'Authorization: Token user_token="cCPvTzMwc9-8rxggmYvh", user_email="josh@seriousfox.co.uk"' -H 'Origin: http://app.matterhorn.dev' -H 'Accept-Encoding: gzip, deflate, sdch' -H 'X-CSRF-Token: Xsvrb69a2yft3/7WIYoXtsemUCUj4X6O/XtG90pK4pE=' -H 'Accept-Language: en-GB,en-US;q=0.8,en;q=0.6,da;q=0.4' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.81 Safari/537.36' -H 'Content-Type: application/json; charset=UTF-8' -H 'Accept: application/json, text/javascript, */*; q=0.01' -H 'CSP: active' -H 'Referer: http://app.matterhorn.dev/projects/2/board' -H 'Connection: keep-alive' --data-binary '{"ticket":{"state":"inprogress"}}' --compressed


# TO DO
https://github.com/dancormier/react-native-swipeout
- Add dropdown menu with context
- View Ticket
- Leave comments
