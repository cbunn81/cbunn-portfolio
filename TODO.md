# Project

Project Description

<em>[TODO.md spec & Kanban Board](https://bit.ly/3fCwKfM)</em>

### Todo

- [ ] Add next/image priority to first featured photo.  
- [ ] Add watermark to featured photos and re-upload.  
- [ ] Fix blur placeholder for dark color mode (currently the blur is from the light color mode even when loading dark) *This is likely due to the known color mode flashing bug in Chakra UI when reloading a dark mode page*  
- [ ] Add anchor to project headings  
- [ ] Create blog pages  

### In Progress


### Done ✓

- [x] Add placeholder method to ChakraNextImage to allow for blurred versions of images to be loaded first.  
- [x] Create photo page  
- [x] Use next-seo to handle head elements like title, description, open graph data  
- [x] As it doesn't seem possible (or at least worth the trouble) to add a CSS filter onto a Next Image, darken the light mode image directly and re-upload.  
- [x] Replace hero images with high-res versions from source photos  
- [x] Sort out negative space between hero heading and text on the home page and the projects on the projects page.  
- [x] In mobile, change the menu such that when another page is chosen, the menu re-hides. As of now, the menu has to be manually closed after navigating to another page.  
- [x] Consider a placeholder method or a way to preload hero images so that when the color mode is changed, the delay in changing them is less annoying.  
- [x] Set color mode to start with system default  
- [x] Change project image width for mobile (not 100vw, which causes scrolling)  
- [x] Refactor hero background images to use Next image optimization  
- [x] Add hero image to index and projects pages  
- [x] Use NextImage with project images.  
- [x] Add links to projects for GitHub  
- [x] Shorten and improve project descriptions  
- [x] Change checkr gif to have larger text  
- [x] Figure out typing for MDX component props  
- [x] Generalize the Project type and move to separate file (what directory to use?)  
- [x] Change "data" to "metadata" in projects object  
- [x] Add other project MDX files  
- [x] Refactor Featured Projects to use the MDX files for projects, filtering on featured=true.  
- [x] Refactor page section boxes and headings into custom components  
- [x] Refactor layout into its own component and use for all pages  

