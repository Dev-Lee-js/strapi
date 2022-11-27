import io from 'socket.io-client';

const STRAPI_ENDPOINT = 'https://1337-devleejs-strapi-paz1eyu3a7x.ws-us77.gitpod.io';
export const socket = io(STRAPI_ENDPOINT);