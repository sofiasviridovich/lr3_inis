import { Component, Input } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;

  quantity = 1;

  get stars(): boolean[] {
    return Array.from({ length: 5 }, (_, index) => index < Math.round(this.product.rating));
  }

  get formattedQuantity(): string {
    return String(this.quantity).padStart(2, '0');
  }

  decrease(): void {
    if (this.quantity > 1) {
      this.quantity -= 1;
    }
  }

  increase(): void {
    this.quantity += 1;
  }
}
