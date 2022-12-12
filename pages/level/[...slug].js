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
        <div className='bg-gray-200'>
            <div className={styles.container}>
                <main className={styles.main}>
                    <ul role="list" className="grid grid-cols-1 gap-6 xl:grid-cols-4 lg:grid-cols-4">
                        {list?.map((item) => <Link href={`${suffix}/${item.name}`}  >
                            <li className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
                                <div className="flex w-full items-center justify-between space-x-6 p-6">
                                    <div className="flex-1 truncate">
                                        <div className="flex items-center space-x-3">
                                            <img src={item.imgSrc} />
                                            <h3 className="truncate text-sm font-medium text-gray-900">{item.name}</h3>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </Link>)}
                    </ul>
                </main>
            </div>
        </div>
    )
}   