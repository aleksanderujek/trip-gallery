export type Trip = {
    id: number;
    photoUrl: string;
    title: string;
    subtitle: string;
    countries: string[];
    days: number;
    co2kilograms: number;
    rating: number;
    description: number;
    advantages: TripAdvantage[];
  };
  
  export type TripAdvantage = {
    title: string;
    description: string;
  };
  