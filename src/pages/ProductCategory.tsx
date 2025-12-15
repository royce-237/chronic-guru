import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, Star, Grid, List, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const cannabisProducts = [
    {
        id: 778594,
        name: "Trap Queen",
        category: "Hybrid",
        priceRange: "$135.00 - $265.00",
        weightPrices: {
          "3.5 Grams": 135.00,
          "7 Grams": 180.00,
          "1/2 Ounce": 220.00,
          "1 Ounce": 265.00
        },
        rating: 0,
        reviews: 0,
        image: "/GuruImg/imgi_145_Trap-Queen-web-FULL.png",
        inStock: true,
        salePercentage: null
    },
    {
        id: 778426,
        name: "Infatuation",
        category: "Hybrid",
        priceRange: "$265.00",
        weightPrices: {
            "1 Ounce": 265.00
        },
        rating: 0,
        reviews: 0,
        image: "/GuruImg/imgi_156_Inflation-web-FULL.png",
        inStock: true,
        salePercentage: null
    },
    {
        id: 697504,
        name: "Grape OG",
        category: "Indica",
        price: 12.99,
        weightPrices: {
            "1 Gram": 12.99
        },
        rating: 4.79,
        reviews: 15,
        image: "/GuruImg/imgi_167_Grape-OG-Web-FULL-1.png",
        inStock: true,
        salePercentage: null
    },
    {
        id: 659656,
        name: "Gas Can",
        category: "Indica",
        priceRange: "$12.99 - $265.00",
        weightPrices: {
            "1 Gram": 12.99,
            "3.5 Grams": 45.81,
            "7 Grams": 88.62,
            "1/2 Ounce": 165.43,
            "1 Ounce": 265.00
        },
        rating: 4.40,
        reviews: 11,
        image: "/GuruImg/imgi_178_Gas-Can-web-FULL.png",
        inStock: true,
        salePercentage: null
    },
    {
        id: 629552,
        name: "Crystal Runtz",
        category: "Hybrid",
        priceRange: "$12.99 - $265.00",
        weightPrices: {
            "1 Gram": 12.99,
            "3.5 Grams": 51.06,
            "7 Grams": 88.11,
            "1/2 Ounce": 164.41,
            "1 Ounce": 265.00
        },
        rating: 4.75,
        reviews: 13,
        image: "/GuruImg/imgi_189_Crystal-Runtz-web-FULL.png",
        inStock: true,
        salePercentage: null
    },
    {
        id: 576916,
        name: "Cherry Sangria",
        category: "Hybrid",
        priceRange: "$12.99 - $265.00",
        weightPrices: {
            "1 Gram": 12.99,
            "3.5 Grams": 48.54,
            "7 Grams": 89.12,
            "1/2 Ounce": 176.53,
            "1 Ounce": 265.00
        },
        rating: 4.91,
        reviews: 12,
        image: "/GuruImg/imgi_200_Cherry-Sangria-web-FULL.png",
        inStock: true,
        salePercentage: null
    },
    {
        id: 552032,
        name: "Lizard Burger",
        category: "Hybrid",
        priceRange: "$12.99 - $265.00",
        weightPrices: {
            "1 Gram": 12.99,
            "3.5 Grams": 50.51,
            "7 Grams": 86.81,
            "1/2 Ounce": 171.13,
            "1 Ounce": 265.00
        },
        rating: 4.73,
        reviews: 23,
        image: "/GuruImg/imgi_211_Lizard-Burger-web-FULL.png",
        inStock: true,
        salePercentage: null
    },
    {
        id: 527119,
        name: "Triple Burger",
        category: "Hybrid",
        priceRange: "$12.99 - $265.00",
        weightPrices: {
            "1 Gram": 12.99,
            "3.5 Grams": 52.11,
            "7 Grams": 89.99,
            "1/2 Ounce": 175.89,
            "1 Ounce": 265.00
        },
        rating: 5.00,
        reviews: 11,
        image: "/GuruImg/imgi_222_Tripple-Burger-web-FULL.png",
        inStock: true,
        salePercentage: null
    },
    {
        id: 497102,
        name: "Scorpion Tears",
        category: "Hybrid",
        priceRange: "$12.99 - $265.00",
        weightPrices: {
            "1 Gram": 12.99,
            "3.5 Grams": 49.14,
            "7 Grams": 83.21,
            "1/2 Ounce": 159.93,
            "1 Ounce": 265.00
        },
        rating: 4.67,
        reviews: 10,
        image: "/GuruImg/imgi_233_Scorpion-Tears-web-FULL-9.29.25-1.png",
        inStock: true,
        salePercentage: null
    },
    {
        id: 403890,
        name: "Mule Fuel",
        category: "Hybrid",
        priceRange: "$12.99 - $265.00",
        weightPrices: {
            "1 Gram": 12.99,
            "3.5 Grams": 52.87,
            "7 Grams": 88.45,
            "1/2 Ounce": 174.98,
            "1 Ounce": 265.00
        },
        rating: 4.97,
        reviews: 38,
        image: "/GuruImg/imgi_244_Mule-Fuel-web-FULL-8.4.25.png",
        inStock: true,
        salePercentage: null
    },
    {
        id: 383610,
        name: "Purple Voodoo",
        category: "Hybrid",
        priceRange: "$12.99 - $265.00",
        weightPrices: {
            "1 Gram": 12.99,
            "3.5 Grams": 50.11,
            "7 Grams": 88.82,
            "1/2 Ounce": 169.11,
            "1 Ounce": 265.00
        },
        rating: 4.77,
        reviews: 32,
        image: "/GuruImg/imgi_253_Purple-Voodoo-Web.png",
        inStock: true,
        salePercentage: null
    },
    {
        id: 231030,
        name: "Gumbo",
        category: "Hybrid",
        priceRange: "$12.99 - $265.00",
        weightPrices: {
            "1 Gram": 12.99,
            "3.5 Grams": 49.99,
            "7 Grams": 87.12,
            "1/2 Ounce": 170.21,
            "1 Ounce": 265.00
        },
        rating: 4.33,
        reviews: 10,
        image: "/GuruImg/imgi_264_Gumbo-9.17.25-web-FULL.png",
        inStock: true,
        salePercentage: null
    },
    {
        id: 109246,
        name: "Lemon Cherry Gelato",
        category: "Hybrid",
        priceRange: "$40.00 - $265.00",
        weightPrices: {
            "3.5 Grams": 40.00,
            "7 Grams": 104.15,
            "1/2 Ounce": 186.25,
            "1 Ounce": 265.00
        },
        rating: 4.94,
        reviews: 67,
        image: "/GuruImg/imgi_275_LCG-web-FULL.png",
        inStock: true,
        salePercentage: null
    },
    {
        id: 646476,
        name: "Menage",
        category: "Hybrid",
        priceRange: "$12.99 - $135.00",
        weightPrices: {
            "1 Gram": 12.99,
            "3.5 Grams": 49.01,
            "7 Grams": 81.03,
            "1/2 Ounce": 135.00
        },
        rating: 3.80,
        reviews: 6,
        image: "/GuruImg/imgi_286_Mirage-web-FULL-1.png",
        inStock: true,
        salePercentage: null
    },
    {
        id: 634031,
        name: "Lemon Cherry Swirl #31",
        category: "Hybrid",
        priceRange: "$12.99 - $135.00",
        weightPrices: {
            "1 Gram": 12.99,
            "3.5 Grams": 48.11,
            "7 Grams": 80.13,
            "1/2 Ounce": 135.00
        },
        rating: 4.60,
        reviews: 36,
        image: "/GuruImg/imgi_297_Cherry-Swirl-web-FULL.png",
        inStock: true,
        salePercentage: null
    },
    {
        id: 734740,
        name: "Blue Cookies",
        category: "Indica",
        priceRange: "$12.99 - $70.00",
        weightPrices: {
            "1 Gram": 12.99,
            "3.5 Grams": 35.79,
            "7 Grams": 70.00
        },
        rating: 4.84,
        reviews: 20,
        image: "/GuruImg/imgi_308_Blue-Cookies-Web-FULL.png",
        inStock: true,
        salePercentage: null
    },
    {
        id: 719421,
        name: "Money Ball",
        category: "Indica",
        priceRange: "$70.00",
        weightPrices: {
            "7 Grams": 70.00
        },
        rating: 4.00,
        reviews: 2,
        image: "/GuruImg/imgi_319_Money-Ball-web-FULL.png",
        inStock: true,
        salePercentage: null
    },
    {
        id: 715596,
        name: "Cherry Gumbo",
        category: "Hybrid",
        priceRange: "$12.99 - $70.00",
        weightPrices: {
            "1 Gram": 12.99,
            "3.5 Grams": 36.01,
            "7 Grams": 70.00
        },
        rating: 4.50,
        reviews: 5,
        image: "/GuruImg/imgi_330_Cherry-Gumbo-web-FULL-9.29.25.png",
        inStock: true,
        salePercentage: null
    },
    {
        id: 708417,
        name: "Sweet Retreat",
        category: "Hybrid",
        priceRange: "$12.99 - $70.00",
        weightPrices: {
            "1 Gram": 12.99,
            "3.5 Grams": 35.15,
            "7 Grams": 70.00
        },
        rating: 5.00,
        reviews: 6,
        image: "/GuruImg/imgi_341_Sweet-Retreat-web-FULL.png",
        inStock: true,
        salePercentage: null
    },
    {
        id: 596638,
        name: "El Chivo",
        category: "Indica",
        priceRange: "$12.99 - $70.00",
        weightPrices: {
            "1 Gram": 12.99,
            "3.5 Grams": 34.99,
            "7 Grams": 70.00
        },
        rating: 4.76,
        reviews: 18,
        image: "/GuruImg/imgi_352_El-Chivo-web-FULL.png",
        inStock: true,
        salePercentage: null
    },
    {
        id: 567812,
        name: "Super Jack",
        category: "Sativa",
        priceRange: "$12.99 - $70.00",
        weightPrices: {
            "1 Gram": 12.99,
            "3.5 Grams": 35.89,
            "7 Grams": 70.00
        },
        rating: 4.64,
        reviews: 26,
        image: "/GuruImg/imgi_363_Super-Jam-web-FULL.png",
        inStock: true,
        salePercentage: null
    },
    {
        id: 475194,
        name: "Slurp Juice",
        category: "Hybrid",
        priceRange: "$12.99 - $70.00",
        weightPrices: {
            "1 Gram": 12.99,
            "3.5 Grams": 36.11,
            "7 Grams": 70.00
        },
        rating: 4.90,
        reviews: 32,
        image: "/GuruImg/imgi_373_Slurp-Juice-Full.png",
        inStock: true,
        salePercentage: null
    },
    {
        id: 407220,
        name: "High Octane Mintz",
        category: "Hybrid",
        priceRange: "$12.99 - $70.00",
        weightPrices: {
            "1 Gram": 12.99,
            "3.5 Grams": 35.01,
            "7 Grams": 70.00
        },
        rating: 4.47,
        reviews: 18,
        image: "/GuruImg/imgi_384_High-Octane-web-FULL.png",
        inStock: true,
        salePercentage: null
    },
    {
        id: 365122,
        name: "Gush Mintz",
        category: "Indica",
        priceRange: "$12.99 - $70.00",
        weightPrices: {
            "1 Gram": 12.99,
            "3.5 Grams": 35.55,
            "7 Grams": 70.00
        },
        rating: 4.79,
        reviews: 72,
        image: "/GuruImg/imgi_394_Gush-Mintz-WEB.png",
        inStock: true,
        salePercentage: null
    },
    {
        id: 332513,
        name: "Blueberry Muffin",
        category: "Indica",
        priceRange: "$12.99 - $70.00",
        weightPrices: {
            "1 Gram": 12.99,
            "3.5 Grams": 36.21,
            "7 Grams": 70.00
        },
        rating: 4.57,
        reviews: 8,
        image: "/GuruImg/imgi_404_Blueberry-Muffin-WEB.png",
        inStock: true,
        salePercentage: null
    },
    {
        id: 76829,
        name: "Gary Payton",
        category: "Hybrid",
        priceRange: "$12.99 - $70.00",
        weightPrices: {
            "1 Gram": 12.99,
            "3.5 Grams": 35.99,
            "7 Grams": 70.00
        },
        rating: 4.90,
        reviews: 68,
        image: "/GuruImg/imgi_414_Gary-Payton-v2-Strain-WEB.png",
        inStock: true,
        salePercentage: null
    },
    {
        id: 691200,
        name: "Gelato",
        category: "Hybrid",
        priceRange: "$40.00",
        weightPrices: {
            "3.5 Grams": 40.00
        },
        rating: 4.33,
        reviews: 10,
        image: "/GuruImg/imgi_425_Gelato-web-8.21.25.png",
        inStock: true,
        salePercentage: null
    },
    {
        id: 477039,
        name: "Grape Candy",
        category: "Indica",
        priceRange: "$12.99 - $40.00",
        weightPrices: {
            "1 Gram": 12.99,
            "3.5 Grams": 40.00
        },
        rating: 4.75,
        reviews: 25,
        image: "/GuruImg/imgi_436_Grape-Candy-web-9.5.25-FULL.png",
        inStock: true,
        salePercentage: null
    },
    {
        id: 307221,
        name: "Sample Pack - High Tolerance",
        category: "Hybrid",
        priceRange: "$35.00 - $40.00",
        weightPrices: {
            "3.5 Grams": 35.00,
            "7 Grams": 40.00
        },
        rating: 4.82,
        reviews: 139,
        image: "/GuruImg/imgi_447_SAMPLE-PACK-PreRollsFlower-WEB_Transparent.png",
        inStock: true,
        salePercentage: null
    },
    {
        id: 230396,
        name: "Hash Burger",
        category: "Hybrid",
        priceRange: "$12.99 - $40.00",
        weightPrices: {
            "1 Gram": 12.99,
            "3.5 Grams": 40.00
        },
        rating: 4.92,
        reviews: 65,
        image: "/GuruImg/imgi_457_Hash-Burger-Strain-WEB.png",
        inStock: true,
        salePercentage: null
    },
    {
        id: 632793,
        name: "Horgurtz",
        category: "Hybrid",
        priceRange: "$12.99",
        weightPrices: {
            "1 Gram": 12.99
        },
        rating: 4.75,
        reviews: 5,
        image: "/GuruImg/imgi_468_Hogwartz-web-FULL-1.png",
        inStock: true,
        salePercentage: null
    },
    {
        id: 596604,
        name: "Glitter Bomb",
        category: "Indica",
        priceRange: "$12.99",
        weightPrices: {
            "1 Gram": 12.99
        },
        rating: 4.81,
        reviews: 17,
        image: "/GuruImg/imgi_479_Glitter-Bomb-web-FULL.png",
        inStock: true,
        salePercentage: null
    },
    {
        id: 567803,
        name: "Super Buff Cherry",
        category: "Hybrid",
        priceRange: "$12.99",
        weightPrices: {
            "1 Gram": 12.99
        },
        rating: 4.67,
        reviews: 13,
        image: "/GuruImg/imgi_490_Sherbaeio-web-FULL.png",
        inStock: true,
        salePercentage: null
    }
];

