import { CreditCard, Headphones, ShoppingCart, Wallet } from "lucide-react"

export default function FeatureHighlights() {
  return (
    <div className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Free Shipping */}
          <div className="flex items-center gap-4 border border-[#1a2340]/10 rounded-lg p-4 transition-all hover:border-[#1a2340]/20 hover:shadow-sm">
            <div className="flex-shrink-0">
              <ShoppingCart className="h-10 w-10 text-[#db462f]" />
            </div>
            <div>
              <h3 className="font-bold text-[#1a2340]">Free Shipping</h3>
              <p className="text-sm text-[#1a2340]/80">Orders over $100</p>
            </div>
          </div>

          {/* Smart Gift Card */}
          <div className="flex items-center gap-4 border border-[#1a2340]/10 rounded-lg p-4 transition-all hover:border-[#1a2340]/20 hover:shadow-sm">
            <div className="flex-shrink-0">
              <CreditCard className="h-10 w-10 text-[#db462f]" />
            </div>
            <div>
              <h3 className="font-bold text-[#1a2340]">Smart Gift Card</h3>
              <p className="text-sm text-[#1a2340]/80">Buy $100 to get card</p>
            </div>
          </div>

          {/* Quick Payment */}
          <div className="flex items-center gap-4 border border-[#1a2340]/10 rounded-lg p-4 transition-all hover:border-[#1a2340]/20 hover:shadow-sm">
            <div className="flex-shrink-0">
              <Wallet className="h-10 w-10 text-[#db462f]" />
            </div>
            <div>
              <h3 className="font-bold text-[#1a2340]">Quick Payment</h3>
              <p className="text-sm text-[#1a2340]/80">100% secure payment</p>
            </div>
          </div>

          {/* 24/7 Support */}
          <div className="flex items-center gap-4 border border-[#1a2340]/10 rounded-lg p-4 transition-all hover:border-[#1a2340]/20 hover:shadow-sm">
            <div className="flex-shrink-0">
              <Headphones className="h-10 w-10 text-[#db462f]" />
            </div>
            <div>
              <h3 className="font-bold text-[#1a2340]">24/7 Support</h3>
              <p className="text-sm text-[#1a2340]/80">Quick Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
