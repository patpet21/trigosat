import { NextResponse } from 'next/server'
import CoinPayments from 'coinpayments'

const client = new CoinPayments({
  key: process.env.COINPAYMENTS_MERCHANT_ID!,
  secret: process.env.COINPAYMENTS_IPN_SECRET!
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { projectId, price } = body

    const transaction = await client.createTransaction({
      currency1: 'USD',
      currency2: 'BTC',
      amount: price,
      buyer_email: 'buyer@example.com',
      item_name: `Project ${projectId}`,
      ipn_url: `${request.headers.get('origin')}/api/crypto-webhook`
    })

    return NextResponse.json({ 
      paymentUrl: transaction.checkout_url
    })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}