export const concentratesProducts = [
    {
        id: 1,
        name: "Live Rosin Disposable",
        category: "Live Rosin",
        priceRange: "$60.00",
        potency: "62% - High/Medium Potency",
        strains: ["Hybrid", "Indica", "Sativa"],
        rating: 5,
        reviews: 98,
        image: "/Online/imgi_78_live-rosin-png.png",
        inStock: true,
        salePercentage: 18,
        weightPrices: {
            "1 Unit": 60.00
        }
    },
    {
        id: 2,
        name: "THCa Diamonds",
        category: "THCa Diamond",
        priceRange: "$40.00",
        potency: "High Potency",
        rating: 5,
        reviews: 46,
        image: "/Online/imgi_82_diamonds-png.png",
        inStock: true,
        salePercentage: null,
        weightPrices: {
            "1 Gram": 40.00
        }
    },
    {
        id: 3,
        name: "Hash",
        category: "Hash",
        priceRange: "$30.00",
        potency: "High Potency",
        rating: 5,
        reviews: 69,
        image: "/Online/imgi_104_hash-png.png",
        inStock: true,
        salePercentage: null,
        weightPrices: {
            "1 Gram": 30.00
        }
    },
    {
        id: 4,
        name: "CBD Isolate",
        category: "CBD Isolate",
        priceRange: "$6.00",
        potency: "Pure CBD",
        rating: 5,
        reviews: 0,
        image: "/Online/imgi_105_CBD-ISOLATE-9-scaled-150x150.jpg",
        inStock: true,
        salePercentage: null,
        weightPrices: {
            "1 Gram": 6.00
        }
    },
    {
        id: 5,
        name: "THC Cartridge",
        category: "THC Cartridge",
        priceRange: "$35.00",
        potency: "Low Potency",
        rating: 5,
        reviews: 47,
        image: "/Online/imgi_93_THCA-Cart.png",
        inStock: true,
        salePercentage: null,
        weightPrices: {
            "1 Unit": 35.00
        }
    }
];

