import blueberryStrongWildImage from "./images/strong-series-2024/blueberry-strong-wild.png";
import cherryStrongWildImage from "./images/strong-series-2024/cherry-strong-wild.png";
import pumpkinAleImage from "./images/season-beer-2025/pumpkin_ale.png";
import fuckWorkImage from "./images/season-beer-2025/fuck_work.jpg";
import halloweenIpaImage from "./images/season-beer-2025/halloween_ipa.png";
import mondaySucksImage from "./images/season-beer-2025/monday_sucks.jpg";
import graffBlackCurrantOakImage from "./images/strong-series-2025/graff_black_currant_oak.png";
import braggotPorterImage from "./images/strong-series-2025/braggot_porter.png";
import braggotPorterHotImage from "./images/strong-series-2025/braggot_porter_hot.png";
import orchardsWrathImage from "./images/pepper-sauces/orchards_wrath.png";
import purpleRevengeImage from "./images/pepper-sauces/purple_revenge.png";
import trippyTimberImage from "./images/8th-birthday/trippy_timber.png";
import druidsBrewImage from "./images/8th-birthday/druids_brew.png";
import americanBwImage from "./images/8th-birthday/american_bw.png";
import grapeAmericanBwImage from "./images/8th-birthday/grape_american_bw.png";
import englishBwImage from "./images/8th-birthday/english_bw.png";
import mapleEnglishBwImage from "./images/8th-birthday/maple_english_bw.png";
import ryeWineImage from "./images/8th-birthday/rye_wine.png";
import grapeRyeWineImage from "./images/8th-birthday/grape_rye_wine.png";
import oatWineImage from "./images/8th-birthday/oat_wine.png";
import vanillaOatWineImage from "./images/8th-birthday/vanilla_oat_wine.png";
import imperialStoutImage from "./images/8th-birthday/imperial_stout.png";
import cumberlandImperialStoutImage from "./images/8th-birthday/cumberland_imperial_stout.png";
import raspberryWildImage from "./images/season-beer-2025/raspberry_wild.png";
import cherryWildAleImage from "./images/season-beer-2025/cherry_wild.png";
import gooseberryWildImage from "./images/season-beer-2025/gooseberry_wild.png";
import strawberryWildImage from "./images/season-beer-2025/strawberry_wild.png";
import wheatWineImage from "./images/8th-birthday/wheat_wine.png";
import ddhWheatWineImage from "./images/8th-birthday/ddh_wheat_wine.png";
import buckWheatWineImage from "./images/8th-birthday/buckwheat_wine.png";
import buckWheatWineHoneyImage from "./images/8th-birthday/buckwheat_wine_honey.png";
import bhutsEmbraceImage from "./images/pepper-sauces/bhuts_embrace.png";
import sunCasketImage from "./images/pepper-sauces/sun_casket.png";
import widowsJamImage from "./images/pepper-sauces/widows_jam.png";
import type { Product } from "./types/product.ts";

let globalIdCounter = 1;

const generateIds = (data: Omit<Product, "id">[]) => {
  return data.map((item) => ({
    ...item,
    id: globalIdCounter++
  }));
};

