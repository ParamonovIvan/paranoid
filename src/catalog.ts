import type { Product } from "./types/product.ts";
import grapeAmericanBwImage from "./images/8th-birthday/grape_american_bw.png";
import ryeWineImage from "./images/8th-birthday/rye_wine.png";
import grapeRyeWineImage from "./images/8th-birthday/grape_rye_wine.png";
import oatWineImage from "./images/8th-birthday/oat_wine.png";
import vanillaOatWineImage from "./images/8th-birthday/vanilla_oat_wine.png";
import cumberlandImperialStoutImage from "./images/8th-birthday/cumberland_imperial_stout.png";
import wheatWineImage from "./images/8th-birthday/wheat_wine.png";
import ddhWheatWineImage from "./images/8th-birthday/ddh_wheat_wine.png";
import buckWheatWineImage from "./images/8th-birthday/buckwheat_wine.png";
import buckWheatWineHoneyImage from "./images/8th-birthday/buckwheat_wine_honey.png";
import sunCasketImage from "./images/pepper-sauces/sun_casket.png";
import widowsJamImage from "./images/pepper-sauces/widows_jam.png";
import tripelWithHoneyImage from "./images/season-beer/belgian_tripel _with_honey.png";
import dubbelImage from "./images/season-beer/dubbel.png";
import polarisImage from "./images/strong-series-2026/polaris.png";
import nightfallImage from "./images/strong-series-2026/nightfall.png";
import gloomBrothersImage from "./images/strong-series-2026/gloom-brothers.png";
import redCaseImage from "./images/strong-series-2026/red-case.png";
import peatBloodImage from "./images/pepper-sauces/peat-blood.png";
import weizenbockImage from "./images/season-beer/weizenbock.png";
import weizendoppelbockImage from "./images/season-beer/doppelbock.png";
import herbaticaImage from "./images/season-beer/herbatica.png";
import pinasterImage from  "./images/season-beer/pinaster.png";
import warmSlagImage from "./images/pepper-sauces/warm-slag.png";

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
        remaining: "остаток: 5 шт."
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
        remaining: "остаток: 4 шт."
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
        remaining: "остаток: 6 шт."
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
        remaining: "остаток: 3 шт."
      }
    ],
    imageUrl: dubbelImage
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
        remaining: "остаток: 25 шт."
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
        remaining: "остаток: 15 шт."
      }
    ],
    imageUrl: redCaseImage
  },
  {
    category: "SEASON BEER",
    name: "Goldrush",
    style: "Weizenbock",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-goldrush/6638614",
    og: "18.0%",
    abv: "7.6",
    ibu: "20",
    description: "Этот вайценбок — настоящее золото для ценителей плотных сортов пива. В бокале оно разливается глубоким янтарным цветом, обещая богатство вкуса под шапкой плотной, муссовой пены. Его крепость искусно скрыта за сладостью спелых бананов, пряной гвоздикой и мягкими ванильными нотами, создавая сложный и притягательный букет. Пшеничная основа дарит телу невероятную полноту и шелковистую, округлую текстуру, а легкая алкогольная теплота на финише лишь подчеркивает глубину солода.",
    bottlingDate: "10.03.2026",
    variants: [
      {
        volume: "0.45л",
        price: "300",
        remaining: "остаток: 26 шт."
      }
    ],
    imageUrl: weizenbockImage
  },
  {
    category: "SEASON BEER",
    name: "Steamhaze",
    style: "Weizendoppelbock",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-steamhaze/6638616",
    og: "22.5%",
    abv: "10.3",
    ibu: "20",
    description: "Представь раннее утро в Баварии: над золотыми полями пшеницы поднимается легкий пар, смешиваясь с утренней дымкой. Это дыхание земли, которое мы поймали и закупорили в бутылку. Вайцендоппельбок, где нет ничего лишнего. Традиционный европейский хмель, отборный пшеничный солод, благородные дрожжи и время. Тело плотное, шелковистое. Легкая алкогольная теплота в финише согревает, как первый луч солнца сквозь туман.",
    bottlingDate: "11.03.2026",
    variants: [
      {
        volume: "0.45л",
        price: "320",
        remaining: "остаток: 25 шт."
      }
    ],
    imageUrl: weizendoppelbockImage
  },
  {
    category: "SEASON BEER",
    name: "Herbatica",
    style: "Imperial Gruit",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-lzhec-2026/6638618",
    og: "20.0%",
    abv: "8.4",
    ibu: "50",
    description: "Herbatica — это травяной гримуар в мире пива. Без хмеля, но с характером древних эликсиров. Полынь задаёт тон сухой, продолжительной горечью, тысячелистник добавляет землистой глубины, лаванда — прохлады, а шиповник привносит ягодную кислинку и лёгкую терпкость, словно след от дикого леса. Тело плотное, согревающее, финал — сложный, слоёный: горчит, кислит и медленно уходит в травянистое послевкусие. Это пиво не пьют — его читают как старую рукопись, страница за страницей.",
    bottlingDate: "29.03.2026",
    variants: [
      {
        volume: "0.45л",
        price: "350",
        remaining: "остаток: 2 шт."
      }
    ],
    imageUrl: herbaticaImage
  },
  {
    category: "SEASON BEER",
    name: "Pinaster",
    style: "Spruce Imperial Gruit",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-pinaster/6655514",
    og: "22.5%",
    abv: "9.8",
    ibu: "70",
    description: "Pinaster — это смолистое сердце леса в мире пива. Полынь и тысячелистник задают землистую, терпкую основу, лаванда добавляет цветочной прохлады, шиповник — ягодной кислинки. А экстракт пихты входит главным голосом: он приносит плотную, смолистую вязкость, которая обволакивает нёбо и хвойную горечь, которая не отпускает. Мёд смягчает этот дикий напор, добавляя тягучей золотистой сладости, но остаётся на втором плане. Финал — долгий, смолистый, с хвойным шлейфом, который остаётся на языке, как память о прогулке по зимнему бору. Пейте, закрыв глаза. И представьте, что вы в лесу.",
    bottlingDate: "31.03.2026",
    variants: [
      {
        volume: "0.45л",
        price: "360",
        remaining: "остаток: 2 шт."
      }
    ],
    imageUrl: pinasterImage
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
        remaining: "остаток: 3 шт."
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
        remaining: "остаток: 10 шт."
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
        remaining: "остаток: 1 шт."
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
        remaining: "остаток: 1 шт."
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
        remaining: "остаток: 2 шт."
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
        remaining: "остаток: 2 шт."
      },
      {
        volume: "0.75л",
        price: "810",
        remaining: "остаток: 2 шт."
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
        remaining: "остаток: 10 шт."
      },
      {
        volume: "0.45",
        price: "500",
        remaining: "остаток: 3 шт."
      },
      {
        volume: "0.75л",
        price: "840",
        remaining: "остаток: 4 шт."
      }
    ],
    imageUrl: buckWheatWineHoneyImage
  },
]);

