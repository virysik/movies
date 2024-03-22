import { unstable_noStore as noStore } from "next/cache";
import axios, { AxiosResponse } from "axios";
import { PopularMovies, PopularSeries } from "@/app/lib/definitions";

const BASE_URL = process.env.BASE_URL;
const AUTH_TOKEN = process.env.AUTH_TOKEN;
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common["Authorization"] = `Bearer ${AUTH_TOKEN}`;

// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization: `Bearer ${process.env.API_KEY}`,
//   },
// };

// fetch(`https://api.themoviedb.org/3/movie/11?api_key=${API_KEY}`, options)
//   .then((response) => response.json())
//   .then((response) => console.log("RESPONSE111", response))
//   .catch((err) => console.error(err));

// const options2 = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization: `Bearer ${Bearer}`,
//   },
// };

export async function fetchConfig() {
  noStore();

  try {
    const { data } = await axios.get("configuration");
    return data;
  } catch (error) {
    console.log("error", error);
  }
}

export async function fetchPopularMovies() {
  noStore();

  const { data }: AxiosResponse<PopularMovies> = await axios.get(
    "movie/popular?language=en-US&page=1"
  );
  return data;
}

export async function fetchPopularSeries() {
  noStore();

  const { data }: AxiosResponse<PopularSeries> = await axios.get(
    "tv/popular?language=en-US&page=1"
  );
  return data;
}

