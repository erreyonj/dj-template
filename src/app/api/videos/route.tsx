
export async function GET() {
    const res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCqbqb795AZQ3Ulg7mvhAy3A&maxResults=15&key=${process.env.NEXT_PUBLIC_YT_API_KEY}`)
    const videos = await res.json()
   
    return Response.json({ videos })
  }