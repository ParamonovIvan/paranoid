import braggotSpicedImage from "./images/braggot-spiced.png";
import blueberryStrongWildImage from "./images/blueberry-strong-wild.png";
import cherryStrongWildImage from "./images/cherry-strong-wild.png";
import cursedAztecGoldImage from "./images/cursed_aztec_gold.png";
import thirdWorldImage from "./images/third_world.png";
import raspberryWildAleImage from "./images/raspberry_wild_ale.jpeg";
import cherryWildAleImage from "./images/cherry_wild_ale.jpeg";
import cocoGrottoImage from "./images/choco_grotto.png";
import pumpkinAleImage from "./images/pumpkin_ale.png";
import fuckWorkImage from "./images/fuck_work.jpg"
import halloweenIpaImage from "./images/halloween_ipa.png";
import mondaySucksImage from "./images/monday_sucks.jpg";
import citronNectarImage from "./images/citron_nectar.png";
import sweetSpiceImage from "./images/sweet_spice.png";
import burntBerryImage from "./images/burnt_berry.png";
import toTheMoonImage from "./images/to_the_moon.png";
import toTheMoonOakImage from "./images/to_the_moon_oak.png";
import phantomSpaceImage from "./images/phantom_space.png";
import stellarEnergyImage from "./images/stellar_energy.png";
import cosmicHerbsImage from "./images/cosmic_herbs.png";
import graffAppleOakImage from "./images/graff_apple_oak.png"
import graffPearOakImage from "./images/graff_pear_oak.png"
import graffRaspberryImage from "./images/graff_raspberry.png"
import graffRaspberryOakImage from "./images/graff_raspberry_oak.png"
import graffGrapeImage from "./images/graff_grape.png";
import graffCherryImage from "./images/graff_cherry.png";
import graffBlackCurrantImage from "./images/graff_black_currant.png";
import graffBlackCurrantOakImage from "./images/graff_black_currant_oak.png";
import braggotPorterImage from "./images/braggot_porter.png";
import braggotPorterHotImage from "./images/braggot_porter_hot.png";
import braggotPorterSmokedImage from "./images/braggot_porter_smoked.png";
import braggotPorterSpicedImage from "./images/braggot_porter_spiced.png";
import bsaImage from "./images/bsa.png";
import temperanceImage from "./images/temperance.png";
import theMoonImage from "./images/the_moon.png";
import tropicInfernoImage from "./images/tropic_inferno.png";
import pumpkinSparkImage from "./images/pumpkin_spark.png";
import paradisePainImage from "./images/paradise_pain.png";
import cadaverKetchupImage from "./images/cadaver_ketchup.png";
import orchardsWrathImage from "./images/orchards_wrath.png";
import purpleRevengeImage from "./images/purple_revenge.png";
import everbleedImage from "./images/everbleed.png";

export interface ProductVariant {
  volume: string;
  price: string;
  packaging?: string[];
  remaining: string;
}

export interface Product {
  id: number;
  category: string;
  name: string;
  style: string;
  untappdUrl?: string;
  og?: string;
  abv?: string;
  ibu?: string;
  spiciness?: string;
  description: string;
  bottlingDate: string;
  variants: ProductVariant[];
  imageUrl?: string;
}

