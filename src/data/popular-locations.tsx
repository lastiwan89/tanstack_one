import { createServerFn } from '@tanstack/react-start'

export const getLocations = createServerFn({
  method: 'GET',
}).handler(
  async () =>
    await [
      {
        id: 0,
        name: 'Presean Lombok',
        sources:
          'https://images.pexels.com/photos/35474229/pexels-photo-35474229.jpeg',
      },

      {
        id: 1,
        name: 'Pink Beach',
        sources:
          'https://images.pexels.com/photos/3290667/pexels-photo-3290667.jpeg',
      },
      {
        id: 2,
        name: 'Gerupuk Beach',
        sources:
          'https://images.pexels.com/photos/17850915/pexels-photo-17850915.jpeg',
      },

      {
        id: 3,
        name: 'Presean Sasak culture',
        sources:
          'https://images.pexels.com/photos/35221344/pexels-photo-35221344.jpeg',
      },
      {
        id: 4,
        name: 'Anak Gunung Baru Jari',
        sources:
          'https://images.pexels.com/photos/4552425/pexels-photo-4552425.jpeg',
      },
      {
        id: 5,
        name: 'Air Terjun Benang Kelambu',
        sources:
          'https://images.pexels.com/photos/2823154/pexels-photo-2823154.jpeg',
      },

      {
        id: 6,
        name: 'Selong Beach',
        sources:
          'https://images.pexels.com/photos/11633309/pexels-photo-11633309.jpeg',
      },
      {
        id: 7,
        name: 'Mandalika International Circuit',
        sources:
          'https://images.pexels.com/photos/30013597/pexels-photo-30013597.jpeg',
      },
    ],
)
