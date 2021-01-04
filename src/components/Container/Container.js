import styled from "styled-components";
import { Container } from "@material-ui/core";
import { MEDIA_QUERY_LG, PAGE_HEIGHT } from "../../constant/style";

const StyledContainer = styled(Container)`
  && {
    color: ${(props) => props.theme.color.darkGray};
    max-width: ${(props) => props.maxWidthOnMobile};
    padding: ${(props) => props.paddingOnMobile};
    border: ${(props) => `1px solid ${props.theme.color.darkGray}`};
    height: ${(props) =>
      props.defaultHeight === "true" ? `${PAGE_HEIGHT}` : ""};

    ${MEDIA_QUERY_LG} {
      max-width: ${(props) => props.maxWidthOnDesktop};
      padding: ${(props) => props.paddingOnDeskTop};
    }
  }
`;

export default StyledContainer;
