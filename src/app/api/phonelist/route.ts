export async function GET() {
    const res = await fetch('http://localhost:3001/', {
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
      },
    })
    const data = await res.json()
   
    return Response.json({ data })
  }