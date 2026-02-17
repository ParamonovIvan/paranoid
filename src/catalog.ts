import type { Product } from "./types/product.ts";
import cherryStrongWildImage from "./images/strong-series/cherry-strong-wild.png";
import mondaySucksImage from "./images/season-beer/monday_sucks.jpg";
import braggotPorterHotImage from "./images/strong-series/braggot_porter_hot.png";
import americanBwImage from "./images/8th-birthday/american_bw.png";
import grapeAmericanBwImage from "./images/8th-birthday/grape_american_bw.png";
import mapleEnglishBwImage from "./images/8th-birthday/maple_english_bw.png";
import ryeWineImage from "./images/8th-birthday/rye_wine.png";
import grapeRyeWineImage from "./images/8th-birthday/grape_rye_wine.png";
import oatWineImage from "./images/8th-birthday/oat_wine.png";
import vanillaOatWineImage from "./images/8th-birthday/vanilla_oat_wine.png";
import imperialStoutImage from "./images/8th-birthday/imperial_stout.png";
import cumberlandImperialStoutImage from "./images/8th-birthday/cumberland_imperial_stout.png";
import raspberryWildImage from "./images/season-beer/raspberry_wild.png";
import cherryWildAleImage from "./images/season-beer/cherry_wild.png";
import strawberryWildImage from "./images/season-beer/strawberry_wild.png";
import wheatWineImage from "./images/8th-birthday/wheat_wine.png";
import ddhWheatWineImage from "./images/8th-birthday/ddh_wheat_wine.png";
import buckWheatWineImage from "./images/8th-birthday/buckwheat_wine.png";
import buckWheatWineHoneyImage from "./images/8th-birthday/buckwheat_wine_honey.png";
import bhutsEmbraceImage from "./images/pepper-sauces/bhuts_embrace.png";
import sunCasketImage from "./images/pepper-sauces/sun_casket.png";
import widowsJamImage from "./images/pepper-sauces/widows_jam.png";
import abbeyAleImage from "./images/season-beer/abbey_ale.png";
import blondeImage from "./images/season-beer/blonde.png";
import flandersBrownImage from "./images/season-beer/flanders_brown.png";
import verdantImage from "./images/season-beer/verdant.png";
import tripelImage from "./images/season-beer/belgian_tripel.png";
import tripelWithHoneyImage from "./images/season-beer/belgian_tripel _with_honey.png";
import pyroclasticFlowImage from "./images/pepper-sauces/pyroclastic_flow.png";
import dubbelImage from "./images/season-beer/dubbel.png";
import dubbelRaisinImage from "./images/season-beer/dubbel_raisin.png";

let globalIdCounter = 1;

const generateIds = (data: Omit<Product, "id">[]) => {
  return data.map((item) => ({
    ...item,
    id: globalIdCounter++
  }));
};

