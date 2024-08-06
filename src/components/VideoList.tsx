import React from 'react'
import { config } from "@/config";




export default async function VideoList () {

        try {
            const res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCqbqb795AZQ3Ulg7mvhAy3A&maxResults=15&key=${process.env.YT_API_KEY}`)
            console.log(res);
            
            return res.json()     
        
        } catch (error) {
            console.log(error);
            
        }
} 
