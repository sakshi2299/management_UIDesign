import React from 'react';
import { Box, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';

const Management: React.FC = () => {
  return (
    <div>
      <Box
        sx={{
          width: 979,
          height: 762,
          top: 456,
          left: 50,
          background: '#F7F9FA',
          position: 'absolute',
        }}
      >
        <Typography sx={{ width: 212, height: 45, top: 476, left: 64 }}>
          <div>Hotel Management System</div>
          <div>Hourly-Public</div>
        </Typography>
        <hr
          style={{
            width: 978,
            height: '0.1px',
            top: 542.5,
            left: 50,
            border: '1px solid #E4E5E6',
          }}
        />
        <Box
          sx={{
            width: 949,
            height: 136,
            top: 572,
            left: 65,
            overflow: 'auto',
            border: '1px solid #E4E5E6',
          }}
        >
          <Typography variant="h6" component="h2" gutterBottom>
            Project Description:
          </Typography>
          <Typography variant="body1" component="p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500sLorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500sLorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500sLorem Ipsum is simply dummy text of
            the printing and typesetting industry.
          </Typography>
        </Box>
        <hr
          style={{
            width: 978,
            height: '0.1px',
            top: 746.5,
            left: 51,
            border: '1px solid #E4E5E6',
          }}
        />
        <Typography
          variant="body1"
          component="p"
          sx={{
            width: 100,
            height: 19,
            top: 778,
            left: 65,
            fontFamily: 'Inter',
            fontSize: 16,
            fontWeight: 700,
            lineHeight: '19px',
            letterSpacing: 0,
            textAlign: 'left',
            // background: '#000000',
            color: '#000000',
            padding: '4px',
          }}
        >
          Project time:
        </Typography>

        {/* Grids Container */}
        <Grid
          container
          sx={{
            width: '100%',
            height: 39,
            position: 'absolute',
          }}
        >
          {/* First Grid */}
          <Grid
            item
            sx={{
              width: 189,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: 31,
                height: 31,
                borderRadius: '50%',
                background: '#000000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
              }}
            >
              1
            </div>
            <Typography
              variant="body1"
              component="p"
              sx={{
                width: 149,
                marginLeft: '10px',
                fontFamily: 'Inter',
                fontSize: 14,
                fontWeight: 700,
                lineHeight: '17px',
                letterSpacing: 0,
                textAlign: 'left',
                background: '#FFFFFF',
              }}
            >
              <div>Less than 30hrs/week</div>
              <div>Hourly</div>
            </Typography>
          </Grid>

          {/* Second Grid */}
          <Grid
            item
            sx={{
              width: 134,
              marginLeft: '20px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: 31,
                height: 31,
                borderRadius: '50%',
                background: 'blue',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
              }}
            >
              2
            </div>
            <Typography
              variant="body1"
              component="p"
              sx={{
                width: 103,
                marginLeft: '10px',
                fontFamily: 'Inter',
                fontSize: 14,
                fontWeight: 700,
                lineHeight: '17px',
                letterSpacing: 0,
                textAlign: 'left',
                background: '#FFFFFF',
              }}
            >
             <div> 1 to 3 months</div>
             <div>Project length</div>
            </Typography>
          </Grid>

          {/* Third Grid */}
          <Grid
            item
            sx={{
              width: 316,
              marginLeft: '20px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: 31,
                height: 31,
                borderRadius: '50%',
                background: 'blue',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                marginLeft:"80px"
              }}
            >
              3
            </div>
            <Typography
              variant="body1"
              component="p"
              sx={{
                width: 276,
                marginLeft: '10px',
                fontFamily: 'Inter',
                fontSize: 14,
                fontWeight: 700,
                lineHeight: '17px',
                letterSpacing: 0,
                textAlign: 'left',
                background: '#FFFFFF',
              }}
            >
              <div>Intermediate</div>
              <div>I am looking for mix experience and value</div>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Management;
