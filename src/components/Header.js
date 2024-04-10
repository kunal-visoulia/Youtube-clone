import React from 'react'

const Header = () => {
  return (
    <div class='flex justify-between my-2'>
      {/* first section */}
      <div class='flex'>
        <img class='h-8 px-2' alt='menu'
          src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII='
        />
        <img
          className='h-8'
          alt='youtube-logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png'
        />
      </div>
      {/* second section */}
      {/* gave parent width of 75% and child 50%, so they acquire more space and remain responsive at the same time */}
      <div class='w-9/12 flex justify-center px-2'>
        <input type='text' class='border border-gray-900 w-2/4 rounded-l-full p-2' placeholder='Search' /> {/* The p-2 gives more space inside search elemnt */}
        <button class='border border-gray-900 rounded-r-full bg-gray-300'>🔍</button>
      </div>
      {/* third section */}
      <div>
        <img class='h-8 px-2' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' alt='user' />
      </div>
    </div>
  )
}

export default Header
