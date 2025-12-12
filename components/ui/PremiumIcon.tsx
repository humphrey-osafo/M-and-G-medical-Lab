"use client";
import React from 'react';
import { IconType } from 'react-icons';
import { motion } from 'framer-motion';

interface PremiumIconProps {
    icon: IconType;
    size?: number;
    className?: string;
    color?: string;
}

export const PremiumIcon = ({ icon: Icon, size = 24, className = "", color = "#0052CC" }: PremiumIconProps) => {
    return (
        <motion.div
            className={`relative flex items-center justify-center p-3 rounded-xl bg-gradient-to-br from-white/10 to-white/5 shadow-lg backdrop-blur-sm border border-white/20 group hover:shadow-xl transition-all duration-300 ${className}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className="absolute inset-0 bg-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Icon size={size} color={color} className="relative z-10 drop-shadow-sm" />
        </motion.div>
    );
};
