import RestoMenu from "../components/RestoMenu"

const Restodata = [{
    "statusCode": 0,
    "data": {
        "statusMessage": "done successfully",
        "cards": [
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
                        "text": "Cochin Village Restaurant",
                        "headerStyling": {
                            "textColor": "text_Highest_Emphasis",
                            "textVariant": "header_H3_Black"
                        }
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.RestaurantBlTab",
                        "tabs": [
                            {
                                "id": "Order Online",
                                "title": "Order Online"
                            }
                        ]
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "105420",
                            "name": "Cochin Village Restaurant",
                            "city": "Mangaluru",
                            "slugs": {
                                "restaurant": "cochin-village-restaurant-kankanady-hampankatta",
                                "city": "mangaluru"
                            },
                            "uniqueId": "e51e6528-4859-48c8-8fed-e84c17dc2d76",
                            "cloudinaryImageId": "5041a738c88c175d53cf688930fcee6e",
                            "locality": "Bypass Rpad",
                            "areaName": "Kankanady",
                            "costForTwo": "20000",
                            "costForTwoMessage": "₹200 for two",
                            "cuisines": [
                                "Kerala",
                                "South Indian"
                            ],
                            "avgRating": 4.6,
                            "feeDetails": {
                                "restaurantId": "105420",
                                "fees": [
                                    {}
                                ]
                            },
                            "parentId": "15715",
                            "avgRatingString": "4.6",
                            "totalRatingsString": "22K+ ratings",
                            "sla": {
                                "restaurantId": "105420",
                                "deliveryTime": 36,
                                "minDeliveryTime": 35,
                                "maxDeliveryTime": 45,
                                "lastMileTravel": 3.6,
                                "serviceability": "SERVICEABLE",
                                "stressFactor": 1,
                                "rainMode": "RAIN_MODE_NONE",
                                "longDistance": "LONG_DISTANCE_NOT_LONG_DISTANCE",
                                "zoneId": 667,
                                "slaString": "35-45 MINS",
                                "lastMileTravelString": "3.6 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2026-01-24 21:30:00",
                                "visibility": true,
                                "opened": true,
                                "restaurantClosedMeta": {}
                            },
                            "aggregatedDiscountInfo": {
                                "header": "Flat ₹75 off",
                                "shortDescriptionList": [
                                    {
                                        "meta": "Flat ₹75 off | Use OFFER4U",
                                        "discountType": "Flat",
                                        "operationType": "RESTAURANT"
                                    },
                                    {
                                        "meta": "Flat ₹100 off on orders above ₹299",
                                        "discountType": "Flat",
                                        "operationType": "RESTAURANT"
                                    }
                                ],
                                "descriptionList": [
                                    {
                                        "meta": "Flat ₹75 off | Use OFFER4U",
                                        "discountType": "Flat",
                                        "operationType": "RESTAURANT"
                                    },
                                    {
                                        "meta": "Flat ₹100 off on orders above ₹299| Use code ONLY4U",
                                        "discountType": "Flat",
                                        "operationType": "RESTAURANT"
                                    }
                                ],
                                "visible": true
                            },
                            "badges": {},
                            "slugString": "cochin-village-restaurant-kankanady-hampankatta",
                            "isOpen": true,
                            "labels": [
                                {
                                    "title": "Timings",
                                    "message": "null"
                                },
                                {
                                    "title": "Address",
                                    "message": "old police station road kanakanady mangalore,575002"
                                },
                                {
                                    "title": "Cuisines",
                                    "message": "Kerala,South Indian"
                                }
                            ],
                            "totalRatings": 22000,
                            "aggregatedDiscountInfoV2": {
                                "header": "Flat ₹75 off",
                                "shortDescriptionList": [
                                    {
                                        "meta": "Flat ₹75 off | Use OFFER4U",
                                        "discountType": "Flat",
                                        "operationType": "RESTAURANT"
                                    },
                                    {
                                        "meta": "Flat ₹100 off on orders above ₹299",
                                        "discountType": "Flat",
                                        "operationType": "RESTAURANT"
                                    }
                                ],
                                "descriptionList": [
                                    {
                                        "meta": "Flat ₹75 off | Use OFFER4U",
                                        "discountType": "Flat",
                                        "operationType": "RESTAURANT"
                                    },
                                    {
                                        "meta": "Flat ₹100 off on orders above ₹299| Use code ONLY4U",
                                        "discountType": "Flat",
                                        "operationType": "RESTAURANT"
                                    }
                                ],
                                "couponDetailsCta": "View coupon details"
                            },
                            "type": "F",
                            "nudgeBanners": [
                                {
                                    "minValue": 139,
                                    "maxValue": 199,
                                    "priority": 1,
                                    "couponCode": "OFFER4U",
                                    "discountInfo": {
                                        "discountType": "Flat",
                                        "value": 75
                                    },
                                    "lockedMessage": "Add items worth ₹<amount> to save ₹75 | Code OFFER4U",
                                    "unlockedMessage": "OFFER4U Coupon Unlocked! Use it to save ₹75",
                                    "logoCtx": {},
                                    "movComputationType": "MOV_COMPUTATION_TYPE_DISCOUNTED_PRICE"
                                },
                                {
                                    "minValue": 209,
                                    "maxValue": 299,
                                    "priority": 2,
                                    "couponCode": "ONLY4U",
                                    "discountInfo": {
                                        "discountType": "Flat",
                                        "value": 100
                                    },
                                    "lockedMessage": "Add items worth ₹<amount> to save ₹100 | Code ONLY4U",
                                    "unlockedMessage": "ONLY4U Coupon Unlocked! Use it to save ₹100",
                                    "logoCtx": {},
                                    "movComputationType": "MOV_COMPUTATION_TYPE_DISCOUNTED_PRICE"
                                }
                            ],
                            "headerBanner": {
                                "url": "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/105420"
                            },
                            "ratingSlab": "RATING_SLAB_5",
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {},
                                "commsStyling": {}
                            },
                            "hasBestsellerItems": true,
                            "cartOrderabilityNudgeBanner": {
                                "parameters": {},
                                "presentation": {}
                            },
                            "latLong": "12.86715591,74.85950583",
                            "backgroundImageOverlayInfo": {},
                            "featuredSectionInfo": {}
                        },
                        "analytics": {}
                    },
                    "relevance": {
                        "type": "RELEVANCE_TYPE_CHECK_ORDERABILITY_AND_SHOW_MENU_OFFER_NUDGE",
                        "sectionId": "MENU_ITEM_CART_UPDATE_POP_CROUTON"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
                        "layout": {
                            "rows": 1,
                            "columns": 4,
                            "horizontalScrollEnabled": true,
                            "itemSpacing": 12,
                            "lineSpacing": 10,
                            "widgetPadding": {},
                            "containerStyle": {
                                "containerPadding": {
                                    "left": 10,
                                    "right": 10,
                                    "bottom": 16
                                }
                            }
                        },
                        "id": "offerCollectionWidget_UX4",
                        "gridElements": {
                            "infoWithStyle": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle",
                                "offers": [
                                    {
                                        "info": {
                                            "header": "FLAT ₹75 OFF",
                                            "offerTag": "FLAT DEAL",
                                            "offerTagColor": "#E46D47",
                                            "offerIds": [
                                                "516effe0-18f2-4f46-bd22-40752c266dc7"
                                            ],
                                            "expiryTime": "1970-01-01T00:00:00Z",
                                            "couponCode": "USE OFFER4U",
                                            "description": "ABOVE ₹199",
                                            "offerType": "offers",
                                            "restId": "105420",
                                            "offerLogo": "offers/generic",
                                            "descriptionTextColor": "#7302060C",
                                            "primaryDescription": "USE OFFER4U"
                                        },
                                        "cta": {
                                            "type": "OFFER_HALF_CARD"
                                        }
                                    },
                                    {
                                        "info": {
                                            "header": "FLAT ₹100 OFF",
                                            "offerTag": "DEFAULT",
                                            "offerTagColor": "#E46D47",
                                            "offerIds": [
                                                "53b4f30f-d2a0-4c21-9add-4991e0b319a5"
                                            ],
                                            "expiryTime": "1970-01-01T00:00:00Z",
                                            "couponCode": "USE ONLY4U",
                                            "description": "ABOVE ₹299",
                                            "offerType": "offers",
                                            "restId": "105420",
                                            "offerLogo": "offers/generic",
                                            "descriptionTextColor": "#7302060C",
                                            "primaryDescription": "USE ONLY4U"
                                        },
                                        "cta": {
                                            "type": "OFFER_HALF_CARD"
                                        }
                                    },
                                    {
                                        "info": {
                                            "header": "FLAT ₹150 OFF",
                                            "offerTagColor": "#E46D47",
                                            "logoBottom": "MARKETING_BANNERS/IMAGES/OFFERS/2026/1/2/35e5109b-b2b7-4226-b54c-6fcf89e58055_AMEXMenuLogo.png",
                                            "offerIds": [
                                                "5b337abf-0b93-4403-b5e3-cfd3673a260c"
                                            ],
                                            "expiryTime": "1970-01-01T00:00:00Z",
                                            "couponCode": "USE AMEX150",
                                            "description": "ABOVE ₹600",
                                            "offerType": "offers",
                                            "restId": "105420",
                                            "offerLogo": "MARKETING_BANNERS/IMAGES/OFFERS/2026/1/2/35e5109b-b2b7-4226-b54c-6fcf89e58055_AMEXMenuLogo.png",
                                            "descriptionTextColor": "#7302060C",
                                            "primaryDescription": "USE AMEX150"
                                        },
                                        "cta": {
                                            "type": "OFFER_HALF_CARD"
                                        }
                                    },
                                    {
                                        "info": {
                                            "header": "FLAT ₹50 OFF",
                                            "offerTagColor": "#E46D47",
                                            "logoBottom": "MARKETING_BANNERS/IMAGES/OFFERS/2026/1/21/6f580922-dfcf-46da-85ee-612dcda0204a_ICICIMenuLogo.png",
                                            "offerIds": [
                                                "81ccac93-7b82-4691-b682-e9c2e3737a4a"
                                            ],
                                            "expiryTime": "1970-01-01T00:00:00Z",
                                            "couponCode": "NO CODE REQUIRED",
                                            "description": "ABOVE ₹599",
                                            "offerType": "offers",
                                            "restId": "105420",
                                            "offerLogo": "MARKETING_BANNERS/IMAGES/OFFERS/2026/1/21/6f580922-dfcf-46da-85ee-612dcda0204a_ICICIMenuLogo.png",
                                            "descriptionTextColor": "#7302060C",
                                            "primaryDescription": "NO CODE REQUIRED"
                                        },
                                        "cta": {
                                            "type": "OFFER_HALF_CARD"
                                        }
                                    }
                                ],
                                "habitMilestoneInfo": {
                                    "callout": {}
                                },
                                "loyaltyDiscoverPresentationInfo": {
                                    "logoCtx": {}
                                }
                            }
                        }
                    }
                }
            },
            {
                "groupedCard": {
                    "cardGroupMap": {
                        "REGULAR": {
                            "cards": [
                                {
                                    "card": {
                                        "card": {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
                                            "badges": {},
                                            "vegOnlyDetails": {
                                                "imageId": "AutoVegOnly_qkjowj",
                                                "title": "Showing only vegetarian options.",
                                                "description": "Tap on the VEG ONLY button to turn off the setting"
                                            },
                                            "topRatedFilter": {
                                                "attributes": {
                                                    "displayText": "Ratings 4.0+"
                                                }
                                            },
                                            "kidsCategoryFilter": {
                                                "attributes": {
                                                    "displayText": "Kids Favourites",
                                                    "tooltip": {
                                                        "enabled": true,
                                                        "displayText": "Kids Favourites Filter applied. Remove this filter to see the full Menu."
                                                    }
                                                }
                                            },
                                            "vegFilter": {
                                                "attributes": {
                                                    "displayText": "VEG"
                                                }
                                            },
                                            "nonvegFilter": {
                                                "attributes": {
                                                    "displayText": "NONVEG"
                                                }
                                            }
                                        },
                                        "relevance": {
                                            "type": "RELEVANCE_TYPE_ON_MENU_FILTER_TOGGLED",
                                            "sectionId": "MENU_FILTER_TOGGLE"
                                        }
                                    }
                                },
                                {
                                    "card": {
                                        "card": {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            "title": "Recommended",
                                            "itemCards": [
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32294343",
                                                            "name": "Parotta ",
                                                            "category": "Main Course",
                                                            "description": "Serves 1 | 1pc|| A delectable and flavorsome vegetarian main course that will tantalize your taste buds with its delightful combination of textures.",
                                                            "imageId": "d1516e7abe6e666672988ac54b2e77c2",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 2100,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "showImage": true,
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.6",
                                                                    "ratingCount": "7130 ratings",
                                                                    "ratingCountV2": "7.1K+"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984318",
                                                            "menuFilterIds": [
                                                                "VEG",
                                                                "PUREVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32294357",
                                                            "name": "Beef Ularthu ",
                                                            "category": "Main Course",
                                                            "description": "Boneless | Serves 1 | A flavorful and savory beef dish that will satisfy your taste buds and leave you wanting more.",
                                                            "imageId": "e7d20f62adb81a46cdee097cbc123646",
                                                            "inStock": 1,
                                                            "price": 18000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {
                                                                "text": "Bestseller",
                                                                "textColor": "#ffffff",
                                                                "topBackgroundColor": "#d53d4c",
                                                                "bottomBackgroundColor": "#b02331"
                                                            },
                                                            "showImage": true,
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "isBestseller": true,
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.7",
                                                                    "ratingCount": "3618 ratings",
                                                                    "ratingCountV2": "3.6K+"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984276",
                                                            "menuFilterIds": [
                                                                "bestseller",
                                                                "NONVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32294336",
                                                            "name": "Chicken Biriyani",
                                                            "category": "Main Course",
                                                            "description": "Serves 1 | A flavorful and aromatic main course featuring tender chicken and fragrant rice.",
                                                            "imageId": "1a095bb1fd52df2eccfdbcaca41a31d7",
                                                            "inStock": 1,
                                                            "price": 16900,
                                                            "variants": {
                                                                "variantGroups": [
                                                                    {
                                                                        "groupId": "2911243",
                                                                        "name": "Quantity",
                                                                        "variations": [
                                                                            {
                                                                                "name": "Half",
                                                                                "id": "9659418",
                                                                                "inStock": 1,
                                                                                "isEnabled": 1
                                                                            },
                                                                            {
                                                                                "name": "Full",
                                                                                "price": 7200,
                                                                                "default": 1,
                                                                                "id": "9659420",
                                                                                "inStock": 1,
                                                                                "isEnabled": 1
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "247057184",
                                                                    "groupName": "Beverages",
                                                                    "choices": [
                                                                        {
                                                                            "id": "130760786",
                                                                            "name": "Lime Soda",
                                                                            "price": 3600,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": -1,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {
                                                                "text": "Bestseller",
                                                                "textColor": "#ffffff",
                                                                "topBackgroundColor": "#d53d4c",
                                                                "bottomBackgroundColor": "#b02331"
                                                            },
                                                            "showImage": true,
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "isBestseller": true,
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.5",
                                                                    "ratingCount": "4261 ratings",
                                                                    "ratingCountV2": "4.3K+"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984283",
                                                            "menuFilterIds": [
                                                                "bestseller",
                                                                "NONVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32294356",
                                                            "name": "Beef Fry",
                                                            "category": "Main Course",
                                                            "description": "Boneless | Serves 1 | A flavorful and savory main course showcasing tender beef cooked to perfection.",
                                                            "imageId": "8ac64645fdff34769922164aa9b0a7f7",
                                                            "inStock": 1,
                                                            "price": 18000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {
                                                                "text": "Bestseller",
                                                                "textColor": "#ffffff",
                                                                "topBackgroundColor": "#d53d4c",
                                                                "bottomBackgroundColor": "#b02331"
                                                            },
                                                            "showImage": true,
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "isBestseller": true,
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.6",
                                                                    "ratingCount": "3142 ratings",
                                                                    "ratingCountV2": "3.1K+"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984272",
                                                            "menuFilterIds": [
                                                                "bestseller",
                                                                "NONVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32294363",
                                                            "name": "Chicken Curry",
                                                            "category": "Main Course",
                                                            "description": "Serves 1 | A delectable and hearty non-Veg main course that tantalizes the taste buds with its rich flavors and savory essence.",
                                                            "imageId": "8ca89d517990220cc34a44d7bb88e5dd",
                                                            "inStock": 1,
                                                            "price": 16700,
                                                            "variants": {
                                                                "variantGroups": [
                                                                    {
                                                                        "groupId": "2911246",
                                                                        "name": "Quantity",
                                                                        "variations": [
                                                                            {
                                                                                "name": "Half",
                                                                                "id": "9659454",
                                                                                "inStock": 1,
                                                                                "isEnabled": 1
                                                                            },
                                                                            {
                                                                                "name": "Full",
                                                                                "price": 8000,
                                                                                "default": 1,
                                                                                "id": "9659456",
                                                                                "inStock": 1,
                                                                                "isEnabled": 1
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {
                                                                "text": "Bestseller",
                                                                "textColor": "#ffffff",
                                                                "topBackgroundColor": "#d53d4c",
                                                                "bottomBackgroundColor": "#b02331"
                                                            },
                                                            "showImage": true,
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "isBestseller": true,
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.5",
                                                                    "ratingCount": "1304 ratings",
                                                                    "ratingCountV2": "1.3K+"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984286",
                                                            "menuFilterIds": [
                                                                "bestseller",
                                                                "NONVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32294337",
                                                            "name": "Beef Biriyani",
                                                            "category": "Main Course",
                                                            "description": "Boneless | Serves 1 | A flavorful and aromatic Main Course dish with tender beef and fragrant rice.",
                                                            "imageId": "78af59208d3d8ddea8383872cfb0ac5c",
                                                            "inStock": 1,
                                                            "price": 18200,
                                                            "variants": {
                                                                "variantGroups": [
                                                                    {
                                                                        "groupId": "2911244",
                                                                        "name": "Quantity",
                                                                        "variations": [
                                                                            {
                                                                                "name": "Half",
                                                                                "default": 1,
                                                                                "id": "9659424",
                                                                                "inStock": 1,
                                                                                "isEnabled": 1
                                                                            },
                                                                            {
                                                                                "name": "Full",
                                                                                "price": 6000,
                                                                                "id": "9659425",
                                                                                "inStock": 1,
                                                                                "isEnabled": 1
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "247057250",
                                                                    "groupName": "Beverages",
                                                                    "choices": [
                                                                        {
                                                                            "id": "130760786",
                                                                            "name": "Lime Soda",
                                                                            "price": 3600,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": -1,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {
                                                                "text": "Bestseller",
                                                                "textColor": "#ffffff",
                                                                "topBackgroundColor": "#d53d4c",
                                                                "bottomBackgroundColor": "#b02331"
                                                            },
                                                            "showImage": true,
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "isBestseller": true,
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.5",
                                                                    "ratingCount": "1875 ratings",
                                                                    "ratingCountV2": "1.9K+"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984266",
                                                            "menuFilterIds": [
                                                                "bestseller",
                                                                "NONVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32206302",
                                                            "name": "Chicken Fry",
                                                            "category": "Main Course",
                                                            "description": "Serves 1 | Served 1pc||\n\nSucculent and flavorful, this main course is a true delight for non-veg lovers.",
                                                            "imageId": "1b9e40b577fa9faaa3eec7e5abb44363",
                                                            "inStock": 1,
                                                            "price": 7300,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {
                                                                "text": "Bestseller",
                                                                "textColor": "#ffffff",
                                                                "topBackgroundColor": "#d53d4c",
                                                                "bottomBackgroundColor": "#b02331"
                                                            },
                                                            "showImage": true,
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "isBestseller": true,
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.5",
                                                                    "ratingCount": "1423 ratings",
                                                                    "ratingCountV2": "1.4K+"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984287",
                                                            "menuFilterIds": [
                                                                "bestseller",
                                                                "NONVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "167057996",
                                                            "name": "Nool Parotta",
                                                            "category": "Main Course",
                                                            "description": "Serves 1 | nool parotta",
                                                            "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/3/14/63215deb-9d73-48b9-b55e-09bf91636d9f_68834c11-191c-445a-b5cb-c9030b444a29.jpeg_compressed",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 2500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "showImage": true,
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.6",
                                                                    "ratingCount": "330 ratings",
                                                                    "ratingCountV2": "330"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "100741626",
                                                            "menuFilterIds": [
                                                                "VEG",
                                                                "PUREVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32206295",
                                                            "name": "Kadala Curry",
                                                            "category": "Main Course",
                                                            "description": "Serves 1 | A flavorsome delicacy showcasing a delectable blend of aromatic spices and tender legumes in a rich, flavorful gravy.",
                                                            "imageId": "b1d72cf72139292b972db88e057dd31d",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 5000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "showImage": true,
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.6",
                                                                    "ratingCount": "1133 ratings",
                                                                    "ratingCountV2": "1.1K+"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984304",
                                                            "menuFilterIds": [
                                                                "VEG",
                                                                "PUREVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32294347",
                                                            "name": "Idiyappam",
                                                            "category": "Main Course",
                                                            "description": "Serves 1 | A delightful and flavorful vegetarian main course, boasting a unique texture and a delectable taste.",
                                                            "imageId": "967c759724e2229d480bdee6cd5cf789",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 1600,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "showImage": true,
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.6",
                                                                    "ratingCount": "1247 ratings",
                                                                    "ratingCountV2": "1.2K+"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984303",
                                                            "menuFilterIds": [
                                                                "VEG",
                                                                "PUREVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                }
                                            ],
                                            "type": "CATEGORY_TYPE_RECOMMENDED",
                                            "subtitleSuffix": {},
                                            "categoryId": "-1"
                                        }
                                    }
                                },
                                {
                                    "card": {
                                        "card": {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            "title": "Main Course",
                                            "itemCards": [
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32294343",
                                                            "name": "Parotta ",
                                                            "category": "Main Course",
                                                            "description": "Serves 1 | 1pc|| A delectable and flavorsome vegetarian main course that will tantalize your taste buds with its delightful combination of textures.",
                                                            "imageId": "d1516e7abe6e666672988ac54b2e77c2",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 2100,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.6",
                                                                    "ratingCount": "7130 ratings",
                                                                    "ratingCountV2": "7.1K+"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984318",
                                                            "menuFilterIds": [
                                                                "VEG",
                                                                "PUREVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32294357",
                                                            "name": "Beef Ularthu ",
                                                            "category": "Main Course",
                                                            "description": "Boneless | Serves 1 | A flavorful and savory beef dish that will satisfy your taste buds and leave you wanting more.",
                                                            "imageId": "e7d20f62adb81a46cdee097cbc123646",
                                                            "inStock": 1,
                                                            "price": 18000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {
                                                                "text": "Bestseller",
                                                                "textColor": "#ffffff",
                                                                "topBackgroundColor": "#d53d4c",
                                                                "bottomBackgroundColor": "#b02331"
                                                            },
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "isBestseller": true,
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.7",
                                                                    "ratingCount": "3618 ratings",
                                                                    "ratingCountV2": "3.6K+"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984276",
                                                            "menuFilterIds": [
                                                                "bestseller",
                                                                "NONVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32294336",
                                                            "name": "Chicken Biriyani",
                                                            "category": "Main Course",
                                                            "description": "Serves 1 | A flavorful and aromatic main course featuring tender chicken and fragrant rice.",
                                                            "imageId": "1a095bb1fd52df2eccfdbcaca41a31d7",
                                                            "inStock": 1,
                                                            "price": 16900,
                                                            "variants": {
                                                                "variantGroups": [
                                                                    {
                                                                        "groupId": "2911243",
                                                                        "name": "Quantity",
                                                                        "variations": [
                                                                            {
                                                                                "name": "Half",
                                                                                "id": "9659418",
                                                                                "inStock": 1,
                                                                                "isEnabled": 1
                                                                            },
                                                                            {
                                                                                "name": "Full",
                                                                                "price": 7200,
                                                                                "default": 1,
                                                                                "id": "9659420",
                                                                                "inStock": 1,
                                                                                "isEnabled": 1
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "247057184",
                                                                    "groupName": "Beverages",
                                                                    "choices": [
                                                                        {
                                                                            "id": "130760786",
                                                                            "name": "Lime Soda",
                                                                            "price": 3600,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": -1,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {
                                                                "text": "Bestseller",
                                                                "textColor": "#ffffff",
                                                                "topBackgroundColor": "#d53d4c",
                                                                "bottomBackgroundColor": "#b02331"
                                                            },
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "isBestseller": true,
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.5",
                                                                    "ratingCount": "4261 ratings",
                                                                    "ratingCountV2": "4.3K+"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984283",
                                                            "menuFilterIds": [
                                                                "bestseller",
                                                                "NONVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32294356",
                                                            "name": "Beef Fry",
                                                            "category": "Main Course",
                                                            "description": "Boneless | Serves 1 | A flavorful and savory main course showcasing tender beef cooked to perfection.",
                                                            "imageId": "8ac64645fdff34769922164aa9b0a7f7",
                                                            "inStock": 1,
                                                            "price": 18000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {
                                                                "text": "Bestseller",
                                                                "textColor": "#ffffff",
                                                                "topBackgroundColor": "#d53d4c",
                                                                "bottomBackgroundColor": "#b02331"
                                                            },
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "isBestseller": true,
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.6",
                                                                    "ratingCount": "3142 ratings",
                                                                    "ratingCountV2": "3.1K+"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984272",
                                                            "menuFilterIds": [
                                                                "bestseller",
                                                                "NONVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32294363",
                                                            "name": "Chicken Curry",
                                                            "category": "Main Course",
                                                            "description": "Serves 1 | A delectable and hearty non-Veg main course that tantalizes the taste buds with its rich flavors and savory essence.",
                                                            "imageId": "8ca89d517990220cc34a44d7bb88e5dd",
                                                            "inStock": 1,
                                                            "price": 16700,
                                                            "variants": {
                                                                "variantGroups": [
                                                                    {
                                                                        "groupId": "2911246",
                                                                        "name": "Quantity",
                                                                        "variations": [
                                                                            {
                                                                                "name": "Half",
                                                                                "id": "9659454",
                                                                                "inStock": 1,
                                                                                "isEnabled": 1
                                                                            },
                                                                            {
                                                                                "name": "Full",
                                                                                "price": 8000,
                                                                                "default": 1,
                                                                                "id": "9659456",
                                                                                "inStock": 1,
                                                                                "isEnabled": 1
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {
                                                                "text": "Bestseller",
                                                                "textColor": "#ffffff",
                                                                "topBackgroundColor": "#d53d4c",
                                                                "bottomBackgroundColor": "#b02331"
                                                            },
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "isBestseller": true,
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.5",
                                                                    "ratingCount": "1304 ratings",
                                                                    "ratingCountV2": "1.3K+"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984286",
                                                            "menuFilterIds": [
                                                                "bestseller",
                                                                "NONVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32294337",
                                                            "name": "Beef Biriyani",
                                                            "category": "Main Course",
                                                            "description": "Boneless | Serves 1 | A flavorful and aromatic Main Course dish with tender beef and fragrant rice.",
                                                            "imageId": "78af59208d3d8ddea8383872cfb0ac5c",
                                                            "inStock": 1,
                                                            "price": 18200,
                                                            "variants": {
                                                                "variantGroups": [
                                                                    {
                                                                        "groupId": "2911244",
                                                                        "name": "Quantity",
                                                                        "variations": [
                                                                            {
                                                                                "name": "Half",
                                                                                "default": 1,
                                                                                "id": "9659424",
                                                                                "inStock": 1,
                                                                                "isEnabled": 1
                                                                            },
                                                                            {
                                                                                "name": "Full",
                                                                                "price": 6000,
                                                                                "id": "9659425",
                                                                                "inStock": 1,
                                                                                "isEnabled": 1
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "247057250",
                                                                    "groupName": "Beverages",
                                                                    "choices": [
                                                                        {
                                                                            "id": "130760786",
                                                                            "name": "Lime Soda",
                                                                            "price": 3600,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": -1,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {
                                                                "text": "Bestseller",
                                                                "textColor": "#ffffff",
                                                                "topBackgroundColor": "#d53d4c",
                                                                "bottomBackgroundColor": "#b02331"
                                                            },
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "isBestseller": true,
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.5",
                                                                    "ratingCount": "1875 ratings",
                                                                    "ratingCountV2": "1.9K+"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984266",
                                                            "menuFilterIds": [
                                                                "bestseller",
                                                                "NONVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32206302",
                                                            "name": "Chicken Fry",
                                                            "category": "Main Course",
                                                            "description": "Serves 1 | Served 1pc||\n\nSucculent and flavorful, this main course is a true delight for non-veg lovers.",
                                                            "imageId": "1b9e40b577fa9faaa3eec7e5abb44363",
                                                            "inStock": 1,
                                                            "price": 7300,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {
                                                                "text": "Bestseller",
                                                                "textColor": "#ffffff",
                                                                "topBackgroundColor": "#d53d4c",
                                                                "bottomBackgroundColor": "#b02331"
                                                            },
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "isBestseller": true,
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.5",
                                                                    "ratingCount": "1423 ratings",
                                                                    "ratingCountV2": "1.4K+"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984287",
                                                            "menuFilterIds": [
                                                                "bestseller",
                                                                "NONVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "167057996",
                                                            "name": "Nool Parotta",
                                                            "category": "Main Course",
                                                            "description": "Serves 1 | nool parotta",
                                                            "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/3/14/63215deb-9d73-48b9-b55e-09bf91636d9f_68834c11-191c-445a-b5cb-c9030b444a29.jpeg_compressed",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 2500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.6",
                                                                    "ratingCount": "330 ratings",
                                                                    "ratingCountV2": "330"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "100741626",
                                                            "menuFilterIds": [
                                                                "VEG",
                                                                "PUREVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32294361",
                                                            "name": "Beef Dry Fry ",
                                                            "category": "Main Course",
                                                            "description": "Boneless | Serves 1 | A flavorful and succulent non-vegetarian main course that will tantalize your taste buds.",
                                                            "imageId": "ebdaffa218c4648876f75a1f8138e730",
                                                            "inStock": 1,
                                                            "price": 20600,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {
                                                                "text": "Bestseller",
                                                                "textColor": "#ffffff",
                                                                "topBackgroundColor": "#d53d4c",
                                                                "bottomBackgroundColor": "#b02331"
                                                            },
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "isBestseller": true,
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.6",
                                                                    "ratingCount": "1449 ratings",
                                                                    "ratingCountV2": "1.4K+"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "58890084",
                                                            "menuFilterIds": [
                                                                "bestseller",
                                                                "NONVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "106866021",
                                                            "name": "Malabar Chicken Curry",
                                                            "category": "Main Course",
                                                            "description": "Boneless | A rich and flavorful curry bursting with aromatic spices and tender chicken, perfect for a satisfying main course.",
                                                            "imageId": "71dfbfed7669723ee8baa4682b4597ab",
                                                            "inStock": 1,
                                                            "price": 16000,
                                                            "variants": {
                                                                "variantGroups": [
                                                                    {
                                                                        "groupId": "23156844",
                                                                        "name": "Quantity",
                                                                        "variations": [
                                                                            {
                                                                                "name": "Half",
                                                                                "id": "75547093",
                                                                                "inStock": 1,
                                                                                "isEnabled": 1
                                                                            },
                                                                            {
                                                                                "name": "Full",
                                                                                "price": 6800,
                                                                                "default": 1,
                                                                                "id": "75547094",
                                                                                "inStock": 1,
                                                                                "isEnabled": 1
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG"
                                                            },
                                                            "ribbon": {
                                                                "text": "Bestseller",
                                                                "textColor": "#ffffff",
                                                                "topBackgroundColor": "#d53d4c",
                                                                "bottomBackgroundColor": "#b02331"
                                                            },
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "isBestseller": true,
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.6",
                                                                    "ratingCount": "348 ratings",
                                                                    "ratingCountV2": "348"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "61196208",
                                                            "menuFilterIds": [
                                                                "bestseller",
                                                                "NONVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32294342",
                                                            "name": "Kappa Biriyani ",
                                                            "category": "Main Course",
                                                            "description": "Serves 1 | A flavorful and aromatic non-veg dish that takes your taste buds on a delightful journey through the rich and diverse flavors of the main course.",
                                                            "imageId": "a7e36657ec17ca3178fd6ab1fd1fd9d9",
                                                            "inStock": 1,
                                                            "price": 15000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "247057703",
                                                                    "groupName": "Beverages",
                                                                    "choices": [
                                                                        {
                                                                            "id": "130760786",
                                                                            "name": "Lime Soda",
                                                                            "price": 3600,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": -1,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.5",
                                                                    "ratingCount": "1043 ratings",
                                                                    "ratingCountV2": "1.0K+"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984306",
                                                            "menuFilterIds": [
                                                                "NONVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32294350",
                                                            "name": "Puttu 1 Set",
                                                            "category": "Main Course",
                                                            "description": "Serves 1",
                                                            "imageId": "bde122290a1825118fe5a10fa03047a4",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 5400,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {
                                                                "text": "Bestseller",
                                                                "textColor": "#ffffff",
                                                                "topBackgroundColor": "#d53d4c",
                                                                "bottomBackgroundColor": "#b02331"
                                                            },
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "isBestseller": true,
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.7",
                                                                    "ratingCount": "1000 ratings",
                                                                    "ratingCountV2": "1.0K+"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "45576266",
                                                            "menuFilterIds": [
                                                                "bestseller",
                                                                "VEG",
                                                                "PUREVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32206295",
                                                            "name": "Kadala Curry",
                                                            "category": "Main Course",
                                                            "description": "Serves 1 | A flavorsome delicacy showcasing a delectable blend of aromatic spices and tender legumes in a rich, flavorful gravy.",
                                                            "imageId": "b1d72cf72139292b972db88e057dd31d",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 5000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.6",
                                                                    "ratingCount": "1133 ratings",
                                                                    "ratingCountV2": "1.1K+"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984304",
                                                            "menuFilterIds": [
                                                                "VEG",
                                                                "PUREVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32294359",
                                                            "name": "Beef Curry ",
                                                            "category": "Main Course",
                                                            "description": "Boneless | Serves 1 | Flavorful and hearty, this non-veg main course satisfies with tender beef cooked to perfection in a rich and aromatic curry sauce.",
                                                            "imageId": "d78eafbd932a63e525fed81e1af03629",
                                                            "inStock": 1,
                                                            "price": 18000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.7",
                                                                    "ratingCount": "1168 ratings",
                                                                    "ratingCountV2": "1.2K+"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984269",
                                                            "menuFilterIds": [
                                                                "NONVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32294347",
                                                            "name": "Idiyappam",
                                                            "category": "Main Course",
                                                            "description": "Serves 1 | A delightful and flavorful vegetarian main course, boasting a unique texture and a delectable taste.",
                                                            "imageId": "967c759724e2229d480bdee6cd5cf789",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 1600,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.6",
                                                                    "ratingCount": "1247 ratings",
                                                                    "ratingCountV2": "1.2K+"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984303",
                                                            "menuFilterIds": [
                                                                "VEG",
                                                                "PUREVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32206296",
                                                            "name": "Egg Curry ",
                                                            "category": "Main Course",
                                                            "description": "Serves 1 | A flavorful and satisfying main course highlighting the versatility of eggs.",
                                                            "imageId": "20aa3c1d25b457b2abe15244751636a8",
                                                            "inStock": 1,
                                                            "price": 5600,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "EGG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.7",
                                                                    "ratingCount": "956 ratings",
                                                                    "ratingCountV2": "956"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "45576264",
                                                            "menuFilterIds": [
                                                                "NONVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32294369",
                                                            "name": "Chicken Fry Special (cfs) ",
                                                            "category": "Main Course",
                                                            "description": "Serves 1 | 5 pcs|| A delectable non-vegetarian main course that will tickle your taste buds with its mouthwatering flavors.",
                                                            "imageId": "ee410854d50de34394b375269ad68352",
                                                            "inStock": 1,
                                                            "price": 19300,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {
                                                                "text": "Bestseller",
                                                                "textColor": "#ffffff",
                                                                "topBackgroundColor": "#d53d4c",
                                                                "bottomBackgroundColor": "#b02331"
                                                            },
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "isBestseller": true,
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.6",
                                                                    "ratingCount": "931 ratings",
                                                                    "ratingCountV2": "931"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984288",
                                                            "menuFilterIds": [
                                                                "bestseller",
                                                                "NONVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32294352",
                                                            "name": "Appam ",
                                                            "category": "Main Course",
                                                            "description": "Serves 1 | A delicious and flavorful South Indian specialty that satisfies the palate with its unique texture and irresistible taste.",
                                                            "imageId": "db3ec2b7a489651d8b4697b966e55593",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 1900,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.6",
                                                                    "ratingCount": "756 ratings",
                                                                    "ratingCountV2": "756"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984264",
                                                            "menuFilterIds": [
                                                                "VEG",
                                                                "PUREVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "182226090",
                                                            "name": "Erachi Puttu (beef)",
                                                            "category": "Main Course",
                                                            "description": "Serves 1",
                                                            "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/9/16/d607f27a-b7cc-4b67-bf12-abe37e37f5d6_2c88fe67-a99e-42f6-ad24-dfe49998f2c1.jpeg_compressed",
                                                            "inStock": 1,
                                                            "price": 12000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.1",
                                                                    "ratingCount": "9 ratings",
                                                                    "ratingCountV2": "9"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "110682753",
                                                            "menuFilterIds": [
                                                                "NONVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32294370",
                                                            "name": "Fish Curry",
                                                            "category": "Main Course",
                                                            "description": "Serves 1 | A flavorful and aromatic fish dish that captures the essence of tropical coastal flavors, sure to tantalize your taste buds.",
                                                            "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/11/30/f8fba69b-86bf-446d-b693-aa3e5ce438f4_15af1b65-0a8b-4d91-9f9d-c741f1107cb7.jpg",
                                                            "inStock": 1,
                                                            "price": 10800,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.6",
                                                                    "ratingCount": "674 ratings",
                                                                    "ratingCountV2": "674"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984299",
                                                            "menuFilterIds": [
                                                                "NONVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32294366",
                                                            "name": "Pepper Chicken",
                                                            "category": "Main Course",
                                                            "description": "Serves 1 | A succulent and flavorful chicken dish that showcases the perfect balance of savory and aromatic notes.",
                                                            "imageId": "44bca086de496e19cae30ca8e29ace18",
                                                            "inStock": 1,
                                                            "price": 18000,
                                                            "variants": {
                                                                "variantGroups": [
                                                                    {
                                                                        "groupId": "2911248",
                                                                        "name": "Quantity",
                                                                        "variations": [
                                                                            {
                                                                                "name": "Half",
                                                                                "default": 1,
                                                                                "id": "9659464",
                                                                                "inStock": 1,
                                                                                "isEnabled": 1
                                                                            },
                                                                            {
                                                                                "name": "Full",
                                                                                "price": 11300,
                                                                                "id": "9659465",
                                                                                "inStock": 1,
                                                                                "isEnabled": 1
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.4",
                                                                    "ratingCount": "699 ratings",
                                                                    "ratingCountV2": "699"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984320",
                                                            "menuFilterIds": [
                                                                "NONVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32294365",
                                                            "name": "Chilly Chicken",
                                                            "category": "Main Course",
                                                            "description": "Serves 1 | A delectable blend of tender chicken, bursting with tantalizing flavors that will leave you craving for more.",
                                                            "imageId": "1d45dedd598523dd17a2488d64f0428c",
                                                            "inStock": 1,
                                                            "price": 18000,
                                                            "variants": {
                                                                "variantGroups": [
                                                                    {
                                                                        "groupId": "2911247",
                                                                        "name": "Quantity",
                                                                        "variations": [
                                                                            {
                                                                                "name": "Half",
                                                                                "default": 1,
                                                                                "id": "9659459",
                                                                                "inStock": 1,
                                                                                "isEnabled": 1
                                                                            },
                                                                            {
                                                                                "name": "Full",
                                                                                "price": 11300,
                                                                                "id": "9659460",
                                                                                "inStock": 1,
                                                                                "isEnabled": 1
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.4",
                                                                    "ratingCount": "742 ratings",
                                                                    "ratingCountV2": "742"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984291",
                                                            "menuFilterIds": [
                                                                "NONVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "188108730",
                                                            "name": "Chicken Stew",
                                                            "category": "Main Course",
                                                            "description": "Serves 1",
                                                            "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/11/30/3e3125d0-30cd-4490-979d-91cd3921fdc1_3e85e326-17ed-4714-97f1-6fb07a8be3f4.jpg",
                                                            "inStock": 1,
                                                            "price": 12100,
                                                            "variants": {
                                                                "variantGroups": [
                                                                    {
                                                                        "groupId": "68935832",
                                                                        "name": "Quantity",
                                                                        "variations": [
                                                                            {
                                                                                "name": "Half",
                                                                                "default": 1,
                                                                                "id": "206443083",
                                                                                "inStock": 1,
                                                                                "isEnabled": 1
                                                                            },
                                                                            {
                                                                                "name": "Full",
                                                                                "price": 11900,
                                                                                "id": "206443084",
                                                                                "inStock": 1,
                                                                                "isEnabled": 1
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.4",
                                                                    "ratingCount": "4 ratings",
                                                                    "ratingCountV2": "4"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "114488728",
                                                            "menuFilterIds": [
                                                                "NONVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32206308",
                                                            "name": "Beef Stew",
                                                            "category": "Main Course",
                                                            "description": "Serves 1 | A hearty and flavorful beef stew, perfect for a satisfying and savory main course.",
                                                            "imageId": "a82691cba26ba72333ff48830dc31602",
                                                            "inStock": 1,
                                                            "price": 18600,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.6",
                                                                    "ratingCount": "354 ratings",
                                                                    "ratingCountV2": "354"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984275",
                                                            "menuFilterIds": [
                                                                "NONVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "106864137",
                                                            "name": "Idi Irachi (beef)",
                                                            "category": "Main Course",
                                                            "description": "Boneless | A succulent and flavorful beef dish that will leave you craving for more.",
                                                            "imageId": "818fb3950e41d0071ca63a9a8c6639eb",
                                                            "inStock": 1,
                                                            "price": 20600,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.6",
                                                                    "ratingCount": "144 ratings",
                                                                    "ratingCountV2": "144"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "61196207",
                                                            "menuFilterIds": [
                                                                "NONVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32206297",
                                                            "name": "Ghee Rice",
                                                            "category": "Main Course",
                                                            "description": "Serves 1 | A flavorful and aromatic vegetarian main course that is sure to satisfy with its buttery and fragrant ghee-infused rice.",
                                                            "imageId": "6f34f345603bf87bdc461ae114c735fe",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 12400,
                                                            "variants": {
                                                                "variantGroups": [
                                                                    {
                                                                        "groupId": "2896234",
                                                                        "name": "Quantity",
                                                                        "variations": [
                                                                            {
                                                                                "name": "Half",
                                                                                "default": 1,
                                                                                "id": "9599552",
                                                                                "inStock": 1,
                                                                                "isVeg": 1,
                                                                                "isEnabled": 1
                                                                            },
                                                                            {
                                                                                "name": "Full",
                                                                                "price": 3200,
                                                                                "id": "9599553",
                                                                                "inStock": 1,
                                                                                "isVeg": 1,
                                                                                "isEnabled": 1
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.5",
                                                                    "ratingCount": "919 ratings",
                                                                    "ratingCountV2": "919"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984302",
                                                            "menuFilterIds": [
                                                                "VEG",
                                                                "PUREVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32206301",
                                                            "name": "Pappadam Set",
                                                            "category": "Main Course",
                                                            "description": "Serves 1 | A flavorful and delectable vegetarian main course that satisfies the taste buds with its crispy and aromatic elements.",
                                                            "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/7/10/50e05e3d-0997-408c-9e00-05475e7535a6_eac71cca-71a5-4b17-91e2-95359d3a7c6d.jpg_compressed",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 1500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.7",
                                                                    "ratingCount": "412 ratings",
                                                                    "ratingCountV2": "412"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984317",
                                                            "menuFilterIds": [
                                                                "VEG",
                                                                "PUREVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32294349",
                                                            "name": "Pathiri ",
                                                            "category": "Main Course",
                                                            "description": "Serves 1 | A delectable, flavorful dish perfect for veggie lovers and a delightful addition to a satisfying main course.",
                                                            "imageId": "7ced86bab745f1cdbf72b90156c734a7",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 1200,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.6",
                                                                    "ratingCount": "793 ratings",
                                                                    "ratingCountV2": "793"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984319",
                                                            "menuFilterIds": [
                                                                "VEG",
                                                                "PUREVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32206299",
                                                            "name": "Veg Kurma",
                                                            "category": "Main Course",
                                                            "description": "Serves 1 | A flavorful and aromatic vegetable curry that is perfect for a satisfying main course.",
                                                            "imageId": "d424ad7cc484f32bc3dfc4851966e0ed",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 7600,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.5",
                                                                    "ratingCount": "349 ratings",
                                                                    "ratingCountV2": "349"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984330",
                                                            "menuFilterIds": [
                                                                "VEG",
                                                                "PUREVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "55802251",
                                                            "name": "Chicken Biriyani (1 Piece)",
                                                            "category": "Main Course",
                                                            "description": "Serves 1 | A flavorful and aromatic chicken biriyani that satisfies your craving for a hearty and delicious non-veg main course.",
                                                            "imageId": "4aec9046a4fe804da014247138b42eb5",
                                                            "inStock": 1,
                                                            "price": 21600,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "247057185",
                                                                    "groupName": "Beverages",
                                                                    "choices": [
                                                                        {
                                                                            "id": "130760786",
                                                                            "name": "Lime Soda",
                                                                            "price": 3600,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": -1,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.5",
                                                                    "ratingCount": "207 ratings",
                                                                    "ratingCountV2": "207"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984284",
                                                            "menuFilterIds": [
                                                                "NONVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32294345",
                                                            "name": "Chapati ",
                                                            "category": "Main Course",
                                                            "description": "Serves 1 | 1pc|| \n\nA mouthwatering vegetarian staple that is perfect for a delicious main course, unleavened and freshly cooked.",
                                                            "imageId": "99b9d2a348018f1cee00f321cfb3cf6d",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 2100,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.5",
                                                                    "ratingCount": "629 ratings",
                                                                    "ratingCountV2": "629"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984282",
                                                            "menuFilterIds": [
                                                                "VEG",
                                                                "PUREVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32294354",
                                                            "name": "Neer Dosa",
                                                            "category": "Main Course",
                                                            "description": "Serves 1 | A delicate and light main course that delights with its tender texture and subtle flavors.",
                                                            "imageId": "f428da3b3250619cfb2e3709430a4aa2",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 1700,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "233763956",
                                                                    "groupName": "Beverages",
                                                                    "choices": [
                                                                        {
                                                                            "id": "130760786",
                                                                            "name": "Lime Soda",
                                                                            "price": 3600,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": -1,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.7",
                                                                    "ratingCount": "651 ratings",
                                                                    "ratingCountV2": "651"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984315",
                                                            "menuFilterIds": [
                                                                "VEG",
                                                                "PUREVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32294367",
                                                            "name": "Garlic Chicken",
                                                            "category": "Main Course",
                                                            "description": "Serves 1 | Succulent chicken infused with the savory aroma of garlic, a delightful delight for any non-veg lover seeking a flavorsome main course.",
                                                            "imageId": "8b9626b213cdd906a40c57ba82ac4b7b",
                                                            "inStock": 1,
                                                            "price": 18000,
                                                            "variants": {
                                                                "variantGroups": [
                                                                    {
                                                                        "groupId": "2911249",
                                                                        "name": "Quantity",
                                                                        "variations": [
                                                                            {
                                                                                "name": "Half",
                                                                                "default": 1,
                                                                                "id": "9659469",
                                                                                "inStock": 1,
                                                                                "isEnabled": 1
                                                                            },
                                                                            {
                                                                                "name": "Full",
                                                                                "price": 11300,
                                                                                "id": "9659470",
                                                                                "inStock": 1,
                                                                                "isEnabled": 1
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.4",
                                                                    "ratingCount": "501 ratings",
                                                                    "ratingCountV2": "501"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984301",
                                                            "menuFilterIds": [
                                                                "NONVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "129766775",
                                                            "name": "Thattu Dosa",
                                                            "category": "Main Course",
                                                            "description": "A delectable and flavorsome veg main course that will satiate your taste buds with its delectable flavors and enticing aroma.",
                                                            "imageId": "6b408d0250c67bcc9e609fc17d623c62",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 1800,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "259203815",
                                                                    "groupName": "Beverages",
                                                                    "choices": [
                                                                        {
                                                                            "id": "130760786",
                                                                            "name": "Lime Soda",
                                                                            "price": 3600,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": -1,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.6",
                                                                    "ratingCount": "133 ratings",
                                                                    "ratingCountV2": "133"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "75376435",
                                                            "menuFilterIds": [
                                                                "VEG",
                                                                "PUREVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "182683727",
                                                            "name": "Squid Tawa Fry",
                                                            "category": "Main Course",
                                                            "description": "Kerala Special squid/koonthal tawa fry !",
                                                            "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/9/21/3041ba6f-4d85-4754-946a-815007e4d824_89a484c9-e0ea-4a98-b143-242c0d526b7f.jpg",
                                                            "inStock": 1,
                                                            "price": 19500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.6",
                                                                    "ratingCount": "12 ratings",
                                                                    "ratingCountV2": "12"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "110970548",
                                                            "menuFilterIds": [
                                                                "NONVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32294339",
                                                            "name": "Egg Biriyani",
                                                            "category": "Main Course",
                                                            "description": "Serves 1 | A flavorful and aromatic egg-based dish that satisfies as a satisfying main course.",
                                                            "imageId": "fb7dd3f7fc768fe3a3bd103b5e689340",
                                                            "inStock": 1,
                                                            "price": 18600,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "247057706",
                                                                    "groupName": "Beverages",
                                                                    "choices": [
                                                                        {
                                                                            "id": "130760786",
                                                                            "name": "Lime Soda",
                                                                            "price": 3600,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": -1,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "EGG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.7",
                                                                    "ratingCount": "254 ratings",
                                                                    "ratingCountV2": "254"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984294",
                                                            "menuFilterIds": [
                                                                "NONVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32206307",
                                                            "name": "Omelette",
                                                            "category": "Main Course",
                                                            "description": "Serves 1 | A flavorful and satisfying egg dish that makes for a delightful main course.",
                                                            "imageId": "c1a93719a01ecf76ed4c96c76521c460",
                                                            "inStock": 1,
                                                            "price": 5000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "EGG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.7",
                                                                    "ratingCount": "248 ratings",
                                                                    "ratingCountV2": "248"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984316",
                                                            "menuFilterIds": [
                                                                "NONVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32206298",
                                                            "name": "Biryani Rice",
                                                            "category": "Main Course",
                                                            "description": "Serves 1 | A delectable medley of aromatic rice and flavorful vegetables, perfect for a satisfying and hearty main course.",
                                                            "imageId": "06e996aae67fea4e154fd5df4779a69c",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 13000,
                                                            "variants": {
                                                                "variantGroups": [
                                                                    {
                                                                        "groupId": "2896235",
                                                                        "name": "Quantity",
                                                                        "variations": [
                                                                            {
                                                                                "name": "Half",
                                                                                "default": 1,
                                                                                "id": "9599554",
                                                                                "inStock": 1,
                                                                                "isEnabled": 1
                                                                            },
                                                                            {
                                                                                "name": "Full",
                                                                                "price": 4600,
                                                                                "id": "9599555",
                                                                                "inStock": 1,
                                                                                "isEnabled": 1
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "247057286",
                                                                    "groupName": "Beverages",
                                                                    "choices": [
                                                                        {
                                                                            "id": "130760786",
                                                                            "name": "Lime Soda",
                                                                            "price": 3600,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": -1,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.6",
                                                                    "ratingCount": "397 ratings",
                                                                    "ratingCountV2": "397"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984277",
                                                            "menuFilterIds": [
                                                                "VEG",
                                                                "PUREVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32206303",
                                                            "name": "Beef Omelette",
                                                            "category": "Main Course",
                                                            "description": "Serves 1 | A delightful and savory combination of tender beef and fluffy omelette, a hearty main course to satisfy any meat lover's cravings.",
                                                            "imageId": "cfc2ef927bad610dec9299f237ad4d15",
                                                            "inStock": 1,
                                                            "price": 11300,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.8",
                                                                    "ratingCount": "231 ratings",
                                                                    "ratingCountV2": "231"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984274",
                                                            "menuFilterIds": [
                                                                "NONVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32294372",
                                                            "name": "Beef Cutlet",
                                                            "category": "Main Course",
                                                            "description": "Serves 1 | Serves 1|",
                                                            "imageId": "540295b57ce72a28750ec61144f51f2f",
                                                            "inStock": 1,
                                                            "price": 3400,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.6",
                                                                    "ratingCount": "425 ratings",
                                                                    "ratingCountV2": "425"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984270",
                                                            "menuFilterIds": [
                                                                "NONVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32294341",
                                                            "name": "Kappa ",
                                                            "category": "Main Course",
                                                            "description": "Serves 1 | A delectable veg delight, perfect for your main course cravings.",
                                                            "imageId": "f8594a2360a56fec0e9f9415a3b291d3",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 9800,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.5",
                                                                    "ratingCount": "307 ratings",
                                                                    "ratingCountV2": "307"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984305",
                                                            "menuFilterIds": [
                                                                "VEG",
                                                                "PUREVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "188108731",
                                                            "name": "3Pc Steamed Bread + Half Chicken Stew",
                                                            "category": "Main Course",
                                                            "description": "Serves 1",
                                                            "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/11/30/57ab4ae9-acd5-49b0-acd0-ea7e5bee1e22_c9296032-4cca-439e-848c-fdd5d74fc315.jpg",
                                                            "inStock": 1,
                                                            "price": 16000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "5.0",
                                                                    "ratingCount": "4 ratings",
                                                                    "ratingCountV2": "4"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "114488727",
                                                            "menuFilterIds": [
                                                                "NONVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32294340",
                                                            "name": "Vegetable Biriyani",
                                                            "category": "Main Course",
                                                            "description": "Serves 1 | A fragrant and flavorful vegetable medley, cooked with aromatic spices and long-grain basmati rice, resulting in a delectable vegetarian main course.",
                                                            "imageId": "05f8512403970c751649fd7e2559e16b",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 18600,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "247057258",
                                                                    "groupName": "Beverages",
                                                                    "choices": [
                                                                        {
                                                                            "id": "130760786",
                                                                            "name": "Lime Soda",
                                                                            "price": 3600,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": -1,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.8",
                                                                    "ratingCount": "85 ratings",
                                                                    "ratingCountV2": "85"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984328",
                                                            "menuFilterIds": [
                                                                "VEG",
                                                                "PUREVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32206300",
                                                            "name": "Boiled Egg (1 Egg)",
                                                            "category": "Main Course",
                                                            "description": "Serves 1 | A simply prepared egg dish that shines as a delightful, flavorful main course.",
                                                            "imageId": "ae19422062f1be6440b4459702e5a2c3",
                                                            "inStock": 1,
                                                            "price": 1500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "EGG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.8",
                                                                    "ratingCount": "302 ratings",
                                                                    "ratingCountV2": "302"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984280",
                                                            "menuFilterIds": [
                                                                "NONVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "166143637",
                                                            "name": "Chicken mini samosa",
                                                            "category": "Main Course",
                                                            "description": "samosa chicken",
                                                            "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/3/5/db1e4398-83c2-4c8d-9fca-aab7bcf70fcb_4e491a68-e70c-4fc4-872d-fad85b79cd77.jpg",
                                                            "inStock": 1,
                                                            "price": 2000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.9",
                                                                    "ratingCount": "17 ratings",
                                                                    "ratingCountV2": "17"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "100093197",
                                                            "menuFilterIds": [
                                                                "NONVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "188108729",
                                                            "name": "Steamed Bread 3pc",
                                                            "category": "Main Course",
                                                            "description": "Serves 1",
                                                            "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/11/30/7a207365-36c3-4819-bc63-991bb8fc0f22_e03c1b86-c630-4227-a03b-f0e59e2aad73.jpg",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 3900,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {}
                                                            },
                                                            "parentId": "114488729",
                                                            "menuFilterIds": [
                                                                "VEG",
                                                                "PUREVEG"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "128260543",
                                                            "name": "Chilli Beef",
                                                            "category": "Main Course",
                                                            "description": "A hearty and flavorful beef dish that will satisfy your taste buds with its savory flavors and tender meat.",
                                                            "imageId": "a56b2d5b9068ddd55ee9e54a4ca734a0",
                                                            "price": 21900,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "nextAvailableAtMessage": "Next available at 11 am, tomorrow",
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.5",
                                                                    "ratingCount": "62 ratings",
                                                                    "ratingCountV2": "62"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "74347927",
                                                            "menuFilterIds": [
                                                                "NONVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32294334",
                                                            "name": "Veg Meals",
                                                            "category": "Main Course",
                                                            "description": "Serves 1 | A satisfying and flavorful vegetarian main course that will leave you wanting more.",
                                                            "imageId": "b9c58ff4dcd61d1bce62d90b4b08b8e4",
                                                            "isVeg": 1,
                                                            "price": 10400,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "nextAvailableAtMessage": "Next available at 12 noon, tomorrow",
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.5",
                                                                    "ratingCount": "571 ratings",
                                                                    "ratingCountV2": "571"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984331",
                                                            "menuFilterIds": [
                                                                "VEG",
                                                                "PUREVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32294371",
                                                            "name": "Banana Fry",
                                                            "category": "Main Course",
                                                            "description": "Serves 1 | Serves 1|",
                                                            "imageId": "3ef480d5af7c22c30a3febdab1b21ee2",
                                                            "isVeg": 1,
                                                            "price": 2600,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "nextAvailableAtMessage": "Next available at 3 pm, tomorrow",
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.8",
                                                                    "ratingCount": "214 ratings",
                                                                    "ratingCountV2": "214"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984265",
                                                            "menuFilterIds": [
                                                                "VEG",
                                                                "PUREVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "144722206",
                                                            "name": "Beef Samosa",
                                                            "category": "Main Course",
                                                            "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/14/5431fff0-1fea-4880-bf03-a071c16d6cfa_a054ec13-94d4-4bb3-a653-e996cf79d540.jpg",
                                                            "price": 2500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "nextAvailableAtMessage": "Next available at 3 pm, tomorrow",
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.6",
                                                                    "ratingCount": "35 ratings",
                                                                    "ratingCountV2": "35"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "79821850",
                                                            "menuFilterIds": [
                                                                "NONVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                }
                                            ],
                                            "subtitleSuffix": {},
                                            "image": "d1516e7abe6e666672988ac54b2e77c2",
                                            "categoryId": "4182145"
                                        }
                                    }
                                },
                                {
                                    "card": {
                                        "card": {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            "title": "Beverages",
                                            "itemCards": [
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32294385",
                                                            "name": "Lime Juice",
                                                            "category": "Beverages",
                                                            "description": "Serves 1 | A refreshing and tangy citrus beverage that invigorates your taste buds with its zesty lime flavor.",
                                                            "imageId": "3b5d51f8a324f3cca7f3abf3d95b9c78",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 2900,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.4",
                                                                    "ratingCount": "668 ratings",
                                                                    "ratingCountV2": "668"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984307",
                                                            "menuFilterIds": [
                                                                "VEG",
                                                                "PUREVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32294384",
                                                            "name": "Lime Soda",
                                                            "category": "Beverages",
                                                            "description": "Serves 1 | A refreshing and zesty citrus beverage that will instantly quench your thirst.",
                                                            "imageId": "3b5d51f8a324f3cca7f3abf3d95b9c78",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 3600,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.6",
                                                                    "ratingCount": "285 ratings",
                                                                    "ratingCountV2": "285"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984308",
                                                            "menuFilterIds": [
                                                                "VEG",
                                                                "PUREVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32294331",
                                                            "name": "Lime Tea",
                                                            "category": "Beverages",
                                                            "description": "Serves 1 | A refreshing blend of tangy lime and invigorating tea, perfect for a delightful and refreshing break.",
                                                            "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/21/772d6c94-be58-45cb-99b5-8290ee777a31_b0b7c955-31f6-476f-ada2-420ddbcbe72b.JPG",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 2300,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.8",
                                                                    "ratingCount": "103 ratings",
                                                                    "ratingCountV2": "103"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984309",
                                                            "menuFilterIds": [
                                                                "VEG",
                                                                "PUREVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "101612744",
                                                            "name": "Tender Juice",
                                                            "category": "Beverages",
                                                            "description": "Serves 1",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 4400,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "3.7",
                                                                    "ratingCount": "23 ratings",
                                                                    "ratingCountV2": "23"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#D9EFEC",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_medium",
                                                                    "ratingTextColor": "rating_medium",
                                                                    "ratingCountTextColor": "rating_medium",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "57439453",
                                                            "menuFilterIds": [
                                                                "VEG",
                                                                "PUREVEG"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32294386",
                                                            "name": "Tea",
                                                            "category": "Beverages",
                                                            "description": "Serves 1 | A refreshing and invigorating hot beverage infused with aromatic flavors to revitalize your senses.",
                                                            "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/21/c803e548-b180-45f3-b749-5237f564fd22_899ab790-0aaf-448d-a9be-7d9a4995ba12.JPG",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 2400,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.6",
                                                                    "ratingCount": "326 ratings",
                                                                    "ratingCountV2": "326"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984326",
                                                            "menuFilterIds": [
                                                                "VEG",
                                                                "PUREVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32294388",
                                                            "name": "Coffee",
                                                            "category": "Beverages",
                                                            "description": "Serves 1 | Rich and aromatic, this energizing beverage is the perfect blend of flavors to kickstart your day.",
                                                            "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/21/50cc3a68-a091-4443-a169-632589d5ab11_44bdb856-22f0-4311-8f87-1b632b6ff974.JPG",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 2900,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.8",
                                                                    "ratingCount": "128 ratings",
                                                                    "ratingCountV2": "128"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984292",
                                                            "menuFilterIds": [
                                                                "VEG",
                                                                "PUREVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32294387",
                                                            "name": "Black Tea",
                                                            "category": "Beverages",
                                                            "description": "Serves 1 | Indulge in a rich and aromatic blend of black tea, crafted to perfection for a delightful beverage experience.",
                                                            "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/21/d0bb406d-bfe3-4544-a3ce-3ee437102884_c56e04f9-49a6-451a-98ab-f50b17805d5a.JPG",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 1700,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.8",
                                                                    "ratingCount": "33 ratings",
                                                                    "ratingCountV2": "33"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984279",
                                                            "menuFilterIds": [
                                                                "VEG",
                                                                "PUREVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32206309",
                                                            "name": "Milk",
                                                            "category": "Beverages",
                                                            "description": "Serves 1 | A creamy and refreshing beverage that satisfies any thirst with its smooth texture.",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 2900,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.9",
                                                                    "ratingCount": "36 ratings",
                                                                    "ratingCountV2": "36"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984310",
                                                            "menuFilterIds": [
                                                                "VEG",
                                                                "PUREVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32294330",
                                                            "name": "Black Coffee",
                                                            "category": "Beverages",
                                                            "description": "Serves 1 | A bold and invigorating beverage to start your day, Black Coffee offers a rich and smooth flavor that awakens your senses.",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 2200,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "5.0",
                                                                    "ratingCount": "21 ratings",
                                                                    "ratingCountV2": "21"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984278",
                                                            "menuFilterIds": [
                                                                "VEG",
                                                                "PUREVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "32206312",
                                                            "name": "Soda",
                                                            "category": "Beverages",
                                                            "description": "Serves 1 | A refreshing and effervescent veg beverage bursting with flavor.",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 1600,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.4",
                                                                    "ratingCount": "25 ratings",
                                                                    "ratingCountV2": "25"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984325",
                                                            "menuFilterIds": [
                                                                "VEG",
                                                                "PUREVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "93512274",
                                                            "name": "Tender Shake",
                                                            "category": "Beverages",
                                                            "description": "Serves 1",
                                                            "imageId": "r6hzip9o87nwpuimw96t",
                                                            "isVeg": 1,
                                                            "price": 8700,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "nextAvailableAtMessage": "Next available at 11 am, tomorrow",
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.6",
                                                                    "ratingCount": "79 ratings",
                                                                    "ratingCountV2": "79"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "51418634",
                                                            "menuFilterIds": [
                                                                "VEG",
                                                                "PUREVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                }
                                            ],
                                            "subtitleSuffix": {},
                                            "image": "3b5d51f8a324f3cca7f3abf3d95b9c78",
                                            "categoryId": "4182146"
                                        }
                                    }
                                },
                                {
                                    "card": {
                                        "card": {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                                            "title": "Large Order",
                                            "categories": [
                                                {
                                                    "title": "Biryani",
                                                    "itemCards": [
                                                        {
                                                            "card": {
                                                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                                "info": {
                                                                    "id": "189988274",
                                                                    "name": "Beef Biriyani (Pack of 4)                 ",
                                                                    "category": "Large Order",
                                                                    "inStock": 1,
                                                                    "price": 72800,
                                                                    "variants": {},
                                                                    "variantsV2": {},
                                                                    "itemAttribute": {
                                                                        "vegClassifier": "NONVEG"
                                                                    },
                                                                    "ribbon": {},
                                                                    "type": "ITEM",
                                                                    "itemBadge": {},
                                                                    "badgesV2": {},
                                                                    "ratings": {
                                                                        "aggregatedRating": {}
                                                                    },
                                                                    "parentId": "115606380",
                                                                    "menuFilterIds": [
                                                                        "NONVEG"
                                                                    ]
                                                                },
                                                                "analytics": {},
                                                                "hideRestaurantDetails": true
                                                            }
                                                        },
                                                        {
                                                            "card": {
                                                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                                "info": {
                                                                    "id": "189988264",
                                                                    "name": "Chicken Biriyani (Pack of 4)                 ",
                                                                    "category": "Large Order",
                                                                    "inStock": 1,
                                                                    "price": 67600,
                                                                    "variants": {},
                                                                    "variantsV2": {},
                                                                    "itemAttribute": {
                                                                        "vegClassifier": "NONVEG"
                                                                    },
                                                                    "ribbon": {},
                                                                    "type": "ITEM",
                                                                    "itemBadge": {},
                                                                    "badgesV2": {},
                                                                    "ratings": {
                                                                        "aggregatedRating": {}
                                                                    },
                                                                    "parentId": "115606382",
                                                                    "menuFilterIds": [
                                                                        "NONVEG"
                                                                    ]
                                                                },
                                                                "analytics": {},
                                                                "hideRestaurantDetails": true
                                                            }
                                                        },
                                                        {
                                                            "card": {
                                                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                                "info": {
                                                                    "id": "190001330",
                                                                    "name": "Biryani Rice (Pack of 4)     ",
                                                                    "category": "Large Order",
                                                                    "inStock": 1,
                                                                    "isVeg": 1,
                                                                    "price": 52000,
                                                                    "variants": {},
                                                                    "variantsV2": {},
                                                                    "itemAttribute": {
                                                                        "vegClassifier": "VEG"
                                                                    },
                                                                    "ribbon": {},
                                                                    "type": "ITEM",
                                                                    "itemBadge": {},
                                                                    "badgesV2": {},
                                                                    "ratings": {
                                                                        "aggregatedRating": {}
                                                                    },
                                                                    "parentId": "115606381",
                                                                    "menuFilterIds": [
                                                                        "VEG",
                                                                        "PUREVEG"
                                                                    ]
                                                                },
                                                                "analytics": {},
                                                                "hideRestaurantDetails": true
                                                            }
                                                        },
                                                        {
                                                            "card": {
                                                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                                "info": {
                                                                    "id": "190001343",
                                                                    "name": "Egg Biriyani (Pack of 4)     ",
                                                                    "category": "Large Order",
                                                                    "inStock": 1,
                                                                    "price": 74400,
                                                                    "variants": {},
                                                                    "variantsV2": {},
                                                                    "itemAttribute": {
                                                                        "vegClassifier": "EGG"
                                                                    },
                                                                    "ribbon": {},
                                                                    "type": "ITEM",
                                                                    "itemBadge": {},
                                                                    "badgesV2": {},
                                                                    "ratings": {
                                                                        "aggregatedRating": {}
                                                                    },
                                                                    "parentId": "115606383",
                                                                    "menuFilterIds": [
                                                                        "NONVEG"
                                                                    ]
                                                                },
                                                                "analytics": {},
                                                                "hideRestaurantDetails": true
                                                            }
                                                        },
                                                        {
                                                            "card": {
                                                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                                "info": {
                                                                    "id": "189988289",
                                                                    "name": "Kappa Biriyani (Pack of 4)                 ",
                                                                    "category": "Large Order",
                                                                    "inStock": 1,
                                                                    "price": 60000,
                                                                    "variants": {},
                                                                    "variantsV2": {},
                                                                    "itemAttribute": {
                                                                        "vegClassifier": "NONVEG"
                                                                    },
                                                                    "ribbon": {},
                                                                    "type": "ITEM",
                                                                    "itemBadge": {},
                                                                    "badgesV2": {},
                                                                    "ratings": {
                                                                        "aggregatedRating": {}
                                                                    },
                                                                    "parentId": "115606384",
                                                                    "menuFilterIds": [
                                                                        "NONVEG"
                                                                    ]
                                                                },
                                                                "analytics": {},
                                                                "hideRestaurantDetails": true
                                                            }
                                                        },
                                                        {
                                                            "card": {
                                                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                                "info": {
                                                                    "id": "190001362",
                                                                    "name": "Vegetable Biriyani (Pack of 4)     ",
                                                                    "category": "Large Order",
                                                                    "inStock": 1,
                                                                    "isVeg": 1,
                                                                    "price": 74400,
                                                                    "variants": {},
                                                                    "variantsV2": {},
                                                                    "itemAttribute": {
                                                                        "vegClassifier": "VEG"
                                                                    },
                                                                    "ribbon": {},
                                                                    "type": "ITEM",
                                                                    "itemBadge": {},
                                                                    "badgesV2": {},
                                                                    "ratings": {
                                                                        "aggregatedRating": {}
                                                                    },
                                                                    "parentId": "115606385",
                                                                    "menuFilterIds": [
                                                                        "VEG",
                                                                        "PUREVEG"
                                                                    ]
                                                                },
                                                                "analytics": {},
                                                                "hideRestaurantDetails": true
                                                            }
                                                        }
                                                    ],
                                                    "subtitleSuffix": {},
                                                    "categoryId": "70140765"
                                                }
                                            ],
                                            "categoryId": "70140441"
                                        }
                                    }
                                },
                                {
                                    "card": {
                                        "card": {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            "title": "Beverage Combos",
                                            "itemCards": [
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "48751543",
                                                            "name": "Beef Biriyani (1 Pc) + Lime Juice",
                                                            "category": "Beverage Combos",
                                                            "description": "Serves 1 | A mouthwatering combination of tender beef biriyani paired with a refreshing burst of lime juice.",
                                                            "imageId": "grkggrstzlp676eb0qhi",
                                                            "inStock": 1,
                                                            "price": 21100,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "247057719",
                                                                    "groupName": "Beverages",
                                                                    "choices": [
                                                                        {
                                                                            "id": "130760786",
                                                                            "name": "Lime Soda",
                                                                            "price": 3600,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": -1,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.8",
                                                                    "ratingCount": "392 ratings",
                                                                    "ratingCountV2": "392"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "63977018",
                                                            "menuFilterIds": [
                                                                "NONVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "48751606",
                                                            "name": "Chicken Biriyani + Lime juice",
                                                            "category": "Beverage Combos",
                                                            "description": "Serves 1 | A delectable combination of tender chicken biryani paired with refreshing lime juice.",
                                                            "inStock": 1,
                                                            "price": 19800,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "247057717",
                                                                    "groupName": "Beverages",
                                                                    "choices": [
                                                                        {
                                                                            "id": "130760786",
                                                                            "name": "Lime Soda",
                                                                            "price": 3600,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": -1,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.8",
                                                                    "ratingCount": "454 ratings",
                                                                    "ratingCountV2": "454"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984285",
                                                            "menuFilterIds": [
                                                                "NONVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "48751713",
                                                            "name": "Vegetable biriyani + Lime juice",
                                                            "category": "Beverage Combos",
                                                            "description": "Serves 1 | A tantalizing blend of fragrant rice and assorted vegetables paired with the zesty freshness of lime juice for a delightful fusion of flavors.",
                                                            "imageId": "m5ubnjp9npdz37kasatp",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 21500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "230818654",
                                                                    "groupName": "Beverages",
                                                                    "choices": [
                                                                        {
                                                                            "id": "130760786",
                                                                            "name": "Lime Soda",
                                                                            "price": 3600,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": -1,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "5.0",
                                                                    "ratingCount": "20 ratings",
                                                                    "ratingCountV2": "20"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984329",
                                                            "menuFilterIds": [
                                                                "VEG",
                                                                "PUREVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "48751660",
                                                            "name": "Egg Biriyani + Lime juice",
                                                            "category": "Beverage Combos",
                                                            "description": "Serves 1 | A refreshing combination of zesty lime juice with the flavors of perfectly cooked eggs, creating a delectable Biriyani experience.",
                                                            "inStock": 1,
                                                            "price": 21500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "230818649",
                                                                    "groupName": "Beverages",
                                                                    "choices": [
                                                                        {
                                                                            "id": "130760786",
                                                                            "name": "Lime Soda",
                                                                            "price": 3600,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": -1,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "EGG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.3",
                                                                    "ratingCount": "22 ratings",
                                                                    "ratingCountV2": "22"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984295",
                                                            "menuFilterIds": [
                                                                "NONVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                }
                                            ],
                                            "subtitleSuffix": {},
                                            "image": "grkggrstzlp676eb0qhi",
                                            "categoryId": "9005036"
                                        }
                                    }
                                },
                                {
                                    "card": {
                                        "card": {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            "title": "Main course",
                                            "itemCards": [
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "48310574",
                                                            "name": "Chicken Ghee Roast Half",
                                                            "category": "Main course",
                                                            "description": "Serves 1 | Tender chicken cooked in aromatic spices, richly infused with clarified butter to create a mouthwatering and satisfying main course option.",
                                                            "imageId": "5a03d64454c2c9029704f9fd87e0a822",
                                                            "inStock": 1,
                                                            "price": 19300,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.7",
                                                                    "ratingCount": "354 ratings",
                                                                    "ratingCountV2": "354"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984290",
                                                            "menuFilterIds": [
                                                                "NONVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "48310575",
                                                            "name": "Chicken Ghee Roast Full",
                                                            "category": "Main course",
                                                            "description": "Serves 1 | A rich and flavorful chicken roast that will tantalize your taste buds with its aromatic ghee-infused goodness.",
                                                            "imageId": "5a03d64454c2c9029704f9fd87e0a822",
                                                            "inStock": 1,
                                                            "price": 32500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "Serves 1"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.8",
                                                                    "ratingCount": "62 ratings",
                                                                    "ratingCountV2": "62"
                                                                },
                                                                "ratingsPresentationConfig": {
                                                                    "bgGradient": {
                                                                        "colours": [
                                                                            "#C8F9E5",
                                                                            "#00FFFFFF"
                                                                        ],
                                                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                                                    },
                                                                    "ratingIconColor": "rating_very_good",
                                                                    "ratingTextColor": "rating_very_good",
                                                                    "ratingCountTextColor": "rating_very_good",
                                                                    "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                                                }
                                                            },
                                                            "parentId": "8984289",
                                                            "menuFilterIds": [
                                                                "NONVEG",
                                                                "toprated"
                                                            ]
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                }
                                            ],
                                            "subtitleSuffix": {},
                                            "image": "5a03d64454c2c9029704f9fd87e0a822",
                                            "categoryId": "8864064"
                                        }
                                    }
                                },
                                {
                                    "card": {
                                        "card": {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo",
                                            "type": "FSSAI",
                                            "imageId": "fssai_final_edss9i",
                                            "text": [
                                                "License No. 11219312000081"
                                            ]
                                        }
                                    }
                                },
                                {
                                    "card": {
                                        "card": {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
                                            "name": "Cochin Village Restaurant",
                                            "area": "Kankanady",
                                            "completeAddress": "old police station road kanakanady mangalore,575002"
                                        }
                                    }
                                }
                            ]
                        }
                    }
                }
            }
        ],
        "firstOffsetRequest": true,
        "isQCLink": false
    },
    "tid": "00c38acf-2a2a-49c7-979c-7c474fee5e32",
    "sid": "pb7cf002-93cd-41af-a686-f9bf17f62bab",
    "deviceId": "3120bc47-7898-a1f3-3d26-c03aebde2e65",
    "csrfToken": "rYVKEeqXUN29-seae8piaUkN-jT041w6ozqCjb1E"
}]


export default Restodata