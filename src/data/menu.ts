/* MENU DATA: Verified from client-provided menu — all categories */

export type MenuBadge = 'houseSpecial' | 'houseSignature' | 'rawMeat' | 'promoDeal' | 'vegan' | 'vegetarian' | 'large'

export interface MenuItem {
  code?: string
  name: string
  description?: string
  price: string | number
  badges?: MenuBadge[]
  spiceLevel?: boolean  // true = accepts 0–5 spice
  notes?: string
}

export interface MenuSection {
  id: string
  title: string
  description?: string
  items: MenuItem[]
}

/* ─────────────────────────────────────────────────────────────────────────────
   MENU DATA: Verified from client-provided menu — Appetizers
   ───────────────────────────────────────────────────────────────────────────── */
export const appetizers: MenuItem[] = [
  {
    code: 'A1',
    name: 'Spring Roll (2 Rolls)',
    description:
      'Green leaf lettuce, bean sprout, vermicelli, rolled in tapioca sheet, served with home-made peanut sauce.',
    price: 8.25,
  },
  {
    code: 'A2',
    name: 'Fried Egg Roll',
    description:
      'Grounded pork, shrimp, cabbage, carrot, taro, tapioca noodle, onion, garlic, and egg. Served with sweet and sour sauce.',
    price: 7.25,
  },
  {
    code: 'A2',
    name: 'Fried Veggie Roll',
    description: 'Our vegetarian favorite! Served with sweet and sour sauce.',
    price: 7.25,
    badges: ['vegetarian'],
  },
  {
    code: 'A3',
    name: 'Pot Sticker (4 PCS)',
    description:
      'Deep fried grounded pork or chicken, cabbage, onion, served with sweet soy sauce.',
    price: 7.25,
  },
  {
    code: 'A4',
    name: 'Crab Rangoon (4 PCS)',
    description:
      'Deep fried cheesy imitation crab meat, green onion, wrapped in wonton paper, served with sweet and sour sauce.',
    price: 8.25,
  },
  {
    code: 'A5',
    name: 'Classic Plain Wing',
    description:
      'Super crispy breaded fried chicken wings, seasoned with secret spices, served with sweet and sour sauce.',
    price: 8.95,
  },
  {
    code: 'A6',
    name: 'Garlic and Pepper Wing',
    description:
      'Super crispy breaded fried chicken wings with garlic and pepper, served with sweet and sour sauce.',
    price: 8.95,
  },
]

/* MENU DATA: Verified from client-provided menu — Pho */
export const pho: MenuItem[] = [
  { code: 'P0', name: 'Chicken Pho', description: 'Steamed white chicken breast.', price: 12.95 },
  { code: 'P1', name: 'Steak Pho', price: 12.95 },
  { code: 'P2', name: 'Brisket Pho', price: 12.95 },
  { code: 'P3', name: 'Steak and Brisket', price: 12.95 },
  { code: 'P4', name: 'Steak and Flank', price: 12.95 },
  { code: 'P6', name: 'Meatball Only', price: 12.95, badges: ['rawMeat'] },
  { code: 'P7', name: 'Steak and Meat Ball', price: 12.95 },
  { code: 'P8', name: 'Brisket and Meat Ball', price: 12.95, badges: ['rawMeat'] },
  { code: 'P9', name: 'Steak and Flank', price: 12.95 },
  { code: 'P10', name: 'Tripe Only', price: 12.95, badges: ['rawMeat'] },
  { code: 'P12', name: 'Tendon Only', price: 12.95, badges: ['rawMeat'] },
  { code: 'P13', name: 'Steak and Tripe', price: 12.95, badges: ['rawMeat'] },
  { code: 'P14', name: 'Steak and Tendon', price: 12.95, badges: ['rawMeat'] },
  { code: 'P15', name: 'Brisket and Tendon', price: 12.95, badges: ['rawMeat'] },
  { code: 'P16', name: 'Steak, Brisket, Tendon', price: 12.95, badges: ['rawMeat'] },
  { code: 'P17', name: 'Steak, Tendon, Tripe', price: 12.95, badges: ['rawMeat'] },
  { code: 'P18', name: 'Brisket, Tendon, Tripe', price: 12.95, badges: ['rawMeat'] },
  { code: 'P19', name: 'Steak, Tripe, Meat Ball', price: 12.95, badges: ['rawMeat'] },
  { code: 'P20', name: 'Steak, Tendon, Meat Ball', price: 12.95, badges: ['rawMeat'] },
  {
    code: 'P21',
    name: 'House Special Pho',
    description: 'All different types of beef and meatball.',
    price: 13.95,
    badges: ['houseSpecial'],
  },
  { code: 'P23', name: 'No Meat Pho', price: 9.50 },
  { code: 'P25', name: 'Shrimp Pho', price: 13.95 },
  {
    code: 'P26',
    name: 'Seafood Pho',
    description: 'Large size only. Shrimp, Squid, Scallop, Mussels.',
    price: 18.50,
    badges: ['large'],
  },
  { code: 'P27', name: 'Tofu Pho', price: 12.95, badges: ['vegan'] },
  {
    code: 'P28',
    name: 'Veggie Pho',
    description: 'Carrot, mushroom, broccoli, zucchini. Tofu available for extra charge.',
    price: 12.95,
    badges: ['vegetarian'],
  },
  {
    code: 'PB',
    name: 'Back Rib Pho',
    description: 'Large size only. Whole rack of ribs.',
    price: 19.95,
    badges: ['large'],
  },
  { code: 'PX', name: 'Oxtail Pho', price: 21.95, badges: ['rawMeat'] },
  {
    code: 'PT',
    name: 'Thai Tom Yum Pho Noodle Soup',
    price: 15.95,
    badges: ['houseSignature'],
  },
  {
    code: 'PH',
    name: 'Hue-Style Beef Vermicelli Noodle Soup',
    price: 15.95,
  },
]

