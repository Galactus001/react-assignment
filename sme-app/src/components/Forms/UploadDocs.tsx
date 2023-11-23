import { Box, Icon, Typography } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import React from 'react';
import FileUpload from './FileUpload';
import TextGuide from './TextGuide';

function UploadDocs({
  isCompanyFilled,
  isApplicantFilled,
  isUploadDocsFilled,
  setIsUploadDocsFilled,
}: any) {
  return (
    <Box sx={{ minHeight: '300px', width: '100%' }}>
      <Box sx={{ display: 'flex', gap: '60px' }}>
        <FileUpload
          isCompanyFilled={isCompanyFilled}
          isApplicantFilled={isApplicantFilled}
          isUploadDocsFilled={isUploadDocsFilled}
          setIsUploadDocsFilled={setIsUploadDocsFilled}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '50%',
            pt: 2,
            gap: '12px',
          }}
        >
          <TextGuide
            text={`PDFs (not scanned copies) of company's operating bank current
              account(s) statements for the past 6 months. Example: If today is
              22 Nov 23, then please upload bank statements from May 23 to Oct
              23 (both months inclusive)`}
          />
          <TextGuide
            text={`If your company is multi-banked, then please upload 6 months bank
            statements for each bank account`}
          />
          <TextGuide
            text={`If your file is password protected, we request you to remove the
            password and upload the file to avoid submission failure`}
          />
          <Box sx={{ display: 'flex' }}>
            <DoneIcon sx={{ mr: 2, color: '#666666', fontSize: '26px' }} />
            <Typography sx={{ color: '#666666', fontSize: '18px' }}>
              In case if you are facing any issue while uploading bank
              statements, Please contact us on{' '}
              <a
                href='mailto:support@credilinq.ai'
                style={{ color: '#601A79' }}
              >
                support@credilinq.ai
              </a>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default UploadDocs;
