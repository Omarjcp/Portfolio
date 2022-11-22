import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Badge,
} from "@chakra-ui/react";

import "./style.scss";
import { dictionarySkills } from "./utils";

export const TabsSkills = () => {
  return (
    <Tabs mt="10" variant="unstyled" className="container-tabs">
      <TabList mb="1em">
        {dictionarySkills.map((tec) => (
          <Tab color="white" borderBottom="1px solid gray">
            {tec.name}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {dictionarySkills.map((tec) => (
          <TabPanel key={tec.id}>
            {tec.skills.map((skill) => (
              <Badge
                key={tec.id}
                variant="subtle"
                colorScheme="black"
                p={1}
                color="gray.300"
                mr="2"
              >
                {skill}
              </Badge>
            ))}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};
