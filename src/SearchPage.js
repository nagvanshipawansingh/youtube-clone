import React from 'react'
import './SearchPage.css';
import ChannelRow from './ChannelRow';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import VideoRow from './VideoRow';

export default function SearchPage() {
  return (
    <div className='searchPage'>
    <div className='searchPage_filter'>
     <TuneOutlinedIcon/>
       <h1>Filters</h1>
    </div>
       <hr />

       <ChannelRow 
       image = "https://yt3.ggpht.com/ytc/AMLnZu_GS4vuibuZjr4ZBgVr97RrriUQrrhqeyWQWqMYfQ=s176-c-k-c0x00ffffff-no-rj-mo"
       channel="Clever Programmer"
       verified
       subs="1.17M"
       numberOfVideos={701}
       description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the ..."
     />
     <hr />

     <VideoRow 
      views="1.4M"
      subs="659k"
      description="We just created the Best Free Youtube clone App Tutorial on the planet Made with lots of ❤️."
      timestamp="1 year ago"
      channel="Clever Programmer"
      title="Let's Build a Youtube clone"
      image="https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q"
     />
    </div>
   )
}






