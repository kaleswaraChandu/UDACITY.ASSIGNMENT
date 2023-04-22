import React from 'react'
import {  Box, Typography, Stack, Button } from '@mui/material'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';


export default function Scholarship() {
    
    return (
        <Box> 
            <Box sx={{ height: "80vh", bgcolor: "#17085e", borderRadius: '0px 0px 0px 100px', paddingTop: '7vh' }}>
                <Stack direction={{ lg: "row", xs: "column" }} spacing={5} sx={{ width: "70vw",  margin: 'auto' }}>
                    <Box sx={{ padding: '2vw' }}>
                        <Typography variant='h2' align='left' color={'white'} sx={{  marginBottom: '3vh' }}>
                            A breakthrough in your career awaits.
                        </Typography>
                        <Typography variant='h6' align='left' color={'white'} sx={{  paddingRight: '15vh' }}>
                            A We create opportunities for learners worldwide by offering scholarships and utilizing our proven playbook that builds core competencies in in-demand technologies.
                        </Typography>
                    </Box>
                    <Box>
                        <img alt="desc" src={'https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/3GHH1tQ4hMFPxPqm8nEmJk/52e8241b64a259c569c49f0014bf6517/hero-graphic-scholarships_1_.png?fm=webp&q=100'} style={{ width: '30vw' }}></img>
                    </Box>
                </Stack>
            </Box>
            <Box sx={{ height: "130vh", bgcolor: "white",marginTop:'2vh'}}>
                <Box sx={{ float: 'top' }}>
                    <Box sx={{ width: "70vw", border: '2px solid black', margin: 'auto', marginBottom: '5vh', borderRadius: '0px 100px 0px 0px', padding: '5vh',backgroundColor:'#dfdee3',borderColor:'white' }}>
                        <Stack direction={{ lg: "row", xs: "column" }} spacing={5} sx={{ width: "70vw", margin: 'auto' }}>
                            <Box sx={{ padding: '2vw', width: '40vw' }}>
                                <Typography variant='h5' align='left' color={'black'} sx={{ marginBottom: '3vh'}}>#dfdee3
                                    AWS AI & ML Scholarship Program
                                </Typography>
                                <Box sx={{  paddingRight: '15vh', marginBottom: '3vh' }}>
                                    <Typography variant='body1' align='left' color={'black'}>
                                        Who can apply?
                                    </Typography>
                                    <Typography variant='body1' align='left' color={'black'}>
                                        Underserved and underepresented students
                                    </Typography>
                                </Box>
                                <Box sx={{  paddingRight: '15vh', marginBottom: '3vh' }}>
                                    <Typography variant='body1' align='left' color={'black'}>
                                        Program options:
                                    </Typography>
                                    <Typography variant='body1' align='left' color={'black'}>
                                        AI Programming with Python
                                    </Typography>
                                </Box>
                                <Box sx={{ paddingRight: '15vh', marginBottom: '3vh' }}>
                                    <Button variant="contained" sx={{ height: '7vh'}} endIcon={<TrendingFlatIcon />}>
                                        Contained
                                    </Button>
                                </Box>
                            </Box>
                            <Box>
                            <p style={{textAlign: 'center'}}>
                            Sponsored by:</p>
                                <img style={{textAlign:'center',padding:20}} alt='loading' src='https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/4NHlDLRBuov2wqH1n9R1bx/14f21013196c8b4f859aee6ce446d9a2/AWS.png?fm=webp&q=100'/>
                            </Box>
                        </Stack>
                    </Box>
                    <Box sx={{ width: "70vw", border: '2px solid black', margin: 'auto', borderRadius: '100px 0px 0px 0px', padding: '5vh' ,backgroundColor:'#dfdee3',borderColor:'white'}}>
                        <Stack direction={{ lg: "row", xs: "column" }} spacing={5} sx={{ width: "70vw", margin: 'auto' }}>
                            <Box sx={{ padding: '2vw', width: '40vw' }}>
                                <Typography variant='h5' align='left' color={'black'} sx={{ marginBottom: '3vh' }}>
                                    OneTen/Blacks in Technology Scholarship Program
                                </Typography>
                                <Box sx={{ paddingRight: '15vh', marginBottom: '3vh' }}>
                                    <Typography variant='body1' align='left' color={'black'}>
                                        Who can apply?
                                    </Typography>
                                    <Typography variant='body1' align='left' color={'black'}>
                                        Black job-seekers without 4-year degrees across the United States
                                    </Typography>
                                </Box>
                                <Box sx={{  paddingRight: '15vh', marginBottom: '3vh' }}>
                                    <Typography variant='body1' align='left' color={'black'}>
                                        Program options:
                                    </Typography>
                                    <Typography variant='body1' align='left' color={'black'}>
                                        Business Analytics, Digital Marketing, or Front End Web Development Fundamentals
                                    </Typography>
                                </Box>
                                <Box sx={{  paddingRight: '15vh', marginBottom: '3vh' }}>
                                    <Button variant="contained" sx={{ height: '7vh' }} endIcon={<TrendingFlatIcon />}>
                                        Contained
                                    </Button>
                                </Box>
                            </Box>
                            <Box>
                            <p style={{textAlign: 'center'}}>
                            Sponsored by:</p>
                                <img style={{textAlign:'center',padding:20}} alt='loading' src='https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/1oaYiyiorbtHmwtVuEowzK/2569d062a309a23186e3cf1d043adaf1/logos_1-10_BIT_color_black__3_.png?fm=webp&q=100'/>
                            </Box>
                        </Stack>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ height: "70vh", bgcolor: "#17085e", borderRadius: '100px 0px 0px 0px', paddingTop: '7vh' }}>
                <Stack direction={{ lg: "row", xs: "column" }} spacing={5} sx={{ width: "70vw",  margin: 'auto' }}>
                    <Box sx={{ padding: '1vw' }}>
                        <Typography variant='h3' align='left' color={'white'} sx={{  marginBottom: '3vh' }}>
                        Udacity’s proven career results.
                        </Typography>
                        <Typography variant='h6' align='left' color={'white'} sx={{  paddingRight: '15vh' }}>
                        Our scholarships have helped tens of thousands of people globally. And that number keeps growing everyday.
                        </Typography>
                    </Box>
                    <Box sx={{height:'50vh',width:'60vw',backgroundColor:'white',borderRadius: '0px 100px 0px 0px',textAlign:'center'}}>
                    <h1 style={{fontSize:50}}>73%</h1>
                    <p style={{padding:20}}>of graduates get promoted or land a better job.∗</p>
                    </Box>
                    <Box sx={{textAlign:'center',height:'50vh',width:'60vw',backgroundColor:'white',borderRadius: '0px 0px 0px 100px'}}>
                    <h1 style={{fontSize:50}}>50%</h1>
                    <p style={{padding:20}}>of graduates that wanted to advance their careers received a raise with a median increase of +33%.∗</p>
                    </Box>
                </Stack>

                </Box>
            
                <Box sx={{ height: "70vh", bgcolor: "#17085e", borderRadius: '0px 0px 0px 0px', paddingTop: '7vh' }}>
                <Stack direction={{ lg: "row", xs: "column" }} spacing={2} sx={{ width: "90vw" }}>
                    
                    <Box sx={{height:'50vh',width:'100vw',backgroundColor:'#3051f2',borderRadius: '0px 100px 0px 0px',textAlign:'start'}}>
                    <Stack direction={{ lg: "row", xs: "column" }} sx={{ width: "25vw" }}>
                    <img alt='loading' height='90vh' style={{borderRadius:80 ,marginLeft:10,marginTop:20}} src='https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/3Un0AmRsdBUoRjJFGDEDay/a8ef93926a9530e1e9097e90bd4dcd7a/student-guillermo.png?fm=webp&h=150&q=100&w=150'/>
                    <Typography style={{padding:20,color:'white'}}>Guillermo Orellana Ruiz<br />Android Developer<br /><span style={{fontFamily:'monospace',fontSize:30,fontStyle:'oblique'}}>badoo</span>  <hr /></Typography>

                    </Stack>
                    <ul style={{color:'white'}}>
                    <li style={{margin:20}}>Studied to become a sound engineer</li>
                    <li style={{margin:20}} >wanted to build apps since the first saw Androidin 2001</li>
                    <li style={{margin:20}}>Now Android Developer at Badoo</li>
                    </ul>
                    </Box>
                       
                    <Box sx={{textAlign:'center',height:'50vh',width:'100vw',backgroundColor:'#3051f2',borderRadius: '0px 0px 100px 0px'}}>
                    <Stack direction={{ lg: "row", xs: "column" }} sx={{ width: "25vw" }}>
                    <img alt='loading' height='90vh' style={{borderRadius:80 ,marginLeft:10,marginTop:20}} src='https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/3I2bUo4Uj0dIR4jSTLyfio/5d985dbbf2dbaa49d0307c9c148e2e4f/student-lara.png?fm=webp&h=150&q=100&w=150'/>
                    <Typography style={{padding:20,color:'white'}}>Guillermo Orellana Ruiz<br />Android Developer<br /><span style={{fontFamily:'monospace',fontSize:30,fontStyle:'oblique'}}>badoo</span>  <hr /></Typography>

                    </Stack>
                    <ul style={{color:'white'}}>
                    <li style={{margin:20}}>Studied to become a sound engineer</li>
                    <li style={{margin:20}} >wanted to build apps since the first saw Androidin 2001</li>
                    <li style={{margin:20}}>Now Android Developer at Badoo</li>
                    </ul>
                    </Box>

                    <Box sx={{height:'50vh',width:'100vw',backgroundColor:'#3051f2',borderRadius: '100px 0px 0px 0px',textAlign:'center'}}>
                    <Stack direction={{ lg: "row", xs: "column" }} sx={{ width: "25vw" }}>
                    <img alt='loading' height='90vh' style={{borderRadius:80 ,marginLeft:25,marginTop:20}} src='https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/57fzg2HS0H4PCRChkpjVI3/912e82619379f548c22f4cdb2f2478b5/student-jose.png?fm=webp&h=150&q=100&w=150'/>
                    <Typography style={{padding:20,color:'white'}}>Guillermo Orellana Ruiz<br />Android Developer<br /><span style={{fontFamily:'monospace',fontSize:30,fontStyle:'oblique'}}>badoo</span>  <hr /></Typography>

                    </Stack>
                    <ul style={{color:'white'}}>
                    <li style={{margin:20}}>Studied to become a sound engineer</li>
                    <li style={{margin:20}} >wanted to build apps since the first saw Androidin 2001</li>
                    <li style={{margin:20}}>Now Android Developer at Badoo</li>
                    </ul>
                    </Box>
                    <Box sx={{height:'50vh',width:'100vw',backgroundColor:'#3051f2',borderRadius: '0px 0px 100px 0px',textAlign:'center'}}>
                    <Stack direction={{ lg: "row", xs: "column" }} sx={{ width: "25vw" }}>
                    <img alt='loading' height='90vh' style={{borderRadius:80 ,marginLeft:10,marginTop:20}} src='https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/72pLAhXtVo1OaUUJxEPWK3/9ca8d96a344f48a1f14c42655fc3b037/student-joe.png?fm=webp&h=150&q=100&w=150'/>
                    <Typography style={{padding:20,color:'white'}}>Guillermo Orellana Ruiz<br />Android Developer<br /><span style={{fontFamily:'monospace',fontSize:30,fontStyle:'oblique'}}>badoo</span>  <hr /></Typography>

                    </Stack>
                    <ul style={{color:'white'}}>
                    <li style={{margin:20}}>Studied to become a sound engineer</li>
                    <li style={{margin:20}} >wanted to build apps since the first saw Androidin 2001</li>
                    <li style={{margin:20}}>Now Android Developer at Badoo</li>
                    </ul>
                    </Box>
                    
                </Stack>
                
                </Box>

                <Box sx={{height:'50vh',textAlign:'center',marginTop:'10vh'}}>
                <h1>Our scholarship sponsors
                </h1>
               

                <Box sx={{height:'50vh',textAlign:'center', marginTop:'20vh'}}>
                <img height={100} src='https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/7aDjGWd8Dt7m3desMKWmOl/b837d8cd9e4fcfb8a0d2db6884b1afa8/ScholarshipLogoGarden-Desktop.png' alt='loading'/>
                </Box>
                </Box>


                <Box sx={{ height: "80vh", bgcolor: "#17085e", borderRadius: '0px 0px 0px 0px', paddingTop: '7vh' }}>
                
                    <Box sx={{ padding: '2vw' }}>
                        <Typography variant='h2' align='left' color={'white'} sx={{marginBottom: '3vh' ,textAlign:'center'}}>
                        Be the first to know about <br />future scholarships.
                        </Typography>
                        <Button  sx={{ height: '7vh',backgroundColor:'#dfe61c',color:'black',marginLeft:'45vw', width:'20vh'}}>
                                        Notify Me 
                                    </Button>
            </Box>
        </Box>

        
             <div>                      
        <p style={{textAlign:'center'}}>* Udacity Career Outcomes Survey, July 2020</p>
             </div> 

             <Box sx={{height:'30vh',width:'100vw',marginLeft:'10vh'}}>
             <Stack direction={{ lg: "row", xs: "column" }} spacing={6} sx={{ width: "80w" }}>

             <Box>
             <h1>Featured Programs</h1>
             <p>Business Analytics</p>
             <p>SQL</p>
             <p>Data Engineering with AWS</p>
             <p>Data Analyst</p>
             <p>Intro to Programming</p>
             <p>Digital Marketing</p>
             <p>Self Driving Car Engineer</p>
             </Box>
                
             <Box >
             <h1>Only At Udacity</h1>
             <p>Artificial Intelligence</p>
             <p>Digital Marketing</p>
             <p>Flying Car and Autonomous Flight Engineer</p>
             <p>Intro to Self-Driving Cars</p>
             <p>Machine Learning Engineer</p>
             <p>Robotics Software Engineer</p>
             </Box>
             
            
             <Box>
             <h1>Enterprise</h1>
             <p>Udacity for Enterprise</p>
             <p>Digital Transformation with Udacity</p>
             <p>Artificial Intelligence for Enterprise</p>
             <p>Cybersecurity for Enterprise</p>
             <p>Data Science for Enterprise</p>
             <p>Udacity for Financial Services</p>
             <p>Corporate Social Responsibility</p>
             <p>Train-to-Hire</p>
             <p>Enterprise Resource Center</p>
             </Box>

             <Box>
             <h1>Resources</h1>
              <p>Catalog</p>
              <p> Career Services</p>
              <p>Student Success</p>
              <p> Udacity Talks</p>
              <p> Scholarships</p>
              <p>What is AI?</p>
             </Box>

             <Box>
             <h1>Support</h1>
              <p>Catalog</p>
              <p>Contact Us</p>
              <p> Help and FAQ</p>
              <p>Service Status    </p>
              <p> Tech Requirements</p>
             
          
             
        
             </Box>


             </Stack>
            
             </Box>
       

    </Box>    
                 
       
    )
}