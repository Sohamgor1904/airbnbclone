import ListingPage from './listing/[id]/page';

export default function Home() {
  return <ListingPage params={{ id: 'listing-1' }} />;
}
