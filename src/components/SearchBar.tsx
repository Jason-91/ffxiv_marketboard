import React, { useState } from 'react';
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

interface SearchBarProp {
    placeholder: string;
    getItems: Function;
}
interface SearchedItemsData {
    item_id: string;
    item_name: string;
    item_icon: string;
}
function SearchBar({ placeholder, getItems }: SearchBarProp) {
    const [wordEntered, setWordEntered] = useState('');
    const [filteredWords, setFilteredWords] = useState<SearchedItemsData[]>([]);

    const handleFilter = async (event: any) => {
        const searchWord: string = event.target.value
        setWordEntered(searchWord);
        setFilteredWords(await getItems(wordEntered));
    };

    const clearInput = () => {
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
                    {wordEntered.length === 0
                        ? <SearchIcon />
                        : <CloseIcon id='clearBtn' onClick={clearInput} />}
                </div>
            </div>
            {filteredWords.length > 0 && (
                <div className='dataResult'>
                    {filteredWords.map((value) => {
                        return (
                            <a className='dataItem' target='blank'>
                                <p>{value.item_name}</p>
                            </a>
                        );
                    })}
                </div>
            )}
        </div>
    )
}

export default SearchBar