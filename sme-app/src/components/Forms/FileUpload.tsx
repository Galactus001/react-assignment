import { Box, Button, Chip, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { fileUploadService } from '../services';
import DoneIcon from '@mui/icons-material/Done';
import StepperContext from '../context/stepper-context';

function FileUpload({
  isCompanyFilled,
  isApplicantFilled,
  setIsUploadDocsFilled,
}: any) {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [files, setFiles] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { activeStep, setActiveStep } = React.useContext(StepperContext);

  useEffect(() => {
    if (activeStep < 2) return;
    if (files.length > 0 && isCompanyFilled && isApplicantFilled) {
      setActiveStep(3);
      setIsUploadDocsFilled(true);
    } else {
      setActiveStep(2);
      setIsUploadDocsFilled(false);
    }
  }, [files, isCompanyFilled, isApplicantFilled]);

  const handleFileSelect = ({
    currentTarget: { files },
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (files && files.length) {
      setFiles(Array.from(files));
      const allPromises = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const formData = new FormData();
        formData.append('file', file);
        allPromises.push(fileUploadService(formData));
      }
      setLoading(true);
      Promise.all(allPromises)
        .then((resp) => {
          for (let i = 0; i < resp.length; i++) {
            // setValue(name, resp[i]?.fileName as PathValue<T, Path<T>>);
            console.log(resp);
          }
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.error('Error uploading file:', error.message);
        });
    }
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '350px',
        height: '100%',
        width: '50%',
      }}
    >
      <Box
        sx={{
          height: '180px',
          minWidth: '160px',
          width: '100%',
          background: '#FAFAFA',
          border: '2px dotted #601A79',
          borderRadius: '4px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          setIsDragging(false);
        }}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false);
          setFiles(Array.from(e.dataTransfer?.files));
          handleFileSelect({ currentTarget: { files: e.dataTransfer?.files } });
        }}
      >
        <UploadFileIcon
          sx={{
            padding: '10px',
            height: '50px',
            width: '50px',
            borderRadius: '100%',
            background: '#DCDCE6',
            color: '#601A79',
          }}
        />
        <label
          className='text-[18px] text-[#601A79] mt-2  cursor-pointer'
          htmlFor='file-upload-link'
        >
          {!isDragging ? (
            <div>
              <u>Click to upload</u> "or drag and drop Bank Statements"
            </div>
          ) : (
            'Drop Files here'
          )}
          <input
            id='file-upload-link'
            name='file-upload-link'
            type='file'
            multiple={true}
            hidden
            accept='.pdf'
            onChange={handleFileSelect}
          />
        </label>
      </Box>
      <Box
        sx={{
          mt: '50px',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridGap: '10px',
        }}
      >
        {files.length > 0 &&
          files?.map((file) => {
            return (
              <Chip
                sx={{
                  maxWidth: '280px',
                  display: 'flex',
                  justifyContent: 'space-around',
                }}
                icon={
                  loading ? (
                    <CircularProgress sx={{ p: '12px' }} />
                  ) : (
                    <DoneIcon />
                  )
                }
                label={file.name}
                onDelete={() => {
                  console.log('first');
                  setFiles((prev) =>
                    prev?.filter((item) => item?.name !== file.name)
                  );
                }}
              />
            );
          })}
      </Box>
      {files.length > 0 && (
        <Button
          sx={{ width: '150px', mt: '20px' }}
          onClick={() => {
            setFiles([]);
          }}
        >
          Remove All
        </Button>
      )}
    </Box>
  );
}

export default FileUpload;
