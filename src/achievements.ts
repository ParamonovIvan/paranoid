export interface Achievement {
  date: string;
  event: string;
  result: string;
  location: string;
  medal?: "gold" | "silver" | "bronze" | "special";
}

export const achievements: Achievement[] = [
  {
    date: "16.02.2019",
    event: "IV фестиваль домашнего пивоварения",
    result: "участник",
    location: "г. Екатеринбург"
  },
  {
    date: "14.09.2019",
    event: "VII фестиваль домашнего пивоварения",
    result: "участник",
    location: "г. Санкт-Петербург"
  },
  {
    date: "15.12.2019",
    event: "II слёт домашних пивоваров и малых пивоварен",
    result: "участник, специальный диплом, отмеченный судьями",
    location: "г. Киров",
    medal: "special"
  },
  {
    date: "29.02.2020",
    event: "V фестиваль домашнего пивоварения",
    result: "1 место – Лучшая этикетка фестиваля",
    location: "г. Екатеринбург",
    medal: "gold"
  },
  {
    date: "20.08.2020",
    event: "I конкурс Best Brewmaster Award",
    result: "2 место в категории, пиво Strong Scotch Ale",
    location: "г. Санкт-Петербург",
    medal: "silver"
  },
  {
    date: "15.11.2020",
    event: "I общенациональный конкурс домашних пивоваров Brewcom",
    result: "участник",
    location: "г. Санкт-Петербург"
  },
  {
    date: "13.12.2020",
    event: "III слёт домашних пивоваров и малых пивоварен",
    result: "2 место, пиво Strong Scotch Ale",
    location: "г. Киров",
    medal: "silver"
  },
  {
    date: "01.11.2021",
    event: "V всероссийский конкурс пивоваренной продукции «РОСГЛАВПИВО»",
    result: "серебряная медаль, пиво London Porter",
    location: "г. Москва",
    medal: "silver"
  },
  {
    date: "19.11.2021",
    event: "II общенациональный конкурс домашних пивоваров Brewcom",
    result: "участник",
    location: "г. Санкт-Петербург"
  },
  {
    date: "27.11.2021",
    event: "IV слёт домашних пивоваров и малых пивоварен",
    result: "участник, 4 место",
    location: "г. Киров"
  },
  {
    date: "12.03.2022",
    event: "VI фестиваль домашнего пивоварения",
    result: "1 место – Лучшая этикетка фестиваля",
    location: "г. Екатеринбург",
    medal: "gold"
  },
  {
    date: "27.08.2022",
    event: "VI Прикамский фестиваль малых пивоварен Craft Fair",
    result: "участник",
    location: "г. Ижевск"
  },
  {
    date: "26.11.2022",
    event: "V слёт домашних пивоваров и малых пивоварен",
    result: "участник, 5 место",
    location: "г. Киров"
  },
  {
    date: "15.03.2023",
    event: "VI всероссийский конкурс пивоваренной продукции «РОСГЛАВПИВО»",
    result: "бронзовая медаль, пиво Imperial Brow Stout",
    location: "г. Москва",
    medal: "bronze"
  },
  {
    date: "16.09.2023",
    event: "VIII фестиваль домашнего пивоварения",
    result: "специальный диплом Best Dark Style Beer, пиво Cumberland Imperial Stout",
    location: "г. Санкт-Петербург",
    medal: "special"
  },
  {
    date: "18.11.2023",
    event: "IV общенациональный конкурс домашних пивоваров Brewcom",
    result: "3 место, категория Irish Extra Stout",
    location: "г. Санкт-Петербург",
    medal: "bronze"
  },
  {
    date: "08.02.2024",
    event: "VII всероссийский конкурс пивоваренной продукции «РОСГЛАВПИВО»",
    result: "серебряная медаль, категория Imperial Stout",
    location: "г. Москва",
    medal: "silver"
  },
  {
    date: "17.11.2024",
    event: "V общенациональный конкурс домашних пивоваров Brewcom",
    result: "участник",
    location: "г. Санкт-Петербург"
  },
  {
    date: "15.11.2025",
    event: "VI общенациональный конкурс домашних пивоваров Brewcom",
    result: "участник",
    location: "г. Санкт-Петербург"
  }
];