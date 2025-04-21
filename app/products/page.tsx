"use client";

import Image from "next/image";

import NavBar from "@/components/nav-bar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Filter } from "lucide-react";
import Footer from "@/components/footer";
import VisitShowRoom from "@/components/visit-showroom";

const categories = [
  {
    id: 1,
    label: "All Products",
    name: "all_products",
  },
  {
    id: 2,
    label: "Internal Doors",
    name: "internal_doors",
  },
  {
    id: 3,
    label: "Main Doors",
    name: "main_door",
  },
  {
    id: 4,
    label: "Modern Kitchen",
    name: "modern_kitchen",
  },
  {
    id: 5,
    label: "Traditional Kitchen",
    name: "traditional_kitchen",
  },
  {
    id: 6,
    label: "Closet",
    name: "closet",
  },
  {
    id: 7,
    label: "Floor Finishing",
    name: "floor_finishing",
  },
  {
    id: 8,
    label: "Ceiling Work",
    name: "ceiling_work",
  },
  {
    id: 9,
    label: "Wall Cladding",
    name: "wall_cladding",
  },
  {
    id: 10,
    label: "Vanity",
    name: "vanity",
  },
  {
    id: 11,
    label: "TV Cladding",
    name: "tv_cladding",
  },
  {
    id: 12,
    label: "Interior Work",
    name: "interior_work",
  },
  {
    id: 13,
    label: "Partition",
    name: "partition",
  },
];

