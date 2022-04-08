import {
  Accordion,
  AccordionButton,
  AccordionPanel,
  AccordionItem,
} from "@chakra-ui/react";

import { useTranslation } from "react-i18next";
import AprendendoCodando from "./individualProjects/aprendendoCodando";
import ProjectHeader from "./common/projectHeader";

const ProjectItem = (props) => {
  const { t } = useTranslation();

  const renderProjectContent = () => {
    return (
      <>
        <Accordion allowToggle defaultIndex={0}>
          <AccordionItem>
            <AccordionButton
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <ProjectHeader projectName={props?.projectName}></ProjectHeader>
            </AccordionButton>
            <AccordionPanel>
              <AprendendoCodando
                projectName={"AprendendoCodando"}
              ></AprendendoCodando>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </>
    );
  };

  return <>{renderProjectContent()}</>;
};

export default ProjectItem;