export const beerData: Product[] = generateIds([

  // STRONG SERIES
  {
    category: "STRONG SERIES",
    name: "Harmony In Chaos",
    style: "Cherry Strong Wild Ale",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-harmony-in-chaos-cherry/5976751",
    og: "23.5%",
    abv: "11.0",
    ibu: "20",
    description: "Очень сложный, черный, насыщенный крепкий эль смешанного брожения, выдержанный долгое время с огромным количеством ягод вишни, с добавлением кофе и небольшой щепотки острого перца Чили Анчо.",
    bottlingDate: "08.09.2024",
    variants: [
      {
        volume: "0.33л",
        price: "450",
        packaging: ["воск", "тубус"],
        remaining: "остаток: 3 шт."
      }
    ],
    imageUrl: cherryStrongWildImage
  },
  {
    category: "STRONG SERIES",
    name: "Honey Imperial Porter (hot)",
    style: "Braggot with Trinidad Scorpion Pepper",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-honey-imperial-porter-braggot-pepper-style/6259911",
    og: "29.0%",
    abv: "11.1",
    ibu: "20",
    description: "Смесь портера и местного меда (с. Кудрино, Удмуртия) с добавлением небольшого количества копченого солода для большей сложности вкуса, а также щедрой порции острого перца Скорпион Тринидад.",
    bottlingDate: "10.05.2025",
    variants: [
      {
        volume: "0.33л",
        price: "300",
        packaging: ["воск"],
        remaining: "остаток: 2 шт."
      }
    ],
    imageUrl: braggotPorterHotImage
  },


  // SEASON BEER
  {
    category: "SEASON BEER",
    name: "Monday Sucks",
    style: "Brown DIPA",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-monday-sucks-2025/6475811",
    og: "21.0%",
    abv: "9.4",
    ibu: "50",
    description: "Тёмное пиво с уклоном в хмелевую составляющую. При варке использовался хмель Centennial, Cascade и Amarillo, которые наполнили пиво ароматом и вкусом цитрусов, сосновой смолы, нотами тропических фруктов и насыщенной горечью.",
    bottlingDate: "30.10.2025",
    variants: [
      {
        volume: "0.45л",
        price: "350",
        remaining: "остаток: 2 шт."
      }
    ],
    imageUrl: mondaySucksImage
  },
  {
    category: "SEASON BEER",
    name: "Hive",
    style: "Raspberry Wild Ale",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-hive/6496863",
    og: "15.5%",
    abv: "6.9",
    ibu: "10",
    description: "Hive — это не просто пиво с малиной. Это колония вкуса, рожденная в сотах дикого брожения. Каждая ягода — это отдельная капсула с интенсивным, терпким характером, которую дикие дрожжи и бактерии растворяют в единый, невероятно сложный букет. Яркая, живая кислинка танцует на языке, сменяясь глубоким, почти землистым послевкусием. Это пиво — симфония природы, где каждая нота знает свое место в рое.",
    bottlingDate: "16.11.2025",
    variants: [
      {
        volume: "0.45л",
        price: "320",
        remaining: "остаток: 1 шт."
      }
    ],
    imageUrl: raspberryWildImage
  },
  {
    category: "SEASON BEER",
    name: "Core",
    style: "Cherry Wild Ale",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-core/6496864",
    og: "15.5%",
    abv: "6.9",
    ibu: "10",
    description: "Core — это не просто пиво с вишней. Это погружение в самый эпицентр вкуса, к раскаленному реактору, где дикое брожение высвобождает всю мощь ягоды. Темная, почти чернильная вишня раскрывается не сладостью, а интенсивной терпкостью и глубокой фруктовой глубиной. Живая, пикантная кислинка — как разряд энергии, пронизывающий плотное тело эля, чтобы обнажить его сложную, почти минеральную сердцевину. Это пиво — источник, чья сила остается с вами долгим, сухим и вишневым шлейфом.",
    bottlingDate: "16.11.2025",
    variants: [
      {
        volume: "0.45л",
        price: "320",
        remaining: "остаток: 7 шт."
      }
    ],
    imageUrl: cherryWildAleImage
  },
  {
    category: "SEASON BEER",
    name: "Capsule",
    style: "Strawberry Wild Ale",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-capsule/6496866",
    og: "15.5%",
    abv: "6.9",
    ibu: "10",
    description: "Capsule — это пиво-откровение. Под обманчиво нежной плотью клубники скрываются десятки капсул, каждая — сосуд с концентрированной энергией. Дикое брожение взламывает эту защиту, высвобождая не сахарную сладость, а настоящую, земляничную эссенцию. Вкус начинается со вспышки живой, игристой кислинки, которая растворяет привычное, обнажая ядро: плотный, ягодный характер с нотами дикой земляники, древесной коры и влажной земли. Это не напиток, а биологическая капсула с генетическим кодом настоящей клубники.",
    bottlingDate: "16.11.2025",
    variants: [
      {
        volume: "0.45л",
        price: "320",
        remaining: "остаток: 9 шт."
      }
    ],
    imageUrl: strawberryWildImage
  },
  {
    category: "SEASON BEER",
    name: "The Last Farmer's Path",
    style: "Belgian Blond Ale",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-the-last-farmer-s-path/6496845",
    og: "15.0%",
    abv: "7.2",
    ibu: "20",
    description: "Тропа, ведущая домой сквозь золочёные закатные поля. Этот бельгийский эль — гимн изящной силе. Под кажущейся лёгкостью и золотистым цветом скрывается уверенная крепость, которая согревает, но не обжигает. Его душа — в пикантной игре дрожжей, дарующей элегантные фруктовые нотки спелого абрикоса и зрелой груши. Лёгкая, травянистая горчинка, словно отзвук хмеля у края поля, деликатно обрамляет вкус, ведя к сухому и удивительно чистому финалу. Мудрый, сложный, обманчиво лёгкий спутник для долгого пути.",
    bottlingDate: "21.12.2025",
    variants: [
      {
        volume: "0.45л",
        price: "270",
        remaining: "остаток: 10 шт."
      }
    ],
    imageUrl: blondeImage
  },
  {
    category: "SEASON BEER",
    name: "Secrets of a Monk",
    style: "Abbey Special Ale",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-secrets-of-a-monk-2025/6545836",
    og: "15.2%",
    abv: "6.9",
    ibu: "20",
    description: "Тихая мудрость в золотисто-янтарной дымке. Этот особый эль балансирует между светлым блондом и тёмным дуббелем, раскрывая секрет идеального равновесия. Прочная солодовая основа с нотами жидкой карамели и свежего хлеба служит основой для благородной игры бельгийских дрожжей, дарящих оттенки спелой груши и лёгкого перца. Хмель отстранён, лишь подчёркивая чистоту и гармонию долгого, тёплого послевкусия. Эль для созерцательного познания, глоток за глотком.",
    bottlingDate: "24.12.2025",
    variants: [
      {
        volume: "0.45л",
        price: "270",
        remaining: "остаток: 6 шт."
      }
    ],
    imageUrl: abbeyAleImage
  },
  {
    category: "SEASON BEER",
    name: "Verdant",
    style: "Abbey Special Ale (Dry hopped)",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-verdant/6551003",
    og: "15.2%",
    abv: "6.9",
    ibu: "25",
    description: "Это — классический аббатский эль, увиденный сквозь призму хмеля. Его основа — утончённое солодовое тело с нотами карамели и хлеба, оживлённое эфирными тонами бельгийских дрожжей.\n" +
      "Но его душа раскрывается в сухом охмелении благородным словенским хмелем Styrian Goldings Bobek. Он приносит с собой дыхание альпийских лугов — ароматы сушёных трав, полевых цветов и лёгкой цитрусовой цедры. Мягкая, благородная горечь завершает образ, создавая идеальный баланс между тёплой монастырской традицией и освежающей хмелевой свежестью.",
    bottlingDate: "26.12.2025",
    variants: [
      {
        volume: "0.45л",
        price: "280",
        remaining: "остаток: 4 шт."
      }
    ],
    imageUrl: verdantImage
  },
  {
    category: "SEASON BEER",
    name: "Liquid Lore",
    style: "Flanders Brown Ale",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-liquid-lore/6542215",
    og: "20.0%",
    abv: "9.1",
    ibu: "20",
    description: "Классика, переосмысленная в деталях. Долгое кипячение сусла позволило достичь глубокой концентрации вкуса и тёмного янтарного цвета.\n" +
      "Визуально — идеал: искрящийся, почти игристый эль под короной белоснежной, невероятно стойкой мелкой пены.\n" +
      "Аромат — это чернослив, чёрный хлеб и спелый инжир. Вкус начинается с насыщенной солодовой сладости сухофруктов, которая мгновенно освежается кислинкой, ведущей к сухому и долгому финишу.\n" +
      "Высокая карбонизация — ключ к его сложной, но такой сбалансированной природе.",
    bottlingDate: "10.06.2025",
    variants: [
      {
        volume: "0.375л",
        price: "370",
        remaining: "остаток: 2 шт."
      }
    ],
    imageUrl: flandersBrownImage
  },
  {
    category: "SEASON BEER",
    name: "Belgian Tripel",
    style: "Belgian Tripel",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-belgian-tripel-2026/6582093",
    og: "19.5%",
    abv: "9.8",
    ibu: "25",
    description: "Яркий представитель знаменитого бельгийского стиля. Аромат — сложный коктейль из фруктовых эфиров, лёгких фенолов и пряных нюансов. Во вкусе раскрывается палитра оттенков: от спелой косточковой сладости абрикоса и цитрусовой свежести лимонной цедры до пикантной, почти перечной остроты. Тело удивительно полное для светлого эля, а послевкусие — долгое, сухое и согревающее.",
    bottlingDate: "27.01.2026",
    variants: [
      {
        volume: "0.45л",
        price: "280",
        remaining: "остаток: 10 шт."
      }
    ],
    imageUrl: tripelImage
  },
  {
    category: "SEASON BEER",
    name: "Abbey’s Golden Verse",
    style: "Belgian Tripel with Honey",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-abbey-s-golden-verse/6582913",
    og: "20.5%",
    abv: "10.5",
    ibu: "25",
    description: "Этот трипель — уверенная ступень выше в мире бельгийских элей. Он крепче и полнее классической версии, сохраняя при этом изящество и сложность. Под ярким эфирно-фенольным букетом (абрикос, цедра лимона, искры перца) играет едва уловимый мед, придающий лишь дополнительную округлость и глубину. Эль для вдумчивого наслаждения.",
    bottlingDate: "28.01.2026",
    variants: [
      {
        volume: "0.45л",
        price: "280",
        remaining: "остаток: 15 шт."
      }
    ],
    imageUrl: tripelWithHoneyImage
  },
  {
    category: "SEASON BEER",
    name: "Bruges Bazaar",
    style: "Belgian Dubbel",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-bruges-bazaar/6588871",
    og: "18.0%",
    abv: "9.2",
    ibu: "20",
    description: "Благородное бельгийское пиво с превосходным сочетанием зернового вкуса и мощных эфиров, придающих вкусу и аромату оттенки изюма, чернослива и сладкого черного винограда. На фоне - хорошая пряность, возникающая благодаря фенольным соединениям и повышенному содержанию алкоголя.",
    bottlingDate: "02.02.2026",
    variants: [
      {
        volume: "0.45л",
        price: "290",
        remaining: "остаток: 10 шт."
      }
    ],
    imageUrl: dubbelImage
  },
  {
    category: "SEASON BEER",
    name: "Resin Tear Serenade",
    style: "Belgian Dubbel with Prunes and Raisin",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-resin-tear-serenade/6590437",
    og: "18.0%",
    abv: "9.4",
    ibu: "20",
    description: "Погрузитесь в ароматы монастырской трапезной. Глубокий зерновой профиль с нотами карамели и свежеиспечённого хлеба служит основой для щедрого букета спелых тёмных фруктов — изюма, чернослива и чёрного винограда. Тёплое алкогольное послевкусие с лёгким отблеском пряностей завершает этот богатый и согревающий образ.",
    bottlingDate: "04.02.2026",
    variants: [
      {
        volume: "0.45л",
        price: "300",
        remaining: "остаток: 10 шт."
      }
    ],
    imageUrl: dubbelRaisinImage
  },

  // 8TH BIRTHDAY
  {
    category: "8TH BIRTHDAY",
    name: "Carved Essence",
    style: "American Barleywine",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-carved-essence/6496848",
    og: "25.0%",
    abv: "11.5",
    ibu: "60",
    description: "Этот американский барливайн — дань уважения солодовой сложности и хмелевой мощи. Семь различных солодов создают невероятно насыщенный профиль с доминирующими нотами темных сухофруктов, ириски и карамели. Мощная алкогольная теплота и фруктовая эфирность получают достойного оппонента в виде резкой, горькой атаки американских хмелей. Финальный штрих — выдержка на щепе американского дуба из-под бурбона, которая привносит ноты ванили, кокоса и пряностей, сглаживая и усложняя характер. Идеальный кандидат для выдержки, чья сущность будет раскрываться с годами.",
    bottlingDate: "23.09.2025",
    variants: [
      {
        volume: "0.375л",
        price: "400",
        remaining: "остаток: 1 шт."
      },
      {
        volume: "0.75л",
        price: "800",
        remaining: "остаток: 1 шт."
      }
    ],
    imageUrl: americanBwImage
  },
  {
    category: "8TH BIRTHDAY",
    name: "Hybrid Giant",
    style: "Grape American Barleywine",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-hybrid-giant/6496849",
    og: "28.0%",
    abv: "11.5",
    ibu: "60",
    description: "Этот гибридный эль бросает вызов традициям. Крепкая, сложная солодовая основа американского барливайна, сброженная винными дрожжами, получает неожиданное измерение. Насыщенная сладость и мощная засыпь американских хмелей гармонично переплетаются с яркими виноградными нотами, подчеркнутыми хмелем Nelson Sauvin с его характерными тонами белого винограда и тропических фруктов. Выдержка на дубовых палочках, вымоченных в вине, добавляет структуры, лёгкой танинности и винной сложности, завершая и без того многогранный профиль.",
    bottlingDate: "18.09.2025",
    variants: [
      {
        volume: "0.375л",
        price: "410",
        remaining: "остаток: 8 шт."
      },
      {
        volume: "0.75л",
        price: "810",
        remaining: "остаток: 1 шт."
      }
    ],
    imageUrl: grapeAmericanBwImage
  },
  {
    category: "8TH BIRTHDAY",
    name: "Shy Spirit",
    style: "Maple English Barleywine",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-shy-spirit/6496853",
    og: "25.5%",
    abv: "11.1",
    ibu: "40",
    description: "Под личиной спокойствия таится могучая сила. Этот барливайн — ода солодовому богатству, где насыщенные ноты инжира и тёмного изюма встречаются с тёплой, природной сладостью кленового сиропа. Аристократичный хмель East Kent Goldings отвечает лёгким цветочным шёпотом на щедром солодовом фундаменте. Его подлинная глубина раскрывается не сразу — как и одноглазый страж на этикетке, его душа терпелива. Выдержка на щепе американского дуба, пропитанной бурбоном, дарит напитку согревающую ванильную мягкость и долгое, задумчивое послевкусие.",
    bottlingDate: "07.09.2025",
    variants: [
      {
        volume: "0.75л",
        price: "810",
        remaining: "остаток: 2 шт."
      }
    ],
    imageUrl: mapleEnglishBwImage
  },
  {
    category: "8TH BIRTHDAY",
    name: "The Rye Golem",
    style: "Ryewine",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-the-rye-golem/6496855",
    og: "25.0%",
    abv: "10.4",
    ibu: "40",
    description: "Это не просто пиво, а ожившая стихия зерна, могучий солодовый монстр, рожденный из щедрой засыпи ржаного солода. Его насыщенный коричневый цвет предвещает богатство вкуса, где мощь тёмного хлеба, пряные ноты ржи и тонкие оттенки горького шоколада сплетаются в единую мощную форму. Хмелевая горчинка — это не крик, а сдержанный приказ, возвращающий к порядку и балансу. Как и страж на этикетке, чьи глаза пылают зерновым огнем, этот эль терпелив и мудр. Его подлинная сила раскрывается не спеша, оставляя долгое, согревающее послевкусие с тёплыми тонами ржаных сухарей и лёгкой пряностью.",
    bottlingDate: "21.10.2025",
    variants: [
      {
        volume: "0.33",
        price: "350",
        packaging: ["воск"],
        remaining: "остаток: 13 шт."
      },
      {
        volume: "0.75л",
        price: "800",
        remaining: "остаток: 3 шт."
      }
    ],
    imageUrl: ryeWineImage
  },
  {
    category: "8TH BIRTHDAY",
    name: "Clash of Elements",
    style: "Grape Ryewine",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-clash-of-elements/6496856",
    og: "26.5%",
    abv: "10.5",
    ibu: "25",
    description: "Этот эль — эпическая битва двух стихий, застывшая в бокале. Из самой сердцевины зернового вихря, рождённого щедрой засыпью ржаного и ячменного солода, прорывается буйство тёмного винограда. Мощь и структура ржи встречаются с глубокими винными тонами, создавая идеально нестабильный баланс. Его финал — долгий, сложный и завораживающий, где уже невозможно отличить зерно от ягоды. Это не просто пиво, это алхимический синтез двух миров.",
    bottlingDate: "21.10.2025",
    variants: [
      {
        volume: "0.33",
        price: "360",
        packaging: ["воск"],
        remaining: "остаток: 7 шт."
      },
      {
        volume: "0.75л",
        price: "810",
        remaining: "остаток: 2 шт."
      }
    ],
    imageUrl: grapeRyeWineImage
  },
  {
    category: "8TH BIRTHDAY",
    name: "Porridge, Sir!",
    style: "Oatwine",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-porridge-sir/6496857",
    og: "23.0%",
    abv: "10.0",
    ibu: "20",
    description: "Просыпаться ради тарелки овсянки? Сэр, это скучно. Но засыпать овёс в пивоварню — это гениально. Этот Oatwine — гимн уюту и простоте. Овсяные хлопья дарят ему не вес, а невероятно шелковистую, пышную текстуру, дополняя солодовые ноты печенья и карамели. «Porridge, Sir!» — это мощный, но удивительно сбалансированный эль, который превращает детское «надо» во взрослое «хочу».",
    bottlingDate: "11.11.2025",
    variants: [
      {
        volume: "0.33",
        price: "350",
        packaging: ["воск"],
        remaining: "остаток: 3 шт."
      },
      {
        volume: "0.75л",
        price: "800",
        remaining: "остаток: 3 шт."
      }
    ],
    imageUrl: oatWineImage
  },
  {
    category: "8TH BIRTHDAY",
    name: "Vanilla Oblivion",
    style: "Vanilla Oatwine",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-vanilla-oblivion/6496858",
    og: "23.2%",
    abv: "10.5",
    ibu: "20",
    description: "Это не просто пиво. Это точка невозврата. С первой же капли вы оказываетесь в плену у ванили — не десертно-сладкой, а тёплой, элегантной и гипнотической. Она окутывает мощное тело этого Oatwine, сотканное из шелковистой овсяной текстуры и плотного солодового каркаса. «Vanilla Oblivion» — это тот самый забытый вкус, в котором хочется исчезнуть без следа. Для тех, кто не боится потерять себя в идеальном моменте.",
    bottlingDate: "11.11.2025",
    variants: [
      {
        volume: "0.33",
        price: "360",
        packaging: ["воск"],
        remaining: "остаток: 7 шт."
      },
      {
        volume: "0.75л",
        price: "810",
        remaining: "остаток: 3 шт."
      }
    ],
    imageUrl: vanillaOatWineImage
  },
  {
    category: "8TH BIRTHDAY",
    name: "Gloopy Grasp",
    style: "Imperial Stout",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-gloopy-grasp/6496860",
    og: "23.5%",
    abv: "9.3",
    ibu: "40",
    description: "«Gloopy Grasp» — это не название. Это — диагноз. Классический имперский стаут, лишенный всяких уступок в виде посторонних добавок. Его оружие — чистая, неразбавленная мощь жжёного и карамельного солода. Он густой, маслянистый и обволакивающий, как жидкий асфальт. Вкус — это концентрированная вселенная тёмного шоколада, чёрного кофе и смолы. Он не пытается вам понравиться. Он предлагает вам подчиниться. И вы согласитесь.",
    bottlingDate: "17.11.2025",
    variants: [
      {
        volume: "0.75л",
        price: "800",
        remaining: "остаток: 2 шт."
      }
    ],
    imageUrl: imperialStoutImage
  },
  {
    category: "8TH BIRTHDAY",
    name: "Cumberland Imperial Stout",
    style: "Cumberland Imperial Stout",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-cumberland-imperial-stout-2025/6496861",
    og: "23.5%",
    abv: "9.3",
    ibu: "40",
    description: "Аристократ с тёмной душой, ягодным сердцем и чемпионским титулом. Этот имперский стаут — не просто эксперимент, а проверенная временем формула успеха, завоевавшая высшую награду в категории тёмных сортов на фестивале в Санкт-Петербурге. Мы взяли основу классического стаута и призвали в союзники малину Кумберленд. Это не фруктовый десерт — это сложный диалог, где мощь жжёного солода и горького шоколада ведёт утончённую беседу с глубокими, винными нотами вяленой ягоды.",
    bottlingDate: "17.11.2025",
    variants: [
      {
        volume: "0.33",
        price: "360",
        packaging: ["воск"],
        remaining: "остаток: 6 шт."
      },
      {
        volume: "0.75л",
        price: "810",
        remaining: "остаток: 3 шт."
      }
    ],
    imageUrl: cumberlandImperialStoutImage
  },
  {
    category: "8TH BIRTHDAY",
    name: "Granite Sanctum",
    style: "Wheatwine",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-granite-sanctum/6498786",
    og: "23.0%",
    abv: "10.3",
    ibu: "25",
    description: "Если ячменные вина — это огонь и мощь, то пшеничное вино — это неприступная крепость из гранита и света. Созданное на щедрой засыпи пшеничного и ячменного солода, оно поражает не жаром, а монолитной структурой и бархатистой мягкостью. Его характер — это полнотелое тело с нотами свежеиспеченного хлеба, карамели и сухофруктов, окутанное пьянящей эфирностью. Это убежище. Нерушимый алтарь, где поклоняются чистоте пшеницы.",
    bottlingDate: "19.11.2025",
    variants: [
      {
        volume: "0.33",
        price: "350",
        packaging: ["воск"],
        remaining: "остаток: 7 шт."
      },
      {
        volume: "0.75л",
        price: "800",
        remaining: "остаток: 1 шт."
      }
    ],
    imageUrl: wheatWineImage
  },
  {
    category: "8TH BIRTHDAY",
    name: "Midnight Mill",
    style: "DDH Wheatwine",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-midnight-mill/6498787",
    og: "23.0%",
    abv: "10.0",
    ibu: "40",
    description: "Это пшеничное вино сброжено нейтральными дрожжами, что подчеркнуть яркую хмелевую составляющую. Сухое охмеление привносит в мягкое, бархатистое тело пшеничного вина тёмную, ароматную интригу. Оживают цитрусовые и тропические аккорды, которые, как лунные блики, подсвечивают солодовую мощь, добавляя ей призрачной сложности и свежести. Ночная смена на мельнице вкуса только началась.",
    bottlingDate: "19.11.2025",
    variants: [
      {
        volume: "0.33",
        price: "370",
        packaging: ["воск"],
        remaining: "остаток: 10 шт."
      },
      {
        volume: "0.75л",
        price: "840",
        remaining: "остаток: 1 шт."
      }
    ],
    imageUrl: ddhWheatWineImage
  },
  {
    category: "8TH BIRTHDAY",
    name: "The Singularity",
    style: "Buckwheat Strong Ale",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-the-singularity/6506391",
    og: "22.0%",
    abv: "8.7",
    ibu: "20",
    description: "Гречиха. Строгая, немного дикая, с душой темного леса. Мы не смешивали её характер, а очистили до состояния «точки сингулярности» — момента, когда зерно проявляет свою истинную сущность. Это гречишное вино — квинтэссенция гречихи: насыщенный, с глубокими орехово-землистыми тонами, лёгкой терпкостью и тёплым, почти хлебным послевкусием. Здесь нет ничего лишнего. Только чистая, неразбавленная мощь зерна, попавшего в цель.",
    bottlingDate: "25.11.2025",
    variants: [
      {
        volume: "0.25",
        price: "280",
        packaging: ["воск"],
        remaining: "остаток: 14 шт."
      },
      {
        volume: "0.45",
        price: "480",
        remaining: "остаток: 4 шт."
      },
      {
        volume: "0.75л",
        price: "820",
        remaining: "остаток: 5 шт."
      }
    ],
    imageUrl: buckWheatWineImage
  },
  {
    category: "8TH BIRTHDAY",
    name: "Solitude",
    style: "Buckwheat wine with Honey",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-solitude/6506393",
    og: "25.0%",
    abv: "12.0",
    ibu: "20",
    description: "Одиночество — не значит пустота. Это состояние высшей концентрации. К мощной основе гречишного вина мы добавили не сахар, а душу — мёд, собранный в экологически чистом селе Дебесы (Удмуртия). Его тёплая, цветочная сладость не перебивает зерно, а вступает с ним в тихий диалог. Результат — невероятно сложный, согревающий эль, где земляная мощь гречихи встречает солнечное сияние мёда. Медитативное уединение в бокале.",
    bottlingDate: "25.11.2025",
    variants: [
      {
        volume: "0.25",
        price: "300",
        packaging: ["воск"],
        remaining: "остаток: 14 шт."
      },
      {
        volume: "0.45",
        price: "500",
        remaining: "остаток: 5 шт."
      },
      {
        volume: "0.75л",
        price: "840",
        remaining: "остаток: 5 шт."
      }
    ],
    imageUrl: buckWheatWineHoneyImage
  },
]);

