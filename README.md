# get-keywords

Simple Express API that extracts 3–5 keywords from input text using OpenAI.

## Setup

```bash
git clone https://github.com/davidumoru/get-keywords.git
cd get-keywords
npm install
cp .env.example .env   # add OPENAI_API_KEY
node index.js
```

## Endpoints

### POST /getKeywords

**Body**

```json
{ "input": "Learning to code in JavaScript is fun and challenging." }
```

**Response**

```json
{ "output": ["JavaScript", "code", "learning"] }
```

### GET /getKeywords

Returns endpoint description.
