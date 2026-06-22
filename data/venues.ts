export interface Venue {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  address: string;
  image: string;
  map: string;
  button: string;
}

export const venues: Venue[] = [
  {
    id: 1,
    title: "Wedding Ceremony",
    subtitle: "Puspalata Garden",
    date: "26 June 2026",
    time: "6:30 PM onwards",
    address: "Puspalata Garden, Tinigaria, Cuttack, Odisha",
    image: "/images/venues/puspalata.jpg",
    map: "https://maps.app.goo.gl/FwxGyS69qg2UaEdX8",
    button: "Open Google Maps",
  },

  {
    id: 2,
    title: "Reception",
    subtitle: "ANADI NIVAS",
    date: "28 June 2026",
    time: "7:00 PM onwards",
    address: "Tikarpur, Kendrapara, Odisha",
    image: "/images/venues/home.jpg",
    map: "https://maps.app.goo.gl/65TUYgmCSFDF3SMb8",
    button: "Open Google Maps",
  },
];