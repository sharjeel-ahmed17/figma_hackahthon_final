import { Star } from "lucide-react";

export default function Card({ product }: { product:any }) {
    return (
      <div className="p-4 md:w-1/4 w-1/2">
        <div className="h-full border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="md:h-[298px] h-[200px] w-full object-fill rounded-2xl"
            src={product.image}
            alt={product.title}
          />
          <div className="my-4">
            <h3 className="title-font text-[20px] font-satoshBold text-gray-900 mb-3">
              {product.title}
            </h3>
            {/* Star Rating */}
            <div className="flex gap-2 my-3">
              {Array.from({ length: 5 }, (_, index) => (
                <Star
                  key={index}
                  stroke="none"
                  fill={index < Math.round(product.rating) ? "yellow" : "gray"}
                  size="19px"
                />
              ))}
              <div className="text-[14px] font-satoshi">
                <span>{product.rating}/</span>
                <span className="text-black opacity-60">5</span>
              </div>
            </div>
            {/* Price */}
            <div className="flex gap-3 items-center">
              <p className="font-satoshBold text-[24px]">${product.price}</p>
              {product.discountPrice && (
                <>
                  <del className="text-[24px] text-carddelcolor font-satoshBold">
                    ${product.discountPrice}
                  </del>
                  <span className="p-[4px_12px] rounded-full bg-carddisbg text-carddisfg">
                    -{product.discountPercent}%
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }