#### Portfolio Website

## 22.02
* decided to do the portfolio website with react and sanity.io because I found a tutorial that builds a portfolio website from scratch with these frameworks
* had a lot of issues to even get it starting. npm audit said that there where a total of 24 vulnerabilities some of them low some of them middle and some of them high
* after trying to understand what all those vulnerabilities mean I reinstalled npm and created the whole project again and now I am only having this one error "tsutils@3.20.0 requires a peer of typescript@>=2.8.0" and some optional and I cant find anything about how to be able to fix them on google!!! I decided to ignore and move on <br/> hopefully this is not to important ^^
![Error_1](/img/Error_npm_audit.PNG)

## 23.02
* followed the tutorial and stopped because I needed to checkout more how __tailwindCSS__ is functioning. 
* played around with it a lot
* the tutorial I follow is implementing tailwind only by using CDN / searched on how to install properly - seems a bit more complex then pulling via CDN because there is a lot of stuff to configure and to install / I may check it out on a local testing tomorrow

## 24.02
* started testing how to install tailwind properly at first locally -> worked great and I even got no errors when creating react-app with npm (mby this is a problem due to the fact that I am working on my OneDrive cloudstorage???!?!?1)
* trying to install tailwindcss into my existing project / worked, but I am having trouble to understand how to import custom fonds as it was very easy to reference them before...
* after some digging I found a way to implement font families and call them inside of a class :) / I still got a problem when I want to change the weight of the font when going into the activeClassName -> dont know why it isn't changing it's weight...
* got Sanity.io running and made it customizable

## 25.02
* worked on singlePostPage
* cant get it to work when I want it to redirect to singlePostPage it is stuck on the "Loading..."
* WTF!!!!!! can't find the error!!!!! I dont know where I did something wrong. It only says that singlePost is null but that cant really be...
* I am going to start over again....
* started rewriting and now it is even not working at an earlier stage!!!!!!!!!!!!!

## 26.02
* found the error: it was because it wasnt very obvious to see because it was missing one " in the description on what to fetch from the sanityClient and this is not fromatted as it would normally be...
![TypeError_1](/img/Error_project_type_1.PNG) ![TypeError_2](/img/Error_project_type_2.PNG)  __!!!!!!!!!!!!!!!1111__
* I should get better in debugging a lot because I can't loose a day or two only for those kinds of problems, but I have to say that the error was not that easy to find yesterday when looking into the console for the SinglePost-Error. I don't know why...