export const beerData: Product[] = generateIds([

  // STRONG SERIES 2024

  {
    category: "STRONG SERIES 2024",
    name: "Harmony In Chaos",
    style: "Blueberry Strong Wild Ale",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-harmony-in-chaos-blueberry/5976755",
    og: "23.5%",
    abv: "10.8",
    ibu: "20",
    description: "Очень сложный, черный, насыщенный крепкий эль смешанного брожения, выдержанный долгое время с огромным количеством ягод черники, с добавлением кофе и небольшой щепотки острого перца Чили Гуахильо.",
    bottlingDate: "06.09.2024",
    variants: [
      {
        volume: "0.33л",
        price: "450",
        packaging: ["воск", "тубус"],
        remaining: "остаток: 1 шт."
      },
      {
        volume: "0.25л",
        price: "230",
        packaging: ["воск"],
        remaining: "остаток: 2 шт."
      }
    ],
    imageUrl: blueberryStrongWildImage
  },
  {
    category: "STRONG SERIES 2024",
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
      },
      {
        volume: "0.25л",
        price: "230",
        packaging: ["воск"],
        remaining: "остаток: 2 шт."
      }
    ],
    imageUrl: cherryStrongWildImage
  },

  // SEASON BEER 2025

  {
    category: "SEASON BEER 2025",
    name: "Pumpkin Ale",
    style: "American Pumpkin Ale",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-pumpkin-ale-2025/6475806",
    og: "16.0%",
    abv: "6.8",
    ibu: "15",
    description: "Мягкий эль в американском стиле с добавлением тыквы и специй (корица, имбирь, мускатный орех, гвоздика, ваниль).",
    bottlingDate: "30.10.2025",
    variants: [
      {
        volume: "0.45л",
        price: "260",
        remaining: "остаток: 5 шт."
      }
    ],
    imageUrl: pumpkinAleImage
  },
  {
    category: "SEASON BEER 2025",
    name: "Freeday. Fuck Work",
    style: "Pumpkin Porter",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-freeday-fuck-work-2025/6475807",
    og: "22.0%",
    abv: "9.1",
    ibu: "15",
    description: "Умеренно крепкий, но при этом легкий коричневый портер с ванильным вкусом и специями тыквенного пирога. Состав: вода питьевая, солод ячменный, тыква, хмель, корица, мускатный орех, имбирь, гвоздика, ваниль, дрожжи.",
    bottlingDate: "30.10.2025",
    variants: [
      {
        volume: "0.45л",
        price: "330",
        remaining: "остаток: 8 шт."
      }
    ],
    imageUrl: fuckWorkImage
  },
  {
    category: "SEASON BEER 2025",
    name: "Halloween IPA",
    style: "Brett Red IPA",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-halloween-ipa-2025/6475809",
    og: "17.5%",
    abv: "7.2",
    ibu: "30",
    description: "Мягкая горечь, насыщенный солод и согревающая крепость - отличное сочетание в последнюю погоду. Красный ИПЭ с фруктовым и цветочным ароматом, со вкусом карамели ириса, сброженный дополнительно Brettanomyces с сухим охмелением Chinook и Centennial.",
    bottlingDate: "30.10.2025",
    variants: [
      {
        volume: "0.45л",
        price: "280",
        remaining: "остаток: 4 шт."
      }
    ],
    imageUrl: halloweenIpaImage
  },
  {
    category: "SEASON BEER 2025",
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
        remaining: "остаток: 3 шт."
      }
    ],
    imageUrl: mondaySucksImage
  },
  {
    category: "SEASON BEER 2025",
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
        remaining: "остаток: 10 шт."
      }
    ],
    imageUrl: raspberryWildImage
  },
  {
    category: "SEASON BEER 2025",
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
    category: "SEASON BEER 2025",
    name: "Oculus",
    style: "Gooseberry Wild Ale",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-oculus/6496865",
    og: "15.5%",
    abv: "6.9",
    ibu: "10",
    description: "Oculus — это пиво, которое не просто пьют, а в которое всматриваются. Полупрозрачный крыжовник, подобно зрачку, открывает портал в иное измерение вкуса. Его яркая, пронзительная кислинка — это первый проблеск света, который ослепляет и обостряет чувства. За ним проступает сложный, почти электрический профиль: землистые ноты и вкус свежего щавеля. Это пиво — всевидящее око природы, холодное, пронзительное и невероятно живое.",
    bottlingDate: "16.11.2025",
    variants: [
      {
        volume: "0.45л",
        price: "320",
        remaining: "остаток: 10 шт."
      }
    ],
    imageUrl: gooseberryWildImage
  },
  {
    category: "SEASON BEER 2025",
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

  // STRONG SERIES 2025

  {
    category: "STRONG SERIES 2025",
    name: "Strong Black Currant Graff (oak)",
    style: "Apfelwein with Black Currant (oak edition)",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-strong-black-currant-graff-oak-aged/6208920",
    og: "25.5%",
    abv: "13.5",
    ibu: "15",
    description: "Пиво, сваренное в стиле Apfelwein с добавлением сока черной смородины (30%). Состав солода: 50% пилсен, 50% пшеничный, хмель Cascade, вымоченная в хересе спираль сильного обжига из американского дуба.",
    bottlingDate: "29.03.2025",
    variants: [
      {
        volume: "0.33л",
        price: "280",
        remaining: "остаток: 3 шт."
      }
    ],
    imageUrl: graffBlackCurrantOakImage
  },
  {
    category: "STRONG SERIES 2025",
    name: "Honey Imperial Porter",
    style: "Braggot",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-honey-imperial-porter-braggot/6259903",
    og: "29.0%",
    abv: "11.1",
    ibu: "20",
    description: "Смесь портера и местного меда (с. Кудрино, Удмуртия) с добавлением небольшого количества копченого солода для большей сложности вкуса.",
    bottlingDate: "10.05.2025",
    variants: [
      {
        volume: "0.33л",
        price: "290",
        packaging: ["воск"],
        remaining: "остаток: 1 шт."
      }
    ],
    imageUrl: braggotPorterImage
  },
  {
    category: "STRONG SERIES 2025",
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
        remaining: "остаток: 3 шт."
      }
    ],
    imageUrl: braggotPorterHotImage
  },

  // 8TH BIRTHDAY
  {
    category: "8TH BIRTHDAY",
    name: "Trippy Timber",
    style: "Wild Ale with Dates and Raisin",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-trippy-timber/6496846",
    og: "19.5%",
    abv: "7.2",
    ibu: "20",
    description: "Дикий эль смешанного брожения, выдержанный с натуральными финиками и изюмом, а также дубовыми палочками из американского дуба.",
    bottlingDate: "23.06.2025",
    variants: [
      {
        volume: "0.375л",
        price: "330",
        remaining: "остаток: 7 шт."
      },
      {
        volume: "0.75л",
        price: "660",
        remaining: "остаток: 1 шт."
      }
    ],
    imageUrl: trippyTimberImage
  },
  {
    category: "8TH BIRTHDAY",
    name: "Druid's Brew",
    style: "Spiced Wild Ale with Dates, Raisin and Spiced",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-druid-s-brew/6496847",
    og: "19.5%",
    abv: "7.2",
    ibu: "20",
    description: "Дикий эль смешанного брожения, выдержанный с натуральными финиками и изюмом, а также дубовыми палочками из американского дуба и специй для глинтвейна.",
    bottlingDate: "23.06.2025",
    variants: [
      {
        volume: "0.375л",
        price: "340",
        remaining: "остаток: 7 шт."
      },
      {
        volume: "0.75л",
        price: "680",
        remaining: "остаток: 1 шт."
      }
    ],
    imageUrl: druidsBrewImage
  },
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
        remaining: "остаток: 4 шт."
      },
      {
        volume: "0.75л",
        price: "800",
        remaining: "остаток: 2 шт."
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
        remaining: "остаток: 10 шт."
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
    name: "The Calm Within",
    style: "English Barleywine",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-the-calm-within/6496852",
    og: "24.0%",
    abv: "10.5",
    ibu: "40",
    description: "Этот крепкий эль, выдержанный в традициях английских крепких элей, предлагает путешествие в глубины вкуса. Позвольте себе затеряться в лабиринте его аромата: спелые тёмные фрукты, сочная карамель и шлейф креплёного вина порту. Благородные хмели Fuggle и East Kent Goldings мягко оттеняют насыщенную солодовую основу, даря лёгкие травянистые и цветочные акценты. Финал — это тёплое, продолжительное послевкусие с благородной дубовой нотой, которую пиву подарили палочки американского дуба, вымоченные в вине. Искусство баланса между мощью и изяществом.",
    bottlingDate: "07.09.2025",
    variants: [
      {
        volume: "0.75л",
        price: "800",
        remaining: "остаток: 1 шт."
      }
    ],
    imageUrl: englishBwImage
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
        volume: "0.375л",
        price: "410",
        remaining: "остаток: 7 шт."
      },
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
        remaining: "остаток: 14 шт."
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
        remaining: "остаток: 10 шт."
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
        remaining: "остаток: 6 шт."
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
        remaining: "остаток: 8 шт."
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
        volume: "0.33",
        price: "350",
        packaging: ["воск"],
        remaining: "остаток: 5 шт."
      },
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
        remaining: "остаток: 16 шт."
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
        remaining: "остаток: 16 шт."
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
        remaining: "остаток: 21 шт."
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
        remaining: "остаток: 15 шт."
      },
      {
        volume: "0.45",
        price: "480",
        remaining: "остаток: 11 шт."
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
        remaining: "остаток: 16 шт."
      },
      {
        volume: "0.45",
        price: "500",
        remaining: "остаток: 6 шт."
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
    name: "Orchard's Wrath",
    style: "Green Pepper Sauce",
    spiciness: "6/10",
    description: "Первый аккорд — это обманчивая идиллия: кисло-судкая свежесть зелёного яблока и сока лайма, зелень болгарского перца и молодого лука. Но это затишье перед бурей. Из самой сердцевины сада поднимается яростный, травянистый жар зелёного Каролина Рипера. Это не огонь пустыни — это холодная ярость урагана, ворвавшегося в цветущий сад. Уксус лишь подстёгивает гнев, делая его ярким и пронзительным. Острота 6/10 — это не предупреждение. Это приговор вашим рецепторам от самой природы. Состав: перец зеленый болгарский, перец Каролина Рипер зеленый, перец Халапеньо, чеснок, лук, яблоки, лимоны, лук зеленый свежий, перец черный, уксус яблочный, соль морская, крахмал Аррорут.",
    bottlingDate: "14.10.2025",
    variants: [
      {
        volume: "0.2л",
        price: "500",
        remaining: "остаток: 1 шт."
      }
    ],
    imageUrl: orchardsWrathImage
  },
  {
    category: "PEPPER SAUCES",
    name: "Purple Revenge",
    style: "Plum Pepper Sauce",
    spiciness: "4/10",
    description: "Этот соус — не еда, это порча на вкуснейшие блюда. Тёмная, почти чернильная слива, заговорённая дымом паприки и сладостью, — это приманка. В её сердцевине заключена мощь перца 7 Pot Gravedigger — его жар (4/10) не обжигает, а хватает за горло холодной рукой из-под земли, оставляя послевкусие тления и свежей могильной почвы. Укроп и кинза — это травы, брошенные в ритуальный коте́ль для оттенения злого умысла. Подавайте к утке, баранине или жирным сырам, чтобы снять проклятие наслаждения. Состав: слива, перец 7 Пот Грейв Диггер, чеснок, кинза, укроп, паприка сладкая, паприка копченая, черный перец, уксус яблочный, соль морская.",
    bottlingDate: "14.10.2025",
    variants: [
      {
        volume: "0.2л",
        price: "600",
        remaining: "остаток: 1 шт."
      }
    ],
    imageUrl: purpleRevengeImage
  },
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
        remaining: "остаток: 8 шт."
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
        remaining: "остаток: 13 шт."
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
        remaining: "остаток: 13 шт."
      }
    ],
    imageUrl: widowsJamImage
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
        remaining: ""
      }
    ]
  }
]);