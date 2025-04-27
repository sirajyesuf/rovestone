import Image from "next/image";



export default function GalleryPage() {
  // Sample furniture gallery data with varying heights
  const galleryItems = [
    {
      id: 1,
      image: "products/closet1.jpg",
      title: "Mid-Century Modern Sofa",
      likes: 243,
      user: {
        name: "Emma Wilson",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      height: 450,
    },
    {
      id: 2,
      image: "products/closet2.jpg",
      title: "Minimalist Coffee Table",
      likes: 187,
      user: {
        name: "James Roberts",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      height: 300,
    },
    {
      id: 3,
      image: "products/closet3.jpg",
      title: "Scandinavian Dining Set",
      likes: 312,
      user: {
        name: "Olivia Chen",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      height: 400,
    },
    {
      id: 4,
      image: "products/closet4.png",
      title: "Rustic Bookshelf",
      likes: 156,
      user: {
        name: "Michael Brown",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      height: 250,
    },
    {
      id: 5,
      image: "products/closet5.png",
      title: "Velvet Accent Chair",
      likes: 278,
      user: {
        name: "Sophia Garcia",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      height: 350,
    },
    {
      id: 6,
      image: "products/closet6.png",
      title: "Marble Top Nightstand",
      likes: 201,
      user: {
        name: "Daniel Kim",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      height: 450,
    },
    {
      id: 7,
      image: "products/closet7.png",
      title: "Industrial Bar Stools",
      likes: 167,
      user: {
        name: "Ava Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      height: 300,
    },
    {
      id: 8,
      image: "products/closet1.jpg",
      title: "Rattan Lounge Chair",
      likes: 224,
      user: {
        name: "Noah Williams",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      height: 250,
    },
    {
      id: 9,
      image: "products/closet1.jpg",
      title: "Walnut Dining Table",
      likes: 298,
      user: {
        name: "Isabella Martinez",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      height: 400,
    },
    {
      id: 10,
      image: "products/closet1.jpg",
      title: "Leather Ottoman",
      likes: 176,
      user: {
        name: "Ethan Thompson",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      height: 350,
    },
    {
      id: 11,
      image: "products/closet1.jpg",
      title: "Brass Floor Lamp",
      likes: 209,
      user: {
        name: "Mia Anderson",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      height: 320,
    },
    {
      id: 12,
      image: "products/closet1.jpg",
      title: "Teak Wood Sideboard",
      likes: 254,
      user: {
        name: "Lucas Taylor",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      height: 380,
    },
    {
      id: 13,
      image: "products/closet1.jpg",
      title: "Woven Accent Stool",
      likes: 143,
      user: {
        name: "Charlotte Lee",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      height: 450,
    },
    {
      id: 14,
      image: "products/closet1.jpg",
      title: "Curved Sectional Sofa",
      likes: 331,
      user: {
        name: "Benjamin White",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      height: 420,
    },
    {
      id: 15,
      image: "products/closet1.jpg",
      title: "Geometric Area Rug",
      likes: 187,
      user: {
        name: "Amelia Clark",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      height: 360,
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafaf9] pt-24 border-none">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#D32F2F] mb-4 tracking-tight">
            Our Collection
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Welcome to our collection of unique and stylish products. Explore
            our curated selection of items that cater to your needs.
          </p>
        </div>
        {/* Header with filters, search, and profile */}
        {/* <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            <Button
              variant="default"
              className="bg-amber-700 hover:bg-amber-800 text-white"
            >
              For You
            </Button>
            <Button
              variant="outline"
              className="text-amber-800 border-amber-200 hover:bg-amber-100"
            >
              Featured
            </Button>
            <Button
              variant="outline"
              className="text-amber-800 border-amber-200 hover:bg-amber-100"
            >
              New
            </Button>
            <Button
              variant="outline"
              className="text-amber-800 border-amber-200 hover:bg-amber-100"
            >
              Following
            </Button>
          </div>

          <div className="flex items-center space-x-4 w-full md:w-auto">
            <div className="relative flex-grow md:flex-grow-0">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-800 h-4 w-4" />
              <input
                type="text"
                placeholder="Search furniture..."
                className="pl-10 pr-4 py-2 rounded-full border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-700 bg-white w-full md:w-auto"
              />
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="flex items-center space-x-2 text-amber-800 border-amber-200 hover:bg-amber-100"
                >
                  <span>Newest</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-white border border-amber-100"
              >
                <DropdownMenuItem className="hover:bg-amber-50 cursor-pointer">
                  Newest
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-amber-50 cursor-pointer">
                  Most Popular
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-amber-50 cursor-pointer">
                  Price: High to Low
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-amber-50 cursor-pointer">
                  Price: Low to High
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="relative">
              <Bell className="h-6 w-6 text-amber-800 cursor-pointer hover:text-amber-600 transition-colors" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </div>

            <Avatar className="cursor-pointer border-2 border-amber-200">
              <AvatarImage
                src="/placeholder.svg?height=40&width=40"
                alt="Profile"
              />
              <AvatarFallback className="bg-amber-700 text-white">
                JD
              </AvatarFallback>
            </Avatar>
          </div>
        </div> */}

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2  space-y-2">
          {galleryItems.map((item) => (
            <div key={item.id} className="break-inside-avoid mb-4 group">
              <div className="relative overflow-hidden rounded-xl shadow-none hover:shadow-lg transition-all duration-300 bg-white">
                <div
                  className="relative"
                  style={{ height: `${item.height}px` }}
                >
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Gradient overlay on hover */}
                  {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}

                  {/* Like button */}
                  {/* <button className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white">
                    <Heart className="h-5 w-5 text-rose-500" />
                  </button> */}
                </div>

                {/* Card content */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
