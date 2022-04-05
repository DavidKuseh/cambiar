import Link from 'next/link';
import * as React from 'react';

import { Nav } from '../Navbar/Navbar';

export function Header() {
    return (
        <div>
            <Link href='/'>
                <p>Cambiar</p>
            </Link>

            <div>
                <Nav />
            </div>
        </div>
    )
}