export const sauceData: Product[] = generateIds([
  {
    category: "PEPPER SAUCES",
    name: "Bhut's Embrace",
    style: "Guava and Tomatoes Pepper Sauce",
    spiciness: "4/10",
    description: "Первый глоток — это тропический обман. Нежная сладость гуавы и болгарского перца окутывает, как тёплый ветер. Томатная паста и копчёная паприка создают иллюзию уюта у костра. Наслаждение призрачно - появляются Бхут Джолокия, Скорпион Тринидад и Призрак. Их жар не кричит, а шепчет ледяным пламенем в самое ухо. Розмарин, корица и гвоздика — это не специи, а ритуальные свечи на этом сеансе. Это не соус. Это встреча с призраком вкуса. Состав: пюре гуавы, томатная паста, перец красный болгарский, перец Бхут Джолокия, перец Призрак, перец Скорпион Тринидад, лук, чеснок, розмарин, корица, черный перец, гвоздика, паприка копченая, уксус яблочный, соль морская, сахар тростниковый.",
    bottlingDate: "30.11.2025",
    variants: [
      {
        volume: "0.2л",
        price: "600",
        remaining: "остаток: 5 шт."
      }
    ],
    imageUrl: bhutsEmbraceImage
  },
  {
    category: "PEPPER SAUCES",
    name: "Sun Casket",
    style: "Peaches and Apricots  Pepper Sauce",
    spiciness: "5/10",
    description: "Мы не варили соус. Мы запечатали лето в золотом ковчеге. Мякоть персиков и абрикосов, сладость моркови — это запертый внутри свет. Но в самом сердце этого солнца таится пламя — Pimenta Caixo и Scorpion Moruga Trinidad. Острота — не крик, а долгое, согревающее эхо августовского полдня. Это не соус, это шкатулка с последним лучом лета. Состав: абрикосы, персики, перец Кайшу, перец Скорпион Тринидад, лук, морковь, имбирь, корица, черный перец, уксус яблочный, соль морская.",
    bottlingDate: "14.12.2025",
    variants: [
      {
        volume: "0.2л",
        price: "600",
        remaining: "остаток: 9 шт."
      }
    ],
    imageUrl: sunCasketImage
  },
  {
    category: "PEPPER SAUCES",
    name: "Widow's Jam",
    style: "Berries  Pepper Sauce",
    spiciness: "2/10",
    description: "Бархатная кислинка облепихи и терпкость черноплодной рябины — это лишь тихая прелюдия. В самом сердце джема пробуждается 7 Pot Gravedigger — перец, который роет могилы. Его жар не обжигает, а поднимается медленно и настойчиво, как холодный туман из-под земли, подхваченный острым дыханием имбиря и горчицы. Состав: облепиха, черноплодная рябина, перец красный болгарский, перец 7 Пот Грейв Диггер, лук, морковь, имбирь, черный перец, горчица, уксус яблочный, соль морская.",
    bottlingDate: "14.12.2025",
    variants: [
      {
        volume: "0.2л",
        price: "600",
        remaining: "остаток: 5 шт."
      }
    ],
    imageUrl: widowsJamImage
  },
  {
    category: "PEPPER SAUCES",
    name: "Pyroclastic Flow",
    style: "Habanero/Chipotle Pepper Sauce",
    spiciness: "2/10",
    description: "Забудьте об огне. Это не извержение, а глубинный взрыв вкуса. Начало — бархатный, сладковатый дым копчёного перца Чипотле, томлёные овощи и мягкая паприка. Он обволакивает, как тёплое одеяло. А затем, вместо жгучей остроты, приходит яркая, фруктовая нота красного Хабанеро, которая не обжигает, а расчищает вкусовое небо, оставляя после себя чистое, тёплое послевкусие. Идеальная пара для пасты, ризотто, запечённых овощей или сливочного сыра. Чтобы добавить сложности, а не адреналина. Состав: томатная паста, перец Чипотле, перец Хабанеро красный, лук, морковь, чеснок, оливковое масло, паприка копченая, паприка сладкая, соль морская, орегано, жидкий дым, перец черный, порошок горчичный, уксус яблочный.",
    bottlingDate: "30.01.2026",
    variants: [
      {
        volume: "0.2л",
        price: "500",
        remaining: "остаток: 5 шт."
      }
    ],
    imageUrl: pyroclasticFlowImage
  },
]);

export const accessoriesData: Product[] = generateIds([
  {
    category: "ACCESSORIES",
    name: "Значок",
    style: "⌀ 25мм",
    description: "",
    bottlingDate: "",
    variants: [
      {
        volume: "шт",
        price: "50",
        remaining: "остаток: 20 шт."
      }
    ]
  }
]);