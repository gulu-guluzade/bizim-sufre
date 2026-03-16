import { IProducts } from '@/types/products';

const productsSauce: IProducts[] = [
  {
    id: '1',
    title: 'BİZİM SUFRE BARBECUE SAUCE',
    imgSrc: '/products/sauce/1.png',
    desc: 'Barbecue sauce… What do you imagine when hearing the name of this sauce? Nice weather, dear friends, marinated meat, chicken or fish dishes in the sauce and a barbecue waiting for them… Our Barbecue sauce mainly used in barbecue dishes and customizing the special taste of the barbecue will make your days unforgettable. Barbecue sauce can also be used while preparing other dishes, various fries to taste, with meat, fish and potatoes.',
    ingredients:
      'Pasteurized water, tomato paste, sugar, vinegar (E260), starch (Е1422), salt, сolourant: caramel colour (E150c), natural smoke flavor, natural emulsifier complex: E410, E412; ascorbic acid (E300), preservative: potassium sorbate (E202), natural spices: onion and garlic powder, ground pepper.',
    totalWeight: '280 q',
    totalValuePer100gr: {
      fat: '0.08 q',
      protein: '1.25 q',
      carbohydrate: '27.15 q',
      energy: '478.13 kC / 114.28kkal',
      innerPiece: '24 ədəd',
    },
    note: 'Keep away from sunray. Shake before use. Recommended for use with frying meat, chicken and potatoes.',
  },
  {
    id: '2',
    title: 'BİZİM SUFRE GOURMET SAUCE',
    imgSrc: '/products/sauce/2.png',
    desc: 'Suitable for all kinds of food and served with a wide range of products on the table, “Bizim Sufre” have not forgotten about pastries lovers either. Gourmet sauce prepared on the basis of a special recipe adds a special flavor to khangal, gutab, noodles, gurze and a variety of pastries of our rich cuisine. Gourmet sauce can be used with other different dishes according to taste. In short, "Bizim sufre" Gourmet sauce is suitable for any table. Let everybody taste our local, natural, useful product.',
    ingredients:
      'Sunflower oil, pasteurized water, dried cheese, stabilizer complex: yolk powder, guar gum (E412), xanthan gum (E415), starch (E1422); sugar, natural spices, salt, vinegar (E260), citric acid (E330), potassium sorbate (E202), EDTA (E385), mustard oil, beta-carotene (E160a(i)).',
    totalWeight: '250 q',
    totalValuePer100gr: {
      fat: '47.57 q',
      protein: '3.02 q',
      carbohydrate: '5.69 q',
      energy: '1936.52 kC / 462.84 kkal',
      innerPiece: '24 ədəd',
    },
    note: 'Product of Azerbaijan. GMO free. Keep away from sunray. Shake before use. It is not recommended for people with sensitivity to mustard and yolk.',
  },
  {
    id: '3',
    title: 'BİZİM SUFRE TRADITIONAL SAUCE',
    imgSrc: '/products/sauce/3.png',
    desc: 'Lovers of delicious dishes say that pastries cannot be eaten without sauce! It is recommended to eat "Bizim Sufre" traditional sauce prepared by traditional methods to suit the taste of our local consumers, mainly with pastries, with snacks made of dough. It can also be used to taste with all kind of dishes that you can or can’t imagine.',
    ingredients:
      'Pasteurized water, sunflower oil, dried cheese, tomato paste, granulated sugar, stabilizer complex: yolk powder, guar gum (E412), xanthan gum (E415), locust bean gum (E410), starch (E1422); salt, glucose, vinegar (E260), potassium sorbate (E202), citric acid (E330), natural flavours, ascorbic acid (E300), EDTA (E385), mustard oil, beta-carotene (E160a(i)).',
    totalWeight: '260 q',
    totalValuePer100gr: {
      fat: '33.92 q',
      protein: '4.27 q',
      carbohydrate: '6.57 q',
      energy: '1458.75 kC / 348.65 kkal',
      innerPiece: '24 ədəd',
    },
    note: 'Product of Azerbaijan. GMO free. Keep away from sunray. Shake before use. It is not recommended for people with sensitivity to mustard and yolk.',
  },
  {
    id: '4',
    title: 'TOMATO SAUCE',
    imgSrc: '/products/sauce/4.png',
    desc: 'Tomato, pepper paste, sunflower oil, sugar, salt, natural сhili flavour, onion, thickener, hot red pepper, garlic, bay leaf, black pepper, citric acid (E330).',
    ingredients:
      'Tomato, pepper paste, sunflower oil, sugar, salt, natural сhili flavour, onion, thickener, hot red pepper, garlic, bay leaf, black pepper, citric acid (E330).',
    totalWeight: '310 q ',
    totalValuePer100gr: {
      fat: '4.3 q',
      protein: '0 q',
      carbohydrate: '21.8 q',
      energy: '529.2 kC /  126 kkal',
      innerPiece: '30 ədəd',
    },
    note: 'Product of Azerbaijan. GMO free. Keep away from sunrays. Do not buy jars with convex lid. ',
  },
  {
    id: '5',
    title: 'BURGER SAUCE',
    imgSrc: '/products/sauce/5.png',
    desc: 'After tasting the burgers made with the new Burger Sauce, you will be rewarded with this taste.',
    ingredients:
      'Sunflower oil, pasteurized water, ketchup, sugar, emulsifier: egg yolk powder, starch (E1422), guar gum (E412), xanthan gum ( E415), salt, vinegar (E260),natural spices, potassium sorbate (E202), beta-carotene (E160a(i)), mustard oil, EDTA (E385).',
    totalWeight: '250q',
    totalValuePer100gr: {
      fat: '53.28 q',
      protein: '0.16 q',
      carbohydrate: '6.84 q',
      energy: '2123.46 kC / 507.52 kkal',
      innerPiece: '24 ədəd',
    },
    note: 'Product of Azerbaijan. GMO free. Keep away from sunrays. ',
  },
  {
    id: '6',
    title: 'GARLIC SAUCE',
    imgSrc: '/products/sauce/6.png',
    desc: '“Bizim Sufre” garlic sauce, which is eaten with the hottest foods, makes meals appetizing. This sauce is a tasteful discovery for those who want to use it for treatments but cannot eat it alone. It is used both in the baking phase and for the making meals tasty.',
    ingredients:
      'Pasteurized water, sunflower oil, glucose, sugar, tomato paste, vinegar (E260), salt,  emulsifier and stabilizer complex: egg yolk powder,E415, E401, E331, E551, E1422; natural spices, natural flavours,  citric acid (E330),  potassium sorbate (E202), EDTA (385).',
    totalWeight: '250q',
    totalValuePer100gr: {
      fat: '38 q',
      protein: '0 q',
      carbohydrate: '13.8 q',
      energy: '1653 kC / 395 kkal',
      innerPiece: '24 ədəd',
    },
    note: 'Product of Azerbaijan. GMO free. Keep away from sunrays.',
  },
  {
    id: '7',
    title: 'HERBAL TOMATO SAUCE',
    imgSrc: '/products/sauce/7.png',
    desc: 'We made our herb tomato sauce to flavor to tomato sauce and make the herb lovers happy. The herb tomato sauce contains more than 15 ingredients.',
    ingredients:
      'Tomato, pepper paste, sunflower oil, sugar, salt, natural flavour, spicy herbs, thickener, bay leaf, onion, garlic, black pepper, citric acid (E330).',
    totalWeight: '310 q',
    totalValuePer100gr: {
      fat: '3.9 q',
      protein: '0 q',
      carbohydrate: '21.8 q',
      energy: '490 kC / 117 kkal',
      innerPiece: '20 ədəd',
    },
    note: 'Product of Azerbaijan. GMO free. Keep away from sunrays. Do not buy jars with convex lid.',
  },
  {
    id: '8',
    title: 'TKEMALI SAUCE',
    imgSrc: '/products/sauce/8.png',
    desc: 'Tkemali sauce is a favorite addition to any frying and meat dishes. This sauce is used not only in prepared meals, but also in cooking. Its unique sourish taste, crimson gives appetizing taste to dishes.',
    ingredients:
      'Plum puree, pasteurized water, sugar, salt, natural spices, potassium sorbate (E202), citric acid (E330), flavour.',
    totalWeight: '285q',
    totalValuePer100gr: {
      fat: '0 q',
      protein: '0.8 q',
      carbohydrate: '15.2 q',
      energy: '268  kC / 64 kkal',
      innerPiece: '24 ədəd',
    },
    note: 'Product of Azerbaijan. GMO free. Keep away from sunrays. ',
  },
  {
    id: '9',
    title: 'CHOCOLATE SYRUP',
    imgSrc: '/products/sauce/9.png',
    desc: 'Thanks to its unique aroma, color and taste, “Bizim Sufre” Chocolate Syrup, which wins the hearts of chocolate lovers, creates a perfect combination of both ice cream and flour products. Chocolate syrup is made from pure sugar cane and has a rich chocolate flavor, and the amount of sweets used is based on taste and enjoyment.',
    ingredients:
      'Glucose, pasteurized water, sugar, cocoa powder, skimmed milk powder, emulsifier and stabilizer complex: E440, E450, E452; potassium sorbate (E202), chocolate flavor.',
    totalWeight: '330 q',
    totalValuePer100gr: {
      fat: '0.88 q',
      protein: '2.17 q',
      carbohydrate: '60.7 q',
      energy: '1084 kC / 259 kkal',
      innerPiece: '24 ədəd',
    },
    note: 'Product of Azerbaijan. GMO free. Keep away from sunrays. Do not buy jars with convex lid. ',
  },
  {
    id: '10',
    title: 'CAESAR SAUCE',
    imgSrc: '/products/sauce/10.png',
    desc: 'The main ingredient in the Caesar salad is its sauce. “Bizim Sufre” Caesar Sauce, which has history and originality, is based on the Italian recipe.',
    ingredients:
      'Pasteurized water, sunflower oil, glucose, vinegar (E260), sugar, salt, emulsifier and stabilizer complex: egg yolk powder,  E1422, E412, E415, E551,  whey protein, natural flavours, natural spices, lactic acid (E270),  potassium sorbate (E202), EDTA (E385).',
    totalWeight: '250q',
    totalValuePer100gr: {
      fat: '38 q',
      protein: '0 q',
      carbohydrate: '9 q',
      energy: '1577 kC /  377  kkal',
      innerPiece: '24 ədəd',
    },
    note: 'Product of Azerbaijan. GMO free.',
  },
];

export default productsSauce;
