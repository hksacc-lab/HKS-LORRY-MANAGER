# HKS Lorry Manager

Professional Fleet Management System for HKS Infra Earthwork Sdn Bhd

## 🚀 Quick Start

### 1. Prerequisites
- Node.js 18+
- npm or yarn
- Supabase account (free tier)

### 2. Setup Instructions

```bash
# Clone the repository
git clone https://github.com/hksacc-lab/HKS-Lorry-Manager.git
cd HKS-Lorry-Manager

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local
# Edit .env.local with your Supabase credentials

# Run development server
npm run dev
```

Visit `http://localhost:3000`

### 3. Supabase Setup

1. Go to [supabase.com](https://supabase.com) and create a free account
2. Create a new project
3. Go to Project Settings > API to get:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Go to the SQL Editor and run the SQL from `database-setup.sql`
5. Create test user accounts in Authentication > Users

### 4. Sample Data

Run the seed script to populate test data:
```bash
npm run db:seed
```

This creates:
- 10 sample lorries (PLK-001 to PLK-010)
- 10 sample drivers
- Sample trips and expenses

## 📋 Features

### Admin Dashboard
- ✅ Complete vehicle fleet management
- ✅ Driver assignment and tracking
- ✅ Trip creation and monitoring
- ✅ Fuel consumption analytics
- ✅ Maintenance scheduling
- ✅ Financial reports
- ✅ Real-time alerts

### Driver Mobile App
- ✅ Trip start/completion
- ✅ Odometer readings
- ✅ Fuel logging
- ✅ POD capture (signature/photo)
- ✅ Maintenance issue reporting
- ✅ Earnings tracking

### Security
- ✅ Supabase authentication
- ✅ Row Level Security (RLS) policies
- ✅ Role-based access control
- ✅ Data isolation per user

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         
