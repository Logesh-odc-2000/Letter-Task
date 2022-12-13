import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'
import data from '../Object';
import Link from 'next/link'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import Carousel from 'react-elastic-carousel'

export default function ListLevel() {
    const router = useRouter()
    const { slug } = router.query
    console.log('level', router.query, slug, slug?.length);
    let list = [];
    let suffix = '';
    if (slug?.length === 1) {
        list = data[slug[0]];
        list = Object.keys(list).map((name, i) => ({ name }));
        console.log('Level 1', list);
    }
    else if (slug?.length === 2) {
        list = data[slug[0]][slug[1]];
        console.log('Level 2', list);

    }
    else if (slug?.length === 3) {
        const lastLevel = data[slug[0]][slug[1]].filter((item) => item.name === slug[2]);
        list = [lastLevel];
        console.log('Level 3', list);
    }
    suffix = slug?.join('/');
    return (
        <>
        <div className="bg-gray-100  h-full h-screen">
        <div className="  mx-auto max-w-4xl   sm:py-28 sm:px-10 object-cover h-96 w-full lg:max-w-2xl lg:px-10">
            <div className='py-10 rounded-lg'>
                <Carousel>
                {list?.map((item) => <Link href={`${suffix}/${item.name}`}  >
                        <>
                            <div className='object-cover'>
                                <div className=" bg-gray-200  xl:h-96">
                                    <img src={item.imgSrc}
                                     className="h-full w-full object-cover" />
                                </div>
                                <div   className=" text-center font-bold  first-letter:text-blue-700 text-red-500  text-2xl">
                                    {item.name}
                                </div>
                            </div>

                        </>
                        </Link>)}
                </Carousel>
            </div>

        </div>
    </div>
</>

    )
}   