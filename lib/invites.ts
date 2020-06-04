export interface InviteT {
  id: string;
  name: string;
  group: string;
  accepted?: boolean;
}

const invites: InviteT[] = [
  {
    id: 'af136cea',
    name: 'Milada Suková',
    group: 'Milada',
  },
  {
    id: '56013577',
    name: 'Denny Šturm',
    group: 'Milada',
  },
  {
    id: 'd4614454',
    name: 'Eva Suková',
    group: 'Milada',
  },
  {
    id: '69c44c4d',
    name: 'Markéta Suková',
    group: 'Milada',
  },
  {
    id: 'c47a175e',
    name: 'Eva Suková (babička)',
    group: 'Milada',
  },
  {
    id: '201e2327',
    name: 'Stanislav Suk (děda)',
    group: 'Milada',
  },
  {
    id: 'fd48d213',
    name: 'Klára',
    group: 'Milada',
  },
  {
    id: '08b2b6fc',
    name: 'Pavel Suk',
    group: 'Milada',
  },
  {
    id: 'a1bc3259',
    name: 'Anička Suková',
    group: 'Milada',
  },
  {
    id: '3980a5b0',
    name: 'Eliška',
    group: 'Milada',
  },
  {
    id: 'bc32b2d5',
    name: 'Honza',
    group: 'Milada',
  },
  {
    id: 'f9a338f6',
    name: 'Standa Suk (táta)',
    group: 'Milada',
    accepted: false,
  },
  {
    id: '91182e68',
    name: 'Dana Suková',
    group: 'Milada',
    accepted: false,
  },
  {
    id: '1d3ef9af',
    name: 'Milada Písařová (babička)',
    group: 'Milada',
  },
  {
    id: '80f1f00a',
    name: 'Antonín Písař (děda)',
    group: 'Milada',
  },
  {
    id: 'e345b43d',
    name: 'Radek Písař',
    group: 'Milada',
  },
  {
    id: '173d451b',
    name: 'babička Varnsdorf',
    group: 'Milada',
  },
  {
    id: 'f27a1a98',
    name: 'jahodka',
    group: 'Milada',
  },
  {
    id: 'a7f7bea6',
    name: 'jahodka - Matěj',
    group: 'Milada',
  },
  {
    id: '580f2e7a',
    name: 'Šárka Jahodová',
    group: 'Milada',
  },
  {
    id: '132e9a15',
    name: 'Zdenička Jahodová',
    group: 'Milada',
  },
  {
    id: 'ddbed742',
    name: 'Štefka',
    group: 'Milada',
  },
  {
    id: '8c699a6e',
    name: 'Štefka - Zdeněk',
    group: 'Milada',
  },
  {
    id: '6bccb878',
    name: 'Kateřina Migová',
    group: 'Milada',
  },
  {
    id: '77591f24',
    name: 'Ondra Švejda',
    group: 'Milada',
  },
  {
    id: '41114eaf',
    name: 'Petra',
    group: 'Milada',
  },
  {
    id: '654112f0',
    name: 'Markéta',
    group: 'Milada',
  },
  {
    id: 'f61a336f',
    name: 'Lukáš',
    group: 'Milada',
  },
  {
    id: '6ea776a7',
    name: 'Domča',
    group: 'Milada',
  },
  {
    id: '16ce5c07',
    name: 'teta Dana',
    group: 'Milada',
  },
  {
    id: 'a23295a9',
    name: 'strejda Smetana',
    group: 'Milada',
  },
  {
    id: 'adf7c034',
    name: 'Jirka',
    group: 'Milada',
  },
  {
    id: '751a9d64',
    name: 'Kuba',
    group: 'Milada',
  },
  {
    id: '043a8e9b',
    name: 'Petra',
    group: 'Milada',
  },
  {
    id: '3097879d',
    name: 'Kuba, Petra - dítě',
    group: 'Milada',
  },
  {
    id: '4e96d536',
    name: 'Kuba, Petra - dítě',
    group: 'Milada',
  },
  {
    id: 'e9fc0def',
    name: 'teta Jitka',
    group: 'Milada',
  },
  {
    id: '24de298e',
    name: 'Mike',
    group: 'Milada',
  },
  {
    id: '07f586db',
    name: 'Nick',
    group: 'Milada',
  },
  {
    id: '0718495a',
    name: 'Sabina',
    group: 'Milada',
    accepted: false,
  },
  {
    id: 'a9fd6452',
    name: 'Strejda Slavek',
    group: 'Milada',
  },
  {
    id: 'c4683594',
    name: 'Denisa',
    group: 'Milada',
  },
  {
    id: '11562c41',
    name: 'Denisa - partner',
    group: 'Milada',
  },
  {
    id: 'f77a815e',
    name: 'Pesava',
    group: 'Milada',
  },
  {
    id: 'b1d88931',
    name: 'Kveta',
    group: 'Milada',
  },
  {
    id: '96c8a77d',
    name: 'Profesorka',
    group: 'Milada',
  },
  {
    id: 'e673fb27',
    name: 'Klinarova',
    group: 'Milada',
  },
  {
    id: 'c6adfd23',
    name: 'Mirka Šolcová',
    group: 'David',
  },
  {
    id: '81dbd400',
    name: 'Petr Šolc',
    group: 'David',
  },
  {
    id: '019dd727',
    name: 'Marek Šolc',
    group: 'David',
  },
  {
    id: 'a05e06de',
    name: 'Natálka Jehličková',
    group: 'David',
  },
  {
    id: '01c7fb8d',
    name: 'Verunka Šolc',
    group: 'David',
  },
  {
    id: '253a3949',
    name: 'Kuba Soloch',
    group: 'David',
  },
  {
    id: '0d80c4ff',
    name: 'Květa Zemanová (babička)',
    group: 'David',
  },
  {
    id: 'fb8fd6a0',
    name: 'Květa Sluková',
    group: 'David',
  },
  {
    id: '0d9f3b9a',
    name: 'Břéťa Sluka',
    group: 'David',
  },
  {
    id: '2e790608',
    name: 'Jára Ducháček',
    group: 'David',
  },
  {
    id: '62e521b5',
    name: 'Andrejka Ducháčková',
    group: 'David',
  },
  {
    id: 'f70cecd2',
    name: 'Sára Ducháčková',
    group: 'David',
  },
  {
    id: 'd2da4adf',
    name: 'Emička Ducháčková',
    group: 'David',
  },
  {
    id: '6e82c72e',
    name: 'Pavla Ducháčková',
    group: 'David',
  },
  {
    id: '2b04dd29',
    name: 'Martin',
    group: 'David',
  },
  {
    id: 'b3a57902',
    name: 'Krowis',
    group: 'David',
  },
  {
    id: '17832b90',
    name: 'Masha',
    group: 'David',
  },
  {
    id: 'c4aaf91c',
    name: 'Lukáš Nagy',
    group: 'David',
  },
  {
    id: 'e91987e6',
    name: 'Zuzka Švejdová',
    group: 'David',
  },
  {
    id: '83fb6a18',
    name: 'Bobo Švejda',
    group: 'David',
  },
  {
    id: '3fcef9af',
    name: 'Marek Hauzr',
    group: 'David',
  },
  {
    id: 'c64cad15',
    name: 'Marek Hauzr - partnerka',
    group: 'David',
  },
  {
    id: '99811dd4',
    name: 'Lukáš Bernas',
    group: 'David',
  },
  {
    id: '4d37d0db',
    name: 'Andrejka Bernasová',
    group: 'David',
  },
  {
    id: '770be047',
    name: 'Vít Steklý',
    group: 'David',
  },
  {
    id: '05b40940',
    name: 'Pavel Svoboda',
    group: 'David',
  },
  {
    id: 'a016b7e7',
    name: 'Jirka Bajan',
    group: 'David',
  },
  {
    id: 'e725fa28',
    name: 'Sváťa Zezulová',
    group: 'David',
  },
  {
    id: '7a42161e',
    name: 'Johnbík',
    group: 'David',
  },
  {
    id: '1595f16c',
    name: 'Johnbík - Helča',
    group: 'David',
  },
  {
    id: 'bc8fc0af',
    name: 'Martina Svobodová',
    group: 'David',
  },
  {
    id: '6acbe6c7',
    name: 'Petr Svoboda',
    group: 'David',
  },
  {
    id: '5099a48c',
    name: 'Markéta Svobodová',
    group: 'David',
  },
  {
    id: '4a20f878',
    name: 'Túra',
    group: 'David',
  },
  {
    id: 'dfaadeeb',
    name: 'Lukáš Pokorný',
    group: 'Tábor',
  },
  {
    id: 'ce2403e2',
    name: 'Domča Krejčů',
    group: 'Tábor',
  },
  {
    id: 'f0f3d071',
    name: 'Ondra Schovanec',
    group: 'Tábor',
  },
  {
    id: 'f1f7a8a4',
    name: 'Petra Schovancová',
    group: 'Tábor',
  },
  {
    id: '991e65b2',
    name: 'Radek Pokorný',
    group: 'Tábor',
  },
  {
    id: 'a2ec1d96',
    name: 'Renata Pokorná',
    group: 'Tábor',
  },
  {
    id: '53f895c4',
    name: 'Barborka Vaňková',
    group: 'Tábor',
  },
  {
    id: '0addd497',
    name: 'Vojta Nejedlý',
    group: 'Tábor',
  },
  {
    id: 'd841329e',
    name: 'Vláďa Plesník',
    group: 'Tábor',
  },
  {
    id: '6f7840d8',
    name: 'Blanka',
    group: 'Tábor',
  },
  {
    id: 'a2db9e2c',
    name: 'Honza Houžvička',
    group: 'Tábor',
  },
  {
    id: 'a046b7d4',
    name: 'Míša Mahnelová',
    group: 'Tábor',
  },
  {
    id: 'ed38d0ff',
    name: 'Jarda Hnětýnka',
    group: 'Tábor',
  },
  {
    id: '0ee2ee9f',
    name: 'Kačka',
    group: 'Tábor',
  },
  {
    id: '8fbf1970',
    name: 'Dana Pokorná',
    group: 'Tábor',
  },
  {
    id: 'a06f724a',
    name: 'Luboš Pokorný',
    group: 'Tábor',
  },
  {
    id: 'b2aa174b',
    name: 'Henrik Vilímek',
    group: 'Tábor',
  },
  {
    id: 'c69c5c9c',
    name: 'Jiřka',
    group: 'Tábor',
  },
  {
    id: 'b14392cd',
    name: 'Míra Schovanec',
    group: 'Tábor',
  },
  {
    id: 'f0fb64bb',
    name: 'Andrea Berndtová',
    group: 'Tábor',
  },
  {
    id: 'bf99d96f',
    name: 'Michal Berndt',
    group: 'Tábor',
  },
  {
    id: 'bf0255e0',
    name: 'Johan',
    group: 'Tábor',
  },
];

export function getAllInvites(): InviteT[] {
  return invites;
}

export function getInvite(id: string): InviteT {
  return invites.find((invite) => invite.id === id);
}
