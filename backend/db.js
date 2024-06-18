const productsDataDogs = [
  {
    name: "Irish Pure Premium Dry Dog Food, High Meat Content, Vitamins, Grain Free, Sensitive, Dry Dog Food for All Breeds",
    description:
      "Perfectly matched dog food: 65% meat from Irish pasture animals, 32% vegetables and herbs as well as 3% kelp algae make 100% natural taste for your four-legged friend.From Irish free range: the meat for this dry food comes from Irish pasture lambs and outdoor chickens that spend 365 days a year in the fresh Atlantic air of Ireland. Greener can not feed meat.    💚 With Superfood Kelp algae: The ingredients of this dog food also include kelp algae, which is harvested off the west coast of Ireland. It is responsible for regulating digestion and strengthening the immune system of your four-legged friend.    🍀 No additives: cereals and artificial additives are not found at Irish Pure Only valuable ingredients come into the bag. Potatoes provide your dog with important carbohydrates instead of burdening digestion",
    price: 49.99,
    quantity: 100,
    category: "dogs",
    image: "https://m.media-amazon.com/images/I/61Idjbt8uZL._AC_.jpg",
    createdAt: new Date(),
  },
  {
    name: "Poultry Enjoyment - Premium Dry Dog Food, Made in Germany, Dry Food for Dogs, Grain-Free & No Added Sugar, Perfect for Muscle Building and a Healthy Coat",
    description:
      "High-quality dry food: the poultry enjoyment from True Animal Love, specially developed for the nutritional needs of your dog, supports muscle building and ensures a shiny coat.Grain-free food: your dog food is made from 60% poultry protein and is free from cereals and sugar additives, ideal for sensitive stomachs and dogs with allergies. NATURAL INGREDIENTS FOR OPTIMAL HEALTH: Infused with carrots, peas, salmon oil, and herbs to promote digestion and support overall health.",
    price: 29.99,
    quantity: 75,
    category: "dogs",
    image: "https://m.media-amazon.com/images/I/71zknS2cJIL._AC_SL1500_.jpg",
    createdAt: new Date(),
  },
  // Add more products for dogs
  {
    name: "Naturpfötchen Environmentally conscious & vital with insect proteins - 100% cold pressed",
    description:
      "Free from conventional industrial meat. With essential amino acids. With peas, lupins, vegetables, fruit, fish oil and herbs. Hypoallergenic complete dry dog food with rich monoprotein. 100% cold-pressed dog food - made by the Markus Mühle with green electricity. The complete food for your dog lover.",
    price: 39.99,
    quantity: 80,
    category: "dogs",
    image: "https://m.media-amazon.com/images/I/61hFAszrbRL._AC_SL1500_.jpg",
    createdAt: new Date(),
  },
  // Add more products for cats
  {
    name: "JosiDog Economy (1 x 15 kg) Dog Food for Adult Dogs Dry Food Powered by Josera Pack of 1",
    description:
      "Controlled and high-quality ingredients - without the addition of wheat, soy and sugar as well as artificial colours and flavourings. Crispy snacks – particularly crispy and delicious. For normally active dogs – for adult dogs with normal energy requirements. Full quality nutrition - provides your four-legged friend with all important nutrients every day. Made in Germany and not tested on animals - Made by a medium-sized family business in Germany",
    price: 34.99,
    quantity: 60,
    category: "dogs",
    image: "https://m.media-amazon.com/images/I/61jRFQ3bD1L._AC_SL1400_.jpg",
    createdAt: new Date(),
  },
  {
    name: "Beneful Original Dry Dog Food with Beef and Garden Vegetables, Pack of 1 (1 x 12 kg)",
    description:
      "Dry food for adult dogs: with beef, garden vegetables and spinach. New formula: soft, fleshy chunks with natural texture. Box contents: 1 x 12 kg dry dog food with soft chunks and crispy croquettes. An adapted amount of proteins and fat to strengthen healthy joints. Dog food with valuable fibre from whole grain for healthy digestion. High-quality dog food with important omega 3 and 6 fatty acids to support healthy skin and shiny coat",
    price: 39.99,
    quantity: 80,
    category: "dogs",
    image: "https://m.media-amazon.com/images/I/812IK818yxL._AC_SL1500_.jpg",
    createdAt: new Date(),
  },
  {
    name: "bosch HPC Adult Dog Food with Lamb and Rice, Dry Dog Food for Adult Dogs of all Breeds, 1 x 15 kg",
    description:
      "Wheat-free and sugar-free (suitable for sensitive dogs). Immune complex of mannas and glucans for stabilising the intestinal flora and immune defence (strengthening of the immune system).Shell extracts for strengthening cartilage, joints & bones. Easily digestible, stomach-friendly dry food. Energy and protein concentration is selected to prevent the risks of obesity",
    price: 32.49,
    quantity: 80,
    category: "dogs",
    image: "https://m.media-amazon.com/images/I/81Faad1StrL._AC_SL1500_.jpg",
    createdAt: new Date(),
  },
  {
    name: "Dog Food Adult Dry with Lamb and Rice All Breeds Fine Preparation",
    description:
      "Free from chicken and wheat gluten. 195g lamb in 1kg feed equals 780g raw meat. The FMP system and Yucca promote good digestion. No added gluten. An excellent taste that your dog will like",
    price: 40.69,
    quantity: 80,
    category: "dogs",
    image: "https://m.media-amazon.com/images/I/717Q++eDZ9L._AC_SL1500_.jpg",
    createdAt: new Date(),
  },
  {
    name: "Irish Pure Premium Dry Dog Food, High Meat Content, Vitamins, Grain Free, Sensitive, Dry Dog Food for All Breeds",
    description:
      "Perfectly matched dog food: 65% meat from Irish pasture animals, 32% vegetables and herbs as well as 3% kelp algae make 100% natural taste for your four-legged friend. From Irish free range: the meat for this dry food comes from Irish pasture lambs and outdoor chickens that spend 365 days a year in the fresh Atlantic air of Ireland. Greener can not feed meat",
    price: 16.99,
    quantity: 80,
    category: "dogs",
    image: "https://m.media-amazon.com/images/I/61Idjbt8uZL._AC_.jpg",
    createdAt: new Date(),
  },
  {
    name: "Dehner Wild Nature Dry Dog Food",
    description:
      "Grain-free premium dry dog food with game - adult. Original, species-friendly, 100% natural composition. High meat content as well as vegetables, fruit, herbs and berries. Contains pre-biotic carbohydrates MOS and FOS. Free from chemical additives, no sugar or soy.",
    price: 21.99,
    quantity: 80,
    category: "dogs",
    image: "https://m.media-amazon.com/images/I/6137MPQt84L._AC_SL1107_.jpg",
    createdAt: new Date(),
  },
  {
    name: "Dehner Wild Nature Dry Dog Food",
    description:
      "Grain-free premium dry dog food with game - adult. Original, species-friendly, 100% natural composition. High meat content as well as vegetables, fruit, herbs and berries. Contains pre-biotic carbohydrates MOS and FOS. Free from chemical additives, no sugar or soy.",
    price: 21.99,
    quantity: 80,
    category: "dogs",
    image: "https://m.media-amazon.com/images/I/61uTH4ll7RL._AC_SL1107_.jpg",
    createdAt: new Date(),
  },
  // Add more products for other categories as needed
];

