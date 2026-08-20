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
    image: "https://scontent-mnl3-1.xx.fbcdn.net/v/t39.30808-6/638249487_122270185898191822_8415847969614965485_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGZ5XDRwa40Dt4BkOWBuivnAL72tuQBZ3UAvva25AFndZXoBHdS9B2YFg3eNK0eXYiMorW_fkAJUA9umsvobC8n&_nc_ohc=J4Ctyb4xsFIQ7kNvwEpQe17&_nc_oc=Adp-cFyQ1WZ_ApguN9gqfBpuZoSWpZ_MG04ihW-3g-4Qer6ZSSEly4ElMURjRjbyoQA&_nc_zt=23&_nc_ht=scontent-mnl3-1.xx&_nc_gid=gD2z9l3MmKhOI_e3nREoxA&_nc_ss=7a3a8&oh=00_Af0BsPijNkhdTF9Z6vdp0SvcjN68FFyiOnSmXkWnilVzPg&oe=69D249BE"
  },
  {
    name: "Mixed Kebab Platter",
    description: "Our kebab platter serves 5-7 people with a mouthwatering selection of skewered meats, fresh vegeratbles, and flavorful sides",
    price: "3400",
    category: 'Main',
    image: "https://scontent-mnl1-2.xx.fbcdn.net/v/t39.30808-6/478990831_122201809514191822_3708292385992647597_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeE9Gm0vl-hTy5YCo0u4YvkMMmXrq8pMwFMyZeurykzAU7l0j_gAgUMJe5BBXygYiNUgHP9VSDo9ECaX-j5oZypX&_nc_ohc=y7IjrUFqA4AQ7kNvwFYUn8g&_nc_oc=AdofxlR3AuMEw7aXlLmjo2Zp0VejlRt0Y04txAJIkd62fsSVjQtGPO8ZU6Zb4U1Jt34&_nc_zt=23&_nc_ht=scontent-mnl1-2.xx&_nc_gid=CmD5mTsj8YfQhLX9DLB6YQ&_nc_ss=7a3a8&oh=00_Af0ruw3sJDYMZIYoTS3JeRcmSmC7cGW6l2sQPxmBEaPSow&oe=69D23C2C"
  }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    name: "Hummus",
    description: "Silky smooth hummus made from slow-cooked chickpeas, whipped with tahini, fresh lemon, and roasted garlic. Topped with extra virgin olive oil and a hint of paprika, served with warm, soft pita.",
    price: "400",
    category: 'Appetizer',
    image: "https://scontent-mnl3-2.xx.fbcdn.net/v/t39.30808-6/480521667_122202341294191822_3440571038207868985_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEPq0F2p38VK2fZFampqp8c6iv1Ka03pWfqK_UprTelZw7-bH8dlqnyDO3AXzJ3PZyfKh_7hbNWDI4FaK9lcJUy&_nc_ohc=LXTLozQVSGEQ7kNvwFKqMw7&_nc_oc=AdozhhtedQwXoKCp1vEMhDT5W16zLPHKttMYyLZmpQn0O01bhGL5ZAJwChvHmWZjeAQ&_nc_zt=23&_nc_ht=scontent-mnl3-2.xx&_nc_gid=Ilyhw3c5ImwTcCTK3zhpOw&_nc_ss=7a3a8&oh=00_Af3Yh5JnIMzjngusSoOuzqKiAMCHAmqbPb_gESbpH0mE2Q&oe=69D247E3"
  },
  {
    name: "Salads",
    description: "Enjoy our freshly prepared salads made with high-quality ingredients and vibrant flavors, available starting at just ₱450, perfect for a light, healthy, and satisfying meal any time of the day.",
    price: "450",
    category: 'Appetizer',
    image: "https://scontent-mnl1-2.xx.fbcdn.net/v/t39.30808-6/480483574_122202341306191822_7011932957307032142_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHdDI6N-WchiI83ANDFMwQ1tFNVNC6Mf360U1U0Lox_fku5lMmNrpPC-xz30cFZAE17cL3ueloWFAbx30pVmStZ&_nc_ohc=XhALhJaUe6QQ7kNvwGmigC6&_nc_oc=Ado5zE_q3OZnK98gwuWcfEK-TN3hSKv3WyjWyv3qb5fi_yZG7fVoALPH3rSulWJqtCQ&_nc_zt=23&_nc_ht=scontent-mnl1-2.xx&_nc_gid=Wv-xVhGpyq2VCTuIaFoOlA&_nc_ss=7a3a8&oh=00_Af09hq2OJBlj3iaT4bbHWcl-CXQxOqhOl0J9iuX-j3Q2Pg&oe=69D251E4"
  },
  {
    name: "Herb-Crusted Lamb Rack",
    description: "New Zealand lamb, pistachio crust, mint pea purée, and red wine reduction.",
    price: "$42",
    category: 'Main',
    image: "https://scontent-mnl3-3.xx.fbcdn.net/v/t39.30808-6/480135905_122202341300191822_792622868297262658_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEO7-fzStYiWoazcKzoZbOV6o4S5Imx_rXqjhLkibH-tfFuj_5kRj9_40qrgJCb-eebW2U7ygFp9vWMaKJfKvbK&_nc_ohc=9ONrITy9CJ0Q7kNvwGvWbQB&_nc_oc=AdoeEA2ANOGPI1K4pDQ13CVyffZCNJBC3Wwc0VuF7_d6ZESKJFf9tyzpzebSxJb3fto&_nc_zt=23&_nc_ht=scontent-mnl3-3.xx&_nc_gid=jyqbNYUWvAVGEj_9qtcYZw&_nc_ss=7a3a8&oh=00_Af0dOE3XPAI8jiWFDCfFklMI5rgOSviLIhwcG3fD5akaWg&oe=69D22D26"
  },
  {
    name: "Wild Mushroom Risotto",
    description: "Arborio rice, porcini mushrooms, truffle oil, and 24-month aged Parmesan.",
    price: "$32",
    category: 'Main',
    image: "https://scontent-mnl3-1.xx.fbcdn.net/v/t39.30808-6/480414339_122202341288191822_5048450061002570922_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHBrddi44s7AtfWkRrpVPFUWLt5bhLjzsBYu3luEuPOwH2-yJZpd8FgKAj_eFTHHVjl3PxeTeGPXayw588wNa0N&_nc_ohc=YdyxSIB0SFwQ7kNvwH9mSc5&_nc_oc=AdpggDGbmLedHhPBlD9LxULnDtlJvoki6XypQyUn431rPQARKQFj328sZaNyaGymFK8&_nc_zt=23&_nc_ht=scontent-mnl3-1.xx&_nc_gid=iRXwSyTEKBgwkNlqt947gw&_nc_ss=7a3a8&oh=00_Af2keQ19nnZ3OKFFRcJyYhhOSMmdUsihV_Gea8A1PmU7mQ&oe=69D22ECF"
  },
  {
    name: "Pan-Seared Sea Bass",
    description: "Fresh sea bass, saffron velouté, wilted spinach, and roasted cherry tomatoes.",
    price: "$38",
    category: 'Main',
    image: "https://scontent-mnl3-3.xx.fbcdn.net/v/t39.30808-6/480695220_122202341276191822_983624238482956356_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHxEcDfgPsEsvXYceIYfTNCXGCwEOqxYXVcYLAQ6rFhdRisy3bVEI3eQyVBtSiXe2YrnJliTPWghP2bcRDS4vQk&_nc_ohc=ppawhBr5sn4Q7kNvwGWnC_C&_nc_oc=AdpGnQ6QXdf5k4oGMx8dFNlacQ3sdw5cQ-MTaFStqjAzYkLGThAecm-sz_jFVsbMY80&_nc_zt=23&_nc_ht=scontent-mnl3-3.xx&_nc_gid=qmysJHWHfAONJh419pLuCw&_nc_ss=7a3a8&oh=00_Af24LqtwG1zzJjtIcMD5Hy0oehveQCmlqMdIsrgWLLBJxQ&oe=69D25A20"
  },
  {
    name: "Deconstructed Tiramisu",
    description: "Espresso-soaked ladyfingers, mascarpone cream, and dark chocolate shavings.",
    price: "$14",
    category: 'Dessert',
    image: "https://scontent-mnl3-3.xx.fbcdn.net/v/t39.30808-6/480298756_122202341282191822_4140270460377829612_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGbMAEQkHDzqmFAqy-HbpEuR9DA1FSCIc9H0MDUVIIhzzZxmguz1jlyvTrX1ycxYROa3Os9Z_HGv0P8CKV7gNuX&_nc_ohc=6CvfUlWmvTEQ7kNvwG3n0u3&_nc_oc=AdpzkWrKbTZJmTVs9FzOtI5kR1cE-iky26hBvWNJaPtUYe6ul431d6BhemH5dpsYhXM&_nc_zt=23&_nc_ht=scontent-mnl3-3.xx&_nc_gid=q3CnFqXC5-5kvz720nqfkA&_nc_ss=7a3a8&oh=00_Af3HAPDCAa02jAb_F_Rm80QDV_84nBU2-D6VQg8WWOv1Cw&oe=69D25E41"
  },
  {
    name: "Olive Oil Cake",
    description: "Moist citrus-infused cake made with our signature olive oil, served with honey gelato.",
    price: "$12",
    category: 'Dessert',
    image: "https://scontent-mnl1-1.xx.fbcdn.net/v/t39.30808-6/480282231_122202341270191822_1192799467026015245_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHtLWX-LYwVosR6tw2XnjcpxTn5di4HpHbFOfl2Lgekdq91zpAulfROyZbGGTHRnDpMDJ6hifZBXepPnCKO_SoE&_nc_ohc=W7LxfgNS2Q0Q7kNvwHCWQ0K&_nc_oc=AdrOvykTSnBZVBROYYxJ-xct3JOO67jp7SL-QsuNbz20ZflC1IfgmbMWP1TtTSGTmbg&_nc_zt=23&_nc_ht=scontent-mnl1-1.xx&_nc_gid=zj1vMz2zevyS3OD4Xj5MQg&_nc_ss=7a3a8&oh=00_Af3lEnEDhF2AS-AAZ_UM8Ubc5nPUFjZviAKFXzcZryFCow&oe=69D231EF"
  },
  {
    name: "Mediterranean Sea Bream",
    description: "Wild-caught sea bream, lemon herb butter, roasted seasonal vegetables.",
    price: "$36",
    category: 'Main',
    image: "https://scontent-mnl1-2.xx.fbcdn.net/v/t39.30808-6/480300684_122202341264191822_5770043459776242047_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHiW_RaXTnCJODzkYbz9DyxHMDVVqJ0hV8cwNVWonSFX9pfly6ggfmXZPmuwv0VojdGhQhd1niZVWqAbbnOgVWM&_nc_ohc=U8GVtz0CJeUQ7kNvwHyWN-l&_nc_oc=AdpaijM64ChqB5u0j7wFrOhhhEDmtl0rkadScveV-F9baoEwJDCnCLhJ-bnFIce3Vuk&_nc_zt=23&_nc_ht=scontent-mnl1-2.xx&_nc_gid=q5yp0D3COYEeHtAIVi-01A&_nc_ss=7a3a8&oh=00_Af13DP0MFwplg8LQaSVSeCsVr2tJLzymPgwLohSMrG8I4w&oe=69D24061"
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
