export interface MenuItem {
  name: string;
  description: string;
  price: string;
  category: 'Appetizer' | 'Main' | 'Dessert' | 'Wine';
  image?: string;
}

export const FEATURED_DISHES: MenuItem[] = [
  {
    name: "Beef Kebab",
    description: "Beef souvlaki and turkish kofte baked together with mediterranean rice in our signature laffa dough",
    price: "1099",
    category: 'Main',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGKqji9_TVPtJkzUvmwLQ0ByLoSRLMM7gQRtYc2eUBG-6NMJzPab2Uncn5NnXD5KXc4R5RDOFoabLVVV7Cha676xlvraSNO1Qn_wP6-g&s=10"
  },
  {
    name: "Turkish Kofte",
    description: "Featuring juicy, spiced beef meatballs in warm pita or laffa bread, topped with vegetables and a tangy yougurt sauce",
    price: "590",
    category: 'Appetizer',
    image: "https://www.venturists.net/wp-content/uploads/2015/09/turkish-kofte-735x1042.jpg"
  },
  {
    name: "Mixed Kebab Platter",
    description: "Our kebab platter serves 5-7 people with a mouthwatering selection of skewered meats, fresh vegeratbles, and flavorful sides",
    price: "3400",
    category: 'Main',
    image: "https://www.reddit.com/media?url=https%3A%2F%2Fpreview.redd.it%2Fi-ate-mixed-kebab-platter-v0-orlo03zzsgp91.jpg%3Fwidth%3D1080%26crop%3Dsmart%26auto%3Dwebp%26s%3Db702a1287f9461b78a409038f0d5c52f61045863"
  }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    name: "Hummus",
    description: "Silky smooth hummus made from slow-cooked chickpeas, whipped with tahini, fresh lemon, and roasted garlic. Topped with extra virgin olive oil and a hint of paprika, served with warm, soft pita.",
    price: "400",
    category: 'Appetizer',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRqcBsP6Y0kHrVnJ2E2JN6l_Fp9nWf_RyWX3f_hjjFrda8nap-9vqI3S16FsgkxKIu5q59MFe9IjBII4yytRMWB5Codl_D92JOOHpgJQ&s=10"
  },
  {
    name: "Salads",
    description: "Enjoy our freshly prepared salads made with high-quality ingredients and vibrant flavors, available starting at just ₱450, perfect for a light, healthy, and satisfying meal any time of the day.",
    price: "450",
    category: 'Appetizer',
    image: "https://cdn.loveandlemons.com/wp-content/uploads/2019/07/salad-580x845.jpg"
  },
  {
    name: "Herb-Crusted Lamb Rack",
    description: "New Zealand lamb, pistachio crust, mint pea purée, and red wine reduction.",
    price: "$42",
    category: 'Main',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGrOoXvEnsMTIicpK0a9gOLfLaaqTaHDqxFNNAjau7oIYxGDXsC8kjnqg&s=10"
  },
  {
    name: "Wild Mushroom Risotto",
    description: "Arborio rice, porcini mushrooms, truffle oil, and 24-month aged Parmesan.",
    price: "$32",
    category: 'Main',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8kHff5G_HT-Nu4qgWeV7pdAy0j6FkAEmj3Cr9LdkGo3jkJdCTxZop3OE&s=10"
  },
  {
    name: "Pan-Seared Sea Bass",
    description: "Fresh sea bass, saffron velouté, wilted spinach, and roasted cherry tomatoes.",
    price: "$38",
    category: 'Main',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvX-RE2CttMOp46X4TFO4V8YUKgT_U06cGRcpvHFTHsaakcS7w2uvzbe4&s=10"
  },
  {
    name: "Deconstructed Tiramisu",
    description: "Espresso-soaked ladyfingers, mascarpone cream, and dark chocolate shavings.",
    price: "$14",
    category: 'Dessert',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_da76eVwywTdQQTa0KunlkHsGihnPP7pg6Dj1fXCFiFXWJUBQPZfwp-FW&s=10"
  },
  {
    name: "Olive Oil Cake",
    description: "Moist citrus-infused cake made with our signature olive oil, served with honey gelato.",
    price: "$12",
    category: 'Dessert',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwJI-k6hhC2BPvwjsKCtKlu_-ZqE1jQZURsS2_pUxNcQMblUgHiMFxM1c&s=10"
  },
  {
    name: "Mediterranean Sea Bream",
    description: "Wild-caught sea bream, lemon herb butter, roasted seasonal vegetables.",
    price: "$36",
    category: 'Main',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnh1oiRJ11ijRaOZKrQuBXxQLAI3blHGYte6EFKF1sKN7VL0hfu_NIolmo&s=10"
  }
];

