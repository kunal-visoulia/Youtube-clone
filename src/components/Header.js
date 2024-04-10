import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleSideNav } from '../store/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../store/searchSlice';

const Header = () => {
  const disptatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector(store => store.search.cache);

  const toggleSideNavHandler = () => {
    disptatch(toggleSideNav())
  };

  // simple debounce functionality that waits for 200ms between key strokes
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery])
      } else {
        getSearchSuggestion();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    }
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    disptatch(cacheResults({
      [searchQuery]: json[1]
    }))
  }

  return (
    <>
      <div className='flex justify-between my-2'>
        {/* first section */}
        <div className='flex'>
          <img onClick={() => toggleSideNavHandler()} className='h-8 px-2 cursor-pointer' alt='menu'
            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII='
          />
          <a href='/'> {/* redirects back to home, can't use Link here cuz router provider does not ocvers Header */}
            <img
              className='h-8'
              alt='youtube-logo'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png'
            />
          </a>
        </div>
        {/* second section */}
        {/* gave parent width of 75% and child 50%, so they acquire more space and remain responsive at the same time */}
        <div className='w-9/12 flex justify-center px-2'>
          <input type='text' className='border border-gray-900 w-2/4 rounded-l-full p-2'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            placeholder='Search' /> {/* The p-2 gives more space inside search elemnt */}
          <button className='border border-gray-900 rounded-r-full bg-gray-300'>🔍</button>
          {showSuggestions && (
            <div className='absolute bg-white top-[3.2rem] px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100'>
              <ul>
                {suggestions.map(s => (
                  <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                    🔍 {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {/* third section */}
        <div>
          <img className='h-8 px-2' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' alt='user' />
        </div>
      </div>

    </>
  )
}

export default Header