export const ediblesProducts = [
    {
        id: 1,
        name: "60mg Gummies",
        category: "Gummy",
        priceRange: "$45.00",
        potency: "High Potency",
        rating: 5,
        reviews: 0,
        image: "/Edibles/imgi_90_60MG-Gummies-Top-Down.png",
        inStock: true,
        salePercentage: null,
        weightPrices: {
            "1 Pack": 45.00
        }
    },
    {
        id: 2,
        name: "Sample Pack",
        category: "Pre-Roll",
        priceRange: "$35.00 - $40.00",
        potency: "High Potency",
        strains: ["Hybrid", "Indica", "Sativa"],
        rating: 5,
        reviews: 0,
        image: "/Edibles/imgi_107_SAMPLE-PACK-PreRollsFlower-WEB_Transparent.png",
        inStock: true,
        salePercentage: null,
        weightPrices: {
            "Standard Pack": 35.00,
            "High Tolerance Pack": 40.00
        }
    },
    {
        id: 3,
        name: "1:1 15mg + 15mg CBG Gummies",
        category: "Gummy",
        priceRange: "$25.00 - $35.00",
        potency: "High Potency",
        rating: 5,
        reviews: 0,
        image: "/Edibles/imgi_109_Guava-Gummy-Top-Down-1-1-1024x1024.png",
        inStock: true,
        salePercentage: null,
        weightPrices: {
            "Small Pack": 25.00,
            "Large Pack": 35.00
        }
    },
    {
        id: 4,
        name: "10mg Gummies",
        category: "Gummy",
        priceRange: "$20.00 - $35.00",
        potency: "Low Potency",
        strains: ["Hybrid", "Sativa"],
        rating: 5,
        reviews: 0,
        image: "/Edibles/imgi_119_Untitled-design-18-1024x1024.png",
        inStock: true,
        salePercentage: null,
        weightPrices: {
            "Small Pack": 20.00,
            "Large Pack": 35.00
        }
    },
    {
        id: 5,
        name: "30mg Gummies",
        category: "Gummy",
        priceRange: "$20.00 - $35.00",
        potency: "High Potency",
        rating: 5,
        reviews: 0,
        image: "/Edibles/imgi_129_Untitled-design-3-1024x1024.png",
        inStock: true,
        salePercentage: null,
        weightPrices: {
            "Small Pack": 20.00,
            "Large Pack": 35.00
        }
    },
    {
        id: 6,
        name: "Zaza Brownie",
        category: "Brownie",
        priceRange: "$12.00",
        potency: "High Potency",
        rating: 5,
        reviews: 0,
        image: "/Edibles/imgi_148_Zaza-Brownie-Product-WEB-2.png",
        inStock: true,
        salePercentage: null,
        weightPrices: {
            "1 Unit": 12.00
        }
    },
    {
        id: 7,
        name: "Zaza Cookie",
        category: "Cookie",
        priceRange: "$12.00",
        potency: "High Potency",
        rating: 5,
        reviews: 0,
        image: "/Edibles/imgi_158_Stoned-Chunky-Web-ONE.png",
        inStock: true,
        salePercentage: null,
        weightPrices: {
            "1 Unit": 12.00
        }
    },
    {
        id: 8,
        name: "Pink Lemonade",
        category: "Drink",
        priceRange: "$5.00 - $8.00",
        potency: "30MG | 60MG | 90MG | 150MG",
        rating: 5,
        reviews: 0,
        image: "/Edibles/imgi_168_Pink-Lemonade-WEB.png",
        inStock: true,
        salePercentage: null,
        weightPrices: {
            "30MG": 5.00,
            "150MG": 8.00
        }
    },
    {
        id: 9,
        name: "Fruit Punch",
        category: "Drink",
        priceRange: "$5.00 - $8.00",
        potency: "10MG | 30MG | 60MG | 90MG | 150MG",
        rating: 5,
        reviews: 0,
        image: "/Edibles/imgi_178_Fruit-Punch-Product-WEB-1.png",
        inStock: true,
        salePercentage: null,
        weightPrices: {
            "10MG": 5.00,
            "150MG": 8.00
        }
    },
    {
        id: 10,
        name: "Lemonade",
        category: "Drink",
        priceRange: "$5.00 - $8.00",
        potency: "30MG | 60MG | 90MG | 150MG",
        rating: 5,
        reviews: 0,
        image: "/Edibles/imgi_188_Lemonade-Product-WEB.png",
        inStock: true,
        salePercentage: null,
        weightPrices: {
            "30MG": 5.00,
            "150MG": 8.00
        }
    },
    {
        id: 11,
        name: "Iced Tea",
        category: "Drink",
        priceRange: "$5.00 - $8.00",
        potency: "10MG | 30MG | 60MG | 90MG | 150MG",
        rating: 5,
        reviews: 0,
        image: "/Edibles/imgi_198_Iced-Teas-Main-Product-WEB.png",
        inStock: true,
        salePercentage: null,
        weightPrices: {
            "10MG": 5.00,
            "150MG": 8.00
        }
    },
    {
        id: 12,
        name: "Almond Crunch Bar Chocolate | 500mg CBD | Keo Edibles",
        category: "Chocolate",
        priceRange: "$22.00",
        potency: "500mg CBD",
        rating: 4.8,
        reviews: 15,
        image: "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_15_Almond-crunch-chocolate-bar-500x500.jpg",
        inStock: true,
        salePercentage: null,
        weightPrices: { "1 Unit": 22.00 }
    },
    {
        "id": 13,
        "name": "Choc’lit Crunch Bar Chocolate | 500mg CBD | Keo Edibles",
        "category": "Chocolate",
        "priceRange": "$22.00",
        "potency": "500mg CBD",
        "rating": 4.7,
        "reviews": 12,
        "image": "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_16_KEO-CBD-CHOCOLATE-all-500x500.jpg",
        "inStock": true,
        "salePercentage": null,
        "weightPrices": { "1 Unit": 22.00 }
    },
    {
        "id": 14,
        "name": "Cookies ’N’ Crème Chocolate | 500mg CBD | Keo Edibles",
        "category": "Chocolate",
        "priceRange": "$22.00",
        "potency": "500mg CBD",
        "rating": 4.9,
        "reviews": 25,
        "image": "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_17_Cookies-n-cream-chocolate-bars-1-500x500.jpg",
        "inStock": true,
        "salePercentage": null,
        "weightPrices": { "1 Unit": 22.00 }
    },
    {
        "id": 15,
        "name": "Fruity Pebbles White Chocolate | 500mg CBD | Keo Edibles",
        "category": "Chocolate",
        "priceRange": "$22.00",
        "potency": "500mg CBD",
        "rating": 4.8,
        "reviews": 20,
        "image": "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_18_Fruity-pebbles-chocolate-bar-500x500.jpg",
        "inStock": true,
        "salePercentage": null,
        "weightPrices": { "1 Unit": 22.00 }
    },
    {
        "id": 16,
        "name": "THC-Infused Beef Jerky – Bold Flavor Meets Relaxation",
        "category": "Jerky",
        "priceRange": "$20.00",
        "potency": "High Potency",
        "rating": 4.7,
        "reviews": 30,
        "image": "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_19_beef-jerky--500x500.jpg",
        "inStock": true,
        "salePercentage": null,
        "weightPrices": { "1 Unit": 20.00 }
    },
    {
        "id": 17,
        "name": "Keo’Pops Lollipops | 40mg THC | Keo Edibles",
        "category": "Candy",
        "priceRange": "$5.00",
        "potency": "40mg THC",
        "rating": 4.5,
        "reviews": 40,
        "image": "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_20_keo-3-lollipops-design-2-edited-500x500.jpg",
        "inStock": true,
        "salePercentage": null,
        "weightPrices": { "1 Unit": 5.00 }
    },
    {
        "id": 18,
        "name": "S’mores Cookie Brownies | 400mg THC | Keo Edibles",
        "category": "Brownie",
        "priceRange": "$22.00",
        "potency": "400mg THC",
        "rating": 4.9,
        "reviews": 28,
        "image": "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_21_KEO_cookie_new5-500x500.jpg",
        "inStock": true,
        "salePercentage": null,
        "weightPrices": { "1 Unit": 22.00 }
    },
    {
        "id": 19,
        "name": "1:1 Black Cherry ZzZ Bomb Indica | 1:1 40MG | Twisted Extracts",
        "category": "Gummy",
        "priceRange": "$12.00",
        "potency": "1:1 40MG",
        "rating": 4.64,
        "reviews": 98,
        "image": "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_22_black-cherry-thc-cbd-1-1-twisted-500x500.jpg",
        "inStock": true,
        "salePercentage": null,
        "weightPrices": { "1 Unit": 12.00 }
    },
    {
        "id": 20,
        "name": "1:1 Cara Melts | Indica | 40mg CBD:THC | Twisted Extracts",
        "category": "Caramel",
        "priceRange": "$13.00",
        "potency": "40mg CBD:THC",
        "rating": 4.68,
        "reviews": 57,
        "image": "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_23_TwistedCaraIndica1to1-500x500.jpg",
        "inStock": true,
        "salePercentage": null,
        "weightPrices": { "1 Unit": 13.00 }
    },
    {
        "id": 21,
        "name": "1:1 Cara Melts | Sativa | 40mg CBD:THC | Twisted Extracts",
        "category": "Caramel",
        "priceRange": "$13.00",
        "potency": "40mg CBD:THC",
        "rating": 4.76,
        "reviews": 38,
        "image": "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_24_TwistedCaraSativa1to1-500x500.jpg",
        "inStock": true,
        "salePercentage": 15,
        "weightPrices": { "1 Unit": 13.00 }
    },
    {
        "id": 22,
        "name": "1:1 Halley’s Comet Grape Jelly Bomb | Sativa | 1:1 40MG | Twisted Extracts",
        "category": "Gummy",
        "priceRange": "$12.00",
        "potency": "1:1 40MG",
        "rating": 4.82,
        "reviews": 51,
        "image": "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_25_TwistedExtractsGrapeHalleysNEW-500x500.jpg",
        "inStock": true,
        "salePercentage": 15,
        "weightPrices": { "1 Unit": 12.00 }
    },
    {
        "id": 23,
        "name": "1:1 Halley’s Comet Watermelon Jelly Bomb | Sativa | 1:1 40MG | Twisted Extracts",
        "category": "Gummy",
        "priceRange": "$12.00",
        "potency": "1:1 40MG",
        "rating": 4.88,
        "reviews": 49,
        "image": "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_26_TwistedExtractsWatermelonHalleysNEW-500x500.jpg",
        "inStock": true,
        "salePercentage": null,
        "weightPrices": { "1 Unit": 12.00 }
    },
    {
        "id": 24,
        "name": "1:1 Mango Jelly Bomb | Sativa | 1:1 40MG | Twisted Extracts",
        "category": "Gummy",
        "priceRange": "$12.00",
        "potency": "1:1 40MG",
        "rating": 4.73,
        "reviews": 71,
        "image": "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_27_1-1-mango-sativa-jelly-twisted-500x500.jpg",
        "inStock": true,
        "salePercentage": null,
        "weightPrices": { "1 Unit": 12.00 }
    },
    {
        "id": 25,
        "name": "1:1 Orange Jelly Bomb | Sativa | 1:1 40MG | Twisted Extracts",
        "category": "Gummy",
        "priceRange": "$12.00",
        "potency": "1:1 40MG",
        "rating": 4.73,
        "reviews": 56,
        "image": "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_28_1-1-Orange-sativa-jelly-twisted-500x500.jpg",
        "inStock": true,
        "salePercentage": 10,
        "weightPrices": { "1 Unit": 12.00 }
    },
    {
        "id": 26,
        "name": "1:1 THC:CBD Tincture Drops | Indica | Keo Edibles",
        "category": "Tincture",
        "priceRange": "$36.00 - $90.00",
        "potency": "Varies",
        "rating": 4.85,
        "reviews": 53,
        "image": "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_29_buy-cbd-thc-2000mg-tincture-500x500.jpg",
        "inStock": true,
        "salePercentage": null,
        "weightPrices": { "Small": 36.00, "Large": 90.00 }
    },
    {
        "id": 27,
        "name": "1:1 Tincture Drops Orange | Indica | 600mg CBD & 600mg THC | Twisted Extracts",
        "category": "Tincture",
        "priceRange": "$90.00",
        "potency": "600mg CBD & 600mg THC",
        "rating": 5.00,
        "reviews": 9,
        "image": "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_30_TE-EXTRASTRENGTH-1-1-INDICA-500x500.jpg",
        "inStock": true,
        "salePercentage": null,
        "weightPrices": { "1 Unit": 90.00 }
    },
    {
        "id": 28,
        "name": "1:1 Tincture Drops Orange | Sativa | 600mg CBD & 600mg THC | Twisted Extracts",
        "category": "Tincture",
        "priceRange": "$90.00",
        "potency": "600mg CBD & 600mg THC",
        "rating": 4.89,
        "reviews": 18,
        "image": "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_31_TE-EXTRASTRENGTH-1-1-SATIVA-500x500.jpg",
        "inStock": true,
        "salePercentage": null,
        "weightPrices": { "1 Unit": 90.00 }
    },
    {
        "id": 29,
        "name": "1:1 Tincture Drops | Sativa | 150mg CBD & 150mg THC | Twisted Extracts",
        "category": "Tincture",
        "priceRange": "$50.00",
        "potency": "150mg CBD & 150mg THC",
        "rating": 4.97,
        "reviews": 37,
        "image": "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_32_TE_Drops_Sativa1to1combo-500x500.jpg",
        "inStock": true,
        "salePercentage": null,
        "weightPrices": { "1 Unit": 50.00 }
    },
    {
        "id": 30,
        "name": "3:1 Tincture Drops | Sativa | 225mg CBD & 75mg THC | Twisted Extracts",
        "category": "Tincture",
        "priceRange": "$50.00",
        "potency": "225mg CBD & 75mg THC",
        "rating": 4.97,
        "reviews": 30,
        "image": "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_33_TE_Drops_Sativa3to1combo-500x500.jpg",
        "inStock": true,
        "salePercentage": 23,
        "weightPrices": { "1 Unit": 50.00 }
    },
    {
        "id": 31,
        "name": "30 CBD Oil Tincture Drops | 900mg CBD | Twisted Extracts",
        "category": "Tincture",
        "priceRange": "$70.00",
        "potency": "900mg CBD",
        "rating": 5.00,
        "reviews": 13,
        "image": "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_34_TE_Drops_CBD30combo-500x500.jpg",
        "inStock": true,
        "salePercentage": null,
        "weightPrices": { "1 Unit": 70.00 }
    },
    {
        "id": 32,
        "name": "50 CBD Oil Tincture Drops | 1500mg CBD | Twisted Extracts",
        "category": "Tincture",
        "priceRange": "$85.00",
        "potency": "1500mg CBD",
        "rating": 5.00,
        "reviews": 4,
        "image": "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_8_CBD-50-Orange-Flavour-Drops-30ml-scaled-1-600x600-1-500x500.jpg",
        "inStock": true,
        "salePercentage": 6,
        "weightPrices": { "1 Unit": 85.00 }
    },
    {
        "id": 33,
        "name": "Apple & Watermelon Puzzle Gummies | 240mg | Keo Edibles",
        "category": "Gummy",
        "priceRange": "$12.00",
        "potency": "240mg",
        "rating": 4.70,
        "reviews": 129,
        "image": "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_35_watermelon1-scaled-500x500.jpg",
        "inStock": true,
        "salePercentage": 20,
        "weightPrices": { "1 Unit": 12.00 }
    },
    {
        "id": 34,
        "name": "Apple Jelly Bomb | Sativa | 80mg THC | Twisted Extracts",
        "category": "Gummy",
        "priceRange": "$12.00",
        "potency": "80mg THC",
        "rating": 4.70,
        "reviews": 73,
        "image": "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_36_apple-sativa-jelly-bomb-twisted-extracts-500x500.jpg",
        "inStock": true,
        "salePercentage": null,
        "weightPrices": { "1 Unit": 12.00 }
    },
    {
        "id": 35,
        "name": "Aurora Milk Chocolate | 500mg | Keo Edibles",
        "category": "Chocolate",
        "priceRange": "$26.00",
        "potency": "500mg",
        "rating": 4.82,
        "reviews": 33,
        "image": "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_37_buy-keo-chocolate-aurora-milk-chocolate-copy-500x500.jpg",
        "inStock": true,
        "salePercentage": 35,
        "weightPrices": { "1 Unit": 26.00 }
    },
    {
        "id": 36,
        "name": "Black Cherry Indica ZzZ Bomb | 80mg THC | Twisted Extracts",
        "category": "Gummy",
        "priceRange": "$12.00",
        "potency": "80mg THC",
        "rating": 4.78,
        "reviews": 90,
        "image": "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_38_black-cherry-indica-cannabis-edibles-500x500.jpg",
        "inStock": true,
        "salePercentage": null,
        "weightPrices": { "1 Unit": 12.00 }
    },
    {
        "id": 37,
        "name": "Salted Cara Melts | 300mg CBD | Twisted Extracts",
        "category": "Caramel",
        "priceRange": "$30.00",
        "potency": "300mg CBD",
        "rating": 5.00,
        "reviews": 9,
        "image": "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_39_SALTEDCaramelts_CBD-500x500.jpg",
        "inStock": true,
        "salePercentage": null,
        "weightPrices": { "1 Unit": 30.00 }
    },
    {
        "id": 38,
        "name": "Cara Melts | Indica | 80mg THC | Twisted Extracts",
        "category": "Caramel",
        "priceRange": "$13.00",
        "potency": "80mg THC",
        "rating": 4.75,
        "reviews": 44,
        "image": "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_40_cara-melts-indica-caramel-500x500.jpg",
        "inStock": true,
        "salePercentage": null,
        "weightPrices": { "1 Unit": 13.00 }
    },
    {
        "id": 39,
        "name": "Cara Melts | Sativa | 80mg THC | Twisted Extracts",
        "category": "Caramel",
        "priceRange": "$13.00",
        "potency": "80mg THC",
        "rating": 4.63,
        "reviews": 48,
        "image": "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_41_TwistedCaraSativa-1-500x500.jpg",
        "inStock": true,
        "salePercentage": null,
        "weightPrices": { "1 Unit": 13.00 }
    },
    {
        "id": 40,
        "name": "Salted Cara Melts | Sativa | 300mg THC | Twisted Extracts",
        "category": "Caramel",
        "priceRange": "$30.00",
        "potency": "300mg THC",
        "rating": 5.00,
        "reviews": 5,
        "image": "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_42_SALTEDCaramelts_Sativa-500x500.jpg",
        "inStock": true,
        "salePercentage": 17,
        "weightPrices": { "1 Unit": 30.00 }
    },
    {
        "id": 41,
        "name": "CBD Oil Tinctures | Keo Edibles",
        "category": "Tincture",
        "priceRange": "$50.00 - $80.00",
        "potency": "Varies",
        "rating": 4.75,
        "reviews": 84,
        "image": "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_43_buy-cbd-2000mg-tincture-500x500.jpg",
        "inStock": true,
        "salePercentage": 20,
        "weightPrices": { "Small": 50.00, "Large": 80.00 }
    },
    {
        "id": 42,
        "name": "Cherry & Cola Puzzle Gummies | 240mg | Keo Edibles",
        "category": "Gummy",
        "priceRange": "$12.00",
        "potency": "240mg",
        "rating": 4.53,
        "reviews": 107,
        "image": "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_44_WhatsApp-Image-2020-09-22-at-1.55.18-PM-500x500.jpg",
        "inStock": true,
        "salePercentage": 20,
        "weightPrices": { "1 Unit": 12.00 }
    },
    {
        "id": 43,
        "name": "Cherry Jelly Bomb | Sativa | 80mg THC | Twisted Extracts",
        "category": "Gummy",
        "priceRange": "$12.00",
        "potency": "80mg THC",
        "rating": 4.73,
        "reviews": 92,
        "image": "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_45_cherry-sativa-twisted-extracts-500x500.jpg",
        "inStock": true,
        "salePercentage": null,
        "weightPrices": { "1 Unit": 12.00 }
    },
    {
        "id": 44,
        "name": "Cookies ’N’ Crème Chocolate | 500mg | Keo Edibles",
        "category": "Chocolate",
        "priceRange": "$26.00",
        "potency": "500mg",
        "rating": 4.88,
        "reviews": 32,
        "image": "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_46_buy-keo-chocolate-cookie-and-cream-1-500x500.jpg",
        "inStock": true,
        "salePercentage": 35,
        "weightPrices": { "1 Unit": 26.00 }
    },
    {
        "id": 45,
        "name": "Fruit Punch Indica ZzZ Bomb | 80mg THC | Twisted Extracts",
        "category": "Gummy",
        "priceRange": "$12.00",
        "potency": "80mg THC",
        "rating": 5.00,
        "reviews": 12,
        "image": "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_47_fruit-punch-jelly-bomb-thc--500x500.jpg",
        "inStock": true,
        "salePercentage": null,
        "weightPrices": { "1 Unit": 12.00 }
    },
    {
        "id": 46,
        "name": "Green Tea Crisp Chocolate | 500 mg | Keo Edibles",
        "category": "Chocolate",
        "priceRange": "$25.00",
        "potency": "500mg",
        "rating": 5.00,
        "reviews": 21,
        "image": "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_48_buy-keo-chocolate-green-tea-crisp-copy-1-500x500.jpg",
        "inStock": true,
        "salePercentage": 38,
        "weightPrices": { "1 Unit": 25.00 }
    },
    {
        "id": 47,
        "name": "Hawaiian Island & Blue Raspberry Puzzle CBD Gummies | 500mg | Keo Edibles",
        "category": "Gummy",
        "priceRange": "$14.00",
        "potency": "500mg",
        "rating": 4.96,
        "reviews": 53,
        "image": "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_49_bluekeo-500x500.jpg",
        "inStock": true,
        "salePercentage": null,
        "weightPrices": { "1 Unit": 14.00 }
    },
    {
        "id": 48,
        "name": "Lychee & Kiwi Puzzle CBD Gummies | 240mg | Keo Edibles",
        "category": "Gummy",
        "priceRange": "$11.00",
        "potency": "240mg",
        "rating": 4.73,
        "reviews": 88,
        "image": "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_50_Keo-kiwifruit-lychees-edibles-scaled-500x500.jpg",
        "inStock": true,
        "salePercentage": 27,
        "weightPrices": { "1 Unit": 11.00 }
    },
    {
        "id": 49,
        "name": "Macadamia Nut White Chocolate THC Cookie | 400mg THC | Keo Edibles",
        "category": "Cookie",
        "priceRange": "$24.00",
        "potency": "400mg THC",
        "rating": 4.94,
        "reviews": 35,
        "image": "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_51_Keo-cookie-macadamia-nut-white-chocolate-cookies-copy-500x500.jpg",
        "inStock": true,
        "salePercentage": 20,
        "weightPrices": { "1 Unit": 24.00 }
    },
    {
        "id": 50,
        "name": "Mango and Blue Raspberry Puzzle Gummies | 240mg | Keo Edibles",
        "category": "Gummy",
        "priceRange": "$12.00",
        "potency": "240mg",
        "rating": 4.59,
        "reviews": 96,
        "image": "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_52_WhatsApp-Image-2020-09-22-at-1.55.18-PM-1-500x500.jpg",
        "inStock": true,
        "salePercentage": 20,
        "weightPrices": { "1 Unit": 12.00 }
    },
    {
        "id": 51,
        "name": "Mango Jelly Bomb | Sativa | 80mg THC | Twisted Extracts",
        "category": "Gummy",
        "priceRange": "$12.00",
        "potency": "80mg THC",
        "rating": 4.55,
        "reviews": 67,
        "image": "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_53_mango-sativa-twisted-cannabis-edible-500x500.jpg",
        "inStock": true,
        "salePercentage": null,
        "weightPrices": { "1 Unit": 12.00 }
    },
    {
        "id": 52,
        "name": "Orange Jelly Bomb | Sativa | 80mg THC | Twisted Extracts",
        "category": "Gummy",
        "priceRange": "$12.00",
        "potency": "80mg THC",
        "rating": 4.80,
        "reviews": 65,
        "image": "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_54_orange-jelly-bomb-sativa-twisted-500x500.jpg",
        "inStock": true,
        "salePercentage": 20,
        "weightPrices": { "1 Unit": 12.00 }
    },
    {
        "id": 53,
        "name": "Peach & Grape Puzzle Gummies | 240mg | Keo Edibles",
        "category": "Gummy",
        "priceRange": "$12.00",
        "potency": "240mg",
        "rating": 4.54,
        "reviews": 96,
        "image": "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_55_WhatsApp-Image-2020-09-22-at-1.55.18-PM-2-500x500.jpg",
        "inStock": true,
        "salePercentage": 20,
        "weightPrices": { "1 Unit": 12.00 }
    },
    {
        "id": 54,
        "name": "Peach Jelly Bomb | 80mg CBD | Twisted Extracts",
        "category": "Gummy",
        "priceRange": "$13.00",
        "potency": "80mg CBD",
        "rating": 4.86,
        "reviews": 85,
        "image": "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_56_peach-cbd-jelly-twisted-extracts-500x500.jpg",
        "inStock": true,
        "salePercentage": null,
        "weightPrices": { "1 Unit": 13.00 }
    },
    {
        "id": 55,
        "name": "Pet CBD Oil Tinctures | 250mg CBD | Keo Edibles",
        "category": "Tincture",
        "priceRange": "$40.00",
        "potency": "250mg CBD",
        "rating": 5.00,
        "reviews": 29,
        "image": "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_57_buy-keo-tincture-for-small-pets-copy-500x500.jpg",
        "inStock": true,
        "salePercentage": 12,
        "weightPrices": { "1 Unit": 40.00 }
    },
    {
        "id": 56,
        "name": "Pet CBD Oil Tinctures | 500mg CBD | Keo Edibles",
        "category": "Tincture",
        "priceRange": "$50.00",
        "potency": "500mg CBD",
        "rating": 4.97,
        "reviews": 33,
        "image": "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_58_buy-keo-tincture-for-large-pets-copy-500x500.jpg",
        "inStock": true,
        "salePercentage": 10,
        "weightPrices": { "1 Unit": 50.00 }
    },
    {
        "id": 57,
        "name": "Pineapple Jelly Bomb | 80mg CBD | Twisted Extracts",
        "category": "Gummy",
        "priceRange": "$13.00",
        "potency": "80mg CBD",
        "rating": 4.81,
        "reviews": 63,
        "image": "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_59_pineapple-cbd-jelly-twisted-extracts-500x500.jpg",
        "inStock": true,
        "salePercentage": null,
        "weightPrices": { "1 Unit": 13.00 }
    },
    {
        "id": 58,
        "name": "Cherry Fruit Gummies | Extreme Strength | Sativa | 1600mg THC | High Dose",
        "category": "Gummy",
        "priceRange": "$70.00",
        "potency": "1600mg THC",
        "rating": 5.00,
        "reviews": 4,
        "image": "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_60_HighDoseMaster1600Sativa-1-500x500.jpg",
        "inStock": true,
        "salePercentage": null,
        "weightPrices": { "1 Unit": 70.00 }
    },
    {
        "id": 59,
        "name": "Cherry Fruit Gummies | Super Strength | Sativa | 800mg THC | High Dose",
        "category": "Gummy",
        "priceRange": "$40.00",
        "potency": "800mg THC",
        "rating": 5.00,
        "reviews": 5,
        "image": "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_61_HighDoseMaster800Sativa-500x500.jpg",
        "inStock": true,
        "salePercentage": null,
        "weightPrices": { "1 Unit": 40.00 }
    },
    {
        "id": 60,
        "name": "Indica Jelly Bites | Berry Mix | 100mg THC | Twisted Extracts",
        "category": "Gummy",
        "priceRange": "$15.00",
        "potency": "100mg THC",
        "rating": 5.00,
        "reviews": 3,
        "image": "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_62_JellyBite_100mg_INDICA-1-500x500.jpg",
        "inStock": true,
        "salePercentage": null,
        "weightPrices": { "1 Unit": 15.00 }
    },
    {
        "id": 61,
        "name": "Indica Jelly Bites | Berry Mix | 500mg THC | Twisted Extracts",
        "category": "Gummy",
        "priceRange": "$30.00",
        "potency": "500mg THC",
        "rating": 4.60,
        "reviews": 5,
        "image": "/Cannabis Edibles - Gummies, Chocolates, & More _ Bulk Buddy/imgi_63_JellyBite_500mg_Indica-500x500.jpg",
        "inStock": true,
        "salePercentage": null,
        "weightPrices": { "1 Unit": 30.00 }
    }
];

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mt-8">
      <ul className="flex justify-center items-center space-x-2">
        <li>
          <Button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
            Previous
          </Button>
        </li>
        {pageNumbers.map(number => (
          <li key={number}>
            <Button
              onClick={() => paginate(number)}
              variant={currentPage === number ? 'default' : 'outline'}
            >
              {number}
            </Button>
          </li>
        ))}
        <li>
          <Button onClick={() => paginate(currentPage + 1)} disabled={currentPage === pageNumbers.length}>
            Next
          </Button>
        </li>
      </ul>
    </nav>
  );
};