export const beerData: Product[] = [
  // STRONG SERIES 2024
  {
    id: 1,
    category: "STRONG SERIES 2024",
    name: "Honey Imperial Porter",
    style: "Braggot with Spiced",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-honey-imperial-porter-spiced/5812387",
    og: "27.5%",
    abv: "13.5",
    ibu: "30",
    description: "Смесь портера и местного меда (с. Кудрино, Удмуртия) с добавлением небольшого количества копченого солода для большей сложности вкуса, а также специй и трав (корица, имбирь, женьшень, цедра апельсина и лимона, кориандр, мята, анис, можжевельник, дубовая щепа).",
    bottlingDate: "26.04.2024",
    variants: [
      {
        volume: "0.33л",
        price: "500",
        packaging: ["воск", "тубус"],
        remaining: "остаток: 1 шт."
      }
    ],
    imageUrl: braggotSpicedImage
  },
  {
    id: 2,
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
        remaining: "остаток: 2 шт."
      },
      {
        volume: "0.25л",
        price: "230",
        packaging: ["воск"],
        remaining: "остаток: 7 шт."
      }
    ],
    imageUrl: blueberryStrongWildImage
  },
  {
    id: 3,
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
        remaining: "остаток: 5 шт."
      },
      {
        volume: "0.25л",
        price: "230",
        packaging: ["воск"],
        remaining: "остаток: 8 шт."
      }
    ],
    imageUrl: cherryStrongWildImage
  },

  // STRONG PEPPER SERIES 2024
  {
    id: 4,
    category: "STRONG PEPPER SERIES 2024",
    name: "Cursed Aztec Gold",
    style: "Caribbean Imperial Stout with 7 Pot Douglah Pepper",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-cursed-aztec-gold/5730106",
    og: "24.5%",
    abv: "10.0",
    ibu: "30",
    description: "Имперский стаут, сваренный с добавлением острого перца 7 Pot Douglah (до 1 853 000 сковиллей). Супер острый и сильно охмеленный (Dre Hop - Cascade, Chinook, Simcoe).",
    bottlingDate: "25.02.2024",
    variants: [
      {
        volume: "0.33л",
        packaging: ["воск"],
        price: "330",
        remaining: "остаток: 2 шт."
      }
    ],
    imageUrl: cursedAztecGoldImage
  },
  {
    id: 5,
    category: "STRONG PEPPER SERIES 2024",
    name: "Third World",
    style: "African Imperial Stout with Malagueta Pepper",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-third-world/5730107",
    og: "24.5%",
    abv: "10.0",
    ibu: "30",
    description: "Имперский стаут, сваренный с добавлением острого африканского перца Malagueta (до 100 000) сковиллей и сухо охмеленный Simcoe, Citra и Hallertau Mittelfruh.",
    bottlingDate: "24.02.2024",
    variants: [
      {
        volume: "0.33л",
        packaging: ["воск"],
        price: "330",
        remaining: "остаток: 1 шт."
      }
    ],
    imageUrl: thirdWorldImage
  },

  // SEASON BEER 2025
  {
    id: 6,
    category: "SEASON BEER 2025",
    name: "Удавленный вишней",
    style: "Wild Ale with Cherry",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-udavlennyj-vishnej-2025/6342281",
    og: "13.5%",
    abv: "6.2",
    ibu: "10",
    description: "Кислый эль смешанного брожения с добавлением ягод и сока вишни и бельгийских дрожжей Brettanomysec.",
    bottlingDate: "15.07.2025",
    variants: [
      {
        volume: "0.45л",
        price: "310",
        remaining: "остаток: 3 шт."
      }
    ],
    imageUrl: cherryWildAleImage
  },
  {
    id: 7,
    category: "SEASON BEER 2025",
    name: "Малина язычника",
    style: "Wild Ale with Raspberry",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-malina-yazychnika-2025/6342280",
    og: "13.5%",
    abv: "6.2",
    ibu: "10",
    description: "Кислый эль смешанного брожения с добавлением ягод и сока малины и бельгийских дрожжей Brettanomysec.",
    bottlingDate: "16.07.2025",
    variants: [
      {
        volume: "0.375л",
        price: "310",
        remaining: "остаток: 1 шт."
      }
    ],
    imageUrl: raspberryWildAleImage
  },
  {
    id: 8,
    category: "SEASON BEER 2025",
    name: "The Coco Grotto",
    style: "Coconut Stout",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-the-coco-grotto/6447530",
    og: "15.8%",
    abv: "5.9",
    ibu: "20",
    description: "Затерянный остров вкуса. Этот стаут — ваш ключ от райской лагуны. Насыщенный, но не тяжелый, он сочетает в себе классические ноты жженого солода и щедрую порцию натурального кокоса. Лактоза создает невероятно бархатистую текстуру, превращая каждый глоток в побег от реальности.",
    bottlingDate: "14.10.2025",
    variants: [
      {
        volume: "0.45л",
        price: "300",
        remaining: "остаток: 4 шт."
      }
    ],
    imageUrl: cocoGrottoImage
  },
  {
    id: 9,
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
        remaining: "остаток: 24 шт."
      }
    ],
    imageUrl: pumpkinAleImage
  },
  {
    id: 10,
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
        remaining: "остаток: 9 шт."
      }
    ],
    imageUrl: fuckWorkImage
  },
  {
    id: 11,
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
        remaining: "остаток: 15 шт."
      }
    ],
    imageUrl: halloweenIpaImage
  },
  {
    id: 12,
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
        remaining: "остаток: 9 шт."
      }
    ],
    imageUrl: mondaySucksImage
  },

  // STRONG SERIES 2025
  {
    id: 13,
    category: "STRONG SERIES 2025",
    name: "Citron Nectar",
    style: "Lemongrass Saison Braggot",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-citron-nectar/6154315",
    og: "22.0%",
    abv: "11.6",
    ibu: "10",
    description: "Смесь пива и местного меда (с. Кудрино, Удмуртия) смешанного брожения с добавлением тайского лемонграсса. Сухое, медовое, алкогольное пиво с терпкостью и нотами цитрусовых.",
    bottlingDate: "09.02.2025",
    variants: [
      {
        volume: "0.33л",
        price: "240",
        remaining: "остаток: 1 шт."
      }
    ],
    imageUrl: citronNectarImage
  },
  {
    id: 14,
    category: "STRONG SERIES 2025",
    name: "Sweet Spice",
    style: "Pepper Saison Braggot",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-sweet-spice/6154317",
    og: "22.0%",
    abv: "10.3",
    ibu: "10",
    description: "Смесь пива и местного меда (с. Кудрино, Удмуртия) смешанного брожения с добавлением 4 видов перца: розового, серого, белого и зеленого. Сухое, медовое, алкогольное пиво с терпкостью и пряностью перцев.",
    bottlingDate: "08.02.2025",
    variants: [
      {
        volume: "0.33л",
        price: "240",
        remaining: "остаток: 2 шт."
      }
    ],
    imageUrl: sweetSpiceImage
  },
  {
    id: 15,
    category: "STRONG SERIES 2025",
    name: "Burnt Berry",
    style: "Raspberry Imperial Stout",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-burnt-berry/6183506",
    og: "27.0%",
    abv: "12.5",
    ibu: "30",
    description: "Крепкий имперский стаут двойного затирания, сваренный с добавлением овсяных хлопьев и сока малины. Насыщенный вкус с нотами шоколада, кофе и запеченной малины.",
    bottlingDate: "01.03.2025",
    variants: [
      {
        volume: "0.33л",
        price: "330",
        packaging: ["воск"],
        remaining: "остаток: 2 шт."
      }
    ],
    imageUrl: burntBerryImage
  },
  {
    id: 16,
    category: "STRONG SERIES 2025",
    name: "To the Moon",
    style: "Cherry Imperial Stout",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-to-the-moon/6228368",
    og: "31.0%",
    abv: "11.0",
    ibu: "30",
    description: "Крепкий и плотный имперский стаут двойного затирания, сваренный с добавлением лактозы и сока вишни. Насыщенный вкус с нотами молочного шоколада и ягодной кислинки.",
    bottlingDate: "03.04.2025",
    variants: [
      {
        volume: "0.33л",
        price: "350",
        packaging: ["воск"],
        remaining: "остаток: 2 шт."
      }
    ],
    imageUrl: toTheMoonImage
  },
  {
    id: 17,
    category: "STRONG SERIES 2025",
    name: "To the Moon (oak)",
    style: "Cherry Imperial Stout (oak edition)",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-to-the-moon-oak-edition/6228372",
    og: "31.0%",
    abv: "11.7",
    ibu: "30",
    description: "Крепкий и плотный имперский стаут двойного затирания, сваренный с добавлением лактозы, сока вишни и выдержанный с вымоченными в виски чипсами из американского дуба. Насыщенный вкус с нотами молочного шоколада и ягодной кислинки, дополненный нотами американского дуба.",
    bottlingDate: "03.04.2025",
    variants: [
      {
        volume: "0.33л",
        price: "370",
        packaging: ["воск"],
        remaining: "остаток: 2 шт."
      }
    ],
    imageUrl: toTheMoonOakImage
  },
  {
    id: 18,
    category: "STRONG SERIES 2025",
    name: "Phantom Space",
    style: "Black Currant Imperial Stout",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-phantom-space/6228374",
    og: "30.1%",
    abv: "10.8",
    ibu: "30",
    description: "Крепкий плотный имперский стаут двойного затирания, сваренный с добавлением сока черной смородины и лактозы. Насыщенный вкус молочного шоколада с кофейными и ягодными нотами.",
    bottlingDate: "04.04.2025",
    variants: [
      {
        volume: "0.33л",
        price: "350",
        packaging: ["воск"],
        remaining: "остаток: 1 шт."
      }
    ],
    imageUrl: phantomSpaceImage
  },
  {
    id: 19,
    category: "STRONG SERIES 2025",
    name: "Stellar Energy",
    style: "Coffee Imperial Stout",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-stellar-energy/6228382",
    og: "26.0%",
    abv: "10.5",
    ibu: "35",
    description: "Имперский стаут двойного затирания, сваренный с добавлением лактозы, кофе и мяты. Насыщенный вкус с нотами кофе, шоколада и нотками мяты.",
    bottlingDate: "14.04.2025",
    variants: [
      {
        volume: "0.33л",
        price: "330",
        packaging: ["воск"],
        remaining: "остаток: 1 шт."
      }
    ],
    imageUrl: stellarEnergyImage
  },
  {
    id: 20,
    category: "STRONG SERIES 2025",
    name: "Cosmic Herbs",
    style: "Juniper and Mugwort Imperial Stout",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-cosmic-herbs/6236309",
    og: "27.0%",
    abv: "11.0",
    ibu: "70",
    description: "Имперский стаут двойного затирания, сваренный с добавлением лактозы, полыни и ягод можжевельника. Насыщенный вкус с нотами горького шоколада, кофе, можжевельника и полыни.",
    bottlingDate: "18.04.2025",
    variants: [
      {
        volume: "0.33л",
        price: "350",
        packaging: ["воск"],
        remaining: "остаток: 2 шт."
      }
    ],
    imageUrl: cosmicHerbsImage
  },
  {
    id: 21,
    category: "STRONG SERIES 2025",
    name: "Strong Apple Graff (oak)",
    style: "Apfelwein (oak edition)",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-strong-apple-graff-oak-aged/6208891",
    og: "31.5%",
    abv: "15.8",
    ibu: "15",
    description: "Пиво, сваренное в стиле Apfelwein с добавлением яблочного сока (30%). Состав солода: 50% пилсен, 50% пшеничный, хмель Cascade, вымоченная в хересе спираль сильного обжига из американского дуба.",
    bottlingDate: "24.03.2025",
    variants: [
      {
        volume: "0.33л",
        price: "280",
        remaining: "остаток: 1 шт."
      }
    ],
    imageUrl: graffAppleOakImage
  },
  {
    id: 22,
    category: "STRONG SERIES 2025",
    name: "Strong Pear Graff (oak)",
    style: "Appliqueing with Pear (oak edition)",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-strong-pear-graff-oak-aged/6208896",
    og: "30.5%",
    abv: "14.7",
    ibu: "15",
    description: "Пиво, сваренное в стиле Apfelwein с добавлением грушевого сока (30%). Состав солода: 50% пилсен, 50% пшеничный, хмель Cascade, вымоченная в хересе спираль сильного обжига из американского дуба.",
    bottlingDate: "16.03.2025",
    variants: [
      {
        volume: "0.33л",
        price: "260",
        remaining: "остаток: 2 шт."
      }
    ],
    imageUrl: graffPearOakImage
  },
  {
    id: 23,
    category: "STRONG SERIES 2025",
    name: "Strong Raspberry Graff",
    style: "Apfelwein with Raspberry",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-strong-raspberry-graff/6208900",
    og: "29.0%",
    abv: "12.8",
    ibu: "15",
    description: "Пиво, сваренное в стиле Apfelwein с добавлением сока малины (30%). Состав солода: 50% пилсен, 50% пшеничный, хмель Cascade.",
    bottlingDate: "15.03.2025",
    variants: [
      {
        volume: "0.33л",
        price: "270",
        remaining: "остаток: 3 шт."
      }
    ],
    imageUrl: graffRaspberryImage
  },
  {
    id: 24,
    category: "STRONG SERIES 2025",
    name: "Strong Raspberry Graff (oak)",
    style: "Apfelwein with Raspberry (oak edition)",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-strong-raspberry-graff-oak-aged/6208901",
    og: "29.0%",
    abv: "13.3",
    ibu: "15",
    description: "Пиво, сваренное в стиле Apfelwein с добавлением сока малины (30%). Состав солода: 50% пилсен, 50% пшеничный, хмель Cascade, вымоченная в хересе спираль сильного обжига из американского дуба.",
    bottlingDate: "15.03.2025",
    variants: [
      {
        volume: "0.33л",
        price: "280",
        remaining: "остаток: 2 шт."
      }
    ],
    imageUrl: graffRaspberryOakImage
  },
  {
    id: 25,
    category: "STRONG SERIES 2025",
    name: "Strong Grape Graff",
    style: "Apfelwein with Grape",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-strong-grape-graff/6208904",
    og: "27.0%",
    abv: "14.4",
    ibu: "15",
    description: "Пиво, сваренное в стиле Apfelwein с добавлением виноградного сока (30%). Состав солода: 50% пилсен, 50% пшеничный, хмель Cascade.",
    bottlingDate: "25.03.2025",
    variants: [
      {
        volume: "0.33л",
        price: "250",
        remaining: "остаток: 4 шт."
      }
    ],
    imageUrl: graffGrapeImage
  },
  {
    id: 26,
    category: "STRONG SERIES 2025",
    name: "Strong Cherry Graff",
    style: "Apfelwein with Cherry",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-strong-cherry-graff/6208911",
    og: "25.5%",
    abv: "10.2",
    ibu: "15",
    description: "Пиво, сваренное в стиле Apfelwein с добавлением сока вишни (30%). Состав солода: 50% пилсен, 50% пшеничный, хмель Cascade.",
    bottlingDate: "26.03.2025",
    variants: [
      {
        volume: "0.33л",
        price: "250",
        remaining: "остаток: 4 шт."
      }
    ],
    imageUrl: graffCherryImage
  },
  {
    id: 27,
    category: "STRONG SERIES 2025",
    name: "Strong Black Currant Graff",
    style: "Apfelwein with Black Currant",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-strong-black-currant-graff/6208917?edit=success",
    og: "25.5%",
    abv: "13.0",
    ibu: "15",
    description: "Пиво, сваренное в стиле Apfelwein с добавлением сока черной смородины (30%). Состав солода: 50% пилсен, 50% пшеничный, хмель Cascade.",
    bottlingDate: "29.03.2025",
    variants: [
      {
        volume: "0.33л",
        price: "270",
        remaining: "остаток: 5 шт."
      }
    ],
    imageUrl: graffBlackCurrantImage
  },
  {
    id: 28,
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
        remaining: "остаток: 4 шт."
      }
    ],
    imageUrl: graffBlackCurrantOakImage
  },
  {
    id: 29,
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
        remaining: "остаток: 3 шт."
      }
    ],
    imageUrl: braggotPorterImage
  },
  {
    id: 30,
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
        remaining: "остаток: 4 шт."
      }
    ],
    imageUrl: braggotPorterHotImage
  },
  {
    id: 31,
    category: "STRONG SERIES 2025",
    name: "Honey Imperial Porter (smoked)",
    style: "Smoked Braggot",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-honey-imperial-porter-braggot-smoked-style/6259914",
    og: "29.0%",
    abv: "11.1",
    ibu: "20",
    description: "Смесь портера и местного меда (с. Кудрино, Удмуртия) с добавлением щедрого количества копченого солода для большей сложности вкуса.",
    bottlingDate: "08.05.2025",
    variants: [
      {
        volume: "0.33л",
        price: "300",
        packaging: ["воск"],
        remaining: "остаток: 2 шт."
      }
    ],
    imageUrl: braggotPorterSmokedImage
  },
  {
    id: 32,
    category: "STRONG SERIES 2025",
    name: "Honey Imperial Porter (spiced)",
    style: "Braggot with Spiced",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-honey-imperial-porter-braggot-spiced-style/6259922",
    og: "29.0%",
    abv: "11.3",
    ibu: "20",
    description: "Смесь портера и местного меда (с. Кудрино, Удмуртия) с добавлением небольшого количества копченого солода для большей сложности вкуса, а также специй и трав (корица, имбирь, женьшень, цедра апельсина и лимона, кориандр, мята, анис, можжевельник, дубовая щепа).",
    bottlingDate: "08.05.2025",
    variants: [
      {
        volume: "0.33л",
        price: "310",
        packaging: ["воск"],
        remaining: "остаток: 1 шт."
      }
    ],
    imageUrl: braggotPorterSpicedImage
  },
  {
    id: 33,
    category: "STRONG SERIES 2025",
    name: "BSA",
    style: "British Strong Ale",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-bsa-2025/6291279",
    og: "23.5%",
    abv: "11.2",
    ibu: "40",
    description: "Крепкий эль, традиционно выдержанный в бутылке, с солодовым богатством, горечью английских хмелей, фруктовыми эфирами и алкогольной теплотой. Добавление большого количества особых солодов придают напитку вкус и аромат сухофруктов и карамели, а английских хмелей - землистые и цветочные ноты.",
    bottlingDate: "04.06.2025",
    variants: [
      {
        volume: "0.33л",
        price: "280",
        remaining: "остаток: 1 шт."
      }
    ],
    imageUrl: bsaImage
  },
  {
    id: 34,
    category: "STRONG SERIES 2025",
    name: "Temperance",
    style: "Strong Grape Ale",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-temperance-2025/6392003",
    og: "23.0%",
    abv: "10.5",
    ibu: "20",
    description: "Этот проект — эксперимент по созданию сложного напитка. За основу взята смесь пивного сусла и виноградного сока, которая прошла полное брожение на пивных дрожжах. Это позволило раскрыть фруктовый потенциал сока, придав ему те самые пивные нюансы, которые мы так любим.",
    bottlingDate: "22.08.2025",
    variants: [
      {
        volume: "0.33л",
        price: "300",
        packaging: ["воск"],
        remaining: "остаток: 1 шт."
      }
    ],
    imageUrl: temperanceImage
  },
  {
    id: 35,
    category: "STRONG SERIES 2025",
    name: "The Moon",
    style: "Strong Grape Ale with Vanilla",
    untappdUrl: "https://untappd.com/b/paranoid-brewery-the-moon/6392004",
    og: "23.0%",
    abv: "10.5",
    ibu: "20",
    description: "Этот уникальный гибрид стирает границы между пивным и винным мирами. Тут смешано классическое пивное сусло с виноградным соком и сброженно верными пивными дрожжам, а на стадии созревания была щедро добавлена натуральная ваниль.",
    bottlingDate: "22.08.2025",
    variants: [
      {
        volume: "0.33л",
        price: "310",
        packaging: ["воск"],
        remaining: "остаток: 4 шт."
      }
    ],
    imageUrl: theMoonImage
  },
];

