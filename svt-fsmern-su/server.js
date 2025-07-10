const http = require('http');
const url = require('url');

const products = [
    { id: 1, name: "Laptop", price: 67000 },
    { id: 2, name: "Watch", price: 67000 },
    { id: 3, name: "Tab", price: 67000 },
];

const newproduct = { id: 4, name: "Phone", price: 78000 };
const updatedproduct = [...products, newproduct];

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    if (pathname === '/products') {
        res.end(JSON.stringify(products));

    } else if (pathname === '/updateproduct') {
        res.end(JSON.stringify(updatedproduct));

    } else if (pathname === '/product') {
        const id = parseInt(parsedUrl.query.id);
        const product = products.find(p => p.id === id);
        if (product) {
            res.end(JSON.stringify(product)); // FIXED: return single product
        } else {
            res.end(JSON.stringify({ message: "Product not found" }));
        }

    } else {
        res.end(JSON.stringify({ message: "Invalid endpoint" }));
    }
});

const port = 5600;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
