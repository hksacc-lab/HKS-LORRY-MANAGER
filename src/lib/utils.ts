import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateTripNumber(): string {
  const year = new Date().getFullYear()
  const month = String(new Date().getMonth() + 1).padStart(2, '0')
  const day = String(new Date().getDate()).padStart(2, '0')
  const random = Math.floor(Math.random() * 10000)
  return `TRP-${year}${month}${day}-${String(random).padStart(4, '0')}`
}

export function formatCurrency(value: number | null): string {
  if (!value) return 'RM 0.00'
  return `RM ${value.toFixed(2)}`
}

export function calculateFuelEfficiency(distanceKm: number, liters: number): number {
  if (liters === 0) return 0
  return Math.round((distanceKm / liters) * 100) / 100
}

export function calculateTripCost(revenue: number, fuelCost: number, driverPay: number, otherExpenses: number = 0): number {
  return revenue - fuelCost - driverPay - otherExpenses
}
