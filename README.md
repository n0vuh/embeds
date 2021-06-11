# Discord embeds using EJS and Express
[![Coverage Status](https://coveralls.io/repos/github/n0vuh/embeds/badge.svg?branch=main)](https://coveralls.io/github/n0vuh/embeds?branch=main)
**Usage Example:**
![Example](https://i.imgur.com/LTLC0Uc.png)

## URL & Options
- Base URL is https://embed.novuh.dev/
- You can add onto this like so: https://embed.novuh.dev/?title=title (Title query param)
- There is also ?title=title&desc=description
- Some other options include &color=`hex value i.e FFFFF0`
- &image=`direct image url`
- `+` and `%20` represent spaces. i.e: embed.novuh.dev/?title=title&desc=description+here%20space

## Important Notes
- **Symbols are escaped automatically, however please use a WSGI/Passenger system such as Phusion for better safety.**
- **Please credit me or consider donating, thank you.**
