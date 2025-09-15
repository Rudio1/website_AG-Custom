import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    if (!body.name || !body.email || !body.assunto) {
      return NextResponse.json(
        { error: 'Campos obrigatórios: name, email, assunto' },
        { status: 400 }
      );
    }

    const response = await fetch(process.env.API_URL || '', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.API_KEY || '',
      },
      body: JSON.stringify({
        name: body.name,
        email: body.email,
        phone: body.phone || '',
        assunto: body.assunto,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Erro da API externa:', response.status, errorText);
      return NextResponse.json(
        { error: 'Erro interno do servidor' },
        { status: 500 }
      );
    }

    const data = await response.json();
    return NextResponse.json({ success: true, data });

  } catch (error) {
    console.error('Erro na API route:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
