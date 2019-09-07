import React from 'react';
//import '../components/index.module.css'
import SimpleCard from '../components/cards'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import android from '../images/android.svg';
import checkout from '../images/checkout.svg';
import ios from '../images/ios.svg';
import restapi from '../images/restapi.svg';
import react from '../images/react.svg';
import embeded from '../images/embeded.svg';
import basic from '../images/basic.svg';
import pro from '../images/pro.svg';
import eccomerce from '../images/eccomerce.svg';
import resource from '../images/resource.svg';


// function TabContainer(props) {
//   return (
//     <Typography component="div">
//       {props.children}
//     </Typography>
//   );
// }

const home_content ={
 textAlign:'center',
 maxWidth:'1170px',
 margin:'0px auto',
}
const home_heading ={
  fontFamily: 'openSans',
  fontSize:'32px',
  fontWeight:'600',
  color:'#434343',
  maxWidth:'500px',
  margin:'0px auto',
 }
 const home_text ={
  fontFamily: 'openSans',
  fontSize:'16px',
  color:'#999999',
  marginTop:'28px',
  letterSpacing:' 0.7px',
  maxWidth:'580px',
  margin:'20px auto',
 }
 const main_container_space ={
  maxWidth:'1170px',
  margin:'50px auto',
 }
 const bottom_space ={
  marginBottom:'50px',
 }

const HomePage = () => {
  return (
    <>

    <Grid container justify="center"  style={home_content}>
    <Grid item xs={12}>
    <Typography component="h1" variant="display1" gutterBottom style={home_heading}>
      Ways to Integrate our Payment Gateway
    </Typography>
    <Typography variant="body1" gutterBottom style={home_text} >
    Cashfree Payment Gateway provides a wide array of integration modes, from Checkout Form to Whitelabel Payment Gateway. Feel free to contact us in case you need any help.
    </Typography>
    </Grid>
    </Grid>
    <Grid container justify="center" style={main_container_space}>
    <Grid item xs={12}>
      <Grid container  justify="center" >
        <SimpleCard header="Checkout"  media={checkout} main =" Easiest way to integrate, Pre-build payment form " target="/cf-checkout"/>
        <SimpleCard header="Android"   media={android}  main="Use Cashfree android SDK to seamlessly accept payment from your android users" target="/android"/>
        <SimpleCard header="iOS"  media={ios}  main="Use Cashfree iOS SDK to seamlessly accept payment from your iOS users" target="/ios"/>
        <SimpleCard header="REST API"  media={restapi}  main="Get started easily with Cashfree API" target="/restapi"/>
        <SimpleCard header="React Native" media={react}  main="Use react native SDK to build a dynamic and responsive Checkout interface" target="/react-native"/>
        <SimpleCard header="Embedded" media={embeded}  main="Simple plug-n-play integration, rich Pre-build payment form" target="/embedded"/>
        <SimpleCard header="Seamless Basic"  media={basic}  main="Build your own payment form native to your site, Richer checkout flow" target="seamless-basic"/>
        <SimpleCard header="Seamless Pro"  media={pro}  main="complete customized Whitelabel experience, requires PCI compliance for saving cards" target="/seamlesspro"/>
        <SimpleCard header="E-commerce"  media={eccomerce}  main="Use Cashfree’s plugins to accept payments via Cashfree Payment Gateway" target="/e-commerce"/>
        <SimpleCard header="Resources"  media={resource}  main="All additional information you need to test the flow and other " target="/resources"/>
        </Grid>
      </Grid>
    </Grid>
  </>
  )
}
export default HomePage


// export const query = graphql`
// query Content {
//   allMarkdownRemark(
//     filter: { fileAbsolutePath: {regex : "\/index/"} },
//   ) {
//     edges {
//       node {
//          headings {
//             value
//             depth
//           }
//           htmlAst
//       }
//     }
//   }
// }
// `
