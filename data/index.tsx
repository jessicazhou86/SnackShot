export interface PostObject {
  post_id: number;
  restaurant_name: string;
  timestamp: string;
  location: string;
  photo_urls: string[];
  rating: number;
  username: string;
  caption: string;
}

const posts : PostObject[] = [
  {
   post_id: 1,
   restaurant_name: 'Hatch',
   timestamp: 'March 20, 2022 | 5:50pm',
   location: 'Los Angeles, CA',
   photo_urls: [
     'https://i.ibb.co/bN48dJr/IMG-8089.jpg',
     'https://i.ibb.co/Z2bLYhX/IMG-7933.jpg',
     'https://i.ibb.co/0BYVNfK/IMG-7934.jpg'
   ],
   rating: 4,
   username: 'jessicazhou',
   caption: 'Cute girls night, japanese yakitori great for sharing, and the drinks were yummyyyyy'
  },
  {
   post_id: 2,
   restaurant_name: "Boathouse at Hendry's Beach",
   timestamp: 'September 1, 2021 | 4:20pm',
   location: 'Santa Barbara, CA',
   photo_urls: [
     'https://i.ibb.co/SmWkBnp/IMG-0432.jpg',
     'https://i.ibb.co/T4Xynch/IMG-0433.jpg',
     'https://i.ibb.co/TM9Sg0X/IMG-0434.jpg'],
   rating: 4,
   username: 'jessicazhou',
   caption: "Perfect because it's RIGHT on the beach. Took cashew to play on the beach while we waited. Fire ceviche"
  },
  {
   post_id: 3,
   restaurant_name: 'Bavel',
   timestamp: 'September 9, 2021 | 5:26pm',
   location: 'Los Angeles, CA',
   photo_urls: [
     'https://i.ibb.co/RPrH6CL/IMG-1012.jpg',
     'https://i.ibb.co/NNJnJKf/IMG-1013.jpg',
     'https://i.ibb.co/DQDs4zH/IMG-1011.jpg',
     'https://i.ibb.co/x7xZd6f/IMG-1015.jpg'
   ],
   rating: 4,
   username: 'jessicazhou',
   caption: 'A little pricey for what you get but HONESTLY worth it. Hummus and prawns were to die for. And very cute interior. date night vibes'
  },
  {
   post_id: 4,
   restaurant_name: "Crab House",
   timestamp: 'October 16, 2021 | 2:27pm',
   location: 'Los Angeles, CA',
   photo_urls: [
     'https://i.ibb.co/7vqxPJw/IMG-2432.jpg',
     'https://i.ibb.co/hsq8FvC/IMG-2433.jpg'
   ],
   rating: 3.5,
   username: 'jessicazhou',
   caption: "Was aight. Pricier than some other places bc of the tiktok hype (still gotta support the business though). maybe marinated crab legs just not for me -- lil too sweet"
  },
  {
   post_id: 5,
   restaurant_name: "Di Fiora",
   timestamp: 'December 4, 2021 | 2:02pm',
   location: 'Seattle, WA',
   photo_urls: [
     'https://i.ibb.co/jf3QcWr/IMG-9256.jpg',
     'https://i.ibb.co/yYswWxT/IMG-9264.jpg',
     'https://i.ibb.co/kH0x0DJ/IMG-9263.jpg'

   ],
   rating: 5,
   username: 'jessicazhou',
   caption: "LITERALLY SO GOOD. it's asian fusion and the popcorn chicken esque thing DID NOT MISS!! cute interior for girls' brunch too"
  },
  {
    post_id: 6,
    restaurant_name: "Ramen Nagi",
    timestamp: 'April 7, 2022 | 2:05pm',
    location: 'Century City, CA',
    photo_urls: [
      'https://i.ibb.co/ZdbZMNY/IMG-8759.jpg',
      'https://i.ibb.co/0CmGpBt/IMG-8760.jpg',
      'https://i.ibb.co/4Fbdvp6/IMG-8761.jpg'

    ],
    rating: 5,
    username: 'jessicazhou',
    caption: "YUMMMMM, I love this ramen spot. they give you a little paper and you mark your flavor preferences and BAM delicious ramen. in century city mall"
   },
   {
    post_id: 7,
    restaurant_name: "Nep Cafe",
    timestamp: 'Marach 6, 2022 | 2:05pm',
    location: 'Fountain Valley, CA',
    photo_urls: [
      'https://i.ibb.co/WtxNw36/IMG-7486.jpg',
      'https://i.ibb.co/cFmpqy8/IMG-7488.jpg',
      'https://i.ibb.co/fXqXqHJ/IMG-7479.jpg'

    ],
    rating: 3,
    username: 'jessicazhou',
    caption: "idc what anyone says. NO brunch is worth a 2 hour wait. jk some may be but this WAS NOT IT. food was not even that warm by the time we got it and the bone marrow was like enough for a lick each. the crab toast was fire though have to admit. + drinks were unique and yummy. still meh"
   },
   {
    post_id: 8,
    restaurant_name: "Bacari Silverlake",
    timestamp: 'October 9, 2021 | 8:14pm',
    location: 'Silverlake, CA',
    photo_urls: [
      'https://i.ibb.co/N2xTzmB/IMG-6361.jpg',
      'https://i.ibb.co/CH7jH4f/IMG-6369.jpg',
      'https://i.ibb.co/Ntd8Dym/IMG-6366.jpg'

    ],
    rating: 4.5,
    username: 'jessicazhou',
    caption: "Make a res!! there was a hella long wait but we got in bc we sat at the bar. sexy ambiance and honestly food fire. just a lil $$ but that's all la food it is what it is. yummmyyy egg white drink irene's treat <3"
   },
   {
    post_id: 9,
    restaurant_name: "Von's 1000 Spirits",
    timestamp: 'December 10, 2021 | 5:46pm',
    location: 'Seattle, WA',
    photo_urls: [
      'https://i.ibb.co/XjP7wfY/IMG-9963.jpg',
      'https://i.ibb.co/ngwPM60/IMG-9965.jpg',
      'https://i.ibb.co/18XNLQY/IMG-9968.jpg'

    ],
    rating: 5,
    username: 'jessicazhou',
    caption: "15/10. take all my money. this place was chefs kiss. SOURDOUGH PASTA!!! BURRRRRRAATTAA!!! CASCATELLI PASTA SHAPE!!! cute vibes too"
   }
 ];

 export default posts;