export const appState = $state({
  step: 0,
  page: 0,
});

export const THINK_TIME = 300_000;

export const AppData: Record<
  number,
  {
    title: string;
    pages: number;
    description: string;
    image?: string;
    video?: string;
    pros?: string[];
    cons?: string[];
  }
> = {
  0: {
    title: "SIMULACIJA: PLAČILO Z RAZLIČNIMI OBLIKAMI DENARJA",
    pages: 1,
    description:
      "Dobrodošli v simulaciji! Med izvajanjem boste preizkušali različne oblike plačila.",
  },
  1: {
    title: "PLAČILO Z GOTOVINO",
    pages: 2,
    description:
      "Razmislite, kako hitro in preprosto je plačilo z gotovino. Upoštevajte tudi tveganja, kot so kraja ali izguba ter fizične omejitve uporabe.",
    image: "/assets/s1.gif",
    video:
      "https://www.youtube.com/embed/_sEXDwM2r58?si=9g4CwwB53wXIiUj1&autoplay=1&loop=1&playlist=_sEXDwM2r58",
    pros: [
      "Takojšnje poravnavanje.",
      "Popolna anonimnost.",
      "Brez sledi, brez posrednikov.",
    ],
    cons: [
      "Tveganje kraje ali izgube.",
      "Fizična omejenost.",
      "Neprimerno za spletne nakupe.",
    ],
  },
  2: {
    title: "BANČNA KARTICA (POS)",
    pages: 2,
    description:
      "Premislite, kako kartica omogoča varno in sledljivo plačilo. Upoštevajte, kakšna infrastruktura je potrebna in kako provizije ali omejitve lahko vplivajo na transakcijo.",
    image: "/assets/s2.gif",
    video:
      "https://www.youtube.com/embed/E9die_NZm7g?si=Ktdi69MJF_0ocBz7&autoplay=1&loop=1&&playlist=E9die_NZm7g",
    pros: [
      "Hitro in enostavno.",
      "Sledljivost in varnostni mehanizmi.",
      "Možnost reklamacije ali povračila.",
    ],
    cons: [
      "Odvisnost od banke in infrastrukture.",
      "Možne provizije in omejitve.",
      "Ni popolne anonimnosti.",
    ],
  },
  3: {
    title: "MOBILNA APLIKACIJA / QR-KODA",
    pages: 2,
    description:
      "Razmislite, kako hitro in enostavno je plačilo preko mobilne aplikacije ali QR-kode. Premislite o prednostih, kot so preglednost in integracija s telefonom, ter o omejitvah, kot so internetna povezava in odvisnost od ponudnika.",
    image: "/assets/s3.gif",
    video:
      "https://www.youtube.com/embed/QljTtmgBKjs?si=ZE5-N6-_vGaf3OAY&autoplay=1&loop=1&playlist=QljTtmgBKjs",
    pros: [
      "Zelo hitro, primerno za spletne in fizične nakupe.",
      "Brez fizičnega stika, povezano s telefonom.",
      "Visoka sledljivost in preglednost transakcij.",
    ],
    cons: [
      "Potreben je internet.",
      "Potrebujete aplikacijo in aktiven račun.",
      "Odvisnost od ponudnika storitve.",
    ],
  },
  4: {
    title: "DIGITALNE VALUTE (KRIPTOVALUTE)",
    pages: 2,
    description:
      "Premislite, kako plačilo s kriptovaluto poteka neposredno brez banke. Upoštevajte prednosti, kot so decentralizacija in globalna dostopnost, ter tveganja, kot so nihajnost in omejena zaščita potrošnika.",
    image: "/assets/s4.gif",
    video:
      "https://www.youtube.com/embed/50pTcYGJZ1s?si=5L2olV7ixi1TiM2G&autoplay=1&loop=1&playlist=50pTcYGJZ1s",
    pros: [
      "Brez banke ali posrednika (decentralizacija).",
      "Globalna dostopnost in možnost hitrih prenosov.",
      "Visoka tehnološka fleksibilnost.",
    ],
    cons: [
      "Velika nihajnost (volatilnost).",
      "Omejena zaščita potrošnika.",
      "Hitrost in stroški so odvisni od omrežja.",
    ],
  },
};

export function nextStep() {
  appState.page++;
  if (appState.page >= AppData[appState.step].pages) {
    appState.step++;
    appState.page = 0;
    if (appState.step > 4) {
      appState.step = 0;
    }
  }
}
