import React from 'react'
import { Card, CardAction, CardContent, CardDescription, CardHeader } from './ui/card'
import { BookOpen, BookOpenCheck, Calendar, FolderInput, Library, LibraryBig, TrendingUp, User, Warehouse } from 'lucide-react'

const CardListBook = () => {
  return (
    <div><div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <Card>
        <CardHeader className='space-y-5'>
          <CardDescription className="text-black font-semibold">Total Buku</CardDescription>
          <CardAction>
            <LibraryBig size={16} className="text-muted-foreground" />
          </CardAction>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-black">0</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className='space-y-5'>
          <CardDescription className="text-black font-semibold">Total Stok</CardDescription>
          <CardAction>
            <Warehouse size={16} className="text-muted-foreground" />
          </CardAction>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-black">0</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="space-y-5">
          <CardDescription className="text-black font-semibold">Tersedia</CardDescription>
          <CardAction>
            <BookOpenCheck size={16} className="text-muted-foreground" />
          </CardAction>
        </CardHeader>
        <CardContent >
          <p className="text-4xl font-black">0</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className='space-y-5'>
          <CardDescription className="text-black font-semibold">Dipinjam</CardDescription>
          <CardAction>
            <FolderInput size={16} className="text-muted-foreground" />
          </CardAction>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-black">0</p>
        </CardContent>
      </Card>

    </div></div>
  )
}

export default CardListBook