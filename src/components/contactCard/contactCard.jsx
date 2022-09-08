import * as React from 'react';
import { Button, Card, CardContent, CardHeader, Grid, Item} from '@material-ui/core';
import  SelectContactButton  from '../selectContactButton';


const Subheader = ({image, name, surname, trust, shared}) =>{
    return (<> 
    <Grid container>
        <Grid item xs={2} ><img src={image} alt="loading..." /></Grid>
        <Grid item xs={6} ><b>{name + ' ' + surname || 'loading...'}</b></Grid>
        <Grid item style={{marginLeft:"20px"}}> 
        <SelectContactButton/>
        </Grid>
    </Grid>
    <Grid container>
        <Grid item xs={8}>nessuna connessione</Grid>
    </Grid>
    </>)
}
function ContactCard({image, name, surname, trust, shared}) {
    return <>
    <Card style={{width:"366.17px", height:"145px", borderRadius:"5px", backgroundColor:"#EAE8FE", boxShadow:'none',}}>
        <CardHeader subheader={<Subheader image={image} name={name} surname={surname} />} style={{backgroundColor:'#f9f9fc', height:"81px"}}>
           
        </CardHeader>
        <CardContent style={{height:"41px", color:"#8463E7", padding:"5px"}}>
            Sta già condividendo <b><u>{shared}</u></b>
            </CardContent>
    </Card>
    </>;
}

export default ContactCard;