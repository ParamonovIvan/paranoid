import alchemistLogo from "./images/brewers/alchemist.png";
import arnulfLogo from "./images/brewers/arnulf.svg";
import harvestLogo from "./images/brewers/harvest.svg";
import jffLogo from "./images/brewers/jff.svg";
import palychLogo from "./images/brewers/palych.svg";
import dedLogo from "./images/brewers/ded.svg";
import forbiddenLogo from "./images/brewers/forbidden.svg";
import brewrushLogo from "./images/brewers/brewrush.svg";
import vlagaLogo from "./images/brewers/vulvin.svg";
import karmakLogo from "./images/brewers/karmak.png";

export interface CollaborationItem {
  type: "contract" | "collab";
  partner: string;
  beerName: string;
  volume: string;
  location: string;
  date: string;
  logoSrc?: string;
}

export const collaborationsData: CollaborationItem[] = [
  // --- КОНТРАКТЫ ---
  {
    type: "contract",
    partner: "Harvest",
    beerName: "Wheat Beer",
    volume: "250 л",
    location: "г. Пермь",
    date: "20.08.2019",
    logoSrc: harvestLogo,
  },
  {
    type: "contract",
    partner: "Harvest",
    beerName: "American Porter",
    volume: "250 л",
    location: "г. Пермь",
    date: "10.09.2019",
    logoSrc: harvestLogo,
  },
  {
    type: "contract",
    partner: "Harvest",
    beerName: "American Pale Ale",
    volume: "250 л",
    location: "г. Пермь",
    date: "04.11.2019",
    logoSrc: harvestLogo,
  },
  {
    type: "contract",
    partner: "Harvest",
    beerName: "Oatmeal Stout",
    volume: "250 л",
    location: "г. Пермь",
    date: "05.11.2019",
    logoSrc: harvestLogo,
  },
  {
    type: "contract",
    partner: "JFF",
    beerName: "Wheat Beer",
    volume: "450 л",
    location: "г. Ижевск",
    date: "23.02.2020",
    logoSrc: jffLogo,
  },
  {
    type: "contract",
    partner: "JFF",
    beerName: "Wheat Beer",
    volume: "450 л",
    location: "г. Ижевск",
    date: "15.05.2021",
    logoSrc: jffLogo,
  },
  {
    type: "contract",
    partner: "Пан Палыч",
    beerName: "Ruby Pale Ale",
    volume: "1000 л",
    location: "г. Ижевск",
    date: "17.01.2023",
    logoSrc: palychLogo,
  },

  // --- КОЛЛАБОРАЦИИ ---
  {
    type: "collab",
    partner: "The Dad and Paddle",
    beerName: "Double Impact (Grapefruit DIPA)",
    volume: "200 л",
    location: "г. Киров",
    date: "25.01.2020",
    logoSrc: dedLogo,
  },
  {
    type: "collab",
    partner: "JFF",
    beerName: "Chocolate Imperial Stout",
    volume: "400 л",
    location: "г. Ижевск",
    date: "01.11.2020",
    logoSrc: jffLogo,
  },
  {
    type: "collab",
    partner: "Запрещенное пиво",
    beerName: "Dubbel",
    volume: "40 л",
    location: "г. Пермь",
    date: "17.03.2021",
    logoSrc: forbiddenLogo,
  },
  {
    type: "collab",
    partner: "Brewrush",
    beerName: "Raspberry / Cherry Porter",
    volume: "80 л",
    location: "г. Краснодар",
    date: "15.08.2021",
    logoSrc: brewrushLogo,
  },
  {
    type: "collab",
    partner: "The Dad and Paddle",
    beerName: "Double Impact (Grapefruit DIPA)",
    volume: "1000 л",
    location: "г. Киров",
    date: "20.11.2021",
    logoSrc: dedLogo,
  },
  {
    type: "collab",
    partner: "Vlaga Vulvin",
    beerName: "Прикамский чернобыль (Gruit)",
    volume: "40 л",
    location: "г. Чайковский",
    date: "10.08.2022",
    logoSrc: vlagaLogo,
  },
  {
    type: "collab",
    partner: "Vlaga Vulvin",
    beerName: "Flugenkaput (Flanders Oud Bruin)",
    volume: "40 л",
    location: "г. Чайковский",
    date: "08.06.2024",
    logoSrc: vlagaLogo,
  },
  {
    type: "collab",
    partner: "Alchemist Brew Lab",
    beerName: "Double Raspberry Stout",
    volume: "80 л",
    location: "г. Москва",
    date: "17.04.2026",
    logoSrc: alchemistLogo,
  },
  {
    type: "collab",
    partner: "Karmak Brewery",
    beerName: "Нигрони (Citrus and Cranberry Melomel with Juniper)",
    volume: "10 л",
    location: "г. Ижевск",
    date: "17.07.2026",
    logoSrc: karmakLogo,
  },
  {
    type: "collab",
    partner: "Karmak Brewery",
    beerName: "Черный прилив (Imperial Stout)",
    volume: "20 л",
    location: "г. Ижевск",
    date: "24.07.2026",
    logoSrc: karmakLogo,
  },
  {
    type: "collab",
    partner: "Karmak Brewery",
    beerName: "Морской бариста (Imperial Stout with Coffee)",
    volume: "20 л",
    location: "г. Ижевск",
    date: "24.07.2026",
    logoSrc: karmakLogo,
  },
  {
    type: "collab",
    partner: "Karmak Brewery",
    beerName: "Вересковый круг (Gruit Braggot)",
    volume: "20 л",
    location: "г. Ижевск",
    date: "29.07.2026",
    logoSrc: karmakLogo,
  },
  {
    type: "collab",
    partner: "Karmak Brewery",
    beerName: "Эвкалиптовый обряд (Gruit Braggot with Eucalyptus and Dried Bitter Orange Peel)",
    volume: "20 л",
    location: "г. Ижевск",
    date: "29.07.2026",
    logoSrc: karmakLogo,
  },
  {
    type: "collab",
    partner: "Karmak Brewery",
    beerName: "Золото Корсара (Barleywine with Maple)",
    volume: "20 л",
    location: "г. Ижевск",
    date: "10.08.2026",
    logoSrc: karmakLogo,
  },
  {
    type: "collab",
    partner: "Арнульф",
    beerName: "Belgian Ale (Tripel)",
    volume: "3000 л",
    location: "г. Ижевск",
    date: "23.10.2026",
    logoSrc: arnulfLogo,
  },
];