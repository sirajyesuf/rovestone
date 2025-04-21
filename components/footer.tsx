import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    // <footer className="bg-white border-t border-[#5c6669]/10">
    //   {/* Main Footer */}
    //   <div className="container mx-auto px-4 py-12 md:py-16">
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    //       {/* Brand Column */}
    //       <div className="space-y-4">
    //         <div className="flex items-center">
    //           <Link href="/" className="flex items-center gap-2">
    //             <span className="text-2xl font-bold text-[#D32F2F]">Rovestone</span>
    //             <span className="text-xl font-medium text-[#1A1F2C]">Brothers</span>
    //           </Link>
    //         </div>
    //         <p className="text-[#5c6669] max-w-xs">
    //           Creating beautiful spaces with quality craftsmanship and timeless design since 1986.
    //         </p>
    // <div className="flex space-x-4">
    //   <Link href="#" className="text-[#5c6669] hover:text-[#db462f] transition-colors">
    //     <Facebook size={20} />
    //     <span className="sr-only">Facebook</span>
    //   </Link>
    //   <Link href="#" className="text-[#5c6669] hover:text-[#db462f] transition-colors">
    //     <Instagram size={20} />
    //     <span className="sr-only">Instagram</span>
    //   </Link>
    //   <Link href="#" className="text-[#5c6669] hover:text-[#db462f] transition-colors">
    //     <Twitter size={20} />
    //     <span className="sr-only">Twitter</span>
    //   </Link>
    //   <Link href="#" className="text-[#5c6669] hover:text-[#db462f] transition-colors">
    //     <Youtube size={20} />
    //     <span className="sr-only">YouTube</span>
    //   </Link>
    // </div>
    //       </div>

    //       {/* Quick Links */}
    //       <div className="space-y-4">
    //         <h3 className="text-lg font-semibold text-[#5c6669]">Products</h3>
    //         <ul className="space-y-2">
    //           <li>
    //             <Link href="#" className="text-[#5c6669] hover:text-[#db462f] transition-colors">
    //               Closet
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="#" className="text-[#5c6669] hover:text-[#db462f] transition-colors">
    //               Bed
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="#" className="text-[#5c6669] hover:text-[#db462f] transition-colors">
    //               Dining Room
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="#" className="text-[#5c6669] hover:text-[#db462f] transition-colors">
    //               Office
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="#" className="text-[#5c6669] hover:text-[#db462f] transition-colors">
    //               Outdoor
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="#" className="text-[#5c6669] hover:text-[#db462f] transition-colors">
    //               Accessories
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>

    //       {/* Company */}
    //       <div className="space-y-4">
    //         <h3 className="text-lg font-semibold text-[#5c6669]">Company</h3>
    //         <ul className="space-y-2">
    //           <li>
    //             <Link href="#" className="text-[#5c6669] hover:text-[#db462f] transition-colors">
    //               About Us
    //             </Link>
    //           </li>
    //           {/* <li>
    //             <Link href="#" className="text-[#5c6669] hover:text-[#db462f] transition-colors">
    //               Careers
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="#" className="text-[#5c6669] hover:text-[#db462f] transition-colors">
    //               Our Designers
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="#" className="text-[#5c6669] hover:text-[#db462f] transition-colors">
    //               Sustainability
    //             </Link>
    //           </li> */}
    //           <li>
    //             <Link href="#" className="text-[#5c6669] hover:text-[#db462f] transition-colors">
    //               Press
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="#" className="text-[#5c6669] hover:text-[#db462f] transition-colors">
    //               Blog
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>

    //       {/* Contact */}
    //       <div className="space-y-4">
    //         <h3 className="text-lg font-semibold text-[#5c6669]">Contact</h3>
    //         <ul className="space-y-3">
    //           <li className="flex items-start">
    //             <MapPin className="mr-2 h-5 w-5 text-[#db462f] flex-shrink-0 mt-0.5" />
    //             <span className="text-[#5c6669]">Addis Ababa, Ethiopia on the road to Megenagna-Gurdshola,Pecan Building, 1st Floor</span>
    //           </li>
    //           <li className="flex items-center">
    //             <Phone className="mr-2 h-5 w-5 text-[#db462f] flex-shrink-0" />
    //             <span className="text-[#5c6669]">+251116477272</span>
    //           </li>
    //           <li className="flex items-center">
    //             <Mail className="mr-2 h-5 w-5 text-[#db462f] flex-shrink-0" />
    //             <span className="text-[#5c6669]">info@rovestone.com</span>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Bottom Footer */}
    //   <div className="border-t border-[#5c6669]/10">
    //     <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
    //       <p className="text-[#5c6669] text-sm">&copy; {new Date().getFullYear()} Furnish. All rights reserved.</p>
    //       <div className="flex space-x-6 mt-4 md:mt-0">
    //         <Link href="#" className="text-sm text-[#5c6669] hover:text-[#db462f] transition-colors">
    //           Privacy Policy
    //         </Link>
    //         <Link href="#" className="text-sm text-[#5c6669] hover:text-[#db462f] transition-colors">
    //           Terms of Service
    //         </Link>
    //         <Link href="#" className="text-sm text-[#5c6669] hover:text-[#db462f] transition-colors">
    //           Shipping Policy
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </footer>

    // <footer className="bg-gray-900 text-white py-10">
    //   <div className="container mx-auto px-4">
    //     <div className="flex flex-col md:flex-row justify-between">
    //       <div className="mb-6 md:mb-0">
    //       <Link href="/" className="flex items-center gap-2">
    //         <span className="text-2xl font-bold text-[#D32F2F]">Rovestone</span>
    //         <span className="text-xl font-medium text-[#1A1F2C]">Brothers</span>
    //       </Link>
    //         <p className="mt-2 text-gray-400 max-w-xs">
    //           Crafting exceptional furniture pieces since 1995.
    //         </p>
    //       </div>
    //       <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
    //         <div>
    //           <h3 className="text-lg font-semibold mb-3">Company</h3>
    //           <ul className="space-y-2">
    //             <li>
    //               <a
    //                 href="#"
    //                 className="text-gray-400 hover:text-amber-400 transition-colors"
    //               >
    //                 About
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 href="#"
    //                 className="text-gray-400 hover:text-amber-400 transition-colors"
    //               >
    //                 Careers
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 href="#"
    //                 className="text-gray-400 hover:text-amber-400 transition-colors"
    //               >
    //                 News
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //         <div>
    //           <h3 className="text-lg font-semibold mb-3">Support</h3>
    //           <ul className="space-y-2">
    //             <li>
    //               <a
    //                 href="#"
    //                 className="text-gray-400 hover:text-amber-400 transition-colors"
    //               >
    //                 Contact
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 href="#"
    //                 className="text-gray-400 hover:text-amber-400 transition-colors"
    //               >
    //                 FAQ
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 href="#"
    //                 className="text-gray-400 hover:text-amber-400 transition-colors"
    //               >
    //                 Warranty
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //         <div>
    //           <h3 className="text-lg font-semibold mb-3">Legal</h3>
    //           <ul className="space-y-2">
    //             <li>
    //               <a
    //                 href="#"
    //                 className="text-gray-400 hover:text-amber-400 transition-colors"
    //               >
    //                 Privacy
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 href="#"
    //                 className="text-gray-400 hover:text-amber-400 transition-colors"
    //               >
    //                 Terms
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 href="#"
    //                 className="text-gray-400 hover:text-amber-400 transition-colors"
    //               >
    //                 Cookies
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="border-t border-gray-800 mt-10 pt-6 text-gray-500 text-sm text-center">
    //       &copy; {new Date().getFullYear()} Luxuria Furniture. All rights
    //       reserved.
    //     </div>
    //   </div>
    // </footer>

    <footer className="bg-[#1A1F2C] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col gap-4 mb-6 md:mb-0">
            <div>
              <h3 className="text-xl font-bold mb-2">Rovestone Brothers</h3>
              <p className="text-gray-300 max-w-xs italic">
                &quot;It&apos;s all about the details&quot;
              </p>
              <p className="text-gray-300 max-w-xs mt-2">
                Beautiful custom furniture with cherished craftsmanship since
                1986.
              </p>
            </div>

            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-[#5c6669] hover:text-[#db462f] transition-colors"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-[#5c6669] hover:text-[#db462f] transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-[#5c6669] hover:text-[#db462f] transition-colors"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-[#5c6669] hover:text-[#db462f] transition-colors"
              >
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-2 text-[#f8d0d0]">
                Pages
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
            © {new Date().getFullYear()} Rovestone Brothers Trade Pvt. Ltd. Co.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
