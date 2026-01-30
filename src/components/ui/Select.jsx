import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Select = ({ options, value, onChange, placeholder = 'Select an option', className = '', variant = 'default', position = 'bottom' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [coords, setCoords] = useState({ top: 0, left: 0, width: 0 });
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);

    const updateCoords = () => {
        if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setCoords({
                top: rect.top + window.scrollY,
                left: rect.left + window.scrollX,
                width: rect.width,
                bottom: rect.bottom + window.scrollY
            });
        }
    };

    useLayoutEffect(() => {
        if (isOpen) {
            updateCoords();
            window.addEventListener('scroll', updateCoords);
            window.addEventListener('resize', updateCoords);
        }
        return () => {
            window.removeEventListener('scroll', updateCoords);
            window.removeEventListener('resize', updateCoords);
        };
    }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const selectedOption = options.find(opt =>
        typeof opt === 'string' ? opt === value : opt.value === value
    );

    const displayValue = selectedOption
        ? (typeof selectedOption === 'string' ? selectedOption : selectedOption.label)
        : placeholder;

    const baseStyles = "w-full transition-all duration-200 flex items-center justify-between focus:outline-none";

    const variants = {
        default: "bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white hover:border-accent/40 focus:border-accent",
        status: "px-3 py-1 rounded-full text-xs font-bold border cursor-pointer inline-flex min-w-[100px]"
    };

    const dropdownMenu = (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: position === 'top' ? 10 : -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: position === 'top' ? 10 : -10, scale: 0.95 }}
                    style={{
                        position: 'absolute',
                        top: position === 'top' ? coords.top - 8 : coords.bottom + 8,
                        left: coords.left,
                        width: Math.max(coords.width, 160),
                        transform: position === 'top' ? 'translateY(-100%)' : 'none',
                    }}
                    className="z-[9999] bg-[#1a1c2e] border border-white/10 rounded-xl shadow-2xl py-2 overflow-hidden backdrop-blur-xl"
                >
                    {options.map((option, i) => {
                        const val = typeof option === 'string' ? option : option.value;
                        const label = typeof option === 'string' ? option : option.label;
                        const isSelected = val === value;

                        return (
                            <button
                                key={i}
                                type="button"
                                onClick={() => {
                                    onChange(val);
                                    setIsOpen(false);
                                }}
                                className={`w-full text-left px-4 py-2 transition-all duration-200 hover:bg-accent/10 ${isSelected ? 'text-accent bg-accent/5' : 'text-textSecondary hover:text-white'} button-hover-slide relative overflow-hidden`}
                            >
                                {label}
                            </button>
                        );
                    })}
                </motion.div>
            )}
        </AnimatePresence>
    );

    return (
        <div className={`relative ${className}`} ref={dropdownRef}>
            <button
                ref={buttonRef}
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`${baseStyles} ${variants[variant] || variants.default} button-hover-lift transition-all duration-300`}
            >
                <span className={!selectedOption && variant !== 'status' ? 'text-textSecondary' : ''}>
                    {displayValue}
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''} ${variant === 'status' ? 'ml-2' : 'text-textSecondary'}`} />
            </button>

            {createPortal(dropdownMenu, document.body)}
        </div>
    );
};

export default Select;
