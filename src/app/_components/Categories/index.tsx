import React from 'react'
import Link from 'next/link'

import { Category } from '../../../payload/payload-types'
import CategoryCard from './CategoryCard'

import classes from './index.module.scss'

const Categories = ({ categories }: { categories: Category[] }) => {

  // if (!categories) {
  //   return <div>No categories available</div>;
  // }

  return (
    <section className={classes.container}>
      <div className={classes.titleWrapper}>
        <h3><b>SEARCH BY CATEGORIES</b></h3>
        <Link href="/products">Show All</Link>
      </div>

      <div className={classes.list}>
        {categories.map(category => {
          return <CategoryCard key={category.id} category={category} />
        })}
      </div>
    </section>
  )
}

export default Categories
