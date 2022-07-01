import React, {useState} from 'react'
import addUser from "../../Assets/AddUser.png"
import { CustomButtonAccept } from "../../theme/CustumButtons/index";
import { StyledBox, StyledImg} from './style';


function PhotoChooser() { //poner en cutom hook context
    const [imgData, setImgData] = useState(
       "https://cdn-icons-png.flaticon.com/512/1184/1184978.png"
      );
    const [picture, setPicture] = useState({addUser})
      console.log(picture)
      const onChangePicture = (event) => {
        if (event.target.files[0]) {
           setPicture(event.target.files[0]);
          const reader = new FileReader();
          reader.addEventListener("load", () => {
            setImgData(reader.result);
          });
          reader.readAsDataURL(event.target.files[0]);
        }
      };
    
    return(
        <StyledBox>
            <StyledImg
              className="playerProfilePic_home_tile"
              src={imgData} //cortesia de <a href="https://www.flaticon.com/free-icons/add" title="add icons">Add icons created by Freepik - Flaticon</a>
              alt=""
            />
            <CustomButtonAccept variant="contained" component="label">
              <input
                id="profilePic"
                type="file"
                onChange={onChangePicture}
                style={{ display: "none" }}
              />
              Choose an image
            </CustomButtonAccept>
        </StyledBox>
    );
}

export default PhotoChooser; 