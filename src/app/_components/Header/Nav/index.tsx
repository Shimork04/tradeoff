// // 'use client'

// // import React from 'react'
// // import Link from 'next/link'

// // import { Header as HeaderType, User } from '../../../../payload/payload-types'
// // import { useAuth } from '../../../_providers/Auth'
// // import { CartLink } from '../../CartLink'
// // import { CMSLink } from '../../Link'

// // import classes from './index.module.scss'
// // import { Button } from 'payload/components'

// // export const HeaderNav: React.FC<{ header: HeaderType }> = ({ header }) => {
// //   const navItems = header?.navItems || []
// //   const { user } = useAuth()

// //   return (
// //     <nav className={[classes.nav, user === undefined && classes.hide].filter(Boolean).join(' ')}>
// //       {navItems.map(({ link }, i) => {
// //         return <CMSLink key={i} {...link} appearance="none" />
// //       })}
// //       <CartLink />
// //       {user && <Link href="/account">Account</Link>}
// //       {!user && <Button el="link" label="Login" appearence='primary' onClick={()=>{window.location.href ="/login" }}/>}
// //     </nav>
// //   )
// // }

// // export default HeaderNav


// 'use client';

// import React from 'react';
// import Link from 'next/link';

// import { Header as HeaderType } from '../../../../payload/payload-types';
// import { useAuth } from '../../../_providers/Auth';
// import { CartLink } from '../../CartLink';
// import { CMSLink } from '../../Link';

// import classes from './index.module.scss';
// import { Button } from 'payload/components';

// interface HeaderNavProps {
//   header: HeaderType;
// }

// const HeaderNav: React.FC<HeaderNavProps> = ({ header }) => {
//   const navItems = header?.navItems || [];
//   const { user } = useAuth();

//   return (
//     <nav className={[classes.nav, user === undefined && classes.hide].filter(Boolean).join(' ')}>
//       {navItems.map(({ link }, i) => (
//         <CMSLink key={i} {...link} appearance="none" />
//       ))}
//       <CartLink />
//       {user ? (
//         <Link href="/account">Account</Link>
//       ) : (
//         <Button
//           el="link"
//           url="/login"
//           aria-label="Login"
//           buttonStyle="primary"
//         />
//       )}
//     </nav>
//   );
// };

// // export default HeaderNav;

'use client'

import React from 'react'
import Link from 'next/link'

import { Header as HeaderType } from '../../../../payload/payload-types'
import { useAuth } from '../../../_providers/Auth'
import { Button } from '../../Button'
import { CartLink } from '../../CartLink'
import { CMSLink } from '../../Link'

import classes from './index.module.scss'

export const HeaderNav: React.FC<{ header: HeaderType }> = ({ header }) => {
  const navItems = header?.navItems || []
  const { user } = useAuth()

  return (
    <nav className={[classes.nav, user === undefined && classes.hide].filter(Boolean).join(' ')}>
      {navItems.map(({ link }, i) => {
        return <CMSLink key={i} {...link} appearance="none" />
      })}
      <CartLink />
      {user && <Link href="/account"> Account </Link>}
      {!user && (
        <Button
          el="link"
          href="/login"
          label="Login"
          appearance="primary"
          onClick={() => (window.location.href = '/login')}
        />
      )}
      {user && <CartLink />}
    </nav>
  )
}
