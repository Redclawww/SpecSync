import gsmarena from "gsmarena-api"

export async function GET() {
  const devices = await gsmarena.catalog.getBrand("apple-phones-48");
  const name = devices.map((device: any) => device.name);
   
    return Response.json({ name })
  }