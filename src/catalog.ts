import type { Product } from "./types/product.ts";
import grapeAmericanBwImage from "./images/8th-birthday/grape_american_bw.png";
import ryeWineImage from "./images/8th-birthday/rye_wine.png";
import grapeRyeWineImage from "./images/8th-birthday/grape_rye_wine.png";
import oatWineImage from "./images/8th-birthday/oat_wine.png";
import vanillaOatWineImage from "./images/8th-birthday/vanilla_oat_wine.png";
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
import blondeImage from "./images/season-beer/blonde.png";
import tripelWithHoneyImage from "./images/season-beer/belgian_tripel _with_honey.png";
import pyroclasticFlowImage from "./images/pepper-sauces/pyroclastic_flow.png";
import dubbelImage from "./images/season-beer/dubbel.png";
import dubbelRaisinImage from "./images/season-beer/dubbel_raisin.png";
import sylvianReagentImage from "./images/pepper-sauces/sylvian_reagent.png";
import polarisImage from "./images/strong-series-2026/polaris.png";
import nightfallImage from "./images/strong-series-2026/nightfall.png";
import gloomBrothersImage from "./images/strong-series-2026/gloom-brothers.png";
import redCaseImage from "./images/strong-series-2026/red-case.png";
import americanPorterImage from "./images/season-beer/american-porter.png";
import americanPorterDDHImage from "./images/season-beer/american-porter-ddh.png";
import coreSampleImage from "./images/pepper-sauces/core-sample.png";

let globalIdCounter = 1;

const generateIds = (data: Omit<Product, "id">[]) => {
  return data.map((item) => ({
    ...item,
    id: globalIdCounter++
  }));
};

