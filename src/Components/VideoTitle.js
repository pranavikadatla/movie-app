import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[13%] px-10  absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold '>{title}</h1>
        <p className='w-1/4 py-4 text-sm'>{overview}</p>
        <div className='flex'>
          <div className=''>
             {/* <img className="w-5 h-7 bg-slate-400 "
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AAADLy8v6+vrz8/Pc3NxTU1Nzc3Pn5+cpKSmXl5c7OzvOzs7s7OysrKx9fX3W1tYXFxdYWFidnZ22trbCwsJpaWmLi4ugoKBdXV2Dg4PZ2dlKSkq1tbUdHR0wMDBCQkJvb28QEBCPj483NzfNNlYqAAAEtElEQVR4nO3dyVLcQBAEUIplhn0dwIBhWPz/32hjDiZsNaOuriUrw3n2oV9oAitVUvfW1ozsXS2PLuTpaLnanfPPy2W1lj+528tejnkePvve87KTvSTbXMm/uc5elGXOJoAiS57L+DYJ/JXt7JUZ5boFFDnLXptJdtpAkdfz7OUZpPkb/ch99vqG8+UlfM9T9ct4ukko8pa9xrEsNgvloPItzsYf6UcOs9epz8k8oRztZ69Um+OZQpFv2UtVZnu2UL6fZC9WlQ6hyGn2ajXpEsqi4M14n1Bklb3g7vQK5abaZewWlqvGCqEssxfdFY1Q5Dh72R3RCStVY6WwUKfSCkVus5c+M3qhrGt0qgFhkU41JCzRqcaEFTrVqBC/Uw0L4TuVgVAW0PNGCyF2p7IRyh3uZTQSAncqMyFsNbYToo4bLYWY1dhUKBeAncpWiDhutBbKwUM26a+YC+HGjQ5CsGrsIRS5ymZ9io8QqRo7CYGqsZsQphr7CUUes3G/4ymUS4RO5SqEqMbOQoBO5S3Mr8b+wuxOFSBMHjeGCFPHjTHCzGocJEwcN4YJ017hjBNmjRsjhfIjo1OFClOqcbBQnsM7VbQwftwYL4weNyYIg6txijD0MuYIIy9jljBuapwmDKvGicKgb40zhTHVOFcYUY2ThQFv4mYL/atxvtC7GgMInasxhFDWjtUYQ+hZjVGE8ux1GWGEbtUYSOg0NUYS+nQqLKHH1BhM6NCp4ITmU2M8ofVlRBTaTo0hhabVGFRoWI1RhXZTY1ihWTUGFhpVY2ShTTXGFlq8iQsuNHgTF1443KnwhaPVuIJwbNxYQjj0Jm4R4cDNeBWh3NEL1VexjlD7mKqQUHR/USsJdV9vVhKK6hlVKaHq5qaUUPU/RinhK71Q9de0llDzWKOWUPMYtZZQ84SxllBT92sJFcBawkt6If89Df19KX+3oO+H9B2f/jkN/bM2/dS7iJD9mTf93IJ99kQ/P2SfAdPP8dnfxaB/n4b9nSj699rsdgnFFL6yv19K/46w7Y7LeEL6d/XZv7dw2IcAS8j+3RP9t2vs3x/Sf0PK/h0w/bfcrru4Awjp91TwPk0hW0i/t0nADry5woiTaTKFMTth/9/ryy30+7Wx77lHv28i+96X9PuXsu9BS7+PMPte0PT7ebPvyU6/rz772Qj051vQn1HCfs4M/VlB7Oc90Z/ZxX7uGv3ZeeznH9KfYcl+Din9WbLs5wHTn+nMfi43/dnq3hPd/tgKE4tuM6bC5J40HUthxES3P3bC/J40HTNhdtFtxkgYNtHtj40QoOg2YyEMHgh2xkAYPRDszLAQpeg2MyqEKbrNjAmBim4zQ8KcgWBnBoRYRbcZvTBtINgZrdD/zVerKIWZA8HO6ISpA8HOaISQRbcZhRC2J02nW4hadJvpFSL3pOn0CRfVLuBWpxC8J03neL4PvidN53w2EL8nTWd3pq9CT2pkHrBET2rkcoYv68VJmzxuBlbpSa1s8iHOk/py+DUQbyDYnZ2vfJZb4eTli9uaWj2pnebvFHMgqMntpO+l4G12M1NXsVjR3ZTzNfMF/Mjq+ZPvBu2lGJvsn54dXcjT4n4FPQ+czk88DHCdjZrtpwAAAABJRU5ErkJggg=="/> */}
            <button className='mx-2 text-md py-2 px-10  bg-white rounded-md  text-black'> Play</button>
        </div>
            <button  className='mx-2   text-md py-2 px-6 bg-gray-500 rounded-md  text-white'> More Info</button>
      </div>

    </div>
  )
}

export default VideoTitle;