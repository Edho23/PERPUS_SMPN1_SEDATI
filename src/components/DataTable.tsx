"use client";

import * as React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { supabase } from "@/lib/supabase/supabase";
import { BookList } from "./Column";
import { ChevronDown, ChevronUp, Funnel, Search } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu";

interface DataTableProps<TValue> {
  columns: ColumnDef<BookList, TValue>[];
}

export function DataTable<TValue>({ columns }: DataTableProps<TValue>) {
  const [data, setData] = React.useState<BookList[]>([]);
  const [searchQuery, setSearchQuery] = React.useState("");

  React.useEffect(() => {
    const fetchData = async () => {
      const { data: books, error } = await supabase
        .from("buku")
        .select(
          `*, 
          kategori(nama_kategori)`
        )
        .ilike("judul_buku", `%${searchQuery}%`);

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setData(books || []);
      }
    };

    const handler = setTimeout(() => {
      if (searchQuery.length > 2) {
        fetchData();
      } else {
        setData([]);
      }
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Daftar Buku</CardTitle>
        <CardDescription>
          Kelola dan pantau koleksi buku perpustakaan
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="relative flex items-center gap-4">
          <Search className="absolute left-3 text-muted-foreground" size={16}/>
          <Input
          placeholder="Cari berdasarkan judul, penulis, atau ISBN"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          className="pl-8 col-auto"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"outline"} className="gap-4">
            <Funnel/>Semua Kategori<ChevronDown className="ml-auto"/>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full" align="end">
            <DropdownMenuItem></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        </div>
        

        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  {searchQuery.length > 2
                    ? "Data tidak ditemukan."
                    : "Silakan ketik untuk memulai pencarian."}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}
