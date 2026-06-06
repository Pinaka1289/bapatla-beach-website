import beachData from '@/data/beach-data.json';
import { BeachData } from '@/lib/types';
import Hero from '@/components/Hero';
import Introduction from '@/components/Introduction';
import PlacesToStay from '@/components/PlacesToStay';
import Restaurants from '@/components/Restaurants';
import TravelInfo from '@/components/TravelInfo';
import Attractions from '@/components/Attractions';
import RealEstate from '@/components/RealEstate';
import Promotions from '@/components/Promotions';
import HowToReach from '@/components/HowToReach';
import Contact from '@/components/Contact';
import AdSlot from '@/components/AdSlot';

const data = beachData as BeachData;

// AdSense publisher ID — set via JSON meta or env var
const adPublisherId = data.meta.adsense_publisher_id || process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID || '';

// Ad unit slot IDs (set these when you have your AdSense account)
const AD_SLOTS = {
  top: data.meta.adsense_slots?.top || '',
  mid: data.meta.adsense_slots?.mid || '',
  lower: data.meta.adsense_slots?.lower || '',
  bottom: data.meta.adsense_slots?.bottom || '',
};

export default function Home() {
  return (
    <>
      <Hero />
      <AdSlot publisherId={adPublisherId} dataAdSlot={AD_SLOTS.top} format="horizontal" />
      <Introduction data={data.introduction} />
      <PlacesToStay data={data.places_to_stay} />
      <Restaurants data={data.restaurants} />
      <AdSlot publisherId={adPublisherId} dataAdSlot={AD_SLOTS.mid} format="horizontal" />
      <TravelInfo data={data.travel_info} />
      <Attractions data={data.nearby_attractions} />
      <RealEstate data={data.real_estate} />
      <AdSlot publisherId={adPublisherId} dataAdSlot={AD_SLOTS.lower} format="horizontal" />
      <Promotions data={data.promotions} />
      <HowToReach data={data.how_to_reach_summary} />
      <AdSlot publisherId={adPublisherId} dataAdSlot={AD_SLOTS.bottom} format="horizontal" />
      <Contact data={data.contact} />
    </>
  );
}
