const products = [
    {
    name: "Lenovo light1 laptop",
    description:
      "Lenovo IdeaPad Slim 3 Intel Core i5 11th Gen 15.6 inches (39.62cm) FHD Thin & Light Business Laptop (8GB/512GB SSD/Windows 11/MS Office/Backlit Keyboard/Arctic Grey/1.65Kg), 82H802XTIN",
    count: 5,
    price: 100,
    category: "Computers/Laptops/Lenovo",
    images: [
      { path: "/images/games-category.png" },
      { path: "/images/monitors-category.png" },
      { path: "/images/tablets-category.png" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [{ key: "color", value: "blue" }],
  },
  {
    name: "Product2 Lenovo Comp",
    description:
      "Lenovo IdeaPad Slim 3 Intel Core i5 12th Gen 15.6 (39.62cm)FHD Thin & Light Laptop (8GB/512GB SSD/Win 11/MSO 2021/Backlit/2Yr Warranty/3months Game Pass/Arctic Grey/1.63Kg), 82RK0062IN",
    count: 5,
    price: 100,
    category: "Computers/Laptops/Lenovo",
    images: [
      { path: "/images/games-category.png" },
      { path: "/images/monitors-category.png" },
      { path: "/images/tablets-category.png" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "black" },
      { key: "RAM", value: "1 TB" },
    ],
  },
  {
    name: "Product Dell vostro Comp ",
    description:
      "Dell Vostro 3420 Laptop, Intel i3-1115G4/8GB DDR4/256GB SSD/Windows 11+MSO'21/14.0 (35.56cm) FHD, TÜV Rheinland Certified Comfortview Reduce Harmful Blue Light Emission/15 Month McAfee/Black/1.48kg",
    count: 5,
    price: 100,
    category: "Computers/Laptops/Dell",
    images: [
      { path: "/images/games-category.png" },
      { path: "/images/monitors-category.png" },
      { path: "/images/tablets-category.png" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "black" },
      { key: "RAM", value: "1 TB" },
    ],
  },
  {
    name: "Product4 lenovo tablet",
    description:
      "Lenovo Tab P11 Plus Tablet (11 inch (27.94 cm), 6 GB, 128 GB, Wi-Fi+LTE, Voice Calling), Slate Grey with 2K Display, Quad Speakers with Dolby Atmos, 7700 mAH Battery and TUV Certified Eye Protection",
    count: 5,
    price: 100,
    category: "Tablets",
    images: [
      { path: "/images/games-category.png" },
      { path: "/images/monitors-category.png" },
      { path: "/images/tablets-category.png" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
  },
  {
    name: "Product5 Tablet Lenovo P11",
    description:
      "Lenovo Tab P11 5G FHD (11 inch (27.94 cm), 6 GB, 128 GB, Wi-Fi+LTE, Calling), Storm Grey with Qualcomm Snapdragon Processor,Quad Speakers with Dolby Atmos, Anti-Fingerprint Touch, Dolby Vision",
    count: 10,
    price: 200,
    category: "Tablets",
    images: [
      { path: "/images/monitors-category.png" },
      { path: "/images/games-category.png" },
      { path: "/images/tablets-category.png" },
    ],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
  },
  {
    name: "Product6 Tablet Lenovo M10",
    description:
      "Lenovo Tab M10 FHD 3rd Gen (10.1 inch (25.65 cm), 4 GB, 64 GB, Wi-Fi), Storm Grey",
    count: 15,
    price: 300,
    category: "Tablets",
    images: [
      { path: "/images/tablets-category.png" },
      { path: "/images/monitors-category.png" },
      { path: "/images/games-category.png" },
    ],
    rating: 4,
    reviewsNumber: 7,
    reviews: [],
  },
  {
    name: "Product7 Tablet K10",
    description:
      "Lenovo Tab K10 FHD (10.3 inch (26.16 cm, 4 GB, 64 GB, Wi-Fi+LTE, Voice Calling), Abyss Blue TUV Certified Eye Protection, Dolby Atmos, 7500 mAH Battery, Camera with Flash",
    count: 20,
    price: 400,
    category: "Tablets",
    images: [
      { path: "/images/games-category.png" },
      { path: "/images/tablets-category.png" },
      { path: "/images/monitors-category.png" },
    ],
    rating: 4,
    reviewsNumber: 8,
    reviews: [],
  },
  {
    name: "Product8 Tablet M7",
    description:
      "Lenovo Cellular, Wi-Fi Tab M7 3rd Gen (7 inches 17.78 cm), 2 GB, 32 GB, WiFi + 4G LTE Iron Grey",
    count: 25,
    price: 500,
    category: "Tablets",
    images: [
      { path: "/images/monitors-category.png" },
      { path: "/images/games-category.png" },
      { path: "/images/tablets-category.png" },
    ],
    rating: 3,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Product9 Monitor ",
    description:
      "ZEBRONICS AC32FHD LED Curved 75Hz 80Cm (32) (81.28 Cm) 1920x1080 Pixels FHD Resolution Monitor with HDMI + VGA Dual Input, Built-in Speaker, Max 250 Nits Brightness, Black",
    count: 5,
    price: 100,
    category: "Monitors",
    images: [
      { path: "/images/games-category.png" },
      { path: "/images/monitors-category.png" },
      { path: "/images/tablets-category.png" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
  },
  {
    name: "Product10 Monitor ",
    description:
      "Samsung 34-inch(86.4cm) LED 3440 x 1440 Pixels 2K WQHD, Curved Monitor, 21:9 Ultrawide, PBP, PIP, 100Hz, QLED, Thunderbolt 3 Port (LC34J791WTWXXL, Gray)",
    count: 10,
    price: 200,
    category: "Monitors",
    images: [
      { path: "/images/monitors-category.png" },
      { path: "/images/games-category.png" },
      { path: "/images/tablets-category.png" },
    ],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
  },
  {
    name: "Product11 Monitor ",
    description:
      "Samsung 32-inch(80.1cm) 3840 x 2160 Pixels 4K UHD, Flat Monitor, 1 Billion Colors, PBP, Slim Bezels, AMD FreeSync (LU32J590UQWXXL, Dark Blue Gray)",
    count: 15,
    price: 300,
    category: "Monitors",
    images: [
      { path: "/images/tablets-category.png" },
      { path: "/images/monitors-category.png" },
      { path: "/images/games-category.png" },
    ],
    rating: 4,
    reviewsNumber: 7,
    reviews: [],
  },
  {
    name: "Product12 Monitor ",
    description:
      "Samsung 27-inch(68.5cm) FHD, 1800R Curved Monitor, 75Hz, VA Panel, Slim Design, AMD FreeSync, Flicker Free, HDMI, Audio Ports (LS27C360EAWXXL, Black)",
    count: 20,
    price: 400,
    category: "Monitors",
    images: [
      { path: "/images/games-category.png" },
      { path: "/images/tablets-category.png" },
      { path: "/images/monitors-category.png" },
    ],
    rating: 4,
    reviewsNumber: 8,
    reviews: [],
  },
  {
    name: "Product13 Monitor ",
    description:
      "Dell 27 (68.96 cm) S2721HNM FHD Monitor 5 Yrs Warranty |1920x1080@75 Hz | IPS Panel |Adaptive-Sync Technology |Brightness: 300 cd/m²|Colour Gamut|99% sRGB | Flicker Free Technology",
    count: 25,
    price: 500,
    category: "Monitors",
    images: [
      { path: "/images/monitors-category.png" },
      { path: "/images/games-category.png" },
      { path: "/images/tablets-category.png" },
    ],
    rating: 3,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Product14 Game ",
    description:
      "Amisha Gift Gallery Video Games for Kids Wireless 4GB Video Game for Kids, 4k Ultra HD Classic Games Console Built in 10000 Game in TF Card, 9 Emulator Console, HDMI Output TV Video Game Console",
    count: 5,
    price: 100,
    category: "Games",
    images: [
      { path: "/images/games-category.png" },
      { path: "/images/monitors-category.png" },
      { path: "/images/tablets-category.png" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
  },
  {
    name: "Product15 Game ",
    description:
      "NextTech Pvp Station Handheld Game Console|Best Gaming Console For Kid|With Friends-Enjoy Friendly Competition With This Player Edition 2023 Video Games For Includes Action-Adventure Sports And Racing",
    count: 10,
    price: 200,
    category: "Games",
    images: [
      { path: "/images/monitors-category.png" },
      { path: "/images/games-category.png" },
      { path: "/images/tablets-category.png" },
    ],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
  },
  {
    name: "Product16 Game ",
    description:
      "NextTech Pvp Station Handheld Game Console|Best Gaming Console For Kid|With Friends-Enjoy Friendly Competition With This Player Edition 2023 Video Games For Includes Action-Adventure Sports And Racing",
    count: 15,
    price: 300,
    category: "Games",
    images: [
      { path: "/images/tablets-category.png" },
      { path: "/images/monitors-category.png" },
      { path: "/images/games-category.png" },
    ],
    rating: 4,
    reviewsNumber: 7,
    reviews: [],
  },
  {
    name: "Product17 Game ",
    description:
      "Onyxtron Kid's Special 8 Bit Trendy LCD Plug Video Games for Tv Gaming Console with Classic Inbuilt Games Like Super Mario Bros, Contra, Double Dragon, Road Fighter, Load Runner, F1 Race ETC",
    count: 20,
    price: 400,
    category: "Games",
    images: [
      { path: "/images/games-category.png" },
      { path: "/images/tablets-category.png" },
      { path: "/images/monitors-category.png" },
    ],
    rating: 4,
    reviewsNumber: 8,
    reviews: [],
  },
  {
    name: "Product18 Game ",
    description:
      "Viart Creation™ Video Games for Kids 64G Video Game for Kids 4k HD Classic Games Console Built in 10000 Game in TF Card, 9 Emulator Console, HDMI Output TV Video Game Console Black Kids Edition New",
    count: 25,
    price: 500,
    category: "Games",
    images: [
      { path: "/images/monitors-category.png" },
      { path: "/images/games-category.png" },
      { path: "/images/tablets-category.png" },
    ],
    rating: 3,
    reviewsNumber: 9,
    reviews: [],
  },
]

module.exports = products
