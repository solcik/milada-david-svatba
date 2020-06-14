export interface InviteT {
  id: string;
  name: string;
  group: string;
  count: number;
  accepted?: boolean;
}

const invites: InviteT[] = [
  {
    id: 'af136cea',
    name: 'maminko (tchyně) a Denny',
    group: 'Milada',
    count: 2,
  },
  {
    id: 'd4614454',
    name: 'Organizátorko Evičko',
    group: 'Milada',
    count: 1,
  },
  {
    id: '69c44c4d',
    name: 'Markétko',
    group: 'Milada',
    count: 1,
  },
  {
    id: 'c47a175e',
    name: 'Babičko a Dědo',
    group: 'Milada',
    count: 2,
  },
  {
    id: 'fd48d213',
    name: 'Klárko, Pavle, Honzíku, Eliško a Aničko',
    group: 'Milada',
    count: 2,
  },
  {
    id: '1d3ef9af',
    name: 'Babičko a Dědečku',
    group: 'Milada',
    count: 2,
  },
  {
    id: 'e345b43d',
    name: 'Strejdo Radku',
    group: 'Milada',
    count: 1,
  },
  {
    id: '173d451b',
    name: 'babička Varnsdorf',
    group: 'Milada',
    count: 1,
  },
  {
    id: 'f27a1a98',
    name: 'Káťo a Matěji',
    group: 'Milada',
    count: 2,
  },
  {
    id: '580f2e7a',
    name: 'Šárko a Zdeničko',
    group: 'Milada',
    count: 2,
  },
  {
    id: 'ddbed742',
    name: 'Stefi a Zdeňku',
    group: 'Milada',
    count: 2,
  },
  {
    id: '6bccb878',
    name: 'Kačenko a Ondro',
    group: 'Milada',
    count: 2,
  },
  {
    id: '41114eaf',
    name: 'Peťo a Markét',
    group: 'Milada',
    count: 2,
  },
  {
    id: 'f61a336f',
    name: 'Lukáši a Domčo',
    group: 'Milada',
    count: 2,
  },
  {
    id: '16ce5c07',
    name: 'Teto Dano, strejdo Jirko a strejdo Slávku',
    group: 'Milada',
    count: 2,
  },
  {
    id: 'adf7c034',
    name: 'Jiříku',
    group: 'Milada',
    count: 1,
  },
  {
    id: '751a9d64',
    name: 'Kubo, Péťo, Emičko a Kristýnko',
    group: 'Milada',
    count: 2,
  },
  {
    id: 'e9fc0def',
    name: 'Teto Jitko, Mike a Nick',
    group: 'Milada',
    count: 2,
  },
  {
    id: '0718495a',
    name: 'Sabino',
    group: 'Milada',
    count: 1,
    accepted: false,
  },
  {
    id: 'c4683594',
    name: 'Denčo + 1 (Jirka??)',
    group: 'Milada',
    count: 2,
  },
  {
    id: 'f77a815e',
    name: 'Květuš a Láďo',
    group: 'Milada',
    count: 2,
  },
  {
    id: '96c8a77d',
    name: 'Paní Profesorko',
    group: 'Milada',
    count: 2,
  },
  {
    id: 'e673fb27',
    name: 'Paní učitelko',
    group: 'Milada',
    count: 2,
  },
  {
    id: 'c6adfd23',
    name: 'mami a tati',
    group: 'David',
    count: 2,
  },
  {
    id: '019dd727',
    name: 'brácha s Natálkou',
    group: 'David',
    count: 2,
  },
  {
    id: '01c7fb8d',
    name: 'píďo s Kubou',
    group: 'David',
    count: 2,
  },
  {
    id: '0d80c4ff',
    name: 'babi', // Květa Zemanová (babička)
    group: 'David',
    count: 1,
  },
  {
    id: 'fb8fd6a0',
    name: 'teto a Břéťo',
    group: 'David',
    count: 2,
  },
  {
    id: '2e790608',
    name: 'Járo, Andrej, Sárinko a Emičko',
    group: 'David',
    count: 4,
  },
  {
    id: '6e82c72e',
    name: 'Pau s Martinem',
    group: 'David',
    count: 2,
  },
  {
    id: 'b3a57902',
    name: 'Krowáku a Masho',
    group: 'David',
    count: 2,
  },
  {
    id: 'c4aaf91c',
    name: 'Lukyne', // Nagy
    group: 'David',
    count: 1,
  },
  {
    id: '83fb6a18',
    name: 'Rendo s Bobem',
    group: 'David',
    count: 2,
  },
  {
    id: 'c64cad15',
    name: 'Hauzříku a Romčo',
    group: 'David',
    count: 2,
  },
  {
    id: '99811dd4',
    name: 'šéfiku partyzáne a Andy',
    group: 'David',
    count: 2,
  },
  {
    id: '770be047',
    name: 'Víťo (s malym)',
    group: 'David',
    count: 1,
  },
  {
    id: '05b40940',
    name: 'Pájo', // Pavel Svoboda
    group: 'David',
    count: 1,
  },
  {
    id: 'e725fa28',
    name: 'Jiří a Sváťo',
    group: 'David',
    count: 2,
  },
  {
    id: '1595f16c',
    name: 'Johnbíku a Helčo',
    group: 'David',
    count: 2,
  },
  {
    id: '6acbe6c7',
    name: 'Petře a Martino',
    group: 'David',
    count: 2,
  },
  {
    id: '4a20f878',
    name: 'Túro a Markét',
    group: 'David',
    count: 2,
  },
  {
    id: 'dfaadeeb',
    name: 'Lukáši a Domčo',
    group: 'Tábor',
    count: 2,
  },
  {
    id: 'f0f3d071',
    name: 'Ondro a Peťko',
    group: 'Tábor',
    count: 2,
  },
  {
    id: '991e65b2',
    name: 'Bade a Renčo',
    group: 'Tábor',
    count: 2,
  },
  {
    id: '53f895c4',
    name: 'Vojto a Barborko',
    group: 'Tábor',
    count: 2,
  },
  {
    id: 'd841329e',
    name: 'Vláďo a Bláňo',
    group: 'Tábor',
    count: 2,
  },
  {
    id: 'a2db9e2c',
    name: 'Houžvo a Míšo',
    group: 'Tábor',
    count: 2,
  },
  {
    id: 'ed38d0ff',
    name: 'Jardo a Kačko',
    group: 'Tábor',
    count: 2,
  },
  {
    id: '8fbf1970',
    name: 'Šobule a Dano',
    group: 'Tábor',
    count: 2,
  },
  {
    id: 'b2aa174b',
    name: 'Henriku a Jiřko',
    group: 'Tábor',
    count: 2,
  },
  {
    id: 'b14392cd',
    name: 'Míro',
    group: 'Tábor',
    count: 1,
  },
  {
    id: 'f0fb64bb',
    name: 'Andy a Michale',
    group: 'Tábor',
    count: 2,
  },
  {
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
