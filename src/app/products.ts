import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  rating: number;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Основы веб-дизайна',
      price: 50,
      imageUrl: 'assets/images/product1.jpg',
      rating: 5,
      description: 'Курс по современному веб-дизайну для начинающих.',
    },
    {
      id: 2,
      name: 'UI/UX дизайн PRO',
      price: 79,
      imageUrl: 'assets/images/product2.jpg',
      rating: 4,
      description: 'Продвинутый курс по проектированию интерфейсов.',
    },
    {
      id: 3,
      name: 'Figma для дизайнеров',
      price: 45,
      imageUrl: 'assets/images/product3.png',
      rating: 5,
      description: 'Практика работы в Figma: компоненты и автолейаут.',
    },
    {
      id: 4,
      name: 'Адаптивная вёрстка',
      price: 60,
      imageUrl: 'assets/images/product4.png',
      rating: 4,
      description: 'Создание адаптивных интерфейсов на HTML и CSS.',
    },
  ];

  getProducts(): Product[] {
    return this.products;
  }
}
