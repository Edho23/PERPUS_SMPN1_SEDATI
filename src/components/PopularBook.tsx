import { Circle } from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge, badgeVariants } from "./ui/badge";

type BookRating = 'Populer' | 'Trending'

interface Book {
  id: number;
  title: string;
  description: string;
  rating: BookRating;
}

const books: Book[] = [
  {
    id: 1,
    title: "Matematika Kelas B",
    description: "Dipinjam 45 kali",
    rating: "Populer",
  },
  {
    id: 2,
    title: "Bahasa Indonesia",
    description: "Dipinjam 38 kali",
    rating: "Populer",
  },
  {
    id: 3,
    title: "IPA Terpadu",
    description: "Dipinjam 32 kali",
    rating: "Trending",
  },
  {
    id: 4,
    title: "IPA Terpadu",
    description: "Dipinjam 32 kali",
    rating: "Populer",
  },
  {
    id: 5,
    title: "IPA Terpadu",
    description: "Dipinjam 32 kali",
    rating: "Trending",
  },
];

const badgeVariantMap: Record<BookRating, "secondary" | "outline"> = {
  Populer: "secondary",
  Trending: "outline"
}

const PopularBook = () => {
  return (
    <Card className="lg:col-span-2">
      <CardHeader>
        <CardTitle>Buku Populer</CardTitle>
        <CardDescription>
          Buku yang paling sering di pinjam bulan ini
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside space-y-4">
          {books.map((book) => (
            <li
              key={book.id}
              className="flex items-center justify-between gap-4 text-sm"
            >
              <div className="space-y-1">
                <p className="font-semibold">{book.title}</p>
                <p className="text-muted-foreground text-xs">
                  {book.description}
                </p>
              </div>
              <CardAction>
                <Badge variant={badgeVariantMap[book.rating]}>{book.rating}</Badge>
              </CardAction>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default PopularBook;
