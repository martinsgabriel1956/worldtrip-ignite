interface ContentPage {
  data: {
    id: number;
    image_url: string;
    title: string;
  }[]
}

export const contentPage: ContentPage = {
  data: [
    {
      id: 1,
      image_url: "/img/cocktail.svg",
      title: "vida noturna",
    },
    {
      id: 2,
      image_url: "/img/surf.svg",
      title: "praia",
    },
    {
      id: 3,
      image_url: "/img/building.svg",
      title: "moderno",
    },
    {
      id: 4,
      image_url: "/img/museum.svg",
      title: "clássico",
    },
    {
      id: 5,
      image_url: "/img/earth.svg",
      title: "e mais...",
    },
  ]
}
