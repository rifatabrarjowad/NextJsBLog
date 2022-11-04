import Image from 'next/image'
import Link from 'next/link'
export default function section1() {
    return (
        <section className="py-16">
            <div className="container mx-auto md:px-20">
            <h1 className="font-bold text-4xl pb-12 text-center">Section 1</h1>
            {Slide()}
            </div>
        </section>
    )
};

function Slide(){
    return (
        <div className="grid md:grid-cols-2">
            <div className="image">
               <Link className="" href="https://www.youtube.com/watch?v=1Q8fG0TtVAY">
               <Image src="/images/img1.jpg" width="600" height="600" />
               </Link>
            </div>
            <div className="info">
                <div className="cat">
                    <Link className="text-orange-600 hover:text-orange-800" href="/category/1">Business, Travel</Link>
                </div>
            </div>
        </div>
    )
}
