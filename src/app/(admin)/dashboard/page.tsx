import CardList from "@/components/CardListDashboard";
import PopularBook from "@/components/PopularBook";
import RecentActifity from "@/components/RecentActivity";

const page = () => {
  return (
    <div className="space-y-4">
      <CardList title="" />
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
        <RecentActifity />
        <PopularBook />
      </div>
    </div>
  );
};

export default page;
