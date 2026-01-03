const products = [
  // --- DECOR (30 Items) ---
  {
    id: 1,
    name: "Ocean Wave Resin Coasters",
    price: 450,
    category: "Decor",
    description:
      "Set of 4 blue resin coasters with real sand and shell details.",
    image:
      "https://images.pexels.com/photos/4203098/pexels-photo-4203098.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    name: "Macrame Plant Hanger",
    price: 550,
    category: "Decor",
    description: "Bohemian-style cotton macrame hanger for indoor plants.",
    image:
      "https://images.pexels.com/photos/3653131/pexels-photo-3653131.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    name: "Scented Soy Candle",
    price: 350,
    category: "Decor",
    description: "Hand-poured vanilla soy candle in a reusable glass jar.",
    image:
      "https://images.pexels.com/photos/374767/pexels-photo-374767.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 4,
    name: "Pressed Flower Frame",
    price: 750,
    category: "Decor",
    description:
      "Minimalist glass frame featuring hand-pressed spring flowers.",
    image:
      "https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 5,
    name: "Terracotta Flower Pot",
    price: 299,
    category: "Decor",
    description: "Hand-painted clay pot perfect for succulents.",
    image:
      "https://images.pexels.com/photos/4505167/pexels-photo-4505167.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 6,
    name: "Woven Wall Tapestry",
    price: 2400,
    category: "Decor",
    description: "Large fiber art piece using wool and cotton textures.",
    image:
      "https://images.pexels.com/photos/6323447/pexels-photo-6323447.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 7,
    name: "Resin Geode Wall Art",
    price: 2500,
    category: "Decor",
    description: "Abstract wall art made with crystal-infused resin.",
    image:
      "https://images.pexels.com/photos/6323447/pexels-photo-6323447.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 8,
    name: "Ceramic Incense Holder",
    price: 250,
    category: "Decor",
    description: "Earthy ceramic tray for incense sticks.",
    image:
      "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 9,
    name: "Woolen Knitted Blanket",
    price: 3500,
    category: "Decor",
    description: "Chunky knit throw for bedrooms or sofas.",
    image:
      "https://images.pexels.com/photos/1392518/pexels-photo-1392518.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 10,
    name: "Hand-Painted Ceramic Tile",
    price: 450,
    category: "Decor",
    description: "Decorative tile with traditional floral patterns.",
    image:
      "https://images.pexels.com/photos/305821/pexels-photo-305821.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 11,
    name: "Dried Lavender Bunch",
    price: 280,
    category: "Decor",
    description: "Fragrant dried lavender tied with twine.",
    image:
      "https://images.pexels.com/photos/3762410/pexels-photo-3762410.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 12,
    name: "Woven Wicker Basket",
    price: 850,
    category: "Decor",
    description: "Sturdy basket for storage or room organization.",
    image:
      "https://images.pexels.com/photos/3119180/pexels-photo-3119180.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 13,
    name: "Resin Moon Lamp",
    price: 1200,
    category: "Decor",
    description: "Handmade resin lamp that glows with a soft lunar light.",
    image:
      "https://images.pexels.com/photos/374767/pexels-photo-374767.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 14,
    name: "Hand-Forged Wall Hook",
    price: 300,
    category: "Decor",
    description: "Rustic iron hook for coats or bags.",
    image:
      "https://images.pexels.com/photos/2014704/pexels-photo-2014704.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 15,
    name: "Alcohol Ink Art Frame",
    price: 1100,
    category: "Decor",
    description: "Vibrant abstract art created with alcohol inks.",
    image:
      "https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  // ... (Repeat for 15 more decor items)

  // --- ACCESSORIES (40 Items) ---
  {
    id: 31,
    name: "Gold Leaf Resin Keychain",
    price: 150,
    category: "Accessories",
    description: "Clear resin initial keychain with 24k gold leaf.",
    image:
      "https://images.pexels.com/photos/1194036/pexels-photo-1194036.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 32,
    name: "Pressed Flower Earrings",
    price: 380,
    category: "Accessories",
    description: "Real dried flowers preserved in resin teardrops.",
    image:
      "https://images.pexels.com/photos/1164985/pexels-photo-1164985.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 33,
    name: "Hand-Printed Tote Bag",
    price: 450,
    category: "Accessories",
    description: "Canvas tote with a screen-printed botanical design.",
    image:
      "https://images.pexels.com/photos/1117272/pexels-photo-1117272.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 34,
    name: "Silk Hair Scrunchie",
    price: 150,
    category: "Accessories",
    description: "Soft silk scrunchie to prevent hair breakage.",
    image:
      "https://images.pexels.com/photos/5815945/pexels-photo-5815945.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 35,
    name: "Leather Coin Pouch",
    price: 450,
    category: "Accessories",
    description: "Hand-stitched pouch made from recycled leather.",
    image:
      "https://images.pexels.com/photos/4452533/pexels-photo-4452533.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 36,
    name: "Braided Leather Bracelet",
    price: 400,
    category: "Accessories",
    description: "Unisex leather bracelet with a magnetic clasp.",
    image:
      "https://images.pexels.com/photos/4588052/pexels-photo-4588052.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 37,
    name: "Silver Stamped Ring",
    price: 1200,
    category: "Accessories",
    description: "Adjustable silver ring with custom initials.",
    image:
      "https://images.pexels.com/photos/157827/pexels-photo-157827.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 38,
    name: "Beaded Boho Necklace",
    price: 550,
    category: "Accessories",
    description: "Hand-beaded necklace with turquoise stones.",
    image:
      "https://images.pexels.com/photos/846781/pexels-photo-846781.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 39,
    name: "Resin Phone Grip",
    price: 250,
    category: "Accessories",
    description: "Glittery resin stand for your smartphone.",
    image:
      "https://images.pexels.com/photos/1035678/pexels-photo-1035678.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 40,
    name: "Macrame Keychain",
    price: 150,
    category: "Accessories",
    description: "Cotton rope keychain with wooden beads.",
    image:
      "https://images.pexels.com/photos/1194036/pexels-photo-1194036.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 41,
    name: "Copper Wire Earrings",
    price: 380,
    category: "Accessories",
    description: "Hand-hammered copper loops.",
    image:
      "https://images.pexels.com/photos/1164985/pexels-photo-1164985.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 42,
    name: "Crochet Bucket Hat",
    price: 599,
    category: "Accessories",
    description: "Retro bucket hat hand-crocheted for students.",
    image:
      "https://images.pexels.com/photos/1420311/pexels-photo-1420311.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 43,
    name: "Resin Hair Clips",
    price: 299,
    category: "Accessories",
    description: "Set of 2 pearlescent resin hair clips.",
    image:
      "https://images.pexels.com/photos/5815945/pexels-photo-5815945.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  // ... (Repeat for 27 more accessories)

  // --- STATIONERY (30 Items) ---
  {
    id: 71,
    name: "Leather Bound Journal",
    price: 1100,
    category: "Stationery",
    description: "A5 journal with handmade deckled-edge paper.",
    image:
      "https://images.pexels.com/photos/606541/pexels-photo-606541.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 72,
    name: "Watercolor Postcards",
    price: 200,
    category: "Stationery",
    description: "Set of 5 hand-painted scenic cards.",
    image:
      "https://images.pexels.com/photos/4442111/pexels-photo-4442111.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 73,
    name: "Recycled Paper Notebook",
    price: 350,
    category: "Stationery",
    description: "Eco-friendly notebook made from organic waste.",
    image:
      "https://images.pexels.com/photos/372748/pexels-photo-372748.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 74,
    name: "Origami Paper Crane Set",
    price: 90,
    category: "Stationery",
    description: "Hand-folded cranes for desk decor or gifts.",
    image:
      "https://images.pexels.com/photos/4009401/pexels-photo-4009401.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 75,
    name: "Resin Bookmark",
    price: 200,
    category: "Stationery",
    description: "Transparent resin bookmark with dried flower petals.",
    image:
      "https://images.pexels.com/photos/372748/pexels-photo-372748.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 76,
    name: "Hand-Drawn Stickers",
    price: 120,
    category: "Stationery",
    description: "Pack of 10 vinyl stickers featuring original art.",
    image:
      "https://images.pexels.com/photos/4442111/pexels-photo-4442111.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 77,
    name: "Wooden Pencil Holder",
    price: 450,
    category: "Stationery",
    description: "Carved oak wood holder for desk organization.",
    image:
      "https://images.pexels.com/photos/3927233/pexels-photo-3927233.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 78,
    name: "Personalized Wax Seal Kit",
    price: 850,
    category: "Stationery",
    description: "Includes a custom brass stamp and three wax sticks.",
    image:
      "https://images.pexels.com/photos/606541/pexels-photo-606541.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 79,
    name: "Hand-Inked Calligraphy Set",
    price: 1200,
    category: "Stationery",
    description: "Glass dip pen and 3 bottles of premium ink.",
    image:
      "https://images.pexels.com/photos/606541/pexels-photo-606541.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 80,
    name: "Abstract Planner Tabs",
    price: 150,
    category: "Stationery",
    description: "Colorful resin tabs to organize your academic planner.",
    image:
      "https://images.pexels.com/photos/372748/pexels-photo-372748.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  // ... (Repeat for 20 more stationery items)
];

export default products;
