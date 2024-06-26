import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

import { getCurrentDate } from "@/utils/getCurrentDate";
const Header = () => {
  const currentDate = getCurrentDate();
  return (
    <Box className="w-full my-5">
      <Container>
        
        <h2 className="  text-center text-4xl font-bold italic">Pulse News</h2>
        <Typography
          variant="body2"
          color="gray"
          textAlign="center"
          className="my-2"
        >
          Journalism Without Fear or Favour
        </Typography>
        <Typography textAlign="center">{currentDate}</Typography>
      </Container>
    </Box>
  );
};

export default Header;