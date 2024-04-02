import React from "react";
import { Link } from "react-router-dom";
const PopularProducts = () => {
  let w = 100;
  let h = 100;
  const popularProductsData = [
    {
      id: "3432",
      product_name: "Macbook MI Pro 14",
      product_thumbnail: `https://source.unsplash.com/${w}x${h}?macbook`,
      product_price: "$1456.00",
      product_stock: 24,
    },
    {
      id: "3376",
      product_name: "Samsung Galaxy Buds 2",
      product_thumbnail: `https://source.unsplash.com/${w}x${h}?earbuds`,
      product_price: "$1686.00",
      product_stock: 89,
    },
    {
      id: "6534",
      product_name: "Asus Zenbook Pro",
      product_thumbnail: `https://source.unsplash.com/${w}x${h}?laptop`,
      product_price: "$5656.00",
      product_stock: 248,
    },
    {
      id: "9234",
      product_name: "LG Flex Canvas",
      product_thumbnail: `https://source.unsplash.com/${w}x${h}?smartphone`,
      product_price: "$5956.00",
      product_stock: 2489,
    },
    {
      id: "4314",
      product_name: "Apple Magic Touchpad",
      product_thumbnail: `https://source.unsplash.com/${w}x${h}?touchpad`,
      product_price: "$5686.00",
      product_stock: 2458,
    },
    {
      id: "4342",
      product_name: "Nothing Earbuds one",
      product_thumbnail: `https://source.unsplash.com/${w}x${h}?earphone`,
      product_price: "$9286.00",
      product_stock: 3698,
    },
    {
      id: "5432",
      product_name: "Sony PlayStation 5",
      product_thumbnail: `https://source.unsplash.com/${w}x${h}?playstation`,
      product_price: "$499.00",
      product_stock: 56,
    },
    {
      id: "2876",
      product_name: "Canon EOS R5",
      product_thumbnail: `https://source.unsplash.com/${w}x${h}?camera`,
      product_price: "$3899.00",
      product_stock: 18,
    },
    {
      id: "7534",
      product_name: "Dell XPS 15",
      product_thumbnail: `https://source.unsplash.com/${w}x${h}?powerbank`,
      product_price: "$1899.00",
      product_stock: 78,
    },
    {
      id: "6234",
      product_name: "Nike Air Jordan 1",
      product_thumbnail: `https://source.unsplash.com/${w}x${h}?sneakers`,
      product_price: "$200.00",
      product_stock: 324,
    },
    {
      id: "8314",
      product_name: "Bose QuietComfort 45",
      product_thumbnail: `https://source.unsplash.com/${w}x${h}?headphones`,
      product_price: "$329.00",
      product_stock: 267,
    },
    {
      id: "9342",
      product_name: "Samsung Odyssey G9",
      product_thumbnail: `https://source.unsplash.com/${w}x${h}?monitor`,
      product_price: "$1799.00",
      product_stock: 109,
    },
    {
      id: "1234",
      product_name: "Amazon Echo Dot",
      product_thumbnail: `https://source.unsplash.com/${w}x${h}?smartspeaker`,
      product_price: "$49.99",
      product_stock: 589,
    },
    {
      id: "2123",
      product_name: "Microsoft Surface Pro 8",
      product_thumbnail: `https://source.unsplash.com/${w}x${h}?tablet`,
      product_price: "$1099.00",
      product_stock: 207,
    },
    {
      id: "4567",
      product_name: "Fujifilm Instax Mini 11",
      product_thumbnail: `https://source.unsplash.com/${w}x${h}?instantcamera`,
      product_price: "$69.95",
      product_stock: 421,
    },
    {
      id: "9876",
      product_name: "GoPro Hero 10 Black",
      product_thumbnail: `https://source.unsplash.com/${w}x${h}?actioncamera`,
      product_price: "$499.99",
      product_stock: 98,
    },
    {
      id: "5431",
      product_name: "Razer BlackWidow V3 Pro",
      product_thumbnail: `https://source.unsplash.com/${w}x${h}?keyboard`,
      product_price: "$229.99",
      product_stock: 183,
    },
    {
      id: "8765",
      product_name: "Apple AirPods Max",
      product_thumbnail: `https://source.unsplash.com/${w}x${h}?airpods`,
      product_price: "$549.00",
      product_stock: 142,
    },
    {
      id: "8753",
      product_name: "Yamaha YZF-R6 Motorcycle",
      product_thumbnail: `https://source.unsplash.com/${w}x${h}?motorcycle`,
      product_price: "$12,199.00",
      product_stock: 15,
    },
    {
      id: "5327",
      product_name: "Herman Miller Aeron Chair",
      product_thumbnail: `https://source.unsplash.com/${w}x${h}?officechair`,
      product_price: "$1,495.00",
      product_stock: 30,
    },
    {
      id: "3642",
      product_name: "Weber Summit Charcoal Grill",
      product_thumbnail: `https://source.unsplash.com/${w}x${h}?grill`,
      product_price: "$1,699.00",
      product_stock: 20,
    },
    {
      id: "9284",
      product_name: "Bose Frames Audio Sunglasses",
      product_thumbnail: `https://source.unsplash.com/${w}x${h}?sunglasses`,
      product_price: "$199.95",
      product_stock: 25,
    },
    {
      id: "6329",
      product_name: "Patagonia Nano Puff Jacket",
      product_thumbnail: `https://source.unsplash.com/${w}x${h}?jacket`,
      product_price: "$199.00",
      product_stock: 40,
    },
    {
      id: "4792",
      product_name: "Sony A7 III Mirrorless Camera",
      product_thumbnail: `https://source.unsplash.com/${w}x${h}?mirrorlesscamera`,
      product_price: "$1,999.99",
      product_stock: 10,
    },
    {
      id: "2876",
      product_name: "Tiffany & Co. Diamond Ring",
      product_thumbnail: `https://source.unsplash.com/${w}x${h}?engagementring`,
      product_price: "$5,999.00",
      product_stock: 5,
    },
    {
      id: "7634",
      product_name: "Yeti Tundra 45 Cooler",
      product_thumbnail: `https://source.unsplash.com/${w}x${h}?cooler`,
      product_price: "$299.99",
      product_stock: 25,
    },
    {
      id: "5421",
      product_name: "Boat",
      product_thumbnail: `https://source.unsplash.com/${w}x${h}?boat`,
      product_price: "$599.99",
      product_stock: 15,
    },
    {
      id: "9238",
      product_name: "Louis VuittonHandbag",
      product_thumbnail: `https://source.unsplash.com/${w}x${h}?handbag`,
      product_price: "$1,500.00",
      product_stock: 8,
    },
    {
      id: "6482",
      product_name: "Wire",
      product_thumbnail: `https://source.unsplash.com/${w}x${h}?wire`,
      product_price: "$5,995.00",
      product_stock: 12,
    },
    {
      id: "3429",
      product_name: "Coffee Machine",
      product_thumbnail: `https://source.unsplash.com/${w}x${h}?coffeemachine`,
      product_price: "$249.00",
      product_stock: 22,
    },
    {
      id: "9823",
      product_name: "Processor",
      product_thumbnail: `https://source.unsplash.com/${w}x${h}?processor`,
      product_price: "$199.00",
      product_stock: 18,
    },
    {
      id: "6574",
      product_name: "Bluetooth Speaker",
      product_thumbnail: `https://source.unsplash.com/${w}x${h}?bluetoothspeaker`,
      product_price: "$349.99",
      product_stock: 30,
    },
    {
      id: "3248",
      product_name: "Eames Lounge Chair",
      product_thumbnail: `https://source.unsplash.com/${w}x${h}?loungechair`,
      product_price: "$5,995.00",
      product_stock: 7,
    },
    {
      id: "7326",
      product_name: "All-Clad Stainless Steel Cookware Set",
      product_thumbnail: `https://source.unsplash.com/${w}x${h}?cookwareset`,
      product_price: "$899.99",
      product_stock: 10,
    },
    {
      id: "8973",
      product_name: "Stratocaster",
      product_thumbnail: `https://source.unsplash.com/${w}x${h}?guitar`,
      product_price: "$1,549.99",
      product_stock: 15,
    },
    {
      id: "5431",
      product_name: "Polaris RZR XP 1000 ATV",
      product_thumbnail: `https://source.unsplash.com/${w}x${h}?atv`,
      product_price: "$17,999.00",
      product_stock: 3,
    },
    {
      id: "2385",
      product_name: "Ralph Lauren Polo Shirt",
      product_thumbnail: `https://source.unsplash.com/${w}x${h}?poloshirt`,
      product_price: "$98.50",
      product_stock: 50,
    },
    {
      id: "9264",
      product_name: "Carrera Foldable Bike",
      product_thumbnail: `https://source.unsplash.com/${w}x${h}?foldingbike`,
      product_price: "$799.00",
      product_stock: 8,
    },
    {
      id: "9284",
      product_name: "Wifi",
      product_thumbnail: `https://source.unsplash.com/${w}x${h}?wifi`,
      product_price: "$799.00",
      product_stock: 8,
    },
  ];
  return (
    <div className="bg-white px-2 pt-3 rounded-sm border border-gray-200 w-[16.4rem] h-[12rem] overflow-y-auto">
      <strong className="text-gray-700 text-medium">Popular Products</strong>
      <div className="mt-4 flex flex-col gap-3">
        {popularProductsData.map((product) => (
          <Link
            to={`/product/${product.id}`}
            className="flex hover:no-underline"
          >
            <div className="w-10 h-10 min-w-10 bg-gray-200 rounded-sm overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={product.product_thumbnail}
                alt={product.product_name}
              />
            </div>
            <div className="ml-4 flex-1">
              <p className="text-sm text-gray-800">{product.product_name}</p>
              <span className={`text-sm font-medium`}>
                {product.product_stock}
              </span>
            </div>
            <div className="text-sm text-gray-400 pl-2">
              {product.product_price}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