export const sauceData: Product[] = generateIds([
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
        remaining: "остаток: 2 шт."
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
        remaining: "остаток: 2 шт."
      }
    ],
    imageUrl: widowsJamImage
  },
  {
    category: "PEPPER SAUCES",
    name: "Peat Blood",
    style: "Beet, Pear and Lentils Pepper Sauce",
    spiciness: "3/10",
    description: "Это не соус для мяса. Это кровь для земли. Первый вкус — бархатная, обволакивающая тяжесть тёмного солода и свёклы. Вкус влажного верхового торфа, сладковатого и душного. Затем проступает минеральный скелет: пыльность чечевицы и терпкая, смолистая нота можжевельника, холодная и пряная, как дыхание северного леса. Острота Пекина возникает не жаром, а резким контрастом, как луч фонаря в пещере, освещающий древние напластования. Это не приправа. Это палеонтологическая находка. Гастрономический керн. Состав: свекла, груша, чечевица, перец Пекин, пиво темное, лук красный, чеснок, паприка копченая, мало оливковое, ягоды можжевельника, гвоздика, экстракт свеклы, соль морская, мед, уксус хвойный.",
    bottlingDate: "17.03.2026",
    variants: [
      {
        volume: "0.2л",
        price: "600",
        remaining: "остаток: 4 шт."
      }
    ],
    imageUrl: peatBloodImage
  },
  {
    category: "PEPPER SAUCES",
    name: "Warm Slag",
    style: "Cherry Chocolate Pepper Sauce",
    spiciness: "2/10",
    description: "Это не жидкость. Это вязкий, зернистый шлак — тяжёлый, как дробь. Первое, что вы чувствуете — не остроту. Плотная, обволакивающая масса ореховой и бобовой крошки берёт язык в плен. А следом вступает главное: сладость. Глубокая, тёмная — от шоколада и чернослива. И только затем сквозь неё пробиваются кисловатые жилы — вишня, гранат и лёгкий хвойный отзвук уксуса. Red Savina здесь есть, но не ждите удара молотом. Это остаточное, фоновое тепло. Оно не жжёт — оно просто греет край горла, напоминая, что перец действительно был.",
    bottlingDate: "06.04.2026",
    variants: [
      {
        volume: "0.2л",
        price: "700",
        remaining: "остаток: 7 шт."
      }
    ],
    imageUrl: warmSlagImage
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