import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
    return (
        <>
            <div className="logo">
                <Link href="/">
                    <Image 
                        src="/assets/images_/logo.png" 
                        alt="Logo" 
                        width={136} 
                        height={90}
                        priority
                    />
                </Link>
            </div>
        </>
    )
}