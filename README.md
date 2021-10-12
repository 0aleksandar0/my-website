# aleks-website
 myResponsiveReactWebsite
 
 # set-up VS Code
Simple React Snippets
ES7 React/Redux/GraphQL/React-Native snippets
ESLint
MAterial Icon Theme
Code formatieren: Umschalttaste+ALT+F

# create project

npx create-react-app aleks-website
npm add styled-components

# create project with redux
npx create-react-app asu-watch --template redux

# get components from material
https://mui.com/components/material-icons/

npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material

# get react effects like fade and other
npm i react-reveal --save

# imported components

import styled from "styled-components"
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import Fade from 'react-reveal/Fade';
import CloseIcon from '@mui/icons-material/Close';

# to change state of a element
import React, {useState} from 'react'
