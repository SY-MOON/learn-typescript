interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

//상품 목록을 받아오기 위한 API함수
function fetchProducts(): Promise<Product[]> {}

type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>;
function displayProductDetail(shoppingItem: ShoppingItem) {}

function updateProductItem(productItem: Partial<Product>) {}

interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}
