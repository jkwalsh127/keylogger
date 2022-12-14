# Keylogger App

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white) **Package "EmailJS"**

## Description
This project was an exercise in demonstrating how easy it can be to code for a malicious keylogging tool. My research along with it was a valuable examination as to the vulnerabilities that developers commonly face when interacting with node modules. 

Creating a keylogger is as simple as adding an event listener that tracks key and/or button presses. Logs of everything a user types and clicks can be recorded, stored, and written to files. Anonymous proxy servers can be used to retrieve these files from their target's machine. 

For this demo, I built a react app to demonstrate how a simple keylogger can retrieve data. I added one small JavaScript file and installed a single dependency package. The "EmailJS" package is included to use their SMTP server to send emails containing the logged data. I setup a new gmail account that will send itself a message everytime a user types something within the app and then clicks their mouse or hits enter. In practice, the messages would contain every string of characters a user entered before submitting a form or field. 
While this is a simple design, it shows how a commonly used package can be utilized to launch a very serious invasion of people's property. 

![keylogger](https://user-images.githubusercontent.com/101354032/182764058-3421b94e-3362-46de-bc21-3f6454cdbf9c.gif)

### Discussion
---
While keyloggers are only considered the tip of the threat iceberg to individuals who's machines have been targetted, it should be obvious how devastating these tools can be. Since the software is locally present, a hacker can listen directly for the information they desire without having to work around measures like HTTPS encryption when intercepting internet traffic.

As developers, we shouldn't make the mistake of overlooking how easy it can for bad actors to compromise an application's package dependency, insert that package into an application's build pipeline, and make it to deployment without any validation.

Common ways hackers access pre-vetted npm packages:
- Impersonating legitmate packages
- Taking over abondoned packages
- Attack through network vuleralbilities, like the direct hijacking of a package publisher's npm account

Once in a package and downloaded onto a machine, there are many ways the malicious script can get up and running; it's as easy as using a "preinstall" directive in the "package.json" file to execute, even before the actual installation process has begun. What's even more dangerous is that it is possible for the script to be ran outside of the application and instead operate perpetually in the background of the machine. Known as a daemon, there are several methods to get the script up and running, without the target knowing and in a manner that removes the need for the application to be actively running.
While hackers aren't always able to spread malicious code to a large number of machines with each attack, utilizing packages that are frequently required as dependencies allows malicious code to propogate across networks. 

An interesting note is that much of the "malicious" code out there is actually initiated by individuals or entitities that claim no harm is intended. For example, "penetration tests" are often conducted to discover specific vulnerabilities or even just to examine how far the code can be spread. Sometimes the code can be more functional, but still not too harmful. An example of this is how scripts can be used to take a share of a machine's computing power and used to mine cryptocurrencies. 

#### Credits
---
All in all, security is a fascinating topic, and good programmers should have a grasp to better understand how the trafficking of software and the exchange of information operates. Thanks to the team at <a href="https://ondecentral.com/">***Decentral***</a> for providing the code challenge and prompting the research.

