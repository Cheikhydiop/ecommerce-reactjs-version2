import React from 'react'
import { motion } from 'framer-motion';

function Skill() {
    const variant = {
        hidden: {
            opacity: 0
        },
        visible: {
            x: [100, 0],
            opacity: 1,
            transition: {
                delay: 1.5,
                duration: 1.5
            }
        },
        exit: {
            x: '100vw',
            transition: { ease: 'easeInOut' }
        }
    };

    return (
        <motion.div
            id="Skill"
            variants={variant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="container mx-auto p-4"
        >
            <div className='text-center mb-8'>
                <motion.div
                    className='text-white text-4xl mb-4'
                    whileInView={{ x: [100, 0] }}
                >
                    Skill
                </motion.div>
                <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
                    <motion.div
                        className='bg-blue-500 p-6 text-gray-400'
                        initial={{ opacity: 0.5, scale: 0.5 }}
                        transition={{ duration: 2 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                    >
                        <p className='underline decoration-wavy text-2xl'>Design</p>
                        <p className='text-blue-500'>Tailwind</p>
                    </motion.div>
                    <motion.div
                        className='bg-blue-500 p-6 text-gray-400'
                        initial={{ opacity: 0.5, scale: 0.5 }}
                        transition={{ duration: 2 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                    >
                        <p className='underline decoration-wavy text-2xl'>FrontEnd</p>
                        <p className='text-blue-500'>TypeScript, React</p>
                    </motion.div>
                    <motion.div
                        className='bg-blue-500 p-6 text-gray-400'
                        initial={{ opacity: 0.5, scale: 0.5 }}
                        transition={{ duration: 2 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                    >
                        <p className='underline decoration-wavy text-2xl'>BackEnd</p>
                        <p className='text-blue-500'>Laravel, MySQL</p>
                    </motion.div>
                    <motion.div
                        className='bg-blue-500 p-6 text-gray-400'
                        initial={{ opacity: 0.5, scale: 0.5 }}
                        transition={{ duration: 2 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                    >
                        <p className='underline decoration-wavy text-2xl'>Other</p>
                        <p className='text-blue-500'>XML, UML, Git</p>
                    </motion.div>
                </div>
                <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8'>
                </div>
            </div>
        </motion.div>
    );
}

export default Skill;
