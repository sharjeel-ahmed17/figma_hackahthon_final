import { ReviewCard } from './review-card'
import { Filter, ChevronDown, SlidersVertical } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ReviewSection() {
  const reviews = [
    {
      rating: 5,
      customerName: 'John Doe',
      description: 'Great product! Exactly what I was looking for.',
      date: 'Posted on August 14, 2023',
    },
    {
      rating: 4,
      customerName: 'Jane Smith',
      description: 'Good quality, but shipping took longer than expected.',
      date: 'Posted on August 14, 2023',
    },
    {
      rating: 4,
      customerName: 'Jane Smith',
      description: 'Good quality, but shipping took longer than expected.',
      date: 'Posted on August 14, 2023',
    },
    {
      rating: 4,
      customerName: 'Jane Smith',
      description: 'Good quality, but shipping took longer than expected.',
      date: 'Posted on August 14, 2023',
    },
    {
      rating: 4,
      customerName: 'Jane Smith',
      description: 'Good quality, but shipping took longer than expected.',
      date: 'Posted on August 14, 2023',
    },
    {
      rating: 4,
      customerName: 'Jane Smith',
      description: 'Good quality, but shipping took longer than expected.',
      date: 'Posted on August 14, 2023',
    },
    {
      rating: 4,
      customerName: 'Jane Smith',
      description: 'Good quality, but shipping took longer than expected.',
      date: 'Posted on August 14, 2023',
    },
    // Add more reviews as needed
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">All Reviews</h2>
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm">
            <SlidersVertical  className="w-4 h-4 mr-2" />
          
          </Button>
          <div className="relative">
            <select className="appearance-none border rounded px-4 py-2 pr-8">
              <option>Latest</option>
              <option>Highest Rated</option>
              <option>Lowest Rated</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
          <Button className='rounded-full capitalize'>write a text</Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </div>
  )
}

