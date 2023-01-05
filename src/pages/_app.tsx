import { ChakraProvider } from '@chakra-ui/react';
import { PrismicPreview } from '@prismicio/next';
import { PrismicProvider } from '@prismicio/react';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import { repositoryName } from '../services/prismic';
import { theme } from '../styles/theme';

export default function App({ Component, pageProps }: AppProps) {

  return  (
    <ChakraProvider theme={theme}>
      <PrismicProvider internalLinkComponent={(props)=> <Link {...props}/>} >
        <PrismicPreview repositoryName={repositoryName}>
          <Component {...pageProps} />
        </PrismicPreview>
      </PrismicProvider>
    </ChakraProvider>
  )
}
