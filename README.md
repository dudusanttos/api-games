
#   Games Store
<img src="./screenshot/screenshot.png" />

## Endpoints

### GET /games

This endpoint is responsible for returning the list of all games registered in the database.

#### Parameters

None

#### Responses

##### OK! 200

If this response occurs, you will receive the list of all games.

Response example:


```

[
    {
        "id": 23,
        "title": "Call of duty MW",
        "year": 2019,
        "price": 60
    },
    {
        "id": 65,
        "title": "Sea of thieves",
        "year": 2018,
        "price": 40
    },
    {
        "id": 2,
        "title": "Minecraft",
        "year": 2012,
        "price": 20
    }
]

```

##### Authentication failed! 401

If this response occurs, it means that there was a failure during the authentication process of the request. Reasons: Invalid token, expired token.

Response example:

jsonCopy code

`{
    "err": "Invalid token!"
}` 

### POST /auth

This endpoint is responsible for handling the login process.

#### Parameters

email: User's email registered in the system.

password: User's password registered in the system, associated with that particular email.

Example:

`
{
	"email": "dudu@gmail.com",
	"password": "nodejs<3"
}
` 

#### Responses

##### OK! 200

If this response occurs, you will receive the JWT token to access protected endpoints in the API.

Response example:
```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ2aWN0b3JkZXZ0YkBndWlhZG9wcm9ncmFtYWRvci5jb20iLCJpYXQiOjE1OTE3ODI0NzUsImV4cCI6MTU5MTk1NTI3NX0.y8kp3BxKgC86KFiq6-tAABukR6vi1guTPeRQhO8IdwU"
}
```

##### Authentication failed! 401

If this response occurs, it means that there was a failure during the authentication process of the request. Reasons: Incorrect password or email.

Response example:
```
{err: "Invalid credentials!"}
```


# ALERT
REFRESH PAGE
