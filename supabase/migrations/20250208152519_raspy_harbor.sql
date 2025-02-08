/*
  # Initial Schema Setup

  1. New Tables
    - `projects`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `category` (text)
      - `image_url` (text)
      - `price` (numeric)
      - `tags` (text[])
      - `url` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    - `messages`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `message` (text)
      - `created_at` (timestamp)
    
  2. Security
    - Enable RLS on all tables
    - Add policies for public read access to projects
    - Add policies for admin write access to projects
    - Add policies for message creation
*/

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  image_url text NOT NULL,
  price numeric NOT NULL DEFAULT 0,
  tags text[] DEFAULT '{}',
  url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create messages table
CREATE TABLE IF NOT EXISTS messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public read access to projects"
  ON projects
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to manage projects"
  ON projects
  USING (auth.role() = 'authenticated');

CREATE POLICY "Allow public to create messages"
  ON messages
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Insert initial blockchain projects
INSERT INTO projects (title, description, category, image_url, price, tags, url) VALUES
('Properties MetaLand', 'A revolutionary real estate platform leveraging blockchain technology for property transactions and management.', 'blockchain/crypto', 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800', 499, ARRAY['Real Estate', 'Blockchain', 'MetaLand'], 'https://properties.metalandspaceapp.xyz'),
('TokenEstate Exchange', 'Decentralized exchange platform for tokenized real estate assets.', 'blockchain/crypto', 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=800', 599, ARRAY['DeFi', 'Real Estate', 'Exchange'], 'https://tokenestate-exchange.lovable.app'),
('MexaToken Platform', 'Innovative cryptocurrency token platform with advanced features.', 'blockchain/crypto', 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800', 299, ARRAY['Token', 'Crypto', 'Platform'], 'https://mexatoken.xyz'),
('Mexa Mining Platform', 'Cryptocurrency mining platform with efficient mining algorithms.', 'blockchain/crypto', 'https://images.unsplash.com/photo-1621504450181-5d356f61d307?auto=format&fit=crop&q=80&w=800', 399, ARRAY['Mining', 'Crypto', 'Platform'], 'https://www.miner.mexatoken.xyz'),
('Mexa Staking Platform', 'Secure staking platform for cryptocurrency investments.', 'blockchain/crypto', 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800', 449, ARRAY['Staking', 'Crypto', 'Investment'], 'https://stake.mexatoken.xyz');