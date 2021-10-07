__NUXT_JSONP__("/articles/install-minecraft-server", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M){return {data:[{article:{slug:"install-minecraft-server",description:"Install Minecraft Server and play with your friends!",title:"Install Minecraft Server",keywords:["Minecraft","Mojang","Games","Server","Multiplayer","Notch"],facebookImage:"\u002F_nuxt\u002Fimages\u002Finstall-minecraft-server-facebookImage.jpg",twitterImage:"\u002F_nuxt\u002Fimages\u002Finstall-minecraft-server-twitterImage.jpg",hidden:false,section:"community",tableOfContents:true,toc:[{id:y,depth:z,text:A},{id:B,depth:s,text:C},{id:D,depth:s,text:E},{id:F,depth:s,text:G},{id:H,depth:z,text:I}],body:{type:"root",children:[{type:a,tag:e,props:{},children:[{type:b,value:"With no fuss with specific desktop environments and stuff, Installing a Minecraft Server is an easy task on the command line. The hard part is what you will build."}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Make sure you have a powerful server machine above 3.7Ghz and 8G of RAM."}]},{type:b,value:c},{type:a,tag:J,props:{id:y},children:[{type:a,tag:h,props:{href:"#install-java--screen",ariaHidden:o,tabIndex:p},children:[{type:a,tag:d,props:{className:[q,r]},children:[]}]},{type:b,value:A}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"For this Tutorial, We will be using openjdk and a command line window separator called screen."}]},{type:b,value:c},{type:a,tag:t,props:{id:B},children:[{type:a,tag:h,props:{href:"#fedora--rhel--centos",ariaHidden:o,tabIndex:p},children:[{type:a,tag:d,props:{className:[q,r]},children:[]}]},{type:b,value:C}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"To install OpenJDK:"}]},{type:b,value:c},{type:a,tag:j,props:{className:[k]},children:[{type:a,tag:l,props:{className:[m],style:n},children:[{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{className:[g]},children:[{type:a,tag:d,props:{style:i},children:[{type:b,value:"sudo yum install java-1.8.0-openjdk screen"}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[g]},children:[]}]}]}]},{type:b,value:c},{type:a,tag:t,props:{id:D},children:[{type:a,tag:h,props:{href:"#debianubuntu",ariaHidden:o,tabIndex:p},children:[{type:a,tag:d,props:{className:[q,r]},children:[]}]},{type:b,value:E}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"First, update your apt repo package list, then get openjdk8."}]},{type:b,value:c},{type:a,tag:j,props:{className:[k]},children:[{type:a,tag:l,props:{className:[m],style:n},children:[{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{className:[g]},children:[{type:a,tag:d,props:{style:i},children:[{type:b,value:"sudo apt-get update"}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[g]},children:[{type:a,tag:d,props:{style:i},children:[{type:b,value:"sudo apt-get install openjdk-7-jre screen"}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[g]},children:[]}]}]}]},{type:b,value:c},{type:a,tag:t,props:{id:F},children:[{type:a,tag:h,props:{href:"#arch-linux",ariaHidden:o,tabIndex:p},children:[{type:a,tag:d,props:{className:[q,r]},children:[]}]},{type:b,value:G}]},{type:b,value:c},{type:a,tag:j,props:{className:[k]},children:[{type:a,tag:l,props:{className:[m],style:n},children:[{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{className:[g]},children:[{type:a,tag:d,props:{style:i},children:[{type:b,value:"pacman -S jre8-openjdk screen"}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[g]},children:[]}]}]}]},{type:b,value:c},{type:a,tag:J,props:{id:H},children:[{type:a,tag:h,props:{href:"#installation-and-configuration",ariaHidden:o,tabIndex:p},children:[{type:a,tag:d,props:{className:[q,r]},children:[]}]},{type:b,value:I}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Now let's make a directory, because it's about to get messy."}]},{type:b,value:c},{type:a,tag:j,props:{className:[k]},children:[{type:a,tag:l,props:{className:[m],style:n},children:[{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{className:[g]},children:[{type:a,tag:d,props:{style:i},children:[{type:b,value:"mkdir minecraft && cd minecraft\n"}]}]}]}]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Now let's get the latest version. You can update your server by stopping it, downloading the new server, and restarting it. You can download the latest version at "},{type:a,tag:h,props:{href:"https:\u002F\u002Fmcversions.net",rel:[u,v,w],target:x},children:[{type:b,value:"mcversions.net"}]},{type:b,value:" There are two types of servers, snapshot and stable."}]},{type:b,value:c},{type:a,tag:j,props:{className:[k]},children:[{type:a,tag:l,props:{className:[m],style:n},children:[{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{className:[g]},children:[{type:a,tag:d,props:{style:i},children:[{type:b,value:"wget -O THE_URL.RANSOM.jar\n"}]}]}]}]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Now we make a bash startup script. If it crashes, it auto restarts. Let's name it "},{type:a,tag:f,props:{},children:[{type:b,value:"start.sh"}]}]},{type:b,value:c},{type:a,tag:j,props:{className:[k]},children:[{type:a,tag:l,props:{className:[m],style:n},children:[{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{className:[g]},children:[{type:a,tag:d,props:{style:K},children:[{type:b,value:"while"}]},{type:a,tag:d,props:{style:i},children:[{type:b,value:" "}]},{type:a,tag:d,props:{style:"color: var(--code-0C)"},children:[{type:b,value:":"}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[g]},children:[{type:a,tag:d,props:{style:i},children:[{type:b,value:"java -Xmx1024M -Xms1024M -jar THE_URL.RANSOM.jar nogui"}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[g]},children:[{type:a,tag:d,props:{style:K},children:[{type:b,value:"done"}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[g]},children:[]}]}]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"We can start the server with "},{type:a,tag:f,props:{},children:[{type:b,value:"screen -S start.sh"}]},{type:b,value:" and exit the window with "},{type:a,tag:L,props:{},children:[{type:b,value:"CTRL + A"}]},{type:b,value:" then push "},{type:a,tag:L,props:{},children:[{type:b,value:"D"}]},{type:b,value:" directly after. This causes it to run in the background. We can resume it using "},{type:a,tag:f,props:{},children:[{type:b,value:"screen -r"}]},{type:b,value:" to view the available screens, then "},{type:a,tag:f,props:{},children:[{type:b,value:"screen -r PID"}]},{type:b,value:" to get back in."}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"The server will crash on the first run, so first change the eula.txt text from "},{type:a,tag:f,props:{},children:[{type:b,value:"eula=false"}]},{type:b,value:" to "},{type:a,tag:f,props:{},children:[{type:b,value:"eula.true"}]},{type:b,value:" and save."}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Then, Re-start by stopping the server and restarting."},{type:a,tag:"br",props:{},children:[]},{type:b,value:"\nWe can also configure the world and other settings in "},{type:a,tag:f,props:{},children:[{type:b,value:"server.properties"}]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"For more info, see the "},{type:a,tag:h,props:{href:"https:\u002F\u002Fminecraft.gamepedia.com\u002FTutorials\u002FSetting_up_a_server",rel:[u,v,w],target:x},children:[{type:b,value:"Minecraft Wiki"}]},{type:b,value:" on this issue."}]},{type:b,value:c},{type:a,tag:"hr",props:{},children:[]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"This article was contributed by "},{type:a,tag:h,props:{href:"https:\u002F\u002Fgithub.com\u002Fkylerschin",rel:[u,v,w],target:x},children:[{type:b,value:"kylerschin"}]},{type:b,value:"."}]}]},dir:"\u002F",path:"\u002Finstall-minecraft-server",extension:".md",createdAt:M,updatedAt:M,authors:[{username:"storyaddict",commitUrl:"https:\u002F\u002Fgithub.com\u002Fsystem76\u002Fdocs\u002Fcommit\u002Fc9848a422ea3c18962f9e13ead04a335c884b43e",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F55410594?v=4",profileUrl:"https:\u002F\u002Fgithub.com\u002Fstoryaddict"},{username:"btkostner",commitUrl:"https:\u002F\u002Fgithub.com\u002Fsystem76\u002Fdocs\u002Fcommit\u002Fe54bdadaf285cdda4147b9f7bfc8a53111584b5a",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F3385679?v=4",profileUrl:"https:\u002F\u002Fgithub.com\u002Fbtkostner"}]},_img:{}}],fetch:{},mutations:void 0}}("element","text","\n","span","p","code","line","a","color: var(--code-0F)","div","nuxt-content-highlight","pre","shiki","background-color: var(--code-00)","true",-1,"icon","icon-link",3,"h3","nofollow","noopener","noreferrer","_blank","install-java--screen",2,"Install Java + Screen","fedora--rhel--centos","Fedora \u002F RHEL \u002F CentOS","debianubuntu","Debian\u002FUbuntu","arch-linux","Arch Linux","installation-and-configuration","Installation and Configuration","h2","color: var(--code-0A)","kbd","2021-10-07T18:31:45.984Z")));