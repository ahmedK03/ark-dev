
# GitHub Starred Repos

this project is about getting the Starred Repos in the last 30 days from the end point "https://api.github.com/search/repositories?q=created:%3E2017-10-22&sort=stars&order=desc"

### Framework used: 
- Angular V12.

### Packages used:
- jquery 
- popper.js 
- Bootstrap
- ngx-pagination "for the pagination control"
- font awesome.

#### how to use it:
 
- first run the command "ng serve --open"
- once the app is opened. it'll automatically open the first page.
- list of all 30 pages are on the bottom of the web page.
- on clicking on the Repo title, it'll open another page with the details without reloading the page
