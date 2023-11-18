import mainTemplate from './templates/main.js';
import render from './render.js';
import { getContacts } from './api.js';

const rootElement = document.getElementById('root');

const contacts = await getContacts();

render(mainTemplate({ contacts }), rootElement);

// Don't do this at home
