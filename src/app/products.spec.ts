import { TestBed } from '@angular/core/testing';
import { ProductsService } from './products';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return mock products', () => {
    const products = service.getProducts();
    expect(products.length).toBeGreaterThanOrEqual(3);
    expect(products[0].id).toBeDefined();
    expect(products[0].name).toBeDefined();
    expect(products[0].price).toBeDefined();
    expect(products[0].imageUrl).toBeDefined();
    expect(products[0].rating).toBeDefined();
  });
});
