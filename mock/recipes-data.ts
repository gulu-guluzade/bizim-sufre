import IRecipesData from '@/types/recipes-data';

const recipesData: IRecipesData[] = [
  {
    id: '1',
    imgSrc: '/recipe-showcase/1.jpg',
    title: 'Bolognese Spaghetti',
    ingredients: [
      '500g Spaghetti',
      '3 tbsp vegetable oil',
      'Water',
      'Salt and pepper',
      'Rosemary',
      '1 tbsp Parmesan cheese',
      'Bolognese sauce',
    ],
    videoSrc: '/recipes-videos/1.mp4',
    preparation:
      'Add salt to boiling water and add the spaghetti. Also, pour some oil into the water. Drain the water and add the bolognese sauce. Mix the spaghetti with salt, pepper, and rosemary. Serve by topping with sauce, spices, and grated Parmesan cheese.',
  },
  {
    id: '2',
    imgSrc: '/recipe-showcase/2.png',
    title: 'Pasta Salad with “Bizim Sufre” Mayonnaise',
    ingredients: [
      '1 pack of fusilli (spiral) pasta',
      'Corn',
      'Cream',
      "'Bizim Sufre' Mayonnaise (400 ML Classic version should be shown in the video)",
      'Mustard',
      'Salami / Sausage',
      'Mozzarella cheese',
      'Tomato',
      'Herbs (Greens)',
    ],
    videoSrc: '/recipes-videos/2.mp4',
    preparation:
      "You can experience the exquisite flavor 'Bizim Sufre' mayonnaise adds to dishes with this wonderful salad, prepared effortlessly in a short time.",
  },
  {
    id: '3',
    imgSrc: '/recipe-showcase/3.jpg',
    title: 'Kebab with "Bizim Sufre" kebab ketchup',
    ingredients: [
      'Kebab (Meat)',
      'Onion',
      'Parsley',
      'Lavash (Flatbread)',
      "'Bizim Sufre' Kebab Ketchup",
    ],
    videoSrc: '/recipes-videos/3.mp4',
    preparation:
      "What makes kebabs tastier? Onions, spices, special herbs... But there is one flavor that will make all your guests curiously ask, 'What did you add to this?' Yes, we are talking about 'Bizim Sufre' kebab ketchup! In your opinion, what is the secret extra that makes a kebab even more delicious?",
  },
  {
    id: '4',
    imgSrc: '/recipe-showcase/4.jpg',
    title: 'Burger with "Bizim Sufre" burger sauce',
    ingredients: [
      'Burger patty',
      'Burger bun',
      'Burger cheese',
      "'Bizim Sufre' burger sauce",
      'Tomato',
      'Pickles',
      'Lettuce',
    ],
    videoSrc: '/recipes-videos/4.mp4',
    preparation:
      "Burgers, where you will find flavor in every layer, become even more delightful with 'Bizim Sufre' burger sauce.",
  },
  {
    id: '5',
    imgSrc: '/recipe-showcase/5.jpg',
    title: 'Nuggets with "Bizim Sufre" sweet chili sauce',
    ingredients: [
      "While watching, the question 'I wonder if it tastes as delicious as it looks?' might have crossed your mind. We should note that, yes, it absolutely does.",
    ],
    videoSrc: '/recipes-videos/5.mp4',
    preparation: "But as the elders say, it's better to 'taste' once than to hear a hundred times.",
  },
  {
    id: '6',
    imgSrc: '/recipe-showcase/6.jpg',
    title: 'Healthy salad with "Bizim Sufre" low-calorie mayonnaise',
    ingredients: [
      '100 grams of fresh cabbage',
      '2 cucumbers',
      '2-3 boiled eggs',
      '30-40 grams of green onions',
      '3 tbsp low-calorie mayonnaise',
      '1 bunch of dill',
    ],
    videoSrc: '/recipes-videos/6.mp4',
    preparation:
      "The best way to overcome the post-workout hunger is with a salad prepared with 'Bizim Sufre' low-calorie mayonnaise.",
  },
];

export default recipesData;
