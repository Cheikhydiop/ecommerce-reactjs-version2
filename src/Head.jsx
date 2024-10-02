import { useState } from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

function Head({ onCategoryChange }) {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        if (onCategoryChange) {
            onCategoryChange(category); // Appel d'une fonction pour filtrer les articles
        }
    };

    return (
        <div className='container mx-auto p-4'>
            <div className='flex flex-col md:flex-row items-center justify-between'>
                <div className='flex items-center space-x-4'>
                    <span className="text-white">Cheikh</span>
                </div>
                <nav className="mt-4 md:mt-0 text-white flex space-x-4">
                    <a 
                        href="#sneakers" 
                        className={`hover:underline ${selectedCategory === 'sneakers' ? 'text-yellow-500' : ''}`} 
                        onClick={() => handleCategoryChange('sneakers')}
                    >
                        Sneakers
                    </a>
                    <a 
                        href="#flats" 
                        className={`hover:underline ${selectedCategory === 'flats' ? 'text-yellow-500' : ''}`} 
                        onClick={() => handleCategoryChange('flats')}
                    >
                        Flats
                    </a>
                </nav>
            </div>
        </div>
    );
}

export default Head;
