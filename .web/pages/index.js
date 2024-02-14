/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Avatar, Box, Button, Center, Heading, HStack, Image as ChakraImage, Link, Text, VStack } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import NextLink from "next/link"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Box>
  <HStack sx={{"position": "sticky", "bg": ["#171F26"], "color": ["#C3C7CB"], "paddingX": "2em", "paddingY": ["1em"], "zIndex": "999", "width": "100%", "top": "0"}}>
  <Box sx={{"fontFamily": "Comfortaa", "fontWeight": "500", "fontSize": ["1.5em"]}}>
  <Text as={`span`} sx={{"color": ["#ED4260"]}}>
  {`Gabriel`}
</Text>
  <Text as={`span`} sx={{"color": ["#ED4260"]}}>
  {`García`}
</Text>
  <Text as={`span`} sx={{"color": "#B81834"}}>
  {`Dev`}
</Text>
</Box>
  <ChakraImage src={`LogoRojo_gg.PNG`} sx={{"width": "3em", "height": "auto", "bg": ["#171F26"]}}/>
</HStack>
  <Center>
  <VStack sx={{"maxWidth": "600px", "width": "100%", "marginY": "2em", "padding": "2em"}}>
  <VStack alignItems={`start`} spacing={`2em`}>
  <HStack>
  <Avatar name={`Gabriel García`} size={`xl`} src={`GG.png`} sx={{"bg": ["#171F26"], "color": ["#C3C7CB"], "border": "4px", "borderColor": ["#ED4260"]}}/>
  <VStack alignItems={`start`}>
  <Heading size={`lg`} sx={{"color": ["#F1F2F4"], "fontFamily": ["Poppins"], "fontWeight": "500"}}>
  {`GABRIEL JORGE GARCIA`}
</Heading>
  <Text sx={{"marginTop": ["0 !important"], "color": ["#C3C7CB"], "marginX": ["1em"]}}>
  {`gabrielgarcia0266@gmail.com`}
