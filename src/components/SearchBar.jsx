import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (searchTerm) {
            navigate(`/search/${searchTerm}`);
            setSearchTerm('');
        }
    };

    return (
        <Paper
            component='form'
            onSubmit={handleSubmit}
            sx={{
                display: 'flex',
                alignItems: 'center',
                borderRadius: 20,
                border: '1px solid #e3e3e3',
                pl: 1,
                pr: 4,
                boxShadow: 'none',
                mr: { sm: 1 },
                position: 'absolute',
                top: '50%',
                left: '55%',
                transform: 'translate(-50%, -50%)',
                '@media (max-width: 600px)': {
                    width: '40%',
                    borderTopLeftRadius: 20,
                    borderBottomLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                },
            }}
        >
            <InputBase
                className='search-bar'
                placeholder='Search...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{
                    border: 'none',
                    outline: 'none',
                    flexGrow: 1,
                    fontSize: '1rem', // Increase font size
                    padding: '7px', // Add padding
                    backgroundColor: '#f5f5f5', // Change background color
                    borderRadius: '40px', // Add some border radius
                }}
            />
            <IconButton type='submit' sx={{ p: '1px', color: '#7F00FF' }} aria-label='search'>
                <SearchIcon />
            </IconButton>
        </Paper>
    );
};

export default SearchBar;
