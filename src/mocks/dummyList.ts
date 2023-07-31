import { AuctionPage, AuctionList, AuctionDetail } from "../types/auction.type";

export const dummyDetail: AuctionDetail = {
  artPieceInfo: {
    id: 1,
    title: "Starry Night",
    content: "Starry Night",
    likes: 0,
    photoPaths: [""],
  },
  artistInfo: {
<<<<<<< HEAD
    memberId: 1,
    name: "Vincent van Gogh",
    email: "Vincent@google.com",
    profilePhotoPath: "",
=======
    id: 1,
    username: "Vincent",
    name: "Vincent van Gogh",
    email: "Vincent@google.com",
    photoPath: "",
>>>>>>> main
    like: 0,
  },
  auctionInfo: {
    id: "1",
    title: "Starry Night",
    content: "Starry Night",
    startPrice: 1000,
    currentPrice: 1100,
    like: 0,
    createdAt: "1995-12-17T03:24:00",
    finishedAt: "1995-12-17T15:24:00",
    photoPaths: [""],

    likeMembers: [],
  },
  bidderInfos: [
    {
      id: 1,
      name: "test1",
      email: "bidder1@google.com",
      photoPath: "",
      like: 0,
      bidPrice: 1100,
      bidDate: "2023-06-26T10:00:00",
    },
  ],
  aiInfo: {
    labels: [
      {
        name: "Cream",
        confidence: 96.030624,
      },
      {
        name: "Dessert",
        confidence: 96.030624,
      },
      {
        name: "Food",
        confidence: 96.030624,
      },
      {
        name: "Ice Cream",
        confidence: 96.030624,
      },
      {
        name: "Cup",
        confidence: 83.85441,
      },
      {
        name: "Disposable Cup",
        confidence: 83.85441,
      },
      {
        name: "Text",
        confidence: 61.572563,
      },
      {
        name: "Beverage",
        confidence: 57.233093,
      },
      {
        name: "Juice",
        confidence: 57.233093,
      },
      {
        name: "Plastic",
        confidence: 56.20349,
      },
    ],
    content: "",
  },
};

export const dummyAuctionList: AuctionPage = {
  hasNext: true,
  isLast: false,
  pageSize: 10,
  pageNumber: 0,
  dataSize: 10,
  data: [
    {
      artistInfo: {
<<<<<<< HEAD
        memberId: 1,
        name: "Vincent van Gogh",
        email: "Vincent@google.com",
        profilePhotoPath: "",
=======
        id: 1,
        name: "Vincent van Gogh",
        email: "Vincent@google.com",
        photoPath: "",
>>>>>>> main
        like: 0,
      },
      auctionInfo: {
        id: "1",
        title: "Starry Night",
        content: "Starry Night",
        startPrice: 1000,
        currentPrice: 1100,
        like: 0,
        createdAt: "2023-06-26T09:00:00",
        finishedAt: "2023-06-26T21:00:00",
        photoPaths: [""],

        likeMembers: [],
      },
    },
    {
      artistInfo: {
<<<<<<< HEAD
        memberId: 2,
        name: "Leonardo da Vinci",
        email: "Leonardo@google.com",
        profilePhotoPath: "",
=======
        id: 2,
        name: "Leonardo da Vinci",
        email: "Leonardo@google.com",
        photoPath: "",
>>>>>>> main
        like: 0,
      },
      auctionInfo: {
        id: "2",
        title: "Mona Lisa",
        content: "Mona Lisa",
        startPrice: 1500,
        currentPrice: 1500,
        like: 0,
        createdAt: "2000-01-01T09:00:00",
        finishedAt: "2000-01-01T21:00:00",
        photoPaths: [""],
        likeMembers: [],
      },
    },
    {
      artistInfo: {
<<<<<<< HEAD
        memberId: 3,
        name: "Pablo Picasso",
        email: "Pablo@google.com",
        profilePhotoPath: "",
=======
        id: 3,
        name: "Pablo Picasso",
        email: "Pablo@google.com",
        photoPath: "",
>>>>>>> main
        like: 0,
      },
      auctionInfo: {
        id: "3",
        title: "Guernica",
        content: "Guernica",
        startPrice: 2000,
        currentPrice: 2000,
        like: 0,
        createdAt: "2010-05-20T12:00:00",
        finishedAt: "2010-05-20T00:00:00",
        photoPaths: [""],

        likeMembers: [],
      },
    },
    {
      artistInfo: {
<<<<<<< HEAD
        memberId: 4,
        name: "Michelangelo",
        email: "Michelangelo@google.com",
        profilePhotoPath: "",
=======
        id: 4,
        name: "Michelangelo",
        email: "Michelangelo@google.com",
        photoPath: "",
>>>>>>> main
        like: 0,
      },
      auctionInfo: {
        id: "4",
        title: "David",
        content: "David",
        startPrice: 1800,
        currentPrice: 1800,
        like: 0,
        createdAt: "2015-07-10T18:30:00",
        finishedAt: "2015-07-11T06:30:00",
        photoPaths: [""],
        likeMembers: [],
      },
    },
    {
      artistInfo: {
<<<<<<< HEAD
        memberId: 5,
        name: "Claude Monet",
        email: "Monet@google.com",
        profilePhotoPath: "",
=======
        id: 5,
        name: "Claude Monet",
        email: "Monet@google.com",
        photoPath: "",
>>>>>>> main
        like: 0,
      },
      auctionInfo: {
        id: "5",
        title: "Water Lilies",
        content: "Water Lilies",
        startPrice: 1200,
        currentPrice: 1200,
        like: 0,
        createdAt: "2022-03-05T14:45:00",
        finishedAt: "2022-03-05T02:45:00",
        photoPaths: [""],

        likeMembers: [],
      },
    },
    {
      artistInfo: {
<<<<<<< HEAD
        memberId: 6,
        name: "Frida Kahlo",
        email: "Frida@google.com",
        profilePhotoPath: "",
=======
        id: 6,
        name: "Frida Kahlo",
        email: "Frida@google.com",
        photoPath: "",
>>>>>>> main
        like: 0,
      },
      auctionInfo: {
        id: "6",
        title: "The Two Fridas",
        content: "The Two Fridas",
        startPrice: 2500,
        currentPrice: 2500,
        like: 0,
        createdAt: "2023-01-15T08:20:00",
        finishedAt: "2023-01-15T20:20:00",
        photoPaths: [""],

        likeMembers: [],
      },
    },
    {
      artistInfo: {
<<<<<<< HEAD
        memberId: 7,
        name: "Salvador Dali",
        email: "Dali@google.com",
        profilePhotoPath: "",
=======
        id: 7,
        name: "Salvador Dali",
        email: "Dali@google.com",
        photoPath: "",
>>>>>>> main
        like: 0,
      },
      auctionInfo: {
        id: "7",
        title: "The Persistence of Memory",
        content: "The Persistence of Memory",
        startPrice: 2200,
        currentPrice: 2200,
        like: 0,
        createdAt: "2023-05-10T11:10:00",
        finishedAt: "2023-05-10T23:10:00",
        photoPaths: [""],

        likeMembers: [],
      },
    },
    {
      artistInfo: {
<<<<<<< HEAD
        memberId: 8,
        name: "Georgia O'Keeffe",
        email: "Georgia@google.com",
        profilePhotoPath: "",
=======
        id: 8,
        name: "Georgia O'Keeffe",
        email: "Georgia@google.com",
        photoPath: "",
>>>>>>> main
        like: 0,
      },
      auctionInfo: {
        id: "8",
        title: "Jimson Weed/White Flower No. 1",
        content: "Jimson Weed/White Flower No. 1",
        startPrice: 1900,
        currentPrice: 1900,
        like: 0,
        createdAt: "2023-06-20T16:50:00",
        finishedAt: "2023-06-21T04:50:00",
        photoPaths: [""],

        likeMembers: [],
      },
    },
    {
      artistInfo: {
<<<<<<< HEAD
        memberId: 9,
        name: "Rembrandt van Rijn",
        email: "Rembrandt@google.com",
        profilePhotoPath: "",
=======
        id: 9,
        name: "Rembrandt van Rijn",
        email: "Rembrandt@google.com",
        photoPath: "",
>>>>>>> main
        like: 0,
      },
      auctionInfo: {
        id: "9",
        title: "The Night Watch",
        content: "The Night Watch",
        startPrice: 2800,
        currentPrice: 2800,
        like: 0,
        createdAt: "2023-06-25T07:15:00",
        finishedAt: "2023-06-25T19:15:00",
        photoPaths: [""],

        likeMembers: [],
      },
    },
    {
      artistInfo: {
<<<<<<< HEAD
        memberId: 10,
        name: "Andy Warhol",
        email: "Andy@google.com",
        profilePhotoPath: "",
=======
        id: 10,
        name: "Andy Warhol",
        email: "Andy@google.com",
        photoPath: "",
>>>>>>> main
        like: 0,
      },
      auctionInfo: {
        id: "10",
        title: "Campbell's Soup Cans",
        content: "Campbell's Soup Cans",
        startPrice: 1700,
        currentPrice: 1700,
        like: 0,
        createdAt: "2023-06-26T10:30:00",
        finishedAt: "2023-06-26T22:30:00",
        photoPaths: [""],

        likeMembers: [],
      },
    },
  ],
};

