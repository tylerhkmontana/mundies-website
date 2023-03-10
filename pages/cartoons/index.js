import Img from "@/components/img"
import Layout from "@/components/layout"
import client from '@/modules/contentfulClient'
import { useEffect, useState } from "react"

export default function Cartoons ({ cartoons }) {
    console.log(cartoons)
    return(
        <Layout page='Cartoons'>
            {
                cartoons.map(cartoon => (
                    <div key={cartoon.sys.id}>
                        <div className="relative w-48 h-48">
                            <Img src={`https:${cartoon.fields.thumbnail.fields.file.url}`}/>
                        </div>
                        
                        <p>{ cartoon.fields.title }</p>
                    </div>
                ))
            }
        </Layout>
    )
}

export async function getServerSideProps() {
  try {
      const data = await client.getEntries({ content_type: 'cartoons' })
    
      return { props: { cartoons: data.items } }
  } catch (err) {
      console.log(err)
      return {
          notFound: true
      }
  }
}   