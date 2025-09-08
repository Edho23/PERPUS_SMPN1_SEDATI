import CardListBook from '@/components/CardListBook'
import { DataTable } from '@/components/DataTable'
import { columns, BookList } from '@/components/Column'

const Page =  () => {

  return (
    <div className='space-y-4'>
      <CardListBook />
      <DataTable columns={columns}/>
    </div>
  )
}

export default Page