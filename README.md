# jiu-jitsu-notes-web

The React front-end for my Jiu Jitsu notes app - designed to simplify the process of conceptualising and memorising complex techniques and transitions in the sport of Jiu Jitsu.

![image](https://github.com/matt-plank/jiu-jitsu-notes-web/assets/48247883/6822a7e1-a838-4c8d-979a-50f498dac3c0)

## Setup

Clone and enter the repository

```
$ git clone https://github.com/matt-plank/jiu-jitsu-notes-web.git
$ cd jiu-jitsu-notes-web/
```

Install dependencies

```
$ cd jiu-jitsu-notes/
$ npm install
```

Create a `src/api/routes.json` file.

This file tells the front-end where to find the back-end API. The back-end API is required for this web app to function properly, and can be found [here](https://github.com/matt-plank/jiu-jitsu-notes-api).

A template file for local development would be:

```json
{
    "randomTechnique": "http://localhost:8000/api/technique/random",
    "position": "http://localhost:8000/api/position/",
    "grip": "http://localhost:8000/api/grips/",
    "technique": "http://localhost:8000/api/technique/",
    "submission": "http://localhost:8000/api/submission/",
    "playlist": "http://localhost:8000/api/playlists/",
    "token": "http://localhost:8000/auth/token",
    "account": "http://localhost:8000/auth/account"
}
```

### Start Development Server

```
$ cd jiu-jitsu-notes/
$ npm start
```

### Build for Production

```
$ cd jiu-jitsu-notes/
$ npm run build
```
