# Oura.js

[Oura Cloud API](https://cloud.ouraring.com/docs/) client with types.

## Installation

```sh
$ npm install oura-js
```

## Usage

```js
import { Oura } from 'oura-js'

// Access Token: https://cloud.ouraring.com/docs/authentication
const token = 'MY_ACCESS_TOKEN'

const oura = new Oura(token)
console.log(await oura.userInfo())
```

## API

API | Data
--- | ---
`userInfo` | [Personal Info](https://cloud.ouraring.com/docs/personal-info)
`sleep` | [Sleep](https://cloud.ouraring.com/docs/sleep)
`activity` | [Actibity](https://cloud.ouraring.com/docs/activity)
`readiness` | [Readiness](https://cloud.ouraring.com/docs/readiness)
`bedtime` | [Ideal Bedtime](https://cloud.ouraring.com/docs/bedtime)

## Development Status

Status | HTTP Method | Endpoint | API
--- | --- | --- | ---
⚡ | GET | /v1/userinfo | `userInfo`
⚡ | GET | /v1/sleep | `sleep`
⚡ | GET | /v1/activity | `activity`
⚡ | GET | /v1/readiness | `readiness`
⚡ | GET | /v1/bedtime | `bedtime`
