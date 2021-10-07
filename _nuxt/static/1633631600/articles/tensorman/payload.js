__NUXT_JSONP__("/articles/tensorman", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS){return {data:[{article:{slug:G,description:"Use Tensorman to manage TensorFlow containers.\n",title:"Install and Use Tensorman",keywords:["NVIDIA","CUDA",K,L],facebookImage:"\u002F_nuxt\u002Fimages\u002Ftensorman-facebookImage.jpg",twitterImage:"\u002F_nuxt\u002Fimages\u002Ftensorman-twitterImage.jpg",hidden:false,section:"software",tableOfContents:true,redirect_from:["\u002Farticles\u002Finstall-tensorflow","\u002Farticles\u002Fuse-tensorflow","\u002Farticles\u002Fuse-tensorman"],toc:[{id:M,depth:v,text:N},{id:O,depth:v,text:P},{id:Q,depth:v,text:R},{id:S,depth:v,text:T},{id:U,depth:v,text:V},{id:W,depth:v,text:X},{id:Y,depth:v,text:Z},{id:_,depth:v,text:$},{id:A,depth:B,text:A},{id:aa,depth:B,text:C},{id:ab,depth:v,text:ac},{id:ad,depth:v,text:ae},{id:af,depth:v,text:ag},{id:ah,depth:v,text:ai},{id:aj,depth:v,text:ak},{id:al,depth:B,text:am},{id:an,depth:B,text:ao},{id:ap,depth:B,text:aq},{id:ar,depth:v,text:as}],body:{type:"root",children:[{type:a,tag:w,props:{id:M},children:[{type:a,tag:n,props:{href:"#installing-tensorman",ariaHidden:o,tabIndex:p},children:[{type:a,tag:c,props:{className:[q,r]},children:[]}]},{type:b,value:N}]},{type:b,value:d},{type:a,tag:h,props:{},children:[{type:a,tag:at,props:{},children:[{type:b,value:L}]},{type:b,value:" is a tool for managing TensorFlow toolchains in Pop!_OS. It can be installed with this command:"}]},{type:b,value:d},{type:a,tag:i,props:{className:[j]},children:[{type:a,tag:k,props:{className:[l],style:m},children:[{type:a,tag:g,props:{},children:[{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{style:e},children:[{type:b,value:"sudo apt install tensorman"}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[]}]}]}]},{type:b,value:d},{type:a,tag:h,props:{},children:[{type:b,value:"For NVIDIA CUDA support, the following package must be installed:"}]},{type:b,value:d},{type:a,tag:i,props:{className:[j]},children:[{type:a,tag:k,props:{className:[l],style:m},children:[{type:a,tag:g,props:{},children:[{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{style:e},children:[{type:b,value:"sudo apt install nvidia-container-runtime"}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[]}]}]}]},{type:b,value:d},{type:a,tag:h,props:{},children:[{type:b,value:"The user account working with Tensorman must be added to the "},{type:a,tag:g,props:{},children:[{type:b,value:au}]},{type:b,value:" group if that hasn't been done already:"}]},{type:b,value:d},{type:a,tag:i,props:{className:[j]},children:[{type:a,tag:k,props:{className:[l],style:m},children:[{type:a,tag:g,props:{},children:[{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{style:e},children:[{type:b,value:"sudo usermod -aG docker "}]},{type:a,tag:c,props:{style:s},children:[{type:b,value:F}]},{type:a,tag:c,props:{style:y},children:[{type:b,value:"USER"}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[]}]}]}]},{type:b,value:d},{type:a,tag:h,props:{},children:[{type:b,value:"If Docker was just installed, then a reboot will be needed before Tensorman can be used."}]},{type:b,value:d},{type:a,tag:w,props:{id:O},children:[{type:a,tag:n,props:{href:"#about-tensorman",ariaHidden:o,tabIndex:p},children:[{type:a,tag:c,props:{className:[q,r]},children:[]}]},{type:b,value:P}]},{type:b,value:d},{type:a,tag:h,props:{},children:[{type:b,value:"Packaging Tensorflow for Linux distributions is notoriously difficult, if not impossible. Every release of Tensorflow is accommodated by a myriad of possible build configurations, which requires building many variants of Tensorflow for each Tensorflow release. To make matters worse, each new version of Tensorflow will depend on a wide number of shared dependencies, which may not be supported on older versions of a Linux distribution, even if that distribution is actively supported by the distribution maintainers."}]},{type:b,value:d},{type:a,tag:h,props:{},children:[{type:b,value:"To solve this problem, the Tensorflow project provides official Docker container builds, which allow Tensorflow to operate in a contained environment that is isolated from the rest of the system. This virtual environment can operate independently of the base system, allowing you to use any version of Tensorflow on any version of a Linux distribution that supports the Docker runtime."}]},{type:b,value:d},{type:a,tag:h,props:{},children:[{type:b,value:"However, configuring and managing Docker containers for Tensorflow using the "},{type:a,tag:g,props:{},children:[{type:b,value:au}]},{type:b,value:" command line is currently tedious, and managing multiple versions for different projects is even more-so. To solve this problem for our users, we have developed "},{type:a,tag:g,props:{},children:[{type:b,value:G}]},{type:b,value:" as a convenient tool to manage the installation and execution of Tensorflow Docker containers. It condenses the command-line soup into a set of simple commands that are easy to memorize."}]},{type:b,value:d},{type:a,tag:w,props:{id:Q},children:[{type:a,tag:n,props:{href:"#comparison-to-docker-command",ariaHidden:o,tabIndex:p},children:[{type:a,tag:c,props:{className:[q,r]},children:[]}]},{type:b,value:R}]},{type:b,value:d},{type:a,tag:h,props:{},children:[{type:b,value:"Take the following Docker invocation as an example:"}]},{type:b,value:d},{type:a,tag:i,props:{className:[j]},children:[{type:a,tag:k,props:{className:[l],style:m},children:[{type:a,tag:g,props:{},children:[{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{style:e},children:[{type:b,value:"docker run -u "}]},{type:a,tag:c,props:{style:s},children:[{type:b,value:F}]},{type:a,tag:c,props:{style:y},children:[{type:b,value:av}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:":"}]},{type:a,tag:c,props:{style:s},children:[{type:b,value:F}]},{type:a,tag:c,props:{style:y},children:[{type:b,value:av}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:" -v "}]},{type:a,tag:c,props:{style:s},children:[{type:b,value:F}]},{type:a,tag:c,props:{style:y},children:[{type:b,value:"PWD"}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:":\u002Fproject -w \u002Fproject \\"}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{style:e},children:[{type:b,value:"    --runtime=nvidia --init --rm tensorflow\u002Ftensorflow:latest-gpu \\"}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{style:e},children:[{type:b,value:"    python .\u002Fscript.py"}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[]}]}]}]},{type:b,value:d},{type:a,tag:h,props:{},children:[{type:b,value:"This designates for the latest version of Tensorflow with GPU support to be used, mounting the working directory to "},{type:a,tag:g,props:{},children:[{type:b,value:"\u002Fproject"}]},{type:b,value:", launching the container with the current user account, and and executing "},{type:a,tag:g,props:{},children:[{type:b,value:"script.py"}]},{type:b,value:" with the Python binary in the container. With "},{type:a,tag:g,props:{},children:[{type:b,value:G}]},{type:b,value:", we can achieve the same with:"}]},{type:b,value:d},{type:a,tag:i,props:{className:[j]},children:[{type:a,tag:k,props:{className:[l],style:m},children:[{type:a,tag:g,props:{},children:[{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{style:e},children:[{type:b,value:"tensorman run --gpu python -- .\u002Fscript.py"}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[]}]}]}]},{type:b,value:d},{type:a,tag:h,props:{},children:[{type:b,value:"Which defaults to the latest version, and whose version and tag variants can be set as defaults per-run, per-project, or user-wide."}]},{type:b,value:d},{type:a,tag:w,props:{id:S},children:[{type:a,tag:n,props:{href:"#updating-and-installing-containers",ariaHidden:o,tabIndex:p},children:[{type:a,tag:c,props:{className:[q,r]},children:[]}]},{type:b,value:T}]},{type:b,value:d},{type:a,tag:h,props:{},children:[{type:b,value:"The following commands can be used for installing either the latest version of a container or a certain version:"}]},{type:b,value:d},{type:a,tag:i,props:{className:[j]},children:[{type:a,tag:k,props:{className:[l],style:m},children:[{type:a,tag:g,props:{},children:[{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{style:e},children:[{type:b,value:"tensorman pull latest"}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{style:e},children:[{type:b,value:"tensorman pull 1.14.0"}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[]}]}]}]},{type:b,value:d},{type:a,tag:w,props:{id:U},children:[{type:a,tag:n,props:{href:"#running-commands-in-containers",ariaHidden:o,tabIndex:p},children:[{type:a,tag:c,props:{className:[q,r]},children:[]}]},{type:b,value:V}]},{type:b,value:d},{type:a,tag:h,props:{},children:[{type:b,value:"Commands are executed within the container using the "},{type:a,tag:g,props:{},children:[{type:b,value:"run"}]},{type:b,value:" command."}]},{type:b,value:d},{type:a,tag:i,props:{className:[j]},children:[{type:a,tag:k,props:{className:[l],style:m},children:[{type:a,tag:g,props:{},children:[{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{style:D},children:[{type:b,value:"# Default container version with Bash prompt"}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{style:e},children:[{type:b,value:"tensorman run bash"}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{style:D},children:[{type:b,value:"# Default container version with Python script"}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{style:e},children:[{type:b,value:"tensorman run python -- script.py"}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{style:D},children:[{type:b,value:"# Default container version with GPU support"}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{style:e},children:[{type:b,value:"tensorman run --gpu bash"}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{style:D},children:[{type:b,value:"# With GPU, Python3, and Jupyter support"}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{style:e},children:[{type:b,value:"tensorman run --gpu --python3 --jupyter bash"}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[]}]}]}]},{type:b,value:d},{type:a,tag:w,props:{id:W},children:[{type:a,tag:n,props:{href:"#python-api-example",ariaHidden:o,tabIndex:p},children:[{type:a,tag:c,props:{className:[q,r]},children:[]}]},{type:b,value:X}]},{type:b,value:d},{type:a,tag:h,props:{},children:[{type:b,value:"Given the following example, which will print a \"Hello World\" message, the TensorFlow version, and the output of a calculation made using the GPU:"}]},{type:b,value:d},{type:a,tag:i,props:{className:[j]},children:[{type:a,tag:k,props:{className:[l],style:m},children:[{type:a,tag:g,props:{},children:[{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{style:D},children:[{type:b,value:"#!\u002Fusr\u002Fbin\u002Fpython3"}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{style:s},children:[{type:b,value:"import"}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:" tensorflow "}]},{type:a,tag:c,props:{style:s},children:[{type:b,value:"as"}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:" tf"}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{style:e},children:[{type:b,value:"hello "}]},{type:a,tag:c,props:{style:s},children:[{type:b,value:z}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:" tf.constant("}]},{type:a,tag:c,props:{style:x},children:[{type:b,value:"'Hello, TensorFlow!'"}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:H}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{style:e},children:[{type:b,value:"tf.print(hello)"}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{style:e},children:[{type:b,value:"tf.print("}]},{type:a,tag:c,props:{style:x},children:[{type:b,value:"'Using TensorFlow version: '"}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:" "}]},{type:a,tag:c,props:{style:s},children:[{type:b,value:aw}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:" tf.__version__)"}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{style:s},children:[{type:b,value:"with"}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:" tf.device("}]},{type:a,tag:c,props:{style:x},children:[{type:b,value:"'\u002Fgpu:0'"}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:"):"}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{style:e},children:[{type:b,value:"    a "}]},{type:a,tag:c,props:{style:s},children:[{type:b,value:z}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:ax}]},{type:a,tag:c,props:{style:t},children:[{type:b,value:ay}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:u}]},{type:a,tag:c,props:{style:t},children:[{type:b,value:az}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:u}]},{type:a,tag:c,props:{style:t},children:[{type:b,value:aA}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:u}]},{type:a,tag:c,props:{style:t},children:[{type:b,value:aB}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:u}]},{type:a,tag:c,props:{style:t},children:[{type:b,value:aC}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:u}]},{type:a,tag:c,props:{style:t},children:[{type:b,value:aD}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:aE}]},{type:a,tag:c,props:{style:s},children:[{type:b,value:z}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:aF}]},{type:a,tag:c,props:{style:t},children:[{type:b,value:aG}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:u}]},{type:a,tag:c,props:{style:t},children:[{type:b,value:aH}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:aI}]},{type:a,tag:c,props:{style:s},children:[{type:b,value:z}]},{type:a,tag:c,props:{style:x},children:[{type:b,value:"'a'"}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:H}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{style:e},children:[{type:b,value:"    b "}]},{type:a,tag:c,props:{style:s},children:[{type:b,value:z}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:ax}]},{type:a,tag:c,props:{style:t},children:[{type:b,value:ay}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:u}]},{type:a,tag:c,props:{style:t},children:[{type:b,value:az}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:u}]},{type:a,tag:c,props:{style:t},children:[{type:b,value:aA}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:u}]},{type:a,tag:c,props:{style:t},children:[{type:b,value:aB}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:u}]},{type:a,tag:c,props:{style:t},children:[{type:b,value:aC}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:u}]},{type:a,tag:c,props:{style:t},children:[{type:b,value:aD}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:aE}]},{type:a,tag:c,props:{style:s},children:[{type:b,value:z}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:aF}]},{type:a,tag:c,props:{style:t},children:[{type:b,value:aH}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:u}]},{type:a,tag:c,props:{style:t},children:[{type:b,value:aG}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:aI}]},{type:a,tag:c,props:{style:s},children:[{type:b,value:z}]},{type:a,tag:c,props:{style:x},children:[{type:b,value:"'b'"}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:H}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{style:e},children:[{type:b,value:"    c "}]},{type:a,tag:c,props:{style:s},children:[{type:b,value:z}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:" tf.matmul(a, b)"}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{style:e},children:[{type:b,value:"tf.print(c)"}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[]}]}]}]},{type:b,value:d},{type:a,tag:h,props:{},children:[{type:b,value:"If the Python file is named "},{type:a,tag:g,props:{},children:[{type:b,value:"hello-world.py"}]},{type:b,value:", it can be run with TensorFlow using this command:"}]},{type:b,value:d},{type:a,tag:i,props:{className:[j]},children:[{type:a,tag:k,props:{className:[l],style:m},children:[{type:a,tag:g,props:{},children:[{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{style:e},children:[{type:b,value:"tensorman run --gpu python .\u002Fhello-world.py\n"}]}]}]}]}]},{type:b,value:d},{type:a,tag:w,props:{id:Y},children:[{type:a,tag:n,props:{href:"#setting-per-run",ariaHidden:o,tabIndex:p},children:[{type:a,tag:c,props:{className:[q,r]},children:[]}]},{type:b,value:Z}]},{type:b,value:d},{type:a,tag:h,props:{},children:[{type:b,value:"If a certain version is specified with the "},{type:a,tag:g,props:{},children:[{type:b,value:aw}]},{type:b,value:" argument, Tensorman will use that version instead."}]},{type:b,value:d},{type:a,tag:i,props:{className:[j]},children:[{type:a,tag:k,props:{className:[l],style:m},children:[{type:a,tag:g,props:{},children:[{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{style:e},children:[{type:b,value:"tensorman +1.14.0 run --python3 --gpu bash"}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[]}]}]}]},{type:b,value:d},{type:a,tag:h,props:{},children:[{type:b,value:"Custom images may be specified with an "},{type:a,tag:g,props:{},children:[{type:b,value:z}]},{type:b,value:" argument."}]},{type:b,value:d},{type:a,tag:i,props:{className:[j]},children:[{type:a,tag:k,props:{className:[l],style:m},children:[{type:a,tag:g,props:{},children:[{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{style:e},children:[{type:b,value:"tensorman =custom-image run --gpu bash"}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[]}]}]}]},{type:b,value:d},{type:a,tag:w,props:{id:_},children:[{type:a,tag:n,props:{href:"#setting-per-project",ariaHidden:o,tabIndex:p},children:[{type:a,tag:c,props:{className:[q,r]},children:[]}]},{type:b,value:$}]},{type:b,value:d},{type:a,tag:h,props:{},children:[{type:b,value:"There are two files that can be used for configuring Tensorman locally: "},{type:a,tag:g,props:{},children:[{type:b,value:A}]},{type:b,value:", and "},{type:a,tag:g,props:{},children:[{type:b,value:C}]},{type:b,value:". These files will be automatically detected if they can be found in a parent directory."}]},{type:b,value:d},{type:a,tag:E,props:{id:A},children:[{type:a,tag:n,props:{href:"#tensorflow-toolchain",ariaHidden:o,tabIndex:p},children:[{type:a,tag:c,props:{className:[q,r]},children:[]}]},{type:b,value:A}]},{type:b,value:d},{type:a,tag:h,props:{},children:[{type:b,value:"This file overrides the tensorflow image, defined in either "},{type:a,tag:g,props:{},children:[{type:b,value:C}]},{type:b,value:" or the user-wide configuration file."}]},{type:b,value:d},{type:a,tag:i,props:{className:[j]},children:[{type:a,tag:k,props:{className:[l],style:m},children:[{type:a,tag:g,props:{},children:[{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{style:e},children:[{type:b,value:"1.14.0 gpu python3"}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[]}]}]}]},{type:b,value:d},{type:a,tag:h,props:{},children:[{type:b,value:"Or specifying a custom image:"}]},{type:b,value:d},{type:a,tag:i,props:{className:[j]},children:[{type:a,tag:k,props:{className:[l],style:m},children:[{type:a,tag:g,props:{},children:[{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{style:e},children:[{type:b,value:"=custom-image gpu"}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[]}]}]}]},{type:b,value:d},{type:a,tag:E,props:{id:aa},children:[{type:a,tag:n,props:{href:"#tensormantoml",ariaHidden:o,tabIndex:p},children:[{type:a,tag:c,props:{className:[q,r]},children:[]}]},{type:b,value:C}]},{type:b,value:d},{type:a,tag:h,props:{},children:[{type:b,value:"This file supports additional configuration parameters, with a user-wide configuration located at "},{type:a,tag:g,props:{},children:[{type:b,value:"~\u002F.config\u002Ftensorman\u002Fconfig.toml"}]},{type:b,value:", and a project-wide location at "},{type:a,tag:g,props:{},children:[{type:b,value:C}]},{type:b,value:". One of the reasons you may want to use this file is to declare some additional Docker flags, with the "},{type:a,tag:g,props:{},children:[{type:b,value:I}]},{type:b,value:" key."}]},{type:b,value:d},{type:a,tag:h,props:{},children:[{type:b,value:"Using a default TensorFlow image:"}]},{type:b,value:d},{type:a,tag:i,props:{className:[j]},children:[{type:a,tag:k,props:{className:[l],style:m},children:[{type:a,tag:g,props:{},children:[{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{style:y},children:[{type:b,value:I}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:aJ}]},{type:a,tag:c,props:{style:x},children:[{type:b,value:aK}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:u}]},{type:a,tag:c,props:{style:x},children:[{type:b,value:aL}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:aM}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{style:y},children:[{type:b,value:"tag"}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:aN}]},{type:a,tag:c,props:{style:x},children:[{type:b,value:"'2.0.0'"}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{style:y},children:[{type:b,value:aO}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:aP}]},{type:a,tag:c,props:{style:x},children:[{type:b,value:aQ}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:u}]},{type:a,tag:c,props:{style:x},children:[{type:b,value:"'python3'"}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:aR}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[]}]}]}]},{type:b,value:d},{type:a,tag:h,props:{},children:[{type:b,value:"Defining a custom image:"}]},{type:b,value:d},{type:a,tag:i,props:{className:[j]},children:[{type:a,tag:k,props:{className:[l],style:m},children:[{type:a,tag:g,props:{},children:[{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{style:y},children:[{type:b,value:I}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:aJ}]},{type:a,tag:c,props:{style:x},children:[{type:b,value:aK}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:u}]},{type:a,tag:c,props:{style:x},children:[{type:b,value:aL}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:aM}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{style:y},children:[{type:b,value:"image"}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:aN}]},{type:a,tag:c,props:{style:x},children:[{type:b,value:"'custom-image'"}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{style:y},children:[{type:b,value:aO}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:aP}]},{type:a,tag:c,props:{style:x},children:[{type:b,value:aQ}]},{type:a,tag:c,props:{style:e},children:[{type:b,value:aR}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[]}]}]}]},{type:b,value:d},{type:a,tag:w,props:{id:ab},children:[{type:a,tag:n,props:{href:"#setting-per-user",ariaHidden:o,tabIndex:p},children:[{type:a,tag:c,props:{className:[q,r]},children:[]}]},{type:b,value:ac}]},{type:b,value:d},{type:a,tag:h,props:{},children:[{type:b,value:"The default version user-wide can be changed using the "},{type:a,tag:g,props:{},children:[{type:b,value:"default"}]},{type:b,value:" subcommand. This version of "},{type:a,tag:at,props:{},children:[{type:b,value:K}]},{type:b,value:" will be launched whenever the "},{type:a,tag:g,props:{},children:[{type:b,value:"tensorman run"}]},{type:b,value:" command is used:"}]},{type:b,value:d},{type:a,tag:i,props:{className:[j]},children:[{type:a,tag:k,props:{className:[l],style:m},children:[{type:a,tag:g,props:{},children:[{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{style:e},children:[{type:b,value:"tensorman default 1.14.0"}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{style:e},children:[{type:b,value:"tensorman default latest gpu python3"}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{style:e},children:[{type:b,value:"tensorman default nightly"}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{style:e},children:[{type:b,value:"tensorman default =custom-image gpu"}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[]}]}]}]},{type:b,value:d},{type:a,tag:h,props:{},children:[{type:b,value:"By default, Tensorman will use the latest as the default per-user version tag."}]},{type:b,value:d},{type:a,tag:w,props:{id:ad},children:[{type:a,tag:n,props:{href:"#listing-active-container-version",ariaHidden:o,tabIndex:p},children:[{type:a,tag:c,props:{className:[q,r]},children:[]}]},{type:b,value:ae}]},{type:b,value:d},{type:a,tag:h,props:{},children:[{type:b,value:"If the active containers from the current working directory need to be listed, the "},{type:a,tag:g,props:{},children:[{type:b,value:"show"}]},{type:b,value:J}]},{type:b,value:d},{type:a,tag:i,props:{className:[j]},children:[{type:a,tag:k,props:{className:[l],style:m},children:[{type:a,tag:g,props:{},children:[{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{style:e},children:[{type:b,value:"tensorman show"}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[]}]}]}]},{type:b,value:d},{type:a,tag:w,props:{id:af},children:[{type:a,tag:n,props:{href:"#removing-containers",ariaHidden:o,tabIndex:p},children:[{type:a,tag:c,props:{className:[q,r]},children:[]}]},{type:b,value:ag}]},{type:b,value:d},{type:a,tag:h,props:{},children:[{type:b,value:"Having many containers installed at the same time can use a lot of disk space. If some need to be removed, the "},{type:a,tag:g,props:{},children:[{type:b,value:"remove"}]},{type:b,value:J}]},{type:b,value:d},{type:a,tag:i,props:{className:[j]},children:[{type:a,tag:k,props:{className:[l],style:m},children:[{type:a,tag:g,props:{},children:[{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{style:e},children:[{type:b,value:"tensorman remove 1.14.0\ntensorman remove latest\ntensorman remove 481cb7ea88260404\ntensorman remove =custom-image\n"}]}]}]}]}]},{type:b,value:d},{type:a,tag:w,props:{id:ah},children:[{type:a,tag:n,props:{href:"#listing-installed-containers",ariaHidden:o,tabIndex:p},children:[{type:a,tag:c,props:{className:[q,r]},children:[]}]},{type:b,value:ai}]},{type:b,value:d},{type:a,tag:h,props:{},children:[{type:b,value:"To find installed containers, the "},{type:a,tag:g,props:{},children:[{type:b,value:"list"}]},{type:b,value:J}]},{type:b,value:d},{type:a,tag:i,props:{className:[j]},children:[{type:a,tag:k,props:{className:[l],style:m},children:[{type:a,tag:g,props:{},children:[{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{style:e},children:[{type:b,value:"tensorman list"}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[]}]}]}]},{type:b,value:d},{type:a,tag:w,props:{id:aj},children:[{type:a,tag:n,props:{href:"#creating-a-custom-image",ariaHidden:o,tabIndex:p},children:[{type:a,tag:c,props:{className:[q,r]},children:[]}]},{type:b,value:ak}]},{type:b,value:d},{type:a,tag:h,props:{},children:[{type:b,value:"In most projects, you will need to pull in more dependencies than the base TensorFlow image has. To do this, you will need to create the image by running a TensorFlow container as root, installing and setting up the environment how you need it, and then saving those changes as a new custom image."}]},{type:b,value:d},{type:a,tag:h,props:{},children:[{type:b,value:"To do so, you will need to build the container in one terminal, and save it from another."}]},{type:b,value:d},{type:a,tag:E,props:{id:al},children:[{type:a,tag:n,props:{href:"#build-new-image",ariaHidden:o,tabIndex:p},children:[{type:a,tag:c,props:{className:[q,r]},children:[]}]},{type:b,value:am}]},{type:b,value:d},{type:a,tag:h,props:{},children:[{type:b,value:"First, launch a terminal where you will begin configuring the Docker image:"}]},{type:b,value:d},{type:a,tag:i,props:{className:[j]},children:[{type:a,tag:k,props:{className:[l],style:m},children:[{type:a,tag:g,props:{},children:[{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{style:e},children:[{type:b,value:"tensorman run --gpu --python3 --root --name CONTAINER_NAME bash"}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[]}]}]}]},{type:b,value:d},{type:a,tag:h,props:{},children:[{type:b,value:"Once you've made the changes needed, open another terminal and save it as a new image:"}]},{type:b,value:d},{type:a,tag:i,props:{className:[j]},children:[{type:a,tag:k,props:{className:[l],style:m},children:[{type:a,tag:g,props:{},children:[{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{style:e},children:[{type:b,value:"tensorman save CONTAINER_NAME IMAGE_NAME"}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[]}]}]}]},{type:b,value:d},{type:a,tag:E,props:{id:an},children:[{type:a,tag:n,props:{href:"#running-the-custom-image",ariaHidden:o,tabIndex:p},children:[{type:a,tag:c,props:{className:[q,r]},children:[]}]},{type:b,value:ao}]},{type:b,value:d},{type:a,tag:h,props:{},children:[{type:b,value:"You should then be able to specify that container with Tensorman, like so:"}]},{type:b,value:d},{type:a,tag:i,props:{className:[j]},children:[{type:a,tag:k,props:{className:[l],style:m},children:[{type:a,tag:g,props:{},children:[{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{style:e},children:[{type:b,value:"tensorman =IMAGE_NAME run --gpu bash"}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[]}]}]}]},{type:b,value:d},{type:a,tag:"blockquote",props:{},children:[{type:b,value:d},{type:a,tag:h,props:{},children:[{type:b,value:"The "},{type:a,tag:g,props:{},children:[{type:b,value:"--python3"}]},{type:b,value:" and "},{type:a,tag:g,props:{},children:[{type:b,value:"--jupyter"}]},{type:b,value:" flags do nothing for custom containers, but "},{type:a,tag:g,props:{},children:[{type:b,value:"--gpu"}]},{type:b,value:" is required to enable runtime support for the GPU."}]},{type:b,value:d}]},{type:b,value:d},{type:a,tag:E,props:{id:ap},children:[{type:a,tag:n,props:{href:"#removing-the-custom-image",ariaHidden:o,tabIndex:p},children:[{type:a,tag:c,props:{className:[q,r]},children:[]}]},{type:b,value:aq}]},{type:b,value:d},{type:a,tag:h,props:{},children:[{type:b,value:"Images saved through Tensorman are manageable through Tensorman. Listing and removing work the same way:"}]},{type:b,value:d},{type:a,tag:i,props:{className:[j]},children:[{type:a,tag:k,props:{className:[l],style:m},children:[{type:a,tag:g,props:{},children:[{type:a,tag:c,props:{className:[f]},children:[{type:a,tag:c,props:{style:e},children:[{type:b,value:"tensorman remove IMAGE_NAME"}]}]},{type:b,value:d},{type:a,tag:c,props:{className:[f]},children:[]}]}]}]},{type:b,value:d},{type:a,tag:w,props:{id:ar},children:[{type:a,tag:n,props:{href:"#pull-requests-welcome",ariaHidden:o,tabIndex:p},children:[{type:a,tag:c,props:{className:[q,r]},children:[]}]},{type:b,value:as}]},{type:b,value:d},{type:a,tag:h,props:{},children:[{type:b,value:"To see the source code and suggest features, visit the project on "},{type:a,tag:n,props:{href:"https:\u002F\u002Fgithub.com\u002Fpop-os\u002Ftensorman",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:b,value:"GitHub"}]},{type:b,value:"."}]}]},dir:"\u002F",path:"\u002Ftensorman",extension:".md",createdAt:aS,updatedAt:aS,authors:[{username:"storyaddict",commitUrl:"https:\u002F\u002Fgithub.com\u002Fsystem76\u002Fdocs\u002Fcommit\u002Fc9848a422ea3c18962f9e13ead04a335c884b43e",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F55410594?v=4",profileUrl:"https:\u002F\u002Fgithub.com\u002Fstoryaddict"},{username:"btkostner",commitUrl:"https:\u002F\u002Fgithub.com\u002Fsystem76\u002Fdocs\u002Fcommit\u002Fe54bdadaf285cdda4147b9f7bfc8a53111584b5a",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F3385679?v=4",profileUrl:"https:\u002F\u002Fgithub.com\u002Fbtkostner"},{username:"jacobgkau",commitUrl:"https:\u002F\u002Fgithub.com\u002Fsystem76\u002Fdocs\u002Fcommit\u002Fbf9745a67294d8447e960c172f22d8d1da665bbe",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7199422?v=4",profileUrl:"https:\u002F\u002Fgithub.com\u002Fjacobgkau"}]},_img:{}}],fetch:{},mutations:void 0}}("element","text","span","\n","color: var(--code-0F)","line","code","p","div","nuxt-content-highlight","pre","shiki","background-color: var(--code-00)","a","true",-1,"icon","icon-link","color: var(--code-0A)","color: #D33682",", ",2,"h2","color: var(--code-0E)","color: var(--code-0C)","=","tensorflow-toolchain",3,"Tensorman.toml","color: #657B83","h3","$","tensorman",")","docker_flags"," command can be used:","TensorFlow","Tensorman","installing-tensorman","Installing Tensorman","about-tensorman","About Tensorman","comparison-to-docker-command","Comparison to Docker Command","updating-and-installing-containers","Updating and installing containers","running-commands-in-containers","Running commands in containers","python-api-example","Python API example","setting-per-run","Setting per-run","setting-per-project","Setting per-project","tensormantoml","setting-per-user","Setting per-user","listing-active-container-version","Listing active container version","removing-containers","Removing containers","listing-installed-containers","Listing installed containers","creating-a-custom-image","Creating a custom image","build-new-image","Build new image","running-the-custom-image","Running the custom image","removing-the-custom-image","Removing the custom image","pull-requests-welcome","Pull requests welcome","u","docker","UID","+"," tf.constant([","1.0","2.0","3.0","4.0","5.0","6.0","], shape","[","2","3","], name"," = [ ","'-p'","'8080:8080'"," ]"," = ","variants"," = [","'gpu'","]","2021-10-07T18:31:45.988Z")));