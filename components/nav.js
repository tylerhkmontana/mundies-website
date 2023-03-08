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
                    <li><a className='hover:underline' style={{
                        textDecoration: page === 'Home' ? 'underline' : 'none'
                    }}>Home</a></li>
                </Link>

                <Link href='/about'>
                    <li><a className='hover:underline' style={{
                        textDecoration: page === 'About' ? 'underline' : 'none'
                    }}>About</a></li>
                </Link>

                <Link href='/cartoons'>
                    <li><a className='hover:underline' style={{
                        textDecoration: page === 'Cartoons' ? 'underline' : 'none'
                    }}>Cartoons</a></li>
                </Link>
            </ul>
        </nav>
    )
}