export const sauceData: Product[] = [
  {
    id: 36,
    category: "PEPPER SAUCES",
    name: "Tropic Inferno",
    style: "Caribbean Pepper Sauce",
    spiciness: "7/10",
    description: "Свежий ветер с Карибских островов, несущий лёгкий огонь. Зелёный хаос перцев, приручённый фруктовой сладостью и цитрусовой кислотностью. Кинза и имбирь освежают, а горчица придает пикантную глубину. Это не жгучий шторм, а освежающий тропический ливень с теплыми всполохами остроты. Преобразит тако, курицу-гриль и бургеры. Состав: перец зеленый болгарский, перец Халапеньо, перец Призрак зеленый, перец Хабанеро зеленый, сельдерей, лук, сок ананасовый, манго, бананы, апельсины, имбирь, кинза, дижонская горчица, уксус яблочный, соль морская, сахар тростниковый, крахмал Аррорут.",
    bottlingDate: "15.09.2025",
    variants: [
      {
        volume: "0.2л",
        price: "600",
        remaining: "остаток: 1 шт."
      }
    ],
    imageUrl: tropicInfernoImage
  },
  {
    id: 37,
    category: "PEPPER SAUCES",
    name: "Pumpkin Spark",
    style: "Pumpkin Pepper Sauce",
    spiciness: "6/10",
    description: "Не бархатный осенний крем, а яркая вспышка на стыке сезонов. Сладость моркови и тыквы, подхваченная тростниковым сахаром, — это лишь разбег для мощного прыжка. Острота «Дыхания Дракона» пробивается сквозь сладкую плоть, как огненная молния, но ей на смену тут же приходят согревающие специи: корица, мускатный орех, гвоздика и имбирь. Яблочный уксус добавляет свежей, игристой кислотности. Преобразит запеченную тыкву, сырные тако и свиные отбивные. Состав: перец желтый болгарский, перец Дыхание дракона, морковь, лук, чеснок, имбирь, гвоздика, мускатный орех, корица, перец черный, уксус яблочный, соль морская, сахар тростниковый.",
    bottlingDate: "10.10.2025",
    variants: [
      {
        volume: "0.2л",
        price: "500",
        remaining: "остаток: 6 шт."
      }
    ],
    imageUrl: pumpkinSparkImage
  },
  {
    id: 38,
    category: "PEPPER SAUCES",
    name: "Paradise Pain",
    style: "Strawberry Pepper Sauce",
    spiciness: "8/10",
    description: "Нежная сладость спелой клубники и солнечного апельсина обволакивает, как тропический бриз. Но наслаждение обманчиво. В следующую секунду Каролина Рипер обрушивает на вас огненную лавину, безжалостную и очищающую. Имбирь и соевый соус добавляют пикантной глубины, превращая простой жар в сложную симфонию страдания и восторга. Это не просто соус, это экстремальный гастрономический опыт. Для тех, кто ищет адреналин в каждой капле. Состав: перец красный болгарский, перец Каролина Рипер красный, лук, морковь, сок клубники, клубника, апельсины, имбирь, чеснок, соус соевый, уксус яблочный, соль морская, крахмал Аррорут.",
    bottlingDate: "10.10.2025",
    variants: [
      {
        volume: "0.2л",
        price: "600",
        remaining: "остаток: 7 шт."
      }
    ],
    imageUrl: paradisePainImage
  },
  {
    id: 39,
    category: "PEPPER SAUCES",
    name: "Cadaver Ketchup",
    style: "Coffee BBQ Pepper Sauce",
    spiciness: "3/10",
    description: "Мы не стали его готовить. Мы его препарировали. Вскрыли томатную основу и пропитали её солодовым экстрактом. Вживили в неё копчёный перец Скорпион Тринидад и Хабанеро шоколадный, чей жар – как трупное окоченение для рецепторов. Чёрный кофе и жидкий дым — это финальная стадия бальзамирования, консервирующая вкус на века. Острота 3? Это не жар. Это лёгкая стадия разложения, которая и придаёт истинную пикантность. Для настоящих ценителей посмертной гастрономии. Состав: перец красный болгарский, перец Хабанеро шоколадный, перец Скорпион Тринидад смокед Бутч-Т, томатная паста, лук, чеснок, жидкий дым, солодовый экстракт, кофе, паприка сладкая, паприка копченая, черный перец, зира, уксус яблочный, соль морская.",
    bottlingDate: "10.10.2025",
    variants: [
      {
        volume: "0.2л",
        price: "600",
        remaining: "остаток: 2 шт."
      }
    ],
    imageUrl: cadaverKetchupImage
  },
  {
    id: 40,
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
        remaining: "остаток: 2 шт."
      }
    ],
    imageUrl: orchardsWrathImage
  },
  {
    id: 41,
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
        remaining: "остаток: 7 шт."
      }
    ],
    imageUrl: purpleRevengeImage
  },
  {
    id: 42,
    category: "PEPPER SAUCES",
    name: "Everbleed",
    style: "Lingonberries Pepper Sauce",
    spiciness: "3/10",
    description: "Этот соус — не рана, а вечное кровотечение. Первый аккорд — это терпкая сладость брусники и клюквы, загустевшая тростниковым сахаром и тёмным нектаром варенья из сосновых шишек. Это смолистый шёпот хвойного лева, обманчивый покой заснеженного поля. Но из-под ягодного ковра медленно прорастает жар перца 7 Pot Gravedigger — его острота (3/10) не обжигает, а тлеет в глубине, как холодный огонь под слоем хвои. Еловые побеги и розмарин вонзают свои иглы, а корица завершает этот обряд, оставляя послевкусие древней, окаменевшей смолы. Это порча на самую тёплую пищу, превращающая каждую трапезу в ритуал забытого божества леса. Состав: брусника, клюква, перец красный болгарский, перец 7 Пот Грейв Диггер, еловые побеги, варенье из сосновых шишек, розмарин, корица, черный перец, уксус яблочный, соль морская, сахар тростниковый.",
    bottlingDate: "08.11.2025",
    variants: [
      {
        volume: "0.2л",
        price: "600",
        remaining: "остаток: 3 шт."
      }
    ],
    imageUrl: everbleedImage
  }
];

export const accessoriesData: Product[] = [
  {
    id: 43,
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
];