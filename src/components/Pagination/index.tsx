import { AntDesign } from "@expo/vector-icons";
import { Box, HStack, IconButton, Pressable, Text } from "native-base";

export const Pagination = ({
  handleNextPage,
  handlePrevPage,
  handleChangeOffset,
  currentPage,
  limit,
}: any) => {
  const pages = [];

  for (let i = 1; i < limit; i++) {
    if (limit && currentPage === 1) {
      pages.push(i);
    } else {
      pages.push(i + 1);
    }
  }

  return (
    <HStack
      display="flex"
      alignItems="center"
      justifyContent="center"
      pb={2}
      pt={2}
      bg="#fff"
    >
      <IconButton
        disabled={currentPage === 1}
        onPress={() => handlePrevPage()}
        icon={
          <AntDesign
            name="left"
            size={20}
            color={currentPage === 1 ? "#ddd" : "#008B9C"}
          />
        }
      />
      <Box>
        <Text>
          {pages?.length > 1
            ? pages.map((item) => (
                <Pressable onPress={() => handleChangeOffset(item)}>
                  <Box px={2}>
                    {item === currentPage ? (
                      <Text color="#008B9C" fontWeight="bold">
                        {item}
                      </Text>
                    ) : (
                      <Text>{item}</Text>
                    )}
                  </Box>
                </Pressable>
              ))
            : 1}
        </Text>
      </Box>
      <IconButton
        disabled={currentPage === limit}
        onPress={() => handleNextPage()}
        icon={
          <AntDesign
            name="right"
            size={20}
            color={currentPage === limit ? "#ddd" : "#008B9C"}
          />
        }
      />
    </HStack>
  );
};
