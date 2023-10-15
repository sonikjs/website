import { Hono } from 'hono'

const REDIRECT_URL = 'https://github.com/sonikjs/sonik'

const app = new Hono()

app.get('*', (c) => c.redirect(REDIRECT_URL))

export default app
