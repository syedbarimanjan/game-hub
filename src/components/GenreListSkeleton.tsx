import {
  Box,
  HStack,
  List,
  ListItem,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <List>
      <ListItem paddingY="10px">
        <HStack alignItems="center">
          <Box alignItems="center">
            <SkeletonCircle borderRadius={8} size="32px" />
          </Box>
          <Box width={100} alignItems="center">
            <SkeletonText noOfLines={1} skeletonHeight="32px" />
          </Box>
        </HStack>
      </ListItem>
    </List>
  );
};

export default GenreListSkeleton;
