# jiu-jitsu-notes-web

The React front-end for my Jiu Jitsu notes app - designed to simplify the process of conceptualising and memorising complex techniques and transitions in the sport of Jiu Jitsu.

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
    "submission": "http://localhost:8000/api/submission/"
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