export const dummyAuctionList2: AuctionPage = {
  hasNext: false,
  isLast: true,
  pageSize: 10,
  pageNumber: 1,
  dataSize: 10,
  data: [
    {
      artistInfo: {
<<<<<<< HEAD
        memberId: 1,
        name: "Leonardo da Vinci",
        email: "Leonardo@google.com",
        profilePhotoPath: "",
=======
        id: 1,
        name: "Leonardo da Vinci",
        email: "Leonardo@google.com",
        photoPath: "",
>>>>>>> main
        like: 0,
      },
      auctionInfo: {
        id: "1",
        title: "The Last Supper",
        content: "The Last Supper",
        startPrice: 2500,
        currentPrice: 2500,
        like: 0,
        createdAt: "2023-06-26T09:00:00",
        finishedAt: "2023-06-26T21:00:00",
        photoPaths: [""],

        likeMembers: [],
      },
    },
    {
      artistInfo: {
<<<<<<< HEAD
        memberId: 2,
        name: "Pablo Picasso",
        email: "Pablo@google.com",
        profilePhotoPath: "",
=======
        id: 2,
        name: "Pablo Picasso",
        email: "Pablo@google.com",
        photoPath: "",
>>>>>>> main
        like: 0,
      },
      auctionInfo: {
        id: "2",
        title: "Les Demoiselles d'Avignon",
        content: "Les Demoiselles d'Avignon",
        startPrice: 1800,
        currentPrice: 1800,
        like: 0,
        createdAt: "2023-06-26T11:30:00",
        finishedAt: "2023-06-26T23:30:00",
        photoPaths: [""],

        likeMembers: [],
      },
    },
    {
      artistInfo: {
<<<<<<< HEAD
        memberId: 3,
        name: "Vincent van Gogh",
        email: "Vincent@google.com",
        profilePhotoPath: "",
=======
        id: 3,
        name: "Vincent van Gogh",
        email: "Vincent@google.com",
        photoPath: "",
>>>>>>> main
        like: 0,
      },
      auctionInfo: {
        id: "3",
        title: "Irises",
        content: "Irises",
        startPrice: 2000,
        currentPrice: 2000,
        like: 0,
        createdAt: "2023-06-26T13:45:00",
        finishedAt: "2023-06-27T01:45:00",
        photoPaths: [""],

        likeMembers: [],
      },
    },
    {
      artistInfo: {
<<<<<<< HEAD
        memberId: 4,
        name: "Claude Monet",
        email: "Monet@google.com",
        profilePhotoPath: "",
=======
        id: 4,
        name: "Claude Monet",
        email: "Monet@google.com",
        photoPath: "",
>>>>>>> main
        like: 0,
      },
      auctionInfo: {
        id: "4",
        title: "Impression, Sunrise",
        content: "Impression, Sunrise",
        startPrice: 2200,
        currentPrice: 2200,
        like: 0,
        createdAt: "2023-06-26T16:15:00",
        finishedAt: "2023-06-26T04:15:00",
        photoPaths: [""],

        likeMembers: [],
      },
    },
    {
      artistInfo: {
<<<<<<< HEAD
        memberId: 5,
        name: "Frida Kahlo",
        email: "Frida@google.com",
        profilePhotoPath: "",
=======
        id: 5,
        name: "Frida Kahlo",
        email: "Frida@google.com",
        photoPath: "",
>>>>>>> main
        like: 0,
      },
      auctionInfo: {
        id: "5",
        title: "Self-Portrait with Thorn Necklace and Hummingbird",
        content: "Self-Portrait with Thorn Necklace and Hummingbird",
        startPrice: 1900,
        currentPrice: 1900,
        like: 0,
        createdAt: "2023-06-26T19:45:00",
        finishedAt: "2023-06-27T07:45:00",
        photoPaths: [""],

        likeMembers: [],
      },
    },
    {
      artistInfo: {
<<<<<<< HEAD
        memberId: 6,
        name: "Salvador Dali",
        email: "Dali@google.com",
        profilePhotoPath: "",
=======
        id: 6,
        name: "Salvador Dali",
        email: "Dali@google.com",
        photoPath: "",
>>>>>>> main
        like: 0,
      },
      auctionInfo: {
        id: "6",
        title: "The Persistence of Memory",
        content: "The Persistence of Memory",
        startPrice: 2800,
        currentPrice: 2800,
        like: 0,
        createdAt: "2023-06-26T22:30:00",
        finishedAt: "2023-06-27T10:30:00",
        photoPaths: [""],

        likeMembers: [],
      },
    },
    {
      artistInfo: {
<<<<<<< HEAD
        memberId: 7,
        name: "Georgia O'Keeffe",
        email: "Georgia@google.com",
        profilePhotoPath: "",
=======
        id: 7,
        name: "Georgia O'Keeffe",
        email: "Georgia@google.com",
        photoPath: "",
>>>>>>> main
        like: 0,
      },
      auctionInfo: {
        id: "7",
        title: "Black Iris",
        content: "Black Iris",
        startPrice: 1700,
        currentPrice: 1700,
        like: 0,
        createdAt: "2023-06-26T03:15:00",
        finishedAt: "2023-06-26T15:15:00",
        photoPaths: [""],

        likeMembers: [],
      },
    },
    {
      artistInfo: {
<<<<<<< HEAD
        memberId: 8,
        name: "Michelangelo",
        email: "Michelangelo@google.com",
        profilePhotoPath: "",
=======
        id: 8,
        name: "Michelangelo",
        email: "Michelangelo@google.com",
        photoPath: "",
>>>>>>> main
        like: 0,
      },
      auctionInfo: {
        id: "8",
        title: "The Creation of Adam",
        content: "The Creation of Adam",
        startPrice: 2000,
        currentPrice: 2000,
        like: 0,
        createdAt: "2023-06-26T06:30:00",
        finishedAt: "2023-06-26T18:30:00",
        photoPaths: [""],

        likeMembers: [],
      },
    },
    {
      artistInfo: {
<<<<<<< HEAD
        memberId: 9,
        name: "Rembrandt van Rijn",
        email: "Rembrandt@google.com",
        profilePhotoPath: "",
=======
        id: 9,
        name: "Rembrandt van Rijn",
        email: "Rembrandt@google.com",
        photoPath: "",
>>>>>>> main
        like: 0,
      },
      auctionInfo: {
        id: "9",
        title: "The Night Watch",
        content: "The Night Watch",
        startPrice: 2500,
        currentPrice: 2500,
        like: 0,
        createdAt: "2023-06-26T09:45:00",
        finishedAt: "2023-06-26T21:45:00",
        photoPaths: [""],

        likeMembers: [],
      },
    },
    {
      artistInfo: {
<<<<<<< HEAD
        memberId: 10,
        name: "Andy Warhol",
        email: "Andy@google.com",
        profilePhotoPath: "",
=======
        id: 10,
        name: "Andy Warhol",
        email: "Andy@google.com",
        photoPath: "",
>>>>>>> main
        like: 0,
      },
      auctionInfo: {
        id: "10",
        title: "Marilyn Diptych",
        content: "Marilyn Diptych",
        startPrice: 1800,
        currentPrice: 1800,
        like: 0,
        createdAt: "2023-06-26T12:00:00",
        finishedAt: "2023-06-26T00:00:00",
        photoPaths: [""],

        likeMembers: [],
      },
    },
  ],
};
