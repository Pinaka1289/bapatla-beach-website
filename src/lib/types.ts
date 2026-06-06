export interface BeachData {
  meta: Meta;
  introduction: Introduction;
  places_to_stay: PlacesToStay;
  restaurants: RestaurantsData;
  travel_info: TravelInfo;
  nearby_attractions: NearbyAttractions;
  real_estate: RealEstate;
  promotions: Promotions;
  contact: ContactInfo;
  how_to_reach_summary: HowToReachSummary;
}

export interface Meta {
  title: string;
  description: string;
  last_updated: string;
  data_sources: string[];
  note: string;
  adsense_publisher_id?: string;
  adsense_slots?: {
    top?: string;
    mid?: string;
    lower?: string;
    bottom?: string;
  };
}

export interface Introduction {
  heading: string;
  short_description: string;
  why_famous: string[];
  best_time_to_visit: string;
  coordinates: Coordinates;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface PlacesToStay {
  description: string;
  total_count: number;
  categories: {
    [key: string]: Category;
  };
}

export interface Category {
  label: string;
  count: number;
  properties: Property[];
}

export interface Property {
  name: string;
  type: string;
  rating: number;
  reviews_count: number;
  price_range_night: string;
  amenities: string[];
  address: string;
  contact: string;
  website: string | null;
  booking_link: string | null;
  google_maps: string | null;
  image_url: string | null;
  distance_from_beach: string;
  category: string;
}

export interface RestaurantsData {
  description: string;
  total_count: number;
  restaurants: Restaurant[];
}

export interface Restaurant {
  name: string;
  type: string;
  location: string;
  specialty: string;
  price_range: string;
  rating: number;
  contact: string;
  timings: string;
  google_maps: string | null;
}

export interface TravelInfo {
  trains_from_hyderabad: TrainRoute;
  trains_from_vijayawada: TrainRoute;
  distances_to_suryalanka_beach: DistancesData;
}

export interface TrainRoute {
  description: string;
  station_codes?: { [key: string]: string };
  total_trains: number;
  trains: Train[];
  recommended_trains?: RecommendedTrain[];
  recommended?: string;
}

export interface Train {
  train_no: string;
  name: string;
  from_station?: string;
  departure: string;
  arrival: string;
  duration: string;
  type: string;
  frequency?: string;
}

export interface RecommendedTrain {
  reason: string;
  train: string;
}

export interface DistancesData {
  description: string;
  beach_coordinates: { lat: number; lon: number };
  routes: Route[];
}

export interface Route {
  from: string;
  distance_km_road: number;
  distance_km_straight: number;
  travel_time_car: string;
  route_description: string;
  best_mode: string;
}

export interface NearbyAttractions {
  description: string;
  attractions: Attraction[];
}

export interface Attraction {
  name: string;
  distance_from_beach: string;
  type: string;
  description: string;
  location: string;
}

export interface RealEstate {
  heading: string;
  description: string;
  note: string;
  cta: string;
  properties: RealEstateProperty[];
}

export interface RealEstateProperty {
  name: string;
  type: string;
  location: string;
  area: string;
  price: string;
  description: string;
}

export interface Promotions {
  heading: string;
  description: string;
  note: string;
  cta: string;
  offers: PromotionOffer[];
}

export interface PromotionOffer {
  name: string;
  type: string;
  description: string;
  valid_until: string;
}

export interface ContactInfo {
  heading: string;
  description: string;
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
}

export interface HowToReachSummary {
  by_train: string;
  by_road: string;
  by_air: string;
  by_bus: string;
}
