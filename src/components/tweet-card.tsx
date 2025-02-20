import { Box, chakra, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import NextImage from 'next/image'
interface TweetCardProps {
  name: string
  image: string
  handle: string
  date: string
  url: string
  content: string
}

const ChakraNextUnwrappedImage = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    ['src', 'alt', 'layout', 'loading'].includes(prop),
})

function TweetCard(props: TweetCardProps) {
  const { name, handle, date, content, url } = props
  const image = `/avatars/${handle}.jpg`
  return (
    <Box
      as='a'
      href={url}
      target='_blank'
      rel='noopener'
      display='flex'
      rounded='lg'
      p='5'
      mb='4'
      bg={useColorModeValue('white', 'gray.700')}
      shadow='base'
    >
      <Box
        as='span'
        display='inline-flex'
        alignItems='center'
        flexShrink={0}
        mr='16px'
        width={8}
        height={8}
        position='relative'
      >
        <ChakraNextUnwrappedImage
          rounded='full'
          alt={name}
          layout='fill'
          src={image}
          loading='lazy'
        />
      </Box>

      <Box fontSize='sm'>
        <p>
          {name}{' '}
          <Box as='span' opacity={0.7}>
            {handle} · {date}
          </Box>
        </p>
        <Box
          as='p'
          mt='2'
          dangerouslySetInnerHTML={{
            __html: content.replace(/--/g, '<br /><br />'),
          }}
        />
      </Box>
    </Box>
  )
}

export default TweetCard
