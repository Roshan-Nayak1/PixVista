import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState(''); // State variable to store the input value
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform any necessary actions with the search term (e.g., navigate to a new page)
        if (searchTerm) {
            navigate(`/search/${searchTerm}`);
            setSearchTerm("");
        }
    };

    return (
        <Paper
            component='form'
            onSubmit={handleSubmit}
            sx={{
                borderRadius: 25,
                border: '1px solid #e3e3e3',
                pl: 5,
                boxShadow: 'none',
                mr: { sm: 5 },
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',

            }}
        >
            <input
                className="search-bar"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} // Update the state on input change
            />
            <IconButton type="submit" sx={{ p: '10px', color: '#7F00FF' }}>
                <Search />
            </IconButton>
        </Paper>
    );
};

export default SearchBar;