const productDataCats = [
  {
    name: "mera vital Urinary Dry Cat Food (1 x 3 kg), for Inflammation of the Urinary Tract, Dissolution of Struvite Stones, Prevents New Urinary Stones in Cats",
    description:
      "The urinary cat dry food inhibits inflammation in the urinary tract, strengthens the stressed bladder mucosa, avoids the formation of urinary stones and promotes water absorption in cats. High premium diet dry food specially developed by veterinarians and nutritionists - the cat food acidifies the urine, which promotes the dissolution of struvite stones.   Thanks to the undersaturated yet demand-covering calcium and magnesium content, the dry cat food prevents the formation of new crystals and strengthens the stressed bladder mucosa.",
    price: 24.99,
    quantity: 80,
    category: "cats",
    image: "https://m.media-amazon.com/images/I/61FiSkh2NBL._AC_SL1500_.jpg",
    createdAt: new Date(),
  },
  {
    name: "Royal Canin Bengal Adult Cats Dry Food 2 kg Poultry Vegetable",
    description:
      "Royal Canin Bengal Adult cats dry food 2 kg Poultry Vegetable",
    price: 32.35,
    quantity: 80,
    category: "cats",
    image: "https://m.media-amazon.com/images/I/61rE39QdgJL._AC_SL1500_.jpg",
    createdAt: new Date(),
  },
  {
    name: "PURINA Pro Plan Veterinary Diets Feline HA St/Ox Hypoallergenic - Dry Cat Food - 3 5 kg",
    description:
      "PURINA Pro Plan Veterinary Diets Feline HA St/Ox Hypoallergenic - Dry Cat Food - 3 5 kg",
    price: 48.75,
    quantity: 80,
    category: "cats",
    image: "https://m.media-amazon.com/images/I/713j+gOuEnL._AC_SL1500_.jpg",
    createdAt: new Date(),
  },
  {
    name: "IAMS for Vitality Dry Cat Food with Salmon — Dry Food for Cats Aged 1-6 Years 3 kg",
    description: "",
    price: 10.59,
    quantity: 80,
    category: "cats",
    image: "https://m.media-amazon.com/images/I/716CItY5vgL._AC_SL1500_.jpg",
    createdAt: new Date(),
  },
  {
    name: "Felix Sensations Dry Cat Food, Variety Mix, Various Sizes",
    description:
      "Dry food for adult cats: Crispy croquettes in different shapes. Colourful meal with the flavours of beef, chicken and vegetables. Box contents: dry cat food with sealable bag in 1 pack (1 x 4 kg). Vitamins and essential fatty acids to support a happy cat life and for shiny coat. Cat food with vitamin D and minerals for strong teeth and bones. Cat food without preservatives or added artificial flavours and dyes",
    price: 11.2,
    quantity: 80,
    category: "cats",
    image: "https://m.media-amazon.com/images/I/81+Q1daOifL._AC_SL1500_.jpg",
    createdAt: new Date(),
  },
  {
    name: "Lifelong Complete Cat Food with Grain Free Recipe, beige",
    description:
      "High quality formula with 55% chicken. Veterinarians tested: developed by veterinarians and vetted. Complete food for adult cats. HYPOALLERGENIC - Contains a single animal protein source (chicken) No added wheat, corn, soy, egg, lactose and gluten.  Made with natural ingredients*: no added artificial flavourings, dyes and preservatives. Natural antioxidants: with fruits and vegetables that are a source of natural antioxidants",
    price: 10.34,
    quantity: 80,
    category: "cats",
    image: "https://m.media-amazon.com/images/I/61uTH4ll7RL._AC_SL1107_.jpg",
    createdAt: new Date(),
  },
  {
    name: "Whiskas Cat Food Dry Adult 1+ Various Varieties and Sizes",
    description:
      "Complete dry food for adult cats. Specially designed to promote healthy teeth with a texture that provides a gentle abrasion effect to remove plaque and tartar. No artificial colours or flavours. Taurine for a healthy heart. Natural oils for a shiny coat.",
    price: 19.99,
    quantity: 80,
    category: "cats",
    image: "https://m.media-amazon.com/images/I/81MyS1Yg9YL._AC_SL1500_.jpg",
    createdAt: new Date(),
  },
  {
    name: "Venandi Animal Premium Dry Cat Food, Chicken, Grain-Free with Lots of Fresh Meat, 1.5 kg",
    description:
      "Complete food for all breeds: Our cat food is suitable for cats of all ages and for all breeds. Guaranteed: Grain-free, natural cat food with extra high meat content. Our mission: Natural, genuine, original – this is Venandi. This is important to us: Natural ingredients – real raw materials – original compositions.",
    price: 12.89,
    quantity: 80,
    category: "cats",
    image: "https://m.media-amazon.com/images/I/6121mNSicaL._AC_SL1500_.jpg",
    createdAt: new Date(),
  },
  {
    name: "MERA finest fit Indoor Cat Food Dry for Active Cats, Dry Food from Fresh Poultry and Rice, Healthy Food for Domestic Cats, No Sugar",
    description:
      "ust right: the finest fit indoor dry food is tailored to the special needs of domestic cats. So that you can always stay fit and active despite a small range of motion. Delicious: The tasty combination of lots of fresh poultry, rice and forest fruits provides indoor cats with the appropriate energy content for them. In addition, special minerals can prevent the formation of urinary stones.",
    price: 9.59,
    quantity: 80,
    category: "cats",
    image: "https://m.media-amazon.com/images/I/61UhiNBbcbL._AC_SL1500_.jpg",
    createdAt: new Date(),
  },
  {
    name: "Lifelong Complete Cat Food with Grain Free Recipe, beige",
    description:
      "High quality formula with 65% chicken. Veterinarians tested: developed by veterinarians and vetted. Complete food for older cats from 7 years. HYPOALLERGENIC - Contains a single animal protein source (chicken) No added wheat, corn, soy, egg, lactose and gluten.",
    price: 21.99,
    quantity: 80,
    category: "cats",
    image: "https://m.media-amazon.com/images/I/61wYhRezv2L._AC_SL1000_.jpg",
    createdAt: new Date(),
  },
];

