import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const products = [
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
        url: "https://chronicguru.com/concentrates/live-rosin-disposable/",
        badges: []
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
        url: "https://chronicguru.com/concentrates/thca-diamonds/",
        badges: []
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
        url: "https://chronicguru.com/concentrates/hash/",
        badges: []
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
        url: "https://chronicguru.com/concentrates/cbd-isolate/",
        badges: []
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
        url: "https://chronicguru.com/concentrates/thca-cartridge/",
        badges: []
    },
    {
        id: 6,
        name: "A-Bomb Budder",
        category: "Budder",
        priceRange: "$72.00 - $73.00",
        weightPrices: {
            "Variable": { "min": 72.00, "max": 73.00 }
        },
        rating: 5.00,
        reviews: 31,
        image: "/img/concentrates/imgi_150_A-bomb-budder-1024x1024.jpg",
        inStock: true,
        salePercentage: null,
        badges: []
    },
    {
        id: 7,
        name: "Adak OG Budder",
        category: "Budder",
        priceRange: "$42.00 - $73.00",
        weightPrices: {
            "Variable": { "min": 42.00, "max": 73.00 }
        },
        image: "/img/concentrates/imgi_161_Adak-og-budder-1024x1024.jpg",
        inStock: true,
        salePercentage: null,
        badges: []
    },
    {
        id: 8,
        name: "Al Hociema Morrocan Hash",
        category: "Hash",
        priceRange: "$208.00",
        weightPrices: {
            "1 Unit": 208.00
        },
        rating: 4.94,
        reviews: 53,
        image: "/img/concentrates/imgi_174_buy-al-hoceime-hash-1024x1024.jpg",
        inStock: true,
        salePercentage: null,
        badges: []
    },
    {
        id: 9,
        name: "AMG Hash",
        category: "Hash",
        priceRange: "$12.00 - $796.00",
        weightPrices: {
            "Variable": { "min": 12.00, "max": 796.00 }
        },
        rating: 4.54,
        reviews: 115,
        image: "/Buy Concentrates Online Canada _ Shatter, Budder, Hash/imgi_18_buy-amg-hash-scaled-500x500.jpg",
        inStock: true,
        salePercentage: null,
        badges: []
    },
    {
        id: 10,
        name: "Amnesia Budder",
        category: "Budder",
        priceRange: "$42.00 - $260.00",
        weightPrices: {
            "Variable": { "min": 42.00, "max": 260.00 }
        },
        rating: 5.00,
        reviews: 24,
        image: "/Buy Concentrates Online Canada _ Shatter, Budder, Hash/imgi_19_Amnesia-budder-500x500.jpg",
        inStock: true,
        salePercentage: null,
        badges: []
    },
    {
        id: 11,
        name: "BC King Hash",
        category: "Hash",
        priceRange: "$7.00 - $842.00",
        weightPrices: {
            "Variable": { "min": 7.00, "max": 842.00 }
        },
        rating: 4.94,
        reviews: 51,
        image: "/Buy Concentrates Online Canada _ Shatter, Budder, Hash/imgi_20_BC-king-hash-500x500.jpg",
        inStock: true,
        salePercentage: null,
        badges: []
    },
    {
        id: 12,
        name: "Peaches and Cream Hash",
        category: "Hash",
        priceRange: "$6.00 - $758.00",
        weightPrices: {
            "Variable": { "min": 6.00, "max": 758.00 }
        },
        rating: 4.79,
        reviews: 33,
        image: "/Buy Concentrates Online Canada _ Shatter, Budder, Hash/imgi_21_Peaches-n-cream-hash-500x500.jpg",
        inStock: true,
        salePercentage: null,
        badges: []
    },
    {
        id: 13,
        name: "Banana Hash",
        category: "Hash",
        priceRange: "$7.00 - $842.00",
        weightPrices: {
            "Variable": { "min": 7.00, "max": 842.00 }
        },
        rating: 4.64,
        reviews: 22,
        image: "/Buy Concentrates Online Canada _ Shatter, Budder, Hash/imgi_22_Banana-hash-w-500x500.jpg",
        inStock: true,
        salePercentage: null,
        badges: []
    },
    {
        id: 14,
        name: "Rockstar Hash",
        category: "Hash",
        priceRange: "$18.00 - $774.00",
        weightPrices: {
            "Variable": { "min": 18.00, "max": 774.00 }
        },
        rating: 4.74,
        reviews: 34,
        image: "/Buy Concentrates Online Canada _ Shatter, Budder, Hash/imgi_23_Rockstar-Hash-1-500x500.jpg",
        inStock: true,
        salePercentage: null,
        badges: []
    },
    {
        id: 15,
        name: "Watermelon Hash",
        category: "Hash",
        priceRange: "$7.00 - $842.00",
        weightPrices: {
            "Variable": { "min": 7.00, "max": 842.00 }
        },
        rating: 4.90,
        reviews: 20,
        image: "/Buy Concentrates Online Canada _ Shatter, Budder, Hash/imgi_24_Watermelon-hash-w-500x500.jpg",
        inStock: true,
        salePercentage: null,
        badges: []
    },
    {
        id: 16,
        name: "Bentley Hash",
        category: "Hash",
        priceRange: "$10.00 - $641.00",
        weightPrices: {
            "Variable": { "min": 10.00, "max": 641.00 }
        },
        rating: 4.48,
        reviews: 69,
        image: "/Buy Concentrates Online Canada _ Shatter, Budder, Hash/imgi_25_bentley-hash-bulk-500x500.jpg",
        inStock: true,
        salePercentage: null,
        badges: []
    },
    {
        id: 17,
        name: "Better Than Bubba Live Resin",
        category: "Live Resin",
        priceRange: "$22.00 - $260.00",
        weightPrices: {
            "Variable": { "min": 22.00, "max": 260.00 }
        },
        rating: 5.00,
        reviews: 34,
        image: "/Buy Concentrates Online Canada _ Shatter, Budder, Hash/imgi_26_Better-than-bubba-live-resin-500x500.jpg",
        inStock: true,
        salePercentage: null,
        badges: []
    },
    {
        id: 18,
        name: "Bio-Jesus Budder",
        category: "Budder",
        priceRange: "$42.00 - $73.00",
        weightPrices: {
            "Variable": { "min": 42.00, "max": 73.00 }
        },
        rating: 4.86,
        reviews: 37,
        image: "/Buy Concentrates Online Canada _ Shatter, Budder, Hash/imgi_27_Biojesus-budder-500x500.jpg",
        inStock: true,
        salePercentage: null,
        badges: []
    },
    {
        id: 19,
        name: "Blue Gelato Budder",
        category: "Budder",
        priceRange: "$42.00 - $73.00",
        weightPrices: {
            "Variable": { "min": 42.00, "max": 73.00 }
        },
        rating: 4.88,
        reviews: 25,
        image: "/Buy Concentrates Online Canada _ Shatter, Budder, Hash/imgi_28_blue-gelato-budder-500x500.jpg",
        inStock: true,
        salePercentage: null,
        badges: []
    },
    {
        id: 20,
        name: "Blue Master Budder",
        category: "Budder",
        priceRange: "$22.00 - $135.00",
        weightPrices: {
            "Variable": { "min": 22.00, "max": 135.00 }
        },
        rating: 4.93,
        reviews: 54,
        image: "/Buy Concentrates Online Canada _ Shatter, Budder, Hash/imgi_29_blue-master-budder-500x500.jpg",
        inStock: true,
        salePercentage: null,
        badges: []
    },
    {
        id: 21,
        name: "Blue Zushi Live Resin",
        category: "Live Resin",
        priceRange: "$22.00 - $73.00",
        weightPrices: {
            "Variable": { "min": 22.00, "max": 73.00 }
        },
        rating: 4.86,
        reviews: 14,
        image: "/public/placeholder.svg", // NOT FOUND
        inStock: true,
        salePercentage: null,
        badges: []
    },
    {
        id: 22,
        name: "Nightmare Cookies Live Resin",
        category: "Live Resin",
        priceRange: "$42.00 - $73.00",
        weightPrices: {
            "Variable": { "min": 42.00, "max": 73.00 }
        },
        rating: 0,
        reviews: 0,
        image: "/public/placeholder.svg", // NOT FOUND
        inStock: true,
        salePercentage: null,
        badges: []
    },
    {
        id: 23,
        name: "Princess Leia Live Resin",
        category: "Live Resin",
        priceRange: "$22.00 - $260.00",
        weightPrices: {
            "Variable": { "min": 22.00, "max": 260.00 }
        },
        rating: 5.00,
        reviews: 5,
        image: "/Buy Concentrates Online Canada _ Shatter, Budder, Hash/imgi_31_buy-princess-leia-live-resin-wholesale-scaled-500x500.jpg",
        inStock: true,
        salePercentage: null,
        badges: []
    },
    {
        id: 24,
        name: "Bubblegum Budder",
        category: "Budder",
        priceRange: "$42.00 - $260.00",
        weightPrices: {
            "Variable": { "min": 42.00, "max": 260.00 }
        },
        rating: 4.83,
        reviews: 12,
        image: "/Buy Concentrates Online Canada _ Shatter, Budder, Hash/imgi_32_bubblegum-budder-500x500.jpg",
        inStock: true,
        salePercentage: null,
        badges: []
    },
    {
        id: 25,
        name: "Chem Scout Live Resin",
        category: "Live Resin",
        priceRange: "$22.00 - $260.00",
        weightPrices: {
            "Variable": { "min": 22.00, "max": 260.00 }
        },
        rating: 4.93,
        reviews: 40,
        image: "/public/placeholder.svg", // NOT FOUND
        inStock: true,
        salePercentage: null,
        badges: []
    },
    {
        id: 26,
        name: "Chrome Live Resin",
        category: "Live Resin",
        priceRange: "$22.00 - $260.00",
        weightPrices: {
            "Variable": { "min": 22.00, "max": 260.00 }
        },
        rating: 4.97,
        reviews: 29,
        image: "/Buy Concentrates Online Canada _ Shatter, Budder, Hash/imgi_33_Chrome-live-resin-500x500.jpg",
        inStock: true,
        salePercentage: null,
        badges: []
    },
    {
        id: 27,
        name: "Coffee Crisp Hash",
        category: "Hash",
        priceRange: "$9.00 - $14.00",
        weightPrices: {
            "Variable": { "min": 9.00, "max": 14.00 }
        },
        rating: 4.94,
        reviews: 71,
        image: "/Buy Concentrates Online Canada _ Shatter, Budder, Hash/imgi_34_Coffee-crisp-hash-500x500.jpg",
        inStock: true,
        salePercentage: null,
        badges: []
    },
    {
        id: 28,
        name: "Cosmos Budder",
        category: "Budder",
        priceRange: "$42.00 - $73.00",
        weightPrices: {
            "Variable": { "min": 42.00, "max": 73.00 }
        },
        rating: 5.00,
        reviews: 43,
        image: "/Buy Concentrates Online Canada _ Shatter, Budder, Hash/imgi_35_Cosmo-budder-500x500.jpg",
        inStock: true,
        salePercentage: null,
        badges: []
    },
    {
        id: 29,
        name: "Durban Poison Live Resin",
        category: "Live Resin",
        priceRange: "$42.00 - $73.00",
        weightPrices: {
            "Variable": { "min": 42.00, "max": 73.00 }
        },
        rating: 4.86,
        reviews: 28,
        image: "/Buy Concentrates Online Canada _ Shatter, Budder, Hash/imgi_36_Durban-poison-live-resin-wholesale-500x500.jpg",
        inStock: true,
        salePercentage: null,
        badges: []
    },
    {
        id: 30,
        name: "G6 Budder",
        category: "Budder",
        priceRange: "$22.00 - $260.00",
        weightPrices: {
            "Variable": { "min": 22.00, "max": 260.00 }
        },
        rating: 5.00,
        reviews: 39,
        image: "/Buy Concentrates Online Canada _ Shatter, Budder, Hash/imgi_37_G6-budder-w-500x500.jpg",
        inStock: true,
        salePercentage: null,
        badges: []
    },
    {
        id: 31,
        name: "Gas Mask Caviar",
        category: "Caviar",
        priceRange: "$167.00 - $320.00",
        weightPrices: {
            "Variable": { "min": 167.00, "max": 320.00 }
        },
        rating: 4.92,
        reviews: 12,
        image: "/Buy Concentrates Online Canada _ Shatter, Budder, Hash/imgi_38_gas-mask-caviar-1-500x500.jpg",
        inStock: true,
        salePercentage: null,
        badges: []
    },
    {
        id: 32,
        name: "Ghost Bubba Budder",
        category: "Budder",
        priceRange: "$22.00 - $135.00",
        weightPrices: {
            "Variable": { "min": 22.00, "max": 135.00 }
        },
        rating: 5.00,
        reviews: 47,
        image: "/Buy Concentrates Online Canada _ Shatter, Budder, Hash/imgi_39_Ghost-bubba-budder-500x500.jpg",
        inStock: true,
        salePercentage: null,
        badges: []
    },
    {
        id: 33,
        name: "Golden Lemon Budder",
        category: "Budder",
        priceRange: "$22.00 - $260.00",
        weightPrices: {
            "Variable": { "min": 22.00, "max": 260.00 }
        },
        rating: 5.00,
        reviews: 40,
        image: "/Buy Concentrates Online Canada _ Shatter, Budder, Hash/imgi_40_Golden-lemon-budder-500x500.jpg",
        inStock: true,
        salePercentage: null,
        badges: []
    },
    {
        id: 34,
        name: "Gorilla Snacks Live Resin",
        category: "Live Resin",
        priceRange: "$42.00 - $135.00",
        weightPrices: {
            "Variable": { "min": 42.00, "max": 135.00 }
        },
        rating: 5.00,
        reviews: 24,
        image: "/Buy Concentrates Online Canada _ Shatter, Budder, Hash/imgi_41_Gorilla-Snacks-Live-resin-w-500x500.jpg",
        inStock: true,
        salePercentage: null,
        badges: []
    },
    {
        id: 35,
        name: "Grape Gasoline Live Resin",
        category: "Live Resin",
        priceRange: "$22.00 - $260.00",
        weightPrices: {
            "Variable": { "min": 22.00, "max": 260.00 }
        },
        rating: 4.83,
        reviews: 24,
        image: "/Buy Concentrates Online Canada _ Shatter, Budder, Hash/imgi_42_buy-grape-gasoline-live-resin-wholesale-scaled-500x500.jpg",
        inStock: true,
        salePercentage: null,
        badges: []
    },
    {
        id: 36,
        name: "Grape Hash",
        category: "Hash",
        priceRange: "$9.00 - $46.00",
        weightPrices: {
            "Variable": { "min": 9.00, "max": 46.00 }
        },
        rating: 4.82,
        reviews: 68,
        image: "/Buy Concentrates Online Canada _ Shatter, Budder, Hash/imgi_43_grape-hash-500x500.jpg",
        inStock: true,
        salePercentage: null,
        badges: []
    },
    {
        id: 37,
        name: "Green Apple Hash",
        category: "Hash",
        priceRange: "$10.00 - $1250.00",
        weightPrices: {
            "Variable": { "min": 10.00, "max": 1250.00 }
        },
        rating: 4.76,
        reviews: 70,
        image: "/Buy Concentrates Online Canada _ Shatter, Budder, Hash/imgi_44_buy-green-apple-hash-wholesale-500x500.jpg",
        inStock: true,
        salePercentage: null,
        badges: []
    },
    {
        id: 38,
        name: "Guava Gelato Budder",
        category: "Budder",
        priceRange: "$42.00 - $73.00",
        weightPrices: {
            "Variable": { "min": 42.00, "max": 73.00 }
        },
        rating: 4.84,
        reviews: 32,
        image: "/Buy Concentrates Online Canada _ Shatter, Budder, Hash/imgi_45_Guava-gelato-budder-500x500.jpg",
        inStock: true,
        salePercentage: 9,
        badges: []
    },
    {
        id: 39,
        name: "Habibi Hash",
        category: "Hash",
        priceRange: "$52.00 - $177.00",
        weightPrices: {
            "Variable": { "min": 52.00, "max": 177.00 }
        },
        rating: 4.77,
        reviews: 74,
        image: "/Buy Concentrates Online Canada _ Shatter, Budder, Hash/imgi_5_buy-habibi-hash-500x500.jpg",
        inStock: true,
        salePercentage: null,
        badges: []
    },
    {
        id: 40,
        name: "Ketama Gold Hash",
        category: "Hash",
        priceRange: "$23.00 - $113.00",
        weightPrices: {
            "Variable": { "min": 23.00, "max": 113.00 }
        },
        rating: 4.79,
        reviews: 70,
        image: "/Buy Concentrates Online Canada _ Shatter, Budder, Hash/imgi_46_KETAMA-GOLD-HASH-BULK-500x500.jpg",
        inStock: true,
        salePercentage: null,
        badges: []
    },
    {
        id: 41,
        name: "King Kush Hash",
        category: "Hash",
        priceRange: "$9.00 - $44.00",
        weightPrices: {
            "Variable": { "min": 9.00, "max": 44.00 }
        },
        rating: 4.80,
        reviews: 66,
        image: "/Buy Concentrates Online Canada _ Shatter, Budder, Hash/imgi_47_King-Kush-hash-500x500.jpg",
        inStock: true,
        salePercentage: null,
        badges: []
    },
    {
        id: 42,
        name: "Grape Soda Live Resin",
        category: "Live Resin",
        priceRange: "$22.00 - $260.00",
        weightPrices: {
            "Variable": { "min": 22.00, "max": 260.00 }
        },
        rating: 5.00,
        reviews: 2,
        image: "/Buy Concentrates Online Canada _ Shatter, Budder, Hash/imgi_48_Grape-Soda-Live-Resin-w-500x500.jpg",
        inStock: true,
        salePercentage: null,
        badges: []
    },
    {
        id: 43,
        name: "LA Cake Live Resin",
        category: "Live Resin",
        priceRange: "$42.00 - $73.00",
        weightPrices: {
            "Variable": { "min": 42.00, "max": 73.00 }
        },
        rating: 4.90,
        reviews: 31,
        image: "/Buy Concentrates Online Canada _ Shatter, Budder, Hash/imgi_49_LA-Cake-resin-500x500.jpg",
        inStock: true,
        salePercentage: null,
        badges: []
    },
    {
        id: 44,
        name: "Lime Sorbet Budder",
        category: "Budder",
        priceRange: "$22.00 - $260.00",
        weightPrices: {
            "Variable": { "min": 22.00, "max": 260.00 }
        },
        rating: 5.00,
        reviews: 41,
        image: "/Buy Concentrates Online Canada _ Shatter, Budder, Hash/imgi_50_Lime-sorbet-budder-500x500.jpg",
        inStock: true,
        salePercentage: null,
        badges: []
    },
    {
        id: 45,
        name: "Mac 1 Budder",
        category: "Budder",
        priceRange: "$42.00 - $260.00",
        weightPrices: {
            "Variable": { "min": 42.00, "max": 260.00 }
        },
        rating: 5.00,
        reviews: 46,
        image: "/Buy Concentrates Online Canada _ Shatter, Budder, Hash/imgi_51_Mac-1-budder-500x500.jpg",
        inStock: true,
        salePercentage: null,
        badges: []
    },
    {
        id: 46,
        name: "Mac Daddy Live Resin",
        category: "Live Resin",
        priceRange: "$22.00 - $260.00",
        weightPrices: {
            "Variable": { "min": 22.00, "max": 260.00 }
        },
        rating: 5.00,
        reviews: 30,
        image: "/public/placeholder.svg", // NOT FOUND
        inStock: true,
        salePercentage: null,
        badges: []
    },
    {
        id: 47,
        name: "Al Jazeera Hash",
        category: "Hash",
        priceRange: "$20.00 - $97.00",
        weightPrices: {
            "Variable": { "min": 20.00, "max": 97.00 }
        },
        rating: 5.00,
        reviews: 25,
        image: "/Buy Concentrates Online Canada _ Shatter, Budder, Hash/imgi_52_Al-jazeera-hash-wholesale-500x500.jpg",
        inStock: true,
        salePercentage: 3,
        badges: []
    },
    {
        id: 48,
        name: "Chanel Hash",
        category: "Hash",
        priceRange: "$21.00 - $189.00",
        weightPrices: {
            "Variable": { "min": 21.00, "max": 189.00 }
        },
        rating: 4.96,
        reviews: 27,
        image: "/Buy Concentrates Online Canada _ Shatter, Budder, Hash/imgi_6_buy-chanel-hash-wholesale-500x500.jpg",
        inStock: true,
        salePercentage: null,
        badges: []
    },
    {
        id: 49,
        name: "Kabul Gold Hash",
        category: "Hash",
        priceRange: "$72.00 - $503.00",
        weightPrices: {
            "Variable": { "min": 72.00, "max": 503.00 }
        },
        rating: 5.00,
        reviews: 5,
        image: "/Buy Concentrates Online Canada _ Shatter, Budder, Hash/imgi_53_Kabul-gold-hash-wholesale-500x500.jpg",
        inStock: true,
        salePercentage: null,
        badges: []
    },
    {
        id: 50,
        name: "Kashmir Hash",
        category: "Hash",
        priceRange: "$120.00 - $455.00",
        weightPrices: {
            "Variable": { "min": 120.00, "max": 455.00 }
        },
        rating: 4.91,
        reviews: 11,
        image: "/Buy Concentrates Online Canada _ Shatter, Budder, Hash/imgi_54_Kashmir-hash-wholesale-500x500.jpg",
        inStock: true,
        salePercentage: null,
        badges: []
    },
    {
        id: 51,
        name: "Palace Pakistani Hash",
        category: "Hash",
        priceRange: "$17.00",
        weightPrices: {
            "1 Unit": 17.00
        },
        rating: 5.00,
        reviews: 9,
        image: "/Buy Concentrates Online Canada _ Shatter, Budder, Hash/imgi_578_Palace-Pakistani-hash-wholesale-300x300.jpg",
        inStock: true,
        salePercentage: null,
        badges: []
    },
    {
        id: 52,
        name: "Pineapple Express Hash",
        category: "Hash",
        priceRange: "$114.00 - $431.00",
        weightPrices: {
            "Variable": { "min": 114.00, "max": 431.00 }
        },
        rating: 4.93,
        reviews: 14,
        image: "/public/placeholder.svg", // NOT FOUND
        inStock: true,
        salePercentage: null,
        badges: []
    },
    {
        id: 53,
        name: "Pineapple Hash",
        category: "Hash",
        priceRange: "$12.00 - $796.00",
        weightPrices: {
            "Variable": { "min": 12.00, "max": 796.00 }
        },
        rating: 5.00,
        reviews: 10,
        image: "/Buy Concentrates Online Canada _ Shatter, Budder, Hash/imgi_56_Pineapple-hash-wholesale-500x500.jpg",
        inStock: true,
        salePercentage: null,
        badges: []
    },
    {
        id: 54,
        name: "Maddosh Kabul Hash",
        category: "Hash",
        priceRange: "$133.00 - $503.00",
        weightPrices: {
            "Variable": { "min": 133.00, "max": 503.00 }
        },
        rating: 4.89,
        reviews: 57,
        image: "/Buy Concentrates Online Canada _ Shatter, Budder, Hash/imgi_57_Maddosh-gold-hash-wholesale-500x500.jpg",
        inStock: true,
        salePercentage: null,
        badges: []
    },
    {
        id: 55,
        name: "Two Swords Hash",
        category: "Hash",
        priceRange: "$13.00 - $455.00",
        weightPrices: {
            "Variable": { "min": 13.00, "max": 455.00 }
        },
        rating: 4.90,
        reviews: 21,
        image: "/Buy Concentrates Online Canada _ Shatter, Budder, Hash/imgi_58_2-sword-hash-1-500x500.jpg",
        inStock: true,
        salePercentage: null,
        badges: []
    }
]

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

