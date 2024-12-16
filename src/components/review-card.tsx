import { Star, Check, Ellipsis } from 'lucide-react'

interface ReviewCardProps {
  rating: number
  customerName: string
  description: string
  date: string
}

export function ReviewCard({ rating, customerName, description, date }: ReviewCardProps) {
  return (
    <div className="border rounded-lg p-4 space-y-2 relative">
      <Ellipsis className='absolute right-3 top-3'/>
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
          />
        ))}
      </div>
      <div className="flex items-center space-x-2">
        <span className="font-satoshBold text-[20px]">{customerName}</span>
        <Check className="w-4 h-4 text-green-500" />
      </div>
      <p className="text-[16px] font-satoshi text-gray-600">{description}</p>
      <p className="text-[16px] font-satoshmed text-gray-400">{date}</p>
    </div>
  )
}

