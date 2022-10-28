import React from 'react'
import './ChannelRow.css';
import './ChannelRow.css';
import Avatar from '@mui/material/Avatar';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function ChannelRow({image, channel, subs, noOfVideos, verified, description}) {
  return (
    <div className='channelRow'>
        <Avatar className='channelRow_logo' 
        alt={channel} src={image} />
        <div className='channelRow_text'>
            <h4>{channel} {verified && <CheckCircleIcon/>}
            </h4>
            <p>
            {subs} subscribers • {noOfVideos} videos
            </p>
            <p>{description}</p>

        </div>
    </div>
  )
}
