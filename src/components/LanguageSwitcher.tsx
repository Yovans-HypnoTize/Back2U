// import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
// import React from "react";
// import { useTranslation } from "react-i18next";

// import enFlag from "../assets/flags/enFlag.svg";
// import ptFlag from "../assets/flags/ptFlag.svg";
// import esFlag from "../assets/flags/esFlag.svg";
// import frFlag from "../assets/flags/frFlag.svg";

// const LanguageSwitcher: React.FC = () => {
//   const { i18n } = useTranslation();

//   const changeLanguage = (lng: string) => {
//     i18n.changeLanguage(lng);
//     localStorage.setItem("language", lng);
//   };
//   const savedLanguage = localStorage.getItem("language");
//   const [language, setLanguage] = React.useState(savedLanguage || "en");

//   const handleChange = (event: any) => {
//     setLanguage(event.target.value);
//     changeLanguage(event.target.value);
//   };

//   const languages = [
//     { code: "en", label: "English", icon: enFlag },
//     { code: "pt", label: "Português", icon: ptFlag },
//     { code: "es", label: "Español", icon: esFlag },
//     { code: "fr", label: "Français", icon: frFlag },
//   ];
//   return (
//     <Box>
//       <FormControl variant="outlined" size="small" fullWidth>
//         <InputLabel id="language-select-label"></InputLabel>
//         <Select size="small" labelId="language-select-label" value={language} onChange={handleChange}>
//           {languages.map((lang) => (
//             <MenuItem key={lang.code} value={lang.code}>
//               <img src={lang.icon} alt={lang.label} width={30} />
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//     </Box>
//   );
// };

// export default LanguageSwitcher;
import React, { useState } from "react";
import { Box, MenuItem, Popover, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

import enFlag from "../assets/flags/enFlag.svg";
import ptFlag from "../assets/flags/ptFlag.svg";
import esFlag from "../assets/flags/esFlag.svg";
import frFlag from "../assets/flags/frFlag.svg";

const CustomButton = styled(Button)(({ theme }) => ({
  width: "100%",
  padding: "2px 4px",
  minWidth: "auto",
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.grey[400]}`,
  textAlign: "left",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: theme.palette.background.paper,
}));

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  const handleButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelectLanguage = (lng: string) => {
    setLanguage(lng);
    changeLanguage(lng);
    handleClose();
  };

  const languages = [
    { code: "en", label: "EN", icon: enFlag },
    { code: "pt", label: "PT", icon: ptFlag },
    { code: "es", label: "ES", icon: esFlag },
    { code: "fr", label: "FR", icon: frFlag },
  ];

  return (
    <Box>
      <CustomButton onClick={handleButtonClick}>
        {languages.find((lang) => lang.code === language)?.label}
        <img
          src={languages.find((lang) => lang.code === language)?.icon}
          alt={language}
          width={20}
          style={{ marginLeft: "5px" }}
        />
      </CustomButton>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {languages.map((lang) => (
          <MenuItem sx={{ padding: "2px 4px" }} key={lang.code} onClick={() => handleSelectLanguage(lang.code)}>
            {lang.label}
            <img src={lang.icon} alt={lang.label} width={20} style={{ marginLeft: "auto" }} />
          </MenuItem>
        ))}
      </Popover>
    </Box>
  );
};

export default LanguageSwitcher;
