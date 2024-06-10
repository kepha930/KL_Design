// Use MUI Link to create a general link component with hover effect
import { FC, memo, useState } from "react";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import classNames from "classnames";
const StyledLink = styled(Link)({
  minWidth: "108px",
  boxShadow: "none",
  textTransform: "none",
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#F06C00",
  borderColor: "#F06C00",
  color: "#f5f5f5",
  borderRadius: "10px",
  fontWeight: "bold",
  // "&:hover": {
  //   backgroundColor: "#f5f5f5",
  //   borderColor: "#f5f5f5",
  //   boxShadow: "none",
  //   color: "#F06C00",
  // },
  // "&:active": {
  //   boxShadow: "none",
  //   backgroundColor: "#f5f5f5",
  //   borderColor: "#f5f5f5",
  //   color: "#F06C00"
  // },
  // "&:focus": {
  //   boxShadow: "0 0 0 0.2rem",
  //   backgroundColor: "#f5f5f5",
  //   borderColor: "#f5f5f5",
  //   color: "#F06C00"
  // },
});
export const GeneralLink: FC<{
  text?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}> = memo(({ text, onClick, href, className }) => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const btBase = classNames('bg-orange text-white');
  const btActive = classNames(`bg-white text-orange border-2 border-orange`);
  return (
    <StyledLink
      onClick={onClick}
      onMouseDown={() => !isMouseDown && setIsMouseDown(true)}
      onMouseUp={ () => isMouseDown && setIsMouseDown(false)}
      className={classNames(isMouseDown ? btActive : btBase, className)}
      href={href}
    >
      {text}
    </StyledLink>
  );
});
