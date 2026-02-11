import { createServerFn } from '@tanstack/react-start'

export const getPopularLocations = createServerFn({
  method: 'GET',
}).handler(async () => [
  {
    id: 0,
    name: 'Gili Island',
    location:
      'https://images.pexels.com/photos/28408351/pexels-photo-28408351.jpeg',
  },
  {
    id: 1,
    name: 'Pantai Pink',
    location:
      'https://images.pexels.com/photos/3290667/pexels-photo-3290667.jpeg',
  },
  {
    id: 2,
    name: 'Bukit Merese',
    location:
      'https://images.pexels.com/photos/13629327/pexels-photo-13629327.jpeg',
  },
  {
    id: 3,
    name: 'Anak Gunung Baru Jari',
    location:
      'https://images.pexels.com/photos/4552438/pexels-photo-4552438.jpeg',
  },
  {
    id: 4,
    name: 'Adat Sasak Presean',
    location:
      'https://images.pexels.com/photos/35474229/pexels-photo-35474229.jpeg',
  },
  {
    id: 5,
    name: 'Pantai Kerandangan',
    location:
      'https://images.pexels.com/photos/7652351/pexels-photo-7652351.jpeg',
  },
  {
    id: 6,
    name: 'Air Terjun Benang Kelambu',
    location:
      'https://images.pexels.com/photos/2823154/pexels-photo-2823154.jpeg',
  },
  {
    id: 7,
    name: 'Lombok MXGP',
    location:
      'https://images.pexels.com/photos/20515021/pexels-photo-20515021.jpeg',
  },
  {
    id: 8,
    name: 'Mandalika International Circuit',
    location:
      'https://images.pexels.com/photos/30013597/pexels-photo-30013597.jpeg',
  },
])
