class Product:
    def _init_(self, name, category, price, stock):
        self.name = name
        self.category = category
        self.price = price
        self.stock = stock

class Marketplace:
    def _init_(self):
        self.products = []

    def add_product(self, product):
        self.products.append(product)

    def view_products(self):
        print("Available Products:")
        for idx, product in enumerate(self.products):
            print(f"{idx + 1}. {product.name} ({product.category}) - ${product.price}")

    def purchase_product(self, idx, quantity):
        if 1 <= idx <= len(self.products):
            product = self.products[idx - 1]
            if product.stock >= quantity:
                total_cost = product.price * quantity
                print(f"You have purchased {quantity} {product.name} for ${total_cost}.")
                product.stock -= quantity
            else:
                print("Sorry, the product is out of stock.")
        else:
            print("Invalid product selection.")

def main():
    marketplace = Marketplace()

    # Sample products
    product1 = Product("Handmade Wooden Bowl", "Handicraft", 15.99, 10)
    product2 = Product("Reusable Cloth Bag", "Eco-friendly", 4.99, 50)
    product3 = Product("Handwoven Scarf", "Handicraft", 19.99, 5)

    # Add sample products to the marketplace
    marketplace.add_product(product1)
    marketplace.add_product(product2)
    marketplace.add_product(product3)

    while True:
        print("\nOptions:")
        print("1. View Products")
        print("2. Purchase Product")
        print("3. Exit")
        choice = input("Enter your choice: ")

        if choice == "1":
            marketplace.view_products()
        elif choice == "2":
            idx = int(input("Enter the product number you want to purchase: "))
            quantity = int(input("Enter the quantity you want to purchase: "))
            marketplace.purchase_product(idx, quantity)
        elif choice == "3":
            print("Thank you for using the marketplace. Goodbye!")
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()