const products = [
  {
    id: 1,
    category: "internal_doors",
    image: "/products/internaldoors1.png",
    name: "Internal Door 1",
  },
  {
    id: 2,
    category: "internal_doors",
    image: "/products/internaldoors2.png",
    name: "Internal Door 2",
  },
  {
    id: 3,
    category: "internal_doors",
    image: "/products/internaldoors3.png",
    name: "Internal Door 3",
  },
  {
    id: 4,
    category: "internal_doors",
    image: "/products/internaldoors4.png",
    name: "Internal Door 4",
  },
  {
    id: 5,
    category: "main_door",
    image: "/products/maindoor1.png",
    name: "Main Door 1",
  },
  {
    id: 6,
    category: "main_door",
    image: "/products/maindoor2.png",
    name: "Main Door 2",
  },
  {
    id: 7,
    category: "main_door",
    image: "/products/maindoor3.png",
    name: "Main Door 3",
  },
  {
    id: 8,
    category: "main_door",
    image: "/products/maindoor4.png",
    name: "Main Door 4",
  },
  {
    id: 9,
    category: "main_door",
    image: "/products/maindoor5.png",
    name: "Main Door 5",
  },
  {
    id: 10,
    category: "main_door",
    image: "/products/maindoor6.png",
    name: "Main Door 6",
  },
  {
    id: 11,
    category: "modern_kitchen",
    image: "/products/modernkitchen1.png",
    name: "Modern Kitchen 1",
  },
  {
    id: 12,
    category: "modern_kitchen",
    image: "/products/modernkitchen2.png",
    name: "Modern Kitchen 2",
  },
  {
    id: 13,
    category: "modern_kitchen",
    image: "/products/modernkitchen3.png",
    name: "Modern Kitchen 3",
  },
  {
    id: 14,
    category: "modern_kitchen",
    image: "/products/modernkitchen4.png",
    name: "Modern Kitchen 4",
  },
  {
    id: 15,
    category: "modern_kitchen",
    image: "/products/modernkitchen5.png",
    name: "Modern Kitchen 5",
  },
  {
    id: 16,
    category: "traditional_kitchen",
    image: "/products/traditionalkitchen1.png",
    name: "Traditional Kitchen 1",
  },
  {
    id: 17,
    category: "traditional_kitchen",
    image: "/products/traditionalkitchen2.png",
    name: "Traditional Kitchen 2",
  },
  {
    id: 18,
    category: "closet",
    image: "/products/closet1.jpg",
    name: "Closet 1",
  },
  {
    id: 19,
    category: "closet",
    image: "/products/closet2.jpg",
    name: "Closet 2",
  },
  {
    id: 20,
    category: "closet",
    image: "/products/closet3.jpg",
    name: "Closet 3",
  },
  {
    id: 21,
    category: "closet",
    image: "/products/closet4.png",
    name: "Closet 4",
  },
  {
    id: 22,
    category: "closet",
    image: "/products/closet5.png",
    name: "Closet 5",
  },
  {
    id: 23,
    category: "closet",
    image: "/products/closet6.png",
    name: "Closet 6",
  },
  {
    id: 24,
    category: "closet",
    image: "/products/closet7.png",
    name: "Closet 7",
  },
  {
    id: 29,
    category: "floor_finishing",
    image: "/products/floorfinishing1.jpg",
    name: "Floor Finishing 1",
  },
  {
    id: 30,
    category: "floor_finishing",
    image: "/products/floorfinishing2.png",
    name: "Floor Finishing 2",
  },
  {
    id: 31,
    category: "floor_finishing",
    image: "/products/floorfinishing3.png",
    name: "Floor Finishing 3",
  },
  {
    id: 32,
    category: "ceiling_work",
    image: "/products/ceilingwork1.png",
    name: "Ceiling Work 1",
  },
  {
    id: 33,
    category: "ceiling_work",
    image: "/products/ceilingwork2.png",
    name: "Ceiling Work 2",
  },
  {
    id: 34,
    category: "wall_cladding",
    image: "/products/wallcladding1.png",
    name: "Wall Cladding 1",
  },
  {
    id: 35,
    category: "wall_cladding",
    image: "/products/wallcladding2.png",
    name: "Wall Cladding 2",
  },
  {
    id: 36,
    category: "wall_cladding",
    image: "/products/wallcladding3.png",
    name: "Wall Cladding 3",
  },
  {
    id: 37,
    category: "vanity",
    image: "/products/vanity.png",
    name: "Vanity 1",
  },
  {
    id: 38,
    category: "vanity",
    image: "/products/vanity2.png",
    name: "Vanity 2",
  },
  {
    id: 39,
    category: "vanity",
    image: "/products/vanity3.png",
    name: "Vanity 3",
  },
  {
    id: 40,
    category: "tv_cladding",
    image: "/products/tvcladding1.png",
    name: "TV Cladding 1",
  },
  {
    id: 41,
    category: "tv_cladding",
    image: "/products/tvcladding2.png",
    name: "TV Cladding 2",
  },
  {
    id: 42,
    category: "tv_cladding",
    image: "/products/tvcladding3.png",
    name: "TV Cladding 3",
  },
  {
    id: 43,
    category: "interior_work",
    image: "/products/interiorwork1.png",
    name: "Interior Work 1",
  },
  {
    id: 44,
    category: "interior_work",
    image: "/products/interiorwork2.png",
    name: "Interior Work 2",
  },
  {
    id: 45,
    category: "interior_work",
    image: "/products/interiorwork3.png",
    name: "Interior Work 3",
  },
  {
    id: 46,
    category: "partition",
    image: "/products/partitionwork1.png",
    name: "Partition Work 1",
  },
  {
    id: 47,
    category: "partition",
    image: "/products/partitionwork2.png",
    name: "Partition Work 2",
  },
  {
    id: 48,
    category: "partition",
    image: "/products/partitionwork3.png",
    name: "Partition Work 3",
  },
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all_products");

  const filteredProducts = products.filter((product) =>
    selectedCategory === "all_products"
      ? true
      : product.category === selectedCategory
  );

  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  return (
    <>
      <NavBar />
      {/* hero section */}
      <div className="bg-gradient-to-r from-[#1A1F2C] to-[#D32F2F] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Our Product Collection
          </h1>
          <p className="max-w-2xl mx-auto text-gray-200">
            Browse our carefully crafted selection of bespoke furniture pieces
            designed with cherished craftsmanship andWe&apos;re passionate about the details.
          </p>
        </div>
      </div>

      {/* About Our Products */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 text-[#1A1F2C]">
              Bespoke Furniture & Joinery
            </h2>
            <p className="text-lg mb-8 text-gray-700">
              At Rovestone Brothers, we create bespoke furniture for every room
              of the home or office. We&apos;re committed to our beautiful kitchens,
              dressing rooms, and specialist joinery. Each piece is carefully
              designed and crafted to meet our clients&apos; specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <div className="container mx-auto py-8 px-4">
        {/* Category buttons for larger screens */}
        <div className="hidden md:flex flex-wrap gap-4 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.name)}
              className={`${
                selectedCategory === category.name
                  ? "bg-[#7E69AB] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-[#7E69AB] hover:text-white"
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Dialog for small screens */}
        <div className="md:hidden mb-8">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full flex items-center justify-between bg-[#7E69AB] text-white">
                <span>
                  {categories.find((c) => c.name === selectedCategory)?.label ||
                    "All Products"}
                </span>
                {/* <Menu className="h-4 w-4" /> */}
                <Filter className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Select Category</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    onClick={() => {
                      handleCategorySelect(category.name);
                      // Close dialog after selection
                      const closeButton = document.querySelector(
                        "[data-dialog-close]"
                      );
                      if (closeButton instanceof HTMLElement) {
                        closeButton.click();
                      }
                    }}
                    className={`w-full justify-start ${
                      selectedCategory === category.name
                        ? "bg-[#7E69AB] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-[#7E69AB] hover:text-white"
                    }`}
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden transition-all hover:shadow-md"
            >
              <div className="aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                  width={500}
                  height={500}
                />
              </div>
              <CardContent className="pt-6">
                <div className="flex justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.category}</p>
                  </div>
                </div>
              </CardContent>
              {/* <CardFooter>
                <Button className="w-full bg-[#7E69AB] hover:bg-[#6E59A5]">
                  Add to Cart
                </Button>
              </CardFooter> */}
            </Card>
          ))}
        </div>
      </div>

      <VisitShowRoom />
      <Footer />
    </>
  );
};

export default Products;
