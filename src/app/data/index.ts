import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

const data: Hotel[]  = [
    {
    address: '35 Boston Street',
    phone:  543876,   // дополнительно задание pipe для форматирования
    img: '/assets/images/res.jpg',
    weather: {
       title: 'Boston',
       water: 19,
       temperatur: 33
    },
    social_info: {
       title: '@Boston',
       img: '/assets/images/res.jpg',
       followers: 25000,
       following: 32000
    },
    type: 'Ivy Hotel'
  },
  {
    address: 'Hollywood Boulevard‎',
    phone:  876832,   // дополнительно задание pipe для форматирования
    img: '/assets/images/r1.jpg',
    weather: {
       title: 'LA',
       water: 30,
       temperatur: 36
    },
    social_info: {
       title: '@LA',
       img: '/assets/images/r1.jpg',
       followers: 100000,
       following: 250000
    },
    type: 'InnBuffalo'
  },
  {
    address: '150 California Street',
    phone:  867287,   // дополнительно задание pipe для форматирования
    img: '/assets/images/res.jpg',
    weather: {
       title: 'California',
       water: 29,
       temperatur: 35
    },
    social_info: {
       title: '@California',
       img: '/assets/images/res.jpg',
       followers: 99000,
       following: 19900
    },
    type: 'Rainbow'
  },
  {
    address: '1312 Delaware St',
    phone:  867592,   // дополнительно задание pipe для форматирования
    img: '/assets/images/r1.jpg',
    weather: {
       title: 'Delaware',
       water: 25,
       temperatur: 33
    },
    social_info: {
       title: '@Delaware',
       img: '/assets/images/r1.jpg',
       followers: 15000,
       following: 9000
    },
    type: 'Anderson'
  }
];

export const hotels$: Observable<Hotel[]> =
  Observable.of(data);