# Maha Vishnu Council – Vite + React

## Run (Windows Command Prompt)
    cd /d D:\path\to\maha-vishnu-login
    npm install
    npm run dev          # http://localhost:5173
    npm run build        # production files in /dist

## Pages
    /                      Login
    /mark                  Enter Roll No
    /marks/AAA0098         Student Marks View (valid reg no only)
    /marksheet/AAA0098     Marksheet   (opens in a new tab from the marks page)
    /certificate/AAA0098   Certificate (opens in a new tab from the marks page)

Valid register numbers: AAA0098, AAA1904 – edit them in src/data/students.js.
Unknown numbers on /mark fall back to the API lookup (src/services/marksheet.js).

## Student data
src/data/students.js has two parts:
  DEPARTMENTS  hard-coded subjects (name, max, min, code) per department
  STUDENTS     per register number: details + department + marks (in subject order)
AAA0098 is a fictional SAMPLE student; replace it with real data.

## Images (put in /public, see public/assets/images/README.txt)
    assets/images/marksheet/header.png, footer.png
    assets/images/certificate/header1.png, footer1.png
    assets/images/background/weatherbg1.jpg, login-register.jpg
    students/AAA0098.jpg   (then set photo: '/students/AAA0098.jpg')
The logo is used as the student photo until you set `photo`.

## Deploying
Send all routes to index.html (public/.htaccess for Apache and public/_redirects for Netlify are included).
