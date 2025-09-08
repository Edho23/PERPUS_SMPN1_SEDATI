"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase/supabaseClient";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "./ui/card";
import { BookOpen, Calendar, TrendingUp, User } from "lucide-react";
import { Badge } from "./ui/badge";
import RecentActifity from "./RecentActivity";
import PopularBook from "./PopularBook";

const CardList = ({ title }: { title: string }) => {
  const [bookCount, setBookCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookCount = async () => {
      try {
        const { count, error } = await supabase
          .from("buku")
          .select("*", { count: "exact", head: true });
        if (error) {
          throw error;
        }

        setBookCount(count || 0);
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error fetching book count:", error.message);
          setError(error.message);
        } else {
          setError("unknown error");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchBookCount();
  }, []);

  if (isLoading) {
    return (
      <div className="">
        <h1 className="text-lg font-medium mb-6">{title}</h1>
        <p>Memuat...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="">
        <h1 className="text-lg font-medium mb-6">{title}</h1>
        <p>Gagal memuat data: {error}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <Card>
        <CardHeader>
          <CardDescription className="text-black font-semibold">Total Buku</CardDescription>
          <CardAction>
            <BookOpen size={16} className="text-muted-foreground" />
          </CardAction>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-4xl font-black">{bookCount}</p>
          <CardDescription>
            <p className="text-xs">+12% dari bulan lalu</p>
          </CardDescription>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardDescription className="text-black font-semibold">Siswa Aktif</CardDescription>
          <CardAction>
            <User size={16} className="text-muted-foreground" />
          </CardAction>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-4xl font-black">1,234</p>
          <CardDescription>
            <p className="text-xs">+5% dari bulan lalu</p>
          </CardDescription>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardDescription className="text-black font-semibold">Buku Dipinjam</CardDescription>
          <CardAction>
            <Calendar size={16} className="text-muted-foreground" />
          </CardAction>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-4xl font-black">486</p>
          <CardDescription>
            <p className="text-xs">+8% dari bulan lalu</p>
          </CardDescription>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardDescription className="text-black font-semibold">Pengunjung Hari Ini</CardDescription>
          <CardAction>
            <TrendingUp size={16} className="text-muted-foreground" />
          </CardAction>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-4xl font-black">16</p>
          <CardDescription>
            <p className="text-xs">15% dari kemarin</p>
          </CardDescription>
        </CardContent>
      </Card>

    </div>
  );
};

export default CardList;
