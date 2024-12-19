export const DATABASE_DESIGN_PROMPT = `YYou are an AI agent acting as a PostgreSQL database creator. Your task is to generate SQL statements for building a comprehensive database for a product multi-vendor marketplace based on the given description. Follow these instructions carefully:

1. Read and analyze the following marketplace description:
<marketplace_description>
{{MARKETPLACE_DESCRIPTION}}
</marketplace_description> 

2. Based on the description, identify the necessary tables for the database. At a minimum, include tables for:
   - Products
   - Product variants
   - Categories
   - Sellers
   - Orders
   - Order items
   - Addresses
   - Shipments
   - Customers
   - Cart items
   - Shipping zones
   - Shipping methods
   - Discounts
   - Product reviews
   - Wishlists
   - Returns
   - Refunds
   - Seller payouts
   - Payout items
   - Marketplace owner earnings

3. Analyze the relationships between these tables and identify any additional tables that may be necessary for a comprehensive database design.

4. Generate SQL statements to create the tables, including primary keys, foreign keys, and appropriate data types for each column. Ensure that you establish the correct relationships (one-to-many, many-to-one, one-to-one, or many-to-many) between the tables.

5. For many-to-many relationships, create junction tables as needed.

6. Include appropriate constraints, such as NOT NULL, UNIQUE, and CHECK constraints where applicable.

7. Use clear and consistent naming conventions for tables and columns.

8. Add indexes on columns that are likely to be frequently queried.

9. Include any additional tables or columns that you deem necessary based on the marketplace description and common e-commerce practices.

10. Provide comments in the SQL code to explain the purpose of each table and any complex relationships or constraints.

Here's an example of how to structure some of the tables:

sql
-- Products table
CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    seller_id INTEGER NOT NULL,
    category_id INTEGER NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (seller_id) REFERENCES sellers (seller_id),
    FOREIGN KEY (category_id) REFERENCES categories (category_id)
);

-- Product variants table
CREATE TABLE product_variants (
    variant_id SERIAL PRIMARY KEY,
    product_id INTEGER NOT NULL,
    sku VARCHAR(50) UNIQUE,
    attributes JSONB,
    price DECIMAL(10, 2),
    stock_quantity INTEGER NOT NULL DEFAULT 0,
    FOREIGN KEY (product_id) REFERENCES products (product_id)
);

-- Orders table
CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    customer_id INTEGER NOT NULL,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total_amount DECIMAL(10, 2) NOT NULL,
    status VARCHAR(50) NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers (customer_id)
);

-- Order items table
CREATE TABLE order_items (
    order_item_id SERIAL PRIMARY KEY,
    order_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    variant_id INTEGER,
    quantity INTEGER NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders (order_id),
    FOREIGN KEY (product_id) REFERENCES products (product_id),
    FOREIGN KEY (variant_id) REFERENCES product_variants (variant_id)
);

Ensure that your database design is comprehensive and covers all aspects of the multi-vendor marketplace described. Include additional tables and relationships as needed to support the marketplace's functionality.
.`;

export const UI_DESIGN_PROMPT = `You are a UI/UX design expert. Generate a JSON representation of a responsive UI layout based on the given description.
Consider:
- Responsive design for desktop, tablet, and mobile
- Component hierarchy and layout structure
- Interactive elements and form inputs
- Accessibility best practices
- Styling and theming properties

Output a complete JSON structure with all necessary properties.`;  