const productDataBirds = [
  {
    name: "ERDA® Dried Soldier Fly Larvae, 5 kg, Natural, Protein-Rich Bird Food for Chickens, Wild Birds and Hedgehogs, Ideal as Treats and Snack",
    description:
      "Versatile: perfect as wild bird food, chicken treats and hedgehog snack. Natural & nutritious: 100% natural, dried soldier fly larvae, rich in essential protein. Optimal source of nutrients: provides a balanced blend of proteins, fats and minerals for feeding birds and hedgehogs.",
    price: 24.99,
    quantity: 80,
    category: "birds",
    image: "https://m.media-amazon.com/images/I/71JA+mMV9pL._AC_SL1500_.jpg",
    createdAt: new Date(),
  },
  {
    name: "Eggersmann volaris 30 pieces fat balls protein without net",
    description:
      "For all types of birds: the high-quality fat balls are suitable as bird food for all wild birds. Watch new bird species at your feeding site with our fat balls. Available all year round: whether as bird dumplings for spring, summer, autumn or winter – the versatile ingredients and our fresh production all year round make our dumplings an all-rounder in the theme of wild bird food.",
    price: 13.15,
    quantity: 80,
    category: "birds",
    image: "https://m.media-amazon.com/images/I/619nh8oWKDL._AC_.jpg",
    createdAt: new Date(),
  },
  {
    name: "Dehner Natura Wild Bird Feed, Sprinkle Food in a Bucket",
    description:
      "Selected seeds in classic mix - ideal for year-round feeding. Thanks to fatty peanut kernels and vegetable oil, important energy supplier for birds",
    price: 12.99,
    quantity: 80,
    category: "birds",
    image: "https://m.media-amazon.com/images/I/71Nywaz87-L._AC_SL1280_.jpg",
    createdAt: new Date(),
  },
  {
    name: "Eggersmann Volaris Summer Grains 3 kg | Bird Food Wild Birds All Year Round | Low Fat Content | Ideal for Rearing | Suitable for All Bird Species",
    description:
      "Easy to feed: the food can be easily fed without further mixing. Simply drop out of the bag into the feeder and watch the birds.   Peanut free: in order to minimise the risk of injury to young birds, our summer grains do not contain peanuts.",
    price: 13.19,
    quantity: 80,
    category: "birds",
    image: "https://m.media-amazon.com/images/I/71zLmBzFbfL._AC_SL1500_.jpg",
    createdAt: new Date(),
  },
  {
    name: "Eggersmann volaris 3 kg fat grains, bird food, wild birds all year round, wild bird food for the whole year, high-fat scattered food for all bird species",
    description:
      "Nutrient-rich: the peanuts and greased oats are very energetic thanks to their oil content. This means that the wild birds are well prepared for the cold season. Easy to feed: the food can be easily fed without further mixing. Simply drop out of the bag into the feeder and watch the birds.",
    price: 12.19,
    quantity: 80,
    category: "birds",
    image: "https://m.media-amazon.com/images/I/717OqXsfG4L._AC_SL1500_.jpg",
    createdAt: new Date(),
  },
  {
    name: "Eggersmann Volaris Summer Grains 3 kg | Bird Food Wild Birds All Year Round | Low Fat Content | Ideal for Rearing | Suitable for All Bird Species",
    description:
      "Easy to feed: the food can be easily fed without further mixing. Simply drop out of the bag into the feeder and watch the birds.   Peanut free: in order to minimise the risk of injury to young birds, our summer grains do not contain peanuts.",
    price: 13.19,
    quantity: 80,
    category: "birds",
    image: "https://m.media-amazon.com/images/I/71zLmBzFbfL._AC_SL1500_.jpg",
    createdAt: new Date(),
  },
  {
    name: "Dehner Canary Food with Vitamin Active Complex and Iodine",
    description:
      "bird food for canaries. Made from selected, high-quality seeds. Canary food with vitamin active complex. Contains important iodine. In Dehner brand quality",
    price: 13.99,
    quantity: 80,
    category: "birds",
    image: "https://m.media-amazon.com/images/I/611yFPAcTXL._AC_SL1000_.jpg",
    createdAt: new Date(),
  },
  {
    name: "PANTO Ornamental Bird Food for Canaries, Canary Food 1 kg",
    description:
      "PANTO Special canary food with pluramine. Mix of different millet varieties. Canary seed.Oat kernels. Linseed and hemp seeds and turnips",
    price: 21.99,
    quantity: 80,
    category: "birds",
    image: "https://m.media-amazon.com/images/I/51o0T06KzgL._AC_SL1000_.jpg",
    createdAt: new Date(),
  },
  {
    name: "wildtier liebe Futtertraum I Premium Bird Food Wild Birds All Year Round Shell-free 5 kg",
    description:
      "Free from bowls and natural – Our wildtier liebe Futtertraum shellless scattered food provides valuable energy as a particularly high-fat bird food. The wild bird food contains all important nutrients, vegetable fats, delicious peanuts, shellless sunflower seeds and the finest raisins. Thanks to high-quality ingredients, suitable for year-round feeding",
    price: 26.9,
    quantity: 80,
    category: "birds",
    image: "https://m.media-amazon.com/images/I/71QePmjIZaL._AC_SL1200_.jpg",
    createdAt: new Date(),
  },
  {
    name: "wildtier liebe Futtertraum I Premium Bird Food Wild Birds All Year Round without Wheat 5 kg",
    description:
      "Species-appropriate and natural – Our wildtier liebe Futtertraum scattered food in premium quality without wheat is a particularly nutrient-rich year-round food for wild birds. It consists of high-energy grains, sunflower seeds and peanuts",
    price: 27.9,
    quantity: 80,
    category: "birds",
    image: "https://m.media-amazon.com/images/I/71uwCCHVRjL._AC_SL1200_.jpg",
    createdAt: new Date(),
  },
];
const productDataRodents = [
  {
    name: "petifool Gemüsefarm (vegetable farm), 500 g, supplementary feed for rodents, natural rodent feed for rabbits, guinea pigs, hamsters, chinchilla ",
    description:
      "100% natural: The petifool Gemüsefarm (vegetable farm) consists of carefully selected ingredients such as carrots, pumpkin, raspberry leaves, topinambour, parsnip, dandelion leaves, ribgrass, nettle leaves, spinach stems, dill and parsley stems.",
    price: 6.99,
    quantity: 80,
    category: "rodents",
    image: "https://m.media-amazon.com/images/I/71AN5IhEVAL._AC_SL1500_.jpg",
    createdAt: new Date(),
  },
  {
    name: "petifool Blütenzauber (flower magic), 360 g, supplementary feed for rodents, natural rodent feed for rabbits, guinea pigs, hamsters, chinchilla ",
    description:
      "100% natural: The petifool Blütenzauber (flower magic) consists of carefully selected ingredients such as parsley stems, raspberry leaves, nettle, ribgrass, dandelion, cornflower red and pink.",
    price: 6.99,
    quantity: 80,
    category: "rodents",
    image: "https://m.media-amazon.com/images/I/711zX-Lw4jL._AC_SL1500_.jpg",
    createdAt: new Date(),
  },
  {
    name: "petifool Nager Flora, 430 g, complete feed for rodents, natural rodent feed for rabbits and guinea pigs, no artificial additives",
    description:
      "100% natural. Carefully selected flowers and vegetables. For a strong immune system. For optimal digestion. Grain-free",
    price: 5.99,
    quantity: 80,
    category: "rodents",
    image: "https://m.media-amazon.com/images/I/719V877yM-L._AC_SL1500_.jpg",
    createdAt: new Date(),
  },
  {
    name: "petifool Nager Flora, 430 g, complete feed for rodents, natural rodent feed for rabbits and guinea pigs, no artificial additives,",
    description: "",
    price: 5.99,
    quantity: 80,
    category: "rodents",
    image: "https://m.media-amazon.com/images/I/71rBl-shQwL._AC_SL1500_.jpg",
    createdAt: new Date(),
  },
  {
    name: "petifool Kräuter Oase (herbal oasis), 370 g, supplementary feed for rodents, natural rodent feed for rabbits, guinea pigs, hamsters, chinchilla",
    description:
      "100% natural: The petifool Kräuter-Oase (herbal oasis) consists of carefully selected ingredients such as parsley stems, banana, birch leaves, raspberry leaves, dandelion and hibiscus",
    price: 6.99,
    quantity: 80,
    category: "rodents",
    image: "https://m.media-amazon.com/images/I/71yrajvzj4L._AC_SL1500_.jpg",
    createdAt: new Date(),
  },
  {
    name: "petifool Nager Flora, 430 g, complete feed for rodents, natural rodent feed for rabbits and guinea pigs",
    description:
      "100% natural. Carefully selected flowers and vegetables. For a strong immune system. For optimal digestion. Grain-free",
    price: 5.99,
    quantity: 80,
    category: "rodents",
    image: "https://m.media-amazon.com/images/I/719V877yM-L._AC_SL1500_.jpg",
    createdAt: new Date(),
  },
  {
    name: "Dehner Guinea Pig Food 5kg",
    description:
      "Delicious and healthy: tasty food that covers the daily needs of an adult guinea pig without any sugar. Contains all important vitamins, which strengthens the natural defences and has a positive effect on fur, hair and vitality. The high raw fibre content helps the guinea pigs support natural tooth abrasion and healthy digestion",
    price: 11.99,
    quantity: 80,
    category: "rodents",
    image: "https://m.media-amazon.com/images/I/71A1DfYzFDL._AC_SL1500_.jpg",
    createdAt: new Date(),
  },
  {
    name: "Dehner Rabbit Feed Pellets, Complete Food for Rabbits, Rabbits and Dwarf Rabbits,",
    description:
      "Dry food for rabbits and rabbits. With many minerals and vitamins. Covers the entire need for nutrients. Ideal as a complete food",
    price: 19.16,
    quantity: 80,
    category: "rodents",
    image: "https://m.media-amazon.com/images/I/71Ln0Q5VRqL._AC_SL1500_.jpg",
    createdAt: new Date(),
  },
  {
    name: "Dehner Best Nature Adult Rodent Food, Degu Food",
    description:
      "Inspired by the natural food spectrum of Degus. Grain-free feed mix developed with biologists and veterinarians. With over 25 ingredients such as plants, herbs, vegetables and rapeseed oil",
    price: 15.99,
    quantity: 80,
    category: "rodents",
    image: "https://m.media-amazon.com/images/I/81Fa26rLUnL._AC_SL1500_.jpg",
    createdAt: new Date(),
  },
  {
    name: "R FARM Gemüse-Traum",
    description:
      "Pure natural – a colourful mix of high-quality vegetable and cereals and fragrant parsley. Different structures – made of rings, flakes and cubes, this mixture stimulates different senses and promises a lot of variety in taste.",
    price: 2.39,
    quantity: 80,
    category: "rodents",
    image: "https://m.media-amazon.com/images/I/61Ap5K3UpTL._AC_SL1000_.jpg",
    createdAt: new Date(),
  },
];
[
  {
    name: "petifool Gemüsefarm (vegetable farm), 500 g, supplementary feed for rodents, natural rodent feed for rabbits, guinea pigs, hamsters, chinchilla ",
    description:
      "100% natural: The petifool Gemüsefarm (vegetable farm) consists of carefully selected ingredients such as carrots, pumpkin, raspberry leaves, topinambour, parsnip, dandelion leaves, ribgrass, nettle leaves, spinach stems, dill and parsley stems.",
    price: 6.99,
    quantity: 80,
    category: "rodents",
    image: "https://m.media-amazon.com/images/I/71AN5IhEVAL._AC_SL1500_.jpg",
    createdAt: "2024-04-11T00:00:00.000Z",
  },
  {
    name: "petifool Blütenzauber (flower magic), 360 g, supplementary feed for rodents, natural rodent feed for rabbits, guinea pigs, hamsters, chinchilla ",
    description:
      "100% natural: The petifool Blütenzauber (flower magic) consists of carefully selected ingredients such as parsley stems, raspberry leaves, nettle, ribgrass, dandelion, cornflower red and pink.",
    price: 6.99,
    quantity: 80,
    category: "rodents",
    image: "https://m.media-amazon.com/images/I/711zX-Lw4jL._AC_SL1500_.jpg",
    createdAt: "2024-04-11T00:00:00.000Z",
  },
  {
    name: "petifool Nager Flora, 430 g, complete feed for rodents, natural rodent feed for rabbits and guinea pigs, no artificial additives",
    description:
      "100% natural. Carefully selected flowers and vegetables. For a strong immune system. For optimal digestion. Grain-free",
    price: 5.99,
    quantity: 80,
    category: "rodents",
    image: "https://m.media-amazon.com/images/I/719V877yM-L._AC_SL1500_.jpg",
    createdAt: "2024-04-11T00:00:00.000Z",
  },
  {
    name: "petifool Nager Flora, 430 g, complete feed for rodents, natural rodent feed for rabbits and guinea pigs, no artificial additives,",
    description: "",
    price: 5.99,
    quantity: 80,
    category: "rodents",
    image: "https://m.media-amazon.com/images/I/71rBl-shQwL._AC_SL1500_.jpg",
    createdAt: "2024-04-11T00:00:00.000Z",
  },
  {
    name: "petifool Kräuter Oase (herbal oasis), 370 g, supplementary feed for rodents, natural rodent feed for rabbits, guinea pigs, hamsters, chinchilla",
    description:
      "100% natural: The petifool Kräuter-Oase (herbal oasis) consists of carefully selected ingredients such as parsley stems, banana, birch leaves, raspberry leaves, dandelion and hibiscus",
    price: 6.99,
    quantity: 80,
    category: "rodents",
    image: "https://m.media-amazon.com/images/I/71yrajvzj4L._AC_SL1500_.jpg",
    createdAt: "2024-04-11T00:00:00.000Z",
  },
  {
    name: "petifool Nager Flora, 430 g, complete feed for rodents, natural rodent feed for rabbits and guinea pigs",
    description:
      "100% natural. Carefully selected flowers and vegetables. For a strong immune system. For optimal digestion. Grain-free",
    price: 5.99,
    quantity: 80,
    category: "rodents",
    image: "https://m.media-amazon.com/images/I/719V877yM-L._AC_SL1500_.jpg",
    createdAt: "2024-04-11T00:00:00.000Z",
  },
  {
    name: "Dehner Guinea Pig Food 5kg",
    description:
      "Delicious and healthy: tasty food that covers the daily needs of an adult guinea pig without any sugar. Contains all important vitamins, which strengthens the natural defences and has a positive effect on fur, hair and vitality. The high raw fibre content helps the guinea pigs support natural tooth abrasion and healthy digestion",
    price: 11.99,
    quantity: 80,
    category: "rodents",
    image: "https://m.media-amazon.com/images/I/71A1DfYzFDL._AC_SL1500_.jpg",
    createdAt: "2024-04-11T00:00:00.000Z",
  },
  {
    name: "Dehner Rabbit Feed Pellets, Complete Food for Rabbits, Rabbits and Dwarf Rabbits,",
    description:
      "Dry food for rabbits and rabbits. With many minerals and vitamins. Covers the entire need for nutrients. Ideal as a complete food",
    price: 19.16,
    quantity: 80,
    category: "rodents",
    image: "https://m.media-amazon.com/images/I/71Ln0Q5VRqL._AC_SL1500_.jpg",
    createdAt: "2024-04-11T00:00:00.000Z",
  },
  {
    name: "Dehner Best Nature Adult Rodent Food, Degu Food",
    description:
      "Inspired by the natural food spectrum of Degus. Grain-free feed mix developed with biologists and veterinarians. With over 25 ingredients such as plants, herbs, vegetables and rapeseed oil",
    price: 15.99,
    quantity: 80,
    category: "rodents",
    image: "https://m.media-amazon.com/images/I/81Fa26rLUnL._AC_SL1500_.jpg",
    createdAt: "2024-04-11T00:00:00.000Z",
  },
  {
    name: "R FARM Gemüse-Traum",
    description:
      "Pure natural – a colourful mix of high-quality vegetable and cereals and fragrant parsley. Different structures – made of rings, flakes and cubes, this mixture stimulates different senses and promises a lot of variety in taste.",
    price: 2.39,
    quantity: 80,
    category: "rodents",
    image: "https://m.media-amazon.com/images/I/61Ap5K3UpTL._AC_SL1000_.jpg",
    createdAt: "2024-04-11T00:00:00.000Z",
  },
];
