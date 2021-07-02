import React from 'react'
import { Text, Input, Image } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'
import VectorHand from '../pngs/vectorHand.png'
import VectorPassport from '../pngs/vectorPassport.png'

const StyledText30 = styled(Text)`
  margin-bottom: 30px;
`
const StyledImage = styled(Image)`
//   width:245px;
//   height:245px;
`
const StyledImage1 = styled(Image)`
  width: '100%';
  height: '100%';
  objectFit: 'fill';
`
const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  gap: 15px;
  margin-bottom: 50px;
  align-items: center;
  @media screen and (max-width: 420px) {
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  } ;
`
const Paso1 = () => {
    const { t } = useTranslation();
    // const [file, setFile] = React.useState("");
    // const [imagePreviewUrl, setImagePreviewUrl] = React.useState("");

    // const Edit = ({
    //     onSubmit,
    //     children,
    // }) => {
    //     return (
    //         <div className="card">
    //             <form onSubmit={onSubmit}>
    //                 <h1 style={{ color: '#e91e63' }}>Profile Card</h1>
    //                 {children}
    //             </form>
    //         </div>
    //     );
    // }


    // const ImgUpload = ({
    //     onChange,
    //     src,
    // }) => {
    //     return (
    //         <label htmlFor="photo-upload" className="custom-file-upload fas">
    //             <div className="img-wrap img-upload" >
    //                 {/* <Image src={src} style={{ width: '100%', height: '100%', objectFit: 'fill' }} /> */}
    //                 <StyledImage1 src={src} alt="VectorPassport" width={245} height={245} />
    //             </div>
    //             <input id="photo-upload" type="file" onChange={onChange} style={{ display: 'none' }} />
    //         </label>
    //     );
    // }

    // const photoUpload = (e) => {
    //     const reader = new FileReader();
    //     const file = e.target.files[0];
    //     reader.onloadend = () => {
    //         setFile(file);
    //         setImagePreviewUrl(reader.result);
    //     }
    //     reader.readAsDataURL(file);
    // }

    // const handleSubmit = (e) => {
    //     console.log('submit')
    // }

    return (
        <>
            <StyledText30 color="#333" fontSize="35px" bold>
                Sube tu DNI y Selfie
            </StyledText30>
            <Text color="#333" fontSize="25px">
                Sube tu DNI o Pasaporte (anverso y reverso) y selfie, para que
            </Text>
            <StyledText30 color="#333" fontSize="25px">
                comprobemos tu Identidad.
            </StyledText30>
            <Row>
                <Input
                    type="file"
                />
                {/* <Edit onSubmit={(e) => handleSubmit(e)}>
                    <ImgUpload onChange={(e) => photoUpload(e)} src={imagePreviewUrl !== "" ? imagePreviewUrl : "https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true"} />
                </Edit> */}
                <StyledImage src={VectorPassport} alt="VectorPassport" width={245} height={245} />
            </Row>
            <Row>
                <Input
                    type="file"
                />
                <StyledImage src={VectorHand} alt="VectorHand" width={245} height={245} />
            </Row>
        </>
    )
}

export default Paso1
