import { PrismaClient, Prisma } from '@prisma/client';
import fs from 'fs/promises';

const content = {
  "id": 11,
  "title": "Curso 11",
  "banner": "http://dummyimage.com/243x100.png/dddddd/000000",
  "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  "level": "medium",
  "teacher": 9,
  "content": [
    {
      "title": "Módulo 1",
      "description": "Gravida ac tempor magnis quisque hendrerit facilisis vivamus parturient sodales curae fermentum, volutpat sagittis integer eu vel lacinia orci maecenas velit tristique.",
      "lessons": [
        788,
        720,
        394,
        769,
        865,
        900,
        712,
        373,
        883,
        741
      ]
    },
    {
      "title": "Módulo 2",
      "description": "Nascetur donec maecenas tellus feugiat consequat luctus ultrices posuere enim diam aliquet pulvinar quam dis, rutrum ad per penatibus rhoncus potenti vel dui et arcu etiam primis inceptos.",
      "lessons": [
        199,
        337,
        592,
        336
      ]
    },
    {
      "title": "Módulo 3",
      "description": "Pulvinar egestas malesuada sem torquent fermentum imperdiet duis tellus felis aliquet, dignissim tincidunt suscipit vel quisque nullam nam dapibus metus.",
      "lessons": [
        377,
        123,
        357,
        424,
        141,
        360,
        839,
        897
      ]
    },
    {
      "title": "Módulo 4",
      "description": "Conubia natoque curae aliquet himenaeos taciti et tempor mus, fermentum venenatis turpis parturient potenti scelerisque cum purus lobortis, vehicula tempus condimentum mi lacinia mattis velit.",
      "lessons": [
        137,
        851,
        811,
        472,
        458,
        341,
        927,
        732,
        160
      ]
    },
    {
      "title": "Módulo 5",
      "description": "Volutpat euismod hendrerit enim scelerisque pharetra ad sem morbi eget quis, cursus class urna duis luctus nam facilisi velit faucibus, sed vehicula consequat facilisis blandit praesent fusce habitant semper.",
      "lessons": [
        198,
        423,
        928,
        936,
        739,
        292,
        923,
        484,
        691,
        409
      ]
    },
    {
      "title": "Módulo 6",
      "description": "Volutpat odio duis nibh nisl molestie vitae ut, penatibus turpis urna natoque cum senectus ante, aenean porta phasellus curae lectus sapien.",
      "lessons": [
        142,
        279,
        930,
        272,
        419,
        946,
        209,
        158,
        622
      ]
    },
    {
      "title": "Módulo 7",
      "description": "Faucibus vestibulum dignissim suspendisse inceptos nulla dui quisque sollicitudin convallis, laoreet penatibus nisl ante est odio magnis aliquam egestas, integer netus consequat purus ultrices felis torquent aliquet.",
      "lessons": [
        536,
        414,
        877,
        766,
        602
      ]
    }
  ],
  "score": 5,
  "limit_date": "3/20/2022",
  "created_at": "1/14/2022",
  "students": 26,
  "category": "art"
}