export const phoNote =
  'All pho served with: fresh bean sprout, jalapeño, basil, lime, hoisin sauce, and hot chili sauces on the side. Fresh Vietnamese rice noodle topped with sliced white onion, green onion, and cilantro. PHO CUSTOM: Choose up to 3 items — $12.95'

/* MENU DATA: Verified from client-provided menu — Vietnamese */
export const vietnamese: MenuItem[] = [
  {
    name: 'Banh Mi Sandwiches',
    description:
      'Famous Vietnamese sandwich stuffed with grilled meat or tofu and mayonnaise. Topped with pickled carrots, daikons, cucumber, jalapeño, and cilantro.',
    price: 7.95,
  },
  {
    name: 'Rice Platter',
    description:
      'Steamed jasmine rice with green leaf lettuce, pickled carrots, daikons, cucumber, creamy salad dressing and house special fish sauce.',
    price: 14.50,
  },
  {
    name: 'Vermicelli Salad Bowl',
    description:
      'Vermicelli noodles with shredded iceberg lettuce, pickled shredded carrots, bean sprout, cucumber, toasted peanut, green onion, cilantro.',
    price: 14.50,
  },
  {
    name: 'Fried Rice',
    description:
      'Stir-fried jasmine rice with peas, carrots, eggs, onions, and secret seasoning. Extra hot spicy available (0–5).',
    price: 15.95,
    spiceLevel: true,
  },
]

/* MENU DATA: Verified from client-provided menu — Thai Noodles */
export const thaiNoodles: MenuItem[] = [
  {
    code: 'N1',
    name: 'Pad Thai',
    description:
      'Stir-fried rice noodles with egg, onion, garlic, choice of protein, bean sprouts and house special sauce, topped with peanut and green onion.',
    price: 15.95,
  },
  {
    code: 'N2',
    name: 'Pad Kee Mao',
    description:
      'Stir-fried wide rice noodles with egg, onion, garlic, broccoli, zucchini, mushroom, bamboo shoots and basil leaf.',
    price: 15.95,
  },
  {
    code: 'N3',
    name: 'Pad See-Ew',
    description:
      'Stir-fried wide rice noodles with egg, carrot and broccoli in house special sauce.',
    price: 15.95,
  },
]

/* MENU DATA: Verified from client-provided menu — Thai Curry */
export const thaiCurry: MenuItem[] = [
  {
    code: 'CR1',
    name: 'Panang Curry',
    description:
      'Mild sweeter curry paste with ground peanuts and traditional herbs, coconut milk, carrot, zucchini and bell peppers.',
    price: 15.95,
    spiceLevel: true,
  },
  {
    code: 'CR2',
    name: 'Red Curry',
    description:
      'Red curry paste in coconut milk with bamboo shoots, bell pepper, zucchini, carrot and basil leaf.',
    price: 15.95,
    spiceLevel: true,
  },
]

/* MENU DATA: Verified from client-provided menu — Thai Stir-Fry */
export const thaiStirFry: MenuItem[] = [
  {
    code: 'SE1',
    name: 'Cashew Nut',
    description:
      'Roasted cashew nut stir-fried with carrot, bell pepper, zucchini, celery, mushroom, garlic and onion.',
    price: 15.95,
    spiceLevel: true,
  },
  {
    code: 'SE2',
    name: 'Spicy Basil',
    description:
      'Stir-fried broccoli, bell pepper, mushroom, zucchini, onion, garlic, infused with basil leaf.',
    price: 15.95,
    spiceLevel: true,
  },
  {
    code: 'SE3',
    name: 'Beef Broccoli',
    description: 'Stir-fried broccoli and carrot in special light brown sauce.',
    price: 15.95,
    spiceLevel: true,
  },
  {
    code: 'SE5',
    name: 'Lemongrass Sauté',
    description:
      'Fresh chopped lemongrass sautéed with onion, garlic, and mixed vegetables.',
    price: 15.95,
    spiceLevel: true,
  },
  {
    code: 'SE6',
    name: 'Thai Tom Yum Pho',
    price: 15.95,
    spiceLevel: true,
  },
]

