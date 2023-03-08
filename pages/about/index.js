import Layout from "@/components/layout"
import Img from '@/components/img'

export default function About () {
    return(
        <Layout page='About'>
            <div>
                <h2>Director <strong>Lumen</strong></h2>
                <h2>Editor <strong>Mari</strong></h2>
                <h2>Illustrator <strong>Goyoh</strong></h2>
            </div>
            <br/>
            <br/>
            <div className="flex gap-4">
                <div className="relative w-[260px] h-[290px]">
                    <Img src='/hume.png'/>
                </div>

                <div className="flex flex-col">
                    <h3 className="font-bold">Hume</h3>
                    <br/>
                    <p className="max-w-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elementum ex et ornare fringilla. Cras eget purus suscipit, tristique arcu ullamcorper, aliquet velit. Nulla vel ultricies odio. Nam ac nulla tortor. Proin id ligula a felis cursus consequat. Proin ac turpis nec enim suscipit aliquam. Morbi luctus diam turpis, eget pretium urna venenatis non.
                    </p>
                </div>
            </div>

            <br/>
            <br/>


            <div className="flex gap-4">
                <div className="relative w-[260px] h-[290px]">
                    <Img src='/friday.png'/>
                </div>
            
                <div className="flex flex-col">
                    <h3 className="font-bold">Friday</h3>
                    <br/>
                    <p className="max-w-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elementum ex et ornare fringilla. Cras eget purus suscipit, tristique arcu ullamcorper, aliquet velit. Nulla vel ultricies odio. Nam ac nulla tortor. Proin id ligula a felis cursus consequat. Proin ac turpis nec enim suscipit aliquam. Morbi luctus diam turpis, eget pretium urna venenatis non.
                    </p>
                </div>
            </div>

            <br/>
            <br/>


            <div className="flex gap-4">
                <div className="relative w-[260px] h-[290px]">
                    <Img src='/god.png'/>
                </div>

                <div className="flex flex-col">
                    <h3 className="font-bold">God</h3>
                    <br/>
                    <p className="max-w-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elementum ex et ornare fringilla. Cras eget purus suscipit, tristique arcu ullamcorper, aliquet velit. Nulla vel ultricies odio. Nam ac nulla tortor. Proin id ligula a felis cursus consequat. Proin ac turpis nec enim suscipit aliquam. Morbi luctus diam turpis, eget pretium urna venenatis non.
                    </p>
                </div>
            </div>
        </Layout>
    )
}