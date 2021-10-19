const getDate = (dte) => {
  const parts = dte.split("-");
  // Please pay attention to the month (parts[1]); JavaScript counts months from 0:
  // January - 0, February - 1, etc.
  const mydate = new Date(parts[0], parts[1] - 1, parts[2]);
  // console.log(mydate.toDateString());
  return mydate;
};

// {

//  alive: true,
//     name: "Person",
//     fullName:'',
//     gender: "",
//     born: getDate("1880-1-02"),
//     died:null,

//     partner: {
//       alive: true,
//       name: "Person Partner",
//       fullName:'',
//       married: true,
//       gender: "",
//       born: getDate("1878-1-01"),
//       died: getDate("1985-3-30"),
//       display: true,
//     },
//     children: []

// }

const treeData = [
  {
    alive: true,
    name: "Fredericka Richaards ",
    fullName: "Fredericka Henriëtte Elizabeth Richaards",
    gender: "female",
    born: getDate("1939-8-12"),
    died: null,

    partner: {
      alive: false,
      name: "Alwin Symor ",
      fullName: "Alwin John Symor ",
      married: true,
      gender: "male",
      born: getDate("1938-4-04"),
      died: getDate("1986-2-26"),
      display: true,
    },
    children: [
      {
        alive: true,
        name: "Gary Symor",
        fullName: "Gary Peter Symor",
        gender: "male",
        born: getDate("1971-1-05"),
        died: null,

        partner: null,
        children: [],
      },
      {
        alive: false,
        name: "Ingrid Symor",
        fullName: "Ingrid Liesbeth Symor",
        gender: "female",
        born: getDate("1965-2-24"),
        died: getDate("2021-1-30"),

        partner: {
          alive: true,
          name: "Gerrit Hoft",
          fullName: "Gerrit Johan Hoft",
          gender: "male",
          born: getDate("1963-6-29"),
          died: null,
          display: true,
          married: false,
        },
        children: [
          {
            alive: true,
            name: "Elvira Hoft",
            fullName: "Elvira Elizabeth Hoft",
            gender: "female",
            born: getDate("1990-7-10"),
            died: null,

            partner: null,
            children: [],
          },

          {
            alive: true,
            name: "Angelo Hoft",
            fullName: "Angelo Gerrit Hoft",
            gender: "male",
            born: getDate("1996-6-19"),
            died: null,

            partner: null,
            children: [],
          },

          {
            alive: true,
            name: "Kenny Hoft",
            fullName: "Kenny Jonathan Hoft",
            gender: "male",
            born: getDate("2004-6-09"),
            died: null,

            partner: null,
            children: [],
          },
        ],
      },
      {
        alive: false,
        name: "Astrid Symor",
        fullName: "Astrid Joan Symor",
        gender: "female",
        born: getDate("1963-6-13"),
        died: getDate("2021-6-20"),

        partner: null,
        children: [
          {
            alive: true,
            name: "Marian Beighle ",
            fullName: "Marian Vanessa Beighle ",
            gender: "female",
            born: getDate("1981-9-10"),
            died: null,

            partner: null,
            children: [
              {
                alive: true,
                name: "Shelby Felter",
                fullName: "Shelby Felter",
                married: true,
                gender: "female",
                born: getDate("2006-10-11"),
                died: null,
                children: [],
              },
              {
                alive: true,
                name: "David Beighle",
                fullName: "David Beighle",
                gender: "male",
                born: getDate("2010-11-06"),
                died: null,
                children: [],
              },
              {
                alive: true,
                name: "Ezra Beighle",
                fullName: "Ezra Beighle",
                gender: "male",
                born: getDate("2019-2-11"),
                died: null,
                children: [],
              },
            ],
          },
          {
            alive: true,
            name: "Yldiz Beighle",
            fullName: "Yldiz Deborah Beighle",
            gender: "female",
            born: getDate("1983-4-21"),
            died: null,

            partner: {
              alive: true,
              name: "Jozef Pollack",
              fullName: "Jozef Pollack",
              married: true,
              gender: "male",
              born: getDate("1984-3-19"),
              died: null,
              display: true,
            },
            children: [
              {
                alive: true,
                name: "Rebekah Pollack",
                fullName: "Rebekah Pollack",
                gender: "female",
                born: getDate("2013-2-01"),
                died: null,
                children: [],
              },
            ],
          },
          {
            alive: true,
            name: "Achmed Beighle",
            fullName: "Achmed John Beighle",
            gender: "male",
            born: getDate("1988-11-08"),
            died: null,

            partner: {
              alive: true,
              name: "Katie",
              fullName: "Katie",
              married: true,
              gender: "female",
              born: getDate("1988-11-08"),
              died: null,
              display: true,
            },
            children: [
              {
                alive: true,
                name: "Quade Beighle",
                fullName: "Quade Earyl Anthony Beighle",
                gender: "male",
                born: getDate("2014-8-11"),
                died: null,

                partner: null,
                children: [],
              },
              {
                alive: true,
                name: "Elenore Beighle",
                fullName: "Elenore Beighle",
                gender: "male",
                born: getDate("2018-8-14"),
                died: null,

                partner: null,
                children: [],
              },
            ],
          },
          {
            alive: true,
            name: "Antoine Beighle",
            fullName: "Antoine Quaraisi Beighle",
            gender: "male",
            born: getDate("1992-2-13"),
            died: null,

            partner: null,
            children: [
              {
                alive: true,
                name: "Leila Beighle",
                fullName: "Leila Beighle",
                gender: "female",
                born: getDate("2015-5-10"),
                died: null,

                partner: null,
                children: [],
              },
              {
                alive: true,
                name: "Addisyn Beighle",
                fullName: "Addisyn Beighle",
                gender: "female",
                born: getDate("2016-6-05"),
                died: null,

                partner: null,
                children: [],
              },
              {
                alive: true,
                name: "Addilyn Beighle",
                fullName: "Addilyn Beighle",
                gender: "female",
                born: getDate("2016-6-05"),
                died: null,

                partner: null,
                children: [],
              },
              {
                alive: true,
                name: "Anthony Beighle",
                fullName: "Anthony Beighle",
                gender: "male",
                born: getDate("2018-1-09"),
                died: null,

                partner: null,
                children: [],
              },
              {
                alive: true,
                name: "Leityn Beighle",
                fullName: "Leityn Beighle",
                gender: "male",
                born: getDate("2020-7-02"),
                died: null,

                partner: null,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

export default treeData;
