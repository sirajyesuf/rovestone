"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import LocaleSwitcher from "./LocaleSwitcher";
import Image from "next/image";
export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className=" flex flex-col bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 w-[50px] h-[50px]">
            <Image
              src={"/rovestone.png"}
              alt="Rovestone Brothers Logo"
              width={100}
              height={50}
              className="w-full h-full"
            />
            <span className="text-2xl font-bold text-[#D32F2F]">Rovestone</span>
            <span className="text-xl font-medium text-[#1A1F2C]">Brothers</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="font-medium text-gray-700 hover:text-[#D32F2F] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="font-medium text-gray-700 hover:text-[#D32F2F] transition-colors"
            >
              Products
            </Link>
          </nav>

          {/* Contact Button (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <a
              href="mailto:info@rovestone.com"
              className="flex items-center gap-2 text-gray-700 hover:text-[#D32F2F] transition-colors"
            >
              <Phone size={18} />
              <span>Contact Us</span>
            </a> */}
            {/* <Link href="/products">
              <button className="bg-[#D32F2F] text-white px-4 py-2 rounded-md hover:bg-[#B71C1C] transition-colors">
                Contact Us
              </button>
            </Link> */}

            {/* <LanguageSwitcher /> */}
            <LocaleSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <button
              className="p-2 rounded-full hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
              <Link
                href="/"
                className="py-2 font-medium text-gray-700 hover:text-[#D32F2F] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/products"
                className="py-2 font-medium text-gray-700 hover:text-[#D32F2F] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
              {/* <LanguageSwitcher /> */}
              <LocaleSwitcher />
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      {/* <main className="flex-grow">{children}</main> */}

      {/* Footer */}
      {/* <footer className="bg-[#1A1F2C] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Rovestone Brothers</h3>
              <p className="text-gray-300 max-w-xs italic">
                "It's all about the details"
              </p>
              <p className="text-gray-300 max-w-xs mt-2">
                Beautiful custom furniture with cherished craftsmanship since
                2024.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-2 text-[#f8d0d0]">
                  Quick Links
                </h4>
                <ul className="space-y-1">
                  <li>
                    <Link
                      href="/"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Products
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2 text-[#f8d0d0]">
                  Contact
                </h4>
                <ul className="space-y-1">
                  <li className="text-gray-300">Pecan Building</li>
                  <li className="text-gray-300">Bole sub city, Woreda 06</li>
                  <li className="text-gray-300">info@rovestone.com</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
            <p>
              © {new Date().getFullYear()} Rovestone Brothers Trade Pvt. Ltd.
              Co. All rights reserved.
            </p>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
