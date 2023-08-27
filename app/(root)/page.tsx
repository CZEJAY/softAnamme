import AnnameCard from "@/components/shared/AnnameCard";
import LatestCard from "@/components/shared/LatestCard";
import PlusCard from "@/components/shared/PlusCard";

export default function Home() {
  return (
    <main>
      <AnnameCard />

      <LatestCard 
        image={"/public/aname-logo.jpg"}
        title={"Social"}
        description={"lorem"}
        date={"todays date"}
        slug={"slug"}
        category={"idk"}
        isLatest={true}
      />      
      <LatestCard 
        image={"/public/aname-logo.jpg"}
        title={"Apps"}
        description={"lorem"}
        date={"todays date"}
        slug={"slug"}
        category={"idk"}
        isLatest={false}
      />      
      <PlusCard 
        image={"/public/aname-logo.jpg"}
        title={"Featured Article"}
        description={"lorem"}
        date={"todays date"}
        slug={"slug"}
        category={"idk"}
        isLatest={false}
      />
      <LatestCard 
        image={"/public/aname-logo.jpg"}
        title={"Crypto"}
        description={"lorem"}
        date={"todays date"}
        slug={"slug"}
        category={"idk"}
        isLatest={false}
      />      
      <LatestCard 
        image={"/public/aname-logo.jpg"}
        title={"Tech"}
        description={"lorem"}
        date={"todays date"}
        slug={"slug"}
        category={"idk"}
        isLatest={false}
      />      
    </main>
  );
}
