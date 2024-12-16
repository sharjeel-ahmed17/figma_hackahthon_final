"use client";
import { useState } from "react";
import { Star, Plus, Minus, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductInfoProps {
  title: string;
  rating: number;
  price: number;
  discountPrice?: number;
  discountLabel?: string;
}

export function ProductInfo({
  title,
  rating,
  price,
  discountPrice,
  discountLabel,
}: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="space-y-6 flex flex-col justify-evenly items-start">
      <h1 className="md:text-[40px] text-[30px] font-integBold">{title}</h1>
      <div className="flex items-center space-x-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
          />
        ))}
        <span className="text-sm text-gray-500">({rating} stars)</span>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-2xl font-bold">${discountPrice ?? price}</span>
        {discountPrice && (
          <>
            <span className="text-lg text-gray-500 line-through">${price}</span>
            {discountLabel && (
              <span className="px-2 py-1 text-sm text-white bg-red-500 rounded">
                {discountLabel}
              </span>
            )}
          </>
        )}
      </div>
<div  className="flex items-center space-x-4">

      <p className="md:pr-10  pr-0 font-satoshi text-[16px]" >
        This graphic t-shirt which is perfect for any occasion. Crafted from a
        soft and breathable fabric, it offers superior comfort and style.
      </p>
</div>

      {/* COLOR  */}
      <div>
        <h3 className="font-satoshi text-[16px] capitalize mb-2">select color </h3>
        <div className="flex items-center space-x-4">
          <div className="size-10 bg-red-700 rounded-full flex justify-center items-center">
            <Check />{" "}
          </div>
          <div className="size-10 bg-green-700 rounded-full flex justify-center items-center">
            <Check />{" "}
          </div>
          <div className="size-10 bg-blue-700 rounded-full flex justify-center items-center">
            <Check />{" "}
          </div>
        </div>
      </div>

      {/* SIZE */}
      <div>
        <h3 className="font-satoshi text-[16px] capitalize mb-2">Choose Size </h3>
        <div className="flex items-center md:space-x-4 space-x-1">
          <Button variant="pro">smaall</Button>
          <Button variant='pro'>medium</Button>
          <Button variant='pro'>Large</Button>
          <Button variant='pro'> x-large</Button>
    
        </div>
      </div>

      <div className="flex items-center space-x-4 w-full">
        <div className="flex items-center border rounded">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-2 py-1"
          >
            <Minus className="w-4 h-4" />
          </Button>
          <span className="px-4 py-2">{quantity}</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setQuantity(quantity + 1)}
            className="px-2 py-1"
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
        <div className="w-full">

        <Button className="px-6 py-2 w-full rounded-full">Add to Cart</Button>
        </div>

      </div>
    </div>
  );
}