const teachers = [
  {
    "id": 1,
    "name": "Alyssa Leclercq",
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/50.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/50.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/50.jpg"
    },
    "email": "alyssa.leclercq@example.com",
    "country": {
      "name": "France",
      "nat": "FR",
      "flags": {
        "png": "https://flagcdn.com/w320/fr.png",
        "svg": "https://flagcdn.com/fr.svg"
      }
    },
    "nat": "FR",
    "age": 75
  },
  {
    "id": 2,
    "name": "Lilly Dupont",
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/49.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/49.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/49.jpg"
    },
    "email": "lilly.dupont@example.com",
    "country": {
      "name": "France",
      "nat": "FR",
      "flags": {
        "png": "https://flagcdn.com/w320/fr.png",
        "svg": "https://flagcdn.com/fr.svg"
      }
    },
    "nat": "FR",
    "age": 45
  },
  {
    "id": 3,
    "name": "Randall Pearson",
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/30.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/30.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/30.jpg"
    },
    "email": "randall.pearson@example.com",
    "country": {
      "name": "Ireland",
      "nat": "IE",
      "flags": {
        "png": "https://flagcdn.com/w320/ie.png",
        "svg": "https://flagcdn.com/ie.svg"
      }
    },
    "nat": "IE",
    "age": 48
  },
  {
    "id": 4,
    "name": "Haroun Van der Honing",
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/72.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/72.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/72.jpg"
    },
    "email": "haroun.vanderhoning@example.com",
    "country": {
      "name": "Netherlands",
      "nat": "NL",
      "flags": {
        "png": "https://flagcdn.com/w320/nl.png",
        "svg": "https://flagcdn.com/nl.svg"
      }
    },
    "nat": "NL",
    "age": 29
  },
  {
    "id": 5,
    "name": "Ambre Blanc",
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/19.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/19.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/19.jpg"
    },
    "email": "ambre.blanc@example.com",
    "country": {
      "name": "France",
      "nat": "FR",
      "flags": {
        "png": "https://flagcdn.com/w320/fr.png",
        "svg": "https://flagcdn.com/fr.svg"
      }
    },
    "nat": "FR",
    "age": 27
  },
  {
    "id": 6,
    "name": "Ceylan Numanoğlu",
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/89.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/89.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/89.jpg"
    },
    "email": "ceylan.numanoglu@example.com",
    "country": {
      "name": "Turkey",
      "nat": "TR",
      "flags": {
        "png": "https://flagcdn.com/w320/tr.png",
        "svg": "https://flagcdn.com/tr.svg"
      }
    },
    "nat": "TR",
    "age": 52
  },
  {
    "id": 7,
    "name": "Justine Wilson",
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/85.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/85.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/85.jpg"
    },
    "email": "justine.wilson@example.com",
    "country": {
      "name": "Canada",
      "nat": "CA",
      "flags": {
        "png": "https://flagcdn.com/w320/ca.png",
        "svg": "https://flagcdn.com/ca.svg"
      }
    },
    "nat": "CA",
    "age": 33
  },
  {
    "id": 8,
    "name": "Emma Rogers",
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/82.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/82.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/82.jpg"
    },
    "email": "emma.rogers@example.com",
    "country": {
      "name": "United Kingdom",
      "nat": "GB",
      "flags": {
        "png": "https://flagcdn.com/w320/gb.png",
        "svg": "https://flagcdn.com/gb.svg"
      }
    },
    "nat": "GB",
    "age": 70
  },
  {
    "id": 9,
    "name": "Rick Dean",
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/92.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/92.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/92.jpg"
    },
    "email": "rick.dean@example.com",
    "country": {
      "name": "United States",
      "nat": "US",
      "flags": {
        "png": "https://flagcdn.com/w320/us.png",
        "svg": "https://flagcdn.com/us.svg"
      }
    },
    "nat": "US",
    "age": 49
  },
  {
    "id": 10,
    "name": "Volkan Akaydın",
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/94.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/94.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/94.jpg"
    },
    "email": "volkan.akaydin@example.com",
    "country": {
      "name": "Turkey",
      "nat": "TR",
      "flags": {
        "png": "https://flagcdn.com/w320/tr.png",
        "svg": "https://flagcdn.com/tr.svg"
      }
    },
    "nat": "TR",
    "age": 70
  },
  {
    "id": 11,
    "name": "پوریا رضاییان",
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/91.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/91.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/91.jpg"
    },
    "email": "pwry.rdyyn@example.com",
    "country": {
      "name": "Iran",
      "nat": "IR",
      "flags": {
        "png": "https://flagcdn.com/w320/ir.png",
        "svg": "https://flagcdn.com/ir.svg"
      }
    },
    "nat": "IR",
    "age": 32
  },
  {
    "id": 12,
    "name": "Freya Edwards",
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/38.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/38.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/38.jpg"
    },
    "email": "freya.edwards@example.com",
    "country": {
      "name": "New Zealand",
      "nat": "NZ",
      "flags": {
        "png": "https://flagcdn.com/w320/nz.png",
        "svg": "https://flagcdn.com/nz.svg"
      }
    },
    "nat": "NZ",
    "age": 62
  },
  {
    "id": 13,
    "name": "Ignatz Fath",
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/85.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/85.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/85.jpg"
    },
    "email": "ignatz.fath@example.com",
    "country": {
      "name": "Germany",
      "nat": "DE",
      "flags": {
        "png": "https://flagcdn.com/w320/de.png",
        "svg": "https://flagcdn.com/de.svg"
      }
    },
    "nat": "DE",
    "age": 67
  },
  {
    "id": 14,
    "name": "Ralph Peters",
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/67.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/67.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/67.jpg"
    },
    "email": "ralph.peters@example.com",
    "country": {
      "name": "Australia",
      "nat": "AU",
      "flags": {
        "png": "https://flagcdn.com/w320/au.png",
        "svg": "https://flagcdn.com/au.svg"
      }
    },
    "nat": "AU",
    "age": 67
  },
  {
    "id": 15,
    "name": "Antonella Francois",
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/5.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/5.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/5.jpg"
    },
    "email": "antonella.francois@example.com",
    "country": {
      "name": "Switzerland",
      "nat": "CH",
      "flags": {
        "png": "https://flagcdn.com/w320/ch.png",
        "svg": "https://flagcdn.com/ch.svg"
      }
    },
    "nat": "CH",
    "age": 27
  },
  {
    "id": 16,
    "name": "Darren Garcia",
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/68.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/68.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/68.jpg"
    },
    "email": "darren.garcia@example.com",
    "country": {
      "name": "United Kingdom",
      "nat": "GB",
      "flags": {
        "png": "https://flagcdn.com/w320/gb.png",
        "svg": "https://flagcdn.com/gb.svg"
      }
    },
    "nat": "GB",
    "age": 55
  },
  {
    "id": 17,
    "name": "Matéo Moulin",
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/38.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/38.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/38.jpg"
    },
    "email": "mateo.moulin@example.com",
    "country": {
      "name": "France",
      "nat": "FR",
      "flags": {
        "png": "https://flagcdn.com/w320/fr.png",
        "svg": "https://flagcdn.com/fr.svg"
      }
    },
    "nat": "FR",
    "age": 34
  },
  {
    "id": 18,
    "name": "Özsu Fahri",
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/5.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/5.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/5.jpg"
    },
    "email": "ozsu.fahri@example.com",
    "country": {
      "name": "Turkey",
      "nat": "TR",
      "flags": {
        "png": "https://flagcdn.com/w320/tr.png",
        "svg": "https://flagcdn.com/tr.svg"
      }
    },
    "nat": "TR",
    "age": 34
  },
  {
    "id": 19,
    "name": "Çetin Gönültaş",
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/23.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/23.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/23.jpg"
    },
    "email": "cetin.gonultas@example.com",
    "country": {
      "name": "Turkey",
      "nat": "TR",
      "flags": {
        "png": "https://flagcdn.com/w320/tr.png",
        "svg": "https://flagcdn.com/tr.svg"
      }
    },
    "nat": "TR",
    "age": 52
  },
  {
    "id": 20,
    "name": "Nicolau Dias",
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/64.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/64.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/64.jpg"
    },
    "email": "nicolau.dias@example.com",
    "country": {
      "name": "Brazil",
      "nat": "BR",
      "flags": {
        "png": "https://flagcdn.com/w320/br.png",
        "svg": "https://flagcdn.com/br.svg"
      }
    },
    "nat": "BR",
    "age": 35
  },
  {
    "id": 21,
    "name": "پرهام جعفری",
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/63.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/63.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/63.jpg"
    },
    "email": "prhm.jaafry@example.com",
    "country": {
      "name": "Iran",
      "nat": "IR",
      "flags": {
        "png": "https://flagcdn.com/w320/ir.png",
        "svg": "https://flagcdn.com/ir.svg"
      }
    },
    "nat": "IR",
    "age": 54
  },
  {
    "id": 22,
    "name": "Alicia Aguilar",
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/41.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/41.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/41.jpg"
    },
    "email": "alicia.aguilar@example.com",
    "country": {
      "name": "Spain",
      "nat": "ES",
      "flags": {
        "png": "https://flagcdn.com/w320/es.png",
        "svg": "https://flagcdn.com/es.svg"
      }
    },
    "nat": "ES",
    "age": 56
  },
  {
    "id": 23,
    "name": "Annabelle Anderson",
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/42.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/42.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/42.jpg"
    },
    "email": "annabelle.anderson@example.com",
    "country": {
      "name": "New Zealand",
      "nat": "NZ",
      "flags": {
        "png": "https://flagcdn.com/w320/nz.png",
        "svg": "https://flagcdn.com/nz.svg"
      }
    },
    "nat": "NZ",
    "age": 52
  },
  {
    "id": 24,
    "name": "Sofia Chapman",
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/42.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/42.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/42.jpg"
    },
    "email": "sofia.chapman@example.com",
    "country": {
      "name": "United Kingdom",
      "nat": "GB",
      "flags": {
        "png": "https://flagcdn.com/w320/gb.png",
        "svg": "https://flagcdn.com/gb.svg"
      }
    },
    "nat": "GB",
    "age": 69
  },
  {
    "id": 25,
    "name": "Kristin Fleming",
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/64.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/64.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/64.jpg"
    },
    "email": "kristin.fleming@example.com",
    "country": {
      "name": "United States",
      "nat": "US",
      "flags": {
        "png": "https://flagcdn.com/w320/us.png",
        "svg": "https://flagcdn.com/us.svg"
      }
    },
    "nat": "US",
    "age": 61
  },
  {
    "id": 26,
    "name": "Geoffrey Rijneveld",
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/13.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/13.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/13.jpg"
    },
    "email": "geoffrey.rijneveld@example.com",
    "country": {
      "name": "Netherlands",
      "nat": "NL",
      "flags": {
        "png": "https://flagcdn.com/w320/nl.png",
        "svg": "https://flagcdn.com/nl.svg"
      }
    },
    "nat": "NL",
    "age": 24
  },
  {
    "id": 27,
    "name": "Meral Abadan",
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/94.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/94.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/94.jpg"
    },
    "email": "meral.abadan@example.com",
    "country": {
      "name": "Turkey",
      "nat": "TR",
      "flags": {
        "png": "https://flagcdn.com/w320/tr.png",
        "svg": "https://flagcdn.com/tr.svg"
      }
    },
    "nat": "TR",
    "age": 26
  },
  {
    "id": 28,
    "name": "Cory Bennett",
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/11.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/11.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/11.jpg"
    },
    "email": "cory.bennett@example.com",
    "country": {
      "name": "Ireland",
      "nat": "IE",
      "flags": {
        "png": "https://flagcdn.com/w320/ie.png",
        "svg": "https://flagcdn.com/ie.svg"
      }
    },
    "nat": "IE",
    "age": 38
  },
  {
    "id": 29,
    "name": "Oliver Singh",
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/25.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/25.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/25.jpg"
    },
    "email": "oliver.singh@example.com",
    "country": {
      "name": "New Zealand",
      "nat": "NZ",
      "flags": {
        "png": "https://flagcdn.com/w320/nz.png",
        "svg": "https://flagcdn.com/nz.svg"
      }
    },
    "nat": "NZ",
    "age": 72
  },
  {
    "id": 30,
    "name": "Roriz Ribeiro",
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/39.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/39.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/39.jpg"
    },
    "email": "roriz.ribeiro@example.com",
    "country": {
      "name": "Brazil",
      "nat": "BR",
      "flags": {
        "png": "https://flagcdn.com/w320/br.png",
        "svg": "https://flagcdn.com/br.svg"
      }
    },
    "nat": "BR",
    "age": 74
  }
]


const prisma = new PrismaClient();


function formatTacher(t: any) {
  const res: Prisma.TeacherCreateInput = {
    name: t.name,
    email: t.email,
    nat: t.nat,
    age: t.age,
    country: {
      create: {
        name: t.country.name,
        nat: t.country.nat,
        flags: {
          create: {
            svg: t.country.flags.svg,
            png: t.country.flags.png,
          }
        }
      }
    },
    picture: {
      create: {
        thumbnail: t.picture.thumbnail,
        large: t.picture.large,
        medium: t.picture.medium,
      },
    }
  }
  return res;
}

function formatCourse() {
  const c = content;
  const level = c.level as 'advance' |'medium' | 'basic';
  const category = c.category as 'development' | 'personal' | 'photography' | 'business' | 'marketing' |'art'
  const res: Prisma.CourseCreateInput = {
    title: c.title,
    banner: c.banner,
    description: c.description,
    level,
    score: c.score,
    limit_date: c.limit_date,
    created_at: c.created_at,
    students: c.students,
    category,
    teacher: {
      connect: {
        id: c.teacher,
      }
    },
    content: {
      create: c.content.map(d => ({ title: d.title, description: d.description, lessons: d.lessons })),
    },
  };
  return res;
}


async function seedTeachers() {
  await Promise.all(
    teachers.map(t => prisma.teacher.create({ data: formatTacher(t) }))
  );
}

async function seedContent() {
  
}



(async () => {
  console.log('Empezamos esto!');
  await seedTeachers();
  console.log('Listo ya termine');
})()
.finally(() => {
  prisma.$disconnect();
});