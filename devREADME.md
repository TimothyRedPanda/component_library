To work with this project you will need three main dependencies (not including the initial npm) -:

`git clone <component_library url>` - clone this repository into your chosen folder.

`cd component_library` - or you can open the cloned down folder directly in your text editor.

`npm install framer-motion` - several of the components are using this animation library - so it needs to be installed into your project in order not to break anything.

`npm install sass` - We need react to compile SASS automatically so this is why we need this installation (I am using SCSS files for my styling).
                                                                                                           
`npm install -g typescript` - this will install typescript globally on your machine - as this react project is written in typescript e.g. .ts and .tsx files.
                                                                                                           
Extra details -: The project itself was installed using Vite i.e. `npm create vite@latest`. This is not needed for you if you are cloning down the repository
as it already has the correct folder structure. 

If you wish to add a component to this library the folder structure is as follows - src/components/component_name - inside this inner folder you should
have a 
                                                                                                           
      component_name.tsx, component_name.scss and a index.ts file. 
  
The index.ts file is solely to export the contents of the folder - for use in the npm package layout.

In the components folder there is a index.ts file - this is to consolidate all exports into one file - for ease of use for users of the npm package.
