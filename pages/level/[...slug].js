import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'
import data from '../Object';
import Link from 'next/link'
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
        return (
            <>
                <div className='bg-gray-100  h-full h-screen'>
                    <div className="  mx-auto max-w-4xl   sm:py-28 sm:px-10 object-cover h-96 w-full lg:max-w-2xl lg:px-10">
                        <div className='px-52' >
                           
                            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" 
                           onClick={() => router.prev()} >Click here to go back</button>
                            
                        </div>
                        <div className='py-10 rounded-lg'>
                            <Carousel>
                                {  list?.map((item, i) =>
                                    <>
                                        <div className='object-cover  '>
                                            <div className=" bg-gray-200  xl:h-96">
                                                <img src={item.imgSrc} key={i}
                                                    className="h-full w-full object-cover" />
                                            </div>
                                            <div className=" text-center font-bold  first-letter:text-blue-700 text-red-500  text-2xl">
                                                {item.name}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </Carousel>
                        </div>
                    </div>

                </div>
            </>
        )

    }
     
    suffix = slug?.join('/');
    return (
        <>
            <div className='bg-gray-100  h-full h-screen'>
                <div className={styles.container}>
                    <main className={styles.main}>
                        <div className='py-10'>
                            <Link href='/'>
                            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                             >Click here to go back</button>
                             </Link>
                        </div>
                        <ul role="list" className="grid grid-cols-1 gap-6 xl:grid-cols-4 lg:grid-cols-4">
                            {slug?.length === 1 && list?.map((item) => <Link href={`${suffix}/${item.name}`}  >
                                <li className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
                                    <div className="flex w-full items-center justify-between space-x-6 p-6">
                                        <div className="flex-1 truncate">
                                            <div className="flex items-center space-x-3">
                                                <img src={item.imgSrc} />
                                                <h3 className="text-center font-bold  first-letter:text-blue-700 text-red-500  text-2xl">{item.name}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </Link>)}
                        </ul>
                    </main>

                </div>

            </div>
        </>

    )
}   