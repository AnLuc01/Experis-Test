import * as React from 'react';
import { Button, Card, CardContent, CardHeader, Grid, Item} from '@material-ui/core';
import  SelectContactButton  from '../selectContactButton';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './style.css';
import {CircleProgress} from 'react-gradient-progress'


const ProfileImage = ({image, trust}) => {
    return <>
    <div style={{position: 'absolute', width: '75px', height: '75px', }}>

    <img src={image} width="60px" height="60px" style={{ width: '80%', height:"80%", marginTop:"-100px",borderRadius:"50%"}}alt="loading..." />
  <div style={{ marginTop:"-87.5px", marginLeft:'-12.5px'}}>
  <CircleProgress percentage={70} strokeWidth={8} width="100" primaryColor={['#FA5D75', '#7864F6AB']} />

   
  </div>
</div>
    </>;
}

export default ProfileImage;