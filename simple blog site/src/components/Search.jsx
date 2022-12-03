import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import search from '../assets/search.svg'
import { searchByBar } from '../redux/filter/action';

function Search() {

  const dispatch = useDispatch();
  const searchbarRef = useRef('');

  const handleSearchByText = () => {
    dispatch(searchByBar(searchbarRef.current.value));
  }

  // debounce fn
  const debounce = (fn , delay) => {
    let timeoutId;

    return function (){

      if (timeoutId) {
        clearInterval(timeoutId)
      }

      timeoutId = setTimeout( () => {
        fn();
      }, delay)

    }
  }

  return (
    <>
      <div className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200">
        <input
          className="outline-none border-none bg-gray-50 h-full w-full mr-2"
          type="search"
          name="search"
          ref={searchbarRef}
          onKeyUp={debounce(handleSearchByText, 2000)}
          placeholder="Search"
        />
        <img className="inline h-6 cursor-pointer" src={search} alt="Search" />
      </div>
    </>
  );
}

export default Search