import type { Product } from "./types/product.ts";
import ryeWineImage from "./images/8th-birthday/rye_wine.png";
import grapeRyeWineImage from "./images/8th-birthday/grape_rye_wine.png";
import oatWineImage from "./images/8th-birthday/oat_wine.png";
import vanillaOatWineImage from "./images/8th-birthday/vanilla_oat_wine.png";
import wheatWineImage from "./images/8th-birthday/wheat_wine.png";
import ddhWheatWineImage from "./images/8th-birthday/ddh_wheat_wine.png";
import buckWheatWineImage from "./images/8th-birthday/buckwheat_wine.png";
import buckWheatWineHoneyImage from "./images/8th-birthday/buckwheat_wine_honey.png";
import widowsJamImage from "./images/pepper-sauces/widows_jam.png";
import gloomBrothersImage from "./images/season-beer/gloom-brothers.png";
import redCaseImage from "./images/season-beer/red-case.png";
import weizendoppelbockImage from "./images/season-beer/doppelbock.png";
import eveningFluffImage from "./images/season-beer/evening_fluff.png";
import warmSlagImage from "./images/pepper-sauces/warm-slag.png";
import bootsImage from "./images/collaboration/boots.png";
import paleBiteImage from "./images/pepper-sauces/pale_bite.png";
import smokedTomatoGoseImage from "./images/season-beer/smoked_tomato_gose.png";
import auratusImage from "./images/season-beer/auratus.png";
import americanPaleAleImage from "./images/season-beer/american_pale_ale.png";
import orangeryImage from "./images/pepper-sauces/orangery.png";

let globalIdCounter = 1;

const generateIds = (data: Omit<Product, "id">[]) => {
  return data.map((item) => ({
    ...item,
    id: globalIdCounter++
  }));
};

export const beerData: Product[] = generateIds([

  // STRONG SERIES 2026



  // COLLABORATION
  {
    category: "COLLABORATION",
    name: "The Boots",
    style: "Double Stout",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-the-boots/6698834",
    og: "24.0%",
    abv: "9.0",
    ibu: "30",
    description: "Темный фруктовый эль с добавлением сока малины. Обладает приятным малиновым вкусом, с легкой горчинкой. Сочетание жженого солода с сочностью малины и тонкой ягодной кислинкой придает элю неповторимый вкус и аромат. Сварено на экспериментальной пивоварне Грейнрус (Alchemist Brew Lab) в г. Москва.",
    bottlingDate: "04.05.2026",
    variants: [
      {
        volume: "0.5л",
        price: "500",
        remaining: "остаток: 6 шт."
      }
    ],
    imageUrl: bootsImage
  },


  // SEASON BEER
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
        remaining: "остаток: 18 шт."
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
        remaining: "остаток: 13 шт."
      }
    ],
    imageUrl: redCaseImage
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
        remaining: "остаток: 11 шт."
      }
    ],
    imageUrl: weizendoppelbockImage
  },
  {
    category: "SEASON BEER",
    name: "Auratus",
    style: "Honey Imperial Gruit",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-auratus/6655513",
    og: "22.5%",
    abv: "9.8",
    ibu: "50",
    description: "Auratus — это золотая тяжесть в мире пива. Здесь нет хмеля, но есть всё, чтобы выдержать характер. Полынь и тысячелистник задают тон сухой, землистой горечью. Лаванта охлаждает, шиповник добавляет ягодной кислинки и терпкости. А мёд вступает в диалог с этой мощью: он приносит плотную, почти медовую сладость, которая не конфликтует с горечью, а сплетается с ней в сложный, многослойный танец. Финал — долгий, тёплый, с травянистым шлейфом и едва уловимой цветочно-медовой нотой. ",
    bottlingDate: "31.03.2026",
    variants: [
      {
        volume: "0.45л",
        price: "340",
        remaining: "остаток: 1 шт."
      }
    ],
    imageUrl: auratusImage
  },
  {
    category: "SEASON BEER",
    name: "Evening Fluff",
    style: "Dandelion Gruit",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-evening-fluff/6698837",
    og: "18.0%",
    abv: "8.6",
    ibu: "60",
    description: "Грюйт — это пиво, каким его знали до эпохи хмеля. Мы собрали воедино дикие травы и коренья, чтобы создать глубокий, многогранный профиль. Во вкусе доминирует терпкая пикантность тысячелистника и горчинка одуванчика, которые сплетаются с благородной горечью полыни. Лаванда добавляет неожиданный цветочный бриз в послевкусии, унося прочь тяжесть. Идеально для тех, кто устал от IPA и ищет связь с природой.",
    bottlingDate: "04.05.2026",
    variants: [
      {
        volume: "0.45л",
        price: "350",
        remaining: "остаток: 5 шт."
      }
    ],
    imageUrl: eveningFluffImage
  },
  {
    category: "SEASON BEER",
    name: "Smoked Tomato Gose",
    style: "Smoked Tomato Gose",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-smoked-tomato-gose-2026/6753496",
    og: "12.5%",
    abv: "5.5",
    ibu: "10",
    description: "Легкий томатный гозе, сваренный с добавлением копчёной паприки и жидкого дыма. Яркий копченый вкус делает это пиво прекрасным дополнением к мясу.",
    bottlingDate: "16.06.2026",
    variants: [
      {
        volume: "0.45л",
        price: "320",
        remaining: "остаток: 8 шт."
      }
    ],
    imageUrl: smokedTomatoGoseImage
  },
  {
    category: "SEASON BEER",
    name: "Rust Bike",
    style: "American Pale Ale",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-rust-bike/6784275",
    og: "15.0",
    abv: "6.2",
    ibu: "20",
    description: "Охмелённый Chinook и Centennial. Ржавый велосипед, который всё ещё на ходу. Никакой суеты — только ритм американской классики. Chinook заходит первым: смолистая хвоя, чуть землистой тяжести. Centennial подхватывает — сочной цедрой, грейпфрутовой свежестью и цветочным шлейфом. Лёгкое тело, жадно пьётся, не теряя лица.",
    bottlingDate: "09.07.2026",
    variants: [
      {
        volume: "0.45л",
        price: "270",
        remaining: "остаток: 6 шт."
      }
    ],
    imageUrl: americanPaleAleImage
  },

  // 8TH BIRTHDAY
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
        remaining: "остаток: 7 шт."
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
        volume: "0.75л",
        price: "800",
        remaining: "остаток: 1 шт."
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
        volume: "0.75л",
        price: "800",
        remaining: "остаток: 1 шт."
      }
    ],
    imageUrl: vanillaOatWineImage
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
        remaining: "остаток: 1 шт."
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
        price: "350",
        packaging: ["воск"],
        remaining: "остаток: 6 шт."
      },
      {
        volume: "0.75л",
        price: "800",
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
        remaining: "остаток: 10 шт."
      },
      {
        volume: "0.75л",
        price: "800",
        remaining: "остаток: 3 шт."
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
        remaining: "остаток: 8 шт."
      },
      {
        volume: "0.75л",
        price: "800",
        remaining: "остаток: 4 шт."
      }
    ],
    imageUrl: buckWheatWineHoneyImage
  },
]);

