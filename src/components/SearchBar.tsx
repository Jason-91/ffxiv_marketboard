import React, { useState } from 'react';
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

interface SearchBarProp {
    placeholder: string;
    data: any;
}

interface FilteredData {
    link: string;
    title: string;
}

function SearchBar({ placeholder, data }: SearchBarProp) {
    const [filteredData, setFilteredData] = useState<FilteredData[] | []>([]);
    const [wordEntered, setWordEntered] = useState('');


    const handleFilter = (event: any) => {
        const searchWord: string = event.target.value
        setWordEntered(searchWord);
        const newFilter = data.filter((value: { title: string }) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === '') {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered('');
    }

    return (
        <div className='search'>
            <div className='searchInputs'>
                <input
                    type='text'
                    placeholder={placeholder}
                    value={wordEntered}
                    onChange={handleFilter}
                />
                <div className='searchIcon'>
                    {filteredData.length === 0
                        ? <SearchIcon />
                        : <CloseIcon id='clearBtn' onClick={clearInput} />}
                </div>
            </div>
            {filteredData.length !== 0 && (
                <div className='dataResult'>
                    {filteredData.slice(0, 5).map((value, key) => {
                        return (
                            <a className='dataItem' href={value.link} target='blank'>
                                <p>{value.title}</p>
                            </a>
                        );
                    })}
                </div>
            )}
        </div>
    )
}

export default SearchBar