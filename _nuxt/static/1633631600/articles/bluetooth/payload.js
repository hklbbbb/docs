__NUXT_JSONP__("/articles/bluetooth", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al){return {data:[{article:{slug:A,description:"Here is how to fix several common Bluetooth issues with your computer.\n",title:x,keywords:[A,"mouse","audio"],facebookImage:"\u002F_nuxt\u002Fimages\u002Fbluetooth-facebookImage.jpg",twitterImage:"\u002F_nuxt\u002Fimages\u002Fbluetooth-twitterImage.jpg",hidden:false,section:"network-troubleshooting",tableOfContents:true,toc:[{id:B,depth:v,text:C},{id:D,depth:n,text:E},{id:F,depth:n,text:G},{id:H,depth:n,text:I},{id:J,depth:n,text:K},{id:L,depth:n,text:M},{id:N,depth:n,text:O},{id:P,depth:v,text:Q},{id:R,depth:n,text:S},{id:T,depth:v,text:x},{id:U,depth:n,text:V},{id:W,depth:n,text:X},{id:Y,depth:v,text:Z},{id:_,depth:n,text:$},{id:aa,depth:n,text:ab},{id:ac,depth:n,text:ad}],body:{type:"root",children:[{type:a,tag:w,props:{id:B},children:[{type:a,tag:g,props:{href:"#important-notes-about-bluetooth",ariaHidden:h,tabIndex:i},children:[{type:a,tag:d,props:{className:[j,k]},children:[]}]},{type:b,value:C}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Bluetooth is a bit odd.\nThere are a lot of factors that go into whether Bluetooth devices work together as expected."}]},{type:b,value:c},{type:a,tag:o,props:{id:D},children:[{type:a,tag:g,props:{href:"#bluetooth-version",ariaHidden:h,tabIndex:i},children:[{type:a,tag:d,props:{className:[j,k]},children:[]}]},{type:b,value:E}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Bluetooth 5.0 is backwards compatible with older Bluetooth versions, but older bluetooth versioned devices are not always compatible with newer versions or devices."}]},{type:b,value:c},{type:a,tag:o,props:{id:F},children:[{type:a,tag:g,props:{href:"#signal-interference",ariaHidden:h,tabIndex:i},children:[{type:a,tag:d,props:{className:[j,k]},children:[]}]},{type:b,value:G}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Bluetooth uses the same bandwidth as the 2.4Ghz Wi-Fi band, and in most of our machines it is on the same chip as the Wi-Fi module. They usually have two antennae, one for Bluetooth, and one for Wi-Fi, but it is possible for other Wi-Fi or Bluetooth devices signals to cross and to cause connection issues. If users are in an area crowded with other Wi-Fi networks or devices, the interference from these outside sources can impact performance and range."}]},{type:b,value:c},{type:a,tag:o,props:{id:H},children:[{type:a,tag:g,props:{href:"#device-specific-differences",ariaHidden:h,tabIndex:i},children:[{type:a,tag:d,props:{className:[j,k]},children:[]}]},{type:b,value:I}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Every Bluetooth device is different. They use the same or similar protocols, but the printed circuit boards (PCBs), are specific to each device, and the firmware they are running is often custom designed, and closed-source."}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Some of the code and technologies that make Bluetooth work reliably are patented, and only device vendors who have licensed the permission to use that patented technology will be able to experience the full benefits (for more information see the \"Audio Input\u002FOutput\" section below.)"}]},{type:b,value:c},{type:a,tag:ae,props:{},children:[{type:b,value:c},{type:a,tag:e,props:{},children:[{type:a,tag:y,props:{},children:[{type:b,value:z}]},{type:b,value:" Some devices, such as Apple or Sony headphones, particularly take advantage of these patents and technologies to ensure they work well with similar devices. Often these devices are not tested against Linux machines. That doesn't mean these devices will not work, only that behavior or performance may vary."}]},{type:b,value:c}]},{type:b,value:c},{type:a,tag:o,props:{id:J},children:[{type:a,tag:g,props:{href:"#kernel-versions",ariaHidden:h,tabIndex:i},children:[{type:a,tag:d,props:{className:[j,k]},children:[]}]},{type:b,value:K}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"As the Linux kernel develops, support for more devices are added. Sometimes Bluetooth devices will work better in a different kernel version."}]},{type:b,value:c},{type:a,tag:o,props:{id:L},children:[{type:a,tag:g,props:{href:"#os-versions",ariaHidden:h,tabIndex:i},children:[{type:a,tag:d,props:{className:[j,k]},children:[]}]},{type:b,value:M}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Similar to the kernel versions. Improvements are often made in newer versions of Ubuntu and Pop!_OS. Running software updates is always a good idea, followed by a reboot."}]},{type:b,value:c},{type:b,value:c},{type:a,tag:o,props:{id:N},children:[{type:a,tag:g,props:{href:"#configuration-issues",ariaHidden:h,tabIndex:i},children:[{type:a,tag:d,props:{className:[j,k]},children:[]}]},{type:b,value:O}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Sometimes Bluetooth devices are working correctly, but something in settings needs to be reset."}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"The easiest way to test this is to \"forget\" the paired Bluetooth device, and pair it again."}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"A more thorough way of testing this would be to create a "},{type:a,tag:af,props:{to:"\u002Farticles\u002Fother-accounts"},children:[{type:b,value:"test user"}]},{type:b,value:", or boot from a "},{type:a,tag:af,props:{to:"\u002Farticles\u002Flive-disk"},children:[{type:b,value:"Live Disk"}]},{type:b,value:" to see if Bluetooth works in either case.\nIf it does, config files may need deleted. If it doesn't (especially in the Live Disk), reinstalling the OS may solve the problem.\nReinstalling the OS won't affect Bluetooth hardware directly, but resetting and starting with a clean slate can solve a slew of problems and save time hunting for a specific file or bug."}]},{type:b,value:c},{type:a,tag:w,props:{id:P},children:[{type:a,tag:g,props:{href:"#setting-expectations",ariaHidden:h,tabIndex:i},children:[{type:a,tag:d,props:{className:[j,k]},children:[]}]},{type:b,value:Q}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Because of all of these factors, if the steps outlined in the Bluetooth troubleshooting article, and the previous troubleshooting steps don't resolve the issue, the issue may not be resolved at all.\nOr, in a future update or change to the system, the devices may start working again. In some cases (many cases) users will not experience any issue with Bluetooth at all."}]},{type:b,value:c},{type:a,tag:o,props:{id:R},children:[{type:a,tag:g,props:{href:"#audio-inputoutput",ariaHidden:h,tabIndex:i},children:[{type:a,tag:d,props:{className:[j,k]},children:[]}]},{type:b,value:S}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Bluetooth audio devices, such as headphones and speakers, usually default to the A2DP protocol, which works effectively as an audio output source."}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Bluetooth devices with microphones built in, can be used if the device supports HFP\u002FHSP. However, without the technology that companies like Sony have patented, the solution is to divide up the audio stream so that some of it is used for audio out and some for audio in.\nThis process lowers the sound quality of the stream when in HSP\u002FHFP mode, so audio may be \"tinny,\" compressed (lower-fidelity), or at a lower volume. That is expected behavior."}]},{type:b,value:c},{type:a,tag:w,props:{id:T},children:[{type:a,tag:g,props:{href:"#bluetooth-troubleshooting",ariaHidden:h,tabIndex:i},children:[{type:a,tag:d,props:{className:[j,k]},children:[]}]},{type:b,value:x}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Bluetooth issues can be troubleshooted in several ways.  The first thing to check is toggling airplane mode which will sometimes get Bluetooth functioning again.  Next, make sure Bluetooth is enabled in the top bar, or in the "},{type:a,tag:u,props:{},children:[{type:b,value:ag}]},{type:b,value:" system settings."}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Then, try reinstalling Bluetooth related software with this command:"}]},{type:b,value:c},{type:a,tag:p,props:{className:[q]},children:[{type:a,tag:r,props:{className:[s],style:t},children:[{type:a,tag:m,props:{},children:[{type:a,tag:d,props:{className:[f]},children:[{type:a,tag:d,props:{style:l},children:[{type:b,value:"sudo apt install --reinstall bluez gnome-bluetooth indicator-bluetooth pulseaudio-module-bluetooth"}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[f]},children:[]}]}]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:a,tag:y,props:{},children:[{type:b,value:z}]},{type:b,value:" After reinstalling the above packages, fully shut down the machine and then power it back on, rather than rebooting. This ensures the hardware completely resets."}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"If "},{type:a,tag:m,props:{},children:[{type:b,value:"tlp"}]},{type:b,value:" is installed, then there may be settings interfering with Bluetooth functionality.  Edit this file and disable Wifi and Bluetooth power saving features:"}]},{type:b,value:c},{type:a,tag:p,props:{className:[q]},children:[{type:a,tag:r,props:{className:[s],style:t},children:[{type:a,tag:m,props:{},children:[{type:a,tag:d,props:{className:[f]},children:[{type:a,tag:d,props:{style:l},children:[{type:b,value:"sudo gedit \u002Fetc\u002Fdefault\u002Ftlp"}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[f]},children:[]}]}]}]},{type:b,value:c},{type:a,tag:o,props:{id:U},children:[{type:a,tag:g,props:{href:"#useful-programs",ariaHidden:h,tabIndex:i},children:[{type:a,tag:d,props:{className:[j,k]},children:[]}]},{type:b,value:V}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"There is a program called "},{type:a,tag:u,props:{},children:[{type:b,value:ah}]},{type:b,value:" which is included with "},{type:a,tag:u,props:{},children:[{type:b,value:"XFCE"}]},{type:b,value:". It can sometimes pair and trust Bluetooth devices better than the default "},{type:a,tag:u,props:{},children:[{type:b,value:ag}]},{type:b,value:" settings. Install it with:"}]},{type:b,value:c},{type:a,tag:p,props:{className:[q]},children:[{type:a,tag:r,props:{className:[s],style:t},children:[{type:a,tag:m,props:{},children:[{type:a,tag:d,props:{className:[f]},children:[{type:a,tag:d,props:{style:l},children:[{type:b,value:"sudo apt install blueman"}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[f]},children:[]}]}]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Then, run "},{type:a,tag:u,props:{},children:[{type:b,value:ah}]},{type:b,value:". Check for the device being trusted, and also try re-pairing in that program."}]},{type:b,value:c},{type:a,tag:o,props:{id:W},children:[{type:a,tag:g,props:{href:"#useful-commands",ariaHidden:h,tabIndex:i},children:[{type:a,tag:d,props:{className:[j,k]},children:[]}]},{type:b,value:X}]},{type:b,value:c},{type:a,tag:p,props:{className:[q]},children:[{type:a,tag:r,props:{className:[s],style:t},children:[{type:a,tag:m,props:{},children:[{type:a,tag:d,props:{className:[f]},children:[{type:a,tag:d,props:{style:l},children:[{type:b,value:"lsmod "}]},{type:a,tag:d,props:{style:ai},children:[{type:b,value:aj}]},{type:a,tag:d,props:{style:l},children:[{type:b,value:" grep bluetooth"}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[f]},children:[{type:a,tag:d,props:{style:l},children:[{type:b,value:"dmesg "}]},{type:a,tag:d,props:{style:ai},children:[{type:b,value:aj}]},{type:a,tag:d,props:{style:l},children:[{type:b,value:" grep Bluetooth"}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[f]},children:[]}]}]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"These will show if the Bluetooth module (driver) is loaded, and what the system messages are."}]},{type:b,value:c},{type:a,tag:p,props:{className:[q]},children:[{type:a,tag:r,props:{className:[s],style:t},children:[{type:a,tag:m,props:{},children:[{type:a,tag:d,props:{className:[f]},children:[{type:a,tag:d,props:{style:l},children:[{type:b,value:"sudo systemctl status bluetooth"}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[f]},children:[]}]}]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"This will check to see if the service that handles Bluetooth is running."}]},{type:b,value:c},{type:a,tag:p,props:{className:[q]},children:[{type:a,tag:r,props:{className:[s],style:t},children:[{type:a,tag:m,props:{},children:[{type:a,tag:d,props:{className:[f]},children:[{type:a,tag:d,props:{style:l},children:[{type:b,value:"rfkill list"}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[f]},children:[{type:a,tag:d,props:{style:l},children:[{type:b,value:"sudo rfkill unblock bluetooth"}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[f]},children:[]}]}]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"If both Bluetooth and Wireless are soft blocked or if the Wireless is soft blocked run this command to unblock:"}]},{type:b,value:c},{type:a,tag:p,props:{className:[q]},children:[{type:a,tag:r,props:{className:[s],style:t},children:[{type:a,tag:m,props:{},children:[{type:a,tag:d,props:{className:[f]},children:[{type:a,tag:d,props:{style:l},children:[{type:b,value:"sudo rfkill unblock all"}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[f]},children:[]}]}]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"This will check to see Bluetooth is blocked, and if so, unblock it."}]},{type:b,value:c},{type:a,tag:p,props:{className:[q]},children:[{type:a,tag:r,props:{className:[s],style:t},children:[{type:a,tag:m,props:{},children:[{type:a,tag:d,props:{className:[f]},children:[{type:a,tag:d,props:{style:l},children:[{type:b,value:"pactl load-module module-bluetooth-discover"}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[f]},children:[]}]}]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"This will load the PulseAudio module responsible for Bluetooth Audio.  Typically, it's loaded by default, but sometimes a manual loading can get Bluetooth headsets working again."}]},{type:b,value:c},{type:a,tag:p,props:{className:[q]},children:[{type:a,tag:r,props:{className:[s],style:t},children:[{type:a,tag:m,props:{},children:[{type:a,tag:d,props:{className:[f]},children:[{type:a,tag:d,props:{style:l},children:[{type:b,value:"sudo btmon"}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[f]},children:[]}]}]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"This will show all Bluetooth related messages.  Try leaving this command running while pairing or using a device to see any error messages or failures."}]},{type:b,value:c},{type:a,tag:w,props:{id:Y},children:[{type:a,tag:g,props:{href:"#additional-info",ariaHidden:h,tabIndex:i},children:[{type:a,tag:d,props:{className:[j,k]},children:[]}]},{type:b,value:Z}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Here are a few additional tidbits about the Bluetooth system that may help with troubleshooting."}]},{type:b,value:c},{type:a,tag:o,props:{id:_},children:[{type:a,tag:g,props:{href:"#controlling-audio",ariaHidden:h,tabIndex:i},children:[{type:a,tag:d,props:{className:[j,k]},children:[]}]},{type:b,value:$}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Once you are connected to a Bluetooth speaker, you may need to change where your current audio is \"routed\". You can get a more advanced interface to settings on audio with the program called PulseAudio Volume Control. To install, run this command:"}]},{type:b,value:c},{type:a,tag:p,props:{className:[q]},children:[{type:a,tag:r,props:{className:[s],style:t},children:[{type:a,tag:m,props:{},children:[{type:a,tag:d,props:{className:[f]},children:[{type:a,tag:d,props:{style:l},children:[{type:b,value:"sudo apt install pavucontrol"}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[f]},children:[]}]}]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"There will be a drop-down in the Playback tab for each of your applications that is outputting sound that you should be able to change to your Bluetooth speaker."}]},{type:b,value:c},{type:a,tag:o,props:{id:aa},children:[{type:a,tag:g,props:{href:"#linux-firmware",ariaHidden:h,tabIndex:i},children:[{type:a,tag:d,props:{className:[j,k]},children:[]}]},{type:b,value:ab}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Occasionally the kernel and\u002For Linux firmware will have problems.  Sometimes, newer Linux firmware packages will have fixed bugs that aren't yet in the repositories.  They can be downloaded from here:"}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:a,tag:g,props:{href:ak,rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:b,value:ak}]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Then they can be installed with this command:"}]},{type:b,value:c},{type:a,tag:p,props:{className:[q]},children:[{type:a,tag:r,props:{className:[s],style:t},children:[{type:a,tag:m,props:{},children:[{type:a,tag:d,props:{className:[f]},children:[{type:a,tag:d,props:{style:l},children:[{type:b,value:"sudo dpkg -i linux-firmware_#."}]},{type:a,tag:d,props:{style:"color: #657B83"},children:[{type:b,value:"###.#_all.deb"}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[f]},children:[]}]}]}]},{type:b,value:c},{type:a,tag:ae,props:{},children:[{type:b,value:c},{type:a,tag:e,props:{},children:[{type:a,tag:y,props:{},children:[{type:b,value:z}]},{type:b,value:" You'll need to replace the nubmers\u002Ffile name with the most current version after downloading it."}]},{type:b,value:c}]},{type:b,value:c},{type:a,tag:o,props:{id:ac},children:[{type:a,tag:g,props:{href:"#file-transfer",ariaHidden:h,tabIndex:i},children:[{type:a,tag:d,props:{className:[j,k]},children:[]}]},{type:b,value:ad}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Sometimes, additional programs need to be installed for mobile equipment file transfer.  Please install the transfer tool with this command:"}]},{type:b,value:c},{type:a,tag:p,props:{className:[q]},children:[{type:a,tag:r,props:{className:[s],style:t},children:[{type:a,tag:m,props:{},children:[{type:a,tag:d,props:{className:[f]},children:[{type:a,tag:d,props:{style:l},children:[{type:b,value:"sudo apt install obexfs obexftp"}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[f]},children:[]}]}]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Then connect (pair) to the device and see if send files works.  To receive files over Bluetooth you will need to enable the option in "},{type:a,tag:u,props:{},children:[{type:b,value:"Personal File Sharing"}]},{type:b,value:"."}]}]},dir:"\u002F",path:"\u002Fbluetooth",extension:".md",createdAt:al,updatedAt:al,authors:[{username:"storyaddict",commitUrl:"https:\u002F\u002Fgithub.com\u002Fsystem76\u002Fdocs\u002Fcommit\u002Fc9848a422ea3c18962f9e13ead04a335c884b43e",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F55410594?v=4",profileUrl:"https:\u002F\u002Fgithub.com\u002Fstoryaddict"},{username:"btkostner",commitUrl:"https:\u002F\u002Fgithub.com\u002Fsystem76\u002Fdocs\u002Fcommit\u002Fe54bdadaf285cdda4147b9f7bfc8a53111584b5a",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F3385679?v=4",profileUrl:"https:\u002F\u002Fgithub.com\u002Fbtkostner"}]},_img:{}}],fetch:{},mutations:void 0}}("element","text","\n","span","p","line","a","true",-1,"icon","icon-link","color: var(--code-0F)","code",3,"h3","div","nuxt-content-highlight","pre","shiki","background-color: var(--code-00)","u",2,"h2","Bluetooth Troubleshooting","strong","NOTE:","bluetooth","important-notes-about-bluetooth","Important Notes About Bluetooth","bluetooth-version","Bluetooth version","signal-interference","Signal Interference","device-specific-differences","Device Specific Differences","kernel-versions","Kernel Versions","os-versions","OS Versions","configuration-issues","Configuration Issues","setting-expectations","Setting Expectations","audio-inputoutput","Audio Input\u002FOutput","bluetooth-troubleshooting","useful-programs","Useful Programs","useful-commands","Useful Commands","additional-info","Additional Info","controlling-audio","Controlling audio","linux-firmware","Linux Firmware","file-transfer","File Transfer","blockquote","nuxt-link","Bluetooth","Bluetooth Manager","color: var(--code-0A)","|","http:\u002F\u002Fmirrors.kernel.org\u002Fubuntu\u002Fpool\u002Fmain\u002Fl\u002Flinux-firmware\u002F","2021-10-07T18:31:45.984Z")));