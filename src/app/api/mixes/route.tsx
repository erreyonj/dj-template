
export async function GET() {
    const res = await fetch(`https://api.mixcloud.com/search/?q=djkhaaliq&type=cloudcast`)
    const mixes = await res.json()
   
    return Response.json({ mixes })
  }