import React from 'react';
import Link from 'next/link';
import { getProducts } from '@/service/products';
import MeowArticle from '@/components/MeowArticle';

// export const revalidate = 3;

export default async function ProductsPage() {
  const products = await getProducts();
  
  return (
    <>
      <div>제품 소개 페이지</div>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
     <MeowArticle/>
    </>
  );
}
