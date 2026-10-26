import type { Product } from "./types/product.ts";
import ddhWheatWineImage from "./images/8th-birthday/ddh_wheat_wine.png";
import buckWheatWineImage from "./images/8th-birthday/buckwheat_wine.png";
import buckWheatWineHoneyImage from "./images/8th-birthday/buckwheat_wine_honey.png";
import warmSlagImage from "./images/pepper-sauces/warm-slag.png";
import domraImage from "./images/9th-birthday/tale.png";
import duskweaverImage from "./images/9th-birthday/duskweaver.png";
import honeyPawImage from "./images/9th-birthday/honey_paw.png";
import rattleberryImage from "./images/9th-birthday/rattleberry.png";
import lingonberryImage from "./images/9th-birthday/lingonberry.png";
import glintwoodImage from "./images/9th-birthday/glintwood.png";
import wolfberryImage from "./images/9th-birthday/wolfberry.png";
import hedgewardenImage from "./images/9th-birthday/hedgewarden.png";
import medovisnjaImage from "./images/9th-birthday/medovisnja.png";
import varDedImage from "./images/9th-birthday/var_ded.png";
import nightwatchImage from "./images/9th-birthday/nightwatch.png";
import phoenixImage from "./images/9th-birthday/phoenix_zest.png";
import solrubrumImage from "./images/9th-birthday/solrubrum.png";
import sunrootImage from "./images/9th-birthday/sunroot.png";
import songberryImage from "./images/9th-birthday/songberry.png";
import rosmaryoshkaImage from "./images/9th-birthday/rosmaryoshka.png";
import seabuckImage from "./images/9th-birthday/seabuck.png";
import sunnelImage from "./images/9th-birthday/sunnel.png";
import appleImage from "./images/9th-birthday/apple.png";
import appleNutmegImage from "./images/9th-birthday/apple_nutmeg.png";
import pearImage from "./images/9th-birthday/pear.png";
import pearVanillaImage from "./images/9th-birthday/pear_vanilla.png";
import pomegranateImage from "./images/9th-birthday/pomegranate.png";
import pomegranateCardamonImage from "./images/9th-birthday/pomegranate_cardamon.png";
import grapeImage from "./images/9th-birthday/grape.png";
import grapeCinnamonImage from "./images/9th-birthday/grape_cinnamon.png";
import monarchImage from "./images/9th-birthday/monarch.png";
import frozenImage from "./images/9th-birthday/frozen.png";
import stoneBearImage from "./images/9th-birthday/stone_bear.png";
import bsaImage from "./images/strong-series-2026/bsa.png";
import botanicalImage from "./images/pepper-sauces/botanical.png";
import amricanSaisonImage from "./images/season-beer/american_saison.png";
import saisonImage from "./images/season-beer/saison.png";
import spruceSaisonImage from "./images/season-beer/spruce_saison.png";
import raspberrySaisonImage from "./images/season-beer/raspberry_saison.png";
import eucalyptusSaisonImage from "./images/season-beer/eucalyptus_saison.png";

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
    name: "BSA",
    style: "British Strong Ale",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-bsa-2026/6851929",
    og: "25.5%",
    abv: "9.5",
    ibu: "40",
    description: "Крепкий эль, традиционно выдержанный в бутылке, с солодовым богатством, горечью английских хмелей, фруктовыми эфирами и алкогольной теплотой. Добавление большого количества особых солодов придают напитку вкус и аромат сухофруктов и карамели, а английские хмели — землистые и цветочные ноты.",
    bottlingDate: "11.08.2026",
    variants: [
      {
        volume: "0.33л",
        price: "350",
        remaining: "остаток: 2 шт."
      },
      {
        volume: "0.375л",
        price: "400",
        remaining: "остаток: 16 шт."
      },
      {
        volume: "0.75л",
        price: "800",
        remaining: "остаток: 1 шт."
      },
    ],
    imageUrl: bsaImage
  },

  // COLLABORATION


  // SEASON BEER
  {
    category: "SEASON BEER",
    name: "The Ransom of Red Chief",
    style: "American Saison with Citrus and Pepper",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-the-ransom-of-red-chief-2026/6961863",
    og: "12.1%",
    abv: "6.2",
    ibu: "20",
    description: "«Фермерское», сильно выброженное, умеренно горькое пиво с освежающе-пряным букетом спелых фруктов, прелого сена и легкими цитрусовыми нотками. Состав: вода, солод ячменный, солод пшеничный, сок и цедра апельсина, смесь перцев (черный, розовый, белый, зеленый), хмель, дрожжи.",
    bottlingDate: "29.09.2026",
    variants: [
      {
        volume: "0.45л",
        price: "300",
        remaining: "остаток: 24 шт."
      }
    ],
    imageUrl: amricanSaisonImage
  },
  {
    category: "SEASON BEER",
    name: "Totem Grain",
    style: "Saison",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-totem-grain/7307678",
    og: "13.0%",
    abv: "6.3",
    ibu: "15",
    description: "Лось стоит на краю поля, не двигаясь. Его копыта вросли в землю, рога тянутся к небу, и в этом молчании — больше смысла, чем в любом крике. Он не ждёт рассвета. Он просто есть. Так и этот сэзон — без лишних движений, без попыток понравиться с первого глотка. Сначала хлебная сухость зерна, потом горчинка, которая приходит не сразу, а когда уже почти забыл о ней. И в самом конце — чистота, как ветер над полем, где уже ничего не растёт, но всё ещё дышит.",
    bottlingDate: "13.10.2026",
    variants: [
      {
        volume: "0.45л",
        price: "280",
        remaining: "остаток: 8 шт."
      }
    ],
    imageUrl: saisonImage
  },
  {
    category: "SEASON BEER",
    name: "Totem Needle",
    style: "Spruce Saison",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-totem-needle/6985989",
    og: "13.0%",
    abv: "6.3",
    ibu: "15",
    description: "Волк не воет — он слушает. Он знает: лес говорит только с теми, кто умеет молчать. В этом сэзоне нет места фруктовой яркости или цветочной сладости. Только хвоя, вплетённая в сухое тело ячменя, и смоляной след, который остаётся на языке как воспоминание о зимнем лесе. Глоток — и ты слышишь ветер в ветвях. Ещё один — и сам становишься частью тишины.",
    bottlingDate: "30.09.2026",
    variants: [
      {
        volume: "0.45л",
        price: "290",
        remaining: "остаток: 14 шт."
      }
    ],
    imageUrl: spruceSaisonImage
  },
  {
    category: "SEASON BEER",
    name: "Totem Root",
    style: "Raspberry & Ginger Saison",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-totem-root/7219071",
    og: "15.0%",
    abv: "7.2",
    ibu: "50",
    description: "Медведь знает, где малина, и он знает, где имбирь. Он не спешит — копает лапой землю и достаёт корни, которые пахнут теплом и огнём. Не ищи в этом сэзоне сладкую сказку. В нём есть острота, которая не бьёт, а пробуждает. Есть ягода, которая не приторна, а честна. И есть земля, которая держит всё вместе. В бокале — прозрачный розовый свет. Тело лёгкое, почти невесомое, а горечь — сухая, тонизирующая, как у хорошего биттера. Малина даёт не сладость, а ягодную искру, имбирь — тёплый укус на выдохе. Освежает, как первый глоток тоника в жаркий день.",
    bottlingDate: "11.10.2026",
    variants: [
      {
        volume: "0.45л",
        price: "310",
        remaining: "остаток: 15 шт."
      }
    ],
    imageUrl: raspberrySaisonImage
  },
  {
    category: "SEASON BEER",
    name: "Totem Leaf",
    style: "Eucalyptus Saison",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-totem-leaf/7307764",
    og: "13.0%",
    abv: "6.3",
    ibu: "20",
    description: "Филин не говорит. Он смотрит. Его крылья раскрыты над эвкалиптовой рощей, и ветер несёт холодную свежесть листьев, которые никогда не желтеют. В этом сэзоне нет суеты — есть только тишина и лист, который парит в ней. Эфирная, травянистая прохлада входит мягко, держится ровно и уходит без следа, оставляя послевкусие чистое, как ночное небо. Садись рядом. Ничего не говори. Просто пей.",
    bottlingDate: "13.10.2026",
    variants: [
      {
        volume: "0.45л",
        price: "300",
        remaining: "остаток: 14 шт."
      }
    ],
    imageUrl: eucalyptusSaisonImage
  },


  // 8TH BIRTHDAY
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
        volume: "0.75л",
        price: "800",
        remaining: "остаток: 2 шт."
      }
    ],
    imageUrl: buckWheatWineHoneyImage
  },

  // 9TH BIRTHDAY
  {
    category: "9TH BIRTHDAY",
    name: "The Domra's Tale",
    style: "Blueberry Melomel",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-the-domra-s-tale/6851924",
    og: "50.0%",
    abv: "15.0",
    ibu: "5",
    description: "В глубине леса, на замшелом пне, сидит седой гусляр. Его голова — спелая черничная гроздь, а пальцы перебирают струны так же бережно, как мы перебираем ягоды для этого меломеля. Ни капли воды — только черника и голубика, только мёд и терпение. Плотный, как вековой ствол, сладкий, как лесная тайна, и тягучий, как песня, которую не хочется прерывать.",
    bottlingDate: "09.05.2026",
    variants: [
      {
        volume: "0.25л",
        price: "700",
        packaging: ["воск"],
        remaining: "остаток: 15 шт."
      },
    ],
    imageUrl: domraImage
  },
  {
    category: "9TH BIRTHDAY",
    name: "Duskweaver",
    style: "Blueberry & Elderberry Melomel",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-duskweaver/6851923",
    og: "50.0%",
    abv: "15.0",
    ibu: "5",
    description: "Черника, голубика и бузина встречаются на лесной поляне в тот час, когда солнце уже село, а луна ещё не взошла. Терпкая, чуть винная нота бузины переплетается с голубико-черничной глубиной, создавая тёмный, многослойный дуэт. Ни воды, ни компромиссов — только ягоды, только мёд и время. Этот меломель не раскрывается сразу: он затягивает, как сумерки, и оставляет после себя долгий, бархатный след.",
    bottlingDate: "26.05.2026",
    variants: [
      {
        volume: "0.25л",
        price: "720",
        packaging: ["воск"],
        remaining: "остаток: 13 шт."
      },
    ],
    imageUrl: duskweaverImage
  },
  {
    category: "9TH BIRTHDAY",
    name: "Honey-Paw",
    style: "Cranberry Melomel",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-honey-paw/6851922",
    og: "50.0%",
    abv: "15.0",
    ibu: "5",
    description: "Медведица у котла знает главный секрет: лучший меломель — тот, где ягода не спорит с мёдом, а дополняет его. Клюква привносит лёгкую, благородную терпкость, которая не перебивает медовую глубину, а лишь подчёркивает её. Никакой воды, никаких уловок — только ягода, мёд и время. И конечно, лапа, уже испачканная в меду — для контроля качества.",
    bottlingDate: "03.06.2026",
    variants: [
      {
        volume: "0.25л",
        price: "730",
        packaging: ["воск"],
        remaining: "остаток: 13 шт."
      },
    ],
    imageUrl: honeyPawImage
  },
  {
    category: "9TH BIRTHDAY",
    name: "Rattleberry",
    style: "Smoothie Cranberry Melomel",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-rattleberry/6851920",
    og: "50.0%",
    abv: "15.0",
    ibu: "5",
    description: "Она сидит неподвижно, но кажется, что вот-вот сорвётся в пляс. В её руках не просто ложки — это инструменты, которыми она вымешивает клюквенную гущу до состояния бархатного киселя. Там, внутри, нет воды — только ягода, мёд и время, которые она превратила в плотную, почти десертную историю. Густой, медленный, тягучий — этот меломель не пьют, его пробуют ложкой. И каждый глоток — как танец, который так и не начался, но уже звучит в голове.",
    bottlingDate: "03.06.2026",
    variants: [
      {
        volume: "0.25л",
        price: "700",
        packaging: ["воск"],
        remaining: "остаток: 6 шт."
      },
    ],
    imageUrl: rattleberryImage
  },
  {
    category: "9TH BIRTHDAY",
    name: "Northern Seal",
    style: "Lingonberry Melomel",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-northern-seal/6851919",
    og: "50.0%",
    abv: "15.0",
    ibu: "5",
    description: "Брусника не кричит о себе. Она растёт там, где другие ягоды не выживают — на северных склонах, среди мхов и ветров. Крепкая, плотная, с характером, который не сразу распознаёшь. В этом меломеле она звучит тихо, но уверенно: сладость мёда не заглушает её, а лишь подчёркивает природную глубину. Ни воды, ни лишних жестов — только ягода, что помнит холод северных ночей, и мёд, собранный в самых дальних ульях.",
    bottlingDate: "09.05.2026",
    variants: [
      {
        volume: "0.25л",
        price: "730",
        packaging: ["воск"],
        remaining: "остаток: 15 шт."
      },
    ],
    imageUrl: lingonberryImage
  },
  {
    category: "9TH BIRTHDAY",
    name: "Glintwood",
    style: "Lingonberry & Mulled Spiced Melomel",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-glintwood/6851917",
    og: "50.0%",
    abv: "15.0",
    ibu: "5",
    description: "В самом сердце зимнего леса, где снег искрится в лунном свете, старый хранитель рецептов склонился над котлом. Его черпак движется медленно, размеренно — как будто он не мешает, а слушает, что происходит внутри. В котле — не просто брусника, а целая зима: апельсин, бадьян, имбирь, мускатный орех, кардамон, изюм, душистый перец. Он не торопится, он знает: волшебство не терпит суеты.",
    bottlingDate: "10.05.2026",
    variants: [
      {
        volume: "0.25л",
        price: "750",
        packaging: ["воск"],
        remaining: "остаток: 12 шт."
      },
    ],
    imageUrl: glintwoodImage
  },
  {
    category: "9TH BIRTHDAY",
    name: "Wolfberry",
    style: "Blackberry Melomel",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-wolfberry/6851915",
    og: "50.0%",
    abv: "15.0",
    ibu: "5",
    description: "Волк не рычит и не скалится. Его тело переплетено зелёными побегами так плотно, что уже непонятно — где зверь, а где куст. Ягоды ежевики облепили ветви, будто всегда здесь росли. Он не охраняет этот лес — он сам стал его частью. В этом меломеле та же история: ежевика не спорит с мёдом, не доминирует, а просто существует в нём, как волк существует в чаще. Без воды, без лишнего шума — только тёмная ягода и мёд. Глоток за глотком, пока лес не станет твоим.",
    bottlingDate: "10.02.2026",
    variants: [
      {
        volume: "0.25л",
        price: "750",
        packaging: ["воск"],
        remaining: "остаток: 13 шт."
      },
    ],
    imageUrl: wolfberryImage
  },
  {
    category: "9TH BIRTHDAY",
    name: "Hedgewarden",
    style: "Blackberry & Thyme Melomel",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-hedgewarden/6851914",
    og: "50.0%",
    abv: "15.0",
    ibu: "5",
    description: "Колючий ёж свернулся в клубок, но это не защита — это равновесие. В его иглах переплелись две силы: тёмная, бархатная ягода и пряная, травянистая зелень чабреца. Инь и янь в одном глотке. Травяная горчинка не борется с ягодной сладостью — она её уравновешивает, создавая странный, но невероятно цельный дуэт. Без воды, только ежевика, чабрец и мёд. Этот меломель для тех, кто ищет не просто вкус, а баланс, который сложно объяснить, но легко почувствовать.",
    bottlingDate: "15.02.2026",
    variants: [
      {
        volume: "0.25л",
        price: "770",
        packaging: ["воск"],
        remaining: "остаток: 6 шт."
      },
    ],
    imageUrl: hedgewardenImage
  },
  {
    category: "9TH BIRTHDAY",
    name: "Medovisnja",
    style: "Cherry Melomel",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-medovisnja/6851913",
    og: "50.0%",
    abv: "15.0",
    ibu: "5",
    description: "Вишня не пытается быть тем, кем не является. Она не прячется за специями, не маскируется под другие ягоды. Она просто есть — сочная, плотная, с той самой мягкой кислинкой, которая не режет, а оставляет после себя приятное, тёплое послевкусие. Мёд подхватывает её, не перебивая, не доминируя, а создавая идеальный баланс. В этом меломеле нет лишних нот — только чистая вишня, только мёд и ни капли воды. Классика, которая работает без объяснений.",
    bottlingDate: "10.02.2026",
    variants: [
      {
        volume: "0.25л",
        price: "730",
        packaging: ["воск"],
        remaining: "остаток: 18 шт."
      },
    ],
    imageUrl: medovisnjaImage
  },
  {
    category: "9TH BIRTHDAY",
    name: "Var-Ded",
    style: "Cherry & Cinnamon Melomel",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-var-ded/6851912",
    og: "50.0%",
    abv: "15.0",
    ibu: "5",
    description: "Кто-то огромный, древний и неторопливый помешивает вишню с корицей, и этот ритм чувствуется в каждом глотке. Корица не перебивает вишнёвую сочность, а мягко обволакивает её, создавая ощущение тепла, которое приходит не сразу, но остаётся надолго. Мёд держит этот дуэт в равновесии, не давая никому перетянуть одеяло на себя. Без воды, только ягода, корица, мёд и время, чтобы всё встало на свои места.",
    bottlingDate: "15.02.2026",
    variants: [
      {
        volume: "0.25л",
        price: "750",
        packaging: ["воск"],
        remaining: "остаток: 8 шт."
      },
    ],
    imageUrl: varDedImage
  },
  {
    category: "9TH BIRTHDAY",
    name: "Nightwatch",
    style: "Black Currant Melomel",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-nightwatch/6851910",
    og: "50.0%",
    abv: "15.0",
    ibu: "5",
    description: "Чёрная птица сидит на ветке и смотрит в ночь. Она не каркает и не хлопает крыльями — просто наблюдает, храня тишину. Таким же плотным, спокойным и тёмным получился этот меломель. Чёрная смородина отдаёт свою насыщенную ягодную глубину, мёд добавляет ей бархатистости, и вместе они звучат без лишнего шума — ровно, уверенно, долго. Без воды. Только ягода, только мёд и ровный свет луны.",
    bottlingDate: "12.02.2026",
    variants: [
      {
        volume: "0.25л",
        price: "750",
        packaging: ["воск"],
        remaining: "остаток: 13 шт."
      },
    ],
    imageUrl: nightwatchImage
  },
  {
    category: "9TH BIRTHDAY",
    name: "Phoenix Zest",
    style: "Black Currant & Orange Zest Melomel",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-black-currant-and-orange-zest-melomel/6851909?edit=success",
    og: "50.0%",
    abv: "15.0",
    ibu: "5",
    description: "Феникс не сгорает дотла — он оставляет после себя искры. Искры, которые пахнут апельсиновой цедрой. Чёрная смородина — это ночь, плотная и бархатная. А цедра — это вспышка, луч света, который разрезает темноту и не даёт ей стать слишком тягучей. Мёд соединяет их так, что ни одна нота не теряется, а только усиливает другую. Без воды. Только ягода, цедра, мёд и та самая искра, с которой всё начинается заново.",
    bottlingDate: "16.02.2026",
    variants: [
      {
        volume: "0.25л",
        price: "770",
        packaging: ["воск"],
        remaining: "остаток: 8 шт."
      },
    ],
    imageUrl: phoenixImage
  },
  {
    category: "9TH BIRTHDAY",
    name: "Solrubrum",
    style: "Red Currant Melomel",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-solrubrum/6851906",
    og: "50.0%",
    abv: "15.0",
    ibu: "5",
    description: "Свет, который исходит от головы, не ослепляет — он согревает. Белая одежда с красными узорами горит в этом сиянии, но парень на табурете даже не щурится — он сам часть этого света. Красная смородина в этом меломеле звучит так же ярко: с характером, с искрой, с той самой кислинкой, которая не даёт заскучать. Мёд смягчает её ровно настолько, чтобы она осталась звонкой, но не колючей. Без воды. Только красная смородина, только мёд и солнечный свет в каждом глотке.",
    bottlingDate: "30.05.2026",
    variants: [
      {
        volume: "0.25л",
        price: "750",
        packaging: ["воск"],
        remaining: "остаток: 17 шт."
      },
    ],
    imageUrl: solrubrumImage
  },
  {
    category: "9TH BIRTHDAY",
    name: "Sunroot Melody",
    style: "Red Currant & Ginger Melomel",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-sunroot-melody/6851905",
    og: "50.0%",
    abv: "15.0",
    ibu: "5",
    description: "Там, где солнечный свет превращается в музыку, красная смородина встречается с имбирём. Кислинка остаётся звонкой, но теперь она согрета изнутри — имбирь добавляет ей глубины, делает финал долгим и уютным. Ягода не теряет своей яркости, но обретает новый оттенок, который хочется разгадывать глоток за глотком. Без воды. Только красная смородина, имбирь, мёд и мелодия, которая остаётся с тобой даже после того, как бокал опустел.",
    bottlingDate: "01.06.2026",
    variants: [
      {
        volume: "0.25л",
        price: "770",
        packaging: ["воск"],
        remaining: "остаток: 9 шт."
      },
    ],
    imageUrl: sunrootImage
  },
  {
    category: "9TH BIRTHDAY",
    name: "Songberry",
    style: "Raspberry Melomel",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-songberry/6851904",
    og: "50.0%",
    abv: "15.0",
    ibu: "5",
    description: "Жар-птица оставляет за собой не только огонь, но и запах лета, нагретой солнцем малины. Её перья переливаются ягодным румянцем, но в этом меломеле нет ни грамма пафоса — только нежная, обволакивающая сладость, которая пахнет июлем, утренней росой и детством, в котором ты бегал по саду с полной ладонью только что сорванных ягод. Мёд не спорит с ней, он просто идёт следом, делая послевкусие долгим и тёплым. Без воды. Только малина, только мёд и жар-птица, которая пролетела над твоим бокалом.",
    bottlingDate: "12.02.2026",
    variants: [
      {
        volume: "0.25л",
        price: "700",
        packaging: ["воск"],
        remaining: "остаток: 21 шт."
      },
    ],
    imageUrl: songberryImage
  },
  {
    category: "9TH BIRTHDAY",
    name: "Rosmaryoshka",
    style: "Raspberry & Rosemary Melomel",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-rosmaryoshka/6851903",
    og: "50.0%",
    abv: "15.0",
    ibu: "5",
    description: "Розмарин и малина сплелись в узор, который разгадываешь слой за слоем, как матрёшку. Сначала — летняя, знакомая ягодная сладость. Потом — свежий, чуть хвойный оттенок розмарина, который не перебивает, а обводит малину по контуру. И только в самом конце — долгое, травянистое послевкусие, которое напоминает, что в каждой матрёшке скрыта ещё одна, а в каждом глотке — новый оттенок. Без воды. Только малина, розмарин, мёд и тайна, которую хочется разгадывать до самого дна.",
    bottlingDate: "11.07.2026",
    variants: [
      {
        volume: "0.25л",
        price: "720",
        packaging: ["воск"],
        remaining: "остаток: 12 шт."
      },
    ],
    imageUrl: rosmaryoshkaImage
  },
  {
    category: "9TH BIRTHDAY",
    name: "Seabuck",
    style: "Sea Buckthorn Melomel",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-seabuck/6851900",
    og: "50.0%",
    abv: "15.0",
    ibu: "5",
    description: "Этот меломель — как момент, когда солнечный свет впервые касается ягоды, выжимает из неё всё самое яркое и маслянистое. Облепиха здесь звучит терпко и узнаваемо, но мёд мягко её обволакивает, превращая эту солнечную кислинку в долгую, согревающую сладость. Без воды. Только облепиха, мёд и солнце, которое наблюдает за тобой в каждом глотке.",
    bottlingDate: "03.06.2026",
    variants: [
      {
        volume: "0.25л",
        price: "700",
        packaging: ["воск"],
        remaining: "остаток: 16 шт."
      },
    ],
    imageUrl: seabuckImage
  },
  {
    category: "9TH BIRTHDAY",
    name: "Sunnel",
    style: "Sea Buckthorn & Fennel Melomel",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-sunnel/6851899",
    og: "50.0%",
    abv: "15.0",
    ibu: "5",
    description: "Зелёная и жёлтая — две подружки на лесной поляне, такие разные, но всегда рядом. Жёлтая пахнет солнцем и облепихой, зелёная — свежим фенхелем и утренней росой. Вместе они создают вкус, который невозможно забыть: солнечная, маслянистая ягодная сладость переплетается с лёгким анисовым шлейфом, и этот дуэт звучит так, будто они всегда были одной историей. Мёд не мешает — он тихо держит их в объятиях, позволяя каждой ноте прозвучать в полную силу. Без воды. Только облепиха, фенхель, мёд и дружба, которая не боится контрастов.",
    bottlingDate: "06.06.2026",
    variants: [
      {
        volume: "0.25л",
        price: "720",
        packaging: ["воск"],
        remaining: "остаток: 15 шт."
      },
    ],
    imageUrl: sunnelImage
  },

  {
    category: "9TH BIRTHDAY",
    name: "Strong Apple Graff",
    style: "Apple Graff",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-strong-apple-graff-2026/6851898",
    og: "36.0%",
    abv: "15.0",
    ibu: "5",
    description: "Яблоко, взятое в чистом виде. Никаких намёков, никаких масок. Плотная, согревающая фруктовая сладость, которая не притворяется сидром. Это яблочная эссенция, собранная в крепком теле. Только пиво и яблочный сок.",
    bottlingDate: "10.04.2026",
    variants: [
      {
        volume: "0.25л",
        price: "450",
        packaging: ["воск"],
        remaining: "остаток: 18 шт."
      },
    ],
    imageUrl: appleImage
  },
  {
    category: "9TH BIRTHDAY",
    name: "Strong Apple Graff with Nutmeg",
    style: "Apple Graff",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-strong-apple-graff-with-nutmeg-2026/6851897",
    og: "36.0%",
    abv: "15.0",
    ibu: "5",
    description: "То же яблоко, но с тёплым дыханием мускатного ореха. Пряность не спорит с фруктом, а ложится поверх — как лёгкая дымка над осенним садом. Сладко, тепло, обволакивающе.",
    bottlingDate: "19.04.2026",
    variants: [
      {
        volume: "0.25л",
        price: "470",
        packaging: ["воск"],
        remaining: "остаток: 12 шт."
      },
    ],
    imageUrl: appleNutmegImage
  },
  {
    category: "9TH BIRTHDAY",
    name: "Strong Pear Graff",
    style: "Pear Graff",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-strong-pear-graff-2026/6851895",
    og: "36.0%",
    abv: "15.0",
    ibu: "5",
    description: "Груша в её самом мягком и душистом виде. Никакой резкости — только нежная фруктовая сладость, которая медленно раскрывается глоток за глотком. Только пиво и грушевый сок.",
    bottlingDate: "11.04.2026",
    variants: [
      {
        volume: "0.25л",
        price: "450",
        packaging: ["воск"],
        remaining: "остаток: 15 шт."
      },
    ],
    imageUrl: pearImage
  },
  {
    category: "9TH BIRTHDAY",
    name: "Strong Pear Graff with Vanilla",
    style: "Pear Graff",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-strong-pear-graff-with-vanilla-2026/6851894",
    og: "36.0%",
    abv: "15.0",
    ibu: "5",
    description: "Груша, укутанная в ваниль. Фруктовая нежность и тёплая ванильная дымка создают бархатистое сочетание, от которого становится тихо и хорошо. Десерт, который не приторен, а благороден.",
    bottlingDate: "19.04.2026",
    variants: [
      {
        volume: "0.25л",
        price: "470",
        packaging: ["воск"],
        remaining: "остаток: 18 шт."
      },
    ],
    imageUrl: pearVanillaImage
  },
  {
    category: "9TH BIRTHDAY",
    name: "Strong Pomegranate Graff",
    style: "Pomegranate Graff",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-strong-pomegranate-graff/6851893",
    og: "36.0%",
    abv: "15.0",
    ibu: "5",
    description: "Гранат — фрукт с характером. Плотно, глубоко, без полутонов. Тёмная, терпкая сладость, которая не заигрывает, а сразу говорит по существу. Для тех, кто любит, когда фрукт звучит серьёзно.",
    bottlingDate: "12.04.2026",
    variants: [
      {
        volume: "0.25л",
        price: "450",
        packaging: ["воск"],
        remaining: "остаток: 15 шт."
      },
    ],
    imageUrl: pomegranateImage
  },
  {
    category: "9TH BIRTHDAY",
    name: "Strong Pomegranate Graff with Cardamom",
    style: "Pomegranate Graff",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-strong-pomegranate-graff-with-cardamom/6851892",
    og: "36.0%",
    abv: "15.0",
    ibu: "5",
    description: "Гранат + кардамон — восточный акцент. Терпкая гранатовая сладость обрамлена пряной нотой кардамона, как узор, который наносится поверх основы. Неожиданно, ярко, запоминается.",
    bottlingDate: "18.04.2026",
    variants: [
      {
        volume: "0.25л",
        price: "470",
        packaging: ["воск"],
        remaining: "остаток: 12 шт."
      },
    ],
    imageUrl: pomegranateCardamonImage
  },
  {
    category: "9TH BIRTHDAY",
    name: "Strong Grape Graff",
    style: "Grape Graff",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-strong-grape-graff-2026/6851890",
    og: "36.0%",
    abv: "15.0",
    ibu: "5",
    description: "Виноград в полную силу. Глоток — и границы между пивом и вином стираются. Плотно, фруктово, благородно. Только пиво и виноградный сок.",
    bottlingDate: "08.04.2026",
    variants: [
      {
        volume: "0.25л",
        price: "450",
        packaging: ["воск"],
        remaining: "остаток: 21 шт."
      },
    ],
    imageUrl: grapeImage
  },
  {
    category: "9TH BIRTHDAY",
    name: "Strong Grape Graff with Cinnamon",
    style: "Grape Graff",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-strong-grape-graff-with-cinnamon-2026/6851889",
    og: "36.0%",
    abv: "15.0",
    ibu: "5",
    description: "Виноград + корица — сладкая пряность. Тёмный виноградный характер, обнятый тёплой корицей. Похоже на рождественский вечер, только крепче и честнее.",
    bottlingDate: "15.04.2026",
    variants: [
      {
        volume: "0.25л",
        price: "470",
        packaging: ["воск"],
        remaining: "остаток: 21 шт."
      },
    ],
    imageUrl: grapeCinnamonImage
  },

  {
    category: "9TH BIRTHDAY",
    name: "Monarch",
    style: "American Barleywine",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-monarch/6851884",
    og: "28.0%",
    abv: "13.5",
    ibu: "40",
    description: "Американский барливайн, проведший три месяца в дубовой бочке из-под портвейна. Карамель, тёмные ягоды, изюм, портвейновый след. Бочка не спорит, а обнимает: благородная винная глубина, тёплая пряность, мягкий, но уверенный алкоголь. Финал долгий, согревающий. Монарх не кричит — он правит молча.",
    bottlingDate: "25.08.2026",
    variants: [
      {
        volume: "0.33л",
        packaging: ["воск"],
        price: "500",
        remaining: "остаток: 2 шт."
      },
    ],
    imageUrl: monarchImage
  },
  {
    category: "9TH BIRTHDAY",
    name: "Desert Frost",
    style: "Frozen Imperial Stout",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-desert-frost/6851883",
    og: "25.0%*",
    abv: "15.0",
    ibu: "50",
    description: "Пустыня замерзает раз в сто лет. Дождись этого момента. Алкоголь рождён выморозкой — вода ушла льдом, оставив только крепость и характер. Плотность даёт телу уверенность без тяжести, а вкус остаётся сухим, обжигающе-холодным, как ночной воздух над барханами. Никакой сладости. Только тёмный шоколад, чёрный кофе и долгое, морозное послевкусие.",
    bottlingDate: "19.02.2026",
    variants: [
      {
        volume: "0.25л",
        packaging: ["воск"],
        price: "400",
        remaining: "остаток: 20 шт."
      },
    ],
    imageUrl: frozenImage
  },
  {
    category: "9TH BIRTHDAY",
    name: "Stone Bear",
    style: "Imperial Stout",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-stone-bear/6851882",
    og: "28.5%",
    abv: "12.5",
    ibu: "40",
    description: "Каменный медведь спал тысячу лет. Тёплое дыхание ванили растопило лёд в его груди, а дуб вернул память о древних лесах. Солодовая мощь, шоколад, тёмная карамель. Ваниль здесь не сладкая и не приторная — тёплая и элегантная. А в глубине просыпается дуб: структура, лёгкая танинность, древесная пряность. Эхо древнего леса, где медведь когда-то бродил.",
    bottlingDate: "22.04.2026",
    variants: [
      {
        volume: "0.33л",
        price: "400",
        packaging: ["воск"],
        remaining: "остаток: 12 шт."
      }
    ],
    imageUrl: stoneBearImage
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
        remaining: "остаток: 2 шт."
      }
    ],
    imageUrl: warmSlagImage
  },
  {
    category: "PEPPER SAUCES",
    name: "Botanical",
    style: "Chickpeas Serrano Pepper Sauce",
    spiciness: "3/10",
    description: "Используйте его, когда вам нужна не «изюминка», а фундамент. Когда вы хотите, чтобы салат, суп, сэндвич или соус имели неизменную, гарантированную зелёную основу. Он не перебивает. Он стабилизирует. Он устраняет элемент случайности из кулинарии. Это вкус уверенности. Вкус того, что всё идёт по плану. Даже если план — полный апокалипсис. Состав: перец болгарский зеленый, нут, перец Серрано, перец Скорпион Тринидад, сельдерей, шпинат, кинза, лук, чеснок, имбирь, лайм, масло оливковое, порошок горчичный, экстракт брокколи, орегано, соль морская.",
    bottlingDate: "03.10.2026",
    variants: [
      {
        volume: "0.2л",
        price: "500",
        remaining: "остаток: 9 шт."
      }
    ],
    imageUrl: botanicalImage
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