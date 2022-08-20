import { Stack, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Index = () => {
  const [loading, setLoading] = useState<boolean>(true);

  // issue combination
  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <Stack
      // issue combination when using mixed breakpoints from different props
      direction={{ base: "column", sm: "row" }}
      mb={{ base: 4, md: 8 }}
    >
      <Button colorScheme={"blue"}>Get started</Button>
      <Button>Learn more</Button>
    </Stack>
  );
};

export default Index;
