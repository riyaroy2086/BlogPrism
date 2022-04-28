import React ,{useContext, useState , useEffect} from 'react';
import Link from 'next/link';
import { getCategories } from '../services';



const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
  getCategories().then((newCategories) => {
    setCategories(newCategories);
  });
  }, []);

   

    // const categories = [{name: 'ReactJs' , slug: 'React'},
    // {name: 'NextJs' , slug: 'Next'},
    // {name: 'Tailwind' , slug: 'tw'},]



  return (
    <div className="container mx-auto px-10 mb-8" >
        <div className="border-b w-full inline-block border-pink-500 py-8">

        <div className="md:float-left block inline-block ">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">BlogPrism</span>
          </Link>
        </div>
        
        <div className=" hidden md:float-left md:contents ">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
                <span className=" md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer ">
                    {category.name}
                </span>
                </Link>
          ))}
        </div>
       
        

        </div>
    </div>
  )
}

export default Header