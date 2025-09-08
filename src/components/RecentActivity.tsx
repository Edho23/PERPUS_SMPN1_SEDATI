import { Activity, Circle } from "lucide-react";
import { Card, CardHeader, CardDescription, CardTitle, CardContent } from "./ui/card"

type ActivityStatus = 'borrow' | 'return' | 'stock_out'

interface Activity {
  id: number,
  status: ActivityStatus,
  action: string,
  timestamp: string,
}

const activities: Activity[] = [
  {
    id: 1,
    status: 'borrow', 
    action: 'Andi Pratama meminjam "Matematika Kelas 8"',
    timestamp: '2 menit yang lalu',
  },
  {
    id: 2,
    status: 'return',
    action: 'Sari Dewi mengembalikan "Bahasa Indonesia"',
    timestamp: '5 menit yang lalu',
  },
  {
    id: 3,
    status: 'stock_out',
    action: 'Buku "awdawds" habis stok',
    timestamp: '10 menit yang lalu',
  },
  {
    id: 4,
    status: 'borrow',
    action: 'Sinyo meminjam buku "IPS Terpadu"',
    timestamp: '10 menit yang lalu',
  },
  {
    id: 5,
    status: 'return',
    action: 'Buku "IPA Terpadu" habis stok',
    timestamp: '10 menit yang lalu',
  },
];

const statusColorMap = {
  borrow: 'text-green-500',
  return: 'text-blue-500',
  stock_out: 'text-orange-500',
};

const RecentActifity = () => {
  return (
    <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Aktifitas Terbaru</CardTitle>
          <CardDescription>Peminjaman dan pengembalian buku terbaru</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-4">
            {activities.map((activity) => (
              <li 
                key={activity.id}
                className="flex items-center gap-4 text-sm"
              >
                <Circle size={8} className={`shrink-0 fill-current ${statusColorMap[activity.status]}`}/>
                <div className="space-y-1">
                  <p className="font-semibold">{activity.action}</p>
                  <p className="text-muted-foreground text-xs">{activity.timestamp}</p>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
  )
}

export default RecentActifity