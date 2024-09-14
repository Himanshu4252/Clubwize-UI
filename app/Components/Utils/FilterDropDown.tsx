import { useState, useEffect, useRef } from 'react';

const FilterDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [filters, setFilters] = useState({
        filter1: false,
        filter2: false,
        filter3: false,
    });

    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleCheckboxChange = (e: { target: { name: any; checked: any; }; }) => {
        const { name, checked } = e.target;
        setFilters((prev) => ({ ...prev, [name]: checked }));
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: { target: any; }) => {
            // if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            //     setIsOpen(false);
            // }
            if (dropdownRef.current ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <div>
                <button
                    onClick={toggleDropdown}
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                >
                    Filter
                    <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <label className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            <input
                                type="checkbox"
                                name="filter1"
                                checked={filters.filter1}
                                onChange={handleCheckboxChange}
                                className="mr-2"
                            />
                            Filter 1
                        </label>
                        <label className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            <input
                                type="checkbox"
                                name="filter2"
                                checked={filters.filter2}
                                onChange={handleCheckboxChange}
                                className="mr-2"
                            />
                            Filter 2
                        </label>
                        <label className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            <input
                                type="checkbox"
                                name="filter3"
                                checked={filters.filter3}
                                onChange={handleCheckboxChange}
                                className="mr-2"
                            />
                            Filter 3
                        </label>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FilterDropdown;