import { Metadata } from 'next';
import Link from 'next/link';

export const metadata : Metadata = {
    title: '멋진 제품 사이트 | 전체 제품 확인',
    description : '멋진 제품을 확인해보세요'
}


export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex p-10 space-x-10 text-2xl border-2 border-orange-300">
        <Link href="/products/women">여성옷</Link>
        <Link href="/products/men">남성옷</Link>
      </div>
      <section> {children}</section>
    </>
  );
}
