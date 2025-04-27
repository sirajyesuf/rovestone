"use client";

import clsx from "clsx";
import { useParams, useRouter, usePathname } from "next/navigation";
import { Locale } from "next-intl";
import { ChangeEvent, ReactNode, useTransition } from "react";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale;
    
    startTransition(() => {
      //remove the locale from the pathname

      const currentLocale = params.locale as Locale;
        const newPathname = pathname.replace(`/${currentLocale}`, "");
      const newPath = `/${nextLocale}${newPathname}`;
      console.log(newPath);
      router.replace(newPath);
    });
  }

  return (
    <label
      className={clsx(
        "relative text-gray-400",
        isPending && "transition-opacity [&:disabled]:opacity-30"
      )}
    >
      <p className="sr-only">{label}</p>
      <select
        className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
      <span className="pointer-events-none absolute right-2 top-[8px]">⌄</span>
    </label>
  );
}
