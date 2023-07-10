import Link from "next/link";
import { basePath, navs } from "@/domain/ds/constants";

interface TopNavProps {
  page: PageType;
}

export default function TopNav({ page }: TopNavProps) {
  return (
    <header className="mt-8 py-6">
      <div className="flex mx-auto max-w-5xl px-8 h-12 items-center">
        <div>
          <Link href="/welcome">
            <img
              src={`${basePath}/imgs/logo.svg`}
              className="h-12 w-12 inline-block"
              alt="logo"
            />
            <span className="ml-3 font-semibold">{t("company_name")}</span>
          </Link>
        </div>
        <div className="grow" />
        <nav className="hidden md:block">
          <ol className="flex items-center">
            {navs.map((item, index) => (
              <li className="flex items-center ml-3">
                <Link
                  href={item.href}
                  className={`p-3 rounded-md text-white ${item.bgColor}`}
                >
                  {t(item.strResource)}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </header>
  );
}
