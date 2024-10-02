import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "./Navbar";
import Buton from "./Buton";

function Mysid() {
    const [image, setImage] = useState(true);

    const handClick = () => {
        setImage(!image);
    };

    const variant = {
        closed: {
            clipPath: "circle(1200px at 50px 50px)",
            transition: {
                type: 'spring',
                damping: 40,
                stiffness: 400,
                delay: 0.5,
                opacity: 0
            },
        },
        open: {
            clipPath: "circle(15px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 20,
            }
        }
    };

    return (
        <div className="relative md:flex md:flex-col text-black m-2 max-h-1">
            <motion.div
                variants={variant}
                animate={image ? 'open' : 'closed'}
                className="transition-all duration-300"
            >
                <Navbar />
            </motion.div>
            <Buton setButton={setImage} />
        </div>
    );
}

export default Mysid;
