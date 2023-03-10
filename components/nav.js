import Img from './img'
import Link from 'next/link'

export default function Nav({ page }) {

    return (
        <nav>
            <div className='relative w-24 h-12'>
                <Img src='/logo.png'/>
            </div>
            <br/>
            <br/>
            <br/>
            <ul className='flex flex-col gap-4'>
                <Link href='/'>
                    <li style={{
                        textDecoration: page === 'Home' ? 'underline' : 'none'
                    }}>
                       Home</li>
                </Link>

                <Link href='/about'>
                    <li style={{
                        textDecoration: page === 'About' ? 'underline' : 'none'
                    }}>
                      About</li>
                </Link>

                <Link href='/cartoons'>
                    <li style={{
                        textDecoration: page === 'Cartoons' ? 'underline' : 'none'
                    }}>
                      Cartoons</li>
                </Link>
            </ul>
        </nav>
    )
}