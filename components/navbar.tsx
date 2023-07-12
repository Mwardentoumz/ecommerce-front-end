
import getCategories from '@/actions/get-categories'
import Container from '@/components/ui/container'
import MainNav from '@/components/main-nav'
import NavbarActions from '@/components/navbar-actions'

import Link from 'next/link'

const Navbar = async () => {

    const categories = await getCategories()

    return (

        <div className="border-b">
            <Container>
                <div className='relative px-4 sm:px-6 lg:px-8 flex h-16 items-center'>
                    <Link href='/'>
                        <p className='font-bold text-xl'>STORE</p>
                    </Link>
                    <MainNav data={categories}/>
                <NavbarActions/>
                </div>
            </Container>
        </div>

    );


}


export default Navbar;
