import { config } from 'ar-catch';

export default () => {
  config({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    pureResponse: true,
  });
};