const Concentrates = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleProductClick = (product: any) => {
    const slug = product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    navigate(`/product/${slug}`, { state: { product: { ...product, categories: ["Concentrates"] } } });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-xl md:text-4xl font-bold pb-8 flex flex-start">Buy THC Concentrates Online</h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {currentProducts.map((product) => (
              <div
                key={product.id}
                className="group relative bg-card rounded-lg border hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="relative overflow-hidden bg-gray-50 cursor-pointer"
                     onClick={() => handleProductClick(product)}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3
                    className="font-medium text-card-foreground mb-2 text-sm leading-tight line-clamp-2 cursor-pointer hover:text-primary"
                    onClick={() => handleProductClick(product)}
                  >
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">
                      {product.reviews}
                    </span>
                  </div>
                  <div className="mb-3">
                    <span className="font-bold text-foreground text-sm">
                      {product.priceRange}
                    </span>
                  </div>
                  {product.badges && product.badges.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                          {product.badges.map((badge, idx) => (
                              <span
                                  key={idx}
                                  className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded border border-gray-300"
                              >
                                  {badge}
                              </span>
                          ))}
                      </div>
                  )}
                  <Button
                    className="w-full bg-green-600 text-white hover:bg-green-700 text-xs h-8"
                    disabled={!product.inStock}
                    onClick={() => handleProductClick(product)}
                  >
                    {product.inStock ? 'ADD TO CART' : 'OUT OF STOCK'}
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

          <div className="bg-white rounded-lg border-2 border-gray-200 p-8 space-y-8 mt-16">
            <div>
              <h2 className="text-3xl font-bold mb-4">What Are THC Concentrates?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                THC concentrates are highly potent cannabis extracts containing elevated levels of THC, often ranging from 60% to 90%+ THC. Made through advanced extraction methods, concentrates deliver stronger effects than traditional flower while preserving the plant’s natural terpenes and flavors.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Concentrates come in various textures and consistencies, including wax, shatter, live resin, rosin, budder, and diamonds, each offering a unique experience. Typically consumed via dabbing, vaping, or adding to flower, these extracts are ideal for users seeking intense potency and fast-acting effects.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Benefits of THC Concentrates</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Extremely Potent</strong> – Higher THC levels for stronger, longer-lasting effects.</li>
                <li><strong>Fast-Acting High</strong> – Effects kick in almost instantly when dabbed or vaped.</li>
                <li><strong>Pure & Flavorful</strong> – Preserves terpenes for enhanced aroma and taste.</li>
                <li><strong>Versatile Consumption</strong> – Can be dabbed, vaped, or added to flower.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Popular THC Concentrate Types</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Shatter</strong> – Glass-like texture, potent and easy to handle.</li>
                  <li><strong>Wax & Budder</strong> – Soft, creamy, and rich in terpenes.</li>
                  <li><strong>Live Resin</strong> – Fresh frozen extraction for maximum flavor.</li>
                  <li><strong>Rosin</strong> – Solventless, pure cannabis concentrate.</li>
                  <li><strong>Diamonds & Sauce</strong> – Ultra-potent crystalline structures with terpene-rich sauce.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">FAQs About THC Concentrates</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">1. How do you use THC concentrates?</h3>
                  <p className="text-gray-700">THC concentrates are typically consumed through dabbing (using a dab rig), vaping (with a compatible vaporizer), or adding to flower for an extra potency boost.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2. Are THC concentrates stronger than flower?</h3>
                  <p className="text-gray-700">Yes, concentrates contain far higher THC levels than traditional flower, often exceeding 60-90% THC, compared to the 15-30% THC in cannabis flower.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">3. What is the difference between live resin and shatter?</h3>
                  <p className="text-gray-700">Live resin is made from fresh frozen cannabis, preserving more terpenes for enhanced flavor, while shatter is known for its glass-like consistency and high potency.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">4. Are THC concentrates legal?</h3>
                  <p className="text-gray-700">Yes, hemp-derived THC concentrates that comply with the 2018 Farm Bill (less than 0.3% Delta-9 THC by dry weight) are federally legal. However, state laws may vary.</p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 text-sm py-4 border-t">
              Browse our selection of premium THC concentrates and experience cannabis at its most potent.
            </p>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Concentrates;