# http2dns
[![Build Status](https://travis-ci.org/betrisey/http2dns.svg)](https://travis-ci.org/betrisey/http2dns)

![useless firewall gif](http://imgur.com/6sHprW1.gif)

This proxy allows you to bypass some of the firewall asking you to log on a captive portal.
## Installation
```bash
git clone https://github.com/betrisey/http2dns.git
cd http2dns
npm install
```
## Start the proxy
```sudo``` is required for ports ≤ 1024.
```bash
sudo node app.js
```
You can use a custom port.
```bash
sudo node app.js [port]
```
## Proxy settings
![proxy settings](http://i.imgur.com/poqsIr8.png)
