-- Migration: Add mainscreen field to products table
-- Run this in Supabase SQL Editor

-- Add mainscreen column to products table
ALTER TABLE products 
ADD COLUMN IF NOT EXISTS mainscreen BOOLEAN DEFAULT false NOT NULL;

-- Create index for better query performance when filtering by mainscreen
CREATE INDEX IF NOT EXISTS idx_products_mainscreen ON products(mainscreen) WHERE mainscreen = true;

-- Add comment for documentation
COMMENT ON COLUMN products.mainscreen IS 'If true, product will be displayed in carousel on main page';