export const sauceData: Product[] = generateIds([
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
        remaining: "остаток: 1 шт."
      }
    ],
    imageUrl: widowsJamImage
  },
  {
    category: "PEPPER SAUCES",
    name: "Warm Slag",
    style: "Cherry Chocolate Pepper Sauce",
    spiciness: "2/10",
    description: "Это не жидкость. Это вязкий, зернистый шлак — тяжёлый, как дробь. Первое, что вы чувствуете — не остроту. Плотная, обволакивающая масса ореховой и бобовой крошки берёт язык в плен. А следом вступает главное: сладость. Глубокая, тёмная — от шоколада и чернослива. И только затем сквозь неё пробиваются кисловатые жилы — вишня, гранат и лёгкий хвойный отзвук уксуса. Red Savina здесь есть, но не ждите удара молотом. Это остаточное, фоновое тепло. Оно не жжёт — оно просто греет край горла, напоминая, что перец действительно был. Состав: фасоль красная, вишня, сок гранатовый, чернослив, перец Рэд Савина Хабанеро, орех грецкий, шоколад, розмарин, экстракт пихтовый, мед, уксус хвойный, соль морская, кардамон.",
    bottlingDate: "06.04.2026",
    variants: [
      {
        volume: "0.2л",
        price: "600",
        remaining: "остаток: 5 шт."
      }
    ],
    imageUrl: warmSlagImage
  },
  {
    category: "PEPPER SAUCES",
    name: "Pale Bite",
    style: "Coconut Garlic Pepper Sauce",
    spiciness: "2/10",
    description: "Он не ступает, он плывёт. Он не кричит, он шепчет. «Pale Bite» — это призрак в белом саване, застывший на пороге. Первое прикосновение — обманчиво нежное: сливочный шёпот кокоса и холодный, почти медитативный укус чеснока. Но не верь тишине. В глубине этой белой дымки дышит жаром Хабанеро — медленный, тягучий огонь, который не обжигает, а прорастает изнутри, как память о ещё не сделанном шаге. Состав: кокосовое молоко, чеснок, уксус белый винный, соль, сахар, мед, перец Хабанеро Оранж, ксантановая камедь.",
    bottlingDate: "10.06.2026",
    variants: [
      {
        volume: "0.2л",
        price: "600",
        remaining: "остаток: 3 шт."
      }
    ],
    imageUrl: paleBiteImage
  },
  {
    category: "PEPPER SAUCES",
    name: "Orangery",
    style: "Tropical Charapita Pepper Sauce",
    spiciness: "2/10",
    description: "Откройте банку осторожно. Пахнет не едой. Пахнет заброшенным зимним садом, где под стеклом до сих пор тлеют апельсины. Первый глоток — это обман. Яркая, тропическая атака. Но почти сразу сладость провисает, как старая кожура. И из-под неё проступает другое: хвойная горечь, травянистая резкость, уксусная острота. Приятное, навязчивое, мелкое жжение, которое заставляет вас копаться в этом вкусе дальше, искать утраченную сладость, но находить только всё новые слои странного, красивого разложения. Состав: пюре манго, ананасы, перец Ахи Чарапита Оранж, помидоры черри, лук, ягоды можжевельника, масло оливковое, розмарин, апельсины, перец черный, имбирь, экстракт пихтовый, уксус виноградный, мед, соль морская, экстракт брокколи.",
    bottlingDate: "13.07.2026",
    variants: [
      {
        volume: "0.2л",
        price: "600",
        remaining: "остаток: 5 шт."
      }
    ],
    imageUrl: orangeryImage
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