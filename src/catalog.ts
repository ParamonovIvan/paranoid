import type { Product } from "./types/product.ts";
import oatWineImage from "./images/8th-birthday/oat_wine.png";
import ddhWheatWineImage from "./images/8th-birthday/ddh_wheat_wine.png";
import buckWheatWineImage from "./images/8th-birthday/buckwheat_wine.png";
import buckWheatWineHoneyImage from "./images/8th-birthday/buckwheat_wine_honey.png";
import gloomBrothersImage from "./images/strong-series-2026/gloom-brothers.png";
import weizendoppelbockImage from "./images/strong-series-2026/doppelbock.png";
import warmSlagImage from "./images/pepper-sauces/warm-slag.png";
import paleBiteImage from "./images/pepper-sauces/pale_bite.png";
import smokedTomatoGoseImage from "./images/season-beer/smoked_tomato_gose.png";
import orangeryImage from "./images/pepper-sauces/orangery.png";
import cranberryWheatImage from "./images/season-beer/cranberry_wheat.png";
import spruceBloodImage from "./images/pepper-sauces/spruce_blood.png";

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
        remaining: "остаток: 5 шт."
      }
    ],
    imageUrl: gloomBrothersImage
  },
  {
    category: "STRONG SERIES 2026",
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
        remaining: "остаток: 2 шт."
      }
    ],
    imageUrl: weizendoppelbockImage
  },

  // COLLABORATION


  // SEASON BEER
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
        remaining: "остаток: 4 шт."
      }
    ],
    imageUrl: smokedTomatoGoseImage
  },
  {
    category: "SEASON BEER",
    name: "Cranberry Wheat Beer",
    style: "Wheat Beer",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-cranberry-wheat-beer-2026/6818025",
    og: "13.0",
    abv: "5.0",
    ibu: "10",
    description: "Пшеница и клюква. Ничего лишнего. Мягкое, чуть облачное тело с хлебной нежностью пшеничного солода, а сверху — северная ягода: терпкая, освежающая, с той самой кислинкой, от которой просыпаются рецепторы. Финал сухой, как клюквенный морс в жаркий полдень.",
    bottlingDate: "04.05.2026",
    variants: [
      {
        volume: "0.45л",
        price: "270",
        remaining: "остаток: 15 шт."
      }
    ],
    imageUrl: cranberryWheatImage
  },

  // 8TH BIRTHDAY
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
        remaining: "остаток: 3 шт."
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
        remaining: "остаток: 6 шт."
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
        remaining: "остаток: 4 шт."
      },
      {
        volume: "0.75л",
        price: "800",
        remaining: "остаток: 2 шт."
      }
    ],
    imageUrl: buckWheatWineHoneyImage
  },
]);

export const sauceData: Product[] = generateIds([
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
        remaining: "остаток: 4 шт."
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
        remaining: "остаток: 2 шт."
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
        remaining: "остаток: 3 шт."
      }
    ],
    imageUrl: orangeryImage
  },
  {
    category: "PEPPER SAUCES",
    name: "Spruce Blood",
    style: "lingonberries Pepper Sauce",
    spiciness: "3/10",
    description: "Это не джем. Это то, во что превращается джем, когда его забывают в лесу на год. Брусника и клюква дают плотную, тёмную кислинку, как у старого красного вина. Хвойные побеги — не ментол, а древесная горечь. Экстракт пихты как смола, разогретая солнцем, липкая и тягучая. Острота — без ударов. Халапеньо и Скорпион Тринидад разливаются сухим, ровным теплом, которое не отпускает. Болгарский перец добавляет мясистый объём, розмарин и корица — терпкий финиш. Это соус, который пахнет лесом, гниющими шишками и тишиной. Состав: брусника, клюква, перец красный болгарский, перец Халапеньо красный, перец Скорпион Тринидад, еловые побеги, экстракт пихты, розмарин, корица, черный перец, уксус яблочный, соль морская, сахар тростниковый.",
    bottlingDate: "30.07.2026",
    variants: [
      {
        volume: "0.2л",
        price: "700",
        remaining: "остаток: 2 шт."
      }
    ],
    imageUrl: spruceBloodImage
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