const resMovies = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: "/gJL5kp5FMopB2sN4WZYnNT5uO0u.jpg",
      genre_ids: [28, 12, 16, 35, 10751],
      id: 1011985,
      original_language: "en",
      original_title: "Kung Fu Panda 4",
      overview:
        "Po is gearing up to become the spiritual leader of his Valley of Peace, but also needs someone to take his place as Dragon Warrior. As such, he will train a new kung fu practitioner for the spot and will encounter a villain called the Chameleon who conjures villains from the past.",
      popularity: 5294.537,
      poster_path: "/wkfG7DaExmcVsGLR4kLouMwxeT5.jpg",
      release_date: "2024-03-02",
      title: "Kung Fu Panda 4",
      video: false,
      vote_average: 6.913,
      vote_count: 167,
    },
    {
      adult: false,
      backdrop_path: "/deLWkOLZmBNkm8p16igfapQyqeq.jpg",
      genre_ids: [14, 12, 28],
      id: 763215,
      original_language: "en",
      original_title: "Damsel",
      overview:
        "A young woman's marriage to a charming prince turns into a fierce fight for survival when she's offered up as a sacrifice to a fire-breathing dragon.",
      popularity: 2543.57,
      poster_path: "/sMp34cNKjIb18UBOCoAv4DpCxwY.jpg",
      release_date: "2024-03-08",
      title: "Damsel",
      video: false,
      vote_average: 7.258,
      vote_count: 912,
    },
    {
      adult: false,
      backdrop_path: "/mDeUmPe4MF35WWlAqj4QFX5UauJ.jpg",
      genre_ids: [28, 27, 53],
      id: 1096197,
      original_language: "pt",
      original_title: "No Way Up",
      overview:
        "Characters from different backgrounds are thrown together when the plane they're travelling on crashes into the Pacific Ocean. A nightmare fight for survival ensues with the air supply running out and dangers creeping in from all sides.",
      popularity: 1548.682,
      poster_path: "/hu40Uxp9WtpL34jv3zyWLb5zEVY.jpg",
      release_date: "2024-01-18",
      title: "No Way Up",
      video: false,
      vote_average: 6.143,
      vote_count: 248,
    },
    {
      adult: false,
      backdrop_path: "/oFAukXiMPrwLpbulGmB5suEZlrm.jpg",
      genre_ids: [28, 12, 878, 14, 18],
      id: 624091,
      original_language: "id",
      original_title: "Sri Asih",
      overview:
        "Alana discover the truth about her origin: she’s not an ordinary human being. She may be the gift for humanity and become its protector as Sri Asih. Or a destruction, if she can’t control her anger.",
      popularity: 1827.462,
      poster_path: "/wShcJSKMFg1Dy1yq7kEZuay6pLS.jpg",
      release_date: "2022-11-17",
      title: "Sri Asih",
      video: false,
      vote_average: 6.5,
      vote_count: 28,
    },
    {
      adult: false,
      backdrop_path: "/cu5Qk2QHxOyyMrD3Bq93DxgmJer.jpg",
      genre_ids: [28, 80],
      id: 1046090,
      original_language: "zh",
      original_title: "周處除三害",
      overview:
        "The arrogant, third most-wanted criminal in Taiwan, decides to get rid of the top two competitors and crowns himself the most-wanted criminal before dying.",
      popularity: 1206.344,
      poster_path: "/7IJ7F8tX7IAkpUdaGovOBJqORnJ.jpg",
      release_date: "2023-10-06",
      title: "The Pig, the Snake and the Pigeon",
      video: false,
      vote_average: 7.551,
      vote_count: 88,
    },
    {
      adult: false,
      backdrop_path: "/xvk5AhfhgQcTuaCQyq3XqAnhEma.jpg",
      genre_ids: [28, 12, 35],
      id: 848538,
      original_language: "en",
      original_title: "Argylle",
      overview:
        "When the plots of reclusive author Elly Conway's fictional espionage novels begin to mirror the covert actions of a real-life spy organization, quiet evenings at home become a thing of the past. Accompanied by her cat Alfie and Aiden, a cat-allergic spy, Elly races across the world to stay one step ahead of the killers as the line between Conway's fictional world and her real one begins to blur.",
      popularity: 1353.29,
      poster_path: "/95VlSEfLMqeX36UVcHJuNlWEpwf.jpg",
      release_date: "2024-01-31",
      title: "Argylle",
      video: false,
      vote_average: 6.146,
      vote_count: 617,
    },
    {
      adult: false,
      backdrop_path: "/47olX0FCvUCfAqlp8cK0O5fKLav.jpg",
      genre_ids: [16, 35, 878],
      id: 1239251,
      original_language: "en",
      original_title: "Megamind vs. the Doom Syndicate",
      overview:
        "Megamind's former villain team, The Doom Syndicate, has returned. Our newly crowned blue hero must now keep up evil appearances until he can assemble his friends (Roxanne, Ol' Chum and Keiko) to stop his former evil teammates from launching Metro City to the Moon.",
      popularity: 1106.88,
      poster_path: "/yRZfiG1QpRkBc7fAmxfcR7Md5EC.jpg",
      release_date: "2024-03-01",
      title: "Megamind vs. the Doom Syndicate",
      video: false,
      vote_average: 5.705,
      vote_count: 123,
    },
    {
      adult: false,
      backdrop_path: "/ekRp1sEA8pnuzVHQkUESTgNSKdW.jpg",
      genre_ids: [878, 28, 80],
      id: 932420,
      original_language: "en",
      original_title: "Code 8 Part II",
      overview:
        "In a world where superpowered people are heavily policed by robots, an ex-con teams up with a drug lord he despises to protect a teen from a corrupt cop.",
      popularity: 1058.104,
      poster_path: "/hhvMTxlTZtnCOe7YFhod9uz3m37.jpg",
      release_date: "2024-02-27",
      title: "Code 8 Part II",
      video: false,
      vote_average: 6.608,
      vote_count: 300,
    },
    {
      adult: false,
      backdrop_path: "/9Le7N3fmrHnWwdxCg35jSSawFyK.jpg",
      genre_ids: [878, 12],
      id: 693134,
      original_language: "en",
      original_title: "Dune: Part Two",
      overview:
        "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
      popularity: 1105.744,
      poster_path: "/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
      release_date: "2024-02-27",
      title: "Dune: Part Two",
      video: false,
      vote_average: 8.396,
      vote_count: 1837,
    },
    {
      adult: false,
      backdrop_path: "/oBIQDKcqNxKckjugtmzpIIOgoc4.jpg",
      genre_ids: [28, 53, 10752],
      id: 969492,
      original_language: "en",
      original_title: "Land of Bad",
      overview:
        "When a Delta Force special ops mission goes terribly wrong, Air Force drone pilot Reaper has 48 hours to remedy what has devolved into a wild rescue operation. With no weapons and no communication other than the drone above, the ground mission suddenly becomes a full-scale battle when the team is discovered by the enemy.",
      popularity: 989.987,
      poster_path: "/lYwjlcBjokC9EhfzfAOkTMQd5Ku.jpg",
      release_date: "2024-01-25",
      title: "Land of Bad",
      video: false,
      vote_average: 7,
      vote_count: 353,
    },
    {
      adult: false,
      backdrop_path: "/4Ep2KivIBUZbkS7kHjW7Qywnhhj.jpg",
      genre_ids: [28],
      id: 1049948,
      original_language: "en",
      original_title: "Vikings: Battle of Heirs",
      overview:
        "A young Viking must come to terms with the realization that he may be the King's son, who was switched at birth, but not before others try to take his rightful place.",
      popularity: 1024.67,
      poster_path: "/87goLbbqrJqAxqDS5cBsik1zKT.jpg",
      release_date: "2023-04-28",
      title: "Vikings: Battle of Heirs",
      video: false,
      vote_average: 7,
      vote_count: 3,
    },
    {
      adult: false,
      backdrop_path: "/o6e8Y0Q7RZIWi4qcJq4s5OYOVJs.jpg",
      genre_ids: [878, 10749, 35],
      id: 792307,
      original_language: "en",
      original_title: "Poor Things",
      overview:
        "Brought back to life by an unorthodox scientist, a young woman runs off with a debauched lawyer on a whirlwind adventure across the continents. Free from the prejudices of her times, she grows steadfast in her purpose to stand for equality and liberation.",
      popularity: 960.54,
      poster_path: "/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
      release_date: "2023-12-07",
      title: "Poor Things",
      video: false,
      vote_average: 7.867,
      vote_count: 2437,
    },
    {
      adult: false,
      backdrop_path: "/gklkxY0veMajdCiGe6ggsh07VG2.jpg",
      genre_ids: [16, 28, 12, 35, 10751],
      id: 940551,
      original_language: "en",
      original_title: "Migration",
      overview:
        "After a migrating duck family alights on their pond with thrilling tales of far-flung places, the Mallard family embarks on a family road trip, from New England, to New York City, to tropical Jamaica.",
      popularity: 813.287,
      poster_path: "/ldfCF9RhR40mppkzmftxapaHeTo.jpg",
      release_date: "2023-12-06",
      title: "Migration",
      video: false,
      vote_average: 7.564,
      vote_count: 951,
    },
    {
      adult: false,
      backdrop_path: "/pwGmXVKUgKN13psUjlhC9zBcq1o.jpg",
      genre_ids: [28, 14],
      id: 634492,
      original_language: "en",
      original_title: "Madame Web",
      overview:
        "Forced to confront revelations about her past, paramedic Cassandra Webb forges a relationship with three young women destined for powerful futures...if they can all survive a deadly present.",
      popularity: 833.965,
      poster_path: "/rULWuutDcN5NvtiZi4FRPzRYWSh.jpg",
      release_date: "2024-02-14",
      title: "Madame Web",
      video: false,
      vote_average: 5.4,
      vote_count: 521,
    },
    {
      adult: false,
      backdrop_path: "/yyFc8Iclt2jxPmLztbP617xXllT.jpg",
      genre_ids: [35, 10751, 14],
      id: 787699,
      original_language: "en",
      original_title: "Wonka",
      overview:
        "Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.",
      popularity: 736.112,
      poster_path: "/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
      release_date: "2023-12-06",
      title: "Wonka",
      video: false,
      vote_average: 7.199,
      vote_count: 2566,
    },
    {
      adult: false,
      backdrop_path: "/nTPFkLUARmo1bYHfkfdNpRKgEOs.jpg",
      genre_ids: [35, 10749],
      id: 1072790,
      original_language: "en",
      original_title: "Anyone But You",
      overview:
        "After an amazing first date, Bea and Ben’s fiery attraction turns ice cold — until they find themselves unexpectedly reunited at a destination wedding in Australia. So they do what any two mature adults would do: pretend to be a couple.",
      popularity: 765.206,
      poster_path: "/5qHoazZiaLe7oFBok7XlUhg96f2.jpg",
      release_date: "2023-12-21",
      title: "Anyone But You",
      video: false,
      vote_average: 7.064,
      vote_count: 1030,
    },
    {
      adult: false,
      backdrop_path: "/td2NcEUn7MPWzpFFjvHLsVQ2pkZ.jpg",
      genre_ids: [28, 53],
      id: 984249,
      original_language: "en",
      original_title: "Ruthless",
      overview:
        "A high school coach, whose teenage daughter was murdered, takes matters into his own hands by going after the men who kidnap his students for their sex trafficking operation.",
      popularity: 627.477,
      poster_path: "/3hVt5fEuUxNZ5h6ynczcUbq6lpJ.jpg",
      release_date: "2023-12-14",
      title: "Ruthless",
      video: false,
      vote_average: 6.733,
      vote_count: 30,
    },
    {
      adult: false,
      backdrop_path: "/hIUs8RzKlrzgbWxn2EpWmiTFqCc.jpg",
      genre_ids: [878, 53],
      id: 870404,
      original_language: "en",
      original_title: "Meteor",
      overview:
        "After a meteor collides into Earth, a lonely rancher and a lost young girl are on the run from vicious mercenaries.",
      popularity: 652.155,
      poster_path: "/tVMddOS5bi3YPVPgTPlEw0TOWoF.jpg",
      release_date: "2021-09-01",
      title: "Meteor",
      video: false,
      vote_average: 5.5,
      vote_count: 81,
    },
    {
      adult: false,
      backdrop_path: "/nb3xI8XI3w4pMVZ38VijbsyBqP4.jpg",
      genre_ids: [18, 36],
      id: 872585,
      original_language: "en",
      original_title: "Oppenheimer",
      overview:
        "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
      popularity: 698.282,
      poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
      release_date: "2023-07-19",
      title: "Oppenheimer",
      video: false,
      vote_average: 8.113,
      vote_count: 7236,
    },
    {
      adult: false,
      backdrop_path: "/G56AzECyTDp63sE7CbJ6AEBKhF.jpg",
      genre_ids: [37, 28],
      id: 851925,
      original_language: "en",
      original_title: "Death Alley",
      overview:
        "In 1892, the Dalton Gang set out to become the most famous outlaws in America. That dream would become a nightmare.",
      popularity: 615.648,
      poster_path: "/iIKYK9mdapWlJ21YNRGB57WKErK.jpg",
      release_date: "2021-03-11",
      title: "Death Alley",
      video: false,
      vote_average: 5.655,
      vote_count: 29,
    },
  ],
  total_pages: 43086,
  total_results: 861712,
};

const resSeries = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: "/hH4YaZuH89Hlyz0DEkf362Mj8gU.jpg",
      genre_ids: [35],
      id: 65701,
      origin_country: ["US"],
      original_language: "en",
      original_name: "Good Mythical Morning",
      overview:
        'Two "Internetainers" (Rhett & Link) go far out and do the weirdest  things, giving you a daily dose of casual comedy every Monday-Friday.',
      popularity: 2435.38,
      poster_path: "/2Fja87aTeuXxTEI1MH2IuHHSsLq.jpg",
      first_air_date: "2012-01-09",
      name: "Good Mythical Morning",
      vote_average: 6.702,
      vote_count: 52,
    },
    {
      adult: false,
      backdrop_path: "/2CUdryUjbdOrWymDJSlHvlcoPsj.jpg",
      genre_ids: [10764],
      id: 127163,
      origin_country: ["DE"],
      original_language: "de",
      original_name: "Das perfekte Dinner",
      overview: "",
      popularity: 3899.359,
      poster_path: "/1DTwcRiOMmn20hHLxKeiNoI0ux2.jpg",
      first_air_date: "2005-11-21",
      name: "Das perfekte Dinner",
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: "/qFfWFwfaEHzDLWLuttWiYq7Poy2.jpg",
      genre_ids: [10767],
      id: 2261,
      origin_country: ["US"],
      original_language: "en",
      original_name: "The Tonight Show Starring Johnny Carson",
      overview:
        "The Tonight Show Starring Johnny Carson is a talk show hosted by Johnny Carson under The Tonight Show franchise from 1962 to 1992. It originally aired during late-night. For its first ten years, Carson's Tonight Show was based in New York City with occasional trips to Burbank, California; in May 1972, the show moved permanently to Burbank, California. In 2002, The Tonight Show Starring Johnny Carson was ranked #12 on TV Guide's 50 Greatest TV Shows of All Time.",
      popularity: 2368.654,
      poster_path: "/jJrveQMHvzDvLaFaLiTfZ9y1Cg8.jpg",
      first_air_date: "1962-10-01",
      name: "The Tonight Show Starring Johnny Carson",
      vote_average: 7.398,
      vote_count: 63,
    },
    {
      adult: false,
      backdrop_path: "/kaiKuIEc8c0nhDVYcjWYJGD7eDC.jpg",
      genre_ids: [10764],
      id: 75685,
      origin_country: ["CZ"],
      original_language: "cs",
      original_name: "Prostřeno!",
      overview:
        "The knives (and forks) are out as a group of strangers compete for the title of ultimate dinner party host. And the money on the table adds spice to the proceedings...",
      popularity: 3154.52,
      poster_path: "/lh8GGzReYg4uoIjpveARaPgd4ZY.jpg",
      first_air_date: "2010-03-01",
      name: "Prostřeno!",
      vote_average: 6.2,
      vote_count: 5,
    },
    {
      adult: false,
      backdrop_path: "/9TXcHOeCsM8W3ZKKIKjdYUsRSeq.jpg",
      genre_ids: [80, 18],
      id: 72879,
      origin_country: ["FR"],
      original_language: "fr",
      original_name: "Demain nous appartient",
      overview:
        "The story revolves around the people of Sète, France. Their lives are punctuated by family rivalries, romance and scenes from daily life, but also by plots involving police investigations, secrets and betrayals.",
      popularity: 3437.401,
      poster_path: "/3uU5uJzOX7xe7mn7YKpBM9oiEZO.jpg",
      first_air_date: "2017-07-17",
      name: "Tomorrow Is Ours",
      vote_average: 6.169,
      vote_count: 59,
    },
    {
      adult: false,
      backdrop_path: "/eWF3oRyL4QWaidN9F4uvM7cBJUV.jpg",
      genre_ids: [10766],
      id: 206559,
      origin_country: ["ZA"],
      original_language: "af",
      original_name: "Binnelanders",
      overview:
        "A South African Afrikaans soap opera. It is set in and around the fictional private hospital, Binneland Kliniek, in Pretoria, and the storyline follows the trials, trauma and tribulations of the staff and patients of the hospital.",
      popularity: 4035.115,
      poster_path: "/v9nGSRx5lFz6KEgfmgHJMSgaARC.jpg",
      first_air_date: "2005-10-13",
      name: "Binnelanders",
      vote_average: 5.739,
      vote_count: 46,
    },
    {
      adult: false,
      backdrop_path: "/yYNa1nqvNK94xZz3eKyfvZdAvPi.jpg",
      genre_ids: [10766, 18],
      id: 112470,
      origin_country: ["FR"],
      original_language: "fr",
      original_name: "Ici tout commence",
      overview: "",
      popularity: 2819.599,
      poster_path: "/yuTHx38jpogXovMhqNatvozigMJ.jpg",
      first_air_date: "2020-11-02",
      name: "Here it all begins",
      vote_average: 7.145,
      vote_count: 38,
    },
    {
      adult: false,
      backdrop_path: "/lhdUwhInXu31qHm65jwBAlpTp8P.jpg",
      genre_ids: [10767],
      id: 82873,
      origin_country: ["US"],
      original_language: "en",
      original_name: "The Kelly Clarkson Show",
      overview:
        "Kelly Clarkson presents the biggest newsmakers and names in film, television and music; as well as emerging new talent and everyday people who are beacons of hope in their communities.",
      popularity: 3041.885,
      poster_path: "/9Gg1oM8Us8gCS5aJA8e0ZRuIHnf.jpg",
      first_air_date: "2019-09-09",
      name: "The Kelly Clarkson Show",
      vote_average: 6.264,
      vote_count: 36,
    },
    {
      adult: false,
      backdrop_path: "/rj3jBAZwPiOgkwAy1205MAgLahj.jpg",
      genre_ids: [10766],
      id: 81329,
      origin_country: ["FR"],
      original_language: "fr",
      original_name: "Un si grand soleil",
      overview:
        "Claire is surprised when she gets arrested for the murder of her childhood friend after she returns to Montpellier.",
      popularity: 3157.188,
      poster_path: "/t6jVlbPMtZOJoAOfeoR4yQmnjXM.jpg",
      first_air_date: "2018-08-27",
      name: "Chronicles of the Sun",
      vote_average: 7.29,
      vote_count: 69,
    },
    {
      adult: false,
      backdrop_path: "/mpcrV6RKlXxTsOCt7K70pJzNzNI.jpg",
      genre_ids: [10767],
      id: 204746,
      origin_country: ["US"],
      original_language: "en",
      original_name: "The Jennifer Hudson Show",
      overview:
        "Talented entertainer and newly-minted EGOT Jennifer Hudson takes on the daytime talk show landscape.",
      popularity: 3145.686,
      poster_path: "/6VBNeo8XG90sNKWYQ0yTEmVBXHJ.jpg",
      first_air_date: "2022-09-12",
      name: "The Jennifer Hudson Show",
      vote_average: 6.769,
      vote_count: 13,
    },
    {
      adult: false,
      backdrop_path: "/h0y3OzHzG4yNvn8u3Za6ByH8lrQ.jpg",
      genre_ids: [18, 10766],
      id: 45789,
      origin_country: ["DE"],
      original_language: "de",
      original_name: "Sturm der Liebe",
      overview:
        "These are the stories of relationships taking place in the fictional five-star hotel Fürstenhof, located in Feldkirchen-Westerham near Rosenheim with the plot revolving around members of the family room area, the hotel owners, and employees.",
      popularity: 3504.728,
      poster_path: "/9oZjOh3Va3FsiLGouhSogFsBX9G.jpg",
      first_air_date: "2005-09-26",
      name: "Sturm der Liebe",
      vote_average: 7.033,
      vote_count: 15,
    },
    {
      adult: false,
      backdrop_path: "/zW0v2YT74C6tRafzqqBkfSqLAN0.jpg",
      genre_ids: [10759, 10765],
      id: 52814,
      origin_country: ["US"],
      original_language: "en",
      original_name: "Halo",
      overview:
        "Depicting an epic 26th-century conflict between humanity and an alien threat known as the Covenant, the series weaves deeply drawn personal stories with action, adventure and a richly imagined vision of the future.",
      popularity: 3287.847,
      poster_path: "/hmHA5jqxN3ESIAGx0jAwV7TJhTQ.jpg",
      first_air_date: "2022-03-24",
      name: "Halo",
      vote_average: 8.336,
      vote_count: 2448,
    },
    {
      adult: false,
      backdrop_path: "/qJnjJXBLgG4tummCm792nvNz7u1.jpg",
      genre_ids: [10767],
      id: 23915,
      origin_country: ["DE"],
      original_language: "de",
      original_name: "Markus Lanz",
      overview:
        "TV presenter Markus Lanz invites prominent guests and experts from all areas of public life to his colourful talk show. As a rule, there are four guests, introduced individually to contribute their personal experiences to the topics.",
      popularity: 1841.548,
      poster_path: "/tr4cLn4ecRASV0SPM9FRv0AJOQF.jpg",
      first_air_date: "2008-06-03",
      name: "Markus Lanz",
      vote_average: 5.2,
      vote_count: 9,
    },
    {
      adult: false,
      backdrop_path: "/jWXrQstj7p3Wl5MfYWY6IHqRpDb.jpg",
      genre_ids: [10763],
      id: 94722,
      origin_country: ["DE"],
      original_language: "de",
      original_name: "Tagesschau",
      overview:
        "German daily news program, the oldest still existing program on German television.",
      popularity: 1808.668,
      poster_path: "/7dFZJ2ZJJdcmkp05B9NWlqTJ5tq.jpg",
      first_air_date: "1952-12-26",
      name: "Tagesschau",
      vote_average: 6.845,
      vote_count: 197,
    },
    {
      adult: false,
      backdrop_path: "/ottT2Yt0OfHiHp3PHJTLNVV8JPE.jpg",
      genre_ids: [18, 10766],
      id: 13945,
      origin_country: ["DE"],
      original_language: "de",
      original_name: "Gute Zeiten, schlechte Zeiten",
      overview:
        "Gute Zeiten, schlechte Zeiten is a long-running German television soap opera, first broadcast on RTL in 1992. The programme concerns the lives of a fictional neighborhood in Germany's capital city Berlin. Over the years the soap opera tends to have an overhaul of young people in their late teens and early twenties; targeting a young viewership.",
      popularity: 1773.059,
      poster_path: "/fNHBzjxsydcAssxXqb5IV2obDdU.jpg",
      first_air_date: "1992-05-11",
      name: "Gute Zeiten, schlechte Zeiten",
      vote_average: 6.154,
      vote_count: 26,
    },
    {
      adult: false,
      backdrop_path: "/4W2sH4CXzJ98ScuLGRij1KakzSv.jpg",
      genre_ids: [10751, 35],
      id: 230525,
      origin_country: ["KR"],
      original_language: "ko",
      original_name: "우당탕탕 패밀리",
      overview:
        "A romantic family drama about a divorced couple who broke up 30 years ago out of hate, reuniting as in-laws through their children and overcoming long overdue conflicts and enmity.",
      popularity: 2866.512,
      poster_path: "/goMzJ6rxTndGki2pKpyAKuKNXHY.jpg",
      first_air_date: "2023-09-18",
      name: "Unpredictable Family",
      vote_average: 6.7,
      vote_count: 6,
    },
    {
      adult: false,
      backdrop_path: "/5S0SI4NjyMji05OPL0GOZ4BsiMh.jpg",
      genre_ids: [10764],
      id: 136166,
      origin_country: ["NL"],
      original_language: "nl",
      original_name: "Lang Leve de Liefde",
      overview: "",
      popularity: 2833.847,
      poster_path: "/9lpvvzEl5kViIc2vUJG4QKzj2ds.jpg",
      first_air_date: "2020-01-20",
      name: "Lang Leve de Liefde",
      vote_average: 2.667,
      vote_count: 3,
    },
    {
      adult: false,
      backdrop_path: "/bZltl4ZysPzkgREiJvPZ7MDRxAO.jpg",
      genre_ids: [80, 18],
      id: 549,
      origin_country: ["US"],
      original_language: "en",
      original_name: "Law & Order",
      overview:
        "In cases ripped from the headlines, police investigate serious and often deadly crimes, weighing the evidence and questioning the suspects until someone is taken into custody. The district attorney's office then builds a case to convict the perpetrator by proving the person guilty beyond a reasonable doubt. Working together, these expert teams navigate all sides of the complex criminal justice system to make New York a safer place.",
      popularity: 2870.67,
      poster_path: "/m9zTQr4TYS98UFSiA1k0mMfECPe.jpg",
      first_air_date: "1990-09-13",
      name: "Law & Order",
      vote_average: 7.4,
      vote_count: 523,
    },
    {
      adult: false,
      backdrop_path: "/lN9YTWjXXJ62hJLsdGAjp5z76JU.jpg",
      genre_ids: [10766, 18],
      id: 231418,
      origin_country: ["ES"],
      original_language: "es",
      original_name: "Salón de té La Moderna",
      overview: "",
      popularity: 2801.801,
      poster_path: "/eRB6yMg6FyvjlxEZYu0ZEUdy1Nd.jpg",
      first_air_date: "2023-09-27",
      name: "Salón de té La Moderna",
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: "/yWVqYVOUcS6vu22v4BPXKJW10m5.jpg",
      genre_ids: [10764, 10751],
      id: 206679,
      origin_country: ["CZ"],
      original_language: "cs",
      original_name: "Na lovu",
      overview:
        "Na Lovu is a Czech game-show, based on the license of the popular global format The Chase. A heart-racing quiz show where four competitors must pit their wits and face off against Lovec (the Chaser), a ruthless quiz genius determined to stop them from winning cash prizes.",
      popularity: 2791.723,
      poster_path: "/udJ1wVuOwFg1q6UBcQGwcpcdIYF.jpg",
      first_air_date: "2021-08-16",
      name: "Na lovu",
      vote_average: 8,
      vote_count: 2,
    },
  ],
  total_pages: 8399,
  total_results: 167961,
};