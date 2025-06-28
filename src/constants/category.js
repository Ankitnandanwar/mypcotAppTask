import OrdersImage from '../icons/orders-illustration-image.svg';
import SubscriptionsImage from '../icons/subscriptions-illustration-image.svg';
import CustomersImage from '../icons/customers-illustration-image.svg';

// data/dashboardBannerData.js

export const cards = [
  {
    id: 'orders',
    backgroundColor: '#33A1CC',
    imagesource: OrdersImage, // or .svg with proper transformer
    buttonText: 'Orders',
    buttonColor: '#E6613E',
    primaryStat: {
      label: 'You have 3 active orders from',
      avatars: [
        'https://randomuser.me/api/portraits/women/44.jpg',
        'https://randomuser.me/api/portraits/men/47.jpg',
        'https://randomuser.me/api/portraits/women/48.jpg',
      ],
    },
    stats: {
      value: '02',
      label: 'Orders from',
      avatars: [
        'https://randomuser.me/api/portraits/women/44.jpg',
        'https://randomuser.me/api/portraits/men/47.jpg',
      ]
    }
  },

  {
    id: 'subscriptions',
    backgroundColor: '#DCB223',
    imagesource: SubscriptionsImage,
    buttonText: 'Subscriptions',
    buttonColor: '#234DDC',
    primaryStat: {
      label: '03 deliveries',
      avatars: [
        'https://randomuser.me/api/portraits/women/44.jpg',
        'https://randomuser.me/api/portraits/men/47.jpg',
        'https://randomuser.me/api/portraits/women/48.jpg',
      ],
    },
    stats: [
      {
        value: '10',
        label: 'Active Subscriptions',
        avatars: []
      },
      {
        value: '119',
        label: 'Pending Deliveries'
      }
    ]
  },

  {
    id: 'customers',
    backgroundColor: '#31CE95',
    imagesource: CustomersImage,
    buttonText: 'View Customers',
    buttonColor: '#CE316A',
    primaryStat: {
      label: '15 New customers',
      avatars: [
        'https://randomuser.me/api/portraits/women/44.jpg',
        'https://randomuser.me/api/portraits/men/47.jpg',
        'https://randomuser.me/api/portraits/women/48.jpg',
      ],
    },
    stats: [
      {
        value: '02',
        label: 'Pending Orders from',
        avatars: [
          'https://randomuser.me/api/portraits/women/4.jpg',
          'https://randomuser.me/api/portraits/men/5.jpg'
        ]
      }
    ],
    tertiaryStat: {
      label: 'Active',
      value: '10 Customers',
    },
  },
];
