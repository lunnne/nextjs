import React from 'react';
import { getProduct, getProducts } from '@/service/products';
import NotFoundPage from '@/app/not-found';

// export const revalidate = 3;

type Props = {
  params: {
    slug: string;
  };
};

export default async function Productpage({ params: { slug } }: Props) {
  const product = await getProduct(slug);
  if (!product) {
    NotFoundPage();
  }
  return <div>{product?.name} detailpage</div>;
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({ slug: product.id }));
}
