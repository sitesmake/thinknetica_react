import moment from 'moment';

export const items = [
  {
    image: {
      src: 'http://lorempixel.com/200/200'
    },
    text: 'Blog 1',
    id: 1,
    meta: {
      author: 'Philosopher',
      createdAt: moment().subtract(2000, 'years').format('lll'),
      updatedAt: moment().format('lll'),
      likes: 10
    }
  },
  {
    image: {
      src: 'http://lorempixel.com/200/100'
    },
    text: 'Blog 2',
    id: 2,
    meta: {
      author: 'Knight',
      createdAt: moment().subtract(500, 'years').format('lll'),
      updatedAt: moment().format('lll'),
      likes: 50
    }
  },
  {
    image: {
      src: 'http://lorempixel.com/200/50'
    },
    text: 'Blog 3',
    id: 3,
    meta: {
      author: 'Physicist',
      createdAt: moment().subtract(200, 'years').format('lll'),
      updatedAt: moment().format('lll'),
      likes: 20
    }
  }

];

export default items;