export const GALLERY_IMAGES = [
  "https://scontent-mnl3-1.xx.fbcdn.net/v/t39.30808-6/501059101_122223723950191822_6357578249043425348_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeEyuuuz6ezEehakxc7ntcDNQffkauwlwjFB9-Rq7CXCMSezTs8dAfOUzAskGJbPyAz1Muws6UaFiJVEqfAYPRWu&_nc_ohc=uS0DSwKv9iQQ7kNvwEH_JNL&_nc_oc=AdoOZnff1BXT6bm7cAYgBV-b0l7GSL-j7ozgFfCAIy52ni6cLHjQtiEH8lRCMYor9AQ&_nc_zt=23&_nc_ht=scontent-mnl3-1.xx&_nc_gid=a2DLSTi4q7f937zjR5HJmw&_nc_ss=7a3a8&oh=00_Af0DO98P24KrRqTRoubk36oMFYudpKsWqi8E6yFoSIUJ5w&oe=69D24537",
  "https://scontent-mnl3-3.xx.fbcdn.net/v/t39.30808-6/495054248_122219450570191822_1476827413853996036_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeEpTuhclRg6t112xt1ZOchLmS7Od0_SWxCZLs53T9JbEFKSV_np6s3sGo_xtiDZ8lHe529ugxPvQJVz_sGeZQLy&_nc_ohc=iHVe6hVof24Q7kNvwGdAWvo&_nc_oc=Adq-ICIkwJ2toM-9Du6IPbjc5oMlOi3WP5uMmkISu8HEXnqvrQp500DfFZaye6sAMgQ&_nc_zt=23&_nc_ht=scontent-mnl3-3.xx&_nc_gid=uzKThDrxhP1lwENmHFvCXw&_nc_ss=7a3a8&oh=00_Af3gBi8m2r5ZPaz3AxcdZ_mm-OPf9o3O4nZQ0rqCPMS5Xg&oe=69D25A11",
  "https://scontent-mnl3-1.xx.fbcdn.net/v/t39.30808-6/495572879_122219447258191822_5826135351766115202_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeG3_BjLh3sByJ3BLo0AYENCq81yIAUC4-irzXIgBQLj6NSkyFtwQw-eHHkICMh7R36dYbLFLolY088pmJmjbL1V&_nc_ohc=i1EV3EXWC4sQ7kNvwH6Er1E&_nc_oc=AdqyPMR4pHbozCRfm86E56NDtcYEhThTlXosRVUrmiQjGCky1hDFJV_DRNjzCAIuudI&_nc_zt=23&_nc_ht=scontent-mnl3-1.xx&_nc_gid=-VRJeL9h2QTx89qbg-Zy2w&_nc_ss=7a3a8&oh=00_Af10ejKj-ngEQhuKeoPz4Fr2i3TT3Wqa6Iau0UxMzCfa_g&oe=69D244CB",
  "https://scontent-mnl1-2.xx.fbcdn.net/v/t39.30808-6/495581186_122219442452191822_6134480055851507645_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGVGi7QZEAsIaG2YWDAlrO877O2ILaJPxXvs7Ygtok_FWl3XAVyT7ix-Fan7L_iSOzHp96J9H8FNZHoeBq0efcQ&_nc_ohc=3gaIvnjMRA4Q7kNvwGCLy5C&_nc_oc=Adp4yua3UeTcFANFY7g8t20u4ZRxWLUYIQFevoynVZT4wPuaTA5Oqo8QZ5oaT-A4WVw&_nc_zt=23&_nc_ht=scontent-mnl1-2.xx&_nc_gid=C2mWAnQT3Q9A7XTPPb-FeA&_nc_ss=7a3a8&oh=00_Af15oKehragS8bIwbIDe4InIlPVUlGZTwVHmIpVScSyMXA&oe=69D236DD",
  "https://scontent-mnl3-2.xx.fbcdn.net/v/t39.30808-6/495539570_122219442380191822_6901938044788524712_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHFXLcPbgpBdZS8Mvo1m8xkcoOnW1aETFNyg6dbVoRMUxa6ck6pKBtnjBFv0BiRtPTFcfjnCca_t-D9PmjVqSs9&_nc_ohc=fVTDOZ8v0CMQ7kNvwF6lpd7&_nc_oc=AdqyX4aaqqYVQjeXuF8Ck1iU3o9i_CddnDyV8krq_djXgOFZKFajOIjYbzgjtt-vHi8&_nc_zt=23&_nc_ht=scontent-mnl3-2.xx&_nc_gid=z139qKp0l-IWwwd7EbwikA&_nc_ss=7a3a8&oh=00_Af2jG-hHgoKluUxGv1oi5R9xkQbmdDOOam4r0ez0zUPMJA&oe=69D261EE",
  "https://scontent-mnl1-2.xx.fbcdn.net/v/t39.30808-6/495541040_122219442320191822_5741271857760555914_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeF6ChecibcdBUlTUfTdmTrasOQDaD_6ahyw5ANoP_pqHOWK22mPl4VqEKskWhNXPvZClUGR-e67OwIowq-EcBRk&_nc_ohc=-JVTeFHjGR0Q7kNvwH-HKvj&_nc_oc=AdrtHf8KpJEmR1wIwCblY2a1eOcIi5vPBSB7KDKOrj-f2_3Rmz-Jood0GvwfY3-uhcs&_nc_zt=23&_nc_ht=scontent-mnl1-2.xx&_nc_gid=R_lt-PEXDxt0EYm0S5Mdiw&_nc_ss=7a3a8&oh=00_Af2pxWDdSWwrtcZ02Hav8rOkYcgRXKBVXBVnqqxqZyR_nw&oe=69D23C03"
];