</Text>
  <HStack spacing={`2em`}>
  <Link as={NextLink} href={`https://github.com`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <ChakraImage src={`icons/github.svg`} sx={{"width": ["1em"], "height": "auto"}}/>
</Link>
  <Link as={NextLink} href={`https://linkedin.com`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <ChakraImage src={`icons/linkedin.svg`} sx={{"width": ["1em"], "height": "auto"}}/>
</Link>
</HStack>
</VStack>
</HStack>
  <Text sx={{"color": ["#C3C7CB"], "fontSize": ["0.8em"]}}>
  {`Técnico en industrias Alimentarias, Profesor de tenis y Desarrollador Full Stack Jr. Tengo mas de 30 años de experiencia trabajando dentro de la industria alimenticia y decidi que era el mejor momento para poder realizar un gran cambio al pasar al mundo de la tecnologia informatica`}
</Text>
</VStack>
  <VStack sx={{"width": "100%"}}>
  <Heading size={`lg`} sx={{"width": "100%", "paddingTop": ["1em"], "color": ["#F1F2F4"], "fontFamily": ["Poppins"], "fontWeight": "500"}}>
  {`About me`}
</Heading>
  <Link as={NextLink} href={`https://google.com`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": ["0.7em"], "borderRadius": ["1em"], "color": ["#F1F2F4"], "backgroundColor": ["#171F26"], "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": ["#ED4260"]}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage src={`icons/graduation-cap-solid.svg`} sx={{"width": ["1.5em"], "height": ["1.5em"], "margin": ["0.8em"]}}/>
  <VStack alignItems={`start`} sx={{"paddingY": ["0.7em"], "paddingRight": ["0.7em"]}}>
  <Text sx={{"fontFamily": ["Poppins"], "fontWeight": "500", "fontSize": ["1em"], "color": ["#F1F2F4"]}}>
  {`Estudios`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": ["0.8em"], "color": ["#C3C7CB"]}}>
  {`Carreras de grado`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://google.com`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": ["0.7em"], "borderRadius": ["1em"], "color": ["#F1F2F4"], "backgroundColor": ["#171F26"], "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": ["#ED4260"]}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage src={`icons/book-solid.svg`} sx={{"width": ["1.5em"], "height": ["1.5em"], "margin": ["0.8em"]}}/>
  <VStack alignItems={`start`} sx={{"paddingY": ["0.7em"], "paddingRight": ["0.7em"]}}>
  <Text sx={{"fontFamily": ["Poppins"], "fontWeight": "500", "fontSize": ["1em"], "color": ["#F1F2F4"]}}>
  {`Cursos`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": ["0.8em"], "color": ["#C3C7CB"]}}>
  {`Cursos realizados`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://google.com`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": ["0.7em"], "borderRadius": ["1em"], "color": ["#F1F2F4"], "backgroundColor": ["#171F26"], "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": ["#ED4260"]}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage src={`icons/address-card-solid.svg`} sx={{"width": ["1.5em"], "height": ["1.5em"], "margin": ["0.8em"]}}/>
  <VStack alignItems={`start`} sx={{"paddingY": ["0.7em"], "paddingRight": ["0.7em"]}}>
  <Text sx={{"fontFamily": ["Poppins"], "fontWeight": "500", "fontSize": ["1em"], "color": ["#F1F2F4"]}}>
  {`Experiencia`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": ["0.8em"], "color": ["#C3C7CB"]}}>
  {`Experiencia Laboral`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://linkedin.com`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": ["0.7em"], "borderRadius": ["1em"], "color": ["#F1F2F4"], "backgroundColor": ["#171F26"], "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": ["#ED4260"]}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage src={`icons/linkedin.svg`} sx={{"width": ["1.5em"], "height": ["1.5em"], "margin": ["0.8em"]}}/>
  <VStack alignItems={`start`} sx={{"paddingY": ["0.7em"], "paddingRight": ["0.7em"]}}>
  <Text sx={{"fontFamily": ["Poppins"], "fontWeight": "500", "fontSize": ["1em"], "color": ["#F1F2F4"]}}>
  {`Linkedin`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": ["0.8em"], "color": ["#C3C7CB"]}}>
  {`Mi pagina de Linkedin`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://github.com/gabito1966`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": ["0.7em"], "borderRadius": ["1em"], "color": ["#F1F2F4"], "backgroundColor": ["#171F26"], "whiteSpace": "normal", "textAlign": "start", "_hover": {"backgroundColor": ["#ED4260"]}}}>
  <HStack sx={{"width": "100%"}}>
  <ChakraImage src={`icons/github.svg`} sx={{"width": ["1.5em"], "height": ["1.5em"], "margin": ["0.8em"]}}/>
  <VStack alignItems={`start`} sx={{"paddingY": ["0.7em"], "paddingRight": ["0.7em"]}}>
  <Text sx={{"fontFamily": ["Poppins"], "fontWeight": "500", "fontSize": ["1em"], "color": ["#F1F2F4"]}}>
  {`GitHub`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": ["0.8em"], "color": ["#C3C7CB"]}}>
  {`Mis repositorios`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
</VStack>
</VStack>
</Center>
  <Center>
  <HStack sx={{"marginBottom": ["0.7em"], "paddingBottom": ["1em"], "paddingX": "2em", "bg": ["#0C151D"], "color": "#A3ABB2", "maxWidth": "600px"}}>
  <ChakraImage src={`LogoRojo_gg.PNG`} sx={{"width": "4em", "height": "auto", "bg": ["#0C151D"]}}/>
  <Text>
  {`Gabriel Garcia ©️ 2024`}
</Text>
</HStack>
</Center>
</Box>
  <NextHead>
  <title>
  {`GabrielDev`}
</title>
  <meta content={`Desarrollador web Full Stack`} name={`description`}/>
  <meta content={`Avatar.jpeg`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
