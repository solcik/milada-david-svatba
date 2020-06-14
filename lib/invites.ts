export interface InviteT {
  id: string;
  name: string;
  group: string;
  count: number;
  accepted?: boolean;
}

const invites: InviteT[] = [
  {
    // Zveme Vás maminko a Denny na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/af136cea
    id: 'af136cea',
    name: 'maminko a Denny',
    group: 'Milada',
    count: 2,
  },
  {
    // Zveme Tě Organizátorko Evičko na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/d4614454
    id: 'd4614454',
    name: 'Organizátorko Evičko',
    group: 'Milada',
    count: 1,
  },
  {
    // Zveme Tě Markétko na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/69c44c4d
    id: '69c44c4d',
    name: 'Markétko',
    group: 'Milada',
    count: 1,
  },
  {
    // Zveme Vás Babičko a Dědo na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/c47a175e
    id: 'c47a175e',
    name: 'Babičko a Dědo',
    group: 'Milada',
    count: 2,
  },
  {
    // Zveme Vás Klárko, Pavle, Honzíku, Eliško a Aničko na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/fd48d213
    id: 'fd48d213',
    name: 'Klárko, Pavle, Honzíku, Eliško a Aničko',
    group: 'Milada',
    count: 2,
  },
  {
    // Zveme Vás Babičko a Dědečku na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/1d3ef9af
    id: '1d3ef9af',
    name: 'Babičko a Dědečku',
    group: 'Milada',
    count: 2,
  },
  {
    // Zveme Tě Strejdo Radku na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/e345b43d
    id: 'e345b43d',
    name: 'Strejdo Radku',
    group: 'Milada',
    count: 1,
  },
  {
    // Zveme Tě babička Varnsdorf na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/173d451b
    id: '173d451b',
    name: 'babička Varnsdorf',
    group: 'Milada',
    count: 1,
  },
  {
    // Zveme Vás Káťo a Matěji na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/f27a1a98
    id: 'f27a1a98',
    name: 'Káťo a Matěji',
    group: 'Milada',
    count: 2,
  },
  {
    // Zveme Vás Šárko a Zdeničko na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/580f2e7a
    id: '580f2e7a',
    name: 'Šárko a Zdeničko',
    group: 'Milada',
    count: 2,
  },
  {
    // Zveme Vás Stefi a Zdeňku na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/ddbed742
    id: 'ddbed742',
    name: 'Stefi a Zdeňku',
    group: 'Milada',
    count: 2,
  },
  {
    // Zveme Vás Kačenko a Ondro na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/6bccb878
    id: '6bccb878',
    name: 'Kačenko a Ondro',
    group: 'Milada',
    count: 2,
  },
  {
    // Zveme Vás Peťo a Markét na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/41114eaf
    id: '41114eaf',
    name: 'Peťo a Markét',
    group: 'Milada',
    count: 2,
  },
  {
    // Zveme Vás Lukáši a Domčo na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/f61a336f
    id: 'f61a336f',
    name: 'Lukáši a Domčo',
    group: 'Milada',
    count: 2,
  },
  {
    // Zveme Vás Teto Dano, strejdo Jirko a strejdo Slávku na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/16ce5c07
    id: '16ce5c07',
    name: 'Teto Dano, strejdo Jirko a strejdo Slávku',
    group: 'Milada',
    count: 2,
  },
  {
    // Zveme Tě Jiříku na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/adf7c034
    id: 'adf7c034',
    name: 'Jiříku',
    group: 'Milada',
    count: 1,
  },
  {
    // Zveme Vás Kubo, Péťo, Emičko a Kristýnko na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/751a9d64
    id: '751a9d64',
    name: 'Kubo, Péťo, Emičko a Kristýnko',
    group: 'Milada',
    count: 2,
  },
  {
    // Zveme Vás Teto Jitko, Mike a Nick na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/e9fc0def
    id: 'e9fc0def',
    name: 'Teto Jitko, Mike a Nick',
    group: 'Milada',
    count: 2,
  },
  {
    // Zveme Tě Sabino na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/0718495a
    id: '0718495a',
    name: 'Sabino',
    group: 'Milada',
    count: 1,
    accepted: false,
  },
  {
    // Zveme Vás Denčo + 1 (Jirka??) na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/c4683594
    id: 'c4683594',
    name: 'Denčo + 1 (Jirka??)',
    group: 'Milada',
    count: 2,
  },
  {
    // Zveme Vás Květuš a Láďo na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/f77a815e
    id: 'f77a815e',
    name: 'Květuš a Láďo',
    group: 'Milada',
    count: 2,
  },
  {
    // Zveme Vás Paní Profesorko na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/96c8a77d
    id: '96c8a77d',
    name: 'Paní Profesorko',
    group: 'Milada',
    count: 2,
  },
  {
    // Zveme Vás Paní učitelko na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/e673fb27
    id: 'e673fb27',
    name: 'Paní učitelko',
    group: 'Milada',
    count: 2,
  },
  {
    // Zveme Vás mami a tati na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/c6adfd23
    id: 'c6adfd23',
    name: 'mami a tati',
    group: 'David',
    count: 2,
  },
  {
    // Zveme Vás brácha s Natálkou na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/019dd727
    id: '019dd727',
    name: 'brácha s Natálkou',
    group: 'David',
    count: 2,
  },
  {
    // Zveme Vás píďo s Kubou na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/01c7fb8d
    id: '01c7fb8d',
    name: 'píďo s Kubou',
    group: 'David',
    count: 2,
  },
  {
    // Zveme Tě babi na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/0d80c4ff
    id: '0d80c4ff',
    name: 'babi', // Květa Zemanová (babička)
    group: 'David',
    count: 1,
  },
  {
    // Zveme Vás teto a Břéťo na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/fb8fd6a0
    id: 'fb8fd6a0',
    name: 'teto a Břéťo',
    group: 'David',
    count: 2,
  },
  {
    // Zveme Vás Járo, Andrej, Sárinko a Emičko na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/2e790608
    id: '2e790608',
    name: 'Járo, Andrej, Sárinko a Emičko',
    group: 'David',
    count: 4,
  },
  {
    // Zveme Vás Pau s Martinem na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/6e82c72e
    id: '6e82c72e',
    name: 'Pau s Martinem',
    group: 'David',
    count: 2,
  },
  {
    // Zveme Vás Krowáku a Masho na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/b3a57902
    id: 'b3a57902',
    name: 'Krowáku a Masho',
    group: 'David',
    count: 2,
  },
  {
    // Zveme Tě Lukyne na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/c4aaf91c
    id: 'c4aaf91c',
    name: 'Lukyne', // Nagy
    group: 'David',
    count: 1,
  },
  {
    // Zveme Vás Rendo s Bobem na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/83fb6a18
    id: '83fb6a18',
    name: 'Rendo s Bobem',
    group: 'David',
    count: 2,
  },
  {
    // Zveme Vás Hauzříku a Romčo na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/c64cad15
    id: 'c64cad15',
    name: 'Hauzříku a Romčo',
    group: 'David',
    count: 2,
  },
  {
    // Zveme Vás šéfiku partyzáne a Andy na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/99811dd4
    id: '99811dd4',
    name: 'šéfiku partyzáne a Andy',
    group: 'David',
    count: 2,
  },
  {
    // Zveme Tě Víťo (s malym) na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/770be047
    id: '770be047',
    name: 'Víťo (s malym)',
    group: 'David',
    count: 1,
  },
  {
    // Zveme Tě Pájo na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/05b40940
    id: '05b40940',
    name: 'Pájo', // Pavel Svoboda
    group: 'David',
    count: 1,
  },
  {
    // Zveme Vás Jiří a Sváťo na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/e725fa28
    id: 'e725fa28',
    name: 'Jiří a Sváťo',
    group: 'David',
    count: 2,
  },
  {
    // Zveme Vás Johnbíku a Helčo na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/1595f16c
    id: '1595f16c',
    name: 'Johnbíku a Helčo',
    group: 'David',
    count: 2,
  },
  {
    // Zveme Vás Petře a Martino na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/6acbe6c7
    id: '6acbe6c7',
    name: 'Petře a Martino',
    group: 'David',
    count: 2,
  },
  {
    // Zveme Vás Túro a Markét na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/4a20f878
    id: '4a20f878',
    name: 'Túro a Markét',
    group: 'David',
    count: 2,
  },
  {
    // Zveme Vás Lukáši a Domčo na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/dfaadeeb
    id: 'dfaadeeb',
    name: 'Lukáši a Domčo',
    group: 'Tábor',
    count: 2,
  },
  {
    // Zveme Vás Ondro a Peťko na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/f0f3d071
    id: 'f0f3d071',
    name: 'Ondro a Peťko',
    group: 'Tábor',
    count: 2,
  },
  {
    // Zveme Vás Bade a Renčo na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/991e65b2
    id: '991e65b2',
    name: 'Bade a Renčo',
    group: 'Tábor',
    count: 2,
  },
  {
    // Zveme Vás Vojto a Barborko na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/53f895c4
    id: '53f895c4',
    name: 'Vojto a Barborko',
    group: 'Tábor',
    count: 2,
  },
  {
    // Zveme Vás Vláďo a Bláňo na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/d841329e
    id: 'd841329e',
    name: 'Vláďo a Bláňo',
    group: 'Tábor',
    count: 2,
  },
  {
    // Zveme Vás Houžvo a Míšo na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/a2db9e2c
    id: 'a2db9e2c',
    name: 'Houžvo a Míšo',
    group: 'Tábor',
    count: 2,
  },
  {
    // Zveme Vás Jardo a Kačko na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/ed38d0ff
    id: 'ed38d0ff',
    name: 'Jardo a Kačko',
    group: 'Tábor',
    count: 2,
  },
  {
    // Zveme Vás Šobule a Dano na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/8fbf1970
    id: '8fbf1970',
    name: 'Šobule a Dano',
    group: 'Tábor',
    count: 2,
  },
  {
    // Zveme Vás Henriku a Jiřko na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/b2aa174b
    id: 'b2aa174b',
    name: 'Henriku a Jiřko',
    group: 'Tábor',
    count: 2,
  },
  {
    // Zveme Tě Míro na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/b14392cd
    id: 'b14392cd',
    name: 'Míro',
    group: 'Tábor',
    count: 1,
  },
  {
    // Zveme Vás Andy a Michale na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/f0fb64bb
    id: 'f0fb64bb',
    name: 'Andy a Michale',
    group: 'Tábor',
    count: 2,
  },
  {
    // Zveme Tě Johane na naši svatbu. Pozvánku a další informace najdete na https://milada-david-svatba.now.sh/invite/bf0255e0
    id: 'bf0255e0',
    name: 'Johane',
    group: 'Tábor',
    count: 1,
  },
];

export function getAllInvites(): InviteT[] {
  return invites;
}

export function getInvite(id: string): InviteT {
  return invites.find((invite) => invite.id === id);
}
