// import type { NextPage } from 'next'
import Head from 'next/head';
// import Image from 'next/image'
import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services';
import {FeaturedPosts} from '../sections';



//DEMO POSTS ------->

// const posts = [
//   { title: 'HTML', excerpt: 'Learn HTML for free' },
//   { title: 'CSS', excerpt: 'Learn CSS for free' },
//   { title: 'JS', excerpt: 'Learn JS for free' },
// ]

// const Home: NextPage = () => {

  export default function Home({posts}) {
  return (
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>BlogPrism</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts/>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-8 col-span-1">
          {/* {posts.map((post, index) => (
            <div>
              {post.title}
              {post.excerpt}
            </div>
          ))} */}

          {posts.map((post) => (
            <PostCard key={post.title} post={post.node} />
          ))}

        </div>

        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

// export default Home

// To fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
