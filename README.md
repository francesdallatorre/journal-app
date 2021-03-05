# Journal

## Overview

Journal is a full-stack application built to keep track of your daily entries. You use it by creating an account and writing down daily entries.

### Technologies

- **Node.js**
- **Mongoose**
- **Express**
- **EJS**

### Features

- **MVC Structure**
- **Full CRUD | 7 RESTful routes**
- **Partials**
- **Sign up / Log in functionality**
- **One to many model relationship**

### Styles

- **Skeleton & Normalize**

### Illustrations
- **undraw.co**

## Server API Requests

### Secure

| HTTP Request  | URL           | Method   |
| ------------- | ------------- | -------- |
| Create a user | /users/new    | `POST`   |
| Login a user  | /sessions/new | `POST`   |
| Logout a user | /sessions/new | `DELETE` |

- **Sample body for `POST` to `/users/new`**

```javascript
{
    "username": "Ana Jones",
    "password": "HelloWorld"
}
```

- **Sample body for `POST` to `/sessions/new`**

```javascript
{
    "name": "Ana Jones",
    "password": "HelloWorld"
}
```

### Open API Requests

| HTTP Request | URL                | Method   |
| ------------ | ------------------ | -------- |
| Show         | /entries/          | `GET`    |
| New          | /entries/new/      | `GET`    |
| Post New     | /entries/          | `POST`   |
| Edit         | /entries/:id/edit/ | `GET`    |
| Update       | /entries/:id/      | `PUT`    |
| Show         | /entries/:id/      | `GET`    |
| Delete       | /entries/:id/      | `Delete` |

- **Sample body for `POST` to `/entries/`**

```javascript
{           title: "today was an amazing day",
            entry: "Lorem ipsum dolor sit amet, id unum similique ius. Pro ex inermis fastidii patrioque, mei ex wisi interpretaris. Vel ad tritani dissentias. Brute modus aperiri ei mea, te ius tation argumentum. Nec velit assum aperiri an",
            emoji: "🤪"
        }
```

## Example Entry Collection

![Entry Example](/public/css/images/collection.png)

## Stretch Goals

- Uploading images from library and Camera access
- Gallery
- Calendar (interactive)
- Inspirational Quote of the day (API)

## Setup

- `git clone` this repo
- `cd` into it.
- `npm install`
- edit values in .env

## Available build commands

Open [http://localhost:3000](http://localhost:3000) to view your local app in the browser. The page will reload if you make edits.

## To deploy

- `heroku create your-app-name`
- `heroku config:set MONGODB_URL=<insertYourAtlasDbUri>`
- `git push heroku master`

## Link to APP

- [Journal](https://journal-2021.herokuapp.com)

## Author

- Frances Dalla Torre