const ProductCategory = () => {
  const { category } = useParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(35);

  const products =
    category === 'concentrates' ? concentratesProducts :
    category === 'edibles' ? ediblesProducts :
    cannabisProducts;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const categoryTitle =
    category === 'concentrates' ? 'Cannabis Concentrates' :
    category === 'edibles' ? 'Cannabis Edibles' :
    'Cannabis Flower';

  const categoryDescription =
    category === 'concentrates'
      ? "Explore our top-tier range of cannabis concentrates in Phoenix Arizona, perfect for users seeking high potency and fast-acting effects. Chronic Guru brings you expertly crafted shatter, budder, hash, and more—all lab-tested and ready to elevate your experience."
    : category === 'edibles'
      ? "Enjoy a delicious twist on cannabis with our wide selection of cannabis edibles in Phoenix Arizona. From THC gummies to chocolates and baked treats, Chronic Guru has everything you need to medicate discreetly and effectively."
      : "Discover the largest selection of cannabis strains in Phoenix Arizona at Chronic Guru. Our extensive range includes Indica, Sativa, & Hybrid strains, ensuring you find the perfect match for your needs.";

  const handleProductClick = (product: any) => {
    const productName = product.name;
    const slug = productName
      .toLowerCase()
      .replace(/[|]/g, '') // Remove pipes first
      .replace(/[^\w\s-]+/g, '') // Remove special characters except spaces and dashes
      .replace(/\s+/g, '-') // Replace spaces with dashes
      .replace(/-+/g, '-') // Collapse multiple dashes
      .trim();
    navigate(`/product/${slug}`, { state: { product: { ...product, menuCategory: category } } });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Notice Banner */}
      <div className="bg-red-600 text-white py-2 px-4 text-center text-sm">
        <strong>Notice:</strong> Notice: Due to an unexpected Phoenix Arizona Post strike, all shipments will now be sent via UPS. Please note that we are unable to deliver to PO Boxes or rural addresses at this time. UPS shipping is a flat rate of $50, with <strong>Free Shipping on orders over $300.</strong> Thank you for your understanding and continued support. If you have any questions or concerns, please don't hesitate to contact us.
      </div>

      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex gap-8">
            {/* Sidebar Filters */}
            <aside className="w-64 flex-shrink-0">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="font-semibold text-foreground mb-4">Product Status</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="in-stock" defaultChecked />
                    <label htmlFor="in-stock" className="text-sm text-foreground">In Stock</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="on-sale" />
                    <label htmlFor="on-sale" className="text-sm text-foreground">On Sale</label>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Promotional Banner */}
              <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 mb-8 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="text-sm text-purple-600 font-medium mb-2">Contact Us</div>
                  <h2 className="text-2xl font-bold text-purple-800 mb-2">
                    First Time Ordering? Use Bulk5 for 5% OFF!
                  </h2>
                  <p className="text-purple-700 text-sm mb-4">
                    Attention New Customers: There's a $500 limit on your account.<br/>
                    To get it lifted, please email us with your Government-issued ID<br/>
                    with picture.
                  </p>
                  <Button className="bg-purple-600 text-white hover:bg-purple-700">
                    Contact Us →
                  </Button>
                </div>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <div className="w-24 h-24 bg-purple-200 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🌿</span>
                  </div>
                </div>
              </div>

              {/* Product Controls */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">
                    Showing all {products.length} results
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-foreground">Sort:</span>
                    <Select defaultValue="default">
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Default sorting" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="default">Default sorting</SelectItem>
                        <SelectItem value="price-low">Price: Low to High</SelectItem>
                        <SelectItem value="price-high">Price: High to Low</SelectItem>
                        <SelectItem value="name">Name</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-foreground">Show:</span>
                    <Select defaultValue={String(itemsPerPage)} onValueChange={(value) => setItemsPerPage(Number(value))}>
                      <SelectTrigger className="w-24">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="12">12 items</SelectItem>
                        <SelectItem value="24">24 items</SelectItem>
                        <SelectItem value="35">35 items</SelectItem>
                        <SelectItem value="50">50 items</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex border rounded">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'ghost'}
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => setViewMode('grid')}
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'ghost'}
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => setViewMode('list')}
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Product Grid and Pagination */}
              <div>
                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                  {currentProducts.map((product) => (
                    <div
                      key={product.id}
                      className="group relative bg-card rounded-lg border hover:shadow-lg transition-all duration-300 overflow-hidden"
                    >
                      {/* Wishlist Button */}
                      <button className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                        <Heart className="w-4 h-4" />
                      </button>

                      {/* Sale Badge */}
                      {product.salePercentage && (
                        <div className="absolute top-3 left-3 z-10 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                          {product.salePercentage}%
                        </div>
                      )}

                      {/* Product Image */}
                      <div className="relative overflow-hidden bg-gray-50 cursor-pointer" onClick={() => handleProductClick(product)}>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="p-4">
                        {/* Category Badge */}
                        {product.category && (
                          <div className="mb-2">
                            <span className={`inline-block px-3 py-1 rounded text-xs font-medium text-white ${
                              product.category === 'Indica' ? 'bg-purple-600' :
                              product.category === 'Sativa' ? 'bg-orange-500' :
                              product.category === 'Hybrid' ? 'bg-green-600' :
                              product.category === 'Budder' ? 'bg-blue-600' :
                              product.category === 'Shatter' ? 'bg-amber-600' :
                              product.category === 'Live Resin' ? 'bg-yellow-600' :
                              product.category === 'Hash' ? 'bg-emerald-600' :
                              product.category === 'Kief' ? 'bg-lime-600' :
                              product.category === 'THCa Diamond' ? 'bg-cyan-600' :
                              product.category === 'Distillate' ? 'bg-rose-600' :
                              product.category === 'Chocolate' ? 'bg-amber-800' :
                              product.category === 'Gummy' ? 'bg-pink-500' :
                              product.category === 'Candy' ? 'bg-fuchsia-500' :
                              product.category === 'Tincture' ? 'bg-teal-600' :
                              product.category === 'Brownie' ? 'bg-brown-600' :
                              product.category === 'Jerky' ? 'bg-red-700' :
                              product.category === 'Caramel' ? 'bg-yellow-700' :
                              'bg-gray-500'
                            }`}>
                              {product.category}
                            </span>
                          </div>
                        )}

                        {/* Product Name */}
                        <h3
                          className="font-medium text-card-foreground mb-2 text-sm leading-tight line-clamp-2 cursor-pointer hover:text-primary"
                          onClick={() => handleProductClick(product)}
                        >
                          {product.name}
                        </h3>

                        {/* Rating */}
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < Math.floor(product.rating)
                                  ? "fill-yellow-400 text-yellow-400"
                                  : i < product.rating
                                  ? "fill-yellow-400/50 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                          <span className="text-xs text-muted-foreground ml-1">
                            {product.reviews}
                          </span>
                        </div>

                        {/* Price */}
                        <div className="mb-3">
                          <span className="font-bold text-foreground text-sm">
                            {product.priceRange}
                          </span>
                        </div>

                        {/* In Stock Badge */}
                        <Button
                          className="w-full bg-green-600 text-white hover:bg-green-700 text-xs h-8"
                          disabled={!product.inStock}
                          onClick={() => handleProductClick(product)}
                        >
                          {product.inStock ? 'IN STOCK' : 'OUT OF STOCK'}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <Pagination
                    itemsPerPage={itemsPerPage}
                    totalItems={products.length}
                    paginate={paginate}
                    currentPage={currentPage}
                />
              </div>

              {/* Description */}
              <div className="mt-12 space-y-6">
                <h2 className="text-2xl font-bold text-foreground">{categoryTitle}</h2>

                <p className="text-muted-foreground">
                  {categoryDescription}
                </p>

                {category === 'concentrates' ? (
                  <>
                    <h3 className="text-xl font-bold text-foreground mt-6">What Are Cannabis Concentrates?</h3>

                    <p className="text-muted-foreground">
                      Cannabis concentrates are highly potent extracts derived from the cannabis plant. They contain significantly higher levels of cannabinoids, particularly{" "}
                      <a href="#" className="text-primary hover:underline">THC</a>{" "}
                      and{" "}
                      <a href="#" className="text-primary hover:underline">CBD</a>, compared to traditional flower. Popular concentrate types include shatter, budder, live resin, hash, kief, distillate, and THCa diamonds.
                    </p>

                    <p className="text-muted-foreground">
                      Concentrates are created through various extraction methods that isolate and preserve the most desirable compounds from the cannabis plant. The result is a product that delivers powerful effects with smaller amounts, making them ideal for experienced users and those seeking fast-acting relief.
                    </p>

                    <p className="text-muted-foreground">
                      At Chronic Guru, all our concentrates are lab-tested to ensure purity, potency, and safety. Whether you prefer the glass-like consistency of shatter, the creamy texture of budder, or the terpene-rich profile of live resin, we have premium options to suit every preference.
                    </p>

                    <p className="text-muted-foreground">
                      Cannabis concentrates can be consumed in various ways, including dabbing, vaporizing, or adding to flower. They're popular among medical patients for their precise dosing capabilities and among recreational users for their potent effects and rich flavors.
                    </p>
                  </>
                ) : category === 'edibles' ? (
                  <>
                    <p className="text-muted-foreground">
                      <a href="#" className="text-primary hover:underline">Edible marijuana</a>{" "}
                      gummy candies offer a sweet & easy choice for{" "}
                      <a href="#" className="text-primary hover:underline">mail order marijuana</a>{" "}
                      users. Dosing is simplified when using weed gummies, no matter which shape or form they come in. From{" "}
                      <a href="#" className="text-primary hover:underline">Keo Edibles</a>{" "}
                      in the shape of a missing puzzle piece to your pain to basic medicated gummies in the shape of worms, you'll find our assortment varied enough for you to find your favourite. Some of our weed gummies are THC dominant for a tasty and long-lasting high. Then we have{" "}
                      <a href="#" className="text-primary hover:underline">CBD</a>{" "}
                      edibles for medicinal purposes.
                    </p>

                    <p className="text-muted-foreground">
                      If you're looking to buy edibles online In Phoenix Arizona, then your search for THC gummies is over. Our premium choices of cannabis-infused edible. You can buy Edibles online from us in a wide selection of different forms, include THC Gummies, Weed Cookies, THC Chocolate Bars as well as THC Tinctures. We are the best place to buy edibles because our products are created with the best quality flowers and concentrates.
                    </p>

                    <p className="text-muted-foreground">
                      Edible cannabis products provide a smoke-free alternative to consuming dried marijuana, but there are many factors that should be considered when seeking to determine your preferred consumption amount, potency & potential effects.
                    </p>

                    <p className="text-muted-foreground">
                      The way you consume cannabis will alter the onset, duration and intensity of effects, so if you are trying edibles for the first time, start low and go slow.
                    </p>

                    <p className="text-muted-foreground">
                      Unlike smoking dried marijuana, which can produce effects within minutes, the effects from consuming cannabis-infused products can be delayed from 30 minutes to four hours or more. This delay occurs because the tetrahydrocannabinol, or THC, and other active ingredients in the edible cannabis product enter the body through the digestive tract, where they are absorbed into the bloodstream and then processed by the liver.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-muted-foreground">
                      Whether you're looking for medicinal cannabis, relaxation, or stimulation, we offer premium cannabis flowers that guarantee satisfaction. Our team of experts is here to help you navigate our extensive strains list to find the perfect match.
                    </p>

                    <p className="text-muted-foreground">
                      <a href="#" className="text-primary hover:underline">Buy weed online</a>{" "}
                      in Phoenix Arizona at Chronic Guru, your top destination for quality cannabis products. Find the best cannabis store in Phoenix Arizona with our unparalleled selection and expert guidance.
                    </p>

                    <h3 className="text-xl font-bold text-foreground mt-6">What Is Cannabis?</h3>

                    <p className="text-muted-foreground">
                      Cannabis, also known as weed or marijuana, is a plant famous for its psychoactive and medicinal properties. The main chemical compounds in cannabis are cannabinoids, particularly THC (Tetrahydrocannabinol) and CBD (Cannabidiol).{" "}
                      <a href="#" className="text-primary hover:underline">THC</a>{" "}
                      is known for producing a "high" due to its psychoactive effects, while{" "}
                      <a href="#" className="text-primary hover:underline">CBD</a>{" "}
                      is renowned for its therapeutic benefits without causing a high.
                    </p>

                    <p className="text-muted-foreground">
                      Historically, people have used marijuana for both medical and recreational purposes. It is also an integral part of many religious and cultural rituals. Today, cannabis is the subject of extensive research due to its potential to support and alleviate various medical conditions.
                    </p>

                    <p className="text-muted-foreground">
                      Many individuals use cannabis for its relaxing and euphoric effects. It is commonly used to manage pain, reduce inflammation, and relieve nausea. Cannabis is frequently sought as a treatment for conditions such as anxiety, depression, glaucoma, and muscle spasms from multiple sclerosis. Additionally, it is effective in alleviating symptoms for chemotherapy patients, such as stimulating appetite and managing sleep disorders.
                    </p>

                    <p className="text-muted-foreground">
                      One of the most common uses of cannabis is for chronic pain relief. It is considered a safer alternative to opioids and has proven very effective when other pain medications have failed.
                    </p>

                    <p className="text-muted-foreground">
                      In summary, cannabis offers a range of benefits for both medical and recreational users. Its popularity continues to grow as more people discover its potential for improving quality of life.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductCategory;