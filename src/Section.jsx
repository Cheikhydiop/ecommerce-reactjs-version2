
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from './Image';

const variant = {
    visible: {
        x: 0,
        transition: {
            type: 'spring',
            mass: 0.4,
            damping: 8,
            staggerChildren: 0.4
        }
    }
};

const variantButton = {
    hover: {
        scale: 1.2,
        transition: {
            duration: 0.3,
            yoyo: Infinity
        }
    },
    hidden: {
        opacity: 0
    }
};

function Section() {
    const [salut, setSalut] = useState(true);

    setTimeout(() => {
        setSalut(false);
    }, 4000);

    return (
        <div className="p-4 text-center">
            {salut && (
                <motion.p
                    variants={variant}
                    initial={{ x: '100vw' }}
                    animate="visible"
                    className="text-white text-2xl animate-ping"
                >
                    Welcome to Cheikh
                </motion.p>
            )}
            <div className="mt-4 space-y-4">
                <p className="text-blue-500 text-xl">Hey ici ! Suis - Cheikh</p>
                <h1 className="text-blue-500 text-4xl lg:text-6xl">Product Web Developer</h1>
                <motion.h2
                    className="text-white text-3xl my-4"
                    variants={variant}
                    initial={{ x: '100vw' }}
                    animate="visible"
                >
                    Product Web Developer<span className="text-gray-500">, | created many things on the internet</span>
                </motion.h2>
                <Image />
                <div className="flex flex-wrap justify-center mt-4 space-x-4">
                   
                    <motion.button
                        className="btn-secondary"
                        variants={variantButton}
                        whileHover="hover"
                    >
                        Git   Github
                    </motion.button>
                   
                    <motion.button
                        className="btn-secondary"
                        variants={variantButton}
                        whileHover="hover"
                    >
                      Gestion Projet
                    </motion.button>
                   
                </div>
            </div>
        </div>
    );
}

export default Section;

