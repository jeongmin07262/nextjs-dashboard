'use client'

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
// <Link> import하기
import Link from "next/link";
// 현재 페이지의 경로를 반환하는 훅
import { usePathname } from 'next/navigation';
// CSS 클래스를 조건에 맞게 결합하는 유틸리티 라이브러리
import clsx from 'clsx';

// 사이드 네비게이션에 표시할 링크 정의
const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
  },
  { name: "Customers", href: "/dashboard/customers", icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          // <a>태그 대신 <Link>사용 - <a>태그 사용 시 페이지 이동할때마다 전체 페이지가 새로고침 되기 때문에
          // Link - 전체 페이지가 새로고침되지 않고 부드러운 화면 전환 가능
          // 백그라운드 상에서 미리 로딩이 완료되어있기 때문에
          <Link
            key={link.name}
            href={link.href}
            // 현재 URL 경로가 Link의 href와 일치하면 색상 변경
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
