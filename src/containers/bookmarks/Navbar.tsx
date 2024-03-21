import React, { HTMLAttributes, useState } from 'react'

export interface NavbarProps extends HTMLAttributes<HTMLDivElement> {
    handleCategoryChange: (category: string, text: string) => void;
  }

const Navbar: React.FC<NavbarProps> = ({ handleCategoryChange }) => {
    const [activeCategory, setActiveCategory] = useState('История');

    const handleCategoryClick = (category: string, text: string) => {
        setActiveCategory(category);
        handleCategoryChange(category, text);
    }

    return (
        <nav>
            <ul className='flex justify-center items-center mb-10'>
                <div className='flex gap-6'>
                    <li className='cursor-pointer' onClick={() => handleCategoryClick('favourites', 'Избраные')}>Избраные</li>
                    <li className='cursor-pointer' onClick={() => handleCategoryClick('history', 'История')}>История</li>
                    <li className='cursor-pointer' onClick={() => handleCategoryClick('plans', 'В планах')}>В планах</li>
                    <li className='cursor-pointer' onClick={() => handleCategoryClick('read', 'Читаю')}>Читаю</li>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar
