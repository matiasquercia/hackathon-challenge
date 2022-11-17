import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "../../components/Card/Card";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import HackathonCard from "../../components/HackathonCard/HackathonCard";
import DevelopmentCard from "../../components/DevelopmentCard.js/DevelpmentCard";
import store from "../../Store";
import { _getDevelopments, _getHackathons } from "../../actions/Application";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 80,
    marginRight: 15,
  },
  divTitle: {
    marginTop: 90,
    marginBottom: 20,
  },
  title: {
    display: "inline-block",
    fontSize: 30,
    marginLeft: 97,
    fontFamily: "Open Sans",
  },
  team: {
    flexGrow: 1,
    padding: 20,
  },
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 50,
  },
}));

const Dashboard = () => {

  const classes = useStyles();
  const [selected, setSelected] = useState();

  useEffect(() => {
    store.dispatch(_getHackathons());
  }, []);

  useEffect(() => {
    store.dispatch(_getDevelopments(selected));
    console.log(selected)
  }, [selected]);

  const hackathonsReady = useSelector((state) => state.hackathons.ready) || null;
  const hackathonsData = useSelector((state) => state.hackathons.data) || null;

  const developmentsReady = useSelector((state) => state.developments.ready) || null;
  const developmentsData = useSelector((state) => state.developments.data) || null;


  // let hackathonsData = [
  //   {
  //     "id" : "030559-9172",
  //     "name" : "Sønder Alle",
  //     "location" : "Denmark",
  //     "createdAt" : "2022-11-14 19:58:25",
  //     "updatedAt" : "2022-11-14 19:58:25"
  //   },
  //   {
  //     "id" : "14077507613",
  //     "name" : "Victoria terrasse",
  //     "location" : "Norway",
  //     "createdAt" : "2022-11-15 11:33:17",
  //     "updatedAt" : "2022-11-15 11:33:17"
  //   },
  //   {
  //     "id" : "1570455674068 86",
  //     "name" : "Rue Victor-Hugo",
  //     "location" : "France",
  //     "createdAt" : "2022-11-15 11:43:17",
  //     "updatedAt" : "2022-11-15 11:43:17"
  //   },
  //   {
  //     "id" : "16556441-F",
  //     "name" : "Avenida de América",
  //     "location" : "Spain",
  //     "createdAt" : "2022-11-15 12:23:19",
  //     "updatedAt" : "2022-11-15 12:23:19"
  //   },
  //   {
  //     "id" : "27 96 98 3567 9",
  //     "name" : "Peatonal Sánchez",
  //     "location" : "Mexico",
  //     "createdAt" : "2022-11-15 11:07:32",
  //     "updatedAt" : "2022-11-15 11:07:32"
  //   },
  //   {
  //     "id" : "2890505737917 05",
  //     "name" : "Rue Barrier",
  //     "location" : "France",
  //     "createdAt" : "2022-11-15 11:53:17",
  //     "updatedAt" : "2022-11-15 11:53:17"
  //   },
  //   {
  //     "id" : "292029053",
  //     "name" : "Poplar Dr",
  //     "location" : "Australia",
  //     "createdAt" : "2022-11-15 11:01:09",
  //     "updatedAt" : "2022-11-15 11:01:09"
  //   },
  //   {
  //     "id" : "43882887-C",
  //     "name" : "Calle del Pez",
  //     "location" : "Spain",
  //     "createdAt" : "2022-11-15 12:33:17",
  //     "updatedAt" : "2022-11-15 12:33:17"
  //   },
  //   {
  //     "id" : "56 120553 S 563",
  //     "name" : "Breslauer Straße",
  //     "location" : "Germany",
  //     "createdAt" : "2022-11-15 12:03:17",
  //     "updatedAt" : "2022-11-15 12:03:17"
  //   },
  //   {
  //     "id" : "66 270855 O 729",
  //     "name" : "Am Sportplatz",
  //     "location" : "Germany",
  //     "createdAt" : "2022-11-15 11:24:30",
  //     "updatedAt" : "2022-11-15 11:24:30"
  //   },
  //   {
  //     "id" : "756.1215.8529.27",
  //     "name" : "Avenue Debrousse",
  //     "location" : "Switzerland",
  //     "createdAt" : "2022-11-15 12:13:17",
  //     "updatedAt" : "2022-11-15 12:13:17"
  //   },
  //   {
  //     "id" : "989504795",
  //     "name" : "Živana Saramandića",
  //     "location" : "Serbia",
  //     "createdAt" : "2022-11-15 11:13:18",
  //     "updatedAt" : "2022-11-15 11:13:18"
  //   },
  //   {
  //     "id" : "XZ 04 16 68 O",
  //     "name" : "Kingsway",
  //     "location" : "United Kingdom",
  //     "createdAt" : "2022-11-14 19:58:53",
  //     "updatedAt" : "2022-11-14 19:58:53"
  //   }
  // ]
  
  let developersData = [
    {
      "id" : "0501d12b-fff2-492c-b9de-a7ee026b8ea2",
      "id_hackathon" : "030559-9172",
      "firstName" : "Adela",
      "lastName" : "Fajardo",
      "age" : 28,
      "phone" : "(614) 659 6124",
      "picture" : "https://randomuser.me/api/portraits/thumb/women/3.jpg",
      "city" : "Charay",
      "email" : "adela.fajardo@example.com",
      "nat" : null,
      "ranking" : 10,
      "createdAt" : "2022-11-14 19:58:25",
      "updatedAt" : "2022-11-14 19:58:25"
    },
    {
      "id" : "0c72956e-3b39-4f13-ab54-3a4366be5fb9",
      "id_hackathon" : "XZ 04 16 68 O",
      "firstName" : "Aida",
      "lastName" : "Rosas",
      "age" : 62,
      "phone" : "(647) 939 7619",
      "picture" : "https://randomuser.me/api/portraits/thumb/women/38.jpg",
      "city" : "La Frontera",
      "email" : "aida.rosas@example.com",
      "nat" : null,
      "ranking" : 3,
      "createdAt" : "2022-11-14 19:58:53",
      "updatedAt" : "2022-11-14 19:58:53"
    },
    {
      "id" : "0c8fd5ba-12be-40c1-9fcd-1fc84a8a50bf",
      "id_hackathon" : "27 96 98 3567 9",
      "firstName" : "Alexander",
      "lastName" : "Ross",
      "age" : 21,
      "phone" : "H65 Q30-6976",
      "picture" : "https://randomuser.me/api/portraits/thumb/men/53.jpg",
      "city" : "Georgetown",
      "email" : "alexander.ross@example.com",
      "nat" : null,
      "ranking" : 5,
      "createdAt" : "2022-11-15 11:07:32",
      "updatedAt" : "2022-11-15 11:07:32"
    },
    {
      "id" : "1123c289-d3ad-4baa-8463-c2f2c69416e5",
      "id_hackathon" : "292029053",
      "firstName" : "Ben",
      "lastName" : "Byrd",
      "age" : 69,
      "phone" : "07-3621-4832",
      "picture" : "https://randomuser.me/api/portraits/thumb/men/13.jpg",
      "city" : "Bendigo",
      "email" : "ben.byrd@example.com",
      "nat" : null,
      "ranking" : 10,
      "createdAt" : "2022-11-15 11:01:09",
      "updatedAt" : "2022-11-15 11:01:09"
    },
    {
      "id" : "2612cfee-893a-4a21-ab93-9de381c12048",
      "id_hackathon" : "292029053",
      "firstName" : "Christian",
      "lastName" : "Kilic",
      "age" : 31,
      "phone" : "0518-0102534",
      "picture" : "https://randomuser.me/api/portraits/thumb/men/21.jpg",
      "city" : "Zschopau",
      "email" : "christian.kilic@example.com",
      "nat" : null,
      "ranking" : 2,
      "createdAt" : "2022-11-15 11:01:09",
      "updatedAt" : "2022-11-15 11:01:09"
    },
    {
      "id" : "2a99a11d-fb33-47df-bc57-5a5a67e15ea8",
      "id_hackathon" : "292029053",
      "firstName" : "Charles",
      "lastName" : "Masson",
      "age" : 39,
      "phone" : "077 913 86 53",
      "picture" : "https://randomuser.me/api/portraits/thumb/men/65.jpg",
      "city" : "Benken (Sg)",
      "email" : "charles.masson@example.com",
      "nat" : null,
      "ranking" : 5,
      "createdAt" : "2022-11-15 11:01:09",
      "updatedAt" : "2022-11-15 11:01:09"
    },
    {
      "id" : "2f088d58-8011-477e-8b9e-3da5b4d04492",
      "id_hackathon" : "030559-9172",
      "firstName" : "Bruno",
      "lastName" : "Vincent",
      "age" : 29,
      "phone" : "076 803 25 16",
      "picture" : "https://randomuser.me/api/portraits/thumb/men/36.jpg",
      "city" : "St. Antoni",
      "email" : "bruno.vincent@example.com",
      "nat" : null,
      "ranking" : 5,
      "createdAt" : "2022-11-14 19:58:25",
      "updatedAt" : "2022-11-14 19:58:25"
    },
    {
      "id" : "30869ee7-97d6-413e-9dfe-66e578dcf74c",
      "id_hackathon" : "27 96 98 3567 9",
      "firstName" : "Clarisse",
      "lastName" : "Berger",
      "age" : 27,
      "phone" : "03-87-94-27-29",
      "picture" : "https://randomuser.me/api/portraits/thumb/women/45.jpg",
      "city" : "Toulouse",
      "email" : "clarisse.berger@example.com",
      "nat" : null,
      "ranking" : 9,
      "createdAt" : "2022-11-15 11:07:32",
      "updatedAt" : "2022-11-15 11:07:32"
    },
    {
      "id" : "33c187a5-d38d-40df-9d49-16bdec2ef082",
      "id_hackathon" : "27 96 98 3567 9",
      "firstName" : "الینا",
      "lastName" : "زارعی",
      "age" : 36,
      "phone" : "071-99051831",
      "picture" : "https://randomuser.me/api/portraits/thumb/women/90.jpg",
      "city" : "قزوین",
      "email" : "lyn.zraay@example.com",
      "nat" : null,
      "ranking" : 4,
      "createdAt" : "2022-11-15 11:07:32",
      "updatedAt" : "2022-11-15 11:07:32"
    },
    {
      "id" : "39a3c982-3564-410e-85fe-7aa74a58f487",
      "id_hackathon" : "030559-9172",
      "firstName" : "Clara",
      "lastName" : "Møller",
      "age" : 40,
      "phone" : "63593545",
      "picture" : "https://randomuser.me/api/portraits/thumb/women/27.jpg",
      "city" : "Nimtofte",
      "email" : "clara.moller@example.com",
      "nat" : null,
      "ranking" : 3,
      "createdAt" : "2022-11-14 19:58:25",
      "updatedAt" : "2022-11-14 19:58:25"
    },
    {
      "id" : "428294f7-6df9-4ac0-b5eb-574e02242919",
      "id_hackathon" : "XZ 04 16 68 O",
      "firstName" : "Emir",
      "lastName" : "Engdal",
      "age" : 51,
      "phone" : "21121605",
      "picture" : "https://randomuser.me/api/portraits/thumb/men/90.jpg",
      "city" : "Hauknes",
      "email" : "emir.engdal@example.com",
      "nat" : null,
      "ranking" : 8,
      "createdAt" : "2022-11-14 19:58:53",
      "updatedAt" : "2022-11-14 19:58:53"
    },
    {
      "id" : "42fbcc50-1d9c-49f8-8072-719d6b2b2536",
      "id_hackathon" : "27 96 98 3567 9",
      "firstName" : "Engeltje",
      "lastName" : "Dooper",
      "age" : 43,
      "phone" : "(0500) 547255",
      "picture" : "https://randomuser.me/api/portraits/thumb/women/40.jpg",
      "city" : "Heythuysen",
      "email" : "engeltje.dooper@example.com",
      "nat" : null,
      "ranking" : 2,
      "createdAt" : "2022-11-15 11:07:32",
      "updatedAt" : "2022-11-15 11:07:32"
    },
    {
      "id" : "43da20c8-3285-4ca6-a8e0-664cdce6b973",
      "id_hackathon" : "27 96 98 3567 9",
      "firstName" : "Debbie",
      "lastName" : "Duncan",
      "age" : 62,
      "phone" : "01783 65414",
      "picture" : "https://randomuser.me/api/portraits/thumb/women/83.jpg",
      "city" : "St Albans",
      "email" : "debbie.duncan@example.com",
      "nat" : null,
      "ranking" : 6,
      "createdAt" : "2022-11-15 11:07:32",
      "updatedAt" : "2022-11-15 11:07:32"
    },
    {
      "id" : "45737885-4124-4f8f-9b1f-91c438ba9ca4",
      "id_hackathon" : "030559-9172",
      "firstName" : "Gojko",
      "lastName" : "Maksimović",
      "age" : 73,
      "phone" : "015-7668-631",
      "picture" : "https://randomuser.me/api/portraits/thumb/men/30.jpg",
      "city" : "Mionica",
      "email" : "gojko.maksimovic@example.com",
      "nat" : null,
      "ranking" : 7,
      "createdAt" : "2022-11-14 19:58:25",
      "updatedAt" : "2022-11-14 19:58:25"
    },
    {
      "id" : "47c74ad2-2bc5-4d49-a859-a1f9f1b7515f",
      "id_hackathon" : "292029053",
      "firstName" : "Estéban",
      "lastName" : "Laurent",
      "age" : 71,
      "phone" : "05-17-43-03-93",
      "picture" : "https://randomuser.me/api/portraits/thumb/men/56.jpg",
      "city" : "Pau",
      "email" : "esteban.laurent@example.com",
      "nat" : null,
      "ranking" : 1,
      "createdAt" : "2022-11-15 11:01:09",
      "updatedAt" : "2022-11-15 11:01:09"
    },
    {
      "id" : "494a878e-7479-406c-97ea-f40cdf3b4835",
      "id_hackathon" : "030559-9172",
      "firstName" : "Felix",
      "lastName" : "Marie",
      "age" : 60,
      "phone" : "079 272 52 36",
      "picture" : "https://randomuser.me/api/portraits/thumb/men/78.jpg",
      "city" : "Klingnau",
      "email" : "felix.marie@example.com",
      "nat" : null,
      "ranking" : 1,
      "createdAt" : "2022-11-14 19:58:25",
      "updatedAt" : "2022-11-14 19:58:25"
    },
    {
      "id" : "4cd83e21-e0f6-4cc8-b6e2-2f3c72dc36d9",
      "id_hackathon" : "030559-9172",
      "firstName" : "Ernesto",
      "lastName" : "Roque",
      "age" : 24,
      "phone" : "(641) 882 3852",
      "picture" : "https://randomuser.me/api/portraits/thumb/men/76.jpg",
      "city" : "Tocumbo",
      "email" : "ernesto.roque@example.com",
      "nat" : null,
      "ranking" : 4,
      "createdAt" : "2022-11-14 19:58:25",
      "updatedAt" : "2022-11-14 19:58:25"
    },
    {
      "id" : "51e9ec0c-24f9-4650-9bca-645e929d35bd",
      "id_hackathon" : "XZ 04 16 68 O",
      "firstName" : "Elif",
      "lastName" : "Atakol",
      "age" : 59,
      "phone" : "(158)-237-8378",
      "picture" : "https://randomuser.me/api/portraits/thumb/women/55.jpg",
      "city" : "Amasya",
      "email" : "elif.atakol@example.com",
      "nat" : null,
      "ranking" : 2,
      "createdAt" : "2022-11-14 19:58:53",
      "updatedAt" : "2022-11-14 19:58:53"
    },
    {
      "id" : "560c76df-d8f6-4ef5-9337-e37857f084c1",
      "id_hackathon" : "030559-9172",
      "firstName" : "Frederick",
      "lastName" : "Hart",
      "age" : 64,
      "phone" : "03-4905-2704",
      "picture" : "https://randomuser.me/api/portraits/thumb/men/50.jpg",
      "city" : "Geraldton",
      "email" : "frederick.hart@example.com",
      "nat" : null,
      "ranking" : 6,
      "createdAt" : "2022-11-14 19:58:25",
      "updatedAt" : "2022-11-14 19:58:25"
    },
    {
      "id" : "672e2950-05a9-4488-a498-38488211182e",
      "id_hackathon" : "XZ 04 16 68 O",
      "firstName" : "Joshua",
      "lastName" : "Hubert",
      "age" : 48,
      "phone" : "03-10-10-51-96",
      "picture" : "https://randomuser.me/api/portraits/thumb/men/52.jpg",
      "city" : "Nice",
      "email" : "joshua.hubert@example.com",
      "nat" : null,
      "ranking" : 4,
      "createdAt" : "2022-11-14 19:58:53",
      "updatedAt" : "2022-11-14 19:58:53"
    },
    {
      "id" : "6dd91a39-f6ca-4119-a73b-11be079008eb",
      "id_hackathon" : "27 96 98 3567 9",
      "firstName" : "Esat",
      "lastName" : "Türkyılmaz",
      "age" : 74,
      "phone" : "(046)-005-8786",
      "picture" : "https://randomuser.me/api/portraits/thumb/men/87.jpg",
      "city" : "Samsun",
      "email" : "esat.turkyilmaz@example.com",
      "nat" : null,
      "ranking" : 7,
      "createdAt" : "2022-11-15 11:07:32",
      "updatedAt" : "2022-11-15 11:07:32"
    },
    {
      "id" : "70e0b45f-ac3e-4832-adb3-c405268369b1",
      "id_hackathon" : "27 96 98 3567 9",
      "firstName" : "Hazael",
      "lastName" : "Aragão",
      "age" : 62,
      "phone" : "(14) 5236-7000",
      "picture" : "https://randomuser.me/api/portraits/thumb/men/31.jpg",
      "city" : "Cotia",
      "email" : "hazael.aragao@example.com",
      "nat" : null,
      "ranking" : 10,
      "createdAt" : "2022-11-15 11:07:32",
      "updatedAt" : "2022-11-15 11:07:32"
    },
    {
      "id" : "775525f1-1bfe-4d82-9d4e-50fa4920aa1a",
      "id_hackathon" : "XZ 04 16 68 O",
      "firstName" : "Jean-Paul",
      "lastName" : "Henry",
      "age" : 74,
      "phone" : "077 106 61 66",
      "picture" : "https://randomuser.me/api/portraits/thumb/men/67.jpg",
      "city" : "Fürstenau",
      "email" : "jean-paul.henry@example.com",
      "nat" : null,
      "ranking" : 9,
      "createdAt" : "2022-11-14 19:58:53",
      "updatedAt" : "2022-11-14 19:58:53"
    },
    {
      "id" : "84eb04cd-2f49-454a-a704-abdc67812a25",
      "id_hackathon" : "27 96 98 3567 9",
      "firstName" : "Lenni",
      "lastName" : "Kemppainen",
      "age" : 38,
      "phone" : "05-450-161",
      "picture" : "https://randomuser.me/api/portraits/thumb/men/75.jpg",
      "city" : "Karstula",
      "email" : "lenni.kemppainen@example.com",
      "nat" : null,
      "ranking" : 3,
      "createdAt" : "2022-11-15 11:07:32",
      "updatedAt" : "2022-11-15 11:07:32"
    },
    {
      "id" : "8ea0e96d-4ce5-4524-ab0b-bbf23952ec6f",
      "id_hackathon" : "XZ 04 16 68 O",
      "firstName" : "Jasão",
      "lastName" : "Silva",
      "age" : 36,
      "phone" : "(26) 3197-4934",
      "picture" : "https://randomuser.me/api/portraits/thumb/men/17.jpg",
      "city" : "Palhoça",
      "email" : "jasao.silva@example.com",
      "nat" : null,
      "ranking" : 7,
      "createdAt" : "2022-11-14 19:58:53",
      "updatedAt" : "2022-11-14 19:58:53"
    },
    {
      "id" : "af5ffb88-4635-410f-b9c6-237d7a53fcc8",
      "id_hackathon" : "030559-9172",
      "firstName" : "Melinda",
      "lastName" : "Watts",
      "age" : 50,
      "phone" : "(732) 987-5340",
      "picture" : "https://randomuser.me/api/portraits/thumb/women/47.jpg",
      "city" : "Los Angeles",
      "email" : "melinda.watts@example.com",
      "nat" : null,
      "ranking" : 9,
      "createdAt" : "2022-11-14 19:58:25",
      "updatedAt" : "2022-11-14 19:58:25"
    },
    {
      "id" : "b46a0a76-2d23-4a80-96fb-ef0e0ad009ea",
      "id_hackathon" : "292029053",
      "firstName" : "Melisa",
      "lastName" : "Fernandez",
      "age" : 75,
      "phone" : "075 069 64 48",
      "picture" : "https://randomuser.me/api/portraits/thumb/women/1.jpg",
      "city" : "Leysin",
      "email" : "melisa.fernandez@example.com",
      "nat" : null,
      "ranking" : 9,
      "createdAt" : "2022-11-15 11:01:09",
      "updatedAt" : "2022-11-15 11:01:09"
    },
    {
      "id" : "b8e31ec6-847a-43b9-9ae3-50e2e152a9f2",
      "id_hackathon" : "292029053",
      "firstName" : "Molly",
      "lastName" : "Lopez",
      "age" : 28,
      "phone" : "015242 87968",
      "picture" : "https://randomuser.me/api/portraits/thumb/women/90.jpg",
      "city" : "Stevenage",
      "email" : "molly.lopez@example.com",
      "nat" : null,
      "ranking" : 3,
      "createdAt" : "2022-11-15 11:01:09",
      "updatedAt" : "2022-11-15 11:01:09"
    },
    {
      "id" : "be44f4a3-a2e2-46d7-9a7f-eccd16b0c4b4",
      "id_hackathon" : "030559-9172",
      "firstName" : "Sava",
      "lastName" : "Vujčić",
      "age" : 34,
      "phone" : "014-7072-726",
      "picture" : "https://randomuser.me/api/portraits/thumb/men/84.jpg",
      "city" : "Knić",
      "email" : "sava.vujcic@example.com",
      "nat" : null,
      "ranking" : 2,
      "createdAt" : "2022-11-14 19:58:25",
      "updatedAt" : "2022-11-14 19:58:25"
    },
    {
      "id" : "c13f3f8d-5ca2-4677-ae51-29e88b9108cf",
      "id_hackathon" : "XZ 04 16 68 O",
      "firstName" : "Noe",
      "lastName" : "Blanc",
      "age" : 43,
      "phone" : "03-75-10-57-96",
      "picture" : "https://randomuser.me/api/portraits/thumb/men/55.jpg",
      "city" : "Villeurbanne",
      "email" : "noe.blanc@example.com",
      "nat" : null,
      "ranking" : 6,
      "createdAt" : "2022-11-14 19:58:53",
      "updatedAt" : "2022-11-14 19:58:53"
    },
    {
      "id" : "c5b58109-75d9-4ec5-ba1b-31060884ea89",
      "id_hackathon" : "XZ 04 16 68 O",
      "firstName" : "Shobha",
      "lastName" : "Gatty",
      "age" : 76,
      "phone" : "8528655897",
      "picture" : "https://randomuser.me/api/portraits/thumb/women/1.jpg",
      "city" : "Ahmedabad",
      "email" : "shobha.gatty@example.com",
      "nat" : null,
      "ranking" : 5,
      "createdAt" : "2022-11-14 19:58:53",
      "updatedAt" : "2022-11-14 19:58:53"
    },
    {
      "id" : "c8226a60-e2b1-4dec-ae45-4fd3272c0bf3",
      "id_hackathon" : "27 96 98 3567 9",
      "firstName" : "Pamela",
      "lastName" : "Leclerc",
      "age" : 29,
      "phone" : "079 079 20 57",
      "picture" : "https://randomuser.me/api/portraits/thumb/women/16.jpg",
      "city" : "Hüttikon",
      "email" : "pamela.leclerc@example.com",
      "nat" : null,
      "ranking" : 1,
      "createdAt" : "2022-11-15 11:07:32",
      "updatedAt" : "2022-11-15 11:07:32"
    },
    {
      "id" : "d3612aa1-a99b-4eb4-a562-a10d4c354a7b",
      "id_hackathon" : "XZ 04 16 68 O",
      "firstName" : "Silje",
      "lastName" : "Jensen",
      "age" : 75,
      "phone" : "72326477",
      "picture" : "https://randomuser.me/api/portraits/thumb/women/28.jpg",
      "city" : "Randers Nv",
      "email" : "silje.jensen@example.com",
      "nat" : null,
      "ranking" : 10,
      "createdAt" : "2022-11-14 19:58:53",
      "updatedAt" : "2022-11-14 19:58:53"
    },
    {
      "id" : "d513b9e8-c253-4e20-9130-97e950362b39",
      "id_hackathon" : "292029053",
      "firstName" : "Ninon",
      "lastName" : "Gautier",
      "age" : 28,
      "phone" : "01-24-17-25-53",
      "picture" : "https://randomuser.me/api/portraits/thumb/women/33.jpg",
      "city" : "Tours",
      "email" : "ninon.gautier@example.com",
      "nat" : null,
      "ranking" : 7,
      "createdAt" : "2022-11-15 11:01:09",
      "updatedAt" : "2022-11-15 11:01:09"
    },
    {
      "id" : "de40f7d3-5e14-49db-8fcb-7ca2bdc15873",
      "id_hackathon" : "292029053",
      "firstName" : "Samuel",
      "lastName" : "Wade",
      "age" : 35,
      "phone" : "07-8703-5421",
      "picture" : "https://randomuser.me/api/portraits/thumb/men/13.jpg",
      "city" : "Hobart",
      "email" : "samuel.wade@example.com",
      "nat" : null,
      "ranking" : 4,
      "createdAt" : "2022-11-15 11:01:09",
      "updatedAt" : "2022-11-15 11:01:09"
    },
    {
      "id" : "e5e3e29d-7949-46a3-a6df-e69655638b7e",
      "id_hackathon" : "27 96 98 3567 9",
      "firstName" : "Stella",
      "lastName" : "Harrison",
      "age" : 43,
      "phone" : "03-4257-4855",
      "picture" : "https://randomuser.me/api/portraits/thumb/women/33.jpg",
      "city" : "Mildura",
      "email" : "stella.harrison@example.com",
      "nat" : null,
      "ranking" : 8,
      "createdAt" : "2022-11-15 11:07:32",
      "updatedAt" : "2022-11-15 11:07:32"
    },
    {
      "id" : "e6ebb473-c16d-4719-a5be-7f0f1fe1c665",
      "id_hackathon" : "292029053",
      "firstName" : "Vincent",
      "lastName" : "Grewal",
      "age" : 24,
      "phone" : "C99 B74-4330",
      "picture" : "https://randomuser.me/api/portraits/thumb/men/98.jpg",
      "city" : "Delisle",
      "email" : "vincent.grewal@example.com",
      "nat" : null,
      "ranking" : 8,
      "createdAt" : "2022-11-15 11:01:09",
      "updatedAt" : "2022-11-15 11:01:09"
    },
    {
      "id" : "e98d5da6-a7f5-4354-b8b9-ab201890f2da",
      "id_hackathon" : "292029053",
      "firstName" : "Tobias",
      "lastName" : "Møller",
      "age" : 38,
      "phone" : "15509186",
      "picture" : "https://randomuser.me/api/portraits/thumb/men/4.jpg",
      "city" : "Sundby/Erslev",
      "email" : "tobias.moller@example.com",
      "nat" : null,
      "ranking" : 6,
      "createdAt" : "2022-11-15 11:01:09",
      "updatedAt" : "2022-11-15 11:01:09"
    },
    {
      "id" : "f6c06d14-d094-41d9-8592-50023f4466d4",
      "id_hackathon" : "XZ 04 16 68 O",
      "firstName" : "Zachary",
      "lastName" : "Grewal",
      "age" : 76,
      "phone" : "E92 H34-8252",
      "picture" : "https://randomuser.me/api/portraits/thumb/men/15.jpg",
      "city" : "St. George",
      "email" : "zachary.grewal@example.com",
      "nat" : null,
      "ranking" : 1,
      "createdAt" : "2022-11-14 19:58:53",
      "updatedAt" : "2022-11-14 19:58:53"
    },
    {
      "id" : "fabb0b64-75be-4946-923d-f7071f9dd3ab",
      "id_hackathon" : "030559-9172",
      "firstName" : "Chernin",
      "lastName" : "Pashko",
      "age" : 50,
      "phone" : "(066) Y68-8267",
      "picture" : "https://randomuser.me/api/portraits/thumb/men/45.jpg",
      "city" : "Rogatin",
      "email" : "chernin.pashko@example.com",
      "nat" : null,
      "ranking" : 8,
      "createdAt" : "2022-11-14 19:58:25",
      "updatedAt" : "2022-11-14 19:58:25"
    }
  ]
  console.log(hackathonsReady)
  
  // console.log(selectedHackathon);
  const setHackathon = (id) => {
    setSelected(id);
  }

  return (
    <div>
      <div className={classes.divTitle}>
        <h1 className={classes.title}>Hackathons & Best Developments</h1>
      </div>
      <div className={classes.root}>
        <Grid container spacing={2}>
          <div className={classes.team}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Card title="Hackathons">
                  {
                  hackathonsReady ?
                    hackathonsData.map( (hackathon) => 
                          <button onClick={() => setHackathon(hackathon.id)}>
                            <HackathonCard
                              name={hackathon.name}
                              date={hackathon.date} 
                              location={hackathon.location}
                              key={hackathon.id}
                            />
                          </button>
                      )
                  :
                  null
                  }
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card title="Best Developments">
                  {
                    developmentsReady ?
                      developmentsData.map( (development) => 
                        <DevelopmentCard
                          ranking={development.ranking}
                          firstName={development.firstName}
                          lastName={development.lastName}
                          picture={development.picture} 
                          email={development.email}
                          key={development.id}
                        />
                      )
                    : null
                  }
                </Card>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default Dashboard;
