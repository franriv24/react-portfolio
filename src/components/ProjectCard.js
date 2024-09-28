import React from "react";
import { Heading, Image, Text, Card, CardBody, CardFooter, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Card maxW='md'>
      <Image
        objectFit='cover'
        src={ imageSrc }
        alt={ title }
        borderRadius='md'
      />
      <CardBody>
        <Heading size='md'>{ title }</Heading>
        <Text>{ description }</Text>
      </CardBody>
      <CardFooter
        justify='space-between'
        flexWrap='wrap'
      >
        <HStack>
          <Text>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
