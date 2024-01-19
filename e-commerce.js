function shop() {
  const intro =
    'Welcome to EcoChic Haven where fashion meets conscience. Explore our curated collection of stylish, eco-friendly clothing and bottles, making a statement for a greener, more sustainable future with every thoughtful purchase.\n';

  const products = 'Here is our diverse range of Clothing Items:\n';

  const clothingItems = {
    essentials: ['Organic Cotton T-Shirts', 'Hemp Denim Jeans'],
    activewear: ['Bamboo Fiber Activewear'],
    elegantWear: [
      'Tencel Blouses and Shirts',
      'Linen Dresses',
      'Organic Wool Sweaters',
    ],
    accessory: ['Upcycled Fashion Accessory'],
    swimwear: ['Sustainable Swimwear'],
  };

  const bottleItems = {
    everydayHydration: [
      'Stainless Steel Water Bottles',
      'Bamboo Water Bottles',
      'Glass Infuser Bottles',
    ],
    onTheGoSolutions: [
      'Collapsible Travel Bottles',
      'Reusable Coffee Cups',
      'Insulated Thermos Bottles',
    ],
    specialtyBottles: [
      'Biodegradable Plastic-Free Bottles',
      'Copper-Infused Bottles',
    ],
  };

  console.log(intro);
  console.log(products);

  console.log(
    'First, we have the "Essentials" which are ' +
      clothingItems['essentials'][0] +
      ' and ' +
      clothingItems['essentials'][1] +
      '. \nThen, we have a category called "Active Wears". In it is the ' +
      clothingItems['activewear'][0] +
      '. \nThere are also some items such as ' +
      clothingItems['elegantWear'][0] +
      ', ' +
      clothingItems['elegantWear'][1] +
      ', and ' +
      clothingItems['elegantWear'][2] +
      '. We refer to them as the "Elegant Wears". \nWe also have an accessory called "The ' +
      clothingItems['accessory'][0] +
      '". \nAnd finally, among our clothing items, is ' +
      clothingItems['swimwear'][0] +
      ' which is built specifically to be sustainable.\n\n'
  );

  console.log(
    "But that's not all. Elevate your daily routine with our amazing bottle selection - not just containers, but expressions of your commitment to a sustainable, chic lifestyle. \nMake every sip count.\n\n"
  );

  console.log(
    'We have our Everyday Hydration which consists of ' +
      bottleItems['everydayHydration'][0] +
      ', ' +
      bottleItems['everydayHydration'][1] +
      ', and ' +
      bottleItems['everydayHydration'][2] +
      '. We also have a category of what we call "On The Go Solutions". It includes ' +
      bottleItems[`onTheGoSolutions`][0] +
      ', ' +
      bottleItems[`onTheGoSolutions`][1] +
      ', and ' +
      bottleItems[`onTheGoSolutions`][2] +
      '. And finally, we have a few items of what we call our "Specialty Bottles". Here are the two items: ' +
      bottleItems['specialtyBottles'][0] +
      ', and ' +
      bottleItems['specialtyBottles'][1] +
      '. \n\nWe hope you are glad and satisfied with all these itemes.'
  );
}

shop();
