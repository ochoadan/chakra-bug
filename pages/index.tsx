import { Stack, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Index = () => {
  const [status, setStatus] = useState<number>(0.3);

  useEffect(() => {
    setStatus(0.6);
  }, []);

  if (status < 0.5) {
    return <div>loading</div>;
  }

  return (
    <Stack
      direction={{ base: "column", sm: "row" }}
      mb={{ base: 4, md: 8 }}
      spacing={4}
    >
      <Button colorScheme={"blue"}>Get started</Button>
      <Button>Learn more</Button>
    </Stack>
  );
};

export default Index;
