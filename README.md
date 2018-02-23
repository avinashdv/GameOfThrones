# Game Of Thrones Info

## Getting Started

Just Clone or Download the zip file, unzip it and run it using nginx server after configuring nginx.conf as stated below.

### Prerequisites

Software's needed to open these files are either sublime or atom and Nginx web server.

## Configuring Nginx Server

Download the GOT file and configure the Nginx Server(nginx.conf) with the updated locations of root on nginx.conf also the root for /err404.html and /err500.html with the updated locations on ur system to check the result.

## Example Configuring Nginx
Just download and install the Nginx server goto -> nginx -> conf -> nginx.conf , open the nginx.conf in a sublime text editor on line 43 update the root like **root C:/Users/personal/Desktop/assnmt-5/** to the location of the file downloaded, same with error pages on line 55 and 63 edit the root like **root C:/Users/personal/Desktop/assnmt-5/errorpages** to the location of the file including assnmt-5 and the **errorpages** is default. These are the steps to complete configuration.


## Built With

* [Sublime](https://www.sublimetext.com/) - A Text IDE

## Note
 
> The above web app doesn't work without using Nginx server as the server is rewritten for the html5Mode to work and also it's configured to use the custom error pages defined, only changing the roots of nginx.conf file as stated in **Configuring Nginx Server** and **Example Configuring Nginx** on the top will make the web app work without errors.

## Authors

* **Avinash.DV** 
