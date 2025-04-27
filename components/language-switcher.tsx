"use client";

import { useRouter, usePathname } from 'next/navigation'; // For navigation
import { Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocale,useTranslations } from 'next-intl';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

const LanguageSwitcher = () => {
  const locale = useLocale(); 
  const router = useRouter();
  const pathname = usePathname(); 

  const languages = [
    { code: "en", name: "English", flag: "US.svg" },
    { code: "am", name: "Amharic", flag: "ET.svg" },
  ];

      const onLocaleChange = (langCode:string) => {
        router.replace(pathname, { locale: langCode });
      };



  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="w-[140px] justify-between"
        >
          <Image
            src={languages.find((l) => l.code === locale)?.flag || ""}
            alt={languages.find((l) => l.code === locale)?.name || ""}
            width={40}
            height={40}
          />

          {languages.find((l) => l.code === locale)?.name}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[140px]">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onSelect={() => onLocaleChange(language.code)}
          >
            <Check
              className={`mr-2 h-4 w-4 ${
                locale === language.code ? "opacity-100" : "opacity-0"
              }`}
            />
            <Image
              src={language.flag}
              alt={language.name}
              width={40}
              height={40}
            />

            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
