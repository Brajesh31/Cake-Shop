import React from 'react'
import Section1 from '../Home/Section1'
import Blogs from '../Components/Blog/Blogs'
import Pagination from './Pagination'

const Blog = () => {
    return (
        <>
            <Section1 title='Blog' title2='' />
            <Blogs img={"/img/single_blog_1.jpg"} />
            <Blogs img={"/img/single_blog_2.jpg"} />
            <Blogs img={"/img/single_blog_3.jpg"} />
            <Blogs img={"/img/single_blog_4.jpg"} />
            <Blogs img={"/img/single_blog_5.jpg"} />
            <Pagination />
        </>
    )
}

export default Blog