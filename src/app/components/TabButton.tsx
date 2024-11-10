import React, { ReactNode } from 'react';
import { motion } from "framer-motion";

const variants = {
    default: { width: 0 },
    active: { width: "calc(100% - 0.75rem)" },
};

interface TabButtonProps {
    active: boolean;
    selectTab: () => void;
    children: ReactNode;
}

// Explicitly annotate the props directly in the function parameter with TabButtonProps
const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
    const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
                {children}
            </p>
            <motion.div
                animate={active ? "active" : "default"}
                variants={variants}
            />
        </button>
    );
};

export default TabButton;