export const beerData: Product[] = generateIds([

  // STRONG SERIES 2026
  {
    category: "STRONG SERIES 2026",
    name: "Nightfall",
    style: "Imperial Stout",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-nightfall/6622208",
    og: "25.5%",
    abv: "10.0",
    ibu: "40",
    description: "Черный, как обсидиан. Прозрачный только в том смысле, что в нем нет лишнего. Классический имперский стаут без украшательств: горький шоколад, свежеобжаренный кофе и ровная, спокойная горечь в финале. Тело достаточно плотное, чтобы чувствовать вес, но достаточно лёгкое, чтобы не утомлять. Никакой сладости, никакой ванили. Только тёмная глубина и чистота стиля.",
    bottlingDate: "21.02.2026",
    variants: [
      {
        volume: "0.33л",
        price: "390",
        packaging: ["бугель"],
        remaining: "остаток: 10 шт."
      }
    ],
    imageUrl: nightfallImage
  },
  {
    category: "STRONG SERIES 2026",
    name: "Polaris",
    style: "Imperial Stout",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-polaris/6622210",
    og: "25.5%",
    abv: "10.0",
    ibu: "40",
    description: "Черный, как ночь, с золотым отблеском цедры. Классический имперский стаут с чистым вкусом горького шоколада и свежего апельсина. Никакой сладости — только темная глубина какао и яркий, чуть терпкий цитрусовый акцент, который разрезает плотность и оставляет долгое, сухое послевкусие. Тело уверенное, но не тяжелое. Апельсин не маскирует — он мерцает.",
    bottlingDate: "22.02.2026",
    variants: [
      {
        volume: "0.33л",
        price: "400",
        packaging: ["бугель"],
        remaining: "остаток: 7 шт."
      },
      {
        volume: "0.75л",
        price: "810",
        remaining: "остаток: 2 шт."
      },
    ],
    imageUrl: polarisImage
  },


  // SEASON BEER
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
        remaining: "остаток: 3 шт."
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
        remaining: "остаток: 1 шт."
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
        remaining: "остаток: 2 шт."
      }
    ],
    imageUrl: blondeImage
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
        remaining: "остаток: 8 шт."
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
        remaining: "остаток: 5 шт."
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
        remaining: "остаток: 3 шт."
      }
    ],
    imageUrl: dubbelRaisinImage
  },
  {
    category: "SEASON BEER",
    name: "Gloom Brothers",
    style: "Quadrupel",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-gloom-brothers/6622213",
    og: "23.2%",
    abv: "11.2",
    ibu: "25",
    description: "Изысканный и глубокий эль в лучших традициях бельгийского аббатства. В основе вкуса — насыщенная солодовая сердцевина с оттенками карамели, тёмного сахара и грецкого ореха, которая служит идеальной основой для богатого фруктового букета. Пряность проявляется в деликатных фенольных нотках гвоздики и перца, которые уравновешивают сладость и ведут к долгому, элегантно-горьковатому финалу.",
    bottlingDate: "20.02.2026",
    variants: [
      {
        volume: "0.33л",
        price: "280",
        remaining: "остаток: 36 шт."
      }
    ],
    imageUrl: gloomBrothersImage
  },
  {
    category: "SEASON BEER",
    name: "Red Case",
    style: "Quadrupel with Cherry and Vanilla",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-red-case/6622215",
    og: "24.0%",
    abv: "12.0",
    ibu: "20",
    description: "Традиционная мощь бельгийского квадрюпеля переплетается с оттенками вишни и ванили. Плотная солодовая основа с нотами тёмной карамели и инжира обрамлена тонкой кислинкой благородной вишни, которая лишь слегка мерцает на заднем плане, не нарушая монастырского спокойствия. Мягкие ванильные нюансы окутывают вкус бархатистой дымкой, смягчая алкогольную теплоту и оставляя послевкусие, полное уюта и легкой фруктовой задумчивости.",
    bottlingDate: "23.02.2026",
    variants: [
      {
        volume: "0.33л",
        price: "300",
        remaining: "остаток: 27 шт."
      }
    ],
    imageUrl: redCaseImage
  },
  {
    category: "SEASON BEER",
    name: "American Porter",
    style: "American Porter",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-american-porter-2026/6622216",
    og: "16.7%",
    abv: "6.8",
    ibu: "22",
    description: "Насыщенный портер с ярким вкусом кофе и шоколада с изюмом, с оттенками цитрусовых и сочетанием жженой и хмелевой горечи. Во многом похож на английский портер, но обладает более выраженным хмелевым характером и большим содержанием алкоголя.",
    bottlingDate: "22.02.2026",
    variants: [
      {
        volume: "0.45л",
        price: "270",
        remaining: "остаток: 19 шт."
      }
    ],
    imageUrl: americanPorterImage
  },
  {
    category: "SEASON BEER",
    name: "American Porter",
    style: "DDH American Porter",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-american-porter-ddh-2026/6622217",
    og: "16.7%",
    abv: "6.8",
    ibu: "40",
    description: "Насыщенный портер с ярким вкусом кофе и шоколада с изюмом, с оттенками цитрусовых и сочетанием жженой и хмелевой горечи. Во многом похож на английский портер, но обладает более выраженным хмелевым характером и большим содержанием алкоголя. Для дополнительного аромата на вторичное брожения добавлен американский хмель Cascade.",
    bottlingDate: "22.02.2026",
    variants: [
      {
        volume: "0.45л",
        price: "280",
        remaining: "остаток: 22 шт."
      }
    ],
    imageUrl: americanPorterDDHImage
  },


  // 8TH BIRTHDAY
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
        remaining: "остаток: 4 шт."
      }
    ],
    imageUrl: grapeAmericanBwImage
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
        remaining: "остаток: 11 шт."
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
        remaining: "остаток: 6 шт."
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
        remaining: "остаток: 2 шт."
      },
      {
        volume: "0.75л",
        price: "800",
        remaining: "остаток: 2 шт."
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
        remaining: "остаток: 6 шт."
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
        remaining: "остаток: 4 шт."
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
        remaining: "остаток: 4 шт."
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
        remaining: "остаток: 9 шт."
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
        remaining: "остаток: 11 шт."
      },
      {
        volume: "0.45",
        price: "480",
        remaining: "остаток: 2 шт."
      },
      {
        volume: "0.75л",
        price: "820",
        remaining: "остаток: 4 шт."
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
        remaining: "остаток: 11 шт."
      },
      {
        volume: "0.45",
        price: "500",
        remaining: "остаток: 3 шт."
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
        remaining: "остаток: 2 шт."
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
        remaining: "остаток: 5 шт."
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
        remaining: "остаток: 4 шт."
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
        remaining: "остаток: 1 шт."
      }
    ],
    imageUrl: pyroclasticFlowImage
  },
  {
    category: "PEPPER SAUCES",
    name: "Sylvian Reagent",
    style: "Apple, Citrus, Spruce Pepper Sauce",
    spiciness: "2/10",
    description: "Вход в этот лес мягкий. Яблоко и апельсин манят вас по знакомой тропе, ведущей через цитрусовые сады и луковые грядки. Воздух здесь прогрет солнцем. Но чем дальше вы идёте, тем явственнее лес меняется. Пряный розмарин и чеснок переплетаются с корой, и наконец вы слышите дыхание хвои. Пихтовый экстракт и хвойный уксус не кричат, они дышат холодом где-то на периферии, создавая тень. А перцы? Они здесь не палачи. Амарилло и Тринидад — лишь слабые огоньки, освещающие этот лесной сумрак. Они не жгут, они просто показывают вам путь: ваш сад не умер, он просто стал опушкой большого леса. Состав: пюре яблочное, перец Ахи Амарилло, перец Скорпион Тринидад, апельсины, лук, чеснок, розмарин, перец черный, соль морская, мед, уксус хвойный, экстракт пихтовый, масло оливковое.",
    bottlingDate: "18.02.2026",
    variants: [
      {
        volume: "0.2л",
        price: "450",
        remaining: "остаток: 5 шт."
      }
    ],
    imageUrl: sylvianReagentImage
  },
  {
    category: "PEPPER SAUCES",
    name: "Core Sample",
    style: "Miso Carolina Reaper Pepper Sauce",
    spiciness: "7/10",
    description: "Анализировать его бесполезно. Его нужно пережить. Первый контакт — это не вкус, а геология: вы чувствуете слоистость. Сладковатая горечь тлена (чернослив, томаты), солёно-грибной удар мисо, кислотность уксуса, как грунтовая вода. И только когда ваш язык составил карту этой пустоши, происходит тектонический сдвиг. Из самой глубины образца прорывается Рипер. Его острота — не пламя. Это радиация, оставшаяся после взрыва. Она не жжёт, она пронизывает, заставляя каждый предыдущий слой светиться в темноте мутировавшим, невероятно сложным светом. Состав: чернослив, кофе, томаты вяленные, паста мисо, перец Каролина Рипер Смокед, пиво темное (портер), паприка копченая, дым жидкий, соль морская, уксус виноградный, экстракт свеклы.",
    bottlingDate: "03.03.2026",
    variants: [
      {
        volume: "0.2л",
        price: "600",
        remaining: "остаток: 6 шт."
      }
    ],
    imageUrl: coreSampleImage
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