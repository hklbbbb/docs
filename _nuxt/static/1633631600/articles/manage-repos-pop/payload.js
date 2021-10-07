__NUXT_JSONP__("/articles/manage-repos-pop", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){return {data:[{article:{slug:"manage-repos-pop",description:"Add, remove and edit repositories in Pop!_OS\n",title:"Manage Repositories (Pop!_OS)",keywords:["Pop!_OS 18.04","Pop!_OS 19.10","repoman","System76","apt"],facebookImage:"\u002F_nuxt\u002Fimages\u002Fmanage-repos-pop-facebookImage.jpg",twitterImage:"\u002F_nuxt\u002Fimages\u002Fmanage-repos-pop-twitterImage.jpg",hidden:false,section:"software",tableOfContents:true,toc:[{id:q,depth:2,text:r}],body:{type:"root",children:[{type:a,tag:"h2",props:{id:q},children:[{type:a,tag:s,props:{href:"#accessing-repoman",ariaHidden:"true",tabIndex:-1},children:[{type:a,tag:d,props:{className:["icon","icon-link"]},children:[]}]},{type:b,value:r}]},{type:b,value:c},{type:a,tag:f,props:{},children:[{type:b,value:"Pop!_OS' tool for adding, removing and editing repositiories is called "},{type:a,tag:n,props:{},children:[{type:b,value:p}]},{type:b,value:" which is a part of the Pop!_Shop."}]},{type:b,value:c},{type:a,tag:f,props:{},children:[{type:a,tag:t,props:{alt:"Pop!_OS Shop",src:"\u002Fimages\u002Fmanage-repos\u002Fpop-shop-button.png"},children:[]}]},{type:b,value:c},{type:a,tag:f,props:{},children:[{type:b,value:"Click on the gear icon in the top right of the "},{type:a,tag:n,props:{},children:[{type:b,value:"Pop!_Shop"}]},{type:b,value:" window. Once "},{type:a,tag:n,props:{},children:[{type:b,value:p}]},{type:b,value:" is opened, click on the "},{type:a,tag:o,props:{},children:[{type:b,value:"Extra Sources"}]},{type:b,value:" tab there will be options to add repositories with the "},{type:a,tag:o,props:{},children:[{type:b,value:u}]},{type:b,value:" button (on the bottom left). Select a repository from the list and then click on the "},{type:a,tag:o,props:{},children:[{type:b,value:"Edit"}]},{type:b,value:" button (next to the "},{type:a,tag:o,props:{},children:[{type:b,value:u}]},{type:b,value:" button) to edit the selected repository."}]},{type:b,value:c},{type:a,tag:f,props:{},children:[{type:a,tag:t,props:{alt:"Repoman window",src:"\u002Fimages\u002Fmanage-repos\u002FRepoman-Flatpak.png"},children:[]}]},{type:b,value:c},{type:a,tag:f,props:{},children:[{type:a,tag:n,props:{},children:[{type:b,value:p}]},{type:b,value:" can be also be used to add, remove and edit Flatpak Sources starting with Pop!_OS 20.04 LTS. For command-line use of Flatpak the following commands can be used:"}]},{type:b,value:c},{type:a,tag:g,props:{className:[h]},children:[{type:a,tag:i,props:{className:[j],style:k},children:[{type:a,tag:l,props:{},children:[{type:a,tag:d,props:{className:[e]},children:[{type:a,tag:d,props:{style:m},children:[{type:b,value:"flatpak remotes"}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[e]},children:[]}]}]}]},{type:b,value:c},{type:a,tag:f,props:{},children:[{type:b,value:"This is used to list the remote\u002Fsources configured on your system."}]},{type:b,value:c},{type:a,tag:g,props:{className:[h]},children:[{type:a,tag:i,props:{className:[j],style:k},children:[{type:a,tag:l,props:{},children:[{type:a,tag:d,props:{className:[e]},children:[{type:a,tag:d,props:{style:m},children:[{type:b,value:"flatpak remote-add --if-not-exists flathub https:\u002F\u002Fdl.flathub.org\u002Frepo\u002Fflathub.flatpakrepo"}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[e]},children:[]}]}]}]},{type:b,value:c},{type:a,tag:f,props:{},children:[{type:b,value:"This command is used to add a remote\u002Fsource if it doesn't exist on your system and in this example the Flathub remove\u002Fsource is being added."}]},{type:b,value:c},{type:a,tag:g,props:{className:[h]},children:[{type:a,tag:i,props:{className:[j],style:k},children:[{type:a,tag:l,props:{},children:[{type:a,tag:d,props:{className:[e]},children:[{type:a,tag:d,props:{style:m},children:[{type:b,value:"flatpak remote-delete flathub"}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[e]},children:[]}]}]}]},{type:b,value:c},{type:a,tag:f,props:{},children:[{type:b,value:"If we want to remove a remote\u002Fsource the following command can be used."}]},{type:b,value:c},{type:a,tag:g,props:{className:[h]},children:[{type:a,tag:i,props:{className:[j],style:k},children:[{type:a,tag:l,props:{},children:[{type:a,tag:d,props:{className:[e]},children:[{type:a,tag:d,props:{style:m},children:[{type:b,value:"flatpak search inkscape"}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[e]},children:[]}]}]}]},{type:b,value:c},{type:a,tag:f,props:{},children:[{type:b,value:"This command is used to search for a certain package (inkscape in this case) in the coufigured remotes\u002Fsources on this system."}]},{type:b,value:c},{type:a,tag:g,props:{className:[h]},children:[{type:a,tag:i,props:{className:[j],style:k},children:[{type:a,tag:l,props:{},children:[{type:a,tag:d,props:{className:[e]},children:[{type:a,tag:d,props:{style:m},children:[{type:b,value:"flatpak install flathub org.inkscape.Inkscape"}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[e]},children:[]}]}]}]},{type:b,value:c},{type:a,tag:f,props:{},children:[{type:b,value:"Here we are installing inkscape using the Flathub remote\u002Fsource."}]},{type:b,value:c},{type:a,tag:g,props:{className:[h]},children:[{type:a,tag:i,props:{className:[j],style:k},children:[{type:a,tag:l,props:{},children:[{type:a,tag:d,props:{className:[e]},children:[{type:a,tag:d,props:{style:m},children:[{type:b,value:"flatpak uninstall org.inkscape.Inkscape"}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[e]},children:[]}]}]}]},{type:b,value:c},{type:a,tag:f,props:{},children:[{type:b,value:"This will remove the inkscape package from this system."}]},{type:b,value:c},{type:a,tag:g,props:{className:[h]},children:[{type:a,tag:i,props:{className:[j],style:k},children:[{type:a,tag:l,props:{},children:[{type:a,tag:d,props:{className:[e]},children:[{type:a,tag:d,props:{style:m},children:[{type:b,value:"flatpak run org.inkscape.Inkscape"}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[e]},children:[]}]}]}]},{type:b,value:c},{type:a,tag:f,props:{},children:[{type:b,value:"This command will run inkscape once it is installed on the system."}]},{type:b,value:c},{type:a,tag:g,props:{className:[h]},children:[{type:a,tag:i,props:{className:[j],style:k},children:[{type:a,tag:l,props:{},children:[{type:a,tag:d,props:{className:[e]},children:[{type:a,tag:d,props:{style:m},children:[{type:b,value:"flatpak update"}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[e]},children:[]}]}]}]},{type:b,value:c},{type:a,tag:f,props:{},children:[{type:b,value:"This will update all of your installed Flatpak applications and runtimes to their latest versions."}]},{type:b,value:c},{type:a,tag:g,props:{className:[h]},children:[{type:a,tag:i,props:{className:[j],style:k},children:[{type:a,tag:l,props:{},children:[{type:a,tag:d,props:{className:[e]},children:[{type:a,tag:d,props:{style:m},children:[{type:b,value:"flatpak list"}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[e]},children:[]}]}]}]},{type:b,value:c},{type:a,tag:f,props:{},children:[{type:b,value:"This will list all of the installed applications and runtimes."}]},{type:b,value:c},{type:a,tag:f,props:{},children:[{type:b,value:"For more information about Flatpak commands look "},{type:a,tag:s,props:{href:"https:\u002F\u002Fdocs.flatpak.org\u002Fen\u002Flatest\u002Fusing-flatpak.html",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:b,value:"here."}]}]}]},dir:"\u002F",path:"\u002Fmanage-repos-pop",extension:".md",createdAt:v,updatedAt:v,authors:[{username:"storyaddict",commitUrl:"https:\u002F\u002Fgithub.com\u002Fsystem76\u002Fdocs\u002Fcommit\u002Fc9848a422ea3c18962f9e13ead04a335c884b43e",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F55410594?v=4",profileUrl:"https:\u002F\u002Fgithub.com\u002Fstoryaddict"},{username:"btkostner",commitUrl:"https:\u002F\u002Fgithub.com\u002Fsystem76\u002Fdocs\u002Fcommit\u002Fe54bdadaf285cdda4147b9f7bfc8a53111584b5a",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F3385679?v=4",profileUrl:"https:\u002F\u002Fgithub.com\u002Fbtkostner"}]},_img:{"/_ipx/w_320,f_png/images/manage-repos/pop-shop-button.png":"\u002F_nuxt\u002Fimage\u002Fafdf16.png","/_ipx/w_640,f_png/images/manage-repos/pop-shop-button.png":"\u002F_nuxt\u002Fimage\u002F01492b.png","/_ipx/w_768,f_png/images/manage-repos/pop-shop-button.png":"\u002F_nuxt\u002Fimage\u002F954531.png","/_ipx/w_1024,f_png/images/manage-repos/pop-shop-button.png":"\u002F_nuxt\u002Fimage\u002Fb7d705.png","/_ipx/w_1280,f_png/images/manage-repos/pop-shop-button.png":"\u002F_nuxt\u002Fimage\u002F199268.png","/_ipx/w_1536,f_png/images/manage-repos/pop-shop-button.png":"\u002F_nuxt\u002Fimage\u002Ff5c2eb.png","/_ipx/w_320,f_webp/images/manage-repos/pop-shop-button.png":"\u002F_nuxt\u002Fimage\u002F306f0e.webp","/_ipx/w_640,f_webp/images/manage-repos/pop-shop-button.png":"\u002F_nuxt\u002Fimage\u002F75ac4b.webp","/_ipx/w_768,f_webp/images/manage-repos/pop-shop-button.png":"\u002F_nuxt\u002Fimage\u002F94b01c.webp","/_ipx/w_1024,f_webp/images/manage-repos/pop-shop-button.png":"\u002F_nuxt\u002Fimage\u002F1ddf1f.webp","/_ipx/w_1280,f_webp/images/manage-repos/pop-shop-button.png":"\u002F_nuxt\u002Fimage\u002F4a7e0d.webp","/_ipx/w_1536,f_webp/images/manage-repos/pop-shop-button.png":"\u002F_nuxt\u002Fimage\u002F0d7195.webp","/_ipx/w_320,f_png/images/manage-repos/Repoman-Flatpak.png":"\u002F_nuxt\u002Fimage\u002Fffa1a3.png","/_ipx/w_640,f_png/images/manage-repos/Repoman-Flatpak.png":"\u002F_nuxt\u002Fimage\u002F5cb9ad.png","/_ipx/w_768,f_png/images/manage-repos/Repoman-Flatpak.png":"\u002F_nuxt\u002Fimage\u002F656e73.png","/_ipx/w_1024,f_png/images/manage-repos/Repoman-Flatpak.png":"\u002F_nuxt\u002Fimage\u002Fa09f0b.png","/_ipx/w_1280,f_png/images/manage-repos/Repoman-Flatpak.png":"\u002F_nuxt\u002Fimage\u002F6e39cc.png","/_ipx/w_1536,f_png/images/manage-repos/Repoman-Flatpak.png":"\u002F_nuxt\u002Fimage\u002F3f4067.png","/_ipx/w_320,f_webp/images/manage-repos/Repoman-Flatpak.png":"\u002F_nuxt\u002Fimage\u002Fb2946c.webp","/_ipx/w_640,f_webp/images/manage-repos/Repoman-Flatpak.png":"\u002F_nuxt\u002Fimage\u002Fb2ab43.webp","/_ipx/w_768,f_webp/images/manage-repos/Repoman-Flatpak.png":"\u002F_nuxt\u002Fimage\u002Fab5884.webp","/_ipx/w_1024,f_webp/images/manage-repos/Repoman-Flatpak.png":"\u002F_nuxt\u002Fimage\u002F912d8e.webp","/_ipx/w_1280,f_webp/images/manage-repos/Repoman-Flatpak.png":"\u002F_nuxt\u002Fimage\u002F2a4a15.webp","/_ipx/w_1536,f_webp/images/manage-repos/Repoman-Flatpak.png":"\u002F_nuxt\u002Fimage\u002F60269c.webp"}}],fetch:{},mutations:void 0}}("element","text","\n","span","line","p","div","nuxt-content-highlight","pre","shiki","background-color: var(--code-00)","code","color: var(--code-0F)","u","strong","Repoman","accessing-repoman","Accessing Repoman","a","nuxt-picture","Plus","2021-10-07T18:31:45.984Z")));