/* MENU DATA: Verified from client-provided menu — Kids Menu */
export const kidsMenu: MenuItem[] = [
  {
    code: 'K1',
    name: 'Kid Pho Bowl',
    description:
      'Kids portion. No green toppings. Choice of Brisket, Meatball, or White Chicken. Includes juice or soda.',
    price: 9.50,
  },
  {
    code: 'K2',
    name: 'Kid Nugget and Fries',
    description: '6-piece chicken nuggets and french fries. Includes juice or soda.',
    price: 9.50,
  },
  {
    code: 'K4',
    name: 'Kid Rice Plate',
    description: 'Rice plate with choice of grilled Chicken or Pork.',
    price: 9.50,
  },
]

/* MENU DATA: Verified from client-provided menu — Extras and Add-Ons */
export const extras: Array<{ name: string; price: number }> = [
  { name: 'Extra Meat Ball', price: 4.95 },
  { name: 'Extra Brisket', price: 4.95 },
  { name: 'Extra Fatty Flank', price: 4.50 },
  { name: 'Extra Tendon', price: 4.95 },
  { name: 'Extra Steak', price: 4.95 },
  { name: 'Extra Noodle', price: 4.50 },
  { name: 'Extra Vegetable', price: 4.95 },
  { name: 'Extra Steam Rice', price: 4.50 },
  { name: 'Extra Tofu', price: 4.95 },
  { name: 'Extra Shrimp', price: 4.95 },
  { name: 'Extra Seafood', price: 9.95 },
  { name: 'Extra Flank', price: 4.50 },
  { name: 'Extra Tripe', price: 4.95 },
  { name: 'French Fries', price: 4.95 },
  { name: 'Extra Bread', price: 3.50 },
  { name: 'Extra Chicken', price: 4.95 },
  { name: 'Side Beef Back Ribs', price: 9.50 },
  { name: 'Side Beef Oxtail', price: 10.50 },
  { name: 'Fried Egg', price: 3.00 },
  { name: 'Side Broth', price: 4.50 },
]

/* MENU DATA: Verified from client-provided menu — Refreshers */
export const refreshers: MenuItem[] = [
  {
    name: 'Malibu Breeze Refresher',
    price: 3.95,
    badges: ['promoDeal' as MenuBadge],
  },
  {
    name: 'Luluxotic Refresher',
    price: 3.95,
    badges: ['promoDeal' as MenuBadge],
  },
  {
    name: 'Berry Bomba Refresher',
    price: 3.95,
    badges: ['promoDeal' as MenuBadge],
  },
  {
    name: 'Royal Avengers Refresher',
    price: 3.95,
    badges: ['promoDeal' as MenuBadge],
  },
]

export const softDrinks = [
  'Coke', 'Diet Coke', 'Pepsi', 'Diet Pepsi', 'Sprite', 'Diet Sprite',
  '7UP', 'Diet 7UP', 'Mountain Dew', 'Diet Mountain Dew', 'Root Beer',
  'Diet Root Beer', 'Dr. Pepper', 'Diet Dr. Pepper', 'Crush Orange Soda',
  'Diet Crush Orange Soda', 'Lemonade',
]
export const softDrinkPrice = 1.95
export const soyMilkPrice = 2.50

/* MENU DATA: Verified from client-provided menu — Boba, Milk Tea, Coffee */
export const drinks: MenuItem[] = [
  {
    name: 'Salted Creme Vietnamese Coffee',
    description: 'Promotional Deal.',
    price: 5.95,
    badges: ['promoDeal' as MenuBadge],
  },
  {
    name: 'Bubble Tea',
    description: 'Most popular drink! Special Price! 24 oz.',
    price: 7.50,
    badges: ['promoDeal' as MenuBadge],
  },
  {
    name: 'Thai Milk Tea',
    description: 'House-brewed Thai tea leaf, topped with creamy half and half. 24 oz.',
    price: 6.50,
  },
  {
    name: 'Green Thai Milk Tea',
    description: 'House-brewed Green Thai Tea, topped with creamy half and half. 24 oz.',
    price: 6.50,
  },
  {
    name: 'Vietnamese Iced Coffee',
    description:
      'Traditional dark and strong coffee with blended condensed milk. 16 oz.',
    price: 6.50,
  },
]

/* Formatted price helper */
export function formatPrice(price: number | string): string {
  if (typeof price === 'string') return price
  return `$${price.toFixed(2)}`
}
