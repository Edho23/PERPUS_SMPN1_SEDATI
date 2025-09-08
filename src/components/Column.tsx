"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "./ui/button"
import { ArrowUpDown, Ghost } from "lucide-react"

export type BookList = {
  id: string
  title: number
  penulis: string
  isbn: number
  kategori: {
    nama_kategori: string
  } | null
  penerbit: string
  tahun: number
  stok: number
  status: "Tersedia" | "Tidak Tersedia"
}

export const columns: ColumnDef<BookList>[] = [
  {
    accessorKey: "judul_buku",
    header: ({ column }) => {
      return (
        <Button 
          variant={"ghost"}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Judul
          <ArrowUpDown/>
        </Button>
      )
    },
  },
  {
    accessorKey: "penulis",
    header: "Penulis",
  },
  {
    accessorKey: "isbn",
    header: "ISBN",
  },
  {
    id:"kategori",
    header: "Kategori",
    accessorFn: row => row.kategori?.nama_kategori || 'tidak ada kategori'
  },
  {
    accessorKey: "penerbit",
    header: "Penerbit",
  },
  {
    accessorKey: "tahun_terbit",
    header: "Tahun",
  },
  {
    accessorKey: "jumlah_buku",
    header: "Stok",
  },
  {
    accessorKey: "tersedia",
    header: "Tersedia",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "aksi",
    header: "Aksi",
  },
]