import darkChristmasSaison from "./images/archive/05-home.webp";
import neipa from "./images/archive/600-gramm.webp";
import dangerousAstrotomato from "./images/archive/dangerous-asrtotomato.webp";
import dangerousAstrotomatoHot from "./images/archive/dangerous-asrtotomato-he.webp";
import doubleImpact from "./images/archive/duble-impact.webp";
import freeday from "./images/archive/freeday-fuck-work.webp";
import gorkayaPravda from "./images/archive/gorkaya-pravda.webp";
import mondaySucks from "./images/archive/monday-sucks.webp";
import saintGrigory from "./images/archive/not-quite-saint-grigory.webp";
import sessionCandy from "./images/archive/session-candy-orange-ipa.webp";
import shitHappens from "./images/archive/shit-happens.webp";

import beetBuckwheat from "./images/archive/beet-buckwheat-ale.webp";
import blancheKiwi from "./images/archive/blanche-kiwi.webp";
import cranberryWheat from "./images/archive/cranberry-wheat-beer.webp";
import halloweenIpa from "./images/archive/halloween-ipa.webp";
import jalapenoSaison from "./images/archive/jalapeno-saison.webp";
import citrixMosaix from "./images/archive/kveik-ipa.webp";
import lemonCoriander from "./images/archive/lemon-coriander-sour-ale.webp";
import mangoGose from "./images/archive/mango-gose.webp";

import curryTomato from "./images/archive/curry-tomato-gose.webp";
import curryTomatoHot from "./images/archive/curry-tomato-gose-he.webp";
import smoothieCherry from "./images/archive/pasrty-smoothie-ale-cherry-raspberry.webp";
import smoothieMango from "./images/archive/pasrty-smoothie-ale-mango-banana.webp";
import tomYum from "./images/archive/tom-yum-tomato-gose.webp";
import tomYumHot from "./images/archive/tom-yum-tomato-gose-he.webp";

import barnayaOdisseya from "./images/archive/baranaya-odisseya.webp";
import buynyMolokos from "./images/archive/buinii-molokosos.webp";
import lzhets from "./images/archive/ljec.webp";
import odinokiyMarsianin from "./images/archive/odinokii-marsianin.webp";
import otlichnayaIstoriya from "./images/archive/otlichnaya-istoriya.webp";
import podKronoyPney from "./images/archive/pod-kronoi-pnei.webp";
import robinBobin from "./images/archive/robin-bobin.webp";
import taktikaStivena from "./images/archive/taktika-stivena.webp";
import tvoyPyanyBatea from "./images/archive/tvoi-pyanii-batya.webp";
import hmelnayaIspoved from "./images/archive/hmelnaya-ispoved.webp";
import huligan from "./images/archive/huligan.webp";
import kislosmerie from "./images/archive/kislosmertie.webp";
import malinaYazychnika from "./images/archive/malina-yazichnika.webp";
import udavlennyVishney from "./images/archive/udavlennii-vishnei.webp";

import lowToxicity from "./images/archive/low-toxicity.webp";
import chlorophyllZ from "./images/archive/chlorophyll-z.webp";
import harvestSerum from "./images/archive/harvest-serum.webp";
import lastResort from "./images/archive/last-resort.webp";
import basilisk from "./images/archive/basilisk.webp";
import berryScorch from "./images/archive/berry-scorch.webp";
import blueSmolder from "./images/archive/blue-smolder.webp";
import tropicInferno from "./images/archive/tropic-inferno.webp";
import scorchedCherry from "./images/archive/scorched-cherry.webp";
import solarFlare from "./images/archive/solar-flare.webp";
import pumpkinSpark from "./images/archive/pumpkin-spark.webp";
import paradisePain from "./images/archive/paradise-pain.webp";
import cadaverKetchup from "./images/archive/cadaver-ketchup.webp";
import orchardsWrath from "./images/archive/orchards-wrath.webp";
import purpleRevenge from "./images/archive/purple-revenge.webp";
import everbleed from "./images/archive/everbleed.webp";
import spruceBlood from "./images/archive/spruce-blood.webp";
import bhutsEmbrace from "./images/archive/bhuts-embrace.webp";
import sunCasket from "./images/archive/sun-casket.webp";
import widowsJam from "./images/archive/widows-jam.webp";
import sylvianReagent from "./images/archive/sylvian-reagent.webp";
import pyroclasticFlow from "./images/archive/pyroclastic-flow.webp";
import peatBlood from "./images/archive/peat-blood.webp";
import coreSample from "./images/archive/core-sample.webp";
import orangery from "./images/archive/orangery.webp";
import paleBite from "./images/archive/pale-bite.webp";

