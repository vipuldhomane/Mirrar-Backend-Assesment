# Mirrar-Backend-Assesment

## change directory to the folder

    cd ecommerce-api
    then
    node src/app.js
    or
    nodemon src/app.js

Create a Product:

Open Postman.
Set the request type to POST.
Enter the URL: http://localhost:3000/api/products.
In the Body tab, select raw and choose JSON (application/json).
Paste the request body mentioned above.
Click on the "Send" button.
make request with this data

```
{
"name": "Sample Product",
"description": "Sample Description",
"price": 20,
"variants": [
{ "name": "Variant 1", "SKU": "SKU123", "additionalCost": 5, "stockCount": 10 },
{ "name": "Variant 2", "SKU": "SKU456", "additionalCost": 8, "stockCount": 15 }
]
}
```

Get All Products:

Set the request type to GET.
Enter the URL: http://localhost:3000/api/products.
Click on the "Send" button.
Search Products:

Set the request type to GET.
Enter the URL: http://localhost:3000/api/products/search?query=sample.
Click on the "Send" button.
