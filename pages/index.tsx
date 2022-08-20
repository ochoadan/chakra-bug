import { Flex, Heading, Stack, Button, Box, useColorModeValue as mode, Text, Image, Container, } from '@chakra-ui/react'

import LandingPreview from '../public/img/index/LandingPreview.jpg'

import { useSession } from "next-auth/react"

const Index = () => {
  const { status } = useSession()
  if (status === "loading") {
    return <div>loading</div>
  }
  else if (status === "authenticated") {
    return <div>authenticated</div>
  }
  else {
    return (
      <>
        <Container maxW={'container.xl'}>
          <Flex pb={4} px={4} direction={{ base: "column", md: "row" }} >
            <Box w={{ base: "full", md: 11 / 12, xl: 9 / 12 }} mx="auto" pr={{ md: 20 }}>
              <Heading fontSize={{ base: "3xl", sm: "4xl" }} lineHeight={"shorter"} mb={6} mt={3}>
                <Text as={'span'}>Welcome to...</Text>
                {' '}
                <Text as={'span'} color={mode('blue.600', 'blue.300')}>my website</Text>
              </Heading>
              <Text mb={6} fontSize={{ base: "lg", md: "xl" }} color={'gray.500'}>
                this is a text describing the site
              </Text>
              <Stack direction={{ base: "column", sm: "row" }} mb={{ base: 4, md: 8 }} spacing={4} >
                <Button onClick={() => window.open('/')} rounded={'full'} px={6} colorScheme={'blue'}>
                  Get started
                </Button>
                <Button onClick={() => window.open('/')} rounded={'full'} px={6}>
                  Learn more
                </Button>
              </Stack>
            </Box>
            <Box w={{ base: "full", md: 10 / 12 }} mx="auto" textAlign="center">
              <Image mt={3} pointerEvents={'none'} bg={'blackAlpha.50'} loading={'lazy'} shadow={'md'} p={2} alt='Platform Example' src={LandingPreview.src} />
            </Box>
          </Flex>
        </Container>
      </>
    )
  }
}

export default Index