export type ArchiveSeries = "2020" | "2021" | "2022" | "defo" | "sauces";

export interface ArchiveItem {
  id: number;
  name: string;
  style: string;
  year: string;
  series: ArchiveSeries;
  abv?: string;
  ibu?: string;
  spiciness?: string;
  note?: string;
  imageUrl: string;
}

export const archiveData: ArchiveItem[] = [
  // --- СЕРИЯ 2020 ---
  { id: 1, name: "0,5 дома", style: "Dark Christmas Saison", year: "2020", series: "2020", abv: "7.3%", ibu: "25", note: "Пряно-фруктовый профиль с апельсиновой цедрой и тимьяном", imageUrl: darkChristmasSaison },
  { id: 2, name: "600 грамм", style: "New England IPA", year: "2020", series: "2020", abv: "6%", ibu: "35", note: "Тропический профиль с мощным сухим охмелением", imageUrl: neipa },
  { id: 3, name: "Dangerous Astrotomato", style: "Tomato Gose", year: "2020", series: "2020", abv: "6.7%", ibu: "19", note: "С копчёным солодом и дубовыми кубиками", imageUrl: dangerousAstrotomato },
  { id: 4, name: "Dangerous Astrotomato (Hot)", style: "Tomato Gose", year: "2020", series: "2020", abv: "6.7%", ibu: "19", note: "Острая версия с перцем Хабанеро", imageUrl: dangerousAstrotomatoHot },
  { id: 5, name: "Double Impact", style: "Grapefruit DIPA", year: "2020", series: "2020", abv: "8.9%", ibu: "111", note: "Коллаборация с The Ded & Paddle", imageUrl: doubleImpact },
  { id: 6, name: "Freeday. Fuck Work", style: "Pumpkin Porter", year: "2020", series: "2020", abv: "5%", ibu: "25", note: "Тыква, специи, кофе и ваниль", imageUrl: freeday },
  { id: 7, name: "Горькая правда", style: "DIPA", year: "2020", series: "2020", abv: "7.7%", ibu: "100", note: "Тропики и цитрус поверх карамельной основы", imageUrl: gorkayaPravda },
  { id: 8, name: "Monday Sucks", style: "Black DIPA", year: "2020", series: "2020", abv: "8%", ibu: "50", note: "Хмели Chinook, Centennial и Cascade", imageUrl: mondaySucks },
  { id: 9, name: "Not Quite Saint Grigory", style: "Belgian Dubbel", year: "2020", series: "2020", abv: "7.5%", ibu: "20", note: "Изюм, чернослив и благородная пряность", imageUrl: saintGrigory },
  { id: 10, name: "Session Candy Orange IPA", style: "Session IPA", year: "2020", series: "2020", abv: "4.6%", ibu: "30", note: "Лёгкое летнее пиво с цитрусовой горчинкой", imageUrl: sessionCandy },
  { id: 11, name: "Shit Happens", style: "New Zealand Pale Ale", year: "2020", series: "2020", abv: "5.7%", ibu: "20", note: "Хмель Motueka: лайм и тропические фрукты", imageUrl: shitHappens },

  // --- СЕРИЯ 2021 ---
  { id: 12, name: "Beet Buckwheat Ale", style: "Specialty Grain", year: "2021", series: "2021", abv: "2%", ibu: "10", note: "Безглютеновое, на гречишном солоде и свёкле", imageUrl: beetBuckwheat },
  { id: 13, name: "Blanche with Kiwi", style: "Blanche", year: "2021", series: "2021", abv: "4.6%", ibu: "10", note: "Освежающий бланш с киви и кориандром", imageUrl: blancheKiwi },
  { id: 14, name: "Cranberry Wheat Beer", style: "American Wheat Beer", year: "2021", series: "2021", abv: "5%", ibu: "10", note: "Клюква и американский хмель Amarillo", imageUrl: cranberryWheat },
  { id: 15, name: "Halloween IPA", style: "Red IPA", year: "2021", series: "2021", abv: "6.7%", ibu: "40", note: "Карамель, ирис и согревающая крепость", imageUrl: halloweenIpa },
  { id: 16, name: "Jalapeno Saison", style: "Saison", year: "2021", series: "2021", abv: "7.5%", ibu: "20", note: "Острый, с гуавой и перцами халапеньо", imageUrl: jalapenoSaison },
  { id: 17, name: "Citrix And Mosaix", style: "DDH Kveik IPA", year: "2021", series: "2021", abv: "6.2%", ibu: "20", note: "Норвежские дрожжи и хмели Citra, Mosaic", imageUrl: citrixMosaix },
  { id: 18, name: "Lemon And Coriander Rye Sour Ale", style: "Sour Ale", year: "2021", series: "2021", abv: "5%", ibu: "10", note: "Ржаной эль с лимоном и кориандром", imageUrl: lemonCoriander },
  { id: 19, name: "Mango Gose", style: "Gose", year: "2021", series: "2021", abv: "2.8%", ibu: "10", note: "Лёгкое, с кислинкой и спелым манго", imageUrl: mangoGose },

  // --- СЕРИЯ 2022 ---
  { id: 20, name: "Curry Tomato Gose", style: "Tomato Gose", year: "2022", series: "2022", abv: "5.8%", ibu: "15", note: "Индийские специи: карри, кориандр, тмин", imageUrl: curryTomato },
  { id: 21, name: "Curry Tomato Gose (Hot)", style: "Tomato Gose", year: "2022", series: "2022", abv: "5.8%", ibu: "15", note: "С перцем Моруга Скорпион Тринидад", imageUrl: curryTomatoHot },
  { id: 22, name: "Strong Smoothie Ale (Cherry)", style: "Smoothie Sour Ale", year: "2022", series: "2022", abv: "7.5%", ibu: "15", note: "Более 30% вишни и малины", imageUrl: smoothieCherry },
  { id: 23, name: "Strong Smoothie Ale (Mango)", style: "Smoothie Sour Ale", year: "2022", series: "2022", abv: "7.5%", ibu: "15", note: "Более 30% манго и банана", imageUrl: smoothieMango },
  { id: 24, name: "Tom Yum Tomato Gose", style: "Tomato Gose", year: "2022", series: "2022", abv: "5.8%", ibu: "10", note: "Тайский суп: лемонграсс, кокос, вешенки", imageUrl: tomYum },
  { id: 25, name: "Tom Yum Tomato Gose (Hot)", style: "Tomato Gose", year: "2022", series: "2022", abv: "5.8%", ibu: "10", note: "С перцами Chili и Carolina Reaper", imageUrl: tomYumHot },

  // --- СЕРИЯ DEFO ---
  { id: 26, name: "Барная Одиссея", style: "New Zealand Pale Ale", year: "2023", series: "defo", abv: "6%", ibu: "40", note: "Хмель Green Bullet: цитрус и цветы", imageUrl: barnayaOdisseya },
  { id: 27, name: "Буйный Молокос", style: "Milkshake DIPA", year: "2023", series: "defo", abv: "7.8%", ibu: "10", note: "Хвоя, цитрус и тропические фрукты", imageUrl: buynyMolokos },
  { id: 28, name: "Лжец", style: "New Zealand Pale Ale", year: "2023", series: "defo", abv: "6.8%", ibu: "35", note: "Хмели Nelson Sauvin, Rakau, Green Bullet", imageUrl: lzhets },
  { id: 29, name: "Одинокий марсианин", style: "Red IPA", year: "2023", series: "defo", abv: "6.8%", ibu: "40", note: "Смолистый, с Citra, Mosaic, Simcoe", imageUrl: odinokiyMarsianin },
  { id: 30, name: "Отличная история", style: "Imperial Brown Ale", year: "2023", series: "defo", abv: "8.3%", ibu: "40", note: "Кофейный аромат и шоколад", imageUrl: otlichnayaIstoriya },
  { id: 31, name: "Под кроной пней", style: "White IPA", year: "2023", series: "defo", abv: "7%", ibu: "40", note: "50% пшеничного солода, хмель Motueka", imageUrl: podKronoyPney },
  { id: 32, name: "Робин Бобин", style: "English IPA", year: "2023", series: "defo", abv: "8%", ibu: "70", note: "Английские хмели, солодовая основа", imageUrl: robinBobin },
  { id: 33, name: "Тактика Стивена", style: "APA", year: "2023", series: "defo", abv: "5.6%", ibu: "40", note: "Грейпфрут, апельсин и маракуйя", imageUrl: taktikaStivena },
  { id: 34, name: "Твой пьяный батя", style: "Winter Ale", year: "2023", series: "defo", abv: "6%", ibu: "32", note: "Тыква, мандарины и рождественские специи", imageUrl: tvoyPyanyBatea },
  { id: 35, name: "Хмельная исповедь", style: "Rye IPA", year: "2023", series: "defo", abv: "6.6%", ibu: "58", note: "Ржаной IPA с хвоей и цитрусом", imageUrl: hmelnayaIspoved },
  { id: 36, name: "Хулиган", style: "Oatmeal Stout", year: "2023", series: "defo", abv: "7.1%", ibu: "30", note: "Кофейный, полнотелый, овсяный", imageUrl: huligan },
  { id: 37, name: "Кислосмертие", style: "Wild Ale with Red Currant", year: "2023", series: "defo", abv: "5.2%", ibu: "8", note: "4 месяца с красной смородиной и Brett", imageUrl: kislosmerie },
  { id: 38, name: "Малина язычника", style: "Wild Ale with Raspberry", year: "2023", series: "defo", abv: "7%", ibu: "10", note: "Полгода в дубовой бочке с малиной", imageUrl: malinaYazychnika },
  { id: 39, name: "Удавленный вишней", style: "Wild Ale with Cherry", year: "2023", series: "defo", abv: "5.8%", ibu: "10", note: "Бочка из-под Jack Daniels и вишня", imageUrl: udavlennyVishney },

  // --- СОУСЫ (в хронологическом порядке по дате розлива) ---
  { id: 100, name: "Low Toxicity", style: "Cayenne Pepper Sauce", year: "2025", series: "sauces", spiciness: "2/10", note: "Состав: перец болгарский, Чили Птичий глаз, Кайенский, лук, морковь, чеснок, паприка, лайм, сахар, уксус, соль.", imageUrl: lowToxicity },
  { id: 101, name: "Chlorophyll Z", style: "Serrano Pepper Sauce", year: "2025", series: "sauces", spiciness: "5/10", note: "Состав: перец болгарский, Чили, Серрано, Халапеньо, лук, чеснок, кинза, черный перец, орегано, лайм, сахар, уксус, соль.", imageUrl: chlorophyllZ },
  { id: 102, name: "Harvest Serum", style: "Pumpkin Habanero Pepper Sauce", year: "2025", series: "sauces", spiciness: "6/10", note: "Состав: перец желтый, Чили, Хабанеро, Скорпион, тыква, морковь, лук, чеснок, корица, мускат, гвоздика, апельсин, сахар, уксус, соль, стаут.", imageUrl: harvestSerum },
  { id: 103, name: "Last Resort", style: "Caribbean Pepper Sauce", year: "2025", series: "sauces", spiciness: "6/10", note: "Состав: перец желтый, Чили, Вири Вири, Скорпион, лук, чеснок, манго, ананас, мед, куркума, перец, уксус, соль, стаут.", imageUrl: lastResort },
  { id: 104, name: "Basilisk", style: "Basil Pepper Sauce", year: "2025", series: "sauces", spiciness: "9/10", note: "Состав: перец красный, Каролина Рипер, Скорпион Моруга, Чили, лук, морковь, чеснок, базилик, паприка, сок лайма, уксус, соль, сахар, стаут.", imageUrl: basilisk },
  { id: 105, name: "Berry Scorch", style: "Raspberry Tomato Pepper Sauce", year: "2025", series: "sauces", spiciness: "5/10", note: "Состав: перец красный, Призрак, Хабанеро, паста томатная, лук, чеснок, имбирь, гвоздика, сок малины, горчица, перец, уксус, соль, сахар.", imageUrl: berryScorch },
  { id: 106, name: "Blue Smolder", style: "BBQ Blueberry Pepper Sauce", year: "2025", series: "sauces", spiciness: "2/10", note: "Состав: перец красный, Призрак шоколадный, Скорпион, паста томатная, черника, лук, чеснок, перец, паприка, мед, дым, уксус, соль, сахар.", imageUrl: blueSmolder },
  { id: 107, name: "Tropic Inferno", style: "Caribbean Pepper Sauce", year: "2025", series: "sauces", spiciness: "6/10", note: "Состав: перец зеленый, Халапеньо, Призрак, Хабанеро, сельдерей, лук, сок ананасовый, манго, бананы, апельсины, имбирь, кинза, горчица, уксус, соль, сахар.", imageUrl: tropicInferno },
  { id: 108, name: "Scorched Cherry", style: "Cherry Pepper Sauce", year: "2025", series: "sauces", spiciness: "5/10", note: "Состав: перец красный, Скотч Боннет, 7 Пот Брейн Стрейн, авокадо, лук, чеснок, сок вишни, вишня, имбирь, перец, мята, уксус, соль, сахар.", imageUrl: scorchedCherry },
  { id: 109, name: "Solar Flare", style: "Fruit Pepper Sauce", year: "2025", series: "sauces", spiciness: "4/10", note: "Состав: перец желтый, Скотч Боннет, Хабанеро, груши, персики, лук, ананасы, корица, перец, горчица, уксус, соль, сахар.", imageUrl: solarFlare },
  { id: 110, name: "Pumpkin Spark", style: "Pumpkin Pepper Sauce", year: "2025", series: "sauces", spiciness: "6/10", note: "Состав: перец желтый, Дыхание дракона, морковь, лук, чеснок, имбирь, гвоздика, мускат, корица, перец, уксус, соль, сахар.", imageUrl: pumpkinSpark },
  { id: 111, name: "Paradise Pain", style: "Strawberry Pepper Sauce", year: "2025", series: "sauces", spiciness: "8/10", note: "Состав: перец красный, Каролина Рипер, лук, морковь, сок клубники, клубника, апельсины, имбирь, чеснок, соевый соус, уксус, соль.", imageUrl: paradisePain },
  { id: 112, name: "Cadaver Ketchup", style: "Coffee BBQ Pepper Sauce", year: "2025", series: "sauces", spiciness: "3/10", note: "Состав: перец красный, Хабанеро шоколадный, Скорпион, паста томатная, лук, чеснок, дым, солод, кофе, паприка, перец, зира, уксус, соль.", imageUrl: cadaverKetchup },
  { id: 113, name: "Orchard's Wrath", style: "Green Pepper Sauce", year: "2025", series: "sauces", spiciness: "6/10", note: "Состав: перец зеленый, Каролина Рипер, Халапеньо, чеснок, лук, яблоки, лимоны, лук зеленый, перец, уксус, соль.", imageUrl: orchardsWrath },
  { id: 114, name: "Purple Revenge", style: "Plum Pepper Sauce", year: "2025", series: "sauces", spiciness: "4/10", note: "Состав: слива, 7 Пот Грейв Диггер, чеснок, кинза, укроп, паприка, перец, уксус, соль.", imageUrl: purpleRevenge },
  { id: 115, name: "Everbleed", style: "Lingonberries Pepper Sauce", year: "2025", series: "sauces", spiciness: "3/10", note: "Состав: брусника, клюква, перец красный, 7 Пот Грейв Диггер, еловые побеги, варенье из шишек, розмарин, корица, перец, уксус, соль, сахар.", imageUrl: everbleed },
  { id: 116, name: "Spruce Blood", style: "Lingonberries Pepper Sauce", year: "2026", series: "sauces", spiciness: "3/10", note: "Состав: брусника, клюква, перец красный, Халапеньо, Скорпион, еловые побеги, экстракт пихты, розмарин, корица, перец, уксус, соль, сахар.", imageUrl: spruceBlood },
  { id: 117, name: "Bhut's Embrace", style: "Guava and Tomatoes Pepper Sauce", year: "2025", series: "sauces", spiciness: "4/10", note: "Состав: пюре гуавы, томатная паста, перец красный, Призрак, Скорпион, лук, чеснок, розмарин, корица, перец, гвоздика, паприка, уксус, соль, сахар.", imageUrl: bhutsEmbrace },
  { id: 118, name: "Sun Casket", style: "Peaches and Apricots Pepper Sauce", year: "2025", series: "sauces", spiciness: "5/10", note: "Состав: абрикосы, персики, перец Кайшу, Скорпион, лук, морковь, имбирь, корица, перец, уксус, соль.", imageUrl: sunCasket },
  { id: 119, name: "Widow's Jam", style: "Berries Pepper Sauce", year: "2025", series: "sauces", spiciness: "2/10", note: "Состав: облепиха, черноплодная рябина, перец красный, 7 Пот Грейв Диггер, лук, морковь, имбирь, перец, горчица, уксус, соль.", imageUrl: widowsJam },
  { id: 120, name: "Sylvian Reagent", style: "Apple, Citrus, Spruce Pepper Sauce", year: "2026", series: "sauces", spiciness: "2/10", note: "Состав: пюре яблочное, Ахи Амарилло, Скорпион, апельсины, лук, чеснок, розмарин, перец, соль, мед, уксус хвойный, экстракт пихты, масло оливковое.", imageUrl: sylvianReagent },
  { id: 121, name: "Pyroclastic Flow", style: "Habanero/Chipotle Pepper Sauce", year: "2026", series: "sauces", spiciness: "2/10", note: "Состав: томатная паста, Чипотле, Хабанеро, лук, морковь, чеснок, масло оливковое, паприка, соль, орегано, дым, перец, горчица, уксус.", imageUrl: pyroclasticFlow },
  { id: 122, name: "Peat Blood", style: "Beet, Pear and Lentils Pepper Sauce", year: "2026", series: "sauces", spiciness: "3/10", note: "Состав: свекла, груша, чечевица, перец Пекин, пиво темное, лук красный, чеснок, паприка, масло оливковое, можжевельник, гвоздика, экстракт свеклы, соль, мед, уксус хвойный.", imageUrl: peatBlood },
  { id: 123, name: "Core Sample", style: "Miso Carolina Reaper Pepper Sauce", year: "2026", series: "sauces", spiciness: "7/10", note: "Состав: чернослив, кофе, томаты вяленые, паста мисо, Каролина Рипер, пиво темное, паприка, дым, соль, уксус виноградный, экстракт свеклы.", imageUrl: coreSample },
  { id: 124, name: "Orangery", style: "Tropical Charapita Pepper Sauce", year: "2026", series: "sauces", spiciness: "2/10", note: "Состав: пюре манго, ананасы, Ахи Чарапита, помидоры черри, лук, можжевельник, масло оливковое, розмарин, апельсины, перец, имбирь, экстракт пихты, уксус виноградный, мед, соль, экстракт брокколи.", imageUrl: orangery },
  { id: 125, name: "Pale Bite", style: "Coconut Garlic Pepper Sauce", year: "2026", series: "sauces", spiciness: "2/10", note: "Состав: кокосовое молоко, чеснок, уксус белый винный, соль, сахар, мед, Хабанеро, ксантановая камедь.", imageUrl